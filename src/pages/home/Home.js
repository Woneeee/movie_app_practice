import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();

        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(isLoading);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return <>{isLoading ? <Loading /> : ""}</>;
};
