import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'etocas-30',
  category: 'emulsifier',
  inciName: 'PEG-30 Castor Oil',
  nameZh: 'PEG-30蓖麻油',
  tradeNames: [{ name: 'Etocas 30', supplier: 'Croda' }],
  chemicalClass: {
    zh: '蓖麻油乙氧基化衍生物类非离子乳化剂/增溶剂',
    en: 'Ethoxylated castor oil non-ionic emulsifier/solubilizer',
  },
  chemicalStructureSummary: {
    zh: '蓖麻油是一种富含蓖麻油酸（一种链上带有游离羟基的C18脂肪酸，在常见甘油三酯中较为罕见）的甘油三酯。乙氧基化反应将约30摩尔环氧乙烷接枝到蓖麻油甘油三酯分子的游离羟基（及部分酯基）位点上，形成一个以整条支链甘油三酯为疏水"锚"、多条PEG链为亲水"臂"的多臂型非离子表面活性剂。这与聚山梨醇酯、PEG-100硬脂酸酯等以单一线性脂肪链为疏水锚的PEG型非离子乳化剂在分子构型上有本质区别。',
    en: 'Castor oil is a triglyceride particularly rich in ricinoleic acid — a C18 fatty acid bearing a free hydroxyl group along its chain, unusual among common triglycerides. Ethoxylation grafts roughly 30 moles of ethylene oxide onto the free hydroxyl sites (and, to a lesser extent, the ester sites) of the castor-oil triglyceride, producing a multi-armed nonionic surfactant with a whole branched triglyceride as the hydrophobic "anchor" and multiple PEG chains as hydrophilic "arms." This is structurally distinct from PEG-type nonionics built on a single linear fatty chain, such as polysorbates or PEG-100 Stearate.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '对香精/精油的增溶能力从何而来', en: 'Where the fragrance/essential-oil solubilizing power comes from' },
      explanation: {
        zh: '多臂型甘油三酯锚结构能够以类似"多臂章鱼"的方式围绕小分子亲脂物（如香精萜烯类成分）形成混合胶束，相较单一线性疏水链的乳化剂更易在中等用量下将这些小分子亲脂物拉入水相并稳定分散，这与其被描述为"极佳的油包水乳化剂、优异的油溶剂"以及能够增溶d-柠檬烯、松油等成分的能力相符。',
        en: "The multi-armed triglyceride anchor can wrap around small lipophilic molecules (e.g. fragrance terpenes) somewhat like a multi-armed structure forming mixed micelles, making it more effective than a single-linear-chain emulsifier at pulling these small lipophiles into the water phase and stabilizing them at moderate use levels — consistent with its description as a superb oil-in-water emulsifier and excellent oil solubilizer capable of emulsifying components such as d-limonene and pine oil.",
      },
    },
    {
      aspect: { zh: 'HLB处于中等偏低区间（乙氧基化摩尔数较低）从何而来', en: 'Where the moderate/sub-12 HLB (from its comparatively low ethoxylation) comes from' },
      explanation: {
        zh: '在Etocas同系列产品中，摩尔数越低（如30摩尔，相较100/200摩尔等级），相对固定不变的蓖麻油甘油三酯疏水锚而言，接枝的PEG亲水质量占比就越小，因此HLB相应较低；这也是为何行业资料将5-30摩尔的Etocas成员归为HLB低于12的一类（该数值来自间接检索来源，未直接核实，见flaggedFields）。',
        en: "Within the Etocas product family, lower ethoxylation levels (30 moles, versus 100/200-mole grades) carry proportionally less hydrophilic PEG mass relative to the fixed lipophilic castor-oil triglyceride anchor, so HLB is correspondingly lower — consistent with industry references classing the 5-30-mole Etocas members as having HLB below 12 (this figure was found via indirect search indexing and not independently confirmed by direct fetch — see flaggedFields).",
      },
    },
    {
      aspect: { zh: '低泡性与颜料润湿能力从何而来', en: 'Where the low-foaming behavior and pigment-wetting ability come from' },
      explanation: {
        zh: '多臂型非离子结构体积较大，在气-水界面的排列密度和速度不及小分子线性离子表活剂，因而起泡性较低；同时其亲水PEG臂能有效润湿并分散颜料颗粒表面，这与其被描述为"水溶性润滑剂与颜料润湿剂"、"低泡"特性的结构基础一致。',
        en: 'The bulky multi-armed nonionic structure packs less densely and more slowly at the air-water interface than small, linear ionic surfactants, giving it comparatively low foaming; its hydrophilic PEG arms also effectively wet and disperse pigment particle surfaces, consistent with its description as a water-soluble lubricant and pigment-wetting agent with low-foaming characteristics.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '主要作为增溶剂/分散剂使用而非滋润型乳化剂，肤感数据未见供应商专门说明',
      en: 'used primarily as a solubilizer/dispersant rather than a rich emollient emulsifier; no supplier data specifically addresses skin feel',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '对香精、精油等小分子亲脂物具优异增溶能力，可用于微乳体系',
      en: 'excellent solubilizing power for fragrance, essential oils, and other small lipophilic molecules, suitable for microemulsion systems',
    },
    {
      zh: '兼具颜料润湿/分散功能，适用于彩妆配方；低泡特性有利于免洗类产品',
      en: 'also functions as a pigment-wetting/dispersing agent suited to color cosmetics; low-foaming behavior benefits leave-on product types',
    },
    {
      zh: '可用于沐浴/淋浴产品、止汗剂/除臭剂及防晒产品等多类配方（供应商应用列表，非直接查证，见flaggedFields）',
      en: 'usable across bath/shower products, antiperspirants/deodorants, and sun-protection formulas (from supplier applications listing; not independently confirmed — see flaggedFields)',
    },
  ],
  weaknesses: [
    {
      zh: '作为植物油（蓖麻油）衍生物，原料批次间蓖麻油酸含量可能存在天然波动',
      en: 'as a vegetable-oil (castor oil) derivative, the ricinoleic-acid content of the feedstock can carry natural batch-to-batch variability',
    },
    {
      zh: 'HLB处于中等偏低区间，更适合作为增溶剂/助乳化剂使用，若作为单一主乳化剂用于稳定高比例油相的膏霜，通常需要复配其他乳化剂',
      en: 'its moderate-to-low HLB makes it better suited as a solubilizer/co-emulsifier than as a sole primary emulsifier for creams stabilizing a high oil-phase fraction, which typically need a co-emulsifier',
    },
    {
      zh: '精确HLB数值、外观描述及推荐用量等完整数据未能通过公开渠道直接核实（Croda官方技术数据表需登录访问）',
      en: 'the precise HLB value, appearance description, and recommended use level could not be independently confirmed via public sources (Croda\'s official technical data sheet requires account login)',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '香精/精油增溶体系（爽肤水、喷雾类产品）', en: 'fragrance/essential-oil solubilization systems (toners, mist-type products)' },
    },
    {
      system: { zh: '彩妆颜料润湿/分散体系', en: 'color-cosmetic pigment wetting/dispersion systems' },
    },
    {
      system: { zh: '沐浴/淋浴、止汗剂/除臭剂及防晒产品', en: 'bath/shower, antiperspirant/deodorant, and sun-protection products' },
      notes: { zh: '来自供应商应用分类，未逐一直接核实', en: 'from supplier application categories, not individually independently verified' },
    },
  ],
  typicalUseLevel: { min: 1, max: 5, unit: '%' },
  relatedIngredientSlugs: ['croduret-60', 'polysorbate-80'],
  citations: [
    {
      id: 'ciguide-peg30-castor-oil',
      supplier: 'Cosmetic Ingredients Guide (ci.guide)',
      documentTitle: 'PEG-30 Castor Oil | Incrocas 30 | Cosmetic Ingredients Guide',
      url: 'https://ci.guide/essential-oils-fixed-plant-oils/peg-30-castor-oil',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for INCI name confirmation, function description (O/W emulsifier, oil solubilizer, dispersant, water-soluble lubricant/pigment-wetting agent, microemulsion formation, ability to emulsify d-limonene and pine oil), and general low-foaming/broad surfactant-compatibility description.',
    },
    {
      id: 'knowde-etocas30-listing',
      supplier: 'Croda (via Knowde)',
      documentTitle: 'Etocas 30 — Croda product listing (Knowde)',
      url: 'https://www.knowde.com/stores/croda/products/etocas-30',
      accessedDate: '2026-08-06',
      note: 'Product/trade-name and general classification (triglyceride-derived emulsifier) found via search indexing of this Knowde listing; direct fetch returned no usable content in this session, so figures from this source are not independently confirmed first-hand.',
    },
    {
      id: 'cir-pegylated-oils-search-synthesis',
      supplier: 'Cosmetic Ingredient Review (CIR)',
      documentTitle: 'Amended Safety Assessment of PEGylated Oils as Used in Cosmetics',
      url: 'https://www.cir-safety.org/sites/default/files/pegoil122012final_faa-final%20for%20posting.pdf',
      accessedDate: '2026-08-06',
      note: 'Appearance ("pale yellow viscous liquid" for PEG-30/-35/-40 castor oil) and the comparative HLB statement ("5-30 mole members have HLB below 12") were found via a web-search summary indexing this CIR report; a direct fetch of the PDF returned unparseable binary content in this session, so these facts are not independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'etocas30-aggregated-uselevel-applications',
      supplier: 'Croda (aggregated via web-search summary of Croda Home Care / SpecialChem listings)',
      documentTitle: 'Etocas 30 — aggregated applications and use-level data',
      accessedDate: '2026-08-06',
      note: 'Applications (bath/shower, antiperspirant/deodorant, sun protection) and the 1-5% topical use-level range were found via a web-search summary; the Croda Home Care product-finder page for Etocas 30 returned HTTP 404 when fetched directly in this session, so these figures are not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['suitableSystems', 'typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
