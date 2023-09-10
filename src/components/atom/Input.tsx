import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { DARK_GREY, GREY, MAIN_COLOR, WHITE } from "constant/color";
import { FS_1_DOT_6_REM } from "constant/font-size";

interface InputType {
  type?: HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, id, name, value, placeholder, onChange }: InputType) {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Input;

const StyledInput = styled.input`
  height: 48px;
  border: 1px solid #bec2cc;
  padding: 0 12px;
  border-radius: 5px;
  color: #2b2e33;
  font-size: ${FS_1_DOT_6_REM};
  &::placeholder {
    color: #bec2cc;
  }
`;
