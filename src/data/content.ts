import { Author, LiteraryWork, TagDistributionItem, ThemeNode, FlipCardItem } from "../types";

// 提示：以下均为交互演示与历史沉淀示意数据，可替换为真实学术统计结果

export const AUTHORS: Author[] = [
  {
    id: "maodun",
    name: "茅盾",
    quote: "只有竹子那样的虚心，牛皮筋那样的坚韧，烈火那样的热情，才能产生出真正不朽的艺术。",
    cardTag: "文学奖带动的长效传播",
    keywords: ["文学奖", "作品改编", "文学评价", "文化影响"],
    letterMood: "厚重、现实、结构感",
    inkShape: "根系与牌匾式墨痕",
    indexScore: 96,
    newsVolume: 92,
    spreadEffect: 95,
    cultureInfluence: 94,
    description: "茅盾位居作家榜首，一个重要原因是“茅盾文学奖”的持续带动。文学奖不仅让作家姓名频繁被提起，也让历届获奖作品、改编影视剧、深度文学评价等，连带进入台湾学术界与媒体 of 视野，形成长效的学术与公共讨论圈。",
    avatarSilhouette: "M 20,50 Q 50,20 80,50 T 140,50 Q 110,80 80,110 T 20,50",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Mao_Dun.jpg"
  },
  {
    id: "zhangailing",
    name: "张爱玲",
    quote: "生命是一袭华美的袍，爬满了虱子。",
    cardTag: "上海旗袍女性缩影",
    keywords: ["爱情", "女性", "民国气质", "城市记忆"],
    letterMood: "华丽、苍凉、清醒",
    inkShape: "旗袍曲线式墨痕",
    indexScore: 93,
    newsVolume: 89,
    spreadEffect: 91,
    cultureInfluence: 95,
    description: "张爱玲在台湾的传播广度极深，往往与老上海、民国遗韵、都市情感算计、以及清冷苍凉的女性命运相联结。她的作品成为数代读者理解现代都会人性的重要透镜，也在影视、话剧改编中获得了绵延不绝的生命力。",
    avatarSilhouette: "M 40,20 Q 80,40 50,90 T 90,130 Q 30,120 40,20",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Eileen_Chang.jpg"
  },
  {
    id: "luxun",
    name: "鲁迅",
    quote: "无穷的远方，无数的人们，都与我有关。",
    cardTag: "公共引用的精神符号",
    keywords: ["精神", "批判", "民族", "公共引用"],
    letterMood: "冷峻但有温度",
    inkShape: "锋利投枪式墨痕",
    indexScore: 91,
    newsVolume: 95,
    spreadEffect: 93,
    cultureInfluence: 92,
    description: "鲁迅以高频的新闻量和强大的传播效能占据一席之地。在两岸公共讨论中，鲁迅往往超越了单纯的文学史范畴，成为一个象征知识分子批判风骨与精神启蒙的符号，其金句在社会评论与反思文章中被高频引证。",
    avatarSilhouette: "M 30,30 L 100,20 L 90,100 L 20,90 Z",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Lu_Xun_1930s.jpg"
  },
  {
    id: "hanhan",
    name: "韩寒",
    quote: "不羁的青年，折射时代的流变。",
    cardTag: "新世纪青年文化碰撞",
    keywords: ["博客时代", "赛车", "杂文", "青年反叛"],
    letterMood: "犀利、调侃、极简",
    inkShape: "疾风与车辙式墨痕",
    indexScore: 87,
    newsVolume: 90,
    spreadEffect: 86,
    cultureInfluence: 82,
    description: "韩寒作为新世纪作家的代表，曾在台湾青年一代及网络媒体上引起过广泛的共鸣。他的博客杂文与小说，带着强烈的个人主义与幽默反叛，折射出了两岸青年在面对现代社会时相似的迷茫与反思。",
    avatarSilhouette: "M 10,60 Q 70,10 120,60 T 10,60",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "moyan",
    name: "莫言",
    quote: "文学使人胆大。",
    cardTag: "国际荣誉中的土地叙事",
    keywords: ["诺奖", "高密东北乡", "说书", "土地"],
    letterMood: "粗粝、民间、土地气",
    inkShape: "泥土和谷穗式墨痕",
    indexScore: 84,
    newsVolume: 80,
    spreadEffect: 82,
    cultureInfluence: 88,
    description: "伴随着诺贝尔文学奖的巨大光环，莫言在台湾的媒体关注度在获奖期间迎来爆发。他的高密东北乡叙事被看作是深植于中华民间土壤、混杂着魔幻与现实、粗犷野性的生命力赞歌，其国际认可极大地推动了华语经典的全球阐释。",
    avatarSilhouette: "M 50,10 Q 90,50 50,110 T 50,10",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Mo_Yan_Stockholm_2012.jpg"
  },
  {
    id: "laoshe",
    name: "老舍",
    quote: "悲悯平民，写尽北平风雨。",
    cardTag: "市井幽默与悲剧张力",
    keywords: ["胡同", "平民命运", "幽默", "老北京"],
    letterMood: "京味、朴素、苍凉",
    inkShape: "茶馆折扇式墨痕",
    indexScore: 80,
    newsVolume: 78,
    spreadEffect: 79,
    cultureInfluence: 83,
    description: "老舍的《茶馆》《骆驼祥子》在台湾舞台艺术与经典教材中具有长盛不衰的影响。他的市井幽默中透露出的普通人悲歌，唤起了两岸读者对平民命运最深切的同情与共鸣。",
    avatarSilhouette: "M 10,10 L 90,30 L 110,90 L 30,100 Z",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Lao_She.jpg"
  },
  {
    id: "wanganyi",
    name: "王安忆",
    quote: "城市是细碎的里弄，藏着长恨的悲歌。",
    cardTag: "海派都市的细密写真",
    keywords: ["城市里弄", "女性坚韧", "上海", "世俗烟火"],
    letterMood: "绵密、写实、生活感",
    inkShape: "弄堂竹影式墨痕",
    indexScore: 76,
    newsVolume: 72,
    spreadEffect: 75,
    cultureInfluence: 78,
    description: "作为当代海派文学的中流砥柱，王安忆的《长恨歌》在台版重印与评论中被赋予极高评价。她与张爱玲一道被台湾读者想象为透视老上海闺阁世俗、里弄变迁、女性生命质感的“双生花”。",
    avatarSilhouette: "M 20,40 Q 60,10 100,50 T 20,100",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "shencongwen",
    name: "沈从文",
    quote: "我行过许多地方的桥，看过许多次数的云，喝过许多种类的酒，却只爱过一个正当最好年龄的人。",
    cardTag: "乡土诗意的文化怀想",
    keywords: ["湘西", "边城", "河流", "文化乡愁"],
    letterMood: "清澈、温柔、河水感",
    inkShape: "河湾与渡船式墨痕",
    indexScore: 73,
    newsVolume: 70,
    spreadEffect: 75,
    cultureInfluence: 82,
    description: "沈从文及其《边城》在台湾被视作现代汉语文体和乡土诗意美的最高标杆。翠翠、渡船、湘西吊脚楼，构成了一个干净安详、超越时空的桃花源，为处于都市巨变中的读者提供了文化安顿 and 精神故乡。",
    avatarSilhouette: "M 10,50 Q 80,30 110,70 T 30,120",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Shen_Congwen.jpg"
  },
  {
    id: "caoyu",
    name: "曹禺",
    quote: "宇宙是一口残酷的井，里面的人在挣扎。",
    cardTag: "舞台之上的灵魂拷问",
    keywords: ["话剧", "雷雨", "欲望", "代际冲突"],
    letterMood: "戏剧化、浓烈、挣扎",
    inkShape: "雷雨密云式墨痕",
    indexScore: 69,
    newsVolume: 65,
    spreadEffect: 70,
    cultureInfluence: 72,
    description: "曹禺的《雷雨》《原野》是台湾各大高校戏剧社团、专业剧团最常排演的看家大戏。舞台上的家庭伦理悲剧与深刻的人性、欲望搏斗，在跨越海峡的剧场内依然雷雨轰鸣、震撼心灵。",
    avatarSilhouette: "M 15,15 L 85,15 L 85,85 L 15,85 Z",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Cao_Yu.jpg"
  },
  {
    id: "xiaohong",
    name: "萧红",
    quote: "生前何必久睡，死后自会长眠。",
    cardTag: "冰雪土地上的漂泊挽歌",
    keywords: ["呼兰河传", "女性挣扎", "饥饿", "北国荒野"],
    letterMood: "散文化、悲凉、天真",
    inkShape: "冰雪与麦穗式墨痕",
    indexScore: 65,
    newsVolume: 61,
    spreadEffect: 64,
    cultureInfluence: 68,
    description: "萧红《呼兰河传》《生死场》在台湾文学界常伴随“女性流亡、悲凉自述、北方土地荒凉生命”等阐释。其散文诗般独特的文风与传奇而坎坷的命运，让无数读者跨越地理隔阂为之唏嘘、共情。",
    avatarSilhouette: "M 20,20 Q 80,50 30,110 T 90,130",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Xiao_Hong.jpg"
  },
  {
    id: "xiaolin",
    name: "小学生小林",
    quote: "字裡藏著一條河。水不認岸，水只認流。",
    cardTag: "两岸读者的情感回响",
    keywords: ["作文本", "边城", "童年回忆", "海峡对岸"],
    letterMood: "纯真、温存、潺潺如水",
    inkShape: "小船与溪流墨痕",
    indexScore: 88,
    newsVolume: 85,
    spreadEffect: 90,
    cultureInfluence: 92,
    description: "一个十岁的台湾小学生，在她的作文本格子里一笔一划写下沈从文的那句私语。文字没有关卡，阅读不设终点。当她写下这些字时，那些经典的河水已经静静流淌进了她的心底。",
    avatarSilhouette: "M 20,50 Q 50,20 80,50 T 140,50 Q 110,80 80,110 T 20,50",
    avatarUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=200"
  }
];

