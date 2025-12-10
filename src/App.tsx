import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Slide1 } from "./components/slides/Slide1";
import { Slide2 } from "./components/slides/Slide2";
import { Slide3 } from "./components/slides/Slide3";
import { Slide4 } from "./components/slides/Slide4";
import { Slide5 } from "./components/slides/Slide5";
import { Slide6 } from "./components/slides/Slide6";
import { Slide7 } from "./components/slides/Slide7";
import { Slide8 } from "./components/slides/Slide8";
import { Slide9 } from "./components/slides/Slide9";
import { Slide10 } from "./components/slides/Slide10";
import { Slide11 } from "./components/slides/Slide11";
import { Slide12 } from "./components/slides/Slide12";
import { Slide13 } from "./components/slides/Slide13";
import { Slide14 } from "./components/slides/Slide14";
import { Slide15 } from "./components/slides/Slide15";
import { Slide16 } from "./components/slides/Slide16";
import { Slide17 } from "./components/slides/Slide17";

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        document.exitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, isFullscreen]);

  const CurrentSlideComponent = slides[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 flex flex-col"
    >
      {/* Main Presentation Area */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-7xl aspect-[16/9] bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-indigo-500/20 overflow-hidden relative">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pb-8 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-pink-700 transition-all flex items-center gap-2 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Center Controls */}
          <div className="flex items-center gap-4">
            {/* Slide Indicators */}
            <div className="flex gap-2 flex-wrap justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-lg transition-all ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg scale-110"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="px-4 py-3 bg-gray-800/50 text-indigo-300 rounded-lg hover:bg-gray-700/50 transition-all flex items-center gap-2 shadow-lg border border-indigo-500/30"
              title={isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen mode"}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-pink-700 transition-all flex items-center gap-2 shadow-lg"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-indigo-300">
          Slide {currentSlide + 1} of {slides.length}
          {isFullscreen && (
            <span className="ml-4 text-sm text-indigo-400">
              (Use ← → to navigate, Esc to exit)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
