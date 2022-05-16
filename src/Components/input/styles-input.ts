import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  color: #3a2784;
  display: block;
  text-align: center;
  margin-right: 4%;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding-left: 3px;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  border: 1px solid #75b6ff;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: "Noto Sans", sans-serif;
  color: #5d3fd3;
  padding: 10px;
  margin-bottom: 25px;
  width: 96%;

  &:focus
  {
        outline: none !important;
        border-color: #75b6ff;
        box-shadow: 0 0 3px #288dff;
  }

  &:valid + ${InputLabel}
  {
    top: -1px;
    padding: 0 3px;
    font-size:14px;
    color: #8d8d8d;
  }

  &:focus + ${InputLabel}
  {
    top: -1px;
    padding: 0 3px;
    font-size:14px;
    transition: 300ms;
  }

  &::placeholder {
    color: #e6e1f9;
  }
`;