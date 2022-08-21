import styled from "styled-components";
const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 0;
  outline: none;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem 0;
  outline: none;
`;

const Option = styled.option``;

const Billing = () => {
  return (
    <Wrapper>
      <Label>Name of Card</Label>
      <Input placeholder="Opara Linus Ahmed" />
      <Label>Card Type</Label>
      <Select>
        <Option>Visa</Option>
        <Option>Master Card</Option>
      </Select>
      <Label>Card details</Label>
      <Input placeholder="44960 44960 44960 44960" />
      <Label>Expiry date</Label>
      <Input placeholder="04 / 23" />
      <Label>CVV</Label>
      <Input placeholder="923" />
    </Wrapper>
  );
};

export default Billing;
