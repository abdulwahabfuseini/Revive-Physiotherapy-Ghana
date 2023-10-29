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
    <div className="grid sm:grid-cols-2 py-3 gap-y-6">
      <div>
        <header className="text-3xl text-main">Consultation With Revive</header>
        <div className="flex gap-3 items-center py-3">
          <h1 className=" uppercase text-green-600 font-medium">Book an Appointment</h1>
          <span className="w-16 h-[1.8px] bg-green-600 "></span>
        </div>
      </div>
      <div>
        {error && (
          <div className="bg-red-600 p-2 w-full text-white">{error}</div>
        )}
        <form action="POST" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              name="poneNumber"
              placeholder="(000)-000-0000"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="time"
              name="time"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="date"
              name="date"
              className="border-2 py-3 px-6 outline-none whitespace-nowrap bg-gray-100"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter Message"
            className="my-4 border-2 w-full py-3 px-6 outline-none bg-gray-100"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-main text-white py-3 px-6 rounded-3xl hover:bg-green-600"
          >
            Book an Appointent
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
