import React from "react";
import { TAG_DISTRIBUTION } from "../data/content";
import Seal from "./Seals";

export default function TagBarChart() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 font-serif">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-[#977a57]/20 pb-4">
        <div>
          <span className="text-xs text-[#977a57] tracking-widest block mb-1 uppercase">
            【镜中阐释 ── 标签重塑】
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f1610] tracking-wider flex items-center gap-2">
            <span>外部报道特质标签分布</span>
            <span className="text-[10px] font-sans font-normal px-2 py-0.5 bg-[#faf5ea] text-[#977a57] rounded-sm shrink-0 select-none">
              多维关键词指数
            </span>
          </h3>
          <p className="text-xs md:text-sm text-[#705e4d] mt-1 tracking-wide">
            在不同传播场域下，报道与评论对作家作品进行了选择性的重点阐释。
          </p>
        </div>

        <div className="mt-4 md:mt-0 rotate-6 select-none shrink-0">
          <Seal text="彼岸之旅" size="sm" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Descriptive column */}
        <div className="md:col-span-1 bg-[#faf5ea]/40 border border-[#977a57]/15 p-5 rounded-sm relative">
          <div className="absolute top-2 right-2 opacity-10 font-serif text-6xl select-none font-bold">
            镜
          </div>
          <h4 className="text-base font-bold text-[#2c1d11] tracking-wide mb-2.5">
            标签化的折射
          </h4>
          <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide text-justify">
            一个经典作家进入外部传播场域，报道往往会贴上特定的标签，并选择性放大某些面向。在这面由不同语境重塑的镜子里，名字不再仅仅指向纸页上的文本，而是被赋予了当下的社会审美。
          </p>
          <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide mt-3 text-justify">
            正如<strong>张爱玲与王安忆</strong>被想象为上海女性特质，<strong>鲁迅</strong>成为冷峻投枪，而<strong>沈从文</strong>则是一副诗意田园。
          </p>
        </div>

        {/* Custom styled SVG Bar Chart representing calligraphic horizontal bars */}
        <div className="md:col-span-2 space-y-6">
          {TAG_DISTRIBUTION.map((item, idx) => {
            const widthPercent = `${item.score}%`;

            return (
              <div key={item.tag} className="space-y-1">
                {/* Metric header info */}
                <div className="flex justify-between items-end">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cb402b]" />
                    <span className="font-bold text-sm md:text-base text-[#1f1610] tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs md:text-sm font-semibold text-[#cb402b]">
                    传播指数: {item.score}
                  </span>
                </div>

                {/* Bar stroke */}
                <div className="relative h-4 w-full bg-[#f3ebd9] rounded-sm overflow-hidden border border-[#977a57]/10 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#32241a] to-[#977a57] rounded-sm transition-all duration-1000 ease-out"
                    style={{ width: widthPercent }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-[#705e4d] leading-relaxed pl-3 border-l border-[#977a57]/20">
                  {item.desc}
                </p>
              </div>
            );
          })}
          <div className="text-right">
            <span className="text-[9px] font-mono text-stone-400 italic">
              * 交互演示数据 ── 基于历史新闻词频关联分析统计
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
