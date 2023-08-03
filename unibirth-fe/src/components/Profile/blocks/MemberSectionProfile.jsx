import React, { useState, useEffect } from "react";
import Button1 from "../../../common/atoms/Button1";
import { useNavigation } from "../../../hooks/useNavigation";
import useMemberApi from "../../../api/useMemberApi";
const ConstellationSectionProfile = () => {
  const {
    navigateToModifyProfile,
    navigateToFollowings,
    navigateToFollowers,
    navigateToMyStars,
  } = useNavigation();

  const [memberData, setMemberData] = useState();

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await useMemberApi.membersGetProfiles();
        console.log("membersection 리스폰스", response);
        setMemberData(response);
      } catch (error) {
        console.error("멤버 데이터를 가져오는데 에러 발생:", error);
      }
    };
    fetchMemberData();
  }, []);

  return (
    <div className="space-x-4 bg-blue-200">
      {memberData && (
        <div className="flex items-start space-x-4">
          <img
            src={memberData.resultData.imageUrl}
            className="h-32 w-32 rounded-full"
            alt="Round image"
          />
          <div>
            <p className="text-lg font-bold">
              {memberData.resultData.nickname}
            </p>
            <p>탄생일: {memberData.resultData.birthDate}</p>
            <p onClick={navigateToMyStars}>
              띄운 별: {memberData.resultData.starCount}
            </p>
            <p onClick={navigateToFollowings}>
              팔로잉: {memberData.resultData.followingCount}
            </p>
            <p onClick={navigateToFollowers}>
              팔로워: {memberData.resultData.followerCount}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">
              <p>상태 메시지 :</p>
              {memberData.resultData.introduction}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 bg-blue-500">
        <Button1
          value="수정"
          className="font-TAEBAEKmilkyway"
          onClick={navigateToModifyProfile}
        />
      </div>
    </div>
  );
};

export default ConstellationSectionProfile;