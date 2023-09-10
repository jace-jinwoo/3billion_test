import React, { ReactComponentElement } from "react";
import styled from "styled-components";
import { DARK_GREY, GREY, MAIN_COLOR, WHITE } from "constant/color";
import { FS_1_DOT_6_REM } from "constant/font-size";

interface LabelingType {
  text: string;
  Form: any;
}

function Labeling({ text, Form }: LabelingType) {
  return (
    <Container>
      <Label>{text}</Label>
      {Form}
    </Container>
  );
}

export default Labeling;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;
const Label = styled.label`
  flex-grow: 1;
  font-size: ${FS_1_DOT_6_REM};
  & + * {
    flex-grow: 3;
  }
`;
