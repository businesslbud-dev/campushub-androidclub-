"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

const defaultEvents = [
  {
    title: "Web Development Workshop",
    date: "Sep 20",
    location: "Innovation Lab",
    category: "Technology",
    description:
      "Build your first modern web application and learn the fundamentals of React.",
  },
  {
    title: "AI & Future Tech",
    date: "Sep 22",
    location: "Main Auditorium",
    category: "Talk",
    description:
      "Explore how artificial intelligence is changing the future of technology.",
  },
  {
    title: "Campus Hackathon",
    date: "Sep 28",
    location: "Computer Lab",
    category: "Competition",
    description:
      "Team up, build something awesome, and compete with students across campus.",
  },
  {
    title: "Photography Walk",
    date: "Oct 02",
    location: "Main Gate",
    category: "Arts",
    description:
      "Explore campus through photography and meet other creative students.",
  },
  {
    title: "Football Tournament",
    date: "Oct 05",
    location: "Sports Ground",
    category: "Sports",
    description:
      "Bring your team and compete in the annual campus football tournament.",
  },
  {
    title: "Entrepreneurship Meetup",
    date: "Oct 10",
    location: "Seminar Hall",
    category: "Business",
    description:
      "Meet aspiring founders and learn how students are building real businesses.",
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(defaultEvents);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const savedEvents = JSON.parse(
      localStorage.getItem("campushub-events") || "[]"
    );

    setEvents([...defaultEvents, ...savedEvents]);
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gray-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            Explore
          </p>

          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Campus Events
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300">
            Find something interesting happening around campus.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-6xl px-6 py-10">

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>All</option>
            <option>Technology</option>
            <option>Talk</option>
            <option>Competition</option>
            <option>Arts</option>
            <option>Sports</option>
            <option>Business</option>
          </select>
        </div>

        {/* Event Count */}
        <p className="mb-6 text-sm text-gray-500">
          Showing {filteredEvents.length} events
        </p>

        {/* Event Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard
              key={`${event.title}-${events.indexOf(event)}`}
              eventId={events.indexOf(event)}
              {...event}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="rounded-2xl border border-dashed p-12 text-center">
            <p className="text-lg font-semibold">
              No events found.
            </p>

            <p className="mt-2 text-gray-500">
              Try a different search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}