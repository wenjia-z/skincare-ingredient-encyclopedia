import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'montanov-202',
  category: 'emulsifier',
  inciName: 'Arachidyl Alcohol (and) Behenyl Alcohol (and) Arachidyl Glucoside',
  nameZh: '花生醇（和）山嵛醇（和）花生基葡糖苷',
  tradeNames: [{ name: 'Montanov 202', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子乳化剂（长链版本）',
    en: 'Alkyl polyglucoside (APG) non-ionic emulsifier, long-chain variant',
  },
  chemicalStructureSummary: {
    zh: '由两种长链脂肪醇——花生醇（C20）与山嵛醇（C22）——与花生基葡糖苷（C20烷基链与葡萄糖缩合而成的糖苷）复配而成。与Montanov 68（C16-18链长）同属"脂肪醇+同源糖苷"乳化剂家族，但Montanov 202采用更长的C20-22烷基链，熔点更高（约74-78°C），结晶更紧密，是Seppic液晶促进剂（liquid crystal promoter）产品线中定位于"轻盈质地"的成员。',
    en: 'A blend of two long-chain fatty alcohols — Arachidyl Alcohol (C20) and Behenyl Alcohol (C22) — with Arachidyl Glucoside (a C20 alkyl chain condensed with glucose). It belongs to the same "fatty alcohol + matching-chain glucoside" emulsifier family as Montanov 68 (C16-18 chain length), but uses longer C20-22 alkyl chains, giving a higher melting point (approx. 74-78°C) and tighter crystallization. It is the "light-texture" member of Seppic\'s liquid-crystal-promoter product line.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '低用量下高效乳化能力从何而来', en: 'Where the high emulsification efficiency at low use levels comes from' },
      explanation: {
        zh: '花生基葡糖苷的C20烷基尾链比Montanov 68的C16-18链更长，与油相的疏水结合更牢固，糖环头基仍通过多羟基强力水合；更长链带来的更强分子间范德华力使体系在更低总用量（3-5%）、更宽的油相范围（约5-30%）下即可完成稳定乳化。',
        en: "Arachidyl Glucoside's C20 alkyl tail is longer than Montanov 68's C16-18 chain, binding the oil phase more strongly, while the sugar-ring head still hydrates powerfully through multiple hydroxyls. The stronger intermolecular van der Waals forces from the longer chain let the system achieve stable emulsification at a lower total use level (3-5%) across a wide oil-phase range (roughly 5-30%).",
      },
    },
    {
      aspect: { zh: '液晶网络与长效保湿从何而来', en: 'Where the liquid-crystal network and long-lasting moisturization come from' },
      explanation: {
        zh: '花生醇、山嵛醇与花生基葡糖苷共结晶于水中，形成比Montanov 68更致密的层状液晶网络（因链更长、熔点更高）；该网络物理性抑制油滴聚并的同时也在皮肤表面形成含水层状结构，这是供应商强调其"降低经皮水分流失（TEWL）、长效保湿"的结构基础。',
        en: 'Arachidyl Alcohol, Behenyl Alcohol, and Arachidyl Glucoside co-crystallize in water into a lamellar liquid-crystal network that is denser than Montanov 68\'s (owing to the longer chains and higher melting point); this network physically suppresses droplet coalescence while also forming a hydrated lamellar structure on skin — the structural basis for the supplier\'s claims of reduced TEWL and long-lasting moisturization.',
      },
    },
    {
      aspect: { zh: '轻盈、哑光肤感从何而来', en: 'Where the light, mattifying skin feel comes from' },
      explanation: {
        zh: '相比Montanov 68/Olivem 1000等C16-18或酯类体系残留的丰润蜡感，Montanov 202的C20-22长链结晶更紧密、更规整，铺展后形成的膜层更薄、更不粘腻，因此呈现"轻盈、哑光、快速吸收"的肤感，更适合男士护理或偏油性肌肤配方，而非追求丰润质地的滋润霜。',
        en: 'Compared to the rich, waxy residual film left by C16-18 or ester systems like Montanov 68 or Olivem 1000, Montanov 202\'s C20-22 long chains crystallize more tightly and regularly, leaving a thinner, less tacky film on spreading — hence the "light, mattifying, fast-absorbing" skin feel, making it better suited to men\'s grooming or oilier-skin formulas than to rich, emollient creams.',
      },
    },
  ],
  hlb: 8.3,
  appearance: {
    zh: '白色至类白色蜡状颗粒，熔点约74-78°C',
    en: 'white to off-white waxy pellets, melting point approx. 74-78°C',
  },
  performance: {
    skinFeel: {
      zh: '轻盈、快速吸收、带哑光效果，不油腻',
      en: 'light, fast-absorbing, with a mattifying effect; non-greasy',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '不含棕榈油（palm-free）、100%天然来源，通过COSMOS、Natrue认证，易生物降解',
      en: 'palm-free, 100% naturally derived, COSMOS and Natrue approved, readily biodegradable',
    },
    {
      zh: '低用量（3-5%）即可稳定较宽范围油相（约5-30%），且呈现轻盈、哑光、快速吸收的肤感，区别于同系列偏丰润的Montanov 68',
      en: 'stabilizes a wide oil-phase range (~5-30%) at a low use level (3-5%), delivering a light, mattifying, fast-absorbing skin feel distinct from the richer-feeling Montanov 68 in the same family',
    },
    {
      zh: '与颜料/填料相容性好，也常用于彩妆及男士护理配方',
      en: 'good compatibility with pigments/fillers; also commonly used in color cosmetics and men\'s grooming formulas',
    },
  ],
  weaknesses: [
    {
      zh: '蜡状固体，需加热至约74-78°C进行热法乳化，能耗高于液态乳化剂',
      en: 'a waxy solid requiring hot-process emulsification at approx. 74-78°C, more energy-intensive than liquid emulsifiers',
    },
    {
      zh: 'HLB值公开数据稀少，目前仅能追溯到一篇专利文献中引用的数值（8.3），未经Seppic官方数据独立确认，仅供参考',
      en: 'publicly available HLB data is scarce; the only traceable figure (8.3) comes from a patent document citation and is not independently confirmed by Seppic\'s own data — for reference only',
    },
    {
      zh: '偏轻盈质地定位，若需要打造高丰润度、高滋润感的乳霜，稳定性和肤感可能不及Olivem 1000或Montanov 68',
      en: 'positioned toward light textures, so it may not match Olivem 1000 or Montanov 68 for stability and skin feel in rich, highly emollient cream formats',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '轻质乳液/流体身体乳', en: 'light lotions / fluid body milks' },
      notes: {
        zh: '油相占比约5-30%时均可稳定成型，质地从流体到厚乳霜均可覆盖',
        en: 'stable across a 5-30% oil-phase range, spanning textures from fluid milks to thicker creams',
      },
    },
    {
      system: { zh: '男士护理/偏油性肌肤配方', en: "men's grooming / oilier-skin formulas" },
      notes: { zh: '哑光、轻盈肤感契合此类产品诉求', en: 'the mattifying, light skin feel fits this product positioning' },
    },
  ],
  typicalUseLevel: { min: 3, max: 5, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'olivem-1000', 'cetearyl-glucoside-emulgade'],
  citations: [
    {
      id: 'lotioncrafter-montanov202-tds',
      supplier: 'Lotioncrafter',
      documentTitle: 'Montanov 202 — Natural Palm-Free Emulsifier, Product & Technical Page',
      url: 'https://lotioncrafter.com/products/montanov-202',
      accessedDate: '2026-08-05',
      note: 'Distributor-hosted technical summary used for INCI name, appearance, melting point, use level, oil-phase range, pH range, and skin-feel claims. Seppic\'s own product page (seppic.com) rendered no usable content when fetched directly (JS-rendered SPA).',
    },
    {
      id: 'humblebeeandme-montanov202',
      supplier: 'Humblebee & Me (cosmetic formulation blog, citing Seppic data)',
      documentTitle: 'Montanov 202 — Ingredient Profile',
      url: 'https://www.humblebeeandme.com/project/montanov-202/',
      accessedDate: '2026-08-05',
      note: 'Second independent source used to cross-check INCI name, appearance, melting point, use level, and pH range; both sources agree.',
    },
    {
      id: 'patent-montanov202-hlb',
      supplier: 'Google Patents (KR20140109804A, third-party patent filing)',
      documentTitle: 'Liquid Crystal Emulsified Organogel Composition and Mask Pack using Thereof',
      url: 'https://patents.google.com/patent/KR20140109804A/en',
      accessedDate: '2026-08-05',
      note: 'HLB=8.3 found via web search indexing of this third-party patent document, which cites the value while formulating with Montanov 202. This is a secondary, non-Seppic source and could not be cross-confirmed against an official Seppic HLB figure — see flaggedFields.',
    },
    {
      id: 'note-inci-correction',
      supplier: 'Internal research note',
      documentTitle: 'INCI verification note',
      accessedDate: '2026-08-05',
      note: 'The brief for this entry initially specified INCI "C14-22 Alcohols (and) C12-20 Alkyl Glucoside" for Montanov 202. Multiple independent, directly-fetched sources (Lotioncrafter, Humblebee & Me) confirm Montanov 202\'s actual INCI is "Arachidyl Alcohol (and) Behenyl Alcohol (and) Arachidyl Glucoside" — the C14-22/C12-20 composition instead matches a different Seppic product, Montanov L. This entry uses the verified real INCI for Montanov 202.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb'],
  lastUpdated: '2026-08-05',
})
