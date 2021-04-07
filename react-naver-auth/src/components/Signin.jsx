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

const InputStyle = styled(Input)`
  margin-bottom: 20px;
`;

const SingupButton = styled.button`
  align-self: flex-end;
  margin-top: 12px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  color: #8e8e8e;
`;

const Login = ({ history, users, onMakeCookie }) => {
  const idInputRef = useRef();
  const passwordInputRef = useRef();

  const goSignUp = () => history.push('signup');
  const handleSignIn = () => {
    const id = idInputRef.current.state.value;
    const password = passwordInputRef.current.state.value;
    const user = users.filter((user) => user.id === id && user.password === password);
    // console.log();

    if (user.length === 0) {
      alert('로그인 실패');
      return;
    }

    console.log(user);
    // 로그인 성공
    alert('로그인 성공');
    onMakeCookie(user[0].name);
    history.push('/');
  };

  return (
    <Main>
      <InputStyle ref={idInputRef} size="large" placeholder="아이디" />
      <InputStyle ref={passwordInputRef} size="large" placeholder="비밀번호" type="password" />
      <Button size="large" type="primary" style={{ width: '100%' }} onClick={handleSignIn}>
        로그인
      </Button>
      <SingupButton onClick={goSignUp}>회원가입</SingupButton>
    </Main>
  );
};

export default Login;
