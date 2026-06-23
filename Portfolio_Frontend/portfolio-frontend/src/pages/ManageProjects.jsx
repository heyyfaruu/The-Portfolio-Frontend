import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ManageProjects() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://the-portfolio-backend-e162.onrender.com/api/projects"
      );

      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://the-portfolio-backend-e162.onrender.com/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Failed to delete project");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#020b2d] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Manage Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0d1a40] rounded-2xl p-6 border border-slate-700"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-slate-300 mt-3">
              {project.description}
            </p>

            <p className="text-cyan-400 mt-4">
              {project.technologies}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => navigate(`/edit-project/${project.id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProjects;