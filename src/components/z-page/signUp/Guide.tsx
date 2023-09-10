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
        name="guide"
        value="doctor"
        text="의사"
        selected={state === "doctor"}
        onChange={handleChange}
      />
      <Radio
        id="job2"
        name="guide"
        value="nurse"
        text="간호사"
        selected={state === "nurse"}
        onChange={handleChange}
      />
      <Radio
        id="job3"
        name="guide"
        value="researcher"
        text="연구자"
        selected={state === "researcher"}
        onChange={handleChange}
      />
      <Radio
        id="job4"
        name="guide"
        value="manager"
        text="행정 담당자"
        selected={state === "manager"}
        onChange={handleChange}
      />
    </Container>
  );
}

function Guide() {
  return (
    <div className="guide">
      {/* <SignUpForm title="회원 가입" Form={Form} /> */}
    </div>
  );
}

export default Guide;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
