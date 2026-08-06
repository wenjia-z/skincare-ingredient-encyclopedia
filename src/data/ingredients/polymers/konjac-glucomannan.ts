import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'konjac-glucomannan',
  category: 'polymer',
  inciName: 'Glucomannan',
  nameZh: '魔芋葡甘聚糖（葡甘聚糖）',
  tradeNames: [{ name: 'Konjac Glucomannan Powder', supplier: 'Aromantic' }],
  chemicalClass: {
    zh: '植物来源非离子多糖胶（魔芋块茎提取物）',
    en: 'Plant-derived nonionic polysaccharide gum (extracted from konjac tuber)',
  },
  chemicalStructureSummary: {
    zh: '从魔芋（Amorphophallus konjac）块茎中提取的高分子量非离子多糖，商业上常称"魔芋葡甘聚糖"（Konjac Glucomannan）。主链由D-甘露糖与D-葡萄糖以β-1,4糖苷键连接而成，二者摩尔比约为1.6:1（不同来源/工艺下略有差异，约1.4:1-1.6:1），并带有少量乙酰基侧基；分子量可达约20万至200万道尔顿（依来源、提取及储存条件而异）。由于主链不带电荷（非离子），其增稠机制不依赖静电排斥，而是依靠链上大量羟基与水分子形成广泛氢键、超高分子量带来的链缠结，从而束缚大量水分形成透明、有一定弹性的凝胶网络。',
    en: 'A high-molecular-weight nonionic polysaccharide extracted from the tuber of the konjac plant (Amorphophallus konjac), commercially known as "konjac glucomannan." The backbone consists of D-mannose and D-glucose linked via β-1,4 glycosidic bonds at a molar ratio of roughly 1.6:1 (reported to vary by source/processing, roughly 1.4:1-1.6:1), with a small proportion of acetyl side groups; molecular weight can reach roughly 200,000 to 2,000,000 Da depending on source, extraction, and storage conditions. Because the backbone carries no charge (nonionic), its thickening mechanism does not rely on electrostatic repulsion — instead, the abundant hydroxyl groups form extensive hydrogen bonds with water, and the very high molecular weight drives chain entanglement, together binding large amounts of water into a clear, somewhat elastic gel network.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '低用量下的强增稠/凝胶能力从何而来', en: 'Where the strong thickening/gelling ability at low use levels comes from' },
      explanation: {
        zh: '葡甘聚糖分子量极高（可达百万道尔顿量级），链段本身长而柔顺，即使在稀溶液中也极易相互缠结形成连续网络；同时链上大量羟基与水分子广泛形成氢键，将水分子束缚在网络间隙中。超高分子量带来的缠结效应加上强氢键水合，共同解释了为何仅需0.1-0.5%即可达到与更高用量的其他胶类相当的增稠效果。',
        en: 'Glucomannan has an extremely high molecular weight (reaching the million-dalton range), and its long, flexible chains readily entangle with each other to form a continuous network even in dilute solution; at the same time the abundant hydroxyl groups along the chain form extensive hydrogen bonds with water, binding water molecules within the network. This combination of entanglement (from the very high molecular weight) and strong hydrogen-bond hydration explains why as little as 0.1-0.5% can achieve thickening comparable to higher-use-level gums.',
      },
    },
    {
      aspect: { zh: '透明清澈凝胶质地从何而来', en: 'Where the clear, transparent gel texture comes from' },
      explanation: {
        zh: '主链不带电荷、无需依赖离子中和或电解质来构建网络，也不像黄原胶那样形成大量刚性螺旋聚集体散射光线；葡甘聚糖主要通过均匀分布的氢键缔合形成相对松散、均质的水凝胶网络，光散射较少，因此配方中呈现出供应商所述"透明、无色"的凝胶外观与清爽不粘腻的肤感。',
        en: 'The nonionic backbone does not depend on ionic neutralization or electrolytes to build its network, nor does it form the large populations of light-scattering rigid-helix aggregates that xanthan gum does; glucomannan instead builds a relatively loose, homogeneous hydrogel network mainly through evenly distributed hydrogen bonding, scattering less light — which is why formulations show the clear, colorless gel appearance and light, non-tacky skin feel the supplier describes.',
      },
    },
    {
      aspect: { zh: '与其他生物聚合物的协同增效从何而来', en: 'Where the synergy with other biopolymers comes from' },
      explanation: {
        zh: '葡甘聚糖的甘露糖主链区段可与黄原胶、卡拉胶等其他多糖链之间发生分子间缔合（类似半乳甘露聚糖与黄原胶的协同机制），在两种聚合物共存时形成比单一组分更致密的复合网络，因此供应商指出其可与黄原胶、卡拉胶等生物聚合物协同复配，以更低总胶量获得稳定凝胶/乳液体系。',
        en: "Glucomannan's mannose-rich backbone segments can undergo intermolecular association with other polysaccharide chains such as xanthan gum or carrageenan (a mechanism similar to the galactomannan-xanthan synergy), forming a denser composite network when the two polymers coexist than either could alone — which is why the supplier notes it can be blended synergistically with biopolymers like xanthan gum and carrageenan to achieve stable gels/emulsions at a lower total gum load.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '形成透明、略有弹性的凝胶，肤感轻盈不粘腻，涂抹后无明显胶感残留',
      en: 'forms a clear, somewhat elastic gel; light, non-tacky skin feel with no noticeable gummy residue on application',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '供应商列出可用作乳化剂（0.05-0.5%），但更常见用法是作为增稠/凝胶剂与传统乳化剂复配',
      en: 'the supplier lists an emulsifier use level (0.05-0.5%), but it is more commonly used as a thickener/gelling agent paired with a conventional emulsifier',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '极低用量（0.1-0.5%）即可实现与更高用量传统胶类相当的增稠效果，形成透明凝胶（供应商数据：0.5%效果约等同于1%黄原胶配方的稠度）',
      en: 'achieves thickening comparable to higher-dosed conventional gums at very low use levels (0.1-0.5%), forming a clear gel (supplier data: 0.5% gives roughly the consistency of a 1% xanthan gum formula)',
    },
    {
      zh: '植物来源（魔芋块茎）天然多糖，可作为丙烯酸类合成聚合物（如卡波姆）的"植物基"替代增稠方案，行业博主实测认为其质地可媲美卡波姆',
      en: 'a plant-derived (konjac tuber) natural polysaccharide that can serve as a "plant-based" alternative to synthetic acrylate thickeners like Carbomer; independent formulator testing has described its texture as comparable to Carbomer',
    },
    {
      zh: '耐热性较好，供应商数据显示含葡甘聚糖的凝胶可耐受80°C加热30分钟而保持稳定，且与DHA、果酸等活性物三个月储存测试后仍保持稳定',
      en: 'good heat tolerance — supplier data shows glucomannan-containing gels remain stable after heating to 80°C for 30 minutes, and remain stable after three months of storage testing with actives such as DHA and AHAs',
    },
  ],
  weaknesses: [
    {
      zh: '分散不当易结块，供应商建议配方中至少含2%甘油以辅助分散，且需边搅拌边缓慢撒粉（约需搅拌3-4分钟才充分增稠）',
      en: 'prone to clumping if dispersed incorrectly; the supplier recommends at least 2% glycerin in the formula to aid dispersion, with the powder sprinkled in slowly under continuous stirring (thickening takes roughly 3-4 minutes of whisking)',
    },
    {
      zh: '独立配方师实测报告指出，其与部分表面活性剂及阳离子乳化剂（如BTMS-50）可能存在相容性问题，需逐一测试验证',
      en: 'independent formulator testing has reported possible compatibility issues with some surfactants and cationic emulsifiers (e.g. BTMS-50); compatibility should be verified case by case',
    },
    {
      zh: '可查证的商业供应商公开技术数据相对有限（多为电商/小型原料商产品页），大型原料商的正式技术数据表未能在本次检索中获取',
      en: 'publicly available commercial technical data is relatively limited (mostly e-commerce/small-supplier product pages); a formal TDS from a major raw-material supplier was not obtained in this research pass',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明凝胶/精华', en: 'clear gels / serums' },
    },
    {
      system: { zh: '面膜、乳液', en: 'facial masks, lotions' },
    },
    {
      system: { zh: '发用产品', en: 'hair-care products' },
    },
  ],
  typicalUseLevel: { min: 0.1, max: 1, unit: '%' },
  relatedIngredientSlugs: ['hydroxypropyl-starch-phosphate', 'xanthan-gum'],
  citations: [
    {
      id: 'aromantic-konjac-product-page',
      supplier: 'Aromantic',
      documentTitle: 'Konjac Glucomannan Powder for Emulsifying and Thickening — product page',
      url: 'https://aromantic.com/collections/thickening-agents/products/konjac-glucomannan-powder',
      accessedDate: '2026-08-05',
      note: 'Used for appearance, source, use levels (0.5-1% thickener, 0.05-0.5% emulsifier), dispersion method (glycerin pre-wetting), heat stability (80°C/30min), and DHA/AHA compatibility notes.',
    },
    {
      id: 'search-glucomannan-structure',
      supplier: 'Multiple published sources (ScienceDirect Topics, BOC Sciences — indexed excerpts)',
      documentTitle: 'Konjac glucomannan molecular structure: mannose:glucose ratio and molecular weight range',
      url: 'https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/glucomannan',
      accessedDate: '2026-08-05',
      note: 'Mannose:glucose molar ratio (~1.6:1, range 1.4:1-1.6:1) and molecular weight range (~200-2,000 kDa) found via web search snippets of published sources; pages were not independently fetched/confirmed in full, so figures are treated as partially verified.',
    },
    {
      id: 'lisalise-konjac-carbomer-article',
      supplier: 'Lisa Lise Blog (independent formulator, technical/industry article)',
      documentTitle: 'Konjac Glucomannan – A Plant-Based Answer to Carbomer?',
      url: 'https://www.lisaliseblog.com/2012/04/konjac-glucomannan-plant-based-answer.html',
      accessedDate: '2026-08-05',
      note: 'Used for the clear/non-tacky gel description, comparison to Carbomer texture, and noted compatibility caution with surfactants/cationic emulsifiers (BTMS-50). Independent formulator testing, not a manufacturer TDS.',
    },
    {
      id: 'incidecoder-glucomannan',
      supplier: 'INCIDecoder (ingredient database)',
      documentTitle: 'Glucomannan — ingredient summary',
      url: 'https://incidecoder.com/ingredients/glucomannan',
      accessedDate: '2026-08-05',
      note: 'Used to cross-check INCI naming (Glucomannan) and general definition/function classification.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-05',
})
