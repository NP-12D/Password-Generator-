import styled from "styled-components";

export default function GenerateButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      GENERATE
      <ArrowIcon
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
      >
        <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H0v1.79h7.682l-3.841 3.84L5.106 12Z" />
      </ArrowIcon>
    </Button>
  );
}


const Button = styled.button`
  width: 100%;
  height: 65px;
  background-color: #a4ffaf;
  border: 2px solid #a4ffaf;
  color: #18171f;
  font-family: "JetBrains Mono", monospace;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    color: #a4ffaf;
  }

  &:hover svg path {
    fill: #a4ffaf;
  }
`;

const ArrowIcon = styled.svg`
  & path {
    fill: #18171f;
    transition: fill 0.2s ease;
  }
`;
