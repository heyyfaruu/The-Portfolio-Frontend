import axios from "axios";

const API_URL =
  "https://the-portfolio-backend-e162.onrender.com/api/projects";

export const getAllProjects = async () => {
  return await axios.get(API_URL);
};

export const updateProject = async (id, projectData, token) => {
  return await axios.put(`${API_URL}/${id}`, projectData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
