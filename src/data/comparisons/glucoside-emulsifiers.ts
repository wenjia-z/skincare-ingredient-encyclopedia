import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'glucoside-self-emulsifying-systems',
  title: {
    zh: '烷基糖苷（Alkyl Glucoside）自乳化体系对比',
    en: 'Alkyl Glucoside Self-Emulsifying Systems Compared',
  },
  category: 'emulsifier',
  ingredientSlugs: ['montanov-68', 'montanov-202', 'cetearyl-glucoside-emulgade'],
  extraDimensions: [
    {
      key: 'alkyl-chain-length',
      label: { zh: '烷基链长', en: 'Alkyl chain length' },
      valuesBySlug: {
        'montanov-68': { zh: 'C16-18（鲸蜡硬脂醇糖苷）', en: 'C16-18 (cetearyl glucoside)' },
        'montanov-202': { zh: 'C20-22（花生醇/山嵛醇+花生基葡糖苷，更长链）', en: 'C20-22 (arachidyl/behenyl alcohol + arachidyl glucoside — longer chain)' },
        'cetearyl-glucoside-emulgade': { zh: 'C16-18（鲸蜡硬脂醇糖苷）', en: 'C16-18 (cetearyl glucoside)' },
      },
    },
    {
      key: 'supplier',
      label: { zh: '供应商', en: 'Supplier' },
      valuesBySlug: {
        'montanov-68': { zh: 'Seppic', en: 'Seppic' },
        'montanov-202': { zh: 'Seppic', en: 'Seppic' },
        'cetearyl-glucoside-emulgade': { zh: 'BASF（Emulgade）', en: 'BASF (Emulgade)' },
      },
    },
  ],
  summary: {
    zh: '三者同属"脂肪醇+烷基糖苷"共结晶层状液晶乳化体系，均为PEG-free、免中和、热法工艺，兼具乳化与部分稳定功能。Montanov 68 与 Emulgade 的INCI组成高度接近（同为C16-18链长糖苷+脂肪醇），主要差异在供应商与具体配方细节；Montanov 202 采用更长的C20-22链烷基醇/糖苷，熔点更高、结晶更紧密，供应商将其定位为Montanov系列中"轻盈质地"的成员，与Montanov 68的丰润质地形成对比，可根据目标肤感选择。',
    en: 'All three belong to the "fatty alcohol + alkyl glucoside" co-crystallized lamellar liquid-crystal emulsifier family — PEG-free, no-neutralization, hot-process systems that combine emulsification with partial stabilization. Montanov 68 and Emulgade are near-identical in INCI composition (both C16-18-chain glucosides plus fatty alcohol), differing mainly by supplier and formulation specifics. Montanov 202 uses longer C20-22-chain alcohols/glucoside, giving a higher melting point and tighter crystallization; the supplier positions it as the "light-texture" member of the Montanov line, contrasting with Montanov 68\'s richer feel — a useful axis for choosing between the two based on target skin feel.',
  },
})
