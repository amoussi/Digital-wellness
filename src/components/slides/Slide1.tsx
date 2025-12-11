import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Slide1() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1638896671106-f44068694064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYWRkaWN0aW9uJTIwc2NyZWVufGVufDF8fHx8MTc2NTQwMjQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Smartphone addiction"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Multiple phone outlines in background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center gap-8 opacity-5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-6xl">📱</span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-16 space-y-8">
        {/* Large phone icon with glow */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl"></div>
            <span className="relative text-9xl block">📱</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-8xl tracking-tight text-white drop-shadow-2xl">
          DIGITAL WELLNESS
        </h1>

        {/* Subtitle */}
        <h2 className="text-4xl text-white/90">
          Are We Addicted to Our Screens?
        </h2>

        {/* Author and Date */}
        <div className="pt-8 space-y-2">
          <p className="text-2xl text-white/80">
            Assia Moussi
          </p>
          <p className="text-xl text-white/70">
            English Class - December 2025
          </p>
        </div>
      </div>
    </div>
  );
}
