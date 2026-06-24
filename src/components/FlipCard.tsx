import React, { useState } from "react";
import { FLIP_CARDS } from "../data/content";
import Seal from "./Seals";

export default function FlipCard() {
  // Track which cards are flipped (active)
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 font-serif">
      <div className="text-center mb-10">
        <span className="text-xs text-[#977a57] tracking-widest block mb-1 uppercase">
          【灵魂回响 ── 镜面折射】
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1f1610] tracking-wider relative inline-block">
          互动翻卡：打破平面刻板印象
        </h3>
        <p className="text-xs md:text-sm text-[#575334] mt-2 max-w-xl mx-auto leading-relaxed">
          当一个复杂的文学灵魂在传播中被提炼为单一的标签时，理解的入口就变窄了。
          点击卡片，听听他们在标签背后，传来的真正声音。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FLIP_CARDS.map((card) => {
          const isFlipped = !!flippedCards[card.id];

          return (
            <div
              key={card.id}
              className="relative h-[320px] w-full perspective cursor-pointer group"
              onClick={() => handleCardClick(card.id)}
              role="button"
              tabIndex={0}
              aria-label={`${card.authorName}的互动卡片，点击翻转`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(card.id);
                }
              }}
            >
              {/* Card Inner wrapper that executes the actual 3D rotation */}
              <div
                className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
                  isFlipped ? "rotate-y-180" : ""
                } group-hover:shadow-xl rounded-md`}
                style={{
                  boxShadow: "0 10px 25px -5px rgba(151, 122, 87, 0.15), inset 0 0 20px rgba(151, 122, 87, 0.05)",
                }}
              >
                {/* CARD FRONT STATE */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden bg-[#faf5ea] border border-[#977a57]/30 rounded-md p-6 flex flex-col justify-between"
                  style={{
                    backgroundImage: "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.7) 0%, transparent 100%)",
                  }}
                >
                  {/* Decorative corner paper lines */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#977a57]/30" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#977a57]/30" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#977a57]/30" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#977a57]/30" />

                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-[#977a57]">
                      CLASSIC TAG / 标签化
                    </span>
                    <Seal text="字裡藏河" size="sm" />
                  </div>

                  {/* Front Quote / Label */}
                  <div className="my-auto text-center px-2">
                    <span className="text-xs text-[#977a57]/70 block mb-2 font-sans tracking-widest">
                      — {card.authorName} —
                    </span>
                    <h4 className="text-base md:text-lg font-bold text-[#1f1610] leading-relaxed tracking-wider">
                      “{card.frontLabel}”
                    </h4>
                  </div>

                  <div className="text-center pt-2 border-t border-[#977a57]/15 select-none">
                    <span className="text-[10px] text-[#977a57] tracking-widest animate-pulse">
                      点击翻阅反签化的秘密 ──
                    </span>
                  </div>
                </div>

                {/* CARD BACK STATE */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#faf5ea] border-2 border-[#cb402b]/40 rounded-md p-5 flex flex-col justify-between overflow-y-auto"
                  style={{
                    backgroundImage: "radial-gradient(circle at center, rgba(253,250,242,0.9) 0%, rgba(240,230,210,0.5) 100%)",
                  }}
                >
                  <div className="flex justify-between items-center border-b border-[#cb402b]/15 pb-1.5 mb-2.5">
                    <span className="text-xs font-bold text-[#cb402b] tracking-wider">
                      【彼岸真实回响】
                    </span>
                    <span className="text-xs font-semibold text-[#32241a]">
                      {card.authorName}
                    </span>
                  </div>

                  {/* Back narrative */}
                  <p className="text-xs md:text-sm text-[#2c1d11] leading-relaxed tracking-wide text-justify whitespace-pre-line flex-1 overflow-y-auto pr-1">
                    {card.backText}
                  </p>

                  <div className="text-center pt-2 mt-2 border-t border-[#977a57]/15 select-none shrink-0">
                    <span className="text-[9px] text-[#977a57] tracking-widest">
                      ── 点击卡片翻回 ──
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
