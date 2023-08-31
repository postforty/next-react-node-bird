import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

// const UseProfile = ({ setIsLoggedIn }) => {
const UseProfile = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);

  console.log("me", me);

  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    // setIsLoggedIn(false);
    // dispatch(logoutRequestAction());
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Posts.length}
        </div>,
        <div key="followings">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
        description={
          <Button onClick={() => onLogOut()} loading={logOutLoading}>
            로그아웃
          </Button>
        }
      />
    </Card>
  );
};

export default UseProfile;
