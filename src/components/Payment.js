import styled from "styled-components";

const Container = styled.main``;

const Wrapper = styled.section``;

const Button = styled.button``;

const TopButtonContainer = styled.article``;

const BottomButtonContainer = styled.article``;

const CardContainer = styled.article``;

const Title = styled.h1``;

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
        <CardContainer></CardContainer>
        <BottomButtonContainer>
          <Button>Next</Button>
          <Button>Cancel Payment</Button>
        </BottomButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Payment;
