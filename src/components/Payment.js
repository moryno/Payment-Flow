import styled from "styled-components";

import Slider from "./Slider";

const Container = styled.main`
  background-image: -webkit-linear-gradient(
    120deg,
    rgb(255, 255, 255) 50%,
    rgb(253, 242, 219) 50%
  );

  height: 100vh;
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
`;

const Title = styled.h3`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #4e598c;
  cursor: pointer;
  ${"" /* margin-top: 10%; */}
  margin-bottom: 2rem;
`;

const Link = styled.a`
  color: #4e598c;
  font-weight: 600;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

const Payment = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Complete your Purchase</Title>
        <TopButtonContainer>
          <Link>Personal Info</Link>
          <Link>Billing Info</Link>
          <Link>Confirm Payment</Link>
        </TopButtonContainer>
        <Slider />
      </Wrapper>
    </Container>
  );
};

export default Payment;
