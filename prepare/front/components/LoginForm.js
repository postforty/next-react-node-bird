import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

// const LoginForm = ({ setIsLoggedIn }) => {
const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");

  //   // ! 컴포넌트에 props로 넘기는 함수에는 useCallback(함수 캐싱)을 써야 최적화가 된다!
  //   const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  //   }, []);

  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);

  //   ! useMemo()는 값을 캐싱함. 스타일 값을 캐싱하여 사용하면 성능 최적화 가능
  //   const style = useMemo(() => ({ marginTop: 10 }), []);

  const onSubmitForm = useCallback(() => {
    // e.preventDefault(); // antd에는 기본 적용되 있으므로 불필요
    // setIsLoggedIn(true);
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* <div style={{ marginTop: 10 }}> 과 같이 작성하면 {} === {}는 false이기 때문에 리렌더링될 때 성능(리렌더링 최적화)에 영향을 주게 된다.*/}
      {/* styled-components를 이용해 이 문제를 해결할 수 있다. */}
      {/* 이전 컴포넌트의 버츄어돔과 새로운 컴포넌트의 버츄어돔을 비교하여 변경된 것을 리렌더링하는데 style 객체의 경우 동일한데 {} === {} 이기때문에 불필요한 리렌더링을 해버림. 이를 방지하기 위해 사용. */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;
