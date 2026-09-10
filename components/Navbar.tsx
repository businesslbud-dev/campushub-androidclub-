export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold">
        CampusHub
      </h1>

      <div className="flex gap-6">
        <a
          href="/"
          className="font-semibold text-gray-900 hover:text-blue-600"
        >
          Home
        </a>

        <a
          href="/events"
          className="font-semibold text-gray-900 hover:text-blue-600"
        >
          Events
        </a>

        <a
          href="/create"
          className="font-semibold text-gray-900 hover:text-blue-600"
        >
          Create Event
        </a>
      </div>
    </nav>
  );
}