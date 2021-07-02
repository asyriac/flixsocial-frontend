import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { likeTweet, replyToTweet, retweetTweet } from "../postSlice";
import ReplyModal from "../ReplyModal/ReplyModal";
import "./Tweet.css";

const ReplyToTweet = ({ replyContent, setReplyContent }) => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="flex gap newtweet-container px-1 py-1">
      <div className="img-container">
        <img className="img-round" src={user?.profilePic} alt="profile" />
      </div>
      <div className="newtweet-content-container">
        <textarea value={replyContent} placeholder="Reply..." className="mb-sm" onChange={(e) => setReplyContent(e.target.value)} />
      </div>
    </div>
  );
};

const TweetBody = ({ displayName, username, time, tweetMessage, largeFont }) => {
  return (
    <>
      <div className="tweet-header gap">
        <a href="/" className="displayName">
          <span>{displayName}</span>
        </a>
        <span className="username">@{username}</span>
        <span className="date">{time}</span>
      </div>
      <div className={`tweet-body ${largeFont && `large-font`}`}>{tweetMessage}</div>
    </>
  );
};

const TweetFooter = ({ handleAddComment, handleRetweetTweet, hasUserRetweetedTweet, retweetCount, handleLikeTweet, hasUserLikedTweet, likesCount }) => {
  return (
    <div className="tweet-footer">
      <div className="tweet-button-container">
        <button onClick={handleAddComment}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
            <path
              className="tweet-button"
              d="M5.978 14.969a.38.38 0 0 1 .002-.033l-.002.033zm.001-.167a1.36 1.36 0 0 0 .001.003v-.003zm.04 1.9c2.678-2.462 3.007-2.656 3.793-2.734C13.364 13.615 16 11.01 16 8.004c0-3.26-3.085-6.003-7-6.003S2 4.745 2 8.004c0 1.893 1.175 3.767 3.054 4.957.783.495.958 1.117.941 1.778a2.548 2.548 0 0 1-.009.15c.022.33.032.92.033 1.814zm3.99-.743c-.185.018-1.625 1.276-4.32 3.774a1 1 0 0 1-1.68-.742c.02-2.362.011-3.709-.024-4.04-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="tweet-button-container">
        <button onClick={handleRetweetTweet}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
            <path
              className={`${hasUserRetweetedTweet ? "retweetedTweet" : "tweet-button"}`}
              d="M4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831 1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08 1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z"
            ></path>
          </svg>
          <span className={`pl-sm ${hasUserRetweetedTweet ? "retweetedTweet" : ""}`}>{retweetCount || ""}</span>
        </button>
      </div>
      <div className="tweet-button-container">
        <button onClick={handleLikeTweet}>
          {hasUserLikedTweet ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path className="likedTweet" d="M9.293 1.55l.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path
                className="tweet-button"
                d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242zM9.293 1.55l.707.707.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"
              ></path>
            </svg>
          )}

          <span className={`pl-sm ${hasUserLikedTweet ? "likedTweet" : ""}`}>{likesCount || ""}</span>
        </button>
      </div>
    </div>
  );
};

const UserImage = ({ profilePic }) => {
  return (
    <div className="img-container">
      <img className="img-round" src={profilePic} alt="profile" />
    </div>
  );
};

const Tweet = ({ id, firstName, lastName, username, timestamp, tweetMessage, profilePic, likes, retweetData, retweetedUsers, replyTo, largeFont }) => {
  const { user } = useSelector((state) => state.profile);
  const isRetweet = retweetData !== undefined;
  const retweetedBy = isRetweet ? username : null;
  if (isRetweet) {
    firstName = retweetData.postedBy.firstName;
    lastName = retweetData.postedBy.lastName;
    username = retweetData.postedBy.username;
    profilePic = retweetData.postedBy.profilePic;
    id = retweetData._id;
    timestamp = retweetData.createdAt;
    likes = retweetData.likes;
    tweetMessage = retweetData.content;
    retweetedUsers = retweetData.retweetUsers;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likesCount, setLikesCount] = useState(likes.length);
  const [retweetCount, setRetweetCount] = useState(retweetedUsers?.length);
  const [hasUserLikedTweet, setHasUserLikedTweet] = useState(likes.includes(user._id));
  const [hasUserRetweetedTweet, setHasUserRetweetedTweet] = useState(retweetedUsers?.includes(user._id));
  const [showModal, setShowModal] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const replyingTo = replyTo?.postedBy?.username || null;

  const time = moment(timestamp).fromNow();
  const displayName = `${firstName} ${lastName}`;
  const handleLikeTweet = (e) => {
    e.stopPropagation();
    if (hasUserLikedTweet) {
      setLikesCount((prevState) => prevState - 1);
    } else {
      setLikesCount((prevState) => prevState + 1);
    }
    setHasUserLikedTweet((prevState) => !prevState);
    dispatch(likeTweet({ id }));
  };

  const handleRetweetTweet = (e) => {
    e.stopPropagation();
    dispatch(retweetTweet({ id }));
  };

  const handleAddComment = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  const handleReplyToTweet = (e) => {
    e.stopPropagation();
    setReplyContent("");
    setShowModal(false);
    dispatch(replyToTweet({ id, replyContent }));
  };

  const handleViewTweet = () => {
    navigate(`/post/${id}`);
  };

  console.log(replyTo);
  return (
    <div className="tweet" onClick={handleViewTweet}>
      <div className="retweet-container">{isRetweet && <span>Retweeted by {retweetedBy}</span>}</div>
      <div className="retweet-container">{replyingTo && <span>Replying to {replyingTo}</span>}</div>
      <div className="tweet-container p-1 gap">
        <UserImage profilePic={profilePic} />
        <div className="tweet-content-container">
          <TweetBody displayName={displayName} username={username} time={time} tweetMessage={tweetMessage} largeFont={largeFont} />
          <TweetFooter
            handleAddComment={handleAddComment}
            handleRetweetTweet={handleRetweetTweet}
            hasUserRetweetedTweet={handleRetweetTweet}
            retweetCount={retweetCount}
            handleLikeTweet={handleLikeTweet}
            hasUserLikedTweet={hasUserLikedTweet}
            likesCount={likesCount}
          />
        </div>
      </div>
      <ReplyModal show={showModal} toggleModal={setShowModal} title={"Reply"} handleReplyToTweet={handleReplyToTweet}>
        <div className="tweet-container p-1 gap">
          <UserImage profilePic={profilePic} />
          <div className="tweet-content-container">
            <TweetBody displayName={displayName} username={username} time={time} tweetMessage={tweetMessage} />
          </div>
        </div>
        <ReplyToTweet replyContent={replyContent} setReplyContent={setReplyContent} />
      </ReplyModal>
    </div>
  );
};

export default Tweet;
