const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// In-memory data (no DB)
const books = [
  {
    id: '1',
    title: 'The Art of Code',
    author: 'A. Developer',
    price: 299,
    rating: 4.6,
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=60',
    description: 'A modern guide to building great software—clean code, testing, and craft.'
  },
  {
    id: '2',
    title: 'Design Patterns Unlocked',
    author: 'Jane Architect',
    price: 399,
    rating: 4.8,
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=60',
    description: 'Patterns and practices for robust, scalable architectures with real examples.'
  },
  {
    id: '3',
    title: 'Journey Through Pages',
    author: 'Memoirist',
    price: 199,
    rating: 4.2,
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=60',
    description: 'A cozy read for rainy evenings. Stories, reflections, and warm characters.'
  }
];

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.get('/api/books', (_req, res) => res.json(books));
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});
app.post('/api/books/:id/buy', (req, res) => {
  const { id } = req.params;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json({ message: `Purchase successful for "${book.title}"`, id: book.id });
});

app.listen(PORT, () => console.log('Backend API running on http://localhost:' + PORT));
