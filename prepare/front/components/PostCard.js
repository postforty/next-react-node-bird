import { useState, useCallback } from "react";
import { Avatar, Button, Card, Popover } from "antd";
import { useSelector } from "react-redux";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const id = useSelector((state) => state.user.me?.id);
  // const { me } = useSelector((state) => state.user);
  // 보호 연산자
  // const id = me && me.id;
  // 옵셔널 체이닝
  // const id = me?.id;
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열 안에 JSX를 넣을때는 key를 넣어야 한다!
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id && (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                )}
                <Button>신고</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && <div>댓글 부분</div>}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
};

export default PostCard;
