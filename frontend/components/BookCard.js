import Link from 'next/link';

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all overflow-hidden">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={book.cover} alt={book.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-500">by {book.author}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">₹{book.price}</span>
            <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">★ {book.rating}</span>
          </div>
          <Link href={`/books/${book.id}`}>
            <a className="px-3 py-1 bg-indigo-600 text-white rounded-lg">View</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
