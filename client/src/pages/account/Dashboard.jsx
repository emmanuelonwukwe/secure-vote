import { useAuth } from "../../contexts/AuthContext";
import ThumbUpIcon from "../../components/icons/ThumbUpIcon";
import ExportIcon from "../../components/icons/ExportIcon";
import ChatBubbleLeft from "../../components/icons/ChatBubbleLeft";
import SortIcon from "../../components/icons/SortIcon";
import InboxIcon from "../../components/icons/InboxIcon";
import InboxStackIcon from "../../components/icons/InboxStackIcon";
import LeftSide from "../../components/account/LeftSide";
import { Link } from "react-router-dom";
import { BACKEND_SITE } from "../../config/app";
import axiosRequest from "../../requests/axios-request";
import { useCallback, useState } from "react";

export default function Dashboard() {
  const { user, login } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = useCallback((e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('profile_photo', selectedFile);
    formData.append("old_photo_basename", user.profile_image);

    axiosRequest
      .post('/users/update/profile-photo', formData, {
        headers: {
          token: localStorage.getItem("jwt_token")
        }
      })
      .then((response) => {
        // Set the changed user now as the token owner
        localStorage.removeItem("jwt_token");
        localStorage.setItem("jwt_token", response.data.token);
        login(response.data.user);
        setIsUploading(false);
      })
      .catch((xhr) => {
        alert(xhr.response.data.message);
        setIsUploading(false);
        //console.error(xhr);
        // Handle error, e.g., show an error message
      });
  }, [user]);

  return (
    <div className="grid grid-cols-4 gap-6 mx-3">
      <div className="col-span-4 sm:col-span-2 md:col-span-1">
        <LeftSide />
      </div>
      <div className="col-span-4 sm:col-span-2 md:col-span-3">
        <div className="flex gap-2 mb-8">
          <input
            className="py-4 w-full px-4 rounded-full"
            placeholder="Search here..."
          />
          <label htmlFor="user-photo" className={`text-center hover:cursor-pointer" ${isUploading && 'animate-spin'}`}>
            <img
              src={user.profile_image ? `${BACKEND_SITE}/uploads/profile-photos/${user.profile_image}` : "/images/user-icon.jpg"}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <i>{user.role}</i>
          </label>
          <input type="file" accept=".jpg,.png,.svg,.jpeg" id="user-photo" onChange={handleUpload} hidden />
        </div>
        <div className="flex gap-5 mb-8">
          <img src="/images/vector9.svg" className="bg-dark-blue w-8 h-8" />
          <span className="font-bold text-2xl">Dashboard</span>
        </div>
        <div className="sm:max-h-[75vh] sm:overflow-y-auto">
          <div className="flex flex-wrap gap-5 justify-around items-center">
            {user.role == "manager" && (
              <div className="account-card">
                <InboxStackIcon />
                <a href="#">
                  <h5 className="account-card-title">Election Spaces</h5>
                </a>
                <p className="account-card-sub-title">10</p>
                <Link to="/account/election-space" className="account-card-link">
                  Manage elections
                  <ExportIcon />
                </Link>
              </div>
            )}
            <div className="account-card">
              <ThumbUpIcon />
              <a href="#">
                <h5 className="account-card-title">Total Votes</h5>
              </a>
              <p className="account-card-sub-title">5,600</p>
              <a href="#" className="account-card-link">
                See my votes
                <ExportIcon />
              </a>
            </div>

            <div className="account-card">
              <ChatBubbleLeft />
              <a href="#">
                <h5 className="account-card-title">Comments</h5>
              </a>
              <p className="account-card-sub-title">20+</p>
              <a href="#" className="account-card-link">
                See comments
                <ExportIcon />
              </a>
            </div>
            <div className="account-card">
              <InboxIcon />
              <a href="#">
                <h5 className="account-card-title">Total Polls</h5>
              </a>
              <p className="account-card-sub-title">5,600+</p>
              <a href="#" className="account-card-link">
                See polls
                <ExportIcon />
              </a>
            </div>
          </div>
          <div className="flex gap-5 mt-12">
            <SortIcon />
            <span className="font-bold text-2xl">Recent Activity</span>
          </div>
          <div className="overflow-auto mt-4 mb-8">
            <table className="w-full text-center">
              <thead className="bg-black text-white">
                <tr>
                  <th>Reference</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-green-500 font-bold">Refeoohsiijsu</td>
                  <td>Vote1</td>
                  <td>The best votes</td>
                  <td>23-01-2023 01:02:56</td>
                  <td>Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
