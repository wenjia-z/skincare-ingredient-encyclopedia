import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'tego-care-450',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-3 Methylglucose Distearate',
  nameZh: '聚甘油-3甲基葡糖二硬脂酸酯',
  tradeNames: [{ name: 'Tego Care 450', supplier: 'Evonik' }],
  chemicalClass: {
    zh: '甲基葡糖聚甘油酯类非离子乳化剂（PEG-free）',
    en: 'PEG-free, methyl-glucose polyglyceryl ester non-ionic emulsifier',
  },
  chemicalStructureSummary: {
    zh: '结构核心为甲基葡糖（methyl glucoside，糖环上多个羟基，亲水性强）与聚甘油-3（三个甘油单元聚合而成的多羟基亲水骨架）相连，再于两个位点酯化连接两条硬脂酸（C18饱和脂肪酸）疏水尾链，形成"双硬脂酸酯"结构。整体是不含聚氧乙烯链的非离子乳化剂，亲水部分来自糖环+聚甘油的多羟基氢键网络，而非聚氧乙烯链段。',
    en: 'A methyl glucoside (a sugar ring with multiple hydroxyls, strongly hydrophilic) is linked to polyglyceryl-3 (a multi-hydroxyl hydrophilic backbone built from three glycerol units), then esterified at two positions with two stearic acid (C18 saturated fatty acid) hydrophobic tails, giving a "distearate" structure. The whole molecule is a non-ionic, PEG-free emulsifier whose hydrophilicity comes from the hydrogen-bonding network of the sugar-ring plus polyglycerol hydroxyls, not from an ethoxylate chain.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高油相承载下的乳化能力从何而来', en: 'Where the high-oil-phase emulsification capacity comes from' },
      explanation: {
        zh: '甲基葡糖+聚甘油-3头基携带大量自由羟基，通过密集氢键强力水合，亲水性较强（HLB约12）；两条C18硬脂酸尾链则提供足够的疏水锚定力插入油相。头基的强亲水性与双尾链的强疏水锚定共同作用，使其能在较低用量（2-3%）下承载较高比例油相（20-40%）并保持稳定。',
        en: 'The methyl-glucose + polyglyceryl-3 head group carries numerous free hydroxyls that hydrate strongly via dense hydrogen bonding, giving fairly high hydrophilicity (HLB ~12); the two C18 stearate tails provide strong hydrophobic anchoring into the oil phase. The combination of a strongly hydrophilic head and a doubly-anchored hydrophobic tail lets it carry a relatively high oil-phase fraction (20-40%) at a low use level (2-3%) while remaining stable.',
      },
    },
    {
      aspect: { zh: '宽pH、耐电解质、耐冻融的稳定性从何而来', en: 'Where the broad pH, electrolyte tolerance, and freeze/thaw stability come from' },
      explanation: {
        zh: '该乳化剂的亲水性建立在多羟基酯类结构上而非可被电离/屏蔽的基团，因此其界面稳定作用不依赖溶液离子强度或pH，能在pH 4.5-8.5、-25°C至+50°C的宽范围内保持稳定；相比依赖层状液晶网络屈服应力稳定的糖苷类乳化剂，此类多元醇酯结构对温度骤变和电解质的耐受性通常更宽，因此适合矿物防晒等高电解质配方。',
        en: 'This emulsifier\'s hydrophilicity is built on a multi-hydroxyl ester structure rather than an ionizable or charge-screenable group, so its interfacial stabilizing action does not depend on ionic strength or pH — it stays stable across pH 4.5-8.5 and -25°C to +50°C. Compared with glucoside-type emulsifiers that rely on the yield stress of a lamellar liquid-crystal network, this polyol-ester structure typically tolerates sudden temperature swings and electrolytes more broadly, which is why it suits high-electrolyte systems such as mineral sunscreens.',
      },
    },
    {
      aspect: { zh: '无需额外增稠剂即可获得丝滑质地的原因', en: 'Why a smooth texture is achievable without a separate thickener' },
      explanation: {
        zh: '支链化的聚甘油-甲基葡糖头基与双硬脂酸酯尾链在界面及体相中都倾向于形成较致密的自组装网络，这种自增稠效应使配方在不额外添加增稠剂的情况下也能获得丝滑、丰润的质地，这也是其宣称"无需合成增稠剂即可形成乳霜质地"的结构基础。',
        en: 'The branched polyglycerol-methylglucose head and doubly-esterified stearate tails tend to self-assemble into a fairly dense network both at the interface and throughout the bulk phase; this self-thickening effect is why the formula can achieve a smooth, rich texture without adding a separate thickener — the structural basis for the "creamy textures without synthetic thickeners" claim.',
      },
    },
  ],
  hlb: 12,
  appearance: {
    zh: '象牙色蜡状颗粒',
    en: 'ivory-colored waxy pellets',
  },
  performance: {
    skinFeel: {
      zh: '顺滑、丰润，涂抹后质地细腻，无需额外增稠剂即呈现乳霜感',
      en: 'smooth, luxurious skin feel with a fine texture; creamy feel achievable without added thickeners',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: 'PEG-free、植物来源，pH稳定范围宽（4.5-8.5），耐盐/电解质能力强，适合搭配活性成分',
      en: 'PEG-free, plant-derived, broad pH stability (4.5-8.5), strong electrolyte/salt tolerance — compatible with active-ingredient-heavy formulas',
    },
    {
      zh: '耐热耐冻融范围宽（-25°C至+50°C），成品稳定性强，适合需要经受严苛储运条件的产品',
      en: 'broad heat/freeze-thaw tolerance (-25°C to +50°C), giving strong finished-product stability for demanding storage/shipping conditions',
    },
    {
      zh: '可承载较高油相（20-40%）而用量仅需2-3%，配方经济性好',
      en: 'supports a relatively high oil phase (20-40%) at a use level of just 2-3%, giving good formulation economics',
    },
  ],
  weaknesses: [
    {
      zh: '蜡状固体，需热法乳化，工艺能耗高于液态乳化剂',
      en: 'a waxy solid requiring hot-process emulsification, more energy-intensive than liquid emulsifiers',
    },
    {
      zh: 'HLB值及外观规格目前只能通过第二手/搜索摘要来源确认，Evonik官方TDS原文（PDF）无法直接抓取核实',
      en: "HLB value and appearance specification are currently confirmed only via secondary/search-summary sources; Evonik's own TDS PDF could not be directly fetched for first-hand verification",
    },
    {
      zh: '未见公开的天然/有机认证信息（如COSMOS），若配方需要该类认证需另行向Evonik确认',
      en: 'no publicly documented natural/organic certification (e.g. COSMOS) was found; formulators needing such certification should confirm directly with Evonik',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '丰润型面霜/身体霜', en: 'rich body and face creams' },
      notes: { zh: '油相占比可达20-40%', en: 'supports 20-40% oil phase' },
    },
    {
      system: { zh: '矿物防晒/SPF产品', en: 'mineral / SPF sun care products' },
      notes: {
        zh: '耐电解质特性契合含无机防晒剂（如氧化锌、二氧化钛）的配方',
        en: 'electrolyte tolerance suits formulas containing inorganic UV filters (e.g. zinc oxide, titanium dioxide)',
      },
    },
  ],
  typicalUseLevel: { min: 2, max: 3, unit: '%' },
  relatedIngredientSlugs: ['olivem-1000', 'montanov-68', 'polysorbate-60'],
  citations: [
    {
      id: 'surfachem-tegocare450-tds',
      supplier: 'Surfachem (Evonik distributor)',
      documentTitle: 'TEGO Care 450 MB — Product Technical Page',
      url: 'https://surfachem.com/products/tego-care-450-mb',
      accessedDate: '2026-08-05',
      note: 'Directly fetched distributor page; used for INCI name, use level, applications, pH range, thermal stability range, and skin-feel/electrolyte-tolerance claims. Evonik\'s own TDS PDF (glenncorp.com) returned unparseable binary content when fetched directly.',
    },
    {
      id: 'search-tegocare450-hlb-appearance',
      supplier: 'SpecialChem (indexed excerpt)',
      documentTitle: 'Tego Care 450 MB — Technical Datasheet (search-indexed summary)',
      url: 'https://www.specialchem.com/cosmetics/product/evonik-tego-care-450-mb',
      accessedDate: '2026-08-05',
      note: 'HLB≈12 and ivory pellet appearance found via web search indexing of this page; direct fetch was blocked (HTTP 403), so these figures are not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'appearance'],
  lastUpdated: '2026-08-05',
})
