import Sidebar from "../common/components/Sidebar/Sidebar";
import Home from "../features/post/Home/Home";
import Suggestions from "../features/post/Suggestions/Suggestions";
import "./page.css";

const HomePage = () => {
  return (
    <div className="my-grid home-page">
      <Sidebar />
      <Home />
      <Suggestions />
    </div>
  );
};

export default HomePage;
