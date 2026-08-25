'use client';

import { useState } from 'react';

export default function Home() {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  // Check for a winner based on classic 3x3 grid combinations
  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],           // Diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index: number) => {
    // Ignore click if square is filled or game is won
    if (board[index] || winner) return;

    const nextBoard = board.slice();
    nextBoard[index] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-2 text-indigo-400">DW Noughts</h1>
      <p className="text-slate-400 mb-6">A trial Next.js Tic-Tac-Toe game</p>

      {/* Game Status */}
      <div className="text-xl font-semibold mb-6 h-8">
        {winner && <span className="text-green-400">Winner: {winner}! 🎉</span>}
        {isDraw && <span className="text-yellow-400">It's a Draw! 🤝</span>}
        {!winner && !isDraw && (
          <span>Next Player: <strong className={isXNext ? 'text-indigo-400' : 'text-pink-400'}>{isXNext ? 'X' : 'O'}</strong></span>
        )}
      </div>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-3 gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-2xl">
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 text-3xl font-extrabold bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition border border-slate-600"
          >
            <span className={square === 'X' ? 'text-indigo-400' : 'text-pink-400'}>
              {square}
            </span>
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition shadow-md"
      >
        Reset Game
      </button>
    </main>
  );
}