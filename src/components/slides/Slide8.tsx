import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide8() {
  const stats = [
    { 
      emoji: '🧠',
      value: '+50%', 
      label: 'Anxiety since 2010',
      sublabel: 'risen sharply',
      color: 'from-pink-600 to-pink-400'
    },
    { 
      emoji: '😟',
      value: '2x', 
      label: 'Depression risk',
      sublabel: '3+ hrs/day',
      color: 'from-red-600 to-red-400'
    },
    { 
      emoji: '📱',
      value: '96', 
      label: 'Phone checks per day',
      color: 'from-purple-600 to-purple-400'
    },
    { 
      emoji: '⚠️',
      value: '70%', 
      label: 'Teens anxious without phone',
      color: 'from-orange-600 to-orange-400'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1729105140273-b5e886a4f999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1lbnRhbCUyMGhlYWx0aHxlbnwxfHx8fDE3NjUzMTc1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Brain mental health"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/40 mb-2">
            <span className="text-pink-300 uppercase tracking-wider text-sm">Part 2: Health Impacts</span>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            THE MENTAL HEALTH CRISIS
          </h1>
        </div>

        {/* 2x2 Grid of stat boxes */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} bg-opacity-10 rounded-2xl border-2 border-pink-500/40 p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform`}
            >
              <span className="text-4xl mb-3">{stat.emoji}</span>
              <div className="text-5xl text-white mb-2 font-bold">
                {stat.value}
              </div>
              <div className="text-lg text-gray-100 mb-1 font-semibold">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-sm text-gray-200 font-medium">{stat.sublabel}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
