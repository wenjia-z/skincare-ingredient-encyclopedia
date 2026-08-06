import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'glyceryl-stearate-se',
  category: 'emulsifier',
  inciName: 'Glyceryl Stearate SE',
  nameZh: '硬脂酸甘油酯SE（自乳化型，皂化助乳化）',
  tradeNames: [
    { name: 'Glyceryl Stearate SE 120', supplier: 'MakingCosmetics' },
    { name: 'Cithrol GMS-SE', supplier: 'Croda' },
  ],
  chemicalClass: {
    zh: '阴离子助乳化型甘油单酯（自乳化级）',
    en: 'Anionic-boosted glycerol monoester (self-emulsifying grade)',
  },
  chemicalStructureSummary: {
    zh: '基础结构与普通甘油硬脂酸酯相同——甘油与硬脂酸缩合形成的单酯（低HLB、亲油性强、易形成油包水体系）；"SE"（self-emulsifying，自乳化）级的区别在于额外添加约1-3%的硬脂酸钠（或硬脂酸钾）作为阴离子皂化助乳化剂，使其无需另加乳化剂即可与水直接形成水包油乳液。',
    en: 'The base structure is the same as plain Glyceryl Stearate — the mono-ester of glycerol and stearic acid (low HLB, strongly lipophilic, W/O-leaning). The distinguishing feature of the "SE" (self-emulsifying) grade is the addition of roughly 1-3% sodium (or potassium) stearate as an anionic soap co-emulsifier, which lets it form a stable O/W emulsion directly with water alone, without a separate emulsifier.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '自乳化能力/表观HLB提升从何而来', en: 'Where the self-emulsifying ability and apparent-HLB boost come from' },
      explanation: {
        zh: '纯硬脂酸甘油酯本身HLB很低（约3.8-5.8），属油包水倾向的助乳化剂；SE级中添加的硬脂酸钠/钾一旦在水中电离，羧酸根阴离子头基具有很强的水分散性，相当于在体系中引入了一个"外挂"的高亲水组分，把整体表观（功能性）HLB大幅拉高。这也解释了为何不同资料对Glyceryl Stearate SE的HLB报告数值差异较大（约5-8与约11两种口径并存）——二者分别对应"基础酯本身"与"皂化增强后的功能性乳化行为"两种不同的衡量角度。',
        en: "Plain Glyceryl Stearate has a low intrinsic HLB (~3.8-5.8) and behaves as a W/O-leaning co-emulsifier. The sodium/potassium stearate added in the SE grade ionizes in water, and its carboxylate anion head is strongly water-dispersible — effectively bolting a highly hydrophilic component onto the system and substantially raising the overall apparent (functional) HLB. This also explains why published HLB figures for Glyceryl Stearate SE diverge noticeably (some report ~5-8, others ~11) — the two figures reflect the base ester's intrinsic value versus its soap-boosted functional emulsifying behavior.",
      },
    },
    {
      aspect: { zh: '增稠/塑体能力从何而来', en: 'Where the thickening/bodying ability comes from' },
      explanation: {
        zh: '硬脂酸甘油酯与皂化助乳化组分共用同一硬脂酸尾链，冷却时可共结晶形成微晶网络，为体系提供一定粘度和塑体感，因此除了作为主乳化剂/助乳化剂外，也常被用作水包油体系中的增稠剂/稳定剂。',
        en: 'Glyceryl Stearate and the soap co-emulsifier share the same stearic-acid tail and co-crystallize on cooling into a microcrystalline network, giving the system some viscosity and body — so beyond acting as a primary/co-emulsifier, it is also commonly used as a thickener/stabilizer within O/W systems.',
      },
    },
    {
      aspect: { zh: 'pH/电解质敏感性、与阳离子原料不兼容从何而来', en: 'Where the pH/electrolyte sensitivity and cationic incompatibility come from' },
      explanation: {
        zh: '其自乳化机制依赖硬脂酸根离子在水中保持电离、带负电荷的状态；在过低pH下羧酸根会质子化失去电荷，在高电解质或多价阳离子环境下硬脂酸皂会沉淀析出，二者都会破坏其自乳化功能。同理，阴离子的硬脂酸根与阳离子调理剂之间会发生电荷中和/络合，这正是该原料与阳离子型原料不兼容、需在中性偏酸性、低电解质体系中使用的结构根源。',
        en: 'Its self-emulsifying mechanism depends on the stearate ion remaining ionized and negatively charged in water. At too-low pH the carboxylate is protonated and loses its charge; in high-electrolyte or multivalent-cation environments the stearate soap precipitates out — either breaks the self-emulsifying function. By the same logic, the anionic stearate reacts with cationic conditioning agents via charge neutralization/complexation, which is the structural root of its incompatibility with cationic ingredients and its preference for mildly acidic-to-neutral, low-electrolyte systems.',
      },
    },
  ],
  hlb: { min: 5, max: 11 },
  appearance: {
    zh: '类白色至白色微细颗粒，气味温和',
    en: 'off-white to white micro-granules, mild odor',
  },
  performance: {
    skinFeel: {
      zh: '滋润偏乳脂感，涂抹后皮肤感觉柔软，部分配方反馈带轻微皂感',
      en: 'moisturizing with a creamy feel; leaves skin feeling soft, though some formulations report a mild soapy note',
    },
    pillingTendency: 'medium',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '真正的一步法自乳化剂，无需另加助乳化剂即可与水直接形成稳定O/W乳液',
      en: 'a true one-step self-emulsifier that forms a stable O/W emulsion directly with water, no co-emulsifier needed',
    },
    {
      zh: '兼具乳化、增稠、稳定多重功能，可简化配方结构',
      en: 'combines emulsifying, thickening, and stabilizing functions in one ingredient, simplifying formula structure',
    },
    {
      zh: '植物来源、可生物降解，多家主流供应商（Croda、BASF、Evonik等）均有对应产品',
      en: 'plant-derived and biodegradable, with equivalent products available from major suppliers (Croda, BASF, Evonik, etc.)',
    },
  ],
  weaknesses: [
    {
      zh: '自乳化机制依赖阴离子硬脂酸皂，对pH（需中性偏酸性）和高电解质环境较敏感，极端条件下可能破乳',
      en: 'the self-emulsifying mechanism depends on an anionic stearate soap and is sensitive to pH (prefers mildly acidic-to-neutral) and high-electrolyte environments — can destabilize under extreme conditions',
    },
    {
      zh: '与阳离子型原料（如阳离子调理剂）存在电荷不兼容问题，联用需谨慎测试',
      en: 'charge-incompatible with cationic ingredients (e.g. cationic conditioning agents) — combinations require careful testing',
    },
    {
      zh: '不同来源对其HLB的报告口径不一致（约5-8 vs 约11），配方选型时需结合实际打样验证而非单一查表数值',
      en: 'published HLB figures are inconsistent across sources (~5-8 vs ~11) — formulators should verify with actual trial batches rather than relying on a single tabulated value',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 保湿乳霜/乳液', en: 'O/W moisturizing cream / lotion' },
      notes: { zh: '可作为主乳化剂或与其他非离子乳化剂复配使用', en: 'can serve as the primary emulsifier or be blended with other non-ionic emulsifiers' },
    },
    {
      system: { zh: '止汗露/防晒等需要良好稳定性的体系', en: 'antiperspirant / sun care and other systems needing robust stability' },
    },
  ],
  typicalUseLevel: { min: 1, max: 10, unit: '%' },
  relatedIngredientSlugs: ['peg-100-stearate-glyceryl-stearate', 'cetearyl-alcohol-ceteareth-20'],
  citations: [
    {
      id: 'makingcosmetics-glystearatese-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'Glyceryl Stearate SE 120 — Technical Data',
      url: 'https://www.makingcosmetics.com/EMF-GLYST-01.html?lang=en_US',
      accessedDate: '2026-08-05',
      note: 'Used for INCI, appearance (off-white micro-granules), melting point (55°C), use level (1-10%), HLB (reported as 5-8 on this page), and the self-emulsifying mechanism (1-3% sodium stearate content).',
    },
    {
      id: 'naturalbulksupplies-glystearatese',
      supplier: 'Natural Bulk Supplies',
      documentTitle: 'Glyceryl Stearate SE — Product Page',
      url: 'https://naturalbulksupplies.com/glyceryl-stearate-se/',
      accessedDate: '2026-08-05',
      note: 'Reports HLB ~11.0 for the SE (self-emulsifying) variant versus ~5.8 for plain Glyceryl Stearate — this conflicts with the MakingCosmetics figure of 5-8 for the SE grade specifically. Both figures are retained as a range rather than resolved to a single number; see flaggedFields.',
    },
    {
      id: 'curlytea-glystearatese',
      supplier: 'Curly Tea (formulator technical article)',
      documentTitle: 'Glyceryl Stearate SE (self-emulsifying)',
      url: 'https://www.curlytea.com/0829/glyceryl-stearate-se.html',
      accessedDate: '2026-08-05',
      note: 'Independent formulator resource used for pH range (~4.5-9), the anionic-character/cationic-incompatibility note, and cross-checking the stearate soap content; not a primary supplier TDS.',
    },
    {
      id: 'search-glystearatese-tradenames',
      supplier: 'Multiple suppliers (aggregated web search snippet)',
      documentTitle: 'Glyceryl Stearate SE — supplier/trade-name cross-reference (Cithrol GMS-SE / Cutina GMS-SE / Tego Care SE 121 MB)',
      accessedDate: '2026-08-05',
      note: 'Croda\'s Cithrol GMS-SE, BASF\'s Cutina GMS-SE, and Evonik\'s Tego Care SE 121 MB were identified via aggregated search results rather than a directly fetched manufacturer page; only Cithrol GMS-SE is listed in tradeNames above, and this attribution should be treated as not independently confirmed first-hand.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'tradeNames'],
  lastUpdated: '2026-08-05',
})
