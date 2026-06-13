import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import CheckOptions from "./CheckOptions";
import { useState } from "react";

export default function OptionsContainer() {
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });


  const handleCheckboxChange = (id) => {
    setOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
console.log(options);
console.log(length)
  return (
    <Container>
      <CharacterLength length={length} onChange={setLength} />

      <CheckOptions
        options={options}
        handleCheckboxChange={handleCheckboxChange}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(36, 35, 44, 1);
  padding: 24px 32px;
  width: 540px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 600px) {
    width: 343px;
  }
`;
