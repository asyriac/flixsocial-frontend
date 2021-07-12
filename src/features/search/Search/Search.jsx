import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { searchPosts, searchUsers } from "../searchSlice";
import Tweet from "../../post/Tweet/Tweet";
import UserSearch from "../UserSearch/UserSearch";

const Search = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const { posts, users } = useSelector((state) => state.search);
  const { user } = useSelector((state) => state.profile);

  const toggleActiveTab = (index) => {
    setActiveTab(index);
  };

  const delayedHandleChange = useMemo(
    () =>
      debounce((value, tab) => {
        if (tab === 1) {
          dispatch(searchPosts(value));
        }
        if (tab === 2) dispatch(searchUsers(value));
      }, 500),
    [dispatch]
  );

  const handleChange = useCallback(
    (e) => {
      setSearchInput(e.target.value);
      delayedHandleChange(e.target.value, activeTab);
    },
    [delayedHandleChange, activeTab]
  );

  useEffect(() => {}, [activeTab]);

  return (
    <div className="body-container ">
      <div>
        <h3 className="py-1 title px-1">Search</h3>
      </div>
      <div className="home-body">
        <div className="search-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon search-icon">
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
          </svg>
          <input type="text" value={searchInput} onChange={handleChange} className="search-box" placeholder="Search for user or posts..." />
        </div>
        <div className="tabs-container pt-1">
          <div onClick={() => toggleActiveTab(1)} className={`tab ${activeTab === 1 && "active"}`}>
            Posts
          </div>
          <div onClick={() => toggleActiveTab(2)} className={`tab ${activeTab === 2 && "active"}`}>
            Users
          </div>
        </div>
        <div className="tab-content-container">
          <div className={`tab-content ${activeTab === 1 && "active-content"}`}>
            {posts.map(({ _id, postedBy, content, createdAt, likes, retweetData, retweetUsers, replyTo }) => (
              <Tweet
                key={_id}
                id={_id}
                timestamp={createdAt}
                username={postedBy.username}
                firstName={postedBy.firstName}
                lastName={postedBy.lastName}
                tweetMessage={content}
                profilePic={postedBy.profilePic}
                likes={likes}
                retweetData={retweetData}
                retweetedUsers={retweetUsers}
                replyTo={replyTo}
              />
            ))}
          </div>
          <div className={`tab-content ${activeTab === 2 && "active-content"}`}>
            <div className="search-user-container">
              {users.map(({ username, firstName, lastName, profilePic, _id, followers }) => {
                return (
                  <UserSearch key={_id} username={username} firstName={firstName} lastName={lastName} profilePic={profilePic} id={_id} followers={followers} currentUser={user} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
