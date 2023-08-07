import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate(-1);
  };

  const refreshPage = () => {
    navigate(".", { replace: true });
  };

  // Home
  const navigateToHome = () => {
    navigate("/");
  };

  // Member
  const navigateToLoginMember = () => {
    navigate("/members/login");
  };

  const navigateToRegisterMember = () => {
    navigate("/members/register");
  };

  // Constellation
  const navigateToDetailConstellation = (constellationId) => {
    navigate(`/constellations/detail/${constellationId}`);
  };

  const navigateToRegisterConstellation = () => {
    navigate(`/constellations/register`);
  };

  const navigateToDrawingConstellation = (params) => {
    navigate(`/constellations/drawing`, {
      state: params,
    });
  };

  // Planet
  const navigateToDetailPlanet = (planetId) => {
    navigate(`/planets/${planetId}`);
  };

  const navigateToMainPlanet = () => {
    navigate("/planets");
  };

  // Profile
  const navigateToMemberProfile = () => {
    navigate("/profiles");
  };

  const navigateToModifyProfile = () => {
    navigate(`/members/profiles`);
  };

  const navigateToModifyMember = () => {
    navigate("/members/update");
  };

  const navigateToFollowings = () => {
    navigate("/profiles/followings");
  };

  const navigateToFollowers = () => {
    navigate("/profiles/followers");
  };

  const navigateToMyStars = () => {
    navigate("/stars");
  };

  const navigateToDirectMessage = () => {
    navigate("/profiles/directmessage");
  };

  const navigateToMessageBox = () => {
    navigate("/profiles/messagebox");
  };

  // Star
  const navigateToRegisterStar = () => {
    navigate("/stars/register");
  };

  const navigateToDetailStar = (starId) => {
    navigate(`/stars/detail/${starId}`);
  };

  // Search
  const navigateToSearchQuration = () => {
    navigate("/search/quration");
  };

  const navigateToSearchCommon = (query, categoryName) => {
    navigate(`/search`, {
      state: {
        query,
        categoryName,
      },
    });
  };
  return {
    navigateToBack,
    refreshPage,
    navigateToHome,
    navigateToLoginMember,
    navigateToRegisterMember,
    navigateToDetailConstellation,
    navigateToRegisterConstellation,
    navigateToDrawingConstellation,
    navigateToDetailPlanet,
    navigateToMainPlanet,
    navigateToMemberProfile,
    navigateToModifyProfile,
    navigateToModifyMember,
    navigateToFollowings,
    navigateToFollowers,
    navigateToMyStars,
    navigateToDirectMessage,
    navigateToMessageBox,
    navigateToRegisterStar,
    navigateToDetailStar,
    navigateToSearchQuration,
    navigateToSearchCommon,
  };
};
