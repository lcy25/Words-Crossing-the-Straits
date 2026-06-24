import React from "react";

interface SealProps {
  text: "文墨渡海" | "彼岸之旅" | "字裡藏河" | "水岸" | "大陆文学在台" | string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Seal({ text, size = "md", className = "" }: SealProps) {
  // Map size classes
  const sizeMap = {
    sm: "w-8 h-8 text-[9px]",
    md: "w-12 h-12 text-[11px]",
    lg: "w-20 h-20 text-[18px]",
  };

  const selectedSize = sizeMap[size];

  if (text === "大陆文学在台") {
    // Render an authentic 2x3 grid seal matching the uploaded image exactly
    return (
      <div
        className={`inline-flex flex-col items-center justify-center bg-[#cb402b] text-[#e5dfcd] border border-[#a22f1d] shadow-sm select-none p-1 rounded-[1px] ${className}`}
        style={{
          boxShadow: "inset 0 0 5px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)",
          width: size === "sm" ? "36px" : size === "md" ? "44px" : "60px",
          height: size === "sm" ? "54px" : size === "md" ? "66px" : "90px",
        }}
      >
        <div className="grid grid-cols-2 gap-x-0.5 gap-y-0.5 font-serif font-black text-center leading-none h-full w-full items-center justify-center"
             style={{ fontSize: size === "sm" ? "9px" : size === "md" ? "11px" : "15px" }}>
          {/* Row 1: Left column '陆', Right column '大' */}
          <div className="select-none text-[#e5dfcd] font-extrabold">陆</div>
          <div className="select-none text-[#e5dfcd] font-extrabold">大</div>
          {/* Row 2: Left column '学', Right column '文' */}
          <div className="select-none text-[#e5dfcd] font-extrabold">学</div>
          <div className="select-none text-[#e5dfcd] font-extrabold">文</div>
          {/* Row 3: Left column '台', Right column '在' */}
          <div className="select-none text-[#e5dfcd] font-extrabold">台</div>
          <div className="select-none text-[#e5dfcd] font-extrabold">在</div>
        </div>
      </div>
    );
  }

  // Procedural ancient red seal stamp
  // It has a slightly rough, carved organic border with deep brick red-orange background and dry bright beige ink
  return (
    <div
      className={`inline-flex items-center justify-center font-serif font-bold text-center border-2 border-double border-[#a22f1d] bg-[#cb402b] text-[#e5dfcd] shadow-sm select-none p-1 rounded-[1px] select-none ${selectedSize} ${className}`}
      style={{
        boxShadow: "inset 0 0 8px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.15)",
        textShadow: "1px 1px 0px rgba(0,0,0,0.1)",
        writingMode: "vertical-rl", // authentic vertical right-to-left layout
        letterSpacing: "0.1em",
      }}
      title={text}
    >
      <span className="leading-tight select-none opacity-90">{text}</span>
    </div>
  );
}
