import React from "react";
import styled from "styled-components";
import { DARK_GREY, GREY, MAIN_COLOR, WHITE } from "constant/color";
import { FS_1_DOT_6_REM } from "constant/font-size";

interface RadioType {
  id: string;
  name: string;
  value: string;
  text?: string;
  selected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Radio({ id, name, value, text, selected, onChange }: RadioType) {
  return (
    <>
      <RadioBtn
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id} className={selected ? "selected" : ""}>
        {text}
      </Label>
    </>
  );
}

export default Radio;

const RadioBtn = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
`;
const Label = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${GREY};
  margin-bottom: 16px;
  background-color: ${WHITE};
  color: ${DARK_GREY};
  font-size: ${FS_1_DOT_6_REM};
  font-weight: bold;
  text-align: center;
  box-shadow: 0 5px 4px -4px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  &:nth-of-type(2n) {
    margin-left: 12px;
  }
  &.selected {
    border: 2px solid ${MAIN_COLOR};
    background-color: #f1f5fe;
  }
`;
