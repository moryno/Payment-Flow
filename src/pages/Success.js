import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-image: -webkit-linear-gradient(
    120deg,
    rgb(255, 255, 255) 50%,
    rgb(253, 242, 219) 50%
  );
`;

const Wrapper = styled.article`
  display: flex;
  background-color: #fff;
  width: 40%;
  flex-direction: column;
  padding: 1rem 3rem;
  box-sizing: border-box;
  margin: auto;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
`;

const Title = styled.h3`
  color: #4e598c;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.span`
  color: gray;
`;

const Link = styled.a`
  margin: 1rem 0;
  color: #f2c94c;
  text-decoration: underline;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #fff;
  color: green;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
`;

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <i class="fas fa-check"></i>
        </Icon>
        <Title>Purchase Completed</Title>
        <Description>
          Please check your email for details concerning this transaction
        </Description>
        <Link href="/">Return Home</Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
