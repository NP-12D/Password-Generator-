import styled from "styled-components";

export default function StrengthMeasure({ strength }) {
  return (
    <StrengthContainer>
      <StrengthLabel>Strength</StrengthLabel>
      <IndicatorWrapper>
        {strength.text && <StrengthText>{strength.text}</StrengthText>}
        <BarContainer>
          {[1, 2, 3, 4].map((index) => (
            <Bar
              key={index}
              $active={index <= strength.bars}
              $color={strength.color}
            />
          ))}
        </BarContainer>
      </IndicatorWrapper>
    </StrengthContainer>
  );
}


const StrengthContainer = styled.div`
  background-color: #18171f;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 24px;
  }
`;

const StrengthLabel = styled.span`
  color: #817d92;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StrengthText = styled.span`
  font-size: 24px;
  color: #e6e5ea;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const BarContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Bar = styled.div`
  width: 10px;
  height: 28px;
  border: 2px solid ${({ $active, $color }) => ($active ? $color : "#e6e5ea")};
  background-color: ${({ $active, $color }) =>
    $active ? $color : "transparent"};
  transition: all 0.2s ease;
`;
