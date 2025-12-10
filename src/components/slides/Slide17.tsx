import { Target, CheckSquare } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide17() {
  const challenges = [
    { text: 'No phone in bedroom', emoji: '🛏️' },
    { text: 'No phone first hour', emoji: '🌅' },
    { text: 'One phone-free meal', emoji: '🍽️' },
    { text: 'Check Screen Time nightly', emoji: '📊' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden flex items-center justify-center p-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1630322721838-b7a410114b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwbmV3JTIwYmVnaW5uaW5nfGVufDF8fHx8MTc2NTQwMjYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sunrise new beginning"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-10">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Target className="w-16 h-16 text-white" strokeWidth={2} />
            <h1 className="text-7xl text-white drop-shadow-2xl">
              MY CHALLENGE TO YOU 🎯
            </h1>
          </div>
          <p className="text-3xl text-white/90">
            This week, try ONE thing:
          </p>
        </div>

        {/* Challenge checkboxes */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30 p-6 flex items-center gap-4 hover:bg-white/20 transition-all cursor-pointer group"
            >
              <CheckSquare className="w-10 h-10 text-white group-hover:text-green-300 transition-colors" strokeWidth={2} />
              <p className="text-2xl text-white">
                {challenge.emoji} {challenge.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30 p-8 text-center mb-10">
          <p className="text-2xl text-white italic">
            &ldquo;Technology should serve your life, not consume it.&rdquo;
          </p>
        </div>

        {/* Thank you */}
        <div className="text-center space-y-4">
          <h2 className="text-6xl text-white drop-shadow-2xl">
            THANK YOU! 🙏
          </h2>
          <p className="text-3xl text-white/80">
            Questions?
          </p>
        </div>
      </div>
    </div>
  );
}
