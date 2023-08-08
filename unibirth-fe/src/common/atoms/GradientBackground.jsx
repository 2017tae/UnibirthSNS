import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function GradientBackground() {
  const { scene } = useThree();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const multiple = 1.5;
    canvas.width = window.innerWidth * multiple;
    canvas.height = window.innerHeight * multiple;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(
        0,
        canvas.height * 0.1,
        0,
        canvas.height * 0.9,
      );
      gradient.addColorStop(0, "black"); // black at the starting point
      gradient.addColorStop(0.4, "#030207"); // even darker purple
      gradient.addColorStop(0.8, "#120813"); // even darker purple
      gradient.addColorStop(1, "#300620");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    // // Apply dithering
    // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // const data = imageData.data;
    // for (let i = 0; i < data.length; i += 4) {
    //   const noise = (Math.random() - 0.5) * 10; // Adjust the magnitude of the noise here
    //   data[i] += noise; // Red channel
    //   data[i + 1] += noise; // Green channel
    //   data[i + 2] += noise; // Blue channel
    // }
    // ctx.putImageData(imageData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;
  }, [scene]);

  return null;
}

function Scene() {
  return (
    <>
      <GradientBackground />
      <Stars
        radius={100}
        depth={50}
        count={10000}
        factor={4}
        saturation={3}
        fade
      />
      {/* <color attach="background" args={["black"]} /> */}
    </>
  );
}

export default Scene;
