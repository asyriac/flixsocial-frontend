import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/components/Loading/Loading";
import { profileAPI } from "../../../services";
import Tweet from "../../post/Tweet/Tweet";
import { fetchUserTweets, followUser } from "../profileSlice";
import "./UserProfile.css";

const UserProfile = () => {
  const [profileLoading, setProfileLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const { username } = useParams();
  const { user, posts } = useSelector((state) => state.profile);
  const [userDetails, setUserDetails] = useState();
  const dispatch = useDispatch();
  const userPosts = posts.filter((post) => !post.hasOwnProperty("replyTo"));
  const replies = posts.filter((post) => post.hasOwnProperty("replyTo"));
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const isOwnAccount = userDetails?._id === user._id;

  useEffect(() => {
    const fetchProfile = async () => {
      let res;
      let username_profile = username ? username : user.username;
      res = await profileAPI.getUserProfile(username_profile);
      setUserDetails(res.data.user);
      setProfileLoading(false);
      setIsFollowing(res.data.user?.followers?.includes(user._id));
      setFollowersCount(res.data.user?.followers?.length);
      dispatch(fetchUserTweets(res.data.user._id));
    };
    fetchProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleActiveTab = (index) => {
    setActiveTab(index);
  };

  const handleUnfollow = () => {
    dispatch(followUser(userDetails._id));
    setIsFollowing((prevState) => !prevState);
    setFollowersCount((prevState) => prevState - 1);
  };

  const handleFollow = () => {
    dispatch(followUser(userDetails._id));
    setIsFollowing((prevState) => !prevState);
    setFollowersCount((prevState) => prevState + 1);
  };

  if (profileLoading) return <Loading />;

  return (
    <div className="body-container ">
      <div>
        <h3 className="py-1 title px-1">{userDetails.username}</h3>
      </div>
      <div className="home-body">
        <div className="cover-photo-container">
          <div className="img-container">
            <img className="img-round" src={userDetails.profilePic} alt="user profile" />
          </div>
        </div>
        <div className="profile-buttons py-1 mt-sm">
          {!isOwnAccount && (
            <div>
              {isFollowing && (
                <button className="btn btn-secondary btn-sm" onClick={handleUnfollow}>
                  Following
                </button>
              )}
              {!isFollowing && (
                <button className="btn btn-secondary btn-sm" onClick={handleFollow}>
                  Follow
                </button>
              )}
            </div>
          )}
        </div>
        <div className="user-details py-1">
          <h3 className="display-name">{`${userDetails.firstName} ${userDetails.lastName}`}</h3>
          <span className="display-name">{`@${userDetails.username}`}</span>
          <div className="follower-container gap">
            <span>{userDetails.following.length} following</span>
            <span>{followersCount} followers</span>
          </div>
        </div>
        <div className="tabs-container pt-1">
          <div onClick={() => toggleActiveTab(1)} className={`tab ${activeTab === 1 && "active"}`}>
            Posts
          </div>
          <div onClick={() => toggleActiveTab(2)} className={`tab ${activeTab === 2 && "active"}`}>
            Replies
          </div>
        </div>
        <div className="tab-content-container">
          <div className={`tab-content ${activeTab === 1 && "active-content"}`}>
            {userPosts.map(({ _id, postedBy, content, createdAt, likes, retweetData, retweetUsers, replyTo }) => (
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
            {userPosts.length === 0 && <h3 className="text-center mt-sm">No posts to show.</h3>}
          </div>
          <div className={`tab-content ${activeTab === 2 && "active-content"}`}>
            {replies.map(({ _id, postedBy, content, createdAt, likes, retweetData, retweetUsers, replyTo }) => (
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
            {replies.length === 0 && <h3 className="text-center mt-sm">No replies to show.</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
