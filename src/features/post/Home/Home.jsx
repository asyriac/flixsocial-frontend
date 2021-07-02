import "./Home.css";
import NewTweet from "../NewTweet/NewTweet";
import Tweet from "../Tweet/Tweet";
import Loading from "../../../common/components/Loading/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    console.log("aaa");
    dispatch(fetchTweets());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="body-container ">
      <div>
        <h3 className="py-1 title px-1">Home</h3>
      </div>
      <div className="home-body py-1 px-1">
        <NewTweet />
        <div className="px-1 py-1">
          {posts.map(({ _id, postedBy, content, createdAt, likes, retweetData, retweetUsers, replyTo }) => (
            <Tweet
              id={_id}
              timestamp={createdAt}
              username={postedBy.username}
              firstName={postedBy.firstName}
              lastName={postedBy.lastName}
              tweetMessage={content}
              profilePic={postedBy.profilePic}
              key={_id}
              likes={likes}
              retweetData={retweetData}
              retweetedUsers={retweetUsers}
              replyTo={replyTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
