import styled from "styled-components";
import CharacterLength from "./CharacterLength";

export default function OptionsContainer() {
  return (
    <>
      <Container>
        <CharacterLength />
      </Container>
    </>
  );
}
const Container = styled.div`
background-color:rgba(36, 35, 44, 1);
  padding: 24px 32px;
  width: 540px;
  @media screen and (max-width: 600px) {
    width: 343px;
  }
`;
