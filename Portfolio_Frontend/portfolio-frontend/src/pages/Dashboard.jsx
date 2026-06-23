import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MessageSquare,
  FolderKanban,
  PlusCircle,
  LogOut,
} from "lucide-react";

function Dashboard() {

    const [projectCount, setProjectCount] = useState(0);
const [feedbackCount, setFeedbackCount] = useState(0);

    const adminEmail =
localStorage.getItem("adminEmail");

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.setItem(
  "adminEmail",
  formData.email
);

    window.location.href = "/login";

  };

  const fetchDashboardData = async () => {
  try {
    const projectsResponse = await axios.get(
      "http://https://the-portfolio-backend-e162.onrender.com/api/projects"
    );

    const feedbackResponse = await axios.get(
      "http://https://the-portfolio-backend-e162.onrender.com/api/feedback"
    );

    setProjectCount(projectsResponse.data.length);
    setFeedbackCount(feedbackResponse.data.length);

  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  fetchDashboardData();
}, []);



  return (

    

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Admin Dashboard
        </h1>

        <p className="text-slate-400 mb-12">
          Manage portfolio projects and recruiter feedback.
        </p>

        <div
    className="
    bg-slate-900
    px-5
    py-3
    rounded-xl
    border
    border-slate-700
    "
  >
    <p className="text-slate-400 text-sm">
      Logged In As
    </p>

    <p className="text-cyan-400 font-semibold">
      Admin
    </p>
    <p className="text-cyan-400">
  {adminEmail}
</p>

  </div>
        {/* Stats Section */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

  {/* Projects */}

  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
    <h2 className="text-slate-400 text-lg">
      Projects
    </h2>

    <h3 className="text-5xl font-bold mt-2 text-cyan-400">
      {projectCount}
    </h3>
  </div>

  {/* Feedbacks */}

  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
    <h2 className="text-slate-400 text-lg">
      Feedbacks
    </h2>

    <h3 className="text-5xl font-bold mt-2 text-green-400">
      {feedbackCount}
    </h3>
  </div>

  {/* Admin Status */}

  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
    <h2 className="text-slate-400 text-lg">
      Admin Status
    </h2>

    <h3 className="text-5xl font-bold mt-2 text-emerald-500">
      Active
    </h3>
  </div>

</div>
        {/* Actions */}

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/add-project"
            className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-8
            hover:border-cyan-500
            transition
            "
          >
            <PlusCircle size={40} />

            <h2 className="text-xl font-semibold mt-4">
              Add Project
            </h2>

            <p className="text-slate-400 mt-2">
              Create a new portfolio project.
            </p>

          </Link>

          <Link
            to="/manage-projects"
            className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-8
            hover:border-cyan-500
            transition
            "
          >
            <FolderKanban size={40} />

            <h2 className="text-xl font-semibold mt-4">
              Manage Projects
            </h2>

            <p className="text-slate-400 mt-2">
              Edit and delete projects.
            </p>

          </Link>

          <Link
            to="/admin-feedback"
            className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-8
            hover:border-cyan-500
            transition
            "
          >
            <MessageSquare size={40} />

            <h2 className="text-xl font-semibold mt-4">
              View Feedback
            </h2>

            <p className="text-slate-400 mt-2">
              Review recruiter feedback.
            </p>

          </Link>

        </div>

        <button
          onClick={handleLogout}
          className="
          mt-10
          flex
          items-center
          gap-2
          bg-red-600
          hover:bg-red-700
          px-6
          py-3
          rounded-lg
          "
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>

  );
}

export default Dashboard;