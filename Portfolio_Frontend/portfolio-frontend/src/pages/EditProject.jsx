import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await axios.get(
        `https://the-portfolio-backend-e162.onrender.com/api/projects"/api/projects`
      );

      const selectedProject = response.data.find(
        (p) => p.id === Number(id)
      );

      if (selectedProject) {
        setProject(selectedProject);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };



  const handleUpdate = async (e) => {
    e.preventDefault();

    console.log("UPDATE BUTTON CLICKED");

    try {
      const token = localStorage.getItem("token");

      console.log("Project Data:", project);
      console.log("Project ID:", id);

      const response = await axios.put(
        `https://the-portfolio-backend-e162.onrender.com/api/projects"/api/projects/${id}`,
        project,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("UPDATE RESPONSE", response.data);
      toast.success("Project Updated Successfully");
      navigate("/manage-projects");


      toast.success("Project Updated Successfully");
      navigate("/manage-projects");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Update Project");
    }
  };



  return (
    <div className="min-h-screen bg-[#020b2d] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Edit Project
      </h1>

      <form
        onSubmit={handleUpdate}
        className="max-w-3xl space-y-5"
      >
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          rows="5"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <input
          type="text"
          name="technologies"
          value={project.technologies}
          onChange={handleChange}
          placeholder="Technologies"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <input
          type="text"
          name="githubLink"
          value={project.githubLink}
          onChange={handleChange}
          placeholder="GitHub Link"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <input
          type="text"
          name="liveLink"
          value={project.liveLink}
          onChange={handleChange}
          placeholder="Live Link"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <input
          type="text"
          name="imageUrl"
          value={project.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-4 rounded-lg bg-[#0d1a40]"
        />

        <button
          type="submit"
          className="bg-cyan-500 px-8 py-3 rounded-lg"
        >
          Update Project
        </button>
      </form>
    </div>
  );
}

export default EditProject;