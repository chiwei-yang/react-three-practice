import { useFrame } from "@react-three/fiber";
import { JSX, useRef } from "react";
import { Mesh } from "three";

interface CubeProps {
	autoSpin?: boolean;
}

const Cube = ({ autoSpin }: CubeProps): JSX.Element => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		const cube = ref.current;
		if (cube && autoSpin) {
			cube.rotation.x += 0.5 * delta;
			cube.rotation.z += 0.5 * delta;
		}
	});
	return (
		<mesh ref={ref}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={"aqua"} />
		</mesh>
	);
};

export default Cube;
