export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold">
        CampusHub
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/create">Create Event</a>
      </div>
    </nav>
  );
}