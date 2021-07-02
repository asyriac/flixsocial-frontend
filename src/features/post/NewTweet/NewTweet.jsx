import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewTweet } from "../postSlice";
import "./NewTweet.css";

const NewTweet = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const handlePostNewTweet = () => {
    dispatch(postNewTweet({ content }));
    setContent("");
  };

  return (
    <div className="flex gap newtweet-container px-1 py-1">
      <div className="img-container">
        <img className="img-round" src={user?.profilePic} alt="profile" />
      </div>
      <div className="newtweet-content-container">
        <textarea value={content} placeholder="What's happening?" className="mb-sm" onChange={(e) => setContent(e.target.value)} />
        <div>
          <button className="btn btn-secondary btn-sm" disabled={!content.length} onClick={handlePostNewTweet}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
