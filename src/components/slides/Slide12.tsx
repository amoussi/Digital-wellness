import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide12() {
  const steps = [
    { 
      number: 1,
      emoji: '👁️',
      title: 'AWARENESS', 
      subtitle: 'Track your usage',
      color: 'from-indigo-600 to-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    { 
      number: 2,
      emoji: '🚧',
      title: 'BOUNDARIES', 
      subtitle: 'Set limits',
      color: 'from-purple-600 to-purple-400',
      bg: 'bg-purple-500/10'
    },
    { 
      number: 3,
      emoji: '🔄',
      title: 'REPLACEMENT', 
      subtitle: 'Better activities',
      color: 'from-green-600 to-green-400',
      bg: 'bg-green-500/10'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1762430440987-fc9c3f7bd961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGNoYWlucyUyMGZyZWVkb218ZW58MXx8fHwxNzY1NDAyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Breaking chains"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/40 mb-4">
            <span className="text-green-300 uppercase tracking-wider">Part 3: Solutions</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-6xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              TAKING BACK CONTROL
            </h1>
            <span className="text-6xl">💪</span>
          </div>
        </div>

        {/* 3 Big numbered steps */}
        <div className="flex-1 space-y-3">
          {steps.map((step) => {
            return (
              <div
                key={step.number}
                className={`${step.bg} rounded-2xl border-2 border-gray-700/50 p-6 flex items-center gap-4 hover:scale-105 transition-transform`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-4xl text-white flex-shrink-0 shadow-lg`}>
                  {step.number}
                </div>
                <span className="text-3xl">{step.emoji}</span>
                <div>
                  <h3 className={`text-3xl bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1 font-bold`}>
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-200 flex items-center gap-2 font-semibold">
                    {step.subtitle} {step.emoji}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
