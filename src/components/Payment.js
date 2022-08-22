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
  background-image: -webkit-linear-gradient(
    210deg,
    rgba(242, 201, 76, 0.2) 50%,
    rgba(242, 153, 74, 0.2) 50%
  );
  display: flex;
  align-items: center;
  justify_content: center;
  height: 100vh;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 3rem;
  background-color: ${(props) =>
    props.bg === "colored" ? "#F2C94C" : "transparent"};
  color: ${(props) => (props.bg === "colored" ? "#fff" : "#4e598c")};
  font-weight: 600;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
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
  cursor: pointer;
  margin-top: 10%;
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
        <CardContainer>
          <Confirm />
        </CardContainer>
        <BottomButtonContainer>
          <Button bg="colored">Next</Button>
          <Button>Cancel Payment</Button>
        </BottomButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Payment;
