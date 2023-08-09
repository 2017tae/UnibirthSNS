// import React from "react";
import React, { useRef, useState, useEffect } from "react";
// import usePlanetApi from "../../../api/usePlanetApi";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import MeshPlanet from "../atoms/MeshPlanet";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { gsap } from "gsap";
import GradientBackground from "../../../common/atoms/GradientBackground";
import { useSetRecoilState } from "recoil";
import { backgroundflagState } from "../../../recoil/atoms";

// import { PLANET_LIST } from "../../../constants/constants";
const ListSectionPlanet = ({ navigateToDetailPlanet, planetPosition }) => {
  // 1. recoli로 현재 행성 위치 가져와야 함

  const setBackgroundflag = useSetRecoilState(backgroundflagState);
  useEffect(() => {
    setBackgroundflag(false);
  }, []);
  const controlsRef = useRef();
  const cameraRef = useRef();
  const [cameraState, setCameraState] = useState(true);

  useEffect(() => {
    // useEffect로 현재 행성이 바뀔 때마다 rotation할 수 있도록 해야 함
  }, [planetPosition]);

  const handleLeftClick = () => {
    controlsRef.current.autoRotate = true;
    controlsRef.current.autoRotateSpeed = -7.5; // or any speed you want
    setTimeout(() => {
      controlsRef.current.autoRotate = false;
    }, 1000); // rotate for 1 second
  };

  const handleRightClick = () => {
    controlsRef.current.autoRotate = true;
    controlsRef.current.autoRotateSpeed = 7.5; // or any speed you want
    setTimeout(() => {
      controlsRef.current.autoRotate = false;
    }, 1000); // rotate for 1 second
  };

  const handleMoveClick = () => {
    // Check cameraState to determine where to animate the camera
    if (cameraState) {
      gsap.to(cameraRef.current.position, {
        duration: 4,
        x: 100,
        y: 50,
        z: 100,
        onUpdate: () => controlsRef.current.update(),
      });
    } else {
      gsap.to(cameraRef.current.position, {
        duration: 3,
        x: 0,
        y: 0,
        z: 1,
        onUpdate: () => controlsRef.current.update(),
      });
    }

    // toggle the cameraState
    setCameraState(!cameraState);
  };

  return (
    <div className="absolute flex h-full w-full flex-row flex-wrap justify-center">
      <button
        className="absolute left-10 top-1/2 z-10 flex flex-col text-6xl text-white"
        onClick={handleLeftClick}
      >
        <BiSolidLeftArrow />
      </button>
      <button
        className="absolute right-10 top-1/2 z-10 flex flex-col text-6xl text-white"
        onClick={handleRightClick}
      >
        <BiSolidRightArrow />
      </button>
      <button
        className="absolute bottom-10 right-10 z-10 flex flex-col text-6xl text-white"
        onClick={handleMoveClick}
      >
        Move
      </button>

      <Canvas camera={{ position: [0, 0, 0] }}>
        <OrbitControls
          ref={controlsRef}
          args={[cameraRef.current]}
          enabled={true}
          rotateSpeed={-0.5}
          enablePan={false}

          // autoRotate={true}
          // autoRotateSpeed={0.5}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 1]} ref={cameraRef} />
        <axesHelper scale={0.5} />
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            radius={0.7}
            luminanceSmoothing={0.9}
            intensity={0.1}
          />
        </EffectComposer>
        <GradientBackground />
        {/* <color attach="background" args={["black"]} /> */}
        <MeshPlanet navigateToDetailPlanet={navigateToDetailPlanet} />
        <Stars
          radius={100}
          depth={50}
          count={10000}
          factor={4}
          saturation={3}
          fade
        />
      </Canvas>
    </div>
  );
};

export default ListSectionPlanet;