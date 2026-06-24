import React, { useState } from "react";
import { Author } from "../types";
import Seal from "./Seals";

interface InkWaveHeroProps {
  authors: Author[];
  onSelectBoat: (author: Author) => void;
  onExplore: () => void;
}

export default function InkWaveHero({ authors, onSelectBoat, onExplore }: InkWaveHeroProps) {
  const [hoveredBoat, setHoveredBoat] = useState<string | null>(null);

  // Position coordinates for 5 boats (distributed elegantly across the screen)
  const boatCoords = [
    { id: "luxun", left: "15%", top: "52%", label: "鲁迅的漂流信" },
    { id: "zhangailing", left: "32%", top: "45%", label: "张爱玲的漂流信" },
    { id: "maodun", left: "52%", top: "54%", label: "茅盾的漂流信" },
    { id: "shencongwen", left: "68%", top: "48%", label: "沈从文的漂流信" },
    { id: "moyan", left: "84%", top: "55%", label: "莫言的漂流信" }
  ];

  return (
    <div className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Intro Watermark/Seals & Far Mountain */}
      <div className="absolute left-[8%] top-[18%] max-w-sm pointer-events-none z-10 select-none">
        <div className="flex items-start space-x-3">
          <Seal text="彼岸之旅" size="md" className="shrink-0" />
          <div className="font-serif text-[#977a57] text-xs leading-relaxed border-l border-[#977a57]/30 pl-3">
            <p>水不认岸 ‧ 水只认流</p>
            <p className="mt-1">一段跨越海峡的文字漂流</p>
          </div>
        </div>
      </div>

      {/* Hero center heading: "笔墨越海峡" with artistic ink texture style */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-20 relative select-none">
        <div className="relative max-w-4xl w-full mx-auto">
          {/* Elegant top sub-header */}
          <span className="text-xs sm:text-sm md:text-base tracking-[0.3em] font-serif text-[#977a57] block mb-4 md:mb-6 whitespace-nowrap">
            数据解码华文经典的彼岸之旅
          </span>

          <div className="relative inline-block mx-auto">
            {/* Absolute positioned Seal replicating the uploaded image layout */}
            <div className="absolute -left-14 md:-left-20 -top-1 select-none">
              <Seal text="大陆文学在台" size="md" />
            </div>

            <h1 className="font-calligraphy text-6xl md:text-8xl lg:text-9xl text-[#1c1109] leading-none select-none tracking-wider pl-4">
              笔墨越海峡
            </h1>
          </div>

          {/* Subtitle in expressive font matching the image */}
          <div className="mt-4 md:mt-6 text-center md:text-right max-w-4xl mx-auto pr-0 md:pr-12">
            <p className="font-longcang text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3a2c1e] tracking-widest select-none whitespace-nowrap">
              ──从数据看大陆文学在台传播之旅
            </p>
          </div>

          {/* Subtitle description */}
          <p className="mt-8 md:mt-10 text-xs md:text-sm font-serif text-[#575334] max-w-lg mx-auto leading-relaxed tracking-wider">
            在时间的长河中，经典的文学符号正在彼岸重新演绎与回响
          </p>

          <div className="mt-6 md:mt-8 flex justify-center">
            <button
              onClick={onExplore}
              className="group relative px-8 py-3 overflow-hidden border border-[#977a57] hover:border-[#cb402b] transition-colors focus:outline-none focus:ring-1 focus:ring-[#cb402b] cursor-pointer"
            >
              {/* background slide in */}
              <span className="absolute inset-0 bg-[#977a57] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative font-serif text-[#977a57] group-hover:text-[#e5dfcd] tracking-[0.3em] text-sm md:text-base font-semibold transition-colors duration-300">
                沿河而下，见证文学长流 ──
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Paper Boats & Dynamic Ripples */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-auto z-30">
        {/* Ocean wavy background rendered via overlapping paths */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Wave 1: Back, Lightest */}
          <svg className="absolute w-[200%] h-48 bottom-12 opacity-[0.12] fill-[#977a57] animate-waveBack" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1350,30 1500,60 L1500,120 L0,120 Z" />
          </svg>
          {/* Wave 2: Middle, Slightly darker */}
          <svg className="absolute w-[200%] h-44 bottom-6 opacity-[0.16] fill-[#575334] animate-waveMid" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 C180,20 320,80 500,50 C680,20 820,80 1000,50 C1180,20 1320,80 1500,50 L1500,120 L0,120 Z" />
          </svg>
          {/* Wave 3: Front, Darkest, Richer */}
          <svg className="absolute w-[200%] h-40 bottom-0 opacity-[0.24] fill-[#162d55] animate-waveFront" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C150,70 300,10 500,40 C700,70 850,10 1000,40 C1150,70 1300,10 1500,40 L1500,120 L0,120 Z" />
          </svg>
        </div>

        {/* Paper Boats overlay mapping */}
        {boatCoords.map((coord, idx) => {
          const author = authors.find((a) => a.id === coord.id);
          if (!author) return null;

          const isHovered = hoveredBoat === coord.id;

          // Float animation bobs up/down and slightly sways left/right
          const bobDelay = `${idx * -1.4}s`;
          const swayDuration = `${6.5 + idx}s`;

          return (
            <div
              key={coord.id}
              className="absolute group"
              style={{
                left: coord.left,
                top: coord.top,
                animation: `floatBob 5s ease-in-out infinite alternate ${bobDelay}, floatSway ${swayDuration} ease-in-out infinite alternate`,
                transformOrigin: "center bottom"
              }}
            >
              {/* Ripple Ring when hovered */}
              <div className="absolute top-10 left-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className={`absolute w-16 h-4 border border-[#977a57]/30 rounded-full scale-0 transition-transform duration-1000 ${isHovered ? "animate-waterRipple scale-150 opacity-0" : ""}`} />
                <span className={`absolute w-24 h-6 border border-[#977a57]/15 rounded-full scale-0 transition-transform duration-1000 ${isHovered ? "animate-waterRipple scale-200 delay-300 opacity-0" : ""}`} />
              </div>

              {/* Hover Label */}
              <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-[#fdfaf2] border border-[#977a57]/40 px-3 py-1.5 shadow-md rounded-[2px] transition-all duration-300 pointer-events-none z-40 w-max max-w-[200px] flex flex-col items-center ${
                  isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                }`}
                style={{
                  boxShadow: "2px 4px 10px rgba(0,0,0,0.1), inset 0 0 5px rgba(151,122,87,0.08)"
                }}
              >
                <span className="text-[10px] font-serif tracking-widest text-[#977a57] block mb-0.5 uppercase">
                  折纸船
                </span>
                <span className="text-xs font-serif font-semibold text-[#2c1d11]">
                  展开「{author.name}」的信笺
                </span>
                {/* Small indicator tag */}
                <span className="text-[9px] font-sans text-stone-500 mt-1 block px-1 bg-stone-100 rounded">
                  {author.cardTag}
                </span>
              </div>

              {/* Origami Boat Render (using classic pure vectors) */}
              <button
                onClick={() => onSelectBoat(author)}
                onMouseEnter={() => setHoveredBoat(coord.id)}
                onMouseLeave={() => setHoveredBoat(null)}
                className="relative focus:outline-none focus:ring-1 focus:ring-[#cb402b] p-2 rounded cursor-pointer"
                aria-label={`展开 ${author.name} 的信笺`}
              >
                <svg
                  viewBox="0 0 100 50"
                  className={`w-20 md:w-24 h-auto stroke-[#6d5641] stroke-1 transition-all duration-500 ${
                    isHovered
                      ? "fill-[#f5ebd8] filter drop-shadow-[0_8px_15px_rgba(139,115,85,0.5)] scale-110"
                      : "fill-[#ebe4d5] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  {/* Origami creases drawn as distinct paths */}
                  <polygon points="50,10 15,35 50,35" strokeWidth="0.75" />
                  <polygon points="50,10 85,35 50,35" strokeWidth="0.75" />
                  <polygon points="10,35 50,35 50,45" strokeWidth="0.75" />
                  <polygon points="90,35 50,35 50,45" strokeWidth="0.75" />
                  <polygon points="10,35 90,35 50,45" strokeWidth="1" />
                  {/* Centered mast fold */}
                  <line x1="50" y1="10" x2="50" y2="35" strokeWidth="0.5" strokeDasharray="1,1" />
                </svg>

                {/* Writer's Faded Name Calligraphy Overlay */}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-serif font-semibold tracking-wider text-stone-700/80 pointer-events-none select-none bg-stone-100/30 px-1 rounded-sm">
                  {author.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Aesthetic Bottom Footer hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none z-20 text-center select-none">
        <span className="text-[10px] font-serif tracking-[0.4em] text-[#977a57]/70 block animate-bounce">
          滑动卷轴 ─── 见证奇迹
        </span>
      </div>
    </div>
  );
}
