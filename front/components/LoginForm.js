import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e)=>{
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e)=>{
    setPassword(e.target.value);
  }, []);

  return (
    // React Form Library 
    <Form>
      <div>
        <label htmlFor="user-id">ID</label> <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label> <br />
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
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonContainer>
    </Form>
  )
}

export default LoginForm