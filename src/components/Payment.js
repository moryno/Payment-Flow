import styled from "styled-components";
import Billing from "./Billing";
import { Confirm } from "./Confirm";
import Personal from "./Personal";

const Container = styled.main`
  background: linear-gradient(
    180deg,
    rgba(242, 201, 76, 0.2) 0%,
    rgba(242, 153, 74, 0.2) 100%
  );
  width: 100vw;
  display: flex;
  align-items: center;
  justify_content: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #c2bfb8;
`;

const TopButtonContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

const BottomButtonContainer = styled.article``;

const CardContainer = styled.article``;

const Title = styled.h3`
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #4e598c;
`;

const Payment = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Complete your Purchase</Title>
        <TopButtonContainer>
          <Button>Personal Info</Button>
          <Button>Billing Info</Button>
          <Button>Confirm Payment</Button>
        </TopButtonContainer>
        <CardContainer>
          <Billing />
        </CardContainer>
        <BottomButtonContainer>
          <Button>Next</Button>
          <Button>Cancel Payment</Button>
        </BottomButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Payment;
