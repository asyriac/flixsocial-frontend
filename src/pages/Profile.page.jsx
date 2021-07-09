import Sidebar from "../common/components/Sidebar/Sidebar";
import UserProfile from "../features/profile/UserProfile/UserProfile";

const ProfilePage = () => {
  return (
    <div className="my-grid home-page">
      <Sidebar />
      <UserProfile />
    </div>
  );
};
export default ProfilePage;
