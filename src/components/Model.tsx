"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, TextureLoader } from "three";
import * as THREE from "three";
function MeshComponent({ baseTexture }: { baseTexture: string }) {
  const fileUrl = "/book/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  const texture = useLoader(TextureLoader, baseTexture);

  gltf.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Use 'instanceof' to check if 'child' is a Mesh
      // Configure the material to use the texture
      child.material.map = texture;
    }
  });
  useFrame(() => {
    mesh.current.rotation.y += 0.004;
  });
  return (
    <mesh ref={mesh} scale={[2, 2, 2]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Book({ baseTexture }: { baseTexture: string }) {
  return (
    <div className="w-full h-full mx-auto">
      <div
        style={{ width: "100%", height: "300px" }}
        className="object-cover object-center mx-auto"
      >
        <Canvas className="w-screen">
          <OrbitControls enableDamping enablePan={false} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent baseTexture={baseTexture} />
        </Canvas>
      </div>
    </div>
  );
}
