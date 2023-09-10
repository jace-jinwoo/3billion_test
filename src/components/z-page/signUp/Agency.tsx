import React, { useState } from "react";
import styled from "styled-components";
import SignUpForm from "components/template/SignUpForm";
import Labeling from "components/molecule/Labeling";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Form() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };
  return (
    <Labeling
      text="기관명"
      Form={
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          placeholder="기관명을 입력하세요."
          formatResult={formatResult}
        />
      }
    />
  );
}

function Agency() {
  return (
    <div className="agency search">
      <SignUpForm
        title="회원 가입"
        description="소속된 기관을 입력하세요."
        sub="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
        Form={Form}
      />
    </div>
  );
}

export default Agency;
