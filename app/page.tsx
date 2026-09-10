import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 font-semibold uppercase tracking-widest text-blue-400">
              Your campus. Your community.
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Discover what&apos;s happening on campus.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Find events, meet people, join communities, and make the most
              out of your college experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/events"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
              >
                Explore Events →
              </a>

              <a
                href="/create"
                className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:bg-gray-800"
              >
                Create an Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x sm:grid-cols-4">
          <div className="p-6 text-center">
            <p className="text-3xl font-bold">50+</p>
            <p className="mt-1 text-sm text-gray-500">Events</p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-bold">12</p>
            <p className="mt-1 text-sm text-gray-500">Communities</p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-bold">1.2K+</p>
            <p className="mt-1 text-sm text-gray-500">Students</p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-bold">24/7</p>
            <p className="mt-1 text-sm text-gray-500">Campus Life</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-semibold text-blue-600">DON&apos;T MISS OUT</p>
            <h2 className="mt-2 text-3xl font-bold">
              Upcoming events
            </h2>
          </div>

          <a
            href="/events"
            className="hidden font-semibold text-blue-600 sm:block"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <EventCard
            eventId={0}
            title="Web Development Workshop"
            date="Sep 20"
            location="MGR Auditorium"
            category="Technology"
            description="Build your first modern web application and learn the fundamentals of React."
          />

          <EventCard
            eventId={1}
            title="AI & Future Tech"
            date="Sep 22"
            location="AB3"
            category="Talk"
            description="Explore how artificial intelligence is changing the future of technology."
          />

          <EventCard
            eventId={2}
            title="Campus Hackathon"
            date="Sep 28"
            location="AB1 209"
            category="Competition"
            description="Team up, build something awesome, and compete with students across campus."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 mb-20 rounded-3xl bg-blue-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Have something happening?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Create an event and get your campus community involved.
        </p>

        <a
          href="/create"
          className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Create an Event
        </a>
      </section>
    </main>
  );
}