export const LITERARY_WORKS: LiteraryWork[] = [
  { title: "倾城之恋", author: "张爱玲", tags: ["爱情", "女性", "城市", "战争"] },
  { title: "半生缘", author: "张爱玲", tags: ["爱情", "命运", "现代女性"] },
  { title: "雷雨", author: "曹禺", tags: ["家庭", "欲望", "阶层", "命运"] },
  { title: "家", author: "巴金", tags: ["青年", "家庭", "反抗"] },
  { title: "长恨歌", author: "王安忆", tags: ["城市", "女性", "上海记忆"] },
  { title: "活着", author: "余华", tags: ["苦难", "普通人", "生命韧性"] },
  { title: "边城", author: "沈从文", tags: ["乡土", "人性", "边地想象"] },
  { title: "故乡", author: "鲁迅", tags: ["启蒙", "乡土", "民族记忆", "个体孤独"] }
];

export const TAG_DISTRIBUTION: TagDistributionItem[] = [
  { tag: "文学价值", score: 92, desc: "两岸学术研讨、经典重读、高校教学与大纲选录中的美学地位评价。" },
  { tag: "时代记忆", score: 86, desc: "寄托对故土、离散岁月、百年家国变迁历史的记忆留存与文化寻根。" },
  { tag: "情感共鸣", score: 81, desc: "对普通人苦难生存、都会情感算计、以及跨越时代的生存阵痛的普遍共鸣。" },
  { tag: "公共引用", score: 78, desc: "文学金句、批判风骨常作为知识分子在社会议题、媒介社评中的论据引证。" },
  { tag: "在地连接", score: 69, desc: "作家与台湾在地学者、出版社或流亡作家同人圈之间千丝万缕的交往与羁绊。" },
  { tag: "改编传播", score: 64, desc: "经典戏剧被台剧社反复搬演、文学小说改编为电影、电视剧等二次艺术传播。" }
];

