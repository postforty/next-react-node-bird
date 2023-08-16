import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import "antd/dist/antd.css";

import wrapper from "next-redux-wrapper";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      {/* <div>공통 메뉴</div> */}
      <Component />
    </>
  );
};

NodeBird.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
