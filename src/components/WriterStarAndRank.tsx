import React, { useState } from "react";
import { Author } from "../types";
import Seal from "./Seals";

interface WriterStarAndRankProps {
  authors: Author[];
  onSelectAuthor: (author: Author) => void;
}

type MetricType = "indexScore" | "newsVolume" | "spreadEffect" | "cultureInfluence";

export default function WriterStarAndRank({ authors, onSelectAuthor }: WriterStarAndRankProps) {
  const [viewMode, setViewMode] = useState<"star" | "rank">("star");
  const [activeMetric, setActiveMetric] = useState<MetricType>("indexScore");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Pre-calculated pseudo-random coordinates for 10 authors in the "star map" state (viewBox 800x400)
  const starCoords: Record<string, { x: number; y: number }> = {
    maodun: { x: 400, y: 150 }, // central
    zhangailing: { x: 220, y: 120 },
    luxun: { x: 580, y: 130 },
    hanhan: { x: 180, y: 250 },
    moyan: { x: 620, y: 260 },
    laoshe: { x: 320, y: 220 },
    wanganyi: { x: 480, y: 240 },
    shencongwen: { x: 500, y: 90 },
    caoyu: { x: 300, y: 70 },
    xiaohong: { x: 700, y: 180 },
  };

  // Connect lines for the star map to show propagation associations (like thematic links)
  const starLinks = [
    { from: "maodun", to: "shencongwen" },
    { from: "maodun", to: "wanganyi" },
    { from: "zhangailing", to: "wanganyi" },
    { from: "zhangailing", to: "caoyu" },
    { from: "luxun", to: "laoshe" },
    { from: "luxun", to: "xiaohong" },
    { from: "moyan", to: "laoshe" },
    { from: "hanhan", to: "luxun" },
  ];

  const getMetricLabel = (metric: MetricType) => {
    switch (metric) {
      case "indexScore":
        return "综合指数";
      case "newsVolume":
        return "新闻量";
      case "spreadEffect":
        return "传播效能";
      case "cultureInfluence":
        return "文化影响";
    }
  };

  // Sorted authors for the ranking view based on selected metric
  const sortedAuthors = [...authors].sort((a, b) => b[activeMetric] - a[activeMetric]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 font-serif">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#977a57]/25 pb-4">
        <div>
          <span className="text-xs text-[#977a57] tracking-widest block mb-1 uppercase">
            【数据维度 ── 聚点成林】
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f1610] tracking-wider">
            大陆近现代作家在台传播星图与排行
          </h3>
          <p className="text-xs md:text-sm text-[#575334] mt-1 tracking-wide">
            在过去二十年的叙事图景中，大陆近现代经典作家的影响力如同不灭星辰，跨代际流动。
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex space-x-2 mt-4 md:mt-0 bg-[#faf5ea]/70 p-1 rounded-sm border border-[#977a57]/20 shrink-0">
          <button
            onClick={() => setViewMode("star")}
            className={`px-4 py-1.5 text-xs tracking-widest rounded-sm transition-all cursor-pointer ${
              viewMode === "star"
                ? "bg-[#977a57] text-[#e5dfcd] font-medium shadow"
                : "text-[#575334] hover:text-[#1c1109]"
            }`}
          >
            传播星图
          </button>
          <button
            onClick={() => setViewMode("rank")}
            className={`px-4 py-1.5 text-xs tracking-widest rounded-sm transition-all cursor-pointer ${
              viewMode === "rank"
                ? "bg-[#977a57] text-[#e5dfcd] font-medium shadow"
                : "text-[#575334] hover:text-[#1c1109]"
            }`}
          >
            传播排行
          </button>
        </div>
      </div>

      {/* Narrative block */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10 items-stretch">
        <div className="lg:col-span-1 flex flex-col justify-between bg-[#faf5ea]/40 border border-[#977a57]/20 p-5 rounded-sm relative shadow-inner">
          <div className="absolute top-3 right-3 rotate-12 opacity-80">
            <Seal text="彼岸之旅" size="sm" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#2c1d11] tracking-wide mb-3 border-b border-[#977a57]/15 pb-2">
              「IP常青藤」
            </h4>
            <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide text-justify">
              经典文学在岛内场域中宛如一台台“永动机”，不仅成功抵御了时间周期的衰减，更凭借连续性的数据沉淀，悄然跨越了两代至三代人的文化记忆。
            </p>
            <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide mt-3 text-justify">
              <strong>茅盾</strong>位居榜首，受“茅盾文学奖”的长效带动；<strong>张爱玲</strong>以都市情爱与民国气质，深植于大众文化空间；而<strong>鲁迅</strong>则频繁作为公共批判的精神符号，被广泛引用。
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#977a57]/15">
            <span className="text-[10px] text-[#977a57] block tracking-wide">
              * 数据附注说明：
            </span>
            <span className="text-[10px] text-[#977a57]/80 block leading-normal">
              本星图与排行基于台媒、学术论著及数字出版等多维度新闻量与社会引用综合效能评估（交互演示数据）。
            </span>
          </div>
        </div>

        {/* Visual Canvas Container */}
        <div className="lg:col-span-3 min-h-[420px] bg-[#faf5ea]/80 border border-[#977a57]/15 rounded-sm shadow-md p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle water smudge overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),transparent)]" />

          {viewMode === "star" ? (
            /* ==================== mode: STAR MAP ==================== */
            <div className="relative w-full flex-1 flex flex-col justify-center">
              <div className="text-center mb-2">
                <span className="text-[11px] font-sans tracking-widest text-[#977a57]">
                  ── 双击或点击光点，打开作家详细卷轴 ──
                </span>
              </div>
              <div className="relative w-full h-[320px]">
                <svg viewBox="0 0 800 320" className="w-full h-full">
                  {/* Underlay Links with smooth handdrawn line filters */}
                  {starLinks.map((link, idx) => {
                    const fromPt = starCoords[link.from];
                    const toPt = starCoords[link.to];
                    if (!fromPt || !toPt) return null;
                    return (
                      <line
                        key={idx}
                        x1={fromPt.x}
                        y1={fromPt.y - 30} // adjust offset
                        x2={toPt.x}
                        y2={toPt.y - 30}
                        stroke="#977a57"
                        strokeWidth="1"
                        strokeOpacity="0.25"
                        strokeDasharray="2,2"
                        className="transition-all duration-700"
                      />
                    );
                  })}

                  {/* Nodes */}
                  {authors.map((author) => {
                    const pt = starCoords[author.id];
                    if (!pt) return null;

                    const isHovered = hoveredNode === author.id;
                    const rSize = 6 + (author.indexScore / 100) * 12; // dynamic radius based on indexScore

                    return (
                      <g
                        key={author.id}
                        className="cursor-pointer group"
                        onClick={() => onSelectAuthor(author)}
                        onMouseEnter={() => setHoveredNode(author.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {/* Glow halo */}
                        <circle
                           cx={pt.x}
                           cy={pt.y - 30}
                           r={rSize + 8}
                           className={`fill-amber-800/5 transition-all duration-500 ${
                             isHovered ? "fill-amber-700/20 scale-125" : ""
                           }`}
                        />
                        {/* Core Ink spot point */}
                        <circle
                          cx={pt.x}
                          cy={pt.y - 30}
                          r={rSize}
                          className={`fill-[#1c1109] transition-all duration-300 ${
                            isHovered ? "fill-[#cb402b]" : ""
                          }`}
                        />
                        {/* Small center pulse dot */}
                        <circle
                          cx={pt.x}
                          cy={pt.y - 30}
                          r="2.5"
                          className="fill-[#e5dfcd] opacity-80"
                        />
                        {/* Text labels */}
                        <text
                          x={pt.x}
                          y={pt.y - 30 - rSize - 4}
                          textAnchor="middle"
                          className={`font-serif text-[11px] transition-colors duration-300 select-none ${
                            isHovered ? "fill-[#cb402b] font-semibold" : "fill-[#575334]"
                          }`}
                        >
                          {author.name}
                        </text>
                        {/* Sparkle rating */}
                        <text
                          x={pt.x}
                          y={pt.y - 30 + rSize + 11}
                          textAnchor="middle"
                          className="font-mono text-[9px] fill-[#977a57]/80 pointer-events-none select-none"
                        >
                          {author.indexScore}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Star Map Tooltip Overlay */}
                {hoveredNode && starCoords[hoveredNode] && (
                  <div
                    className="absolute bg-[#faf5ea]/95 border border-[#977a57]/35 p-3 rounded shadow-md pointer-events-none transition-opacity duration-300 max-w-[240px] z-30"
                    style={{
                      left: `${((starCoords[hoveredNode]?.x || 0) / 800) * 100}%`,
                      top: `${(((starCoords[hoveredNode]?.y) || 0) / 320) * 100}%`,
                      transform: "translate(-50%, -105%)",
                    }}
                  >
                    {(() => {
                      const nodeAuthor = authors.find((a) => a.id === hoveredNode);
                      if (!nodeAuthor) return null;
                      return (
                        <div className="font-serif">
                          <div className="flex justify-between items-center border-b border-[#977a57]/20 pb-1 mb-1.5">
                            <span className="font-bold text-sm text-[#1f1610]">{nodeAuthor.name}</span>
                            <span className="text-[10px] bg-red-800 text-stone-100 px-1 py-0.2 rounded">
                              综：{nodeAuthor.indexScore}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6d5641] leading-relaxed line-clamp-3">
                            “{nodeAuthor.quote}”
                          </p>
                          <div className="flex justify-between text-[9px] text-[#977a57]/80 mt-1.5 font-mono">
                            <span>新闻:{nodeAuthor.newsVolume}</span>
                            <span>效能:{nodeAuthor.spreadEffect}</span>
                            <span>影响:{nodeAuthor.cultureInfluence}</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ==================== mode: RANKING BARS ==================== */
            <div className="relative w-full flex-1 flex flex-col justify-between">
              {/* Metric Switch Toolbar */}
              <div className="flex flex-wrap gap-2 items-center justify-center border-b border-[#977a57]/10 pb-3 mb-4">
                {(["indexScore", "newsVolume", "spreadEffect", "cultureInfluence"] as MetricType[]).map((metric) => (
                  <button
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`px-3 py-1 text-xs tracking-wider rounded border transition-all cursor-pointer ${
                      activeMetric === metric
                        ? "bg-[#977a57] text-stone-100 border-[#977a57] font-semibold"
                        : "border-[#977a57]/25 text-[#6d5641] hover:border-[#977a57]/50 hover:bg-stone-100/50"
                    }`}
                  >
                    {getMetricLabel(metric)}
                  </button>
                ))}
              </div>

              {/* Bar lists */}
              <div className="space-y-3.5 pr-2 flex-1 overflow-y-auto max-h-[300px]">
                {sortedAuthors.map((author, index) => {
                  const val = author[activeMetric];
                  const widthPercent = `${Math.max(15, (val / 100) * 100)}%`;

                  return (
                    <div
                      key={author.id}
                      onClick={() => onSelectAuthor(author)}
                      className="group flex items-center justify-between space-x-3 cursor-pointer py-0.5"
                    >
                      {/* Name and Rank Badge */}
                      <div className="flex items-center space-x-2 w-28 shrink-0 select-none">
                        <span
                          className={`w-5 h-5 flex items-center justify-center font-mono text-[10px] rounded-full font-bold ${
                            index < 3
                              ? "bg-[#cb402b] text-[#f7eedc] shadow-sm"
                              : "bg-[#e8dec4] text-[#6d5641]"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="font-bold text-sm text-[#2c1d11] group-hover:text-[#cb402b] transition-colors">
                          {author.name}
                        </span>
                      </div>

                      {/* Bar represented as a custom styled Chinese calligraphic horizontal ink splash */}
                      <div className="flex-1 h-6 bg-stone-100/60 rounded-sm overflow-hidden relative border border-[#977a57]/10 shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-[#2c1d11] to-[#6d5641] group-hover:from-[#a82525] group-hover:to-[#cb402b] transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                          style={{ width: widthPercent }}
                        >
                          {/* subtle brush noise inside the bar */}
                          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-repeat bg-[size:10px_10px]" style={{ backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)" }} />
                          <span className="font-mono text-[10px] text-stone-100 font-bold tracking-wider opacity-90 select-none">
                            {val}
                          </span>
                        </div>
                      </div>

                      {/* Small badge for local tag on large screen */}
                      <div className="hidden sm:block text-right w-36 shrink-0 font-serif text-[10px] text-[#977a57] truncate italic">
                        {author.cardTag}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chart footer */}
              <div className="text-center mt-3 text-[10px] text-stone-400 select-none italic">
                * 点击任意一栏可展开该作家详尽在台学术与媒体传播解析。
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
