"use client";

import { useState } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !description || !picture) {
      setError("Please All fields are required");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          picture,
          description,
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
    <div className="grid gap-3 py-3 sm:grid-cols-2 gap-y-6">
      <div>
        <header className="text-3xl capitalize text-main">
          Rate our performance by providing your details
        </header>
        <div className="flex items-center gap-3 py-3">
          <h1 className="font-semibold text-green-600 uppercase ">
            Say Something About Revive
          </h1>
          <span className="w-16 h-[1.8px] bg-green-600 "></span>
        </div>
      </div>
      <div>
        {error && (
          <div className="w-full p-2 mb-2 text-white bg-red-600">{error}</div>
        )}
        <form action="POST" onSubmit={handleSubmit}>
          <div className="grid gap-y-3">
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
            <input type="file" onChange={(e) => setPicture(e.target.value)} />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Say Something About Revive"
              className="w-full px-6 py-3 my-4 border-2 outline-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="px-16 py-3 text-lg text-white rounded-md sm bg-main hover:bg-green-600 sm:text-xl"
          >
            {loading && error ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
