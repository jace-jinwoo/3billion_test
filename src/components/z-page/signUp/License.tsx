import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm from "components/template/SignUpForm";
import Radio from "components/atom/Radio";
import Labeling from "components/molecule/Labeling";
import Input from "components/atom/Input";

function Form() {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <Labeling
      text="면허 번호"
      Form={<Input placeholder="면허 번호를 입력하세요." onChange={() => {}} />}
    />
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
