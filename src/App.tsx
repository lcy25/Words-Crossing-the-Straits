import React, { useState, useEffect, useRef } from "react";
import InkPaperBackground from "./components/InkPaperBackground";
import TopNav from "./components/TopNav";
import Seal from "./components/Seals";
import InkWaveHero from "./components/InkWaveHero";
import LetterUnfoldModal from "./components/LetterUnfoldModal";
import WriterStarAndRank from "./components/WriterStarAndRank";
import TagBarChart from "./components/TagBarChart";
import FlipCard from "./components/FlipCard";
import ThemeNetwork from "./components/ThemeNetwork";
import EssayPaper from "./components/EssayPaper";
import { AUTHORS, SCREEN_COPY } from "./data/content";
import { Author } from "./types";
import { ArrowUp, Award, BookOpen, Quote, Sparkles } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedBoatAuthor, setSelectedBoatAuthor] = useState<Author | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // References for flat smooth scroll routing
  const introRef = useRef<HTMLDivElement>(null);
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);

  // Simulate procedural calligraphic loading ink splash for exactly 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track overall scroll progress and update TopNav transparency and active anchor mapping
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Section triggers mapping
      const offsets = {
        intro: introRef.current?.offsetTop || 0,
        whisper: chapter1Ref.current?.offsetTop || 0,
        mirror: chapter2Ref.current?.offsetTop || 0,
        river: chapter3Ref.current?.offsetTop || 0,
      };

      const currentScroll = scrollY + 200; // threshold offset

      if (currentScroll >= offsets.river) {
        setActiveSection("river");
      } else if (currentScroll >= offsets.mirror) {
        setActiveSection("mirror");
      } else if (currentScroll >= offsets.whisper) {
        setActiveSection("whisper");
      } else {
        setActiveSection("intro");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (anchorId: string) => {
    let targetElement: HTMLElement | null = null;
    if (anchorId === "intro-section") targetElement = introRef.current;
    if (anchorId === "chapter1-section") targetElement = chapter1Ref.current;
    if (anchorId === "chapter2-section") targetElement = chapter2Ref.current;
    if (anchorId === "chapter3-section") targetElement = chapter3Ref.current;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectBoatAuthor = (author: Author) => {
    setSelectedBoatAuthor(author);
    setIsLetterOpen(true);
  };

  const handleCloseLetter = () => {
    setIsLetterOpen(false);
  };

  const handleContinueFromLetter = () => {
    setIsLetterOpen(false);
    // Smooth scroll down to chapter 1 (lowering boat onto the river)
    chapter1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e5dfcd] text-[#2c1d11]">
        {/* Procedural Ink Spot spreading in center */}
        <div className="relative w-48 h-44 flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse opacity-85">
            {/* Ink blot drawing */}
            <path
              d="M 50 10 Q 75 15 80 40 T 70 85 Q 50 95 30 80 T 20 45 Q 25 15 50 10"
              fill="#241a12"
              className="transform origin-center transition-all duration-1000 scale-110"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Seal text="字裡藏河" size="md" />
          </div>
        </div>
        <p className="mt-6 font-serif text-sm tracking-[0.4em] text-[#977a57] animate-pulse">
          字里江河 ‧ 笔墨初启
        </p>
        <span className="text-[10px] text-stone-400 mt-2 font-mono select-none">
          宣纸肌理载入中...
        </span>
      </div>
    );
  }

  // Determine ambient background mode depending on the active anchor segment
  const getAmbientMode = () => {
    if (activeSection === "whisper") return "night"; // Dark indigo star space
    if (activeSection === "mirror") return "mirror"; // Fragmented geometric reflection
    if (activeSection === "river") return "river"; // Rivers flowing on paper
    return "paper"; // default pure paper texture
  };

  return (
    <InkPaperBackground mode={getAmbientMode()}>
      {/* Top sticky calligraphic nav */}
      <TopNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        backgroundAlpha={scrollProgress * 2}
      />

      {/* ==================== INTRO / HERO SECTION ==================== */}
      <div ref={introRef} id="intro-section" className="relative w-full">
        <InkWaveHero
          authors={AUTHORS}
          onSelectBoat={handleSelectBoatAuthor}
          onExplore={() => handleNavigate("chapter1-section")}
        />

        {/* Narrative text block following Hero: "大陆近现代作家并没有停留在课本中..." */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 font-serif text-center relative z-20">
          <div className="absolute top-1/2 left-[10%] -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-80 h-80 fill-[#2c1d11]">
              <path d="M10,80 Q40,30 90,80 Z" />
            </svg>
          </div>

          <div className="inline-block mb-6 select-none animate-bounce">
            <Seal text="彼岸之旅" size="sm" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2c1d11] tracking-widest mb-8 leading-snug">
            笔墨越海峡：数据解码华文经典的彼岸之旅
          </h2>

          <div className="space-y-6 md:space-y-8 text-sm md:text-lg leading-relaxed text-[#3a2c1e] text-justify max-w-3xl mx-auto">
            <p className="indent-8 tracking-wide">
              {SCREEN_COPY.intro.para1}
            </p>
            <p className="indent-8 tracking-wide">
              {SCREEN_COPY.intro.para2}
            </p>
            <p className="indent-8 tracking-wide">
              {SCREEN_COPY.intro.para3}
            </p>
          </div>
        </div>
      </div>

      {/* ==================== CHAPTER 1: 同根的低语 ==================== */}
      <div
        ref={chapter1Ref}
        id="chapter1-section"
        className="w-full relative z-20 transition-all duration-1000 py-16 md:py-24"
        style={{
          backgroundColor: activeSection === "whisper" ? "rgba(10,12,15,0.7)" : "transparent",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 select-none">
            <span className="text-xs text-[#cb402b] font-semibold tracking-[0.4em] uppercase block mb-2">
              【 第一章 】
            </span>
            <h2 className="text-4xl font-serif font-black tracking-widest text-[#2c1d11] dark:text-[#f7eedc] inline-block relative pb-3 border-b-2 border-[#cb402b]/30">
              同根的低语
            </h2>
            <p className="text-sm font-serif text-stone-500 dark:text-stone-400 mt-3 tracking-widest">
              跨越海峡的文学共鸣 ── 历经二十载的书卷长歌
            </p>
          </div>

          {/* Core Interactive Writer Star Map / Bar list component */}
          <WriterStarAndRank authors={AUTHORS} onSelectAuthor={handleSelectBoatAuthor} />

          {/* Literature analysis text */}
          <div className="max-w-3xl mx-auto space-y-6 mt-12 text-[#2c1d11] dark:text-[#ebdcc4] text-sm md:text-base leading-relaxed tracking-wide text-justify font-serif">
            <p className="indent-8">
              经典名著如<strong>《倾城之恋》《半生缘》《尘埃落定》《家》《北京人》《金锁记》</strong>等，不仅是文学史上的丰碑，更是两岸几代读者共享的无形资产。
            </p>
          </div>
        </div>
      </div>

      {/* ==================== CHAPTER 2: 镜中的变奏 ==================== */}
      <div
        ref={chapter2Ref}
        id="chapter2-section"
        className="w-full relative z-20 py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 select-none">
            <span className="text-xs text-[#cb402b] font-semibold tracking-[0.4em] uppercase block mb-2">
              【 第二章 】
            </span>
            <h2 className="text-4xl font-serif font-black tracking-widest text-[#1f1610] inline-block relative pb-3 border-b-2 border-[#cb402b]/30">
              镜中的变奏
            </h2>
            <p className="text-sm font-serif text-[#977a57] mt-3 tracking-widest">
              多元场域下的阐释与隐喻 ── 从碎片中重筑丰盈
            </p>
          </div>

          {/* Tag Distribution bars */}
          <TagBarChart />

          {/* Side-by-side comparison character analysis: Zhang Ailing & Wang Anyi / Lu Xun / Shen Congwen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-12">
            {/* Zhang & Wang */}
            <div className="p-6 bg-[#faf5ea]/90 border border-[#977a57]/20 shadow-sm rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#cb402b] font-semibold mb-3">
                  <BookOpen size={16} />
                  <span className="text-xs tracking-wider font-serif">上海旗袍女性缩影</span>
                </div>
                <h4 className="text-lg font-bold text-[#1f1610] mb-2">
                  张爱玲与王安忆
                </h4>
                <p className="text-xs text-[#4a3b32] leading-relaxed text-justify">
                  张爱玲笔下的上海是民国遗韵、爱情算计、华丽苍凉的都市迷宫；王安忆的上海则是市井烟火、日常里弄的细密画卷。
                  她们在外界视角的长焦镜头下，重叠、合并，被台湾读者投射成一种跨越时空的“上海女性气质”：既有冷峻自保的孤绝，也有平凡世俗的坚韧。
                </p>
              </div>
              <span className="text-[10px] text-[#977a57] block mt-4 font-mono select-none">
                指数关联度: 0.770
              </span>
            </div>

            {/* Lu Xun */}
            <div className="p-6 bg-[#faf5ea]/90 border border-[#977a57]/20 shadow-sm rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#cb402b] font-semibold mb-3">
                  <Award size={16} />
                  <span className="text-xs tracking-wider font-serif">公共引用的精神符号</span>
                </div>
                <h4 className="text-lg font-bold text-[#1f1610] mb-2">
                  鲁迅的锋利投枪
                </h4>
                <p className="text-xs text-[#4a3b32] leading-relaxed text-justify">
                  鲁迅不仅活在教材与现代小说史里，更频繁出现在台湾公共评论、社会反思文章中。当谈及知识分子勇气、批判精神、启蒙或“国民性”时，他的“横眉冷对”就会像投枪一样被高频唤起，赋予当下现实深刻的镜鉴意义。
                </p>
              </div>
              <span className="text-[10px] text-[#977a57] block mt-4 font-mono select-none">
                新闻引用指数: 0.95
              </span>
            </div>

            {/* Shen Congwen */}
            <div className="p-6 bg-[#faf5ea]/90 border border-[#977a57]/20 shadow-sm rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#cb402b] font-semibold mb-3">
                  <Sparkles size={16} />
                  <span className="text-xs tracking-wider font-serif">乡土诗意的文化怀想</span>
                </div>
                <h4 className="text-lg font-bold text-[#1f1610] mb-2">
                  沈从文的翠翠守望
                </h4>
                <p className="text-xs text-[#4a3b32] leading-relaxed text-justify">
                  沈从文在海峡彼岸，是“最后的抒情诗人”。翠翠的等待、吊脚楼、渡船的晃动、溪水清音，在高度繁华、浮躁的现代都市生活中，构成了一种长效的“文化乡愁”，为一个剧烈变迁时代中无处安放的心灵，提供了温存宁静。
                </p>
              </div>
              <span className="text-[10px] text-[#977a57] block mt-4 font-mono select-none">
                古典治愈指数: 0.804
              </span>
            </div>
          </div>

          {/* Interactive 3D flip card component */}
          <FlipCard />
        </div>
      </div>

      {/* ==================== CHAPTER 3: 字里藏着一条河 ==================== */}
      <div
        ref={chapter3Ref}
        id="chapter3-section"
        className="w-full relative z-20 py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 select-none">
            <span className="text-xs text-[#cb402b] font-semibold tracking-[0.4em] uppercase block mb-2">
              【 第三章 】
            </span>
            <h2 className="text-4xl font-serif font-black tracking-widest text-[#1f1610] inline-block relative pb-3 border-b-2 border-[#cb402b]/30">
              相邻的彼岸
            </h2>
            <p className="text-sm font-serif text-[#977a57] mt-3 tracking-widest">
              字里藏着一条河 ── 汇聚华文情感的共同经验
            </p>
          </div>

          {/* Core Interactive Theme Network 交汇图 */}
          <ThemeNetwork />

          {/* Xiaolin Story & traditional Essay Paper grid component */}
          <EssayPaper />

          {/* Final Emotional conclusion peak */}
          <div className="max-w-3xl mx-auto text-center font-serif mt-16 md:mt-24 space-y-6">
            <span className="text-xs text-[#977a57] tracking-widest uppercase block mb-2 select-none">
              — 渡海落幕 ‧ 浩渺余波 —
            </span>
            <p className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#2c1d11] animate-pulse">
              “字裡藏著一條河。”
            </p>
            <p className="text-xl md:text-2xl text-[#614d3c] tracking-widest italic">
              写的人在此岸，读的人在彼岸。
            </p>
            <p className="text-3xl md:text-4xl font-black text-[#cb402b] tracking-[0.3em]">
              可水不认岸。水只认流。
            </p>
            <div className="text-xs md:text-sm text-stone-500 max-w-lg mx-auto leading-relaxed pt-4 border-t border-[#977a57]/20 text-justify">
              <p className="indent-8">
                当他们合上作文本时，海峡还在。但纸上的那条河，早已悄无声息地，在几代人的字里行间，缓缓流淌过去了……
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER / DATA STATEMENT ==================== */}
      <footer
        className="w-full bg-[#241a12] text-[#f7eedc] py-16 px-6 mt-20 relative z-20"
        style={{ borderTop: "3px double rgba(151, 122, 87, 0.4)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="font-serif">
            <h4 className="text-lg font-bold tracking-widest mb-4 flex items-center">
              <span className="w-5 h-5 bg-[#cb402b] flex items-center justify-center font-serif text-[10px] mr-2">
                笔
              </span>
              笔墨越海峡
            </h4>
            <p className="text-xs text-[#dcd1be] leading-relaxed text-justify">
              《笔墨越海峡：数据解码华文经典彼岸之旅》是一份交互式数字媒体叙事卷轴。我们利用长达二十年的相关阅读量、新闻报道引证数、社会引用频次、以及历年出版流传印记进行抽象数据可视化，回溯大陆经典名家经典的跨代际海峡流播轨迹。
            </p>
          </div>

          <div className="font-serif">
            <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#977a57]">
              数据说明与出处
            </h4>
            <ul className="text-xs text-[#dcd1be]/80 space-y-2.5">
              <li>• 作家综合传播排行榜数据：来源于学术大纲、数家权威主流台媒、博客社论统计加权（为演示示意数据）。</li>
              <li>• 特质标签多维分布：整合语义分析和特定标签引用占比提取。</li>
              <li>• 主题交汇网络图：基于小说核心大纲词汇和评论交叉关联聚合。</li>
              <li>• 视觉配色及红印：遵循砖红橙色、亮米色及温润棕色主视觉规范设计。</li>
            </ul>
          </div>

          <div className="font-serif flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#977a57]">
                华文经典 ‧ 纸上流波
              </h4>
              <p className="text-xs text-[#dcd1be]/60 leading-normal">
                “文字拥有极温暖、极长久的生命力。只要有一个孩子读它，那条河就永远不会干涸。”
              </p>
            </div>

            {/* Back to top button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-xs text-[#977a57] hover:text-stone-100 transition-colors focus:outline-none focus:ring-1 focus:ring-[#977a57] p-2 border border-[#977a57]/30 cursor-pointer"
                aria-label="回到顶部"
              >
                <ArrowUp size={14} />
                <span>返回海面</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#dcd1be]/40 font-mono">
          <p>© 2026 笔墨越海峡. 华文经典数据叙事设计小组. 极简东方美学保留权利.</p>
          <div className="flex space-x-3 mt-4 sm:mt-0 select-none">
            <Seal text="彼岸之旅" size="sm" />
            <Seal text="字裡藏河" size="sm" />
          </div>
        </div>
      </footer>

      {/* Foldable paper letter details popup */}
      <LetterUnfoldModal
        author={selectedBoatAuthor}
        isOpen={isLetterOpen}
        onClose={handleCloseLetter}
        onContinue={handleContinueFromLetter}
      />
    </InkPaperBackground>
  );
}
