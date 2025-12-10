import { AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide11() {
  const warnings = [
    '70% youth = high vulnerability',
    '70% Facebook = constant comparison',
    'Unemployment + social media = risky mix',
    'Café culture → Scrolling culture'
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-950 via-gray-900 to-gray-900 relative overflow-hidden p-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1541856644905-bd40b138cbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNhZmUlMjBjdWx0dXJlfGVufDF8fHx8MTc2NTQwMjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cafe culture"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/40 mb-4">
            <span className="text-pink-300 uppercase tracking-wider">Part 2: Health Impacts</span>
          </div>
          <h1 className="text-5xl bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            🇩🇿 WHAT THIS MEANS FOR US
          </h1>
        </div>

        {/* Warning boxes */}
        <div className="flex-1 grid grid-cols-2 gap-6 mb-8">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className="bg-orange-500/10 rounded-2xl border-2 border-orange-500/40 p-8 flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <AlertTriangle className="w-12 h-12 text-orange-400 flex-shrink-0" strokeWidth={2} />
              <p className="text-2xl text-gray-200">{warning}</p>
            </div>
          ))}
        </div>

        {/* Quote box */}
        <div className="bg-green-900/30 rounded-2xl border-2 border-green-500/50 p-8 text-center">
          <p className="text-3xl text-green-300 italic">
            &ldquo;How many family dinners have phones on the table?&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
