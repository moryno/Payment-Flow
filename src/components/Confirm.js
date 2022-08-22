import styled from "styled-components";

const Card = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const TopContainer = styled.article`
  background-color: #2f80ed;
  padding: 0.5rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
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
`;

const Hr = styled.hr``;

const TotalWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
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
