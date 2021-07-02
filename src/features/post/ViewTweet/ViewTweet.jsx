import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTweet } from "../postSlice";
import Loading from "../../../common/components/Loading/Loading";
import Tweet from "../Tweet/Tweet";

const ViewTweet = () => {
  const { postId } = useParams();
  console.log(postId);
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const [isLoading, setIsLoading] = useState(true);
  const { post: myPost, replyTo, replies } = post;

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchSingleTweet({ postId }));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log(replies);

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
        />
        <div className="reply-seperator"></div>
        {replies.map((reply) => {
          return (
            <Tweet
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
