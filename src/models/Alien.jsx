// Alien.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import alienScene from "../assets/3d/alien.glb";

export function Alien({ islandPosition, islandScale }) {
  const alien = useGLTF(alienScene);
  const alienRef = useRef();

  useFrame((_, delta) => {
    alienRef.current.position.x = islandPosition[0];
    alienRef.current.position.y = islandPosition[1] + 10;
    alienRef.current.position.z = islandPosition[2];

    alienRef.current.rotation.x += 0.01 * delta;
    alienRef.current.rotation.y += 0.01 * delta;
    alienRef.current.rotation.z += 0.01 * delta;
  });

  return (
    <mesh ref={alienRef}>
      <primitive object={alien.scene} />
    </mesh>
  );
}
