import { Canvas } from "@react-three/fiber";
import { JSX } from "react";
import Cube from "./Cube";
import Camera from "./Camera";

const Stage = (): JSX.Element => {
	return (
		<Canvas>
			<ambientLight intensity={1} />
			<directionalLight position={[0, 1, 1]} intensity={2} />
			<Camera />
			<Cube autoSpin />
		</Canvas>
	);
};

export default Stage;
