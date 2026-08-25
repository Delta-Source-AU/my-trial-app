'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">My Interactive Next.js App</h1>
      <p className="text-xl text-slate-300 mb-8">
        Testing React state and live deployments!
      </p>

      {/* Interactive Card */}
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-center border border-slate-700 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-2">Counter Trial</h2>
        <p className="text-5xl font-extrabold text-indigo-400 my-4">{count}</p>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg font-medium transition"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-medium transition"
          >
            Increase
          </button>
        </div>
      </div>
    </main>
  );
}
