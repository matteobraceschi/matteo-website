import { useGLTF } from "@react-three/drei";
import { ComponentProps } from "react";

type Props = ComponentProps<"group">;

export default function TrainModel(props: Props) {
  const { scene } = useGLTF("/models/bullet_poly.glb");
  return <primitive object={scene} {...props} />;
}
