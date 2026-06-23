import { useState } from "react";
import axios from "axios";


function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Visitor");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState("");
  const [reachOut, setReachOut] = useState(false);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const feedbackData = {
        name,
        email,
        role,
        company,
        rating,
        message,
        reachOut,
      };

      await axios.post(
        "https://the-portfolio-backend-e162.onrender.com/api/feedback",
        feedbackData
      );

      setSuccessMessage("Feedback submitted successfully!");

      setName("");
      setEmail("");
      setRole("Visitor");
      setCompany("");
      setRating(1);
      setMessage("");
      setReachOut(false);

    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 border-t border-slate-800 text-white px-8 py-28"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
        </div>
        <p className="text-center text-slate-400 mb-16">
          Have a project in mind or an opportunity for me? Let's connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-sky-400">
              Let's Connect
            </h3>

            <div className="space-y-5">

              <div className="
  bg-slate-900
  p-5
  rounded-xl
  border
  border-slate-800
  hover:border-sky-500
  hover:scale-[1.02]
  hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]
  transition-all
  duration-300
">
                <h4 className="text-sky-400 font-semibold">📧 Email</h4>
                <p className="text-slate-300">farhaan.attar313@gmail.com</p>
              </div>

              <div className="
  bg-slate-900
  p-5
  rounded-xl
  border
  border-slate-800
  hover:border-sky-500
  hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]
  transition-all
  duration-300
">
                <h4 className="text-sky-400 font-semibold">📱 Phone</h4>
                <p className="text-slate-300">+91 7841844192</p>
              </div>

              <div className="
  bg-slate-900
  p-5
  rounded-xl
  border
  border-slate-800
  hover:border-sky-500
  hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]
  transition-all
  duration-300
">
                <h4 className="text-sky-400 font-semibold">📍 Location</h4>
                <p className="text-slate-300">Nashik, Maharashtra</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://github.com/heyyfaruu"
                  target="_blank"
                  rel="noreferrer"
                  className="
px-5
py-3
rounded-xl
font-medium
bg-slate-900
border
border-slate-800
hover:border-sky-500
hover:-translate-y-1
hover:shadow-lg
transition-all
duration-300
"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/farhan-attar-b6006228b"
                  target="_blank"
                  rel="noreferrer"
                  className="
px-5
py-3
rounded-xl
font-medium
bg-slate-900
border
border-slate-800
hover:border-sky-500
hover:-translate-y-1
hover:shadow-lg
transition-all
duration-300
"
                >
                  LinkedIn
                </a>

                <a
                  href="Farhan_Attar_CV.pdf"
                  download
                  className="
px-6
py-3
rounded-xl
font-semibold
bg-sky-500
hover:bg-sky-600
hover:-translate-y-1
transition-all
duration-300
"
                >
                  Download Resume
                </a>

              </div>
              <div
                className="
 bg-slate-900
 p-5
 rounded-xl
 border
 border-slate-800
 hover:border-sky-500
 transition-all
 "
              >
                <h4 className="text-sky-400 font-semibold">
                  💼 Open To Work
                </h4>

                <p className="text-slate-300">
                  Actively seeking opportunities in
                  Java Full Stack Development,
                  Backend Development and Software Engineering.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}

          <div
            className="
    bg-slate-900
    p-8
    rounded-2xl
    border
    border-slate-800
    hover:border-sky-500
    hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]
    transition-all
    duration-300
  "
          >
            <h3 className="text-2xl font-semibold mb-6 text-sky-400">
              Send Feedback
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              >
                <option value="Visitor">Visitor</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Hiring Manager">Hiring Manager</option>
              </select>

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              />

              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              >
                <option value={1}>⭐ 1 Star</option>
                <option value={2}>⭐⭐ 2 Stars</option>
                <option value={3}>⭐⭐⭐ 3 Stars</option>
                <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
              </select>

              <textarea
                rows="5"
                placeholder="Write your feedback..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
    w-full
    p-3
    rounded-lg
    bg-slate-800
    border
    border-slate-700
    focus:outline-none
    focus:border-sky-500
  "
              />

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={reachOut}
                  onChange={(e) => setReachOut(e.target.checked)}
                />
                <span className="text-slate-300">
                  Please reach out to me
                </span>
              </label>

              {successMessage && (
                <div className="text-green-400 font-medium">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
    w-full
    bg-sky-500
    hover:bg-sky-600
    py-3
    rounded-lg
    font-semibold
  "
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
