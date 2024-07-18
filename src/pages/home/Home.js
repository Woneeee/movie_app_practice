import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Movies } from "./Movies";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.size}; // styled에 변수 적을때는 $ 기호 붙이기
  position: relative;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative; // ?
  }
  p {
    width: 600px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSize} 0 ${spacing.moSize};
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px; // 500px 까지는 화면을 축소해도 유지되다가 500 밑으로 가면 비율대로 줄어듬
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(255, 255, 255, 0) 100%
  );
`;

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner $bgUrl={nowData[0].backdrop_path}>
            <BlackBg />
            <h3>{nowData[0].title}</h3>
            <p>{nowData[0].overview.slice(0, 100) + "..."}</p>
          </MainBanner>

          <Movies title="현재 상영 영화" movieData={nowData} />
        </>
      )}
    </>
  );
};
