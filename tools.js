/* MG Math Visual Lab — single source of truth tool catalog */
window.MG_MATH_TOOLS = [
  {
    id: 'exterior-angles',
    category: 'geometry',
    categoryLabel: '几何 · Geometry',
    symbol: '360°',
    titleZh: '多边形外角和交互演示',
    titleEn: 'Exterior Angles of Polygons',
    desc: '自由增减边数、拖动顶点改变形状，并将多边形向红点收缩，直观验证任意多边形外角和恒等于 360°。',
    tags: ['几何 Geometry', '多边形', 'SAT / ACT Math'],
    path: 'tools/geometry/exterior-angles.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="88" y1="30" x2="54" y2="20" stroke="#737B8E" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="168" y1="28" x2="188" y2="10" stroke="#737B8E" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="186" y1="74" x2="220" y2="86" stroke="#737B8E" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="122" y1="92" x2="122" y2="108" stroke="#737B8E" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="72" y1="70" x2="42" y2="86" stroke="#737B8E" stroke-width="1.5" stroke-dasharray="4 3"/>
      <polygon points="88,30 168,28 186,74 122,92 72,70" fill="#E9EEF5" stroke="#172A48" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M 70 25 A 18 18 0 0 1 82 47" stroke="#C86D44" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M 181 17 A 18 18 0 0 1 182 41" stroke="#1D6B53" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M 203 80 A 18 18 0 0 1 171 86" stroke="#B8862D" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="127" cy="59" r="4" fill="#B4342F"/>
      <circle cx="88" cy="30" r="3.5" fill="#FFFDF8" stroke="#172A48" stroke-width="2"/>
      <circle cx="168" cy="28" r="3.5" fill="#FFFDF8" stroke="#172A48" stroke-width="2"/>
      <circle cx="186" cy="74" r="3.5" fill="#FFFDF8" stroke="#172A48" stroke-width="2"/>
      <circle cx="122" cy="92" r="3.5" fill="#FFFDF8" stroke="#172A48" stroke-width="2"/>
      <circle cx="72" cy="70" r="3.5" fill="#FFFDF8" stroke="#172A48" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'sampling-proportion',
    category: 'sampling',
    categoryLabel: '统计 · 抽样分布',
    symbol: 'p̂',
    titleZh: '样本比例的抽样分布',
    titleEn: 'Sample Proportion Simulator (p̂)',
    desc: '调节总体比例 p 与样本量 n，逐次或批量抽样，观察样本比例 p̂ 的中心、离散度与正态近似条件。',
    tags: ['AP Statistics', 'Unit 3', '单样本比例'],
    path: 'tools/sampling/proportion.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="28" y1="92" x2="232" y2="92" stroke="#172A48" stroke-width="1.5" stroke-opacity="0.35"/>
      <rect x="48" y="80" width="16" height="12" rx="2" fill="#D4DFEE"/>
      <rect x="68" y="68" width="16" height="24" rx="2" fill="#B8CAE3"/>
      <rect x="88" y="48" width="16" height="44" rx="2" fill="#1D6B53" fill-opacity="0.35"/>
      <rect x="108" y="30" width="16" height="62" rx="2" fill="#1D6B53" fill-opacity="0.55"/>
      <rect x="128" y="24" width="16" height="68" rx="2" fill="#1D6B53" fill-opacity="0.72"/>
      <rect x="148" y="38" width="16" height="54" rx="2" fill="#1D6B53" fill-opacity="0.5"/>
      <rect x="168" y="58" width="16" height="34" rx="2" fill="#B8CAE3"/>
      <rect x="188" y="76" width="16" height="16" rx="2" fill="#D4DFEE"/>
      <path d="M 34 90 C 78 89, 100 20, 134 20 S 188 89, 226 90" stroke="#172A48" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="134" y1="16" x2="134" y2="96" stroke="#C86D44" stroke-width="1.8" stroke-dasharray="4 3"/>
      <circle cx="134" cy="20" r="3.5" fill="#C86D44"/>
    </svg>`
  },
  {
    id: 'sampling-proportion-diff',
    category: 'sampling',
    categoryLabel: '统计 · 抽样分布',
    symbol: 'p̂₁ − p̂₂',
    titleZh: '两样本比例之差的抽样分布',
    titleEn: 'Difference of Sample Proportions (p̂₁ − p̂₂)',
    desc: '分别设定两组总体比例 p₁、p₂ 与样本量 n₁、n₂，直观理解两样本比例差 p̂₁ − p̂₂ 的分布规律与标准误。',
    tags: ['AP Statistics', 'Unit 3', '双样本比例差'],
    path: 'tools/sampling/proportion-difference.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="92" x2="236" y2="92" stroke="#172A48" stroke-width="1.5" stroke-opacity="0.35"/>
      <path d="M 28 90 C 56 89, 72 40, 96 40 S 136 89, 164 90" fill="#E9EEF5" fill-opacity="0.85" stroke="#172A48" stroke-width="2"/>
      <path d="M 96 90 C 124 89, 140 28, 164 28 S 204 89, 232 90" fill="#E4F3EC" fill-opacity="0.75" stroke="#1D6B53" stroke-width="2"/>
      <line x1="96" y1="36" x2="96" y2="92" stroke="#172A48" stroke-width="1.4" stroke-dasharray="3 3"/>
      <line x1="164" y1="24" x2="164" y2="92" stroke="#1D6B53" stroke-width="1.4" stroke-dasharray="3 3"/>
      <path d="M 100 20 H 160" stroke="#C86D44" stroke-width="2" stroke-linecap="round"/>
      <path d="M 105 16 L 99 20 L 105 24 M 155 16 L 161 20 L 155 24" stroke="#C86D44" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'sampling-mean',
    category: 'sampling',
    categoryLabel: '统计 · 抽样分布',
    symbol: 'x̄',
    titleZh: '样本均值的抽样分布',
    titleEn: 'Sample Mean Simulator (x̄)',
    desc: '支持切换偏态、双峰、均匀等不同总体形态，演示样本量 n 增大时中心极限定理（CLT）如何让 x̄ 趋向正态分布。',
    tags: ['AP Statistics', 'Unit 2 / 4', '中心极限定理 CLT'],
    path: 'tools/sampling/mean.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="92" x2="236" y2="92" stroke="#172A48" stroke-width="1.5" stroke-opacity="0.35"/>
      <path d="M 30 90 C 44 26, 68 38, 102 68 C 122 84, 138 89, 152 90" stroke="#737B8E" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <rect x="136" y="72" width="12" height="20" rx="2" fill="#E4F3EC" stroke="#1D6B53" stroke-opacity="0.3"/>
      <rect x="150" y="48" width="12" height="44" rx="2" fill="#BCE2D2"/>
      <rect x="164" y="28" width="12" height="64" rx="2" fill="#1D6B53" fill-opacity="0.68"/>
      <rect x="178" y="46" width="12" height="46" rx="2" fill="#BCE2D2"/>
      <rect x="192" y="70" width="12" height="22" rx="2" fill="#E4F3EC" stroke="#1D6B53" stroke-opacity="0.3"/>
      <path d="M 118 90 C 142 89, 154 24, 170 24 S 198 89, 224 90" stroke="#1D6B53" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 102 44 H 126" stroke="#C86D44" stroke-width="2" stroke-linecap="round"/>
      <path d="M 121 39 L 127 44 L 121 49" stroke="#C86D44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'sampling-mean-diff',
    category: 'sampling',
    categoryLabel: '统计 · 抽样分布',
    symbol: 'x̄₁ − x̄₂',
    titleZh: '两样本均值之差的抽样分布',
    titleEn: 'Difference of Sample Means (x̄₁ − x̄₂)',
    desc: '对比两个总体的均值 μ₁、μ₂ 与标准差 σ₁、σ₂，模拟并检验 x̄₁ − x̄₂ 抽样分布的均值与方差叠加性质。',
    tags: ['AP Statistics', 'Unit 4', '双样本均值差'],
    path: 'tools/sampling/mean-difference.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="92" x2="236" y2="92" stroke="#172A48" stroke-width="1.5" stroke-opacity="0.35"/>
      <rect x="44" y="56" width="18" height="36" rx="3" fill="#E9EEF5" stroke="#172A48" stroke-width="1.5"/>
      <rect x="66" y="40" width="18" height="52" rx="3" fill="#D4DFEE" stroke="#172A48" stroke-width="1.5"/>
      <rect x="88" y="64" width="18" height="28" rx="3" fill="#E9EEF5" stroke="#172A48" stroke-width="1.5"/>
      <rect x="150" y="60" width="18" height="32" rx="3" fill="#FBECE4" stroke="#C86D44" stroke-width="1.5"/>
      <rect x="172" y="34" width="18" height="58" rx="3" fill="#F6D5C4" stroke="#C86D44" stroke-width="1.5"/>
      <rect x="194" y="52" width="18" height="40" rx="3" fill="#FBECE4" stroke="#C86D44" stroke-width="1.5"/>
      <circle cx="75" cy="28" r="4" fill="#172A48"/>
      <circle cx="181" cy="28" r="4" fill="#C86D44"/>
      <line x1="81" y1="28" x2="175" y2="28" stroke="#B8862D" stroke-width="2" stroke-dasharray="4 3"/>
    </svg>`
  },
  {
    id: 'inference-ci',
    category: 'inference',
    categoryLabel: '统计 · 统计推断',
    symbol: 'CI',
    titleZh: '置信区间捕获率模拟器',
    titleEn: 'Confidence Interval Capture Simulator',
    desc: '批量构建比例 z 区间与均值 t / z 区间，直观对比捕获真值的绿色区间与未捕获的红色区间，理解长期置信水平。',
    tags: ['AP Statistics', 'Unit 3 / 4', '置信区间'],
    path: 'tools/inference/confidence-interval.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="130" y1="12" x2="130" y2="100" stroke="#172A48" stroke-width="2"/>
      <line x1="88" y1="26" x2="162" y2="26" stroke="#1D6B53" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="125" cy="26" r="3.5" fill="#1D6B53"/>
      <line x1="102" y1="44" x2="176" y2="44" stroke="#1D6B53" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="139" cy="44" r="3.5" fill="#1D6B53"/>
      <line x1="142" y1="62" x2="214" y2="62" stroke="#B4342F" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="178" cy="62" r="3.5" fill="#B4342F"/>
      <line x1="80" y1="80" x2="152" y2="80" stroke="#1D6B53" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="116" cy="80" r="3.5" fill="#1D6B53"/>
    </svg>`
  },
  {
    id: 'inference-power',
    category: 'inference',
    categoryLabel: '统计 · 统计推断',
    symbol: 'α · β',
    titleZh: '两类错误与检验功效实验室',
    titleEn: 'Type I / Type II Error & Power Lab',
    desc: '同轴叠画 H₀ 与 Hₐ 分布曲线，三色高亮 α、β 与 Power (1−β)，拖动 α、样本量 n 与效应量实时观察权衡关系。',
    tags: ['AP Statistics', 'Unit 3 / 4', 'Power & Errors'],
    path: 'tools/inference/errors-power.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="20" y1="92" x2="240" y2="92" stroke="#172A48" stroke-width="1.4" stroke-opacity="0.35"/>
      <path d="M 28 90 C 58 89, 76 26, 98 26 S 138 89, 168 90" stroke="#172A48" stroke-width="2.2" fill="#FDECEB" fill-opacity="0.4"/>
      <path d="M 96 90 C 126 89, 144 26, 166 26 S 206 89, 236 90" stroke="#1D6B53" stroke-width="2.2" stroke-dasharray="4 3" fill="#E4F3EC" fill-opacity="0.6"/>
      <line x1="134" y1="16" x2="134" y2="94" stroke="#B4342F" stroke-width="2" stroke-dasharray="4 3"/>
    </svg>`
  },
  {
    id: 'inference-t-vs-z',
    category: 'inference',
    categoryLabel: '统计 · 统计推断',
    symbol: 't vs z',
    titleZh: 't 分布与标准正态 z 对比',
    titleEn: 't-Distribution vs. Standard Normal (z)',
    desc: '调节自由度 df = n − 1 对比 t 分布厚尾与 N(0,1) 差异，并实时抽样比较 (x̄−μ)/(s/√n) 与 (x̄−μ)/(σ/√n)。',
    tags: ['AP Statistics', 'Unit 4', 't 分布'],
    path: 'tools/inference/t-vs-z.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="92" x2="236" y2="92" stroke="#172A48" stroke-width="1.4" stroke-opacity="0.35"/>
      <path d="M 32 90 C 78 88, 102 18, 130 18 S 182 88, 228 90" stroke="#172A48" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
      <path d="M 24 88 C 72 82, 98 30, 130 30 S 188 82, 236 88" stroke="#1D6B53" stroke-width="2.5" fill="none"/>
      <line x1="78" y1="28" x2="78" y2="92" stroke="#C86D44" stroke-width="1.6"/>
      <line x1="182" y1="28" x2="182" y2="92" stroke="#C86D44" stroke-width="1.6"/>
    </svg>`
  },
  {
    id: 'inference-chi2',
    category: 'inference',
    categoryLabel: '统计 · 统计推断',
    symbol: 'χ²',
    titleZh: '卡方列联表检验模拟器',
    titleEn: 'Chi-Square Two-Way Table Simulator',
    desc: '自由编辑列联表计算期望频数 E 与 χ² 贡献，在 H₀ 下固定边际和反复洗牌重抽，直观对比模拟 p-value 与理论 χ² 曲线。',
    tags: ['AP Statistics', 'Unit 3.14–3.15', '卡方检验'],
    path: 'tools/inference/chi-square.html',
    svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="24" y1="92" x2="236" y2="92" stroke="#172A48" stroke-width="1.4" stroke-opacity="0.35"/>
      <rect x="44" y="42" width="16" height="50" rx="2" fill="#1D6B53" fill-opacity="0.55"/>
      <rect x="64" y="28" width="16" height="64" rx="2" fill="#1D6B53" fill-opacity="0.72"/>
      <rect x="84" y="40" width="16" height="52" rx="2" fill="#1D6B53" fill-opacity="0.55"/>
      <rect x="104" y="58" width="16" height="34" rx="2" fill="#1D6B53" fill-opacity="0.4"/>
      <rect x="124" y="72" width="16" height="20" rx="2" fill="#1D6B53" fill-opacity="0.3"/>
      <rect x="144" y="80" width="16" height="12" rx="2" fill="#C86D44" fill-opacity="0.75"/>
      <rect x="164" y="85" width="16" height="7" rx="2" fill="#C86D44" fill-opacity="0.85"/>
      <path d="M 32 90 C 48 24, 68 24, 108 58 C 142 84, 184 89, 228 90" stroke="#172A48" stroke-width="2.2" fill="none"/>
      <line x1="142" y1="22" x2="142" y2="94" stroke="#C86D44" stroke-width="1.8" stroke-dasharray="4 3"/>
    </svg>`
  }
];
