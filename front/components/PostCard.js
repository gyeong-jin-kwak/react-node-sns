import { useCallback, useState } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Button, Card, Popover, List, Comment } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import FollowButton from './FollowButton';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state)=>state.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(()=>{
    setLiked((prev) => !prev)
  },[]);
  const onToggleComment = useCallback(()=>{
    setCommentFormOpened((prev) => !prev)
  }, [])
  const id = useSelector((state) => state.user.me?.id);
  const onRemovePost = useCallback(()=>{
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [])
  
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? <HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={onToggleLike} /> : <HeartOutlined key="heart" onClick={onToggleLike} />
          ,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {
                id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </>
                ) : <Button>신고</Button>
              }
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
      <div>
        <CommentForm post={post} />
        <List 
          header={`${post.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={post.Comments}
          renderItem={(item)=>(
            <li>
              <Comment 
                author={item.User.nickname}
                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                content={item.content}
              />
            </li>
          )}
        />
      </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  )
}

PostCard.propTypes = {
  // post: PropTypes.object.isRequired,
  // object는 shape로 더 구체적으로 타입을 정해줄 수 있음
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
}

export default PostCard
