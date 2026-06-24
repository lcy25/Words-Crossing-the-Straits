import React from "react";

interface InkPaperBackgroundProps {
  mode?: "paper" | "night" | "river" | "mirror";
  children?: React.ReactNode;
}

export default function InkPaperBackground({ mode = "paper", children }: InkPaperBackgroundProps) {
  // We can render a highly stylized background with SVG layers or rich CSS.
  // We'll create distinct styles for each mode:
  // - paper: Warm off-white/cream paper texture with light ink wash mountains
  // - night: Dark indigo-black charcoal paper texture with ink-splattered white/grey stars
  // - river: Calm flowing ink waves
  // - mirror: Crushed mirrored layout (light slate/wash)

  const getBackgroundClass = () => {
    switch (mode) {
      case "night":
        return "bg-[#12161a] text-[#e8e4dc]";
      case "river":
        return "bg-[#e5dfcd] text-[#2c241e]";
      case "mirror":
        return "bg-[#e5dfcd] text-[#26201a]";
      case "paper":
      default:
        return "bg-[#e5dfcd] text-[#2b211a]";
    }
  };

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden transition-all duration-1000 ${getBackgroundClass()}`}
      style={{
        backgroundImage:
          mode === "night"
            ? "radial-gradient(circle at 50% 50%, rgba(20,28,36,0.9) 0%, rgba(10,12,15,0.95) 100%)"
            : "radial-gradient(circle at 50% 50%, rgba(241,237,222,0.8) 0%, rgba(222,215,192,0.9) 100%)",
      }}
    >
      {/* Paper Fiber Layer (Generated procedurally with SVG FeTurbulence noise + linear gradients) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply">
        <svg width="100%" height="100%">
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" />
        </svg>
      </div>

      {/* Ink stain effect / vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14] mix-blend-multiply bg-[radial-gradient(circle_at_top_right,rgba(40,30,20,0.4),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(20,20,20,0.5),transparent_60%)]" />

      {/* Mode-Specific Water/Ink drawings */}
      {mode === "paper" && (
        <>
          {/* Faded distant mountains (Drawn using clean styled SVGs on top-right) */}
          <div className="absolute right-0 top-0 w-full max-w-[650px] h-[360px] opacity-[0.12] pointer-events-none transform translate-x-12 -translate-y-6">
            <svg viewBox="0 0 500 250" fill="none" className="w-full h-full">
              <path
                d="M 50,220 Q 150,80 250,180 T 450,120 L 500,250 L 0,250 Z"
                fill="url(#ink-mountain-grad-1)"
              />
              <path
                d="M 120,230 Q 240,110 320,190 T 480,140 L 500,250 L 0,250 Z"
                fill="url(#ink-mountain-grad-2)"
                className="opacity-80"
              />
              <defs>
                <linearGradient id="ink-mountain-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a3b32" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#968579" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ink-mountain-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2b231d" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#827164" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Left bottom light branches/bamboo */}
          <div className="absolute left-4 bottom-4 w-[280px] h-[280px] opacity-[0.06] pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" stroke="#2b211a" strokeWidth="1.5" className="w-full h-full">
              <path d="M 0,200 Q 40,160 50,120 T 40,30" />
              <path d="M 50,120 Q 90,110 110,80" />
              <path d="M 110,80 Q 130,50 120,20" />
              <path d="M 45,150 Q 100,160 130,130" />
              <path d="M 130,130 Q 160,110 170,80" />
              {/* Leaves */}
              <path d="M 40,30 Q 20,20 10,25 Q 25,35 40,30" fill="#2b211a" />
              <path d="M 120,20 Q 140,10 150,15 Q 135,25 120,20" fill="#2b211a" />
              <path d="M 170,80 Q 195,75 200,85 Q 180,90 170,80" fill="#2b211a" />
            </svg>
          </div>
        </>
      )}

      {mode === "night" && (
        <>
          {/* Ink-splattered sky stars */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
            <div className="absolute w-[3px] h-[3px] rounded-full bg-stone-300 top-[15%] left-[25%] animate-pulse" style={{ animationDuration: "5s" }} />
            <div className="absolute w-[4px] h-[4px] rounded-full bg-stone-400 top-[35%] left-[65%] animate-pulse" style={{ animationDuration: "7s" }} />
            <div className="absolute w-[2px] h-[2px] rounded-full bg-stone-300 top-[50%] left-[12%] animate-pulse" style={{ animationDuration: "4s" }} />
            <div className="absolute w-[5px] h-[5px] rounded-full bg-stone-400 top-[75%] left-[80%] animate-pulse" style={{ animationDuration: "9s" }} />
            <div className="absolute w-[3px] h-[3px] rounded-full bg-stone-200 top-[20%] left-[85%] animate-pulse" style={{ animationDuration: "6s" }} />
            <div className="absolute w-[3px] h-[3px] rounded-full bg-stone-300 top-[65%] left-[45%] animate-pulse" style={{ animationDuration: "8s" }} />
          </div>
          {/* Subtle glowing moon/nebula behind the stars */}
          <div
            className="absolute top-[10%] right-[15%] w-[180px] h-[180px] rounded-full blur-2xl pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(41,37,36,0.4) 0%, rgba(28,25,23,0.1) 60%, transparent 100%)"
            }}
          />
        </>
      )}

      {mode === "river" && (
        <>
          {/* Abstract wavy lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <svg width="100%" height="100%">
              <path d="M -100 200 C 300 150, 700 350, 1500 200 C 2300 50, 2700 250, 3100 200 L 3100 1000 L -100 1000 Z" fill="url(#river-gradient)" />
              <defs>
                <linearGradient id="river-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2b211a" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2b211a" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}

      {mode === "mirror" && (
        <>
          {/* Mirrored light polygons in the background representing glass shards */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <svg width="100%" height="100%">
              <polygon points="100,50 300,100 250,400" fill="#2b211a" stroke="#2b211a" strokeWidth="1" />
              <polygon points="800,200 1100,150 950,550" fill="#2b211a" stroke="#2b211a" strokeWidth="1" />
              <polygon points="400,600 200,800 600,750" fill="#2b211a" stroke="#2b211a" strokeWidth="1" />
              <polygon points="1200,700 1400,650 1350,900" fill="#2b211a" stroke="#2b211a" strokeWidth="1" />
            </svg>
          </div>
        </>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
