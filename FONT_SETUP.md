# 字体设置指南

## 已完成的工作

✅ 创建了 `src/fonts/` 目录用于存放字体文件  
✅ 创建了 `src/lib/fonts.js` 字体配置文件  
✅ 更新了 `src/app/layout.js` 以支持本地字体  
✅ 更新了 `src/app/globals.css` 以包含字体变量  
✅ 创建了 `tailwind.config.js` 以支持自定义字体类  
✅ 创建了字体示例组件 `src/components/FontExample.js`  
✅ 集成了 Noto Sans Google 字体  
✅ 配置了 PP Museum 本地字体

## 下一步操作

### 1. 字体已配置完成

✅ **Noto Sans Google 字体** - 已集成，支持 100-900 字重和斜体样式  
✅ **PP Museum 本地字体** - 已配置，包含 Light、Regular、Ultrabold 字重和斜体样式

### 2. 当前字体配置

```javascript
// Noto Sans Google 字体
export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// PP Museum 本地字体
export const ppMuseum = localFont({
  src: [
    {
      path: "../fonts/ppmuseum-light.otf",
      weight: "300",
      style: "normal",
    },
    // ... 更多字重和样式
  ],
  variable: "--font-pp-museum",
  display: "swap",
});
```

### 3. 测试字体

运行开发服务器查看效果：

```bash
npm run dev
```

访问 http://localhost:3000 查看字体示例。

## 支持的字体格式

- **WOFF2** (推荐) - 文件最小，兼容性最好
- **WOFF** - 良好的兼容性
- **TTF** - 通用格式
- **OTF** - OpenType 格式

## 使用方法

### 在 CSS 中使用

```css
.noto-sans-text {
  font-family: var(--font-noto-sans);
}

.pp-museum-text {
  font-family: var(--font-pp-museum);
}
```

### 在 Tailwind 中使用

```jsx
<div className="font-noto-sans">Noto Sans 字体文本</div>
<div className="font-pp-museum">PP Museum 字体文本</div>
```

### 在组件中使用

```jsx
import { notoSans, ppMuseum } from "../lib/fonts";

<div className={notoSans.className}>使用 Noto Sans 字体</div>
<div className={ppMuseum.className}>使用 PP Museum 字体</div>
```

## 注意事项

1. 确保字体文件路径正确
2. 字体文件大小会影响加载性能，建议使用 WOFF2 格式
3. 可以配置多个字重和样式（正常、粗体、斜体等）
4. 使用 `display: "swap"` 可以改善字体加载体验
