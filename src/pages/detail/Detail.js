import { useEffect, useState } from "react";
import {movieDetail} from "../../api"
import {Loading} from "../../components/Loading"
import { Title } from "../../components/Title";
import styled from "styled-components";
import {ORIGIN_URL} from "../../constant/imgUrl"

const Container =styled.div`
  padding: 150px 20%;
  display: flex;
`;

const CoverImg =styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
`;

const ConWrap =styled.div`
  width: 40%;
  h3{
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Info =styled.div`
  display: block;
  font-size: 18px;
  font-weight: 400;
  span{
    margin-right: 15px;
    border-radius: 20px;
    background-color: #333;
    padding: 10px 20px;
  }
  display: flex;
`;

const Genres =styled.ul`
  list-style: disc;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  li{
    margin-top: 10px;
  }
`;

const Desc =styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;
`;


export const Detail = () => {
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async() => {
      try{
        const data = await movieDetail(1022789);

        setDetail(data)
        setIsLoading(false)
      }catch(error){
        console.log(error)
      }
    })()
  }, [])

  console.log(detail)
  console.log(isLoading)

  return <>
    <Title titleName='DETAIL' />
    {isLoading ? <Loading /> : <>
      <Container>
        <CoverImg src={ORIGIN_URL + detail.poster_path} alt={`${detail.title}`} />

        <ConWrap>
          <h3>{detail.title}</h3>
          <Info>
            <span>{detail.release_date}</span>

            <span>{Math.round(detail.vote_average)}점</span>

            <span>{detail.runtime}분</span>
          </Info>

          <Genres>
            {detail.genres.map((gen) => <li key={gen.id} >
              {gen.name}
            </li>)}
          </Genres>

          <Desc>{detail.overview}</Desc>
        </ConWrap>
      </Container>
    </>}
  </>;
};
