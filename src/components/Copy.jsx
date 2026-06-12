import { useState } from "react";
import styled from "styled-components";

export default function Copy({ password }) {
  const [copy, setCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopy(true);
      setTimeout(() => setCopy(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <CopyButton $copied={copy} onClick={handleCopy}>
      <CopiedSpan>{copy ? "Copied!" : null}</CopiedSpan>
      <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="24px" viewBox="0 0 16 16">
	{/* <path d="M0 0h16v16H0z" fill="none" /> */}
	<path fill="#fff" d="M13.49 3L10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88m-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25z" />
	<path fill="#fff" d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z" />
</svg>

    </CopyButton>
  );
}

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 16px;

  svg path {
    fill: ${({ $copied }) =>
      $copied ? "rgba(164, 255, 175, 1)" : "#fff"};
    transition: fill 0.3s ease;
  }
`;

const CopiedSpan = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: rgba(164, 255, 175, 1);
`;
