# MG Math Visual Lab · 数学可视化互动实验室

统一收录与展示几何与统计学的交互式浏览器可视化实验工具。

## 目录结构

```text
math-lab/
├── index.html          # 互动目录首页（分类筛选与搜索）
├── viewer.html         # 统一交互外壳（顶栏快速切换 + 全屏演示 + 独立打开）
├── styles.css          # Warm Paper Academic 样式系统
├── tools.js            # 互动模块目录数据源（单一配置源）
├── fonts/              # 自托管 Montserrat 字体
└── tools/
    ├── geometry/       # 几何互动模块（多边形外角和等）
    ├── sampling/       # 抽样分布模拟器（p̂、p̂₁−p̂₂、x̄、x̄₁−x̄₂）
    └── inference/      # 统计推断实验室（置信区间、两类错误与功效、t vs z、卡方检验）
```

## 如何新增互动可视化

1. 将新的单文件 HTML 互动工具放入 `tools/<category>/` 目录。
2. 在 `tools.js` 的 `window.MG_MATH_TOOLS` 数组中追加一条工具配置（包含 `id`、`category`、`categoryLabel`、`symbol`、`titleZh`、`titleEn`、`desc`、`tags`、`path`、`svg`）。
3. `index.html` 与 `viewer.html` 会自动读取 `tools.js` 渲染卡片与切换菜单。
