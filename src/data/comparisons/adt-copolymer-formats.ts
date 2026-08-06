import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'adt-copolymer-powder-vs-liquid',
  title: {
    zh: '磺酸型丙烯酸类共聚物（ADT）：粉末 vs 预制液态形式',
    en: 'Sulfonate-type Acrylic (ADT) Copolymers: Powder vs. Pre-formed Liquid',
  },
  category: 'polymer',
  ingredientSlugs: ['aristoflex-avc', 'sepinov-emt-10', 'simulgel-eg'],
  extraDimensions: [
    {
      key: 'physical-form',
      label: { zh: '物理形态', en: 'Physical form' },
      valuesBySlug: {
        'aristoflex-avc': { zh: '预中和粉末', en: 'Pre-neutralized powder' },
        'sepinov-emt-10': { zh: '预中和粉末', en: 'Pre-neutralized powder' },
        'simulgel-eg': { zh: '预制反相乳液（液态即用）', en: 'Pre-formed inverse emulsion (ready-to-use liquid)' },
      },
    },
    {
      key: 'primary-function',
      label: { zh: '主要功能定位', en: 'Primary function' },
      valuesBySlug: {
        'aristoflex-avc': { zh: '增稠为主（EO-free）', en: 'Primarily thickening (EO-free)' },
        'sepinov-emt-10': { zh: '增稠+乳化稳定"2合1"', en: '"2-in-1" thickening + emulsion stabilization' },
        'simulgel-eg': { zh: '乳化+增稠，可作唯一乳化体系', en: 'Emulsifying + thickening, usable as sole emulsifying system' },
      },
    },
  ],
  summary: {
    zh: '三者都基于磺酸型单体（丙烯酰二甲基牛磺酸盐及其共聚物），解离不依赖羧酸根、pH稳定范围宽，是卡波姆类聚合物之外常见的合成增稠替代方案，但物理形态与功能定位不同。Aristoflex AVC 与 Sepinov EMT 10 均为预中和粉末，遇水/油相直接分散成胶，无需另行中和；前者侧重纯增稠（不含环氧乙烷，EO-free），后者额外具备乳化稳定功能（"2合1"）。Simulgel EG 则是预制反相乳液的液态即用形式，内置聚山梨醇酯80辅助乳化，可直接作为唯一乳化/稳定体系使用，肤感更轻盈柔和，适合追求"开盖即用"简化工艺的冷法配方。',
    en: 'All three are built on sulfonate-type monomers (acryloyldimethyl taurate salts and their copolymers), whose ionization does not depend on carboxylate groups — giving a wide pH-stable range and making them a common synthetic-thickener alternative to Carbomer-type polymers. Their physical form and functional positioning differ, though. Aristoflex AVC and Sepinov EMT 10 are both pre-neutralized powders that disperse directly into water or oil phase with no separate neutralization step; the former is thickening-focused (ethoxylate-free / EO-free), while the latter adds emulsion-stabilizing function ("2-in-1"). Simulgel EG is a pre-formed inverse-emulsion, ready-to-use liquid with polysorbate 80 built in to aid emulsification, and can serve as the sole emulsifying/stabilizing system — giving a lighter, softer skin feel and suiting cold-process formulas that want an open-and-use, simplified workflow.',
  },
})
