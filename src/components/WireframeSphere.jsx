
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WireSphere() {
  const sphereRef = useRef();

  useFrame((_, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.08;
      sphereRef.current.rotation.x += delta * 0.025;
    }
  });

  const points = [];
  const count = 18;

  // Longitude lines
  for (let i = 0; i < count; i++) {
    const longitude = (i / count) * Math.PI;

    const curvePoints = [];
    for (let j = 0; j <= 80; j++) {
      const angle = (j / 80) * Math.PI * 2;

      curvePoints.push(
        new THREE.Vector3(
          Math.sin(longitude) * Math.cos(angle),
          Math.cos(longitude),
          Math.sin(longitude) * Math.sin(angle)
        )
      );
    }

    points.push(curvePoints);
  }

  // Latitude lines
  for (let i = 1; i < count; i++) {
    const latitude = (i / count) * Math.PI;
    const curvePoints = [];

    for (let j = 0; j <= 80; j++) {
      const angle = (j / 80) * Math.PI * 2;

      curvePoints.push(
        new THREE.Vector3(
          Math.sin(latitude) * Math.cos(angle),
          Math.cos(latitude),
          Math.sin(latitude) * Math.sin(angle)
        )
      );
    }

    points.push(curvePoints);
  }

  return (
    <group ref={sphereRef}>
      <Sphere args={[1, 16, 12]}>
        <meshBasicMaterial
          color="#10132b"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {points.map((linePoints, index) => (
        <Line
          key={index}
          points={linePoints}
          color="#263dff"
          lineWidth={0.7}
          transparent
          opacity={0.65}
        />
      ))}
    </group>
  );
}

export default function WireframeSphere() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <WireSphere />
      </Canvas>
    </div>
  );
}
