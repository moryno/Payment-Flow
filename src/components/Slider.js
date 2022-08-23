import { useState } from "react";
import styled from "styled-components";
import Billing from "./Billing";
import { Confirm } from "./Confirm";
import Personal from "./Personal";

const Container = styled.div`
  width: 50vw;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -50}vw);
  transition: all 1.5s ease;
  align-items: center;
`;
const BottomButtonContainer = styled.article`
  position: absolute;
  bottom: 5%;
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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        <Personal />
        <Billing />
        <Confirm />
      </Wrapper>
      <BottomButtonContainer>
        <Button onClick={handleClick} bg="colored">
          Next
        </Button>
        <Button>Cancel Payment</Button>
      </BottomButtonContainer>
    </Container>
  );
};

export default Slider;
