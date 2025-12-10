import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide5() {
  const data = [
    { country: '🇿🇦 South Africa', hours: 9.4, color: '#ef4444', label: 'soared' },
    { country: '🇧🇷 Brazil', hours: 9.2, color: '#f97316' },
    { country: '🌍 World Average', hours: 6.7, color: '#3b82f6', label: 'stabilized' },
    { country: '🇩🇿 ALGERIA', hours: 6.5, color: '#22c55e', label: 'climbed', highlight: true },
    { country: '🇫🇷 France', hours: 5.5, color: '#3b82f6' },
    { country: '🇯🇵 Japan', hours: 4.0, color: '#06b6d4', label: 'remained steady' }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1594492691731-3d7974140624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGNvbnRpbmVudHN8ZW58MXx8fHwxNzY1MzIzODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="World map"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-4">
            <span className="text-indigo-300 uppercase tracking-wider">Part 1: Statistics</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
            SCREEN TIME BY COUNTRY
          </h1>
          <p className="text-xl text-gray-400">
            Screen time varies widely around the world
          </p>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              layout="vertical"
              margin={{ top: 20, right: 80, left: 150, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis 
                type="number"
                stroke="#9ca3af" 
                tick={{ fill: '#9ca3af' }}
                label={{ value: 'Hours per day', position: 'bottom', fill: '#9ca3af', offset: 0 }}
                domain={[0, 10]}
              />
              <YAxis 
                type="category"
                dataKey="country" 
                stroke="#9ca3af" 
                tick={{ fill: '#9ca3af', fontSize: 16 }}
                width={140}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #6366f1',
                  borderRadius: '8px',
                  color: '#9ca3af'
                }}
                formatter={(value: number) => [`${value}h`, 'Daily Screen Time']}
              />
              <Bar dataKey="hours" radius={[0, 8, 8, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    stroke={entry.highlight ? '#ffffff' : 'none'}
                    strokeWidth={entry.highlight ? 3 : 0}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
