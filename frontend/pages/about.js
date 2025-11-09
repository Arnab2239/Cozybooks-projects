import NavBar from '../components/NavBar';
export default function About() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">About CozyBooks</h1>
        <p className="text-gray-600">Demo book-selling website with a Next.js frontend and an Express backend. No database (in-memory only).</p>
      </main>
    </div>
  );
}
