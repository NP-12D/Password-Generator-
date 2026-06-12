import { useState } from "react";
import styled from "styled-components";

export default function CharacterLength() {
  const [length, setLength] = useState(10);
  const sliderPercentage = (length / 20) * 100;

  return (
    <Container>
      <Header>
        <Label>Character Length</Label>
        <Value>{length}</Value>
      </Header>
      <RangeInput
        type="range"
        min="0"
        max="20"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        sliderPercentage={sliderPercentage}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color:rgba(230, 229, 234, 1);
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Value = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  color: #a4ffaf;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const RangeInput = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  appearance: none;
  cursor: pointer;
  outline: none;

  background: ${({ sliderPercentage }) =>
    `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${sliderPercentage}%, #18171F ${sliderPercentage}%, #18171F 100%)`};

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #a4ffaf;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #a4ffaf;
    cursor: pointer;
  }
`;
