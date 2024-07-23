import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import { Movies } from "./components/Movies";
import { MainBanner } from "./components/MainBanner";
import "swiper/css";
import { Title } from "../../components/Title";

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
  // console.log(isLoading);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <>
      <Title titleName="HOME" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner data={nowData[0]} />

          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 좋음" movieData={topData} />
          <Movies title="개봉 예정" movieData={upData} />
        </>
      )}
    </>
  );
};
