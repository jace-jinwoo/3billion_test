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
        id="job1"
        name="job"
        value="doctor"
        text="의사"
        selected={state === "doctor"}
        onChange={handleChange}
      />
      <Radio
        id="job2"
        name="job"
        value="nurse"
        text="간호사"
        selected={state === "nurse"}
        onChange={handleChange}
      />
      <Radio
        id="job3"
        name="job"
        value="researcher"
        text="연구자"
        selected={state === "researcher"}
        onChange={handleChange}
      />
      <Radio
        id="job4"
        name="job"
        value="manager"
        text="행정 담당자"
        selected={state === "manager"}
        onChange={handleChange}
      />
    </Container>
  );
}

function Job() {
  return (
    <div className="job">
      <SignUpForm
        title="회원 가입"
        description="해당하는 직무를 선택하세요."
        Form={Form}
      />
    </div>
  );
}

export default Job;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
