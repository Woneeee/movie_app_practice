import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return;
};

// useScrollTop hook을 실행해서 스크롤만 올리면 되지 결과값을 반환할 내용은 없기 때문에 return 뒤에는 적을게 없음

// 그렇다면 hook과 함수의 차이는??

// *useEffect
// =>렌더링 전에 작동, 렌더링 후 작동, 특정값만 변경/수정 할때 사용
// =>[] 안의 내용이 변경될때마다 useEffect 안의 식이 다시 작동

// *useLoation
// =>pathname 이라는 속성안에 url 경로가 담겨있음

// 무한스크롤을 할때 페이지가 렌더링이 되기때문에 페이지가 올라갈수있음
// 따라서 useEffect의 []를 통해, []안의 내용이 변경될때마다 내용이 실행되도록  [] 안에 useLoacation에서 가져온 pathname 을 적어주면됨
// 그러면 렌더링될때마다 스크롤탑이 적용되는게아니라 pathname 즉 url경로가 바뀔때마다 스크롤이 올라감
