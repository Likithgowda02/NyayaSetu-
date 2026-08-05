import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import lawyers from "../Lawyers/lawyersData";

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lawyer = lawyers.find((l) => l.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("🎉 Appointment Booked Successfully!");

    navigate("/");
  };

  if (!lawyer) {
    return <h1 className="text-center mt-20 text-3xl">Lawyer Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          Book Appointment
        </h1>

        <p className="text-gray-600 mb-8">
          Booking with <strong>{lawyer.name}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="time"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Time</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
          </select>

          <textarea
            name="reason"
            rows="4"
            placeholder="Reason for Consultation"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Confirm Appointment
          </button>

        </form>

      </div>
    </div>
  );
}

export default BookAppointment;