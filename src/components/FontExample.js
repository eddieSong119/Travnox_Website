export default function FontExample() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">字体示例</h1>

      {/* 默认字体 (Geist Sans) */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">默认字体 (Geist Sans)</h2>
        <p className="text-lg">
          这是使用默认字体的文本。Next.js 15.5.2 默认使用 Geist 字体。
        </p>
      </div>

      {/* 等宽字体 (Geist Mono) */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">等宽字体 (Geist Mono)</h2>
        <p className="text-lg font-mono">
          这是使用等宽字体的文本，适合显示代码。
        </p>
        <code className="block bg-gray-100 p-2 rounded font-mono">
          console.log("Hello, World!");
        </code>
      </div>

      {/* Noto Sans 字体 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Noto Sans 字体</h2>
        <p className="text-lg font-noto-sans">
          这是使用 Noto Sans 字体的文本。Noto Sans 是一个优秀的无衬线字体，
          支持多种字重和样式。
        </p>
        <div className="space-y-1">
          <p className="font-noto-sans font-thin">Thin (100)</p>
          <p className="font-noto-sans font-light">Light (300)</p>
          <p className="font-noto-sans font-normal">Normal (400)</p>
          <p className="font-noto-sans font-medium">Medium (500)</p>
          <p className="font-noto-sans font-semibold">Semibold (600)</p>
          <p className="font-noto-sans font-bold">Bold (700)</p>
          <p className="font-noto-sans font-extrabold">Extrabold (800)</p>
          <p className="font-noto-sans font-black">Black (900)</p>
        </div>
      </div>

      {/* PP Museum 字体 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">PP Museum 字体</h2>
        <p className="text-lg font-pp-museum">
          这是使用 PP Museum 字体的文本。PP Museum 是一个优雅的衬线字体，
          具有独特的艺术风格。
        </p>
        <div className="space-y-1">
          <p className="font-pp-museum font-light">Light (300)</p>
          <p className="font-pp-museum font-normal">Regular (400)</p>
          <p className="font-pp-museum font-extrabold">Ultrabold (800)</p>
        </div>
      </div>

      {/* 字体权重示例 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">字体权重示例</h2>
        <p className="font-light">Light 权重文本</p>
        <p className="font-normal">Normal 权重文本</p>
        <p className="font-medium">Medium 权重文本</p>
        <p className="font-semibold">Semibold 权重文本</p>
        <p className="font-bold">Bold 权重文本</p>
      </div>
    </div>
  );
}
