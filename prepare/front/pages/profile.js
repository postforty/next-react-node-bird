import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "김일남" },
    { nickname: "김이남" },
    { nickname: "김삼남" },
    { nickname: "김사남" },
    { nickname: "김오남" },
    { nickname: "김육남" },
    { nickname: "김칠남" },
    { nickname: "김팔남" },
    { nickname: "김구남" },
    { nickname: "김십남" },
  ];
  const followingList = [
    { nickname: "김일남" },
    { nickname: "김이남" },
    { nickname: "김삼남" },
    { nickname: "김사남" },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
