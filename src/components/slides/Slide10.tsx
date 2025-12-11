
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide10() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 relative overflow-hidden p-12">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5" />

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/40 mb-2">
            <span className="text-pink-300 uppercase tracking-wider text-sm">Part 2: Health Impacts</span>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1">
            THE LONELINESS PARADOX
          </h1>
          <p className="text-xl text-pink-400">
            More connected, more alone
          </p>
        </div>

        {/* Big comparison */}
        <div className="flex items-center justify-center gap-8 mb-6 flex-1">
          <div className="text-center">
            <span className="text-5xl mb-2 block">👥</span>
            <div className="text-6xl text-indigo-400 mb-1">338</div>
            <p className="text-lg text-gray-300">Facebook friends</p>
          </div>

          <span className="text-3xl text-yellow-500">⚡</span>

          <div className="text-center">
            <span className="text-5xl mb-2 block">❤️</span>
            <div className="text-6xl text-green-400 mb-1">4</div>
            <p className="text-lg text-gray-300">Actual close friends</p>
          </div>
        </div>

        {/* 2 stat boxes */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-pink-500/10 rounded-2xl border-2 border-pink-500/40 p-6 text-center hover:scale-105 transition-transform">
            <TrendingDown className="w-12 h-12 text-pink-400 mb-3 mx-auto" />
            <div className="text-5xl text-pink-400 mb-2">3x</div>
            <p className="text-lg text-gray-300">Loneliness tripled</p>
          </div>

          <div className="bg-pink-500/10 rounded-2xl border-2 border-pink-500/40 p-6 text-center hover:scale-105 transition-transform">
            <TrendingDown className="w-12 h-12 text-red-400 mb-3 mx-auto" />
            <div className="text-5xl text-red-400 mb-2">-30%</div>
            <p className="text-lg text-gray-300">Face-to-face declined</p>
          </div>
        </div>
      </div>
    </div>
  );
}
