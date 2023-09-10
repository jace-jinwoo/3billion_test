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
        id="account1"
        name="account"
        value="doctor"
        text="의사"
        selected={state === "doctor"}
        onChange={handleChange}
      />
      <Radio
        id="account2"
        name="account"
        value="nurse"
        text="간호사"
        selected={state === "nurse"}
        onChange={handleChange}
      />
      <Radio
        id="account3"
        name="account"
        value="researcher"
        text="연구자"
        selected={state === "researcher"}
        onChange={handleChange}
      />
      <Radio
        id="account4"
        name="account"
        value="manager"
        text="행정 담당자"
        selected={state === "manager"}
        onChange={handleChange}
      />
    </Container>
  );
}

function Account() {
  return (
    <div className="account">
      <SignUpForm
        title="회원 가입"
        description="계정을 입력하세요."
        Form={Form}
      />
    </div>
  );
}

export default Account;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
