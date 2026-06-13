import styled from "styled-components";

export default function Options({ options, handleCheckboxChange }) {
  const checkboxOptions = [
    { id: "uppercase", label: "Include Uppercase Letters" },
    { id: "lowercase", label: "Include Lowercase Letters" },
    { id: "numbers", label: "Include Numbers" },
    { id: "symbols", label: "Include Symbols" },
  ];

  return (
    <CheckboxGroup>
      {checkboxOptions.map((opt) => (
        <CheckboxContainer key={opt.id}>
          {opt.label}
          <HiddenCheckbox
            type="checkbox"
            checked={options[opt.id] ?? false}
            onChange={() => handleCheckboxChange(opt.id)}
          />
          <Checkmark />
        </CheckboxContainer>
      ))}
    </CheckboxGroup>
  );
}

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 44px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  height: 20px;
  font-weight: 700;
  font-style: Bold;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: rgba(230, 229, 234, 1);
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:hover ~ span {
    border-color: #a4ffaf;
  }

  &:checked ~ span {
    background-color: #a4ffaf;
    border-color: #a4ffaf;
  }

  &:checked ~ span:after {
    display: block;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid #e6e5ea;
  background-color: transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";

    display: none;
    width: 10px;
    height: 6px;
    border: solid #18171f;
    border-width: 0 0 3px 3px;
    transform: rotate(-45deg);
  }
`;
