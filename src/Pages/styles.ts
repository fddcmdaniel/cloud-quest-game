import styled from "styled-components";

interface ErrorLabelProp {
  visible?: boolean;
}

export const ErrorLabel = styled.div<ErrorLabelProp>`
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  position: "absolut";
  margin-left: -5%;
  margin-right: auto;
  padding-bottom: 10px;
  text-align: center;
  color: #ff6b6b;
  display: ${(prop) => (prop.visible ? null : "none")};
`;
