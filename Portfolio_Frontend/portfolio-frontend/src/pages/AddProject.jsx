import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject() {

  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://https://the-portfolio-backend-e162.onrender.com/api/projects",
        project,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage("Project Added Successfully");

      setTimeout(() => {
        navigate("/manage-projects");
      }, 1500);

    } catch (error) {
      console.error(error);
      setMessage("Failed to Add Project");
    }

  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Add New Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          <input
            type="text"
            name="technologies"
            placeholder="Java, Spring Boot, React"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Link"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live Link"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-900"
          />

          {message && (
            <p className="text-green-400">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="
            bg-cyan-500
            px-8
            py-3
            rounded-lg
            hover:bg-cyan-600
            "
          >
            Save Project
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProject;