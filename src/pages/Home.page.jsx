import Sidebar from "../common/components/Sidebar/Sidebar";
import Home from "../features/post/Home/Home";
import "./page.css";

const HomePage = () => {
  return (
    <div className="my-grid home-page">
      <Sidebar />
      <Home />
    </div>
  );
};

export default HomePage;
