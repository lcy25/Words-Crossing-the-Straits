import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Author } from "../types";
import Seal from "./Seals";

interface LetterUnfoldModalProps {
  author: Author | null;
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function LetterUnfoldModal({ author, isOpen, onClose, onContinue }: LetterUnfoldModalProps) {
  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !author) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`${author.name}的信笺`}
    >
      {/* Dark ink mist overlay */}
      <div
        className="absolute inset-0 bg-[#120d0aa0] backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Folded paper/scroll container */}
      <div
        className="relative w-full max-w-3xl bg-[#faf5ea] text-[#2c221a] rounded-[4px] shadow-2xl overflow-hidden border border-[#977a57]/30 transform transition-transform duration-700 max-h-[90vh] flex flex-col md:flex-row"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,253,248,0.7) 0%, rgba(240,230,210,0.5) 100%)",
          boxShadow: "0 25px 50px -12px rgba(18, 13, 10, 0.6), inset 0 0 40px rgba(151, 122, 87, 0.15)",
        }}
      >
        {/* Paper texture line details */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none" />

        {/* Left Side: Ink Silhouette and Author Details */}
        <div className="relative w-full md:w-5/12 p-6 md:p-8 flex flex-col justify-between items-center border-b md:border-b-0 md:border-r border-[#977a57]/20 bg-[#faf5ea]/40">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[radial-gradient(circle,rgba(40,30,20,0.5)_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="w-full text-center mb-4">
            <span className="text-xs font-serif text-[#977a57] tracking-widest uppercase block mb-1">
              — 彼岸书信 —
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#1f1610] tracking-widest relative inline-block">
              {author.name}
              <div className="absolute -right-10 -top-2 transform rotate-12">
                <Seal text="彼岸之旅" size="sm" />
              </div>
            </h2>
          </div>

          {/* SVG Abstract Ink Portrait Silhouette or Portrait Image */}
          <div
            className="relative w-44 h-44 my-4 flex items-center justify-center rounded-full overflow-hidden border-2 border-[#977a57]/30 shadow-md bg-[#faf5ea]/40"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(28,25,23,0.1) 0%, transparent 70%)"
            }}
          >
            {author.avatarUrl ? (
              <img
                src={author.avatarUrl}
                alt={author.name}
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.1] brightness-[0.95]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <svg viewBox="0 0 160 160" className="w-full h-full fill-[#231b14] filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.25)]">
                <path d={author.avatarSilhouette} />
                {/* Abstract extra ink brush droplets */}
                <circle cx="45" cy="115" r="5" className="fill-[#30251c]" />
                <circle cx="120" cy="40" r="3" className="fill-[#30251c]" />
                <path d="M 130,100 Q 135,115 125,120 T 115,100" className="fill-[#1f1610]" />
              </svg>
            )}
            <div className="absolute bottom-2 bg-[#2c1d11]/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-[#f7eedc] border border-[#977a57]/20 select-none">
              {author.inkShape}
            </div>
          </div>

          {/* Core attributes list */}
          <div className="w-full space-y-2 mt-2">
            <div className="flex flex-wrap gap-1.5 justify-center">
              {author.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-serif border border-[#977a57]/30 text-[#575334] bg-stone-100/40 rounded-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
            <p className="text-xs font-serif text-center text-[#977a57] italic mt-1">
              笔意：{author.letterMood}
            </p>
          </div>
        </div>

        {/* Right Side: Quote and Detailed Propagation Interpretation */}
        <div className="relative w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          {/* Close button inside the modal wrapper */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#977a57] hover:text-[#1f1610] hover:bg-stone-200/50 p-1.5 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-[#977a57]"
            aria-label="合上信纸"
          >
            <X size={20} />
          </button>

          {/* Traditional writing columns look */}
          <div className="flex-1 pr-2">
            {/* Writer's Quote section */}
            <div className="mb-6 relative pl-4 border-l-2 border-[#cb402b]">
              <span className="text-xs font-serif text-[#cb402b] tracking-wider font-semibold block mb-1">
                【流传之低语】
              </span>
              <p className="text-lg md:text-xl font-serif font-medium leading-relaxed text-[#1f1610] tracking-wide italic">
                “{author.quote}”
              </p>
            </div>

            {/* Writer's Detailed Description */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-serif text-[#977a57] tracking-wider block mb-1">
                  【海峡对岸的阐释与回响】
                </span>
                <p className="text-sm md:text-base font-serif text-[#32251a] leading-relaxed tracking-wide text-justify whitespace-pre-line">
                  {author.description}
                </p>
              </div>

              {/* Cultural Tag Banner */}
              <div className="p-3 bg-[#faf5ea] border-l-4 border-[#977a57] rounded-sm">
                <p className="text-xs font-serif font-semibold text-[#977a57] tracking-wide mb-0.5">
                  在地流传定位
                </p>
                <p className="text-sm font-serif text-[#1f1610] tracking-wider font-medium">
                  {author.cardTag}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons footer */}
          <div className="flex items-center space-x-4 mt-8 pt-4 border-t border-[#977a57]/15">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs md:text-sm font-serif border border-[#977a57] text-[#977a57] hover:bg-[#977a57]/10 hover:text-[#2c221a] transition-all rounded-[2px] tracking-widest cursor-pointer"
            >
              合上纸页
            </button>
            <button
              onClick={onContinue}
              className="flex-1 px-4 py-2 text-xs md:text-sm font-serif bg-[#977a57] text-[#e5dfcd] hover:bg-[#806646] transition-all rounded-[2px] tracking-widest cursor-pointer text-center"
            >
              沿河继续
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
