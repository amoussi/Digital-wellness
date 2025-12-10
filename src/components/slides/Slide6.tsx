import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users, Wifi, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide6() {
  const platformData = [
    { name: 'Facebook', value: 69.4, color: '#1877f2', label: 'peaked' },
    { name: 'YouTube', value: 58, color: '#ff0000', label: 'holding steady' },
    { name: 'Instagram', value: 42, color: '#E1306C', label: 'grown rapidly' },
    { name: 'TikTok', value: 35, color: '#000000', label: 'exploded dramatically' },
    { name: 'LinkedIn', value: 12, color: '#0a66c2' }
  ];

  const facts = [
    { 
      icon: Wifi,
      value: '33.9M', 
      label: 'internet users',
      sublabel: '(73%)',
      color: 'from-indigo-600 to-indigo-400'
    },
    { 
      icon: TrendingUp,
      value: '110%', 
      label: 'mobile connections',
      color: 'from-purple-600 to-purple-400'
    },
    { 
      icon: Users,
      value: '70%', 
      label: 'under 30 years old',
      color: 'from-pink-600 to-pink-400'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1643327501512-649a1795326e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGdlcmlhJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NTQwMjQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Algeria"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-4">
            <span className="text-indigo-300 uppercase tracking-wider">Part 1: Statistics</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            🇩🇿 ALGERIA: OUR DIGITAL PROFILE
          </h1>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* LEFT: Pie Chart */}
          <div className="bg-gray-800/50 rounded-2xl border border-indigo-500/30 p-6 flex flex-col">
            <h3 className="text-2xl text-indigo-300 mb-4">Platform Usage</h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #6366f1',
                      borderRadius: '8px',
                      color: '#9ca3af'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Usage']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT: Fact boxes */}
          <div className="space-y-4">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${fact.color} bg-opacity-10 rounded-2xl border-2 border-indigo-500/40 p-6 hover:scale-105 transition-transform`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Icon className="w-10 h-10 text-white p-2 rounded-lg" />
                    <div className="text-5xl text-white font-bold">
                      {fact.value}
                    </div>
                  </div>
                  <div className="text-xl text-gray-100 font-semibold">{fact.label}</div>
                  {fact.sublabel && (
                    <div className="text-gray-200 font-medium">{fact.sublabel}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
