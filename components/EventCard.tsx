type EventCardProps = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  eventId: number;
};

export default function EventCard({
  title,
  date,
  location,
  category,
  description,
  eventId,
}: EventCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {category}
        </span>

        <span className="text-sm font-medium text-gray-500">
          {date}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-500">
        📍 {location}
      </p>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        {description}
      </p>

      <a
        href={`/event/${eventId}`}
        className="mt-6 block w-full rounded-xl bg-gray-900 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-600"
      >
        View Event →
      </a>
    </div>
  );
}