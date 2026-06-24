import React, { useState, useEffect } from "react";
import Seal from "./Seals";
import { SCREEN_COPY } from "../data/content";

export default function EssayPaper() {
  const [isTraditional, setIsTraditional] = useState(true);
  const [revealLines, setRevealLines] = useState(0);
  const [showSpecialLetter, setShowSpecialLetter] = useState(false);

  const storyLines = [
    "让我们回到开篇那张作文纸。它属于一个台湾小学生小林。",
    "她的书包里放着一本翻旧了的《边城》——那是大陆作家沈从文写的。",
    "妈妈在她八岁那年送给她，扉页上写着：“这是一条会流到心里去的河。”她读了不知多少遍。",
    "她不懂什么叫“湘西”，不懂什么叫“船夫”，不懂翠翠为什么等不到那个人回来。但她懂那条河——",
    "书上说：“小溪流下去，绕山岨流去了许多里路，便汇入那条大河。”",
    "她每次读到这一句，她的脑海里就会浮起一条弯弯曲曲的小河，水声潺潺，像在说话。",
    "在一次作文课上，老师让大家写“文字里有什么”。小林一下子就想到了那座神秘小城，那条她想想无数遍的小河。",
    "她决定要把那个地方写出来，她在格子里一笔一划写下：「字裡藏著一條河」。",
    "她盯着这几个字看了很久。然后低下头，在正文的第一行，写下了沈从文《边城》里的那句话："
  ];

  // Auto reveal text lines to simulate gradual writing on scroll/mount
  useEffect(() => {
    if (revealLines < storyLines.length) {
      const timer = setTimeout(() => {
        setRevealLines((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [revealLines]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 font-serif relative">
      {/* Red vertical side calligraphy ribbon */}
      <div className="absolute right-[4%] top-[10%] opacity-15 pointer-events-none select-none">
        <Seal text="字裡藏河" size="lg" />
      </div>

      <div className="text-center mb-8">
        <span className="text-xs text-[#977a57] tracking-widest block mb-1 uppercase">
          【字里江河 ── 回环落笔】
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1f1610] tracking-wider mb-2">
          小林书包里的《边城》
        </h3>
        <p className="text-xs md:text-sm text-[#705e4d] max-w-xl mx-auto leading-relaxed">
          一个台湾小学生作文本上的汉字，搭起了一座无形的渡海拱桥。点击作文纸标题可平滑切换繁/简体。
        </p>
      </div>

      {/* Main Composition Paper Container */}
      <div
        className="w-full bg-[#fcf5e3] border border-[#d2c2ad] shadow-xl rounded-sm p-6 md:p-10 relative overflow-hidden"
        style={{
          boxShadow: "0 15px 40px -10px rgba(151, 122, 87, 0.25), inset 0 0 30px rgba(151, 122, 87, 0.1)",
        }}
      >
        {/* Soft diagonal fold lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(135deg,transparent_45%,#977a57_50%,transparent_55%)] bg-[size:100%_100%] mix-blend-multiply" />

        {/* Traditional red/green top banner bar */}
        <div className="flex justify-between items-center border-b-2 border-dashed border-emerald-800/30 pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] md:text-xs text-emerald-800 font-bold tracking-widest px-1.5 py-0.5 border border-emerald-800/40 rounded-sm bg-emerald-50/50 select-none">
              國語作文本
            </span>
            <span className="text-[10px] text-stone-500 font-mono">
              班級: 三年一班 ‧ 姓名: 小林
            </span>
          </div>
          <span className="text-[10px] text-stone-400 select-none italic">
            * 纸上清波 ‧ 潺潺东去
          </span>
        </div>

        {/* Paper Title Area (Toggleable Traditional <-> Simplified) */}
        <div className="text-center py-4 mb-6 border-b border-emerald-800/20 relative">
          <button
            onClick={() => setIsTraditional(!isTraditional)}
            className="group relative inline-block focus:outline-none cursor-pointer"
            aria-label="点击切换繁简体标题"
          >
            <span className="absolute -top-3 -right-6 text-[8px] bg-red-800 text-stone-100 px-1 py-0.2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              切换
            </span>
            <div className="text-3xl md:text-4xl font-serif font-black tracking-[0.4em] text-[#3e2c1e] text-center select-none hover:text-[#cb402b] transition-colors duration-500">
              {isTraditional ? "〈字裡藏著一條河〉" : "〈字里藏着一条河〉"}
            </div>
          </button>
          <p className="text-[11px] font-serif text-[#977a57] tracking-widest mt-2 select-none">
            ( 鼠标点击标题，可在这片文字长河中切换繁简体 )
          </p>
        </div>

        {/* Classic Green Square Essay Paper Grid Pattern */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-2 leading-loose">
            {/* Paragraph lines rendering as grids */}
            <div className="font-serif text-[#2c221a] text-sm md:text-base leading-relaxed tracking-widest whitespace-pre-line space-y-4">
              {SCREEN_COPY.xiaolinStory.content.split("\n\n").map((para, paraIdx) => {
                // Determine if we should show this paragraph based on progression
                return (
                  <div
                    key={para}
                    className="p-3 border border-emerald-800/5 bg-[#fbf7eb]/50 rounded-sm relative transition-all duration-1000"
                    style={{
                      backgroundImage: "linear-gradient(rgba(139, 115, 85, 0.08) 1px, transparent 1px)",
                      backgroundSize: "100% 28px",
                      lineHeight: "28px"
                    }}
                  >
                    {para.split("").map((char, charIdx) => {
                      // Stagger-fade characters or whole paragraphs
                      return (
                        <span key={charIdx} className="transition-opacity duration-300">
                          {char}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emotion Trigger Area: Clickable Letter Envelope */}
        <div className="mt-8 py-6 border-t border-dashed border-emerald-800/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <h5 className="text-xs font-bold text-emerald-900 tracking-wider">
              书页夹缝里的便笺
            </h5>
            <p className="text-xs text-[#977a57] leading-relaxed max-w-md">
              点击右侧的陈旧信纸，在作文本的最末一行，重现那句温暖了无数寒夜的湘西河流私语。
            </p>
          </div>

          <button
            onClick={() => setShowSpecialLetter(true)}
            className="flex items-center space-x-2 px-5 py-2 border border-[#cb402b] text-[#cb402b] hover:bg-[#cb402b] hover:text-stone-100 transition-all text-xs font-serif rounded-[2px] tracking-widest cursor-pointer select-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#cb402b] group-hover:bg-stone-100" />
            <span>展开书角便笺</span>
          </button>
        </div>

        {/* Unfolded Shen Congwen Hand-written Quote Modal */}
        {showSpecialLetter && (
          <div className="absolute inset-0 bg-[#fbf9f4]/98 z-40 p-6 md:p-10 flex flex-col justify-between items-center animate-fadeIn">
            {/* Retro water mark brush */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="w-full flex justify-between items-center border-b border-[#977a57]/20 pb-2">
              <span className="text-xs font-serif text-[#977a57] tracking-widest">
                【小林作文本第一行 ‧ 摘抄自《边城》】
              </span>
              <button
                onClick={() => setShowSpecialLetter(false)}
                className="text-xs text-stone-500 hover:text-stone-800 border border-stone-200 px-2 py-0.5 rounded"
              >
                合上书角
              </button>
            </div>

            {/* Hand-written looking quotation text layout */}
            <div className="my-auto text-center px-4 max-w-lg space-y-6">
              <p
                className="text-2xl md:text-3xl font-serif font-black text-[#2c1d11] leading-relaxed tracking-widest italic"
                style={{ writingMode: "vertical-rl" }}
              >
                “水是各处可流的，火是各处可烧的，月亮是各处可照的，爱情是各处可到的。”
              </p>
              <div className="text-right">
                <span className="text-xs text-[#977a57] font-serif">
                  ── 摘自 沈从文 ‧《边城》
                </span>
              </div>
            </div>

            <div className="w-full flex justify-center pt-4 border-t border-stone-100 select-none">
              <button
                onClick={() => setShowSpecialLetter(false)}
                className="px-6 py-1.5 text-xs border border-[#977a57] text-[#977a57] hover:bg-[#977a57]/10 transition-all rounded-[2px]"
              >
                合上信笺，合上作文本
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Afterword follow up block */}
      <div className="mt-8 text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide text-justify">
          一张作文本，不过巴掌大。上面歪歪扭扭写着的，是沈从文笔下的河流，是一个十岁女孩用铅笔描摹的、看不见的水。那本《边城》对她意义深远——远到她也许三十岁时才会真正明白。但此刻，她只是觉得那句话好听，那条河好看。
        </p>
        <p className="text-xs md:text-sm text-[#32251a] leading-relaxed tracking-wide text-justify">
          每当他们在语文课上翻开《故乡》《边城》《城南旧事》，在作文纸上一笔一划写下那些来自海峡此岸的句子，精神世界里，早已住进了一位位大陆作家的童年、故乡与月光。
        </p>
      </div>
    </div>
  );
}
