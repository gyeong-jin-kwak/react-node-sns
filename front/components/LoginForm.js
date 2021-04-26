import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// import ProtoTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginRequestAction, LOG_IN_REQUEST } from '../reducers/user';

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state)=>state.user)
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(()=>{
    if(logInError) {
      alert(logInError)
    }
  }, [logInError])

  const onSubmitFrom = useCallback(() => {
    console.log(email, password);
    // setIsLoggedIn(true);
    // dispatch(loginRequestAction({ email, password }));
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password }
    })
  }, [email, password]);

  return (
    // React Form Library
    <FormWrapper onFinish={onSubmitFrom}>
      <div>
        <label htmlFor="user-email">이메일</label> <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
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
        <Button type="primary" htmlType="submit" loading={logInLoading}>
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
