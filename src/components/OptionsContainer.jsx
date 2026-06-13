import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import CheckOptions from "./CheckOptions";
import { useState, useEffect } from "react";
import StrengthMeasure from "./StrengthMeasure";
import GenerateButton from "./GenerateButton";
const STRENGTH_LEVELS = {
  0: { text: "", color: "transparent", bars: 0 },
  1: { text: "TOO WEAK!", color: "#F64A4A", bars: 1 },
  2: { text: "WEAK", color: "#FB7C58", bars: 2 },
  3: { text: "MEDIUM", color: "#F8CD65", bars: 3 },
  4: { text: "STRONG", color: "#A4FFAF", bars: 4 },
};
export default function OptionsContainer({setPassword}) {
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [strength, setStrength] = useState(STRENGTH_LEVELS[0]);

  useEffect(() => {
    const activeCount = Object.values(options).filter(Boolean).length;
    let level = 0;

    if (activeCount > 0) {
      if (length < 8 || activeCount === 1) level = 1;
      else if (length < 11 || activeCount === 2) level = 2;
      else if (length < 15 || activeCount === 3) level = 3;
      else level = 4;
    }

    setStrength(STRENGTH_LEVELS[level]);
  }, [length, options]);
const generatePassword = (length, options) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "~!@#$%^&*()_+-={}[]|;:<>?,.";

  let availableChars = "";
  if (options.uppercase) availableChars += uppercaseChars;
  if (options.lowercase) availableChars += lowercaseChars;
  if (options.numbers) availableChars += numberChars;
  if (options.symbols) availableChars += symbolChars;

  if (availableChars.length === 0) return "";

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }

  return generatedPassword;
};



  const handleCheckboxChange = (id) => {
    setOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  console.log(options);
  console.log(length);
  return (
    <Container>
      <CharacterLength length={length} onChange={setLength} />

      <CheckOptions
        options={options}
        handleCheckboxChange={handleCheckboxChange}
      />
      <StrengthMeasure strength={strength} />
     <GenerateButton
  onClick={() => {
    const pwd = generatePassword(length, options);
    setPassword(pwd);
  }}
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
