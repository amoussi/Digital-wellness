import { BarChart3, AlertTriangle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide2() {
  const points = [
    { 
      number: 1, 
      icon: BarChart3,
      title: 'The Statistics',
      text: 'How much time do we spend?',
      color: 'from-blue-600 to-blue-400'
    },
    { 
      number: 2, 
      icon: AlertTriangle,
      title: 'The Impact',
      text: 'What is it doing to our health?',
      color: 'from-pink-600 to-pink-400'
    },
    { 
      number: 3, 
      icon: CheckCircle,
      title: 'The Solutions',
      text: 'How can we take back control?',
      color: 'from-green-600 to-green-400'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 relative overflow-hidden flex items-center justify-center p-16">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5" />

      <div className="relative z-10 w-full max-w-5xl space-y-12">
        {/* Title */}
        <h1 className="text-6xl text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Today&apos;s Journey
        </h1>

        {/* Journey boxes */}
        <div className="space-y-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.number}
                className="flex items-center gap-6 p-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl border border-indigo-500/30 backdrop-blur-sm hover:border-indigo-400/50 transition-all group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className={`text-3xl bg-gradient-to-r ${point.color} bg-clip-text text-transparent mb-1`}>
                    {point.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {point.text}
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
