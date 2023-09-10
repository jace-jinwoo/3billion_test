import React, { useEffect } from "react";
import styled from "styled-components";
import { MAIN_COLOR, LIGHT_GREY, WHITE, DARK_GREY } from "constant/color";
import Button from "components/atom/Button";
import { FS_1_DOT_4_REM, FS_2_DOT_4_REM } from "constant/font-size";
import Lead from "assets/svg/Lead";
import { useLocation, useNavigate } from "react-router-dom";

interface SignUpFormType {
  title: string;
  description: string;
  sub?: string;
  Form: React.FC;
}

const getPath = (pageNum: number) => {
  switch (pageNum) {
    case 1:
      return "/";
    case 2:
      return "/agency";
    case 3:
      return "/license";
    case 4:
      return "/account";
    case 5:
      return "/password";
    case 6:
      return "/guide";
    default:
      return "/";
  }
};

function SignUpForm({ title, description, sub, Form }: SignUpFormType) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("location :: ", location);

  const updatedLocation = {
    ...location,
    state: {
      ...location.state,
      pageNum: 2,
    },
  };
  // useEffect(() => {
  //   location.state.pageNum = 1;
  //   console.log("location :: ", location);
  // }, [location]);

  return (
    <Container className="sign-up-form">
      <Header className="sign-up-form-header">
        <Title>{title}</Title>
      </Header>
      <InnerLayout>
        <DescContainer>
          <Description>{description}</Description>
          <Sub>{sub}</Sub>
        </DescContainer>
        <Form />

        <ButtonWrapper>
          {location.pathname !== "/" && (
            <Button
              text="이전"
              bgcolor={LIGHT_GREY}
              color={DARK_GREY}
              LIcon={<Lead size={24} color="#6C7380" />}
              onClick={() => {
                // if (!location.state?.pageNum) return;
                const path = getPath(--location.state.pageNum);
                navigate(path, { state: { pageNum: location.state.pageNum } });
              }}
            />
          )}
          <Button
            text="다음"
            RIcon={<Lead size={24} color={WHITE} rotationAngle={180} />}
            onClick={() => {
              // if (!location.state?.pageNum) navigate(path);
              console.log("pageNum :: ", location.state?.pageNum);
              console.log("updatedLocation :: ", updatedLocation);
              const pageNum = location.state?.pageNum
                ? ++location.state.pageNum
                : updatedLocation.state.pageNum;
              const path = getPath(pageNum);
              navigate(path, { state: { pageNum: pageNum } });
            }}
          />
        </ButtonWrapper>
      </InnerLayout>
    </Container>
  );
}

export default SignUpForm;

const Container = styled.div`
  height: 100vh;
`;
const Header = styled.header`
  height: 80px;
  line-height: 80px;
  margin-bottom: 48px;
  background-color: ${MAIN_COLOR};
`;
const Title = styled.h1`
  color: ${WHITE};
  font-size: ${FS_2_DOT_4_REM};
  text-align: center;
`;
const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 632px;
  height: calc(100% - 128px);
  margin: 0 auto;
`;
const DescContainer = styled.div`
  margin-bottom: 32px;
`;
const Description = styled.h2`
  font-size: ${FS_2_DOT_4_REM};
`;
const Sub = styled.p`
  margin-top: 10px;
  font-size: ${FS_1_DOT_4_REM};
  color: #6c7380;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
  margin: auto 0 48px;
`;
