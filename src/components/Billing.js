import styled from "styled-components";
const Wrapper = styled.article`
  width: 50vw;
  display: flex;
  flex-direction: column;

  height: 100vh;
  display: flex;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.7rem;
  outline: none;
  margin-bottom: 1rem;
  width: ${(props) =>
    props.width === "half"
      ? "40%"
      : props.width === "quater"
      ? "30%"
      : props.width === "eighth"
      ? "15%"
      : "100%"};
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 0.5rem;
  outline: none;
`;

const Option = styled.option``;

const Billing = () => {
  return (
    <Wrapper>
      <Label>Name on Card</Label>
      <Input placeholder="Opara Linus Ahmed" />
      <Label>Card Type</Label>
      <Select>
        <Option>Visa</Option>
        <Option>Master Card</Option>
      </Select>
      <Label>Card details</Label>
      <Input width="half" placeholder="44960 44960 44960 44960" />
      <Label>Expiry date</Label>
      <Input width="quater" placeholder="04 / 23" />
      <Label>CVV</Label>
      <Input width="eighth" placeholder="923" />
    </Wrapper>
  );
};

export default Billing;
