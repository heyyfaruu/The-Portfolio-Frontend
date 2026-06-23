import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://the-portfolio-backend-e162.onrender.com/api/projects / api / auth / login",
        formData
      );

      if (
        response.data === "Invalid Password" ||
        response.data === "User Not Found"
      ) {

        setError(response.data);
        return;
      }

      localStorage.setItem(
        "token",
        response.data
      );

      navigate("/dashboard");

    } catch (error) {

      setError("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-slate-950">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-xl w-[400px]"
      >

        <h1 className="text-white text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded"
        />

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="
          w-full
          bg-cyan-500
          text-white
          p-3
          rounded
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;