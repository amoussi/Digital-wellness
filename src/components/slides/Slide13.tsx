import { Smartphone, Bed, Coffee, Moon, Bell } from 'lucide-react';

export function Slide13() {
  const columns = [
    {
      icon: Smartphone,
      title: 'Track Usage',
      emoji: '📱',
      items: [
        'iPhone: Screen Time',
        'Android: Digital Wellbeing',
        '-20% just by tracking!'
      ],
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      icon: Bed,
      title: 'Phone-Free Zones',
      emoji: '📵',
      items: [
        '🛏️ Bedroom',
        '🍽️ Dining table',
        '🌅 First hour of morning'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: Bell,
      title: 'Notifications',
      emoji: '🔔',
      items: [
        'Turn off non-essential',
        'Check only 3x/day',
        'Use Do Not Disturb'
      ],
      color: 'from-green-600 to-green-400'
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
            WHAT YOU CAN DO TODAY
          </h1>
        </div>

        {/* 3 Columns */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${column.color} bg-opacity-10 rounded-2xl border-2 border-gray-700/50 p-6 flex flex-col hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  <h3 className={`text-2xl text-white font-bold`}>
                    {column.title}
                  </h3>
                </div>
                <div className="space-y-4 flex-1">
                  {column.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/80 rounded-lg p-4 border border-gray-600/50"
                    >
                      <p className="text-lg text-gray-100 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
