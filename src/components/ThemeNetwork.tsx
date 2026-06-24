import React, { useState } from "react";
import { THEME_NODES } from "../data/content";
import Seal from "./Seals";

export default function ThemeNetwork() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Define position mappings to render a clean circular or schematic SVG network
  // viewBox: 800 x 400
  // Center nodes (themes), left nodes (authors), right nodes (works)
  const themePositions: Record<string, { x: number; y: number }> = {
    "women-city": { x: 400, y: 110 },
    "family-rebellion": { x: 400, y: 200 },
    "suffering-resilience": { x: 400, y: 290 },
  };

  const authorPositions: Record<string, { x: number; y: number }> = {
    "鲁迅": { x: 180, y: 60 },
    "张爱玲": { x: 180, y: 110 },
    "王安忆": { x: 180, y: 160 },
    "曹禺": { x: 180, y: 210 },
    "巴金": { x: 180, y: 260 },
    "余华": { x: 180, y: 310 },
    "沈从文": { x: 180, y: 360 },
  };

  const workPositions: Record<string, { x: number; y: number }> = {
    "倾城之恋": { x: 620, y: 80 },
    "半生缘": { x: 620, y: 120 },
    "雷雨": { x: 620, y: 160 },
    "家": { x: 620, y: 200 },
    "长恨歌": { x: 620, y: 240 },
    "活着": { x: 620, y: 280 },
    "边城": { x: 620, y: 320 },
    "故乡": { x: 620, y: 360 },
  };

  // Helper to determine active state of nodes and lines
  const isThemeActive = (themeId: string) => !selectedTheme || selectedTheme === themeId;

  const isAuthorActive = (authorName: string) => {
    if (!selectedTheme) return true;
    const node = THEME_NODES.find((t) => t.id === selectedTheme);
    return node ? node.authors.includes(authorName) : false;
  };

  const isWorkActive = (workTitle: string) => {
    if (!selectedTheme) return true;
    const node = THEME_NODES.find((t) => t.id === selectedTheme);
    return node ? node.works.includes(workTitle) : false;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 font-serif">
      <div className="text-center mb-10">
        <span className="text-xs text-[#977a57] tracking-widest block mb-1 uppercase">
          【相邻彼岸 ── 共同经验】
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1f1610] tracking-wider relative inline-block">
          现代经典文学主题网络交汇
        </h3>
        <p className="text-xs md:text-sm text-[#575334] mt-2 max-w-2xl mx-auto leading-relaxed">
          点击中心的主题圆点，探索大陆作家与经典文学作品如何在相同的文学母题下紧密相连。
          这不是孤立的声音，而是一条由共同经验汇聚成的江河。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
        {/* Interactive network display SVG */}
        <div className="lg:col-span-3 min-h-[400px] bg-[#faf5ea]/90 border border-[#977a57]/30 rounded-sm shadow-md p-4 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-2 right-2 flex space-x-2">
            {selectedTheme && (
              <button
                onClick={() => setSelectedTheme(null)}
                className="px-2.5 py-1 text-[10px] tracking-wider border border-[#cb402b] text-[#cb402b] hover:bg-red-50 transition-colors rounded-[2px]"
              >
                重置网络高亮
              </button>
            )}
          </div>

          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Draw network lines */}
            {THEME_NODES.map((node) => {
              const themePos = themePositions[node.id];
              if (!themePos) return null;

              const activeTheme = isThemeActive(node.id);

              return (
                <g key={node.id} className="transition-opacity duration-500">
                  {/* Left lines (to authors) */}
                  {node.authors.map((author) => {
                    const authPos = authorPositions[author];
                    if (!authPos) return null;
                    const activeLine = activeTheme && isAuthorActive(author);

                    return (
                      <path
                        key={author}
                        d={`M ${themePos.x} ${themePos.y} Q ${(themePos.x + authPos.x) / 2} ${(themePos.y + authPos.y) / 2 + 10} ${authPos.x} ${authPos.y}`}
                        fill="none"
                        stroke={activeLine ? "#cb402b" : "#977a57"}
                        strokeWidth={activeLine ? "2.2" : "0.75"}
                        strokeOpacity={activeLine ? "0.8" : "0.18"}
                        className="transition-all duration-500"
                      />
                    );
                  })}

                  {/* Right lines (to works) */}
                  {node.works.map((work) => {
                    const workPos = workPositions[work];
                    if (!workPos) return null;
                    const activeLine = activeTheme && isWorkActive(work);

                    return (
                      <path
                        key={work}
                        d={`M ${themePos.x} ${themePos.y} Q ${(themePos.x + workPos.x) / 2} ${(themePos.y + workPos.y) / 2 - 10} ${workPos.x} ${workPos.y}`}
                        fill="none"
                        stroke={activeLine ? "#cb402b" : "#977a57"}
                        strokeWidth={activeLine ? "2.2" : "0.75"}
                        strokeOpacity={activeLine ? "0.8" : "0.18"}
                        className="transition-all duration-500"
                      />
                    );
                  })}
                </g>
              );
            })}

            {/* Author Nodes (Left side) */}
            {Object.entries(authorPositions).map(([name, pos]) => {
              const active = isAuthorActive(name);
              return (
                <g key={name} className="transition-all duration-500">
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill={active ? "#1c1109" : "#e5dfcd"}
                    opacity={active ? "1" : "0.35"}
                  />
                  <text
                    x={pos.x - 12}
                    y={pos.y + 4}
                    textAnchor="end"
                    className="text-[11px] font-semibold fill-[#575334] transition-all duration-500"
                    opacity={active ? "1" : "0.35"}
                  >
                    {name}
                  </text>
                </g>
              );
            })}

            {/* Work Nodes (Right side) */}
            {Object.entries(workPositions).map(([title, pos]) => {
              const active = isWorkActive(title);
              return (
                <g key={title} className="transition-all duration-500">
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill={active ? "#977a57" : "#e5dfcd"}
                    opacity={active ? "1" : "0.35"}
                  />
                  <text
                    x={pos.x + 12}
                    y={pos.y + 4}
                    textAnchor="start"
                    className="text-[11px] font-medium fill-[#575334] italic transition-all duration-500"
                    opacity={active ? "1" : "0.35"}
                  >
                    《{title}》
                  </text>
                </g>
              );
            })}

            {/* Central Theme Nodes (Middle column) */}
            {THEME_NODES.map((node) => {
              const pos = themePositions[node.id];
              if (!pos) return null;

              const active = isThemeActive(node.id);
              const isSelected = selectedTheme === node.id;

              return (
                <g
                  key={node.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedTheme(isSelected ? null : node.id)}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? "14" : "11"}
                    fill={active ? "#cb402b" : "#e5dfcd"}
                    className="transition-all duration-500"
                    stroke="#faf5ea"
                    strokeWidth="2"
                    style={{
                      filter: active ? "drop-shadow(0 2px 4px rgba(203,64,43,0.3))" : "none",
                    }}
                  />
                  {/* Outer breathing ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? "20" : "16"}
                    fill="none"
                    stroke={active ? "#cb402b" : "transparent"}
                    strokeWidth="1.2"
                    strokeDasharray="3,3"
                    className="transition-all duration-500 opacity-60"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + (isSelected ? 32 : 28)}
                    textAnchor="middle"
                    className={`text-[12px] font-bold tracking-wider transition-all duration-500 ${
                      active ? "fill-[#cb402b]" : "fill-stone-400"
                    }`}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Theme description panel (批注/Note format) */}
        <div className="lg:col-span-1 flex flex-col justify-between bg-[#fbf9f4]/80 border-l-4 border-[#cb402b] p-5 rounded-r shadow-sm">
          {selectedTheme ? (
            (() => {
              const themeNode = THEME_NODES.find((t) => t.id === selectedTheme);
              if (!themeNode) return null;

              return (
                <div className="flex flex-col h-full justify-between font-serif">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 border-b border-stone-200 pb-2">
                      <span className="w-2.5 h-2.5 bg-[#cb402b] rounded-full" />
                      <h4 className="text-base font-bold text-[#1f1610] tracking-wide">
                        {themeNode.name}
                      </h4>
                    </div>

                    <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide text-justify">
                      {themeNode.explanation}
                    </p>

                    <div>
                      <span className="text-[10px] text-[#977a57] block tracking-widest mb-1.5 uppercase">
                        【关联经典作家】
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {themeNode.authors.map((author) => (
                          <span
                            key={author}
                            className="px-2 py-0.5 text-xs border border-[#977a57]/30 text-[#6d5641] bg-stone-100 rounded-sm"
                          >
                            {author}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#977a57] block tracking-widest mb-1.5 uppercase">
                        【关联经典作品】
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {themeNode.works.map((work) => (
                          <span
                            key={work}
                            className="px-2 py-0.5 text-xs border border-[#cb402b]/30 text-[#cb402b] bg-red-50/50 rounded-sm italic"
                          >
                            《{work}》
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedTheme(null)}
                    className="mt-6 w-full py-1.5 text-xs font-serif text-stone-500 hover:text-stone-800 transition-colors border border-stone-200 rounded-[2px]"
                  >
                    合上批注 ── 重置网络
                  </button>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col h-full items-center justify-center text-center text-stone-400 py-10 font-serif">
              <Seal text="字裡藏河" size="sm" className="opacity-45 mb-4 shrink-0" />
              <p className="text-xs leading-relaxed max-w-[150px]">
                点击左侧中心的主题词圆点，查看对应叙事注解。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
