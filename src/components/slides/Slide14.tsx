import { Eye, Clock, X, CheckCircle } from 'lucide-react';

export function Slide14() {
  const rules = [
    {
      icon: Eye,
      title: '20-20-20 Rule',
      description: 'Every 20 min → Look 20 feet → For 20 seconds',
      emoji: '👁️',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      icon: Clock,
      title: '10-Minute Rule',
      description: 'Wait 10 min. 70% of urges pass.',
      emoji: '⏰',
      color: 'from-purple-600 to-purple-400'
    }
  ];

  const replacements = [
    { bad: 'Scrolling before bed', good: 'Read a book', badEmoji: '❌', goodEmoji: '📖' },
    { bad: 'Phone first thing', good: '5 min stretching', badEmoji: '❌', goodEmoji: '🧘' },
    { bad: 'Social media breaks', good: 'Short walk outside', badEmoji: '❌', goodEmoji: '🚶' }
  ];

  return (
    <div className="w-full h-full bg-gray-900 p-12">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/40 mb-4">
            <span className="text-green-300 uppercase tracking-wider">Part 3: Solutions</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            SIMPLE RULES THAT WORK
          </h1>
        </div>

        {/* 2 Rule boxes */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${rule.color} bg-opacity-10 rounded-2xl border-2 border-indigo-500/40 p-6 hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  <h3 className="text-2xl text-white font-bold">
                    {rule.title} {rule.emoji}
                  </h3>
                </div>
                <p className="text-xl text-gray-100 leading-relaxed font-medium">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Replacement table */}
        <div className="bg-gray-800/50 rounded-2xl border-2 border-gray-700/50 p-6">
          <h3 className="text-2xl text-green-300 mb-4">Replace bad habits:</h3>
          <div className="space-y-3">
            {replacements.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 bg-gray-900/80 rounded-lg p-4 border border-gray-600/50"
              >
                <div className="flex items-center gap-3">
                  <X className="w-6 h-6 text-red-300 flex-shrink-0" />
                  <span className="text-lg text-gray-100 font-medium">{item.bad}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg text-gray-100 font-medium">{item.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
