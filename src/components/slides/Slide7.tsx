import { Calendar, CalendarDays, CalendarRange, Hourglass } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide7() {
  const perspectives = [
    { 
      icon: Calendar,
      period: 'Per Week', 
      value: '42 hours',
      color: 'from-gray-700 to-gray-600',
      bg: 'bg-gray-800/50'
    },
    { 
      icon: CalendarDays,
      period: 'Per Month', 
      value: '180 hours',
      color: 'from-gray-700 to-gray-600',
      bg: 'bg-gray-800/50'
    },
    { 
      icon: CalendarRange,
      period: 'Per Year', 
      value: '91 days',
      color: 'from-indigo-700 to-indigo-600',
      bg: 'bg-indigo-900/30'
    },
    { 
      icon: Hourglass,
      period: 'By Age 70', 
      value: '17+ YEARS',
      color: 'from-pink-600 to-pink-400',
      bg: 'bg-pink-500/20',
      highlight: true
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1745837846302-9b3534358ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VyZ2xhc3MlMjB0aW1lfGVufDF8fHx8MTc2NTMzNDI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hourglass"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-2">
            <span className="text-indigo-300 uppercase tracking-wider text-sm">Part 1: Statistics</span>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
            PUT IT IN PERSPECTIVE
          </h1>
          <p className="text-lg text-gray-400">
            If you spend 6 hours/day on screens...
          </p>
        </div>

        {/* Grid of boxes - like stairs */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {perspectives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${item.bg} rounded-2xl border-2 ${
                  item.highlight 
                    ? 'border-pink-500/60 ring-4 ring-pink-500/30 shadow-2xl shadow-pink-500/30' 
                    : 'border-gray-700/50'
                } p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform`}
              >
                <Icon className="w-12 h-12 mb-3 text-white p-2 rounded-lg" />
                <div className="text-gray-200 text-lg mb-2 font-semibold">{item.period}</div>
                <div className="text-4xl text-white font-bold">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-lg text-pink-400 italic">
            What could YOU do with 17 years?
          </p>
        </div>
      </div>
    </div>
  );
}
