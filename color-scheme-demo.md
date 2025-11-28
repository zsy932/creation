# 攸州小镇和胡同小馆色系定义

## 概述
为攸州小镇和胡同小馆分别定义了独特的色系，以区分两个餐厅的品牌形象。

## 色系定义

### 胡同小馆 - 蓝色系
- **主色**: `#3B82F6` (蓝色)
- **浅蓝**: `#dbeafe` 
- **深蓝**: `#1e40af`
- **强调色**: `#60a5fa`
- **浅强调色**: `#93c5fd`
- **背景色**: `#f0f9ff`
- **边框色**: `#e0f2fe`

### 攸州小镇 - 橙色系
- **主色**: `#F59E0B` (橙色)
- **浅橙**: `#fef3c7`
- **深橙**: `#d97706`
- **强调色**: `#fbbf24`
- **浅强调色**: `#fde68a`
- **背景色**: `#fffbeb`
- **边框色**: `#fde68a`

## 应用范围

### 胡同小馆主题 (.hutong-theme)
- 餐厅名称颜色
- 特价菜品头部背景
- 星期特价按钮背景
- 活动状态按钮颜色
- 表格头部背景
- 菜品标签背景
- 餐厅信息边框

### 攸州小镇主题 (.xiaozhen-theme)
- 餐厅名称颜色
- 特价菜品头部背景
- 星期特价按钮背景
- 活动状态按钮颜色
- 表格头部背景
- 菜品标签背景
- 餐厅信息边框

## 技术实现

### CSS变量定义
```css
:root {
  /* 胡同小馆色系 */
  --hutong-primary: #3B82F6;
  --hutong-primary-light: #dbeafe;
  --hutong-primary-dark: #1e40af;
  --hutong-accent: #60a5fa;
  --hutong-accent-light: #93c5fd;
  --hutong-bg: #f0f9ff;
  --hutong-border: #e0f2fe;
  
  /* 攸州小镇色系 */
  --xiaozhen-primary: #F59E0B;
  --xiaozhen-primary-light: #fef3c7;
  --xiaozhen-primary-dark: #d97706;
  --xiaozhen-accent: #fbbf24;
  --xiaozhen-accent-light: #fde68a;
  --xiaozhen-bg: #fffbeb;
  --xiaozhen-border: #fde68a;
}
```

### 主题类应用
```css
.hutong-theme {
  --primary: var(--hutong-primary);
  --primary-light: var(--hutong-primary-light);
  --primary-dark: var(--hutong-primary-dark);
  --accent: var(--hutong-accent);
  --accent-light: var(--hutong-accent-light);
  --bg-color: var(--hutong-bg);
  --border-color: var(--hutong-border);
}

.xiaozhen-theme {
  --primary: var(--xiaozhen-primary);
  --primary-light: var(--xiaozhen-primary-light);
  --primary-dark: var(--xiaozhen-primary-dark);
  --accent: var(--xiaozhen-accent);
  --accent-light: var(--xiaozhen-accent-light);
  --bg-color: var(--xiaozhen-bg);
  --border-color: var(--xiaozhen-border);
}
```

### JavaScript主题切换
```javascript
function applyTheme(theme) {
  document.body.className = document.body.className.replace(/\b(hutong-theme|xiaozhen-theme)\b/g, '');
  if (theme) {
    document.body.classList.add(theme);
  }
}
```

## 使用方法

1. 在HTML元素上添加相应的主题类：
   - 胡同小馆：`class="hutong-theme"`
   - 攸州小镇：`class="xiaozhen-theme"`

2. 在Tab切换时自动应用主题：
   ```javascript
   hutongTab.addEventListener('click', () => {
     applyTheme('hutong-theme');
   });
   
   xiaozhenTab.addEventListener('click', () => {
     applyTheme('xiaozhen-theme');
   });
   ```

## 效果预览

- **胡同小馆**: 采用清爽的蓝色调，体现传统北京风格的稳重与现代感
- **攸州小镇**: 采用温暖的橙色调，展现湖南风味的热情与活力

两个餐厅通过不同的色系实现了明显的品牌区分，提升了用户体验和视觉识别度。