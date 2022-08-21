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

const Description = styled.span``;

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

const Personal = () => {
  return (
    <Wrapper>
      <Label>Name</Label>
      <Input placeholder="Opara Linus Ahmed" />
      <Label>Email Address</Label>
      <Description>
        The purchase receipt would be sent to this address
      </Description>
      <Input placeholder="operalinusahmed@devmail.com" />
      <Label>Address1</Label>
      <Input placeholder="The address of the user goes here" />
      <Label>Address2</Label>
      <Input placeholder="and here" />
      <Label>Local Government</Label>
      <Input placeholder="Surulere" />
      <Label>State</Label>
      <Select>
        <Option>Lagos</Option>
        <Option>Abuja</Option>
        <Option>Cairo</Option>
        <Option>Nairobi</Option>
      </Select>
    </Wrapper>
  );
};

export default Personal;
