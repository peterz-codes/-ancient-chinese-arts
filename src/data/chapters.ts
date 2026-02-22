export interface Chapter {
  id: number;
  title: string;
  page: number;
  category: string;
  summary: string;
}

export const chapters: Chapter[] = [
  { id: 1,  title: '中国古代房室养生修炼方法', page: 2,   category: '总论',   summary: '概述中国古代房室养生的起源、理论基础与修炼体系，探讨其在道家文化中的历史地位。' },
  { id: 2,  title: '房中术释义',               page: 3,   category: '总论',   summary: '对"房中术"一词的词源、内涵与历史演变进行系统性诠释，追溯其在《汉书·艺文志》中的记载。' },
  { id: 3,  title: '中国古代秘传房中术',       page: 7,   category: '总论',   summary: '探讨历代秘传的房中修炼体系，梳理葛洪、陶弘景等道家医家对此学说的传承与发展。' },
  { id: 4,  title: '阴阳与五行',               page: 10,  category: '哲学基础', summary: '阐述阴阳调和与五行运化在房中养生中的核心地位，揭示古人对宇宙运行规律的哲学理解。' },
  { id: 5,  title: '摄捕与强精',               page: 12,  category: '养生要旨', summary: '论述男性精气的培养与保存之道，引述古典医学文献中关于精力守护的论说。' },
  { id: 6,  title: '多御与少泄',               page: 14,  category: '养生要旨', summary: '探讨古代养生家关于节制与修炼的辩证智慧，以及其对延年益寿的理论依据。' },
  { id: 7,  title: '九浅与一深',               page: 16,  category: '养生要旨', summary: '详解古典文献中"九浅一深"之法的养生意涵与修炼原则。' },
  { id: 8,  title: '养生与练气',               page: 19,  category: '气功修炼', summary: '将房中修炼与道家气功体系相联结，论述呼吸调息与精气神合一的修炼方法。' },
  { id: 9,  title: '气氛与情趣',               page: 24,  category: '养生要旨', summary: '从古代审美与养生角度，探讨和谐环境对身心健康的积极影响。' },
  { id: 10, title: '四时与五脏',               page: 27,  category: '医学理论', summary: '根据中医时令养生理论，论述不同季节对五脏运化及房事调摄的指导意义。' },
  { id: 11, title: '春宵一刻值千金',           page: 30,  category: '医学理论', summary: '引申古诗意象，探讨顺应自然节律的养生哲学，以及春季对人体生机的特殊意义。' },
  { id: 12, title: '心平气和舒泰自然',         page: 33,  category: '养生要旨', summary: '论述内心宁静与情志平和在房中养生中的根本地位，强调"自然"是修炼的最高境界。' },
  { id: 13, title: '爱抚的必要',               page: 35,  category: '养生要旨', summary: '从中医心理与情志理论出发，阐述温情交流对身心健康不可忽视的价值。' },
  { id: 14, title: '性交的规则',               page: 40,  category: '古典规范', summary: '汇集古典医籍中关于养生禁忌与适宜的论述，体现古人对人体节律的科学认知。' },
  { id: 15, title: '性器的伦常',               page: 43,  category: '古典规范', summary: '从礼教与医学视角探讨古代对伦理秩序的理解，反映传统文化的价值观念。' },
  { id: 16, title: '女性性感的测定',           page: 45,  category: '医学理论', summary: '以古代医家视角，论述女性生理特征的观察方法，体现中医望诊的精微之处。' },
  { id: 17, title: '女性的生理需要',           page: 48,  category: '医学理论', summary: '从古典医学角度论述女性身心健康的基本需求，反映古代医家对两性平等养生的理解。' },
  { id: 18, title: '女性欲求的徵象',           page: 50,  category: '医学理论', summary: '以古代医学观察方法，系统归纳女性生理与情志变化的外在表现。' },
  { id: 19, title: '从脚趾运动看性生活',       page: 52,  category: '医学理论', summary: '体现中医整体观念，以细微的身体观察推断整体健康状态，反映古人精微的诊察智慧。' },
  { id: 20, title: '房中的重要过程',           page: 54,  category: '古典规范', summary: '综述古典文献中对房中修炼完整流程的记载，强调循序渐进与顺应自然的重要性。' },
  { id: 21, title: '九法之一——龙翻',         page: 56,  category: '九法体位', summary: '道家养生九法之首，以龙之翻腾为意象，阐述顺应阴阳运化的修炼要领。' },
  { id: 22, title: '九法之二——虎步',         page: 58,  category: '九法体位', summary: '效法虎行之势，论述气力运用与精气调摄的养生要义。' },
  { id: 23, title: '九法之三——猿博',         page: 60,  category: '九法体位', summary: '取猿猴灵活之意象，强调身体柔韧与气血流通的修炼原则。' },
  { id: 24, title: '九法之四——蝉附',         page: 63,  category: '九法体位', summary: '以蝉之依附为喻，论述静守与专注在修炼中的重要意义。' },
  { id: 25, title: '九法之五——龟腾',         page: 65,  category: '九法体位', summary: '效法神龟长寿之道，阐述养精蓄锐与以柔克刚的养生哲学。' },
  { id: 26, title: '九法之六——凤翔',         page: 67,  category: '九法体位', summary: '以凤凰翱翔为意象，论述阴阳相合、气机升腾的修炼境界。' },
  { id: 27, title: '九法之七——兔吮毫',       page: 70,  category: '九法体位', summary: '取兔之温婉意象，强调温柔调和在养生修炼中不可或缺的价值。' },
  { id: 28, title: '九法之八——鱼接鳞',       page: 72,  category: '九法体位', summary: '以鱼鳞相叠之意，论述阴阳相附、呼吸调息的修炼要义。' },
  { id: 29, title: '九法之九——鹤交颈',       page: 74,  category: '九法体位', summary: '以仙鹤长颈交颈之美，寓意修炼中追求高洁、延年益寿的精神境界。' },
  { id: 30, title: '化性机能的各种体位',       page: 76,  category: '古典规范', summary: '系统梳理古代文献中记载的各类修炼体位，并从医学视角加以分析与注解。' },
  { id: 31, title: '八益之二——安气',         page: 78,  category: '气功修炼', summary: '道家"八益"养生法之一，专论安定气机的修炼方法及其对身心健康的积极作用。' },
  { id: 32, title: '触而不泄的妙用',           page: 81,  category: '气功修炼', summary: '探讨"还精补脑"等道家内丹理论中精气收摄与运化的核心方法。' },
  { id: 33, title: '洞玄子性技三十种',         page: 85,  category: '古典文献', summary: '整理唐代道家著作《洞玄子》所载三十种养生修炼法，是研究唐代房中文化的重要史料。' },
  { id: 34, title: '女性行房的最佳时辰',       page: 88,  category: '医学理论', summary: '依据中医时间医学理论，论述顺应昼夜节律与月相变化对养生修炼的指导价值。' },
  { id: 35, title: '性交基本姿式',             page: 89,  category: '古典规范', summary: '汇总古典医学文献中关于修炼基本姿势的记载，并从养生角度加以诠释。' },
  { id: 36, title: '射精的抑制',               page: 95,  category: '气功修炼', summary: '详述道家内丹修炼中"固精"功法的理论依据与实践方法。' },
  { id: 37, title: '泄精的次数与媚药的处方',   page: 97,  category: '医学理论', summary: '引述历代医家对节欲养生频率的论述，并辑录古代本草医籍中的养生方剂。' },
  { id: 38, title: '男人精力的盛衰',           page: 100, category: '医学理论', summary: '以中医肾精理论为基础，系统论述男性精气随年龄变化的规律及其调养方法。' },
  { id: 39, title: '令人心动的女人',           page: 107, category: '古典审美', summary: '从古代审美观与阴阳和谐角度，探讨古人对理想伴侣气质的描述与评价标准。' },
  { id: 40, title: '如何才有好胎',             page: 110, category: '医学理论', summary: '汇集古代胎教理论与优生思想，体现中国传统文化对生命延续的重视与科学认知。' },
];

export const categories = [...new Set(chapters.map(c => c.category))];