export const THEME_NODES: ThemeNode[] = [
  {
    id: "women-city",
    name: "女性与城市",
    works: ["倾城之恋", "长恨歌", "半生缘"],
    authors: ["张爱玲", "王安忆"],
    explanation: "聚焦于步入现代都会过程中的闺阁日常、里弄世俗，与红尘之中的女性自保和坚韧命运。透过弄堂、洋房、旗袍与情感算计，折射现代女性的心灵困境。"
  },
  {
    id: "family-rebellion",
    name: "家庭与反抗",
    works: ["雷雨", "家"],
    authors: ["曹禺", "巴金"],
    explanation: "深挖传统宗法大家庭、宗族观念底下的压抑、扭曲与毁灭，以及青年一代在代际冲突中、为争取个人自由与爱情理想所做出的决绝反抗。"
  },
  {
    id: "suffering-resilience",
    name: "苦难与韧性",
    works: ["活着", "边城", "故乡"],
    authors: ["余华", "沈从文", "鲁迅"],
    explanation: "描摹个体命运在滚滚历史洪流与残酷生存荒野中的百折不挠。无论是福贵默然承受苦难的草根韧性，还是翠翠在潺潺河水边的古典守望，都展示了华人底层的精神底色。"
  }
];

export const FLIP_CARDS: FlipCardItem[] = [
  {
    id: "luxun-card",
    authorName: "鲁迅",
    frontLabel: "我想我大抵是带有毒气且批判犀利之人",
    backText: "“大约世间人看我，总以为笔下只横着眉，便也认定了我的心是冷的。然而——草木上的露水也是凉的呢，我却曾为闰土的皱纹、阿长的《山海经》，和百草园里那些叫不出名字的虫子，默默暖过一整片黄昏。”"
  },
  {
    id: "zhangailing-card",
    authorName: "张爱玲",
    frontLabel: "我只喜欢写情爱。旁的，没什么意思。",
    backText: "“世人爱谈爱情，仿佛那是衣裳上的绣花。但我写的哪里是爱情——那不过是件撑得住的壳子。我剖开的是时代的褶皱，里头藏着的人性、女人的身不由己，和那一点点苍凉的亮光。”"
  },
  {
    id: "maodun-card",
    authorName: "茅盾",
    frontLabel: "茅盾文学奖，名头比我大。",
    backText: "“奖是风，吹一阵就过了。作品是土，土在，根就在。文学奖像是给房子挂了个牌匾，可住不住的舒服，还要看地基——那地基，是吴荪甫的焦虑，是林老板的愁苦，是小镇里每个被时局推着走的人。”"
  },
  {
    id: "moyan-card",
    authorName: "莫言",
    frontLabel: "魔幻现实主义，我算一个。诺贝尔奖，也给了我。",
    backText: "“啥魔幻不魔幻，我就是高密东北乡一个说书的。诺贝尔奖给我贴了层金，可我更怕你们忘了我笔下那些在泥里打滚、骂娘、咧着嘴大笑的人。我讲的故事，土地听得见。”"
  }
];

