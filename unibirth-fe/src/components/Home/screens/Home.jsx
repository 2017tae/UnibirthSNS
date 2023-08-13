import React, { useEffect } from "react";
import HomeFooter from "../../../common/blocks/HomeFooter";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";
import { useRecoilState } from "recoil";
import { backgroundflagState } from "../../../recoil/atoms";

const Home = () => {
  const [, setBackgroundflag] = useRecoilState(backgroundflagState);
  useEffect(() => {
    setBackgroundflag(true);
  }, []);
  const { navigateToMainPlanet, navigateToLoginMember } = useNavigation();

  const buttons = [
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "시작하기",
      onClick: navigateToMainPlanet,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "로그인",
      onClick: navigateToLoginMember,
    },
  ];

  return (
    <div className="relative h-screen w-screen">
      <p className="absolute left-1/2 top-10 z-10 w-56 -translate-x-1/2 font-TAEBAEKmilkyway text-2xl text-white">
        세상에서
      </p>
      <p className="absolute left-1/2 top-20 z-10 w-56 -translate-x-1/2 font-TAEBAEKmilkyway text-2xl text-white">
        가장 빛나는 너의 별
      </p>
      <p className="absolute left-1/2 top-32 z-10 w-56 -translate-x-1/2 font-TAEBAEKmilkyway text-5xl text-white">
        uni-Birth
      </p>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        <HomeFooter buttons={buttons} />
      </div>
    </div>
  );
};

export default Home;
