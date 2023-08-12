import PropTypes from "prop-types";
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

// 타입 검사를 위해 prop-types 사용
// 타입스크립트를 사용한다면 불필요
AppLayout.proTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