export const SCREEN_COPY = {
  intro: {
    title: "笔墨越海峡",
    subtitle: "数据解码华文经典的彼岸之旅",
    para1: "鲁迅、张爱玲、茅盾、韩寒、沈从文、曹禺、萧红……这些大陆近现代作家，并没有仅仅停留在文学史的课本里。",
    para2: "在海峡对岸的时间长河中，他们被反复提起、引用、纪念、改编，也被重新解释。有些人成为公共话语中的精神符号，有些人成为城市记忆与爱情想象，有些人借由文学奖、影视剧、舞台剧重新进入公众视野。",
    para3: "我们尝试从长达二十年的连续数据沉淀出发，重新阅读这些跨过海峡的作家与作品。时间的涟漪与同根的低语，一圈圈一遍遍画出一道桥……"
  },
  traditionalTitle: "字裡藏著一條河",
  simplifiedTitle: "字里藏着一条河",
  xiaolinStory: {
    title: "小林与那本翻旧的《边城》",
    content: "让我们回到开篇那张作文纸。它属于一个台湾小学生小林。她的书包里放着一本翻旧了的《边城》——那是大陆作家沈从文写的。妈妈在她八岁那年送给她，扉页上写着：“这是一条会流到心里去的河。”她读了不知多少遍。她不懂什么叫“湘西”，不懂什么叫“船夫”，不懂翠翠为什么等不到那个人回来。但她懂那条河——书上说：“小溪流下去，绕山岨流去了许多里路，便汇入那条大河。”她每次读到这一句，她的脑海里就会浮起一条弯弯曲曲的小河，水声潺潺，像在说话。\n\n在一次作文课上，老师让大家写“文字里有什么”。小林一下子就想到了那座神秘小城，那条她想象无数遍的小河。她决定要把那个地方写出来，她在格子里一笔一划写下：「字裡藏著一條河」。\n\n她盯着这几个字看了很久。然后低下头，在正文的第一行，写下了沈从文《边城》里的那句话：“水是各处可流的，火是各处可烧的，月亮是各处可照的，爱情是各处可到的。”",
    afterword: "一张作文纸，不过巴掌大。上面歪歪扭扭写着的，是沈从文笔下的河流，是一个十岁女孩用铅笔描摹的、看不见的水。那本《边城》对她意义深远——远到她也许三十岁时才会真正明白。但此刻，她只是觉得那句话好听，那条河好看，那个叫翠翠的女孩像她隔壁班的同学。\n\n小林只是千千万万个少年的缩影。每当他们在语文课上翻开《故乡》《边城》《城南旧事》，在作文纸上一笔一划写下那些来自海峡此岸的句子。他们也许从未离开过自己的岛屿，但他们的精神世界里，早已住进了一位位大陆作家的童年、故乡与月光。"
  },
  conclusion: {
    line1: "字裡藏著一條河。",
    line2: "写的人在此岸，读的人在彼岸。",
    line3: "可水不认岸。水只认流。",
    line4: "当他们合上作文本时，海峡还在。但纸上的那条河，已经流过去了……"
  }
};
