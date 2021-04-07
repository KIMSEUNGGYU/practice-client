import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';

const Main = styled.main`
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 470px;
`;

const LabelText = styled.label`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

const SignUp = ({ history, onSignUp }) => {
  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const rePasswordInputRef = useRef();
  const nameInputRef = useRef();

  const handleCreateUser = () => {
    const id = idInputRef.current.state.value;
    const password = passwordInputRef.current.state.value;
    const rePassword = rePasswordInputRef.current.state.value;
    const name = nameInputRef.current.state.value;

    if (!(id && password && rePassword && name)) {
      alert('모두 입력해주세요');
      return;
    }

    if (password !== rePassword) {
      alert('비밀번호를 확인해주세요');
      return;
    }

    onSignUp({
      id,
      password,
      name,
    });
    alert('가입 성공');
    history.push('/signin');
  };

  return (
    <Main>
      <LabelText for="id">아이디</LabelText>
      <StyledInput ref={idInputRef} size="large" placeholder="아이디" id="id" />
      <LabelText for="password">비밀번호</LabelText>
      <StyledInput
        ref={passwordInputRef}
        size="large"
        placeholder="비밀번호"
        id="password"
        type="password"
      />
      <LabelText for="re-password">비밀번호 재확인</LabelText>
      <StyledInput
        ref={rePasswordInputRef}
        size="large"
        placeholder="비밀번호 재확인"
        id="re-password"
        type="password"
      />
      <LabelText for="name">이름</LabelText>
      <StyledInput ref={nameInputRef} size="large" placeholder="이름" id="name" />

      <Button size="large" type="primary" style={{ width: '100%' }} onClick={handleCreateUser}>
        가입하기
      </Button>
    </Main>
  );
};
export default SignUp;
