import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">NodeBird</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/signup">회원가입</Link>
      </div>
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
