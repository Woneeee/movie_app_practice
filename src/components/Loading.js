import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Loading = () => {
  return (
    <Container>
      <PuffLoader size={40} color="crimson" />
    </Container>
  );
};
