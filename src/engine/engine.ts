import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import donutUrl from "../assets/donut.glb?url";

class Engine {
  /** Private Fields */
  #setRef: (val: number) => void;

  /* @ts-ignore */
  #renderer: THREE.WebGLRenderer;
  /* @ts-ignore */
  #scene: THREE.Scene;
  /* @ts-ignore */
  #camera: THREE.PerspectiveCamera;
  #donut: THREE.Object3D | null = null;

  /** Constructor */
  constructor(setRef: (val: number) => void) {
    this.#setRef = setRef;
    this.#createScene();
    this.#setRef(window.requestAnimationFrame(this.#animate));
  }

  #createScene = () => {
    this.#scene = new THREE.Scene();
    this.#scene.background = new THREE.Color(0x9cbec9);

    this.#camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
    this.#camera.position.set(0, 0, 5);

    this.#renderer = new THREE.WebGLRenderer();
    this.#renderer.setSize(window.innerHeight * 0.7, window.innerHeight * 0.7);
    this.#renderer.domElement.width = window.innerHeight * 0.7;
    this.#renderer.domElement.height = window.innerHeight * 0.7;

    this.#renderer.toneMapping = THREE.ReinhardToneMapping;
    this.#renderer.toneMappingExposure = 1.2;
    this.#renderer.shadowMap.enabled = true;

    const hemiLight = new THREE.HemisphereLight(0xff5555, 0xff5555, 5);
    hemiLight.position.set(0, 0, 10);
    this.#scene.add(hemiLight);

    const spotlight = new THREE.SpotLight(0xff9999, 10);
    spotlight.position.set(0, 0, 10);
    spotlight.castShadow = true;
    spotlight.shadow.bias = -0.001;
    spotlight.shadow.mapSize.width = 1024 * 4;
    spotlight.shadow.mapSize.height = 1024 * 4;
    this.#scene.add(spotlight);

    //mount to DOM
    let sceneEl = document.getElementById("scene");
    sceneEl!.appendChild(this.#renderer.domElement);

    //load asset
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      donutUrl,
      (gltf) => {
        this.#donut = gltf.scene;
        this.#donut.traverse((n) => {
          if (n.isObject3D) {
            n.castShadow = true;
            n.receiveShadow = true;
          }
        });

        this.#donut.scale.set(5.5, 5.5, 5.5);
        this.#donut.rotation.set(0, 1, 1);
        this.#scene.add(this.#donut);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  };

  #animate = () => {
    this.#setRef(window.requestAnimationFrame(this.#animate));

    if (this.#donut){
        this.#donut.rotation.z += 0.019;
        this.#donut.rotation.y += 0.02;
    
        this.#renderer.render(this.#scene, this.#camera);
    }
  };
}

export default Engine;
