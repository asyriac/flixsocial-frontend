import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTweet } from "../postSlice";
import Loading from "../../../common/components/Loading/Loading";
import Tweet from "../Tweet/Tweet";

const ViewTweet = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);
  const [isMounted, setIsMounted] = useState(false);
  const { post: myPost, replyTo, replies } = post;

  useEffect(() => {
    function fetchData() {
      dispatch(fetchSingleTweet({ postId }));
      setIsMounted(true);
    }
    fetchData();
  }, [postId]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isMounted || loading) {
    return <Loading />;
  }

  return (
    <div className="body-container ">
      <div>
        <h3 className="py-1 title px-1">Post</h3>
        {post.replyTo && (
          <Tweet
            id={replyTo._id}
            timestamp={replyTo.createdAt}
            username={replyTo.postedBy.username}
            firstName={replyTo.postedBy.firstName}
            lastName={replyTo.postedBy.lastName}
            tweetMessage={replyTo.content}
            profilePic={replyTo.postedBy.profilePic}
            likes={replyTo.likes}
            retweetData={replyTo.retweetData}
            retweetedUsers={replyTo.retweetUsers}
            replyTo={replyTo.replyTo}
          />
        )}
        <Tweet
          id={myPost._id}
          timestamp={myPost.createdAt}
          username={myPost.postedBy.username}
          firstName={myPost.postedBy.firstName}
          lastName={myPost.postedBy.lastName}
          tweetMessage={myPost.content}
          profilePic={myPost.postedBy.profilePic}
          likes={myPost.likes}
          retweetData={myPost.retweetData}
          retweetedUsers={myPost.retweetUsers}
          replyTo={myPost.replyTo}
          largeFont={true}
          isUserPost={true}
        />
        <div className="reply-seperator"></div>
        {replies.map((reply) => {
          return (
            <Tweet
              key={reply._id}
              id={reply._id}
              timestamp={reply.createdAt}
              username={reply.postedBy.username}
              firstName={reply.postedBy.firstName}
              lastName={reply.postedBy.lastName}
              tweetMessage={reply.content}
              profilePic={reply.postedBy.profilePic}
              likes={reply.likes}
              retweetData={reply.retweetData}
              retweetedUsers={reply.retweetUsers}
              replyTo={reply.replyTo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewTweet;
