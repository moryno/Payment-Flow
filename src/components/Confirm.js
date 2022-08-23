import styled from "styled-components";

const Card = styled.section`
  width: 50vw;
  height: 15rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #4e598c;

  height: 100vh;
  display: flex;
`;

const TopContainer = styled.article`
  background-color: #2f80ed;
  padding: 0.7rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CardTitle = styled.span``;

const InfoContainer = styled.article`
  border-radius: 0.5rem;
`;

const InforDescription = styled.span``;

const Price = styled.span``;

const InfoWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
`;

const Hr = styled.hr`
  width: 90%;
  margin: 1rem auto;
  color: lightgray;
`;

const TotalWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin-top: 10rem;
  width: 75%;
  margin: 1rem auto;
`;

const TotalTitle = styled.span``;

const Total = styled.span``;

export const Confirm = () => {
  return (
    <Card>
      <TopContainer>
        <CardTitle>Item Name</CardTitle>
        <CardTitle>Price</CardTitle>
      </TopContainer>
      <InfoContainer>
        <InfoWrapper>
          <InforDescription>Data science and usability</InforDescription>
          <Price>50,000.00</Price>
        </InfoWrapper>
        <InfoWrapper>
          <InforDescription>Shipping</InforDescription>
          <Price>0.00</Price>
        </InfoWrapper>
        <Hr />
        <TotalWrapper>
          <TotalTitle>Total</TotalTitle>
          <Total>50,000.00</Total>
        </TotalWrapper>
      </InfoContainer>
    </Card>
  );
};
