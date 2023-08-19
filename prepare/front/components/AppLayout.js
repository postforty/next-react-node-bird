import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

import { useSelector } from "react-redux"; // 리액트와 리덕스를 연결

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">NodeBird</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      {/* 거터: 컬럼 사이의 간격 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            // <UserProfile setIsLoggedIn={setIsLoggedIn} />
            <UserProfile />
          ) : (
            // <LoginForm setIsLoggedIn={setIsLoggedIn} />
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* rel="noreferrer noopener" : 새창을 누가 열었는지에 대한 정보를 제공하지 않음. 보안 위협 방지 */}
          <a
            href="https://postforty.tistory.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Go to Blog!
          </a>
        </Col>
      </Row>
    </div>
  );
};

// 타입 검사를 위해 prop-types 사용
// 타입스크립트를 사용한다면 불필요
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
