"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function CreateEventPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-gray-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Share with your campus
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Create an Event
          </h1>

          <p className="mt-4 text-gray-300">
            Have something exciting happening? Tell your campus community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">

            {/* Title */}
            <div>
              <label className="mb-2 block font-medium text-gray-900">
                Event title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Web Development Workshop"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block font-medium text-gray-900">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Technology</option>
                <option>Talk</option>
                <option>Competition</option>
                <option>Arts</option>
                <option>Sports</option>
                <option>Business</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block font-medium text-gray-900">
                Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-medium text-gray-900">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Innovation Lab"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-medium text-gray-900">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell students what this event is about..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Create Event
            </button>

            {submitted && (
              <div className="rounded-xl bg-green-50 p-4 text-center text-green-700">
                🎉 Event created successfully!
              </div>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}