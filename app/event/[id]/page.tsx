"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

type Event = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
};

const defaultEvents: Event[] = [
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

export default function EventDetails() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const savedEvents = JSON.parse(
      localStorage.getItem("campushub-events") || "[]"
    );

    const allEvents = [...defaultEvents, ...savedEvents];

    const eventId = Number(params.id);

    if (!Number.isNaN(eventId) && allEvents[eventId]) {
      setEvent(allEvents[eventId]);
    }
  }, [params.id]);

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">
            Event not found
          </h1>

          <p className="mt-3 text-gray-500">
            This event does not exist.
          </p>

          <a
            href="/events"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Back to Events
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            {event.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold sm:text-6xl">
            {event.title}
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            {event.description}
          </p>
        </div>
      </section>

      {/* Event Information */}
      <section className="mx-auto max-w-4xl px-6 py-12">

        <div className="grid gap-6 sm:grid-cols-2">

          {/* Date */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              DATE
            </p>

            <p className="mt-2 text-xl font-bold">
              📅 {event.date}
            </p>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              LOCATION
            </p>

            <p className="mt-2 text-xl font-bold">
              📍 {event.location}
            </p>
          </div>

        </div>

        {/* About */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold">
            About this event
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {event.description}
          </p>

          <button
            onClick={() => alert("Registration successful! 🎉")}
            className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Register for Event →
          </button>

          <a
            href="/events"
            className="mt-4 block text-center font-semibold text-gray-600 hover:text-blue-600"
          >
            ← Back to all events
          </a>

        </div>

      </section>
    </main>
  );
}