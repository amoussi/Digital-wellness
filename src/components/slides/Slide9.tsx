import { Eye, Bone, Moon, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide9() {
  const impacts = [
    { 
      icon: Eye,
      title: 'EYES', 
      stat: '65% eye strain',
      color: 'border-blue-500',
      bg: 'bg-blue-500/10'
    },
    { 
      icon: Bone,
      title: 'BODY', 
      stat: '+27kg spine pressure, 80% neck pain',
      color: 'border-orange-500',
      bg: 'bg-orange-500/10'
    },
    { 
      icon: Moon,
      title: 'SLEEP', 
      stat: '-50% melatonin, +1 hour to fall asleep',
      color: 'border-purple-500',
      bg: 'bg-purple-500/10'
    },
    { 
      icon: Zap,
      title: 'FOCUS', 
      stat: '23 min to refocus, -40% productivity',
      color: 'border-pink-500',
      bg: 'bg-pink-500/10'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1629446875527-246e0e43b9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGJvZHklMjBzaWxob3VldHRlfGVufDF8fHx8MTc2NTQwMjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Human body"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/40 mb-4">
            <span className="text-pink-300 uppercase tracking-wider">Part 2: Health Impacts</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            YOUR BODY ON SCREENS 🏥
          </h1>
        </div>

        {/* 2x2 Grid of impact boxes */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className={`${impact.bg} ${impact.color} border-l-8 rounded-2xl p-8 flex flex-col justify-center hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`w-12 h-12 ${
                    index === 0 ? 'text-blue-400' :
                    index === 1 ? 'text-orange-400' :
                    index === 2 ? 'text-purple-300' :
                    'text-pink-400'
                  }`} strokeWidth={2} />
                  <h3 className={`text-3xl font-bold ${
                    index === 0 ? 'text-blue-400' :
                    index === 1 ? 'text-orange-400' :
                    index === 2 ? 'text-purple-300' :
                    'text-pink-400'
                  }`}>{impact.title}</h3>
                </div>
                <p className="text-2xl text-gray-100 leading-relaxed font-semibold">
                  {impact.stat}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
