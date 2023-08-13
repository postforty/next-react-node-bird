import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
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
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <div>{children}</div>
    </div>
  );
};

// 타입 검사를 위해 prop-types 사용
// 타입스크립트를 사용한다면 불필요
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
