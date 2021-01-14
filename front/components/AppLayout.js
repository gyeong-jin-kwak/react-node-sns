import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, Input, Row, Col } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton="Search" />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>

      {/* 반응형/ xs: mobile, sm: tablet, md: desktop / #breakpoint / gutter: 간격 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn = { setIsLoggedIn } /> : <LoginForm setIsLoggedIn = { setIsLoggedIn } /> }
        </Col>

        <Col xs={24} md={12}>
          {children}
        </Col>

        <Col xs={24} md={6}>
          <a href="https://velog.io/@gyeong-jin-kwak" target="_blank" rel="norefferer noopener">Made by GyeongJinKwak</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  // node.js x , react node o
};

export default AppLayout;