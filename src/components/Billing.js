import styled from "styled-components";
const Wrapper = styled.article`
  width: 50vw;
  display: table;
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

const BottomLabel = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const BottomInput = styled.div`
  display: table-cell;
`;

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
      <BottomLabel>
        <Label style={{ marginRight: "12.6rem" }}>Card details</Label>
        <Label style={{ marginRight: "5.2rem" }}>Expiry date</Label>
        <Label>CVV</Label>
      </BottomLabel>
      <BottomInput>
        <Input
          style={{ width: "50%", marginRight: "1rem" }}
          placeholder="44960 44960 44960 44960"
        />
        <Input
          style={{ width: "28%", marginRight: "1rem" }}
          placeholder="04 / 23"
        />

        <Input style={{ width: "16%" }} placeholder="923" />
      </BottomInput>
    </Wrapper>
  );
};

export default Billing;
