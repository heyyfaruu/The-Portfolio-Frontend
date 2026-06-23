import { useEffect, useState } from "react";
import axios from "axios";

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        "https://the-portfolio-backend-e162.onrender.com/api/feedback"
      );

      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Feedback Dashboard
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border border-slate-700">

          <thead>
            <tr className="bg-slate-800">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Company</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>

          <tbody>

            {feedbacks.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-700"
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.role}</td>
                <td className="p-3">{item.company}</td>
                <td className="p-3">{item.rating}</td>
                <td className="p-3">{item.message}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminFeedback;
