import React, { useEffect, useState } from "react";
import useSearchApi from "../../api/useSearchApi";
import { nicknameState } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";
import CustomAlert from "../atoms/CustomAlert";

const QurationStar = () => {
  const [qurationStar, setQurationStar] = useState([]);
  const nickname = useRecoilValue(nicknameState);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const getQurationStar = async () => {
    try {
      const response = await useSearchApi.searchGetMemberCuration(nickname);
      if (response.status === 200) {
        setQurationStar(response.resultData);
      } else {
        setIsAlertVisible(true);
        setAlertMessage("관심 별이 없습니다.");
      }
    } catch (e) {
      setIsAlertVisible(true);
      setAlertMessage("관심 별이 없습니다.");
    }
  };

  useEffect(() => {
    getQurationStar();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <CustomAlert
        message={alertMessage}
        isVisible={isAlertVisible}
        onClose={() => setIsAlertVisible(false)}
      />

      {qurationStar.map((item, index) => (
        <div
          key={index}
          className="m-4 w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <div className="w-full">
            <img
              src={item.imageUrl}
              alt="별 이미지"
              className="h-auto max-h-96 w-full object-cover"
            />{" "}
            {/* 이미지 크기 조정 */}
          </div>
          <div className="rounded-b-lg bg-white p-4">
            <h3 className="font-bold">{item.nickname}</h3>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QurationStar;
