import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';

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
      <div>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  )
}

export default LoginForm