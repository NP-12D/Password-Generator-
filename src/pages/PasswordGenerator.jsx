import styled from "styled-components";
import PasswordDisplay from "../components/PasswordDisplay";
import OptionsContainer from "../components/OptionsContainer";
import { useState } from "react";
export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  return (
    <>
      <Main>
        <PasswordDisplay password={password} />
       <OptionsContainer setPassword={setPassword} />


      </Main>
    </>
  );
}
const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(8, 7, 11, 1);
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap:31px;
`;
