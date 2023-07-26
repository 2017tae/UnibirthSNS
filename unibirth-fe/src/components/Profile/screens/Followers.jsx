import React from "react";
import Button2 from "../../../common/atoms/Button2";
import Header2 from "../../../common/blocks/Header2";
import Header1 from "../../../common/blocks/Header1";
import { IoIosArrowBack } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigation } from "../../../hooks/useNavigation";

const Followers = () => {
  const { navigateToMemberProfile } = useNavigation();
  const { navigateToFollowings } = useNavigation();
  const { navigateToDirectMessage } = useNavigation();

  const buttonsHeader = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "뒤로가기",
      onClick: navigateToMemberProfile,
      icon: <IoIosArrowBack />,
    },
  ];

  const buttonsHeader2 = [
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로잉",
      onClick: navigateToFollowings,
    },
    {
      component: Button2,
      className: "font-TAEBAEKmilkyway",
      value: "팔로워",
    },
  ];

  // 유저 정보 배열 (예시로 10개의 유저 정보를 생성합니다)
  const users = [
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
    {
      id: 1,
      name: "김민섭",
      profileImageUrl: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "정준혁",
      profileImageUrl: "https://picsum.photos/190",
    },
    {
      id: 3,
      name: "이성섭",
      profileImageUrl: "https://picsum.photos/21",
    },
  ];

  return (
    <div>
      <Header2 buttons={buttonsHeader} />
      <Header1 buttons={buttonsHeader2} />
      <h1> 팔로워 리스트입니다..</h1>
      {users.map((user) => (
        <div key={user.id} className="flex items-start space-x-4">
          <img
            src={user.profileImageUrl}
            className="h-32 w-32 rounded-full"
            alt="Round image"
          />
          <div className="flex h-32 items-center">
            <p className="text-lg font-bold ">{user.name}</p>
          </div>
          <button
            className="flex h-32 w-48 items-center "
            onClick={navigateToDirectMessage}
          >
            <CiLocationArrow1 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Followers;
