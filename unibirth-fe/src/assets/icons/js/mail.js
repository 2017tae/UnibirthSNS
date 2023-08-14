import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../../recoil/atoms";
import { get, ref } from "firebase/database";
import { database } from "../../../api/useFirebaseApi";

const Mail = () => {
  const nickname = useRecoilValue(nicknameState);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [checkUpdate, setCheckUpdate] = useState(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      // Fetching lastUpdate as before
      // Fetching checkUpdate from the new reference
      const checkUpdateRef = ref(database, `checkMessage/${nickname}`);
      const checkUpdateSnapshot = await get(checkUpdateRef);
      if (checkUpdateSnapshot.exists()) {
        setCheckUpdate(checkUpdateSnapshot.val());
      }

      // Fetching lastUpdate as before
      const lastUpdateRef = ref(database, `updateMessage/${nickname}`);
      const lastUpdateSnapshot = await get(lastUpdateRef);
      if (lastUpdateSnapshot.exists()) {
        setLastUpdate(lastUpdateSnapshot.val());
      }
    };

    fetchUpdates();
  }, [nickname]);

  const backgroundColor = lastUpdate > checkUpdate ? "yellow" : "transparent";

  return (
    <div style={{ backgroundColor }}>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0H0.012L0 18H24V0ZM21.6 15.75H2.4V4.5L12 10.125L21.6 4.5V15.75ZM12 7.875L2.4 2.25H21.6L12 7.875Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Mail;