import { useGLTF } from "@react-three/drei";

export default function TrainModel(props: any) {
  const { scene } = useGLTF("/models/bullet_poly.glb");
  return <primitive object={scene} {...props} />;
}
