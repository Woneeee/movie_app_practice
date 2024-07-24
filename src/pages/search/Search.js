import { useForm } from "react-hook-form";
import { Title } from "../../components/Title";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { FaSearch } from "react-icons/fa";
import { movieSearch } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  padding: 150px ${spacing.size};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
  }
  // =>  & 는 자기자신을 선택하는 기호
  // => 보통 hover 이벤트할때 &:hover {}

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  color: gold;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px; /* 행끼리의 갭*/
  column-gap: 15px;
`;
// *grid-template-columns
// =>repeat(반복횟수, 반복값) / repeat(5, 1fr)은 1fr 1fr 1fr 1fr 1fr과 같음
// =>fr은 fraction(뜻은 비율)인데요, 숫자 비율대로 트랙의 크기를 나눔
// =>즉 1fr 1fr 1fr 1fr 1fr은 균일하게 1:1:1:1:1 비율인 5개의 column을 만들겠다는 의미

const Bg = styled.div`
  height: 500px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    // console.log(keyword);

    const { results } = await movieSearch(keyword);
    setSearchData(results);
    setIsLoading(false);
  };

  // console.log(errors);
  // console.log(searchData);

  return (
    <Container>
      <Title titleName="SEARCH" />

      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해주세요 😊",
          })}
          type="text"
          placeholder="검색 내용 입력.."
        />
        <button>
          <FaSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {searchData?.length === 0 ? (
        "검색 결과가 없습니다 😢"
      ) : (
        <>
          {searchData && (
            <>
              {isLoading ? (
                <Loading />
              ) : (
                <ConWrap>
                  {searchData.map((data) => (
                    <Link key={data.title} to={`/detail/${data.id}`}>
                      <Bg>
                        <img
                          src={W500_URL + data.poster_path}
                          alt={data.title}
                        />
                      </Bg>
                    </Link>
                  ))}
                </ConWrap>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
};

// Form 은 스타일을 잡아줘야하기 때문에 컴포넌트로 만들기
// 그렇지만 input 은 Form의 자식이기때문에 Form 안에 .input 으로 잡아서 스타일 지정가능하기때문에 태그로 만들기 가능
// 기왕이면  컴포넌트는 최소한으로
// 만약 handleSubmit 함수가 없었다면 계속 페이지가 다시로딩되는 현상이 일어남
// API를 받아올 때 useEffect 훅을 사용하는 것은 API 호출과 데이터 처리를 비동기적으로 처리하고, 상태를 업데이트할 수 있는 효율적인 방법
// useEffect 쓰는이유: API를 최초 로딩시에만 호출하도록 보장 (여기서는 폼제출시 API호출해와야하기 때문에 쓸필요 x)

// button or 엔터를 눌러도 제출이 되는지 확인해보기
// handleSubmit 가 없으면 버튼을 누를때마다 검색내용이 사라지면서 로딩이 되는데 그럼 SPA가 안되는것인지
