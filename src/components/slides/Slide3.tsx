import { Globe, Wifi, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide3() {
  const stats = [
    { 
      icon: Globe, 
      value: '8.08 B', 
      label: 'World Population',
      color: 'from-blue-600 to-blue-400',
      bg: 'bg-blue-500/10'
    },
    { 
      icon: Wifi, 
      value: '5.35 B', 
      label: 'Internet Users',
      sublabel: '66%',
      color: 'from-purple-600 to-purple-400',
      bg: 'bg-purple-500/10'
    },
    { 
      icon: Users, 
      value: '5.04 B', 
      label: 'Social Media Users',
      sublabel: '62%',
      color: 'from-indigo-600 to-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    { 
      icon: Clock, 
      value: '6h 40m', 
      label: 'Daily Screen Time',
      color: 'from-pink-600 to-pink-400',
      bg: 'bg-pink-500/10',
      highlight: true
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1633421878925-ac220d8f6e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwZWFydGh8ZW58MXx8fHwxNzY1MzM4MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Global network"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-2">
            <span className="text-indigo-300 uppercase tracking-wider text-sm">Part 1: Statistics</span>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            THE GLOBAL PICTURE
          </h1>
        </div>

        {/* 2x2 Grid of stat boxes */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bg} rounded-2xl border-2 ${
                  stat.highlight 
                    ? 'border-pink-500/60 shadow-lg shadow-pink-500/20' 
                    : 'border-gray-700/50'
                } p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform`}
              >
                <Icon className="w-12 h-12 mb-3 text-white p-2 rounded-lg" />
                <div className="text-4xl text-white mb-2 font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-100 font-medium">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-xs text-gray-200 mt-1 font-medium">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-lg text-pink-400">
            That&apos;s 100+ days per year on screens
          </p>
        </div>
      </div>
    </div>
  );
}
