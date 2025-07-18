'use client';

import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 font-sans px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Mini Next.js Page</h1>
        <p className="text-gray-600 mb-6">This is modified a single-page component with a simple counter.</p>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-medium">Count: <span className="text-blue-600">{count}</span></p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
