import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function Slide4() {
  const internetUsersData = [
    { year: '2013', users: 2.7 },
    { year: '2016', users: 3.4 },
    { year: '2020', users: 4.5 },
    { year: '2025', users: 5.35 }
  ];

  const screenTimeData = [
    { year: '2013', hours: 6.15 },
    { year: '2016', hours: 6.33 },
    { year: '2020', hours: 6.97, highlight: true },
    { year: '2025', hours: 6.67 }
  ];

  return (
    <div className="w-full h-full bg-gray-900 p-12">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-4">
            <span className="text-indigo-300 uppercase tracking-wider">Part 1: Statistics</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
            THE DIGITAL EXPLOSION SINCE 2013
          </h1>
          <p className="text-lg text-gray-400">
            Why 2013? Smartphones became mainstream + first screen time data
          </p>
        </div>

        {/* Two line graphs side by side */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* LEFT GRAPH - Internet Users */}
          <div className="bg-gray-800/50 rounded-2xl border border-indigo-500/30 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📈</span>
              <h3 className="text-2xl text-indigo-300">INTERNET USERS (Billions)</h3>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={internetUsersData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#9ca3af" 
                    tick={{ fill: '#9ca3af' }}
                  />
                  <YAxis 
                    stroke="#9ca3af" 
                    tick={{ fill: '#9ca3af' }}
                    domain={[0, 6]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #6366f1',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value}B`, 'Users']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    fill="url(#colorUsers)" 
                    dot={{ fill: '#6366f1', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-blue-400">📱 Nearly DOUBLED!</p>
            </div>
          </div>

          {/* RIGHT GRAPH - Screen Time */}
          <div className="bg-gray-800/50 rounded-2xl border border-pink-500/30 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏱️</span>
              <h3 className="text-2xl text-pink-300">SCREEN TIME (Hours/day)</h3>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={screenTimeData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <defs>
                    <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#9ca3af" 
                    tick={{ fill: '#9ca3af' }}
                  />
                  <YAxis 
                    stroke="#9ca3af" 
                    tick={{ fill: '#9ca3af' }}
                    domain={[5, 7.5]}
                    ticks={[5, 5.5, 6, 6.5, 7, 7.5]}
                    tickFormatter={(value) => `${value}h`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #ec4899',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value.toFixed(2)}h`, 'Screen Time']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#ec4899" 
                    strokeWidth={3}
                    fill="url(#colorTime)" 
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      return (
                        <circle 
                          cx={cx} 
                          cy={cy} 
                          r={payload.highlight ? 8 : 5} 
                          fill={payload.highlight ? '#ef4444' : '#ec4899'} 
                          stroke={payload.highlight ? '#fca5a5' : 'none'}
                          strokeWidth={payload.highlight ? 2 : 0}
                        />
                      );
                    }}
                    activeDot={{ r: 7 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-red-400">🦠 COVID spike - never went back!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
