import { useRef, useState } from "react";
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
  bottom: ${(props) => (props.slideIndex === 0 ? "20vh" : "50vh")};
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

const Slider = ({ onClick }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    onClick(slideIndex + 1);
  };
  const elementRef = useRef();
  console.log(elementRef);
  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        <Personal />
        <Billing />
        <Confirm />
      </Wrapper>
      <BottomButtonContainer ref={elementRef} slideIndex={slideIndex}>
        {slideIndex < 2 ? (
          <Button onClick={handleClick} bg="colored">
            Next
          </Button>
        ) : (
          <Button
            onClick={() => window.location.replace("/Success")}
            bg="colored"
          >
            Pay
          </Button>
        )}

        <Button onClick={() => window.location.replace("/")}>
          Cancel Payment
        </Button>
      </BottomButtonContainer>
    </Container>
  );
};

export default Slider;
