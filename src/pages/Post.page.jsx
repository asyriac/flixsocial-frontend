import Sidebar from "../common/components/Sidebar/Sidebar";
import ViewTweet from "../features/post/ViewTweet/ViewTweet";

const PostPage = () => {
  return (
    <div className="my-grid home-page">
      <Sidebar />
      <ViewTweet />
    </div>
  );
};

export default PostPage;
