import { JSX } from "react";

const Cube = (): JSX.Element => {
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={"green"} />
		</mesh>
	);
};

export default Cube;
