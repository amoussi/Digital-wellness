import { CheckCircle, TreePine, Ban, Palette, Coffee } from 'lucide-react';

export function Slide15() {
  const apps = [
    {
      icon: TreePine,
      name: 'Forest',
      description: 'Grow trees by staying off phone',
      emoji: '🌳',
      color: 'from-green-600 to-green-400'
    },
    {
      icon: Ban,
      name: 'Freedom',
      description: 'Block distracting websites',
      emoji: '🚫',
      color: 'from-red-600 to-red-400'
    },
    {
      icon: Palette,
      name: 'Grayscale',
      description: 'Makes phone boring!',
      emoji: '⬛',
      color: 'from-gray-600 to-gray-400'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 p-12">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/40 mb-4">
            <span className="text-green-300 uppercase tracking-wider">Part 3: Solutions</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            YOUR DIGITAL WELLNESS TOOLKIT
          </h1>
        </div>

        {/* 3 App cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${app.color} bg-opacity-10 rounded-2xl border-2 border-gray-700/50 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform`}
              >
                <CheckCircle className="w-12 h-12 text-green-300 mb-4" strokeWidth={2} />
                <Icon className="w-16 h-16 text-white mb-4" strokeWidth={2} />
                <h3 className="text-3xl text-white mb-3 font-bold">
                  {app.emoji} {app.name}
                </h3>
                <p className="text-lg text-gray-100 font-medium">{app.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tip box */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-6">
            <div className="animate-bounce bg-gradient-to-br from-blue-300 to-cyan-400 rounded-2xl p-4 shadow-lg">
              <Coffee className="w-20 h-20 text-white flex-shrink-0" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-3xl text-white mb-2 font-bold">PHONE STACK GAME:</h3>
              <p className="text-xl text-white font-semibold">
                Stack phones at café. First to grab pays! ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
