import styled from "styled-components";
import Copy from "./Copy";
export default function PasswordDisplay({ password }) {
  return (
    <PaswordContainer>
      <PasswordText $placeholder={!password}>
        {password || "P@$$w0rd!"}
      </PasswordText>
      <Copy password={password}></Copy>
    </PaswordContainer>
  );
}

const PaswordContainer = styled.div`
  padding: 19px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height:80px;
  @media screen and (max-width:600px) {
    width:343px;
    height:64px;
  }
  background-color: rgba(36, 35, 44, 1);
  color: #e6e5ea;
`;

const PasswordText = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: ${({ $placeholder }) => ($placeholder ? "#4F4E5E" : "#E6E5EA")};
   @media screen and (max-width:600px) {
    font-size:16px;
  }
 
`;

;