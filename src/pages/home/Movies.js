import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div``;

const Title = styled.div``;

export const Movies = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>
    </Section>
  );
};
