import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

type ViewActions = {
  reset: () => void;
  front: () => void;
  side: () => void;
  zoom: (factor: number) => void;
};

const previewUrl = `${import.meta.env.BASE_URL}models/outfit-hanger-preview.png`;

export const InteractiveHanger: React.FC = () => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const actionsRef = React.useRef<ViewActions | null>(null);
  const [status, setStatus] = React.useState<'loading' | 'ready' | 'fallback'>('loading');

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
    } catch {
      setStatus('fallback');
      return;
    }

    let frameId = 0;
    let disposed = false;
    let loadedModel: THREE.Group | null = null;
    let modelRadius = 1;
    let defaultDistance = 5;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f2eee7');
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 1000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 50;
    controls.target.set(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.98;
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    renderer.domElement.setAttribute('role', 'img');
    renderer.domElement.setAttribute('aria-label', 'Interactive 3D model of the pastel lavender Outfit Hanger');
    renderer.domElement.className = 'block h-full w-full';
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight('#fffaf1', '#a8a193', 1.15));
    const keyLight = new THREE.DirectionalLight('#fff7eb', 1.65);
    keyLight.position.set(-4, 7, 8);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight('#e6e0ff', 0.55);
    fillLight.position.set(6, 2, -5);
    scene.add(fillLight);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room).texture;
    scene.environment = environment;
    room.dispose();
    pmrem.dispose();

    const fitCamera = (keepZoom: boolean) => {
      if (!loadedModel) return;
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      const aspect = width / height;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      const verticalFov = THREE.MathUtils.degToRad(camera.fov);
      const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
      const neededDistance = Math.max(
        modelRadius / Math.sin(verticalFov / 2),
        modelRadius / Math.sin(horizontalFov / 2),
      ) * 1.2;
      const homeDirection = new THREE.Vector3(56, 42, 84).normalize();
      const direction = keepZoom ? camera.position.clone().sub(controls.target).normalize() : homeDirection;
      const zoomRatio = keepZoom ? camera.position.distanceTo(controls.target) / defaultDistance : 1;
      defaultDistance = neededDistance;
      const distance = neededDistance * zoomRatio;
      camera.position.copy(direction.multiplyScalar(distance));
      controls.minDistance = neededDistance * 0.62;
      controls.maxDistance = neededDistance * 2.6;
      controls.update();
    };

    const resizeObserver = new ResizeObserver(() => {
      if (disposed) return;
      renderer.setSize(mount.clientWidth, mount.clientHeight, false);
      fitCamera(true);
    });
    resizeObserver.observe(mount);

    const loader = new GLTFLoader();
    loader.load(
      `${import.meta.env.BASE_URL}models/outfit-hanger.glb`,
      (gltf) => {
        if (disposed) return;
        loadedModel = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(loadedModel);
        const center = bounds.getCenter(new THREE.Vector3());
        const size = bounds.getSize(new THREE.Vector3());
        modelRadius = Math.max(size.x, size.y, size.z) / 2;
        loadedModel.position.sub(center);
        loadedModel.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            const mesh = object as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });
        scene.add(loadedModel);
        fitCamera(false);
        const setView = (direction: THREE.Vector3) => {
          camera.position.copy(direction.normalize().multiplyScalar(defaultDistance)).add(controls.target);
          controls.update();
        };
        actionsRef.current = {
          reset: () => { controls.target.set(0, 0, 0); camera.position.copy(new THREE.Vector3(56, 42, 84).normalize().multiplyScalar(defaultDistance)); controls.update(); },
          front: () => setView(new THREE.Vector3(0, 0.12, 1)),
          side: () => setView(new THREE.Vector3(1, 0.12, 0)),
          zoom: (factor) => {
            const offset = camera.position.clone().sub(controls.target).multiplyScalar(factor);
            const nextDistance = THREE.MathUtils.clamp(offset.length(), controls.minDistance, controls.maxDistance);
            camera.position.copy(controls.target).add(offset.setLength(nextDistance));
            controls.update();
          },
        };
        setStatus('ready');
      },
      undefined,
      () => { if (!disposed) setStatus('fallback'); },
    );

    const render = () => {
      if (disposed) return;
      frameId = window.requestAnimationFrame(render);
      controls.update();
      renderer.render(scene, camera);
    };
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose());
        else if (mesh.material) mesh.material.dispose();
      });
      environment.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      actionsRef.current = null;
    };
  }, []);

  const actionButton = 'inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-[#dbd8cf] bg-white/90 px-3 text-xs font-semibold text-[#46534a] shadow-sm transition hover:border-[#aeb9aa] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#71866f] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45';

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#e4e2d9] bg-white shadow-[0_30px_90px_-45px_rgba(38,53,43,0.35)] sm:grid sm:grid-cols-[minmax(0,1.55fr)_minmax(190px,0.82fr)]">
      <div className="relative min-h-[320px] bg-[#f2eee7] sm:min-h-[430px]">
        {status === 'fallback' ? (
          <div className="flex h-full min-h-[320px] flex-col items-center justify-center p-5 text-center sm:min-h-[430px]">
            <img src={previewUrl} alt="Static preview of the lavender Outfit Hanger with two clips and end hooks" className="max-h-[350px] max-w-full object-contain" />
            <p className="mt-2 text-xs font-medium text-[#6b736b]">Static model preview · 3D is unavailable in this browser.</p>
          </div>
        ) : (
          <>
            <div ref={mountRef} className="absolute inset-0" />
            {status === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#f2eee7]">
                <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-3 text-sm font-medium text-[#536057] shadow-sm" role="status">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#87987d]" /> Loading the Outfit Hanger model…
                </div>
              </div>
            )}
            {status === 'ready' && (
              <>
                <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6d796c] shadow-sm">Interactive 3D</div>
                <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-2">
                  <p className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium text-[#667067] shadow-sm">Drag to rotate · scroll or pinch to zoom</p>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/80 bg-white/85 p-1.5 shadow-md backdrop-blur">
                    <button type="button" className={actionButton} aria-label="Show front view" onClick={() => actionsRef.current?.front()}>Front</button>
                    <button type="button" className={actionButton} aria-label="Show side view" onClick={() => actionsRef.current?.side()}>Side</button>
                    <span className="mx-0.5 h-5 w-px bg-[#e3e0d8]" aria-hidden="true" />
                    <button type="button" className={actionButton} aria-label="Zoom out" onClick={() => actionsRef.current?.zoom(1.18)}>−</button>
                    <button type="button" className={actionButton} aria-label="Zoom in" onClick={() => actionsRef.current?.zoom(0.84)}>+</button>
                    <button type="button" className={actionButton} aria-label="Reset 3D view" onClick={() => actionsRef.current?.reset()}>Reset</button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <aside aria-labelledby="hanger-details-title" className="flex flex-col border-t border-[#e7e5dd] bg-white px-5 py-6 sm:border-l sm:border-t-0 sm:px-5 sm:py-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#82917e]">Product details</p>
        <h2 id="hanger-details-title" className="mt-2 text-xl font-bold tracking-[-0.04em] text-[#26352b]">Outfit Hanger</h2>
        <p className="mt-2 text-xs leading-5 text-[#68716a]">A pastel lavender hanger designed to keep the pieces of one outfit together.</p>
        <div className="mt-5 rounded-xl bg-[#f5f4ef] px-3.5 py-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#899187]">Approximate size</p>
          <p className="mt-1 text-sm font-semibold text-[#3c4b40]">44 × 25 × 4 cm</p>
        </div>
        <ul className="mt-5 space-y-4">
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef0e9] text-[10px] font-bold text-[#657760]">01</span>
            <span><span className="block text-xs font-semibold text-[#344138]">Shirt-ready frame</span><span className="mt-1 block text-[11px] leading-4 text-[#747c74]">A broad shoulder shape with a lower bar.</span></span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef0e9] text-[10px] font-bold text-[#657760]">02</span>
            <span><span className="block text-xs font-semibold text-[#344138]">Two metal clips</span><span className="mt-1 block text-[11px] leading-4 text-[#747c74]">For holding trousers or skirts beneath the hanger.</span></span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef0e9] text-[10px] font-bold text-[#657760]">03</span>
            <span><span className="block text-xs font-semibold text-[#344138]">End accessory hooks</span><span className="mt-1 block text-[11px] leading-4 text-[#747c74]">Small hooks for keeping extras with the outfit.</span></span>
          </li>
        </ul>
        <p className="mt-auto pt-6 text-[10px] font-medium text-[#92998f]">Lavender frame · polished metal hardware</p>
      </aside>
    </div>
  );
};
