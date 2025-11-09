import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import BookCard from '../components/BookCard';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/books`)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="max-w-6xl mx-auto p-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-pink-50 p-8 mb-8 shadow">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Discover books you’ll love</h1>
            <p className="mt-2 text-gray-600">Hand-picked titles for curious minds. Zero setup payments here—just a clean demo.</p>
          </div>
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl" />
          <div className="absolute -right-10 top-10 w-80 h-80 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>
        {loading ? (
          <p>Loading books...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map(b => <BookCard key={b.id} book={b} />)}
          </div>
        )}
      </main>
    </div>
  );
}
