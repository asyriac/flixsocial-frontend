import { Link } from "react-router-dom";
import "./UserSearch.css";

const UserSearch = ({ username, firstName, lastName, profilePic }) => {
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
        <button className="btn btn-secondary btn-sm">Follow</button>
      </div>
    </div>
  );
};

export default UserSearch;
