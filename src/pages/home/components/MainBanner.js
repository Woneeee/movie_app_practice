import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";

const Container = styled.section`
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

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
