import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm from "components/template/SignUpForm";
import Radio from "components/atom/Radio";

function Form() {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <Container>
      <Radio
        id="license1"
        name="license"
        value="doctor"
        text="의사"
        selected={state === "doctor"}
        onChange={handleChange}
      />
      <Radio
        id="license2"
        name="license"
        value="nurse"
        text="간호사"
        selected={state === "nurse"}
        onChange={handleChange}
      />
      <Radio
        id="license3"
        name="license"
        value="researcher"
        text="연구자"
        selected={state === "researcher"}
        onChange={handleChange}
      />
      <Radio
        id="license4"
        name="license"
        value="manager"
        text="행정 담당자"
        selected={state === "manager"}
        onChange={handleChange}
      />
    </Container>
  );
}

function License() {
  return (
    <div className="license">
      <SignUpForm
        title="회원 가입"
        description="면허 번호를 입력하세요."
        sub="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
        Form={Form}
      />
    </div>
  );
}

export default License;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
