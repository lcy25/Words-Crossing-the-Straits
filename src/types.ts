export interface Author {
  id: string;
  name: string;
  quote: string;
  cardTag: string;
  keywords: string[];
  letterMood: string;
  inkShape: string;
  indexScore: number; // 综合指数
  newsVolume: number; // 新闻量
  spreadEffect: number; // 传播效能
  cultureInfluence: number; // 文化影响
  description: string; // 传播解释
  avatarSilhouette: string; // inline SVG or description
  avatarUrl?: string; // portrait photo URL
}

export interface LiteraryWork {
  title: string;
  author: string;
  tags: string[];
  desc?: string;
}

export interface TagDistributionItem {
  tag: string;
  score: number;
  desc: string;
}

export interface ThemeNode {
  id: string;
  name: string;
  works: string[]; // works associated
  authors: string[]; // authors associated
  explanation: string;
}

export interface FlipCardItem {
  id: string;
  authorName: string;
  frontLabel: string;
  backText: string;
}
