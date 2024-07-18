import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";

const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 20px ${spacing.moSize};
  }
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }
`;

const Menu = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  li {
    margin-left: 150px;
  }

  @media screen and (max-width: 768px) {
    li {
      margin-left: 50px;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};
