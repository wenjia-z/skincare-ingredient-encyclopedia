import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'ow-emulsifiers-peg-free-vs-classic',
  title: {
    zh: 'O/W 乳化剂对比：仿生型（PEG-free） vs 经典PEG型',
    en: 'O/W Emulsifiers: Biomimetic (PEG-free) vs. Classic PEG-type',
  },
  category: 'emulsifier',
  ingredientSlugs: ['olivem-1000', 'montanov-68', 'polysorbate-60'],
  extraDimensions: [
    {
      key: 'peg-free',
      label: { zh: 'PEG-free', en: 'PEG-free' },
      valuesBySlug: {
        'olivem-1000': { zh: '是', en: 'Yes' },
        'montanov-68': { zh: '是', en: 'Yes' },
        'polysorbate-60': { zh: '否（聚氧乙烯化结构）', en: 'No (ethoxylated structure)' },
      },
    },
    {
      key: 'processing',
      label: { zh: '工艺要求', en: 'Processing' },
      valuesBySlug: {
        'olivem-1000': { zh: '热法，约70°C', en: 'Hot process, ~70°C' },
        'montanov-68': { zh: '热法，约76°C', en: 'Hot process, ~76°C' },
        'polysorbate-60': { zh: '常温至温热均可，灵活性较高', en: 'Ambient to warm; more process flexibility' },
      },
    },
  ],
  summary: {
    zh: 'Olivem 1000 与 Montanov 68 均为不含PEG的"仿生"液晶乳化剂，通过脂肪醇/糖苷或橄榄酸酯共结晶形成层状液晶网络，兼具乳化与稳定功能，肤感丰润；Polysorbate 60 是经典PEG型高HLB乳化剂，乳化能力强但悬浮稳定能力弱、常需复配增稠剂，且因聚氧乙烯化工艺存在微量1,4-二噁烷残留的行业共识考量。三者可按配方对"天然/PEG-free"定位、肤感偏好与稳定性需求进行选择。',
    en: 'Olivem 1000 and Montanov 68 are both PEG-free "biomimetic" liquid-crystal emulsifiers that co-crystallize fatty alcohols with glucoside or olive-ester head groups into a lamellar network, combining emulsification with stabilization and giving a rich skin feel. Polysorbate 60 is a classic PEG-type, high-HLB emulsifier — strong emulsification but weak suspension/stabilization on its own, usually needing a separate thickener, and carrying the well-known trace 1,4-dioxane consideration common to ethoxylated surfactants. Choice among the three depends on natural/PEG-free positioning, skin-feel target, and stabilization needs.',
  },
})
