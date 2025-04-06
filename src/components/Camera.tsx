import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { JSX, useRef } from "react";
import { PerspectiveCamera as perspectiveCamera } from "three";
import THREE from "../libs/three";

const Camera = (): JSX.Element => {
	const ref = useRef<perspectiveCamera>(null);

	useFrame(() => {
		if (ref.current) {
			const origin = new THREE.Vector3(0, 0, 0);
			ref.current.lookAt(origin);
		}
	});
	return (
		<>
			<PerspectiveCamera
				ref={ref}
				makeDefault
				position={[-2, 2, 3]}
				fov={75}
				near={0.1}
			/>
			<OrbitControls />
		</>
	);
};

export default Camera;
