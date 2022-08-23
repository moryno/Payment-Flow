import { useState } from "react";
import styled from "styled-components";

import Slider from "./Slider";

const Container = styled.main`
  background-image: -webkit-linear-gradient(
    120deg,
    rgb(255, 255, 255) 50%,
    rgb(253, 242, 219) 50%
  );

  width: 100vw;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

const TopButtonContainer = styled.article`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Title = styled.h3`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #4e598c;
  cursor: pointer;
  margin-top: 10%;
  margin-bottom: 2rem;
`;

const Hr = styled.hr`
  position: absolute;
  bottom: 35%;
  width: 100%;
`;

const Link = styled.a`
  color: #4e598c;
  font-weight: 600;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

const Payment = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onButtonCLick = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Complete your Purchase</Title>
        <TopButtonContainer>
          <Link style={{ color: slideIndex === 0 && "#F2994A" }}>
            Personal Info
          </Link>
          <Link style={{ color: slideIndex === 1 && "#F2994A" }}>
            Billing Info
          </Link>
          <Link style={{ color: slideIndex === 2 && "#F2994A" }}>
            Confirm Payment
          </Link>
          <Hr />
        </TopButtonContainer>
        <Slider onClick={onButtonCLick} />
      </Wrapper>
    </Container>
  );
};

export default Payment;
