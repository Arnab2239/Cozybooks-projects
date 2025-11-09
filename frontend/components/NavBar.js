import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow">
              CB
            </div>
            <div>
              <div className="font-extrabold tracking-tight">CozyBooks</div>
              <div className="text-xs text-gray-500 -mt-1">books • stories • design</div>
            </div>
          </a>
        </Link>
        <div className="hidden sm:flex gap-5 text-sm">
          <Link href="/about"><a className="text-gray-600 hover:text-gray-900">About</a></Link>
          <a className="text-gray-600 hover:text-gray-900" href="#">Contact</a>
          <a className="px-3 py-1 rounded-lg bg-indigo-600 text-white shadow hover:shadow-md" href="#">Cart</a>
        </div>
      </div>
    </nav>
  );
}
