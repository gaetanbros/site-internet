import { useState } from "react";

const ORBITS = [
  { radius: 150, duration: 15, logos: 3 },
  { radius: 250, duration: 20, logos: 5 },
  { radius: 350, duration: 25, logos: 6 },
  { radius: 450, duration: 30, logos: 9 },
];

const LogoStar = ({ index, angle, radius }) => {
  return (
    <div
      className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-150 -translate-x-10 -translate-y-10"
      style={{
        left: "50%",
        top: "50%",
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
      }}
    >
      <img
        src="/api/placeholder/60/60"
        alt={`Logo ${index + 1}`}
        className="w-16 h-16 object-contain"
      />
    </div>
  );
};

const Orbit = ({
  radius,
  numLogos,
  duration,
  isPaused,
  isReversed,
  speedMultiplier,
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animation: `spin ${duration * speedMultiplier}s linear infinite${isReversed ? " reverse" : ""}`,
        animationPlayState: isPaused ? "paused" : "running",
      }}
    >
      {Array.from({ length: numLogos }).map((_, i) => (
        <LogoStar
          key={i}
          index={i}
          angle={(360 / numLogos) * i}
          radius={radius}
        />
      ))}
    </div>
  );
};

const ControlButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-white/20 rounded-lg text-white transition-colors duration-200 hover:bg-white/30"
  >
    {children}
  </button>
);

export default function LogoSolarSystem() {
  const [isPaused, setIsPaused] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const speedUp = () => setSpeedMultiplier((prev) => Math.max(0.2, prev - 0.2));
  const slowDown = () => setSpeedMultiplier((prev) => Math.min(3, prev + 0.2));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden relative flex items-center justify-center p-8">
      {/* Background stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative w-[1000px] h-[1000px]">
        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-16 -translate-y-16 bg-white rounded-full flex items-center justify-center z-10 shadow-lg shadow-white/30">
          <img
            src="/api/placeholder/100/100"
            alt="Central Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Orbits */}
        {ORBITS.map((orbit, i) => (
          <Orbit
            key={i}
            {...orbit}
            isPaused={isPaused}
            isReversed={isReversed}
            speedMultiplier={speedMultiplier}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/30 p-4 rounded-full backdrop-blur-sm">
        <ControlButton onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "Play" : "Pause"}
        </ControlButton>
        <ControlButton onClick={() => setIsReversed(!isReversed)}>
          Reverse
        </ControlButton>
        <ControlButton onClick={speedUp}>Speed Up</ControlButton>
        <ControlButton onClick={slowDown}>Slow Down</ControlButton>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
