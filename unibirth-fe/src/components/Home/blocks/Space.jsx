import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import Star from "./star.png";
// import { OrbitControls } from "@react-three/drei";

function Space() {
  const starsRef = useRef();

  const texture = useLoader(THREE.TextureLoader, Star);

  const [starGeo, starMaterial] = useMemo(() => {
    const starGeo = new THREE.BufferGeometry();
    const vertices = [];
    const velocity = [];
    const acceleration = [];

    for (let i = 0; i < 1000; i++) {
      vertices.push(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
      );
      velocity.push(0);
      acceleration.push(0.003);
    }

    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    starGeo.setAttribute(
      "velocity",
      new THREE.Float32BufferAttribute(velocity, 1),
    );
    starGeo.setAttribute(
      "acceleration",
      new THREE.Float32BufferAttribute(acceleration, 0.5),
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 1.2,
      map: texture,
    });

    return [starGeo, starMaterial];
  }, [texture]);

  useFrame(() => {
    const position = starsRef.current.geometry.attributes.position;
    const velocity = starsRef.current.geometry.attributes.velocity;
    const acceleration = starsRef.current.geometry.attributes.acceleration;

    for (let i = 0; i < position.count; i++) {
      velocity.array[i] += acceleration.array[i];
      position.array[i * 3 + 1] -= velocity.array[i];

      if (position.array[i * 3 + 1] < -200) {
        position.array[i * 3 + 1] = 200;
        velocity.array[i] = 0;
      }
    }

    position.needsUpdate = true;

    starsRef.current.rotation.y += 0.002;
  });

  return (
    <>
      {/* <axesHelper scale={5} /> */}
      {/* <OrbitControls /> */}
      <points ref={starsRef}>
        <bufferGeometry attach="geometry" {...starGeo} />
        <pointsMaterial attach="material" {...starMaterial} />
      </points>
    </>
  );
}

export default Space;
