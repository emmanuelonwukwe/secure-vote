import AccountSkeleton from "../../components/account/AccountSkeleton";
import ThumbUpIcon from "../../components/icons/ThumbUpIcon";
import ExportIcon from "../../components/icons/ExportIcon";
import ChatBubbleLeft from "../../components/icons/ChatBubbleLeft";
import SortIcon from "../../components/icons/SortIcon";
import InboxIcon from "../../components/icons/InboxIcon";
import InboxStackIcon from "../../components/icons/InboxStackIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import TrophyIcon from "../../components/icons/TrophyIcon";

export default function Dashboard() {
  const { user } = useAuth();

  return (<AccountSkeleton pageName="Dashboard">
    <div className="sm:max-h-[75vh] sm:overflow-y-auto p-1">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 justify-items-center">
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
            <h5 className="account-card-title">Cast Vote</h5>
          </a>
          <p className="account-card-sub-title">public/private</p>
          <Link to="/account/elections" className="account-card-link">
            Choose election
            <ExportIcon />
          </Link>
        </div>
        <div className="account-card">
          <TrophyIcon />
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
  </AccountSkeleton>)
} 