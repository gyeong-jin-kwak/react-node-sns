import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
// import ProtoTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginAction } from '../reducers';

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitFrom = useCallback(() => {
    console.log(id, password);
    // setIsLoggedIn(true);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    // React Form Library
    <FormWrapper onFinish={onSubmitFrom}>
      <div>
        <label htmlFor="user-id">아이디</label> <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label> <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>

      {/* 리렌더링 될 때마다 객체가 새로 생기며 불변성의 원칙으로 {}==={} false 의 결과 를 초래
        <div style={{ marginTop: '10' }}> x
        styled component o 
      */}
      <ButtonContainer>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonContainer>
    </FormWrapper>
  );
};

// LoginForm.protoTypes = {
//   setIsLoggedIn: ProtoTypes.func.isRequired
// }

export default LoginForm;
