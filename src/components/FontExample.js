export default function FontExample() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary-midnight">字体示例</h1>

      {/* 默认字体 (Geist Sans) */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          默认字体 (Geist Sans)
        </h2>
        <p className="text-lg text-primary-midnight">
          这是使用默认字体的文本。Next.js 15.5.2 默认使用 Geist 字体。
        </p>
      </div>

      {/* 等宽字体 (Geist Mono) */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          等宽字体 (Geist Mono)
        </h2>
        <p className="text-lg font-mono text-primary-midnight">
          这是使用等宽字体的文本，适合显示代码。
        </p>
        <code className="block bg-primary-mist p-2 rounded font-mono text-primary-midnight">
          console.log("Hello, World!");
        </code>
      </div>

      {/* Noto Sans 字体 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          Noto Sans 字体
        </h2>
        <p className="text-lg font-noto-sans text-primary-midnight">
          这是使用 Noto Sans 字体的文本。Noto Sans 是一个优秀的无衬线字体，
          支持多种字重和样式。
        </p>
        <div className="space-y-1">
          <p className="font-noto-sans font-thin text-primary-stone">
            Thin (100)
          </p>
          <p className="font-noto-sans font-light text-primary-stone">
            Light (300)
          </p>
          <p className="font-noto-sans font-normal text-primary-midnight">
            Normal (400)
          </p>
          <p className="font-noto-sans font-medium text-primary-midnight">
            Medium (500)
          </p>
          <p className="font-noto-sans font-semibold text-primary-terracotta">
            Semibold (600)
          </p>
          <p className="font-noto-sans font-bold text-primary-terracotta">
            Bold (700)
          </p>
          <p className="font-noto-sans font-extrabold text-primary-terracotta">
            Extrabold (800)
          </p>
          <p className="font-noto-sans font-black text-primary-terracotta">
            Black (900)
          </p>
        </div>
      </div>

      {/* PP Museum 字体 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          PP Museum 字体
        </h2>
        <p className="text-lg font-pp-museum text-primary-midnight">
          这是使用 PP Museum 字体的文本。PP Museum 是一个优雅的衬线字体，
          具有独特的艺术风格。
        </p>
        <div className="space-y-1">
          <p className="font-pp-museum font-light text-primary-stone">
            Light (300)
          </p>
          <p className="font-pp-museum font-normal text-primary-midnight">
            Regular (400)
          </p>
          <p className="font-pp-museum font-extrabold text-primary-terracotta">
            Ultrabold (800)
          </p>
        </div>
      </div>

      {/* 字体权重示例 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          字体权重示例
        </h2>
        <p className="font-light text-primary-stone">Light 权重文本</p>
        <p className="font-normal text-primary-midnight">Normal 权重文本</p>
        <p className="font-medium text-primary-midnight">Medium 权重文本</p>
        <p className="font-semibold text-primary-terracotta">
          Semibold 权重文本
        </p>
        <p className="font-bold text-primary-terracotta">Bold 权重文本</p>
      </div>

      {/* 字体与颜色组合示例 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary-terracotta">
          字体与颜色组合示例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary-parchment p-4 rounded-lg">
            <h3 className="font-pp-museum font-bold text-primary-terracotta mb-2">
              PP Museum + Terracotta
            </h3>
            <p className="font-pp-museum text-primary-midnight">
              优雅的衬线字体配合温暖的陶土色，营造古典而温馨的氛围。
            </p>
          </div>
          <div className="bg-primary-mist p-4 rounded-lg">
            <h3 className="font-noto-sans font-bold text-primary-midnight mb-2">
              Noto Sans + Midnight
            </h3>
            <p className="font-noto-sans text-primary-midnight">
              现代无衬线字体搭配深邃的午夜色，展现专业而稳重的气质。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
