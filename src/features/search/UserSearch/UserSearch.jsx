import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../profile/profileSlice";
import "./UserSearch.css";

const UserSearch = ({ username, firstName, lastName, profilePic, followers, id, currentUser }) => {
  const [isFollowing, setIsFollowing] = useState(followers.includes(currentUser._id));
  const dispatch = useDispatch();

  const handleUnfollow = () => {
    dispatch(followUser(id));
    setIsFollowing((prevState) => !prevState);
  };

  const handleFollow = () => {
    dispatch(followUser(id));
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <div className="user">
      <div className="img-container">
        <img className="img-round" src={profilePic} alt="profile" />
      </div>
      <div className="user-details-container">
        <div className="header tweet-header">
          <Link className="displayName" to={`/profile/${username}`}>{`${firstName} ${lastName}`}</Link>
          <span className="username">@{username}</span>
        </div>
        {isFollowing && (
          <button className="btn btn-secondary btn-sm" onClick={handleUnfollow}>
            {" "}
            Following
          </button>
        )}
        {!isFollowing && (
          <button className="btn btn-secondary btn-sm" onClick={handleFollow}>
            {" "}
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
