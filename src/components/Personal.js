import styled from "styled-components";
const Wrapper = styled.article`
  display: table;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  display: flex;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.span`
  margin-bottom: 1rem;
  color: #817e9e;
`;

const Input = styled.input`
  padding: 0.7rem;
  outline: none;
  margin-bottom: 1rem;

  box-sizing: border-box;
`;
const BottomLabel = styled.div`
  display: flex;
`;
const BottomInput = styled.div`
  display: table-cell;
  justify-content: space-between;
`;
const Select = styled.select`
  padding: 0.7rem 1rem;
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
      <Input
        style={{ border: "none" }}
        placeholder="Operalinusahmed@devmail.com"
      />
      <Label>Address1</Label>
      <Input placeholder="The address of the user goes here" />
      <Label>Address2</Label>
      <Input placeholder="and here" />
      <BottomLabel>
        <Label style={{ marginRight: "57%" }}>Local Government </Label>
        <Label>State</Label>
      </BottomLabel>

      <BottomInput>
        <Input
          style={{ marginRight: "3.6rem", width: "70%" }}
          placeholder="Surulere"
        />
        <Select>
          <Option>Lagos</Option>
          <Option>Abuja</Option>
          <Option>Cairo</Option>
          <Option>Nairobi</Option>
        </Select>
      </BottomInput>
    </Wrapper>
  );
};

export default Personal;
