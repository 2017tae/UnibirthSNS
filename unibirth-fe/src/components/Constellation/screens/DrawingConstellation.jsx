import React, { useState } from "react";
import Button1 from "../../../common/atoms/Button1";
import Button2 from "../../../common/atoms/Button2";
import Header1 from "../../../common/blocks/Header1";
import { BiSearch } from "react-icons/bi";
import { useNavigation } from "../../../hooks/useNavigation";
import GridCustomConstellation from "../blocks/GridCustomConstellation";
import ListTemplateModalConstellation from "../blocks/ListTemplateModalConstellation";
import { useLocation } from "react-router";
import { useSetRecoilState } from "recoil";
import { backgroundflagState } from "../../../recoil/atoms";

const DrawingConstellation = () => {
  const backgroundflag = useSetRecoilState(backgroundflagState);
  backgroundflag(true);
  const location = useLocation();
  const { planetId, constellationName, constellationDescp } = location.state;
  const { navigateToBack } = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pointList, setPointList] = useState([]);
  const [lineList, setLineList] = useState([]);
  const [constellationColor, setconstellationColor] = useState("#00ffff");

  const handleModalOpen = () => {
    setIsModalOpen(true);
    console.log(constellationColor);
  };

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToBack,
      icon: <BiSearch />,
    },
    {
      component: Button1,
      className: "font-TAEBAEKmilkyway",
      value: "템플릿",
      onClick: handleModalOpen,
    },
  ];

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute left-1/2 top-20 z-10 -translate-x-1/2">
        <Header1 buttons={buttonsHeader} />
        <p className="lg-10 my-5 flex justify-center font-TAEBAEKmilkyway text-4xl text-white">
          별자리 그리기 예시.
        </p>
        <GridCustomConstellation
          planetId={planetId}
          constellationName={constellationName}
          constellationDescp={constellationDescp}
          pointList={pointList}
          lineList={lineList}
          constellationColor={constellationColor}
          setconstellationColor={setconstellationColor}
        />
        {isModalOpen && (
          <ListTemplateModalConstellation
            setIsModalOpen={setIsModalOpen}
            setPointList={setPointList}
            setLineList={setLineList}
          />
        )}
      </div>
    </div>
  );
};

export default DrawingConstellation;
