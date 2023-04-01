import { useEffect } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";
import "../styles/screens/home.scss";
import donutUrl from "../assets/donut.glb?url";

function Home() {
	useEffect(() => {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x9cbec9);

		const camera = new THREE.PerspectiveCamera(
			50,
			1,
			0.1,
			2000
		);
		camera.position.set(0, 0, 5);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerHeight * 0.7, window.innerHeight * 0.7);
		renderer.domElement.width = window.innerHeight * 0.7;
		renderer.domElement.height = window.innerHeight * 0.7;

		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 1.2;
		renderer.shadowMap.enabled = true;

		const hemiLight = new THREE.HemisphereLight(0xff5555, 0xff5555, 5);
		hemiLight.position.set(0, 0, 10);
		scene.add(hemiLight);

		const spotlight = new THREE.SpotLight(0xff9999, 10);
		spotlight.position.set(0, 0, 10);
		spotlight.castShadow = true;
		spotlight.shadow.bias = -0.001;
		spotlight.shadow.mapSize.width = 1024 * 4;
		spotlight.shadow.mapSize.height = 1024 * 4;
		scene.add(spotlight);

		//mount to DOM
		let sceneEl = document.getElementById("scene");
		sceneEl!.appendChild(renderer.domElement);

		//load asset
		const gltfLoader = new GLTFLoader();
		gltfLoader.load(donutUrl, (gltf) => {
			const donut = gltf.scene;
			donut.traverse(n => {
				if (n.isObject3D) {
					n.castShadow = true;
					n.receiveShadow = true;
				}
			})

			donut.scale.set(5.5, 5.5, 5.5);
			donut.rotation.set(0, 1, 1);
			scene.add(donut);

			function animate() {
				requestAnimationFrame(animate);

				donut.rotation.z += 0.019;
				donut.rotation.y += 0.02;

				renderer.render(scene, camera);
			}

			animate();
		}, undefined, (error) => {
			console.error(error);
		});
	}, []);

	return (
		<div className="home">
			<div className="title">Hello Donut World!</div>
			<div id="scene"></div>
			<div className="attribution">"Donut" (https://skfb.ly/oCW9I) by JoeDev is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</div>
		</div>
	);
}

export default Home;
