import Sidebar from "../common/components/Sidebar/Sidebar";
import Search from "../features/search/Search/Search";

const SearchPage = () => {
  return (
    <div className="my-grid home-page">
      <Sidebar />
      <Search />
    </div>
  );
};

export default SearchPage;
