import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

export default function BookDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`${API_BASE}/api/books/${id}`)
      .then(r => r.json())
      .then(setBook)
      .catch(console.error);
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <main className="max-w-4xl mx-auto p-6">Loading...</main>
      </div>
    );
  }

  const handleBuy = async () => {
    const res = await fetch(`${API_BASE}/api/books/${book.id}/buy`, { method: 'POST' });
    const data = await res.json();
    alert(data.message || 'Purchased!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={book.cover} alt={book.title} className="w-full md:w-1/3 rounded-lg object-cover" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-1">by {book.author}</p>
            <p className="text-sm text-yellow-700 bg-yellow-100 inline-block px-2 py-0.5 rounded-full mb-4">★ {book.rating}</p>
            <p className="mb-4">{book.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">₹{book.price}</span>
              <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700" onClick={handleBuy}>Buy</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
