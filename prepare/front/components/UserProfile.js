import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/user";

// const UseProfile = ({ setIsLoggedIn }) => {
const UseProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => {
    state.user;
  });
  const onLogOut = useCallback(() => {
    // setIsLoggedIn(false);
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
        description={
          <Button onClick={() => onLogOut()} loading={isLoggingOut}>
            로그아웃
          </Button>
        }
      />
    </Card>
  );
};

export default UseProfile;
