import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  backgroundAlpha?: number; // derived from scroll
}

export default function TopNav({ activeSection, onNavigate, backgroundAlpha = 1 }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: "intro", label: "引言", anchor: "intro-section" },
    { id: "whisper", label: "同根的低语", anchor: "chapter1-section" },
    { id: "mirror", label: "镜中的彼岸", anchor: "chapter2-section" },
    { id: "river", label: "字里藏着一条河", anchor: "chapter3-section" }
  ];

  // Adjust style depending on scroll opacity
  // "顶部为温润棕色导航条" -> #977a57 warm brown
  const alpha = Math.max(0.65, Math.min(1, backgroundAlpha));
  const navBgColor = `rgba(151, 122, 87, ${alpha})`; // Warm brown (#977a57) with dynamic opacity

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md backdrop-blur-sm"
      style={{ backgroundColor: navBgColor, borderBottom: "1px solid rgba(229, 223, 205, 0.25)" }}
      aria-label="主要导航"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand logo / title */}
        <button
          onClick={() => onNavigate("intro-section")}
          className="flex items-center space-x-2 text-[#e5dfcd] font-serif tracking-widest text-lg md:text-xl font-medium focus:outline-none focus:ring-1 focus:ring-[#977a57]"
          aria-label="返回首页"
        >
          {/* Small red stamp emblem */}
          <span className="w-6 h-6 bg-[#cb402b] text-[#e5dfcd] flex items-center justify-center font-bold text-xs rounded-sm mr-2 shadow-inner select-none font-serif">
            笔
          </span>
          <span>笔墨越海峡</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.anchor);
                }}
                className={`relative py-2 text-sm lg:text-base font-serif tracking-wider transition-colors duration-300 focus:outline-none focus:text-[#ffffff] ${
                  isActive ? "text-[#ffffff] font-semibold" : "text-[#e5dfcd]/80 hover:text-[#ffffff]"
                }`}
                aria-label={`跳转至 ${item.label}`}
              >
                {item.label}
                {/* Active marker - red stamp dot */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#cb402b] rounded-full shadow-[0_0_4px_#cb402b]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#e5dfcd] hover:text-[#ffffff] focus:outline-none focus:ring-1 focus:ring-[#977a57] p-2"
            aria-expanded={mobileOpen}
            aria-label="切换菜单"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#977a57] border-t border-[#a28a6f] px-6 py-4 flex flex-col space-y-4 animate-fadeIn">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate(item.anchor);
                }}
                className={`w-full text-left py-3 px-4 font-serif text-base tracking-wider rounded transition-colors ${
                  isActive
                    ? "bg-[#806646] text-[#ffffff] font-semibold"
                    : "text-[#e5dfcd] hover:bg-[#806646]/50 hover:text-[#ffffff]"
                }`}
                aria-label={`跳转至 ${item.label}`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 bg-[#cb402b] rounded-full" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
