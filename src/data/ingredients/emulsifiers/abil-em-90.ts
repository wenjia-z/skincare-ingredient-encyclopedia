import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'abil-em-90',
  category: 'emulsifier',
  inciName: 'Cetyl PEG/PPG-10/1 Dimethicone',
  nameZh: '鲸蜡基PEG/PPG-10/1聚二甲基硅氧烷',
  tradeNames: [{ name: 'ABIL EM 90', supplier: 'Evonik' }],
  chemicalClass: {
    zh: '有机改性硅氧烷类非离子W/O（油包水）乳化剂',
    en: 'Organomodified silicone (dimethicone copolyol) non-ionic W/O emulsifier',
  },
  chemicalStructureSummary: {
    zh: '以聚二甲基硅氧烷（PDMS）主链为骨架，在侧链上接枝短链聚氧乙烯/聚氧丙烯（PEG/PPG-10/1）亲水基团，并带有鲸蜡基（C16）疏水尾链，形成"聚合物型、多官能团"结构。硅氧烷主链本身高度疏水且柔性极佳，占分子体积的绝大部分；侧链PEG/PPG基团相对短小，因此整体亲水-亲油平衡明显偏向亲油端（HLB约5），是其作为油包水（W/O）乳化剂而非水包油乳化剂的结构基础。',
    en: 'Built on a polydimethylsiloxane (PDMS) backbone with short-chain polyoxyethylene/polyoxypropylene (PEG/PPG-10/1) hydrophilic groups grafted onto side chains, plus a cetyl (C16) lipophilic tail — giving a "polymeric, polyfunctional" structure. The siloxane backbone itself is highly lipophilic and extremely flexible, making up the great majority of the molecule\'s volume; the grafted PEG/PPG side chains are comparatively small, so the overall hydrophilic-lipophilic balance skews strongly lipophilic (HLB ~5) — the structural basis for it functioning as a water-in-oil (W/O), rather than oil-in-water, emulsifier.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: 'W/O乳化能力从何而来', en: 'Where the W/O emulsification ability comes from' },
      explanation: {
        zh: '硅氧烷主链在体积上远大于短链PEG/PPG-10/1亲水基团，使整体HLB降至约5（低HLB），根据Bancroft规则，亲油相占优的乳化剂更易稳定油包水（W/O）体系；同时Si-O-Si主链具有比常规碳链更高的柔性与更低的表面张力，能与硅油、酯类油、植物三甘油酯等多种化妆品油相良好相容，故供应商资料称其可与多种油脂配伍且无需复配乳化剂即可成乳。',
        en: "The siloxane backbone's volume dominates over the small PEG/PPG-10/1 hydrophilic side chains, pulling the overall HLB down to ~5. Per Bancroft's rule, a lipophile-dominant emulsifier more readily stabilizes a water-in-oil (W/O) system. The Si-O-Si backbone is also more flexible and lower in surface tension than a typical carbon chain, giving good compatibility with silicone oils, ester oils, and vegetable triglycerides alike — the structural basis for supplier claims that it emulsifies a broad range of oils without a co-emulsifier.",
      },
    },
    {
      aspect: { zh: '耐高低温稳定性从何而来', en: 'Where the heat/freeze-thaw stability comes from' },
      explanation: {
        zh: 'Si-O-Si硅氧烷键的键能与键角柔性使其在很宽的温度范围内都保持链段活动性，不易像碳氢链乳化剂那样在低温下结晶硬化或在高温下发生相分离；这是引用资料中"-25°C至+60°C耐高低温稳定"这一说法的结构基础，也是硅基乳化剂相较传统蜡状W/O乳化剂的核心优势之一。',
        en: 'The bond energy and bond-angle flexibility of Si-O-Si linkages keep the chain segments mobile over a much wider temperature range than hydrocarbon chains, which tend to crystallize/harden at low temperature or phase-separate at high temperature. This is the structural basis for the cited "-25°C to +60°C" stability claim, and one of the core advantages of silicone-based emulsifiers over traditional waxy W/O emulsifiers.',
      },
    },
    {
      aspect: { zh: '轻盈丝滑肤感从何而来', en: 'Where the light, silky skin feel comes from' },
      explanation: {
        zh: '硅氧烷主链表面能低、铺展系数高，涂抹后在皮肤表面形成极薄的连续膜而非厚重蜡质膜层，因此乳液整体呈现轻盈、丝滑、不粘腻的肤感，这也是其区别于蜡状/脂肪醇型W/O乳化剂（肤感通常更厚重滋润）的结构性原因。',
        en: 'The low surface energy and high spreading coefficient of the siloxane backbone lets it form an extremely thin, continuous film on skin rather than a thick waxy layer — the structural reason the resulting emulsion feels light, silky, and non-greasy, distinguishing it from waxy/fatty-alcohol-type W/O emulsifiers, which tend to feel heavier and richer.',
      },
    },
  ],
  hlb: 5,
  appearance: {
    zh: '常温下为浑浊至浊状粘稠液体，25°C粘度约300-700 cP',
    en: 'hazy to turbid viscous liquid at room temperature, viscosity approx. 300-700 cP at 25°C',
  },
  performance: {
    skinFeel: {
      zh: '轻盈丝滑、不粘腻，涂抹后残留感低于常规蜡质W/O乳化体系',
      en: 'light, silky, non-greasy skin feel with a lower residual sensation than conventional waxy W/O systems',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '无需复配乳化剂即可稳定W/O乳液，仅需少量增稠蜡即可获得良好稳定性',
      en: 'stabilizes W/O emulsions without a co-emulsifier, needing only a small amount of consistency-enhancing wax for good stability',
    },
    {
      zh: '耐高低温性能优异（约-25°C至+60°C），适合防晒、户外产品等对稳定性要求高的配方',
      en: 'excellent heat/freeze-thaw stability (~-25°C to +60°C), suited to sun-care and outdoor products with high stability demands',
    },
    {
      zh: '与有机/物理防晒剂及多种活性物相容性好，可用于构建W/O/W、O/W/O等多重乳液体系',
      en: 'good compatibility with organic/physical UV filters and various actives; can be used to build multiple-emulsion systems such as W/O/W and O/W/O',
    },
  ],
  weaknesses: [
    {
      zh: '硅氧烷主链结构使其不符合"无硅油"或强调纯天然定位的配方诉求',
      en: 'the siloxane backbone structure is incompatible with "silicone-free" or purely natural-positioned formulation claims',
    },
    {
      zh: 'HLB约5、偏低，配方需控制在推荐油相比例（约22-35%）内以获得最佳稳定性，超出范围可能需要调整体系',
      en: 'HLB of ~5 is on the low side; formulas should stay within the recommended oil-phase range (~22-35%) for optimal stability, and may need reformulation outside that range',
    },
    {
      zh: '作为W/O体系，冲洗感/清爽感通常不及O/W乳化体系，更适合滋润型而非清爽型产品定位',
      en: 'as a W/O system, it typically feels less light/rinse-clean than an O/W system, making it better suited to richer rather than lightweight product positioning',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'W/O 面霜 / 乳液', en: 'W/O cream / lotion' },
      notes: {
        zh: '推荐油相比例约22-35%，可与氢化蓖麻油、高熔点蜡/蜂蜡等复配增强稠度',
        en: 'recommended oil-phase range ~22-35%; can be paired with hydrogenated castor oil and high-melting waxes/beeswax to boost consistency',
      },
    },
    {
      system: { zh: '防晒产品（含有机/物理防晒剂）', en: 'sun care (with organic and/or physical UV filters)' },
      notes: { zh: '耐高低温特性使其适合对温度稳定性要求高的防晒配方', en: 'heat/freeze-thaw stability suits sun-care formulas with demanding stability requirements' },
    },
    {
      system: { zh: '多重乳液（W/O/W、O/W/O）', en: 'multiple emulsions (W/O/W, O/W/O)' },
    },
  ],
  typicalUseLevel: { min: 1.5, max: 2.5, unit: '%' },
  relatedIngredientSlugs: [],
  citations: [
    {
      id: 'surfachem-abilem90',
      supplier: 'Surfachem',
      documentTitle: 'ABIL EM 90 — Product Page',
      url: 'https://surfachem.com/products/abil-em-90',
      accessedDate: '2026-08-05',
      note: 'Distributor page; used for INCI, product type, and feature list (cold processable, halal/vegan, applications). Evonik\'s own product page was not directly fetched in this pass.',
    },
    {
      id: 'glenncorp-abilem90',
      supplier: 'Glenn Corp (an Azelis company)',
      documentTitle: 'ABIL EM 90 by Evonik PC — Product Page',
      url: 'https://glenncorp.com/shop/abil-em-90/',
      accessedDate: '2026-08-05',
      note: 'Distributor page hosting Evonik-sourced technical summary; used for recommended use level (1.5-2.5%), oil-phase range (22-35%), applications, and co-emulsifier guidance.',
    },
    {
      id: 'pdf4pro-abilem90-tds-mirror',
      supplier: 'Evonik (via pdf4pro.com document mirror)',
      documentTitle: 'ABIL EM 90 — Emulsifier for W/O Creams and Lotions (TDS mirror)',
      url: 'https://pdf4pro.com/view/abil-174-em-90-glenncorp-com-337d15.html',
      accessedDate: '2026-08-05',
      note: 'Third-party-hosted mirror of what appears to be the Evonik technical data sheet; used for HLB=5, liquid appearance, and the -25°C to +60°C stability range. Evonik.com itself returned no directly fetchable TDS in this pass.',
    },
    {
      id: 'search-abilem90-viscosity',
      supplier: 'Web search aggregation (SpecialChem-indexed)',
      documentTitle: 'ABIL EM 90 — Technical Datasheet (search snippet)',
      url: 'https://www.specialchem.com/cosmetics/product/evonik-abil-em-90',
      accessedDate: '2026-08-05',
      note: 'Viscosity value (300-700 cP at 25°C) found via search-engine snippet indexing this page; direct fetch returned HTTP 403, so this specific figure is not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['appearance'],
  lastUpdated: '2026-08-05',
})
