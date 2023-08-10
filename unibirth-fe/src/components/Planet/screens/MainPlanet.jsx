import React, { useEffect, useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import { BiSearch, BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigation } from "../../../hooks/useNavigation";
import CanvasPlanet from "../blocks/CanvasPlanet";
import ListBestStars from "../blocks/ListBestStars";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  nicknameState,
  backgroundflagState,
  currentplanetState,
} from "../../../recoil/atoms";
import Footer2 from "../../../common/blocks/Footer2";

const MainPlanet = () => {
  const [, setBackgroundflag] = useRecoilState(backgroundflagState);
  useEffect(() => {
    setBackgroundflag(false);
  }, []);

  const {
    navigateToLoginMember,
    refreshPage,
    navigateToMemberProfile,
    navigateToSearchQuration,
    navigateToDetailPlanet,
  } = useNavigation();

  // 행성 처음 위치
  const currentPlanetId = useRecoilValue(currentplanetState);
  const [currentPlanet, setCurrentPlanet] = useState(currentPlanetId % 8);

  // 1. 케로셀 플래닛 아이디 전달 완료
  // 버튼 누르면 setplanetPosition바뀌도록
  // 처음 위치를 시작으로 버튼을 클릭할 때마다 인덱스 변경

  const nickname = useRecoilValue(nicknameState);

  const token = sessionStorage.getItem("accessToken");

  const mypageClick = () => {
    navigateToMemberProfile(nickname); // 화면 이동을 처리하는 함수를 호출합니다.
  };

  const buttonsFooter = [
    {
      component: Button1,
      className: "font-Pretendard",
      onClick: navigateToSearchQuration,
      icon: <BiSearch />,
    },
    {
      component: Button1,
      onClick: refreshPage,
      icon: <BiHomeAlt />,
    },
  ];

  if (token === null) {
    buttonsFooter.push({
      component: Button1,
      className: "font-Pretendard",
      value: "로그인",
      onClick: navigateToLoginMember,
    });
  } else {
    buttonsFooter.push({
      component: Button1,
      className: "font-Pretendard",
      onClick: mypageClick,
      icon: <CgProfile />,
    });
  }

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2 -translate-y-1/2 transform">
        {/* <ListSectionPlanet /> */}
      </div>
      <ListBestStars
        currentPlanet={currentPlanet}
        // setPlanetPosition={setPlanetPosition} 삭제 해야 할 것
      />
      <CanvasPlanet
        currentPlanet={currentPlanet}
        setCurrentPlanet={setCurrentPlanet}
        navigateToDetailPlanet={navigateToDetailPlanet}
      />
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 space-x-4">
        <Footer2 buttons={buttonsFooter} />
      </div>
    </div>
  );
};

export default MainPlanet;
