import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.article`
  display: flex;

  flex-direction: column;
`;

const Title = styled.h3``;

const Description = styled.span``;

const Button = styled.button``;

const Successful = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Purchase Completed</Title>
        <Description>
          Please check your email for details concerning this transaction
        </Description>
        <Button>Return Home</Button>
      </Wrapper>
    </Container>
  );
};

export default Successful;
