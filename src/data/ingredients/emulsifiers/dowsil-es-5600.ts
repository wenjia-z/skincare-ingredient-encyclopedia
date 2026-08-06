import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'dowsil-es-5600',
  category: 'emulsifier',
  inciName: 'Cetyl Diglyceryl Tris(Trimethylsiloxy)silylethyl Dimethicone',
  nameZh: '鲸蜡醇二甘油三(三甲基硅氧基)硅乙基聚二甲基硅氧烷',
  tradeNames: [{ name: 'DOWSIL ES-5600', supplier: 'Dow' }],
  chemicalClass: {
    zh: '硅氧烷-二甘油型乳化剂（无PEG硅氧烷乳化剂）',
    en: 'Silicone-glycerol (diglycerol) emulsifier; PEG-free silicone emulsifier',
  },
  chemicalStructureSummary: {
    zh: '官方技术数据表将其组成描述为"硅氧烷二甘油"（silicone diglycerol）：分子在聚二甲基硅氧烷主链上引入鲸蜡醇（C16）疏水尾链，同时接枝二甘油（diglycerol）亲水头基，并带有支链的三(三甲基硅氧基)硅乙基（一种类MQ树脂型支链硅氧烷单元），赋予分子额外的空间体积与油相相容性。整体不含环氧乙烷（EO）或环氧丙烷（PO）缩合结构，即不含PEG/PPG链段。官方数据：25°C下为无色至浅棕色、透明至半透明液体，运动粘度2,000-5,000 mm²/s，比重0.94，闪点（闭杯）198°C，折光指数（25°C）1.43，计算HLB为2。',
    en: 'The official technical data sheet describes the composition as "silicone diglycerol": the molecule carries a cetyl (C16) hydrophobic tail and a grafted diglycerol hydrophilic head group on a polydimethylsiloxane backbone, together with a branched tris(trimethylsiloxy)silylethyl unit (an MQ-resin-like branched siloxane group) that adds steric bulk and oil-phase compatibility. The molecule contains no ethylene oxide (EO) or propylene oxide (PO) condensation — i.e. no PEG/PPG segments. Official data: a colorless to light brown, transparent to translucent liquid at 25°C, kinematic viscosity 2,000-5,000 mm²/s, specific gravity 0.94, closed-cup flash point 198°C, refractive index (25°C) 1.43, and a calculated HLB of 2.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '极低HLB与W/Si、W/O乳化能力从何而来', en: 'Where the very low HLB and W/Si / W/O emulsifying ability come from' },
      explanation: {
        zh: '尽管分子带有亲水的二甘油头基，但相对于庞大的聚二甲基硅氧烷主链和支链三甲基硅氧基单元而言，亲水部分占比很小，因此计算HLB仅为2，处于典型W/O、W/Si乳化剂区间；这一低HLB结构使其倾向于在连续硅油/有机油相中稳定分散的水滴界面，而非稳定水包油体系。',
        en: "Although the molecule carries a hydrophilic diglycerol head group, that hydrophilic portion is small relative to the bulky polydimethylsiloxane backbone and branched tris(trimethylsiloxy)silylethyl unit, giving a calculated HLB of only 2 — squarely in the typical W/O / W/Si emulsifier range. This low-HLB structure favors stabilizing water droplets dispersed in a continuous silicone/organic-oil phase rather than stabilizing an oil-in-water system.",
      },
    },
    {
      aspect: { zh: '无需稀释、低粘度即可配方的原因', en: 'Where the non-diluted, low-viscosity formulating ease comes from' },
      explanation: {
        zh: '分子本身即为100%活性物的液体（官方数据：运动粘度2,000-5,000 mm²/s，属可流动的中等粘度液体），无需像部分蜡状硅氧烷乳化剂那样先行熔化或以载体稀释，因此可直接分散于油相中，在冷法或热法工艺下均可操作（官方数据）。',
        en: 'The molecule is itself a 100%-active liquid (official data: kinematic viscosity 2,000-5,000 mm²/s, a flowable, medium-viscosity liquid) rather than a waxy solid requiring melting, and it is not pre-diluted in a carrier as some silicone emulsifiers are — so it disperses directly into the oil phase and can be processed either cold or hot (official data).',
      },
    },
    {
      aspect: { zh: '无PEG配方兼容性从何而来', en: 'Where the PEG-free formulation compatibility comes from' },
      explanation: {
        zh: '亲水头基由二甘油（甘油缩合产物）而非环氧乙烷/环氧丙烷加成提供，分子结构中不含PEG/PPG链段（官方数据明确说明"不含环氧乙烷和环氧丙烷"），因此可用于强调"无PEG"标识的配方体系，同时仍具备聚氧乙烯型硅氧烷乳化剂的界面活性功能。',
        en: 'The hydrophilic head is provided by diglycerol (a glycerol condensation product) rather than by ethylene-oxide/propylene-oxide addition, so the molecule contains no PEG/PPG segments (the official data sheet explicitly states it "does not contain ethylene oxide and propylene oxide") — making it usable in formulations that market a "PEG-free" claim while still providing the interfacial activity of a conventional ethoxylated silicone emulsifier.',
      },
    },
  ],
  hlb: 2,
  appearance: {
    zh: '25°C下无色至浅棕色、透明至半透明液体',
    en: 'colorless to light brown, transparent to translucent liquid at 25°C',
  },
  performance: {
    skinFeel: {
      zh: '官方数据描述具有减少油腻感、清爽肤感、抗水洗性等特性',
      en: 'official data describes reduced greasiness, a refreshing feel, and wash-off resistance',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '非稀释型（100%活性物）、低粘度W/Si与W/O乳化剂，配方灵活，兼容广泛的硅油与有机油相（官方数据）',
      en: 'a non-diluted (100%-active), low-viscosity W/Si and W/oil emulsifier offering formulation flexibility across a broad range of silicone and organic oil phases (official data)',
    },
    {
      zh: '不含环氧乙烷/环氧丙烷，可用于配制无PEG（PEG-free）配方（官方数据）',
      en: 'contains no ethylene oxide/propylene oxide, enabling PEG-free formulation (official data)',
    },
    {
      zh: '可分散颜料及细颗粒物，冷法或热法工艺均可操作，气味低（官方数据）',
      en: 'disperses pigments and fine particles, can be processed cold or hot, and has low odor (official data)',
    },
  ],
  weaknesses: [
    {
      zh: 'HLB约2，仅适用于W/Si或W/O体系，不能用于稳定O/W乳液，需配合合适的主乳化剂体系或用于纯W/Si配方',
      en: 'an HLB of ~2 makes it suitable only for W/Si or W/O systems — it cannot stabilize an O/W emulsion, and must be paired with an appropriate system or used in a dedicated W/Si formulation',
    },
    {
      zh: '官方推荐用量以"高水相占比的乳液体系建议添加2%"为准，水相比例降低时需相应提高用量；官方数据未给出明确的用量上限，故本条目未纳入具体的用量范围（min-max），以免臆造',
      en: 'the official recommended addition level is "2% for emulsions with a high level of water phase," with higher levels needed as water-phase content decreases; no explicit upper-bound use level is stated in the official data, so no min-max use-level range is included in this entry to avoid inventing one',
    },
    {
      zh: '闪点198°C，属易燃性较低但仍需常规溶剂/可燃液体的储存与操作规范（官方数据）',
      en: 'a flash point of 198°C indicates relatively low flammability but still requires standard storage/handling precautions typical of combustible liquids (official data)',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '低粘度水包硅油/水包油乳液', en: 'low-viscosity water-in-silicone / water-in-oil emulsions' },
      notes: { zh: '官方数据：专为低粘度W/Si乳液设计', en: 'official data: designed to create low-viscosity water-in-oil emulsions' },
    },
    {
      system: { zh: '彩妆、防晒、止汗/除臭产品', en: 'color cosmetics, sun care, antiperspirants and deodorants' },
      notes: { zh: '官方应用列表，另包括护肤品', en: 'per official applications list, which also includes skin care' },
    },
  ],
  relatedIngredientSlugs: ['abil-em-90', 'silsense-dw-18'],
  citations: [
    {
      id: 'dow-es5600-tds',
      supplier: 'Dow',
      documentTitle: 'DOWSIL™ ES-5600 Silicone Glycerol Emulsifier — Technical Data Sheet',
      url: 'https://www.dow.com/documents/27/27-1/27-1444-01-dowsil-es-5600-silicone-glycerol-emulsifier.pdf',
      accessedDate: '2026-08-06',
      note: 'Official Dow TDS (Form No. 27-1444-01-0222 S2D), full PDF successfully retrieved and read. Source for INCI name, composition description, appearance, viscosity, specific gravity, flash point, refractive index, calculated HLB, recommended use level (2% floor for high-water-phase emulsions), processing guidance, and applications.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh'],
  lastUpdated: '2026-08-06',
})
