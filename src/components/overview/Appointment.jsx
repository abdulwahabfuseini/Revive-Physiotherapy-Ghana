"use client";

import { useState } from "react";

const Appointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !subject ||
      !time ||
      !date ||
      !message
    ) {
      setError("Please All fields are required");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/appiontment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          subject,
          time,
          date,
          message,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid py-3 sm:grid-cols-2 gap-y-6" id="appointment">
      <div>
        <header className="text-3xl text-main">Consultation With Revive</header>
        <div className="flex items-center gap-3 py-3">
          <h1 className="font-medium text-green-600 uppercase ">
            Book an Appointment
          </h1>
          <span className="w-16 h-[1.8px] bg-green-600 "></span>
        </div>
      </div>
      <div>
        {error && (
          <div className="w-full p-2 mb-2 text-white bg-red-600">{error}</div>
        )}
        <form action="POST" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              name="poneNumber"
              placeholder="(000)-000-0000"
              className="px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="time"
              name="time"
              className="w-full px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="date"
              name="date"
              className="w-full px-6 py-3 border-2 outline-none whitespace-nowrap"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter Message"
            className="w-full px-6 py-3 my-4 border-2 outline-none"
            onChange={(e) => setMessage(e.target.value)}
          />
            <button
              disabled={loading}
              type="submit"
              className="px-6 py-3 text-lg text-white bg-main hover:bg-green-600"
            >
              {loading ? "Booking..." : "Book an Appointent"}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
