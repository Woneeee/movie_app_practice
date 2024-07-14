import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowData(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);

  return <div>Home</div>;
};
