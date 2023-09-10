import React from "react";
import styled from "styled-components";
import { MAIN_COLOR, WHITE } from "constant/color";

interface ButtonType {
  text: string;
  width?: string;
  height?: string;
  LIcon?: any;
  RIcon?: any;
  bgcolor?: string;
  color?: string;
  onClick: () => void;
}

function Button({
  text,
  LIcon,
  RIcon,
  width,
  height,
  bgcolor,
  color,
  onClick,
}: ButtonType) {
  return (
    <Btn
      width={width}
      height={height}
      bgcolor={bgcolor}
      color={color}
      onClick={onClick}
    >
      {LIcon}
      {text}
      {RIcon}
    </Btn>
  );
}

export default Button;

const Btn = styled.button<{
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${(props) => props.width ?? "304px"};
  height: ${(props) => props.height ?? "48px"};
  background-color: ${(props) => props.bgcolor ?? MAIN_COLOR};
  border-radius: 51px;
  color: ${(props) => props.color ?? WHITE};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.18px;
`;
