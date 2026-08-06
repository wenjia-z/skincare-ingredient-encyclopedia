import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'silsense-dw-18',
  category: 'emulsifier',
  inciName: 'Dimethicone PEG-7 Isostearate',
  nameZh: 'PEG-7聚二甲基硅氧烷异硬脂酸酯',
  tradeNames: [{ name: 'Silsense DW-18', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '硅氧烷共聚醇酯类非离子乳化剂（水分散性硅油乳化剂）',
    en: 'Silicone-type non-ionic emulsifier (dimethicone copolyol ester); water-dispersible silicone',
  },
  chemicalStructureSummary: {
    zh: '由异硬脂酸与经PEG-7改性的聚二甲基硅氧烷（硅氧烷共聚醇，dimethicone copolyol）发生酯化反应制得：疏水的聚二甲基硅氧烷主链与支链异硬脂酸尾段提供与硅油/有机油的相容性及柔滑铺展性，而接枝的PEG-7亲水链段赋予分子水分散性。整体是一种100%活性的液态蜡酯，CAS号133448-16-5。',
    en: 'Made by esterifying isostearic acid with a PEG-7-modified polydimethylsiloxane (a dimethicone copolyol): the hydrophobic dimethicone backbone plus the branched isostearate tail provide compatibility with silicone and organic oils and a smooth, slippery spread, while the grafted PEG-7 hydrophilic segment confers water-dispersibility. The overall molecule is a 100%-active liquid wax ester. CAS 133448-16-5.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '水分散性（有别于普通二甲基硅氧烷）从何而来', en: 'Where the water-dispersibility (unlike plain dimethicone) comes from' },
      explanation: {
        zh: '普通二甲基硅氧烷油几乎不溶于水，无法单独分散进入水相；在硅氧烷主链上接枝PEG-7亲水链段后，分子获得两亲性头基，这正是该原料能够分散于水中、并作为O/W硅油-水体系助乳化剂使用的结构基础，而不需要额外的乳化剂来搭载它。',
        en: 'Plain dimethicone fluids are essentially water-insoluble and cannot disperse into an aqueous phase on their own; grafting a PEG-7 hydrophilic segment onto the siloxane backbone gives the molecule an amphiphilic head — the structural reason this silicone can disperse into water and function as a co-emulsifier for O/W silicone-in-water systems, rather than needing a separate emulsifier to carry it.',
      },
    },
    {
      aspect: { zh: '不油腻、提升滑爽感从何而来', en: 'Where the non-greasy, slip-enhancing skin feel comes from' },
      explanation: {
        zh: '支链异硬脂酸酯尾段与柔顺的硅氧烷主链分子间作用力都较弱，铺展后在皮肤表面留下的膜层薄且流动性好，这是其被描述为"不油腻""高滑爽度"感官特性的结构原因，与未改性、高粘度二甲基硅氧烷留下的厚重感形成对比。',
        en: 'Both the branched isostearate ester tail and the flexible siloxane backbone have low intermolecular cohesion, so the film left on skin after application is thin and highly mobile — giving the "non-greasy," high-slip sensory profile reported for this ingredient, in contrast to the heavier residue left by unmodified, high-viscosity dimethicone fluids.',
      },
    },
    {
      aspect: { zh: '助乳化及降低液滴粒径的作用从何而来', en: 'Where the co-emulsifying / droplet-size-reduction function comes from' },
      explanation: {
        zh: '该分子在油水界面处以硅氧烷/异硬脂酸酯尾段插入油相、PEG-7链段留在水相的方式排列，与常规PEG酯型助乳化剂降低界面张力的机制相同，这是其被描述为可降低液滴/颗粒粒径、并在与主乳化剂配合时帮助稳定O/W乳液的结构基础。',
        en: 'Because the molecule sits at the oil-water interface with its siloxane/isostearate tail in the oil phase and its PEG-7 segment in the water phase, it can lower interfacial tension in the same way a conventional PEG-ester co-emulsifier does — the basis for its reported ability to reduce droplet/particle size and help stabilize O/W emulsions when combined with a primary emulsifier.',
      },
    },
  ],
  appearance: {
    zh: '水分散性液态蜡酯',
    en: 'water-dispersible liquid wax ester',
  },
  performance: {
    skinFeel: {
      zh: '水分散性液态硅蜡酯，肤感清爽不油腻，可减少粘腻感、提升延展性',
      en: 'a water-dispersible liquid silicone wax ester with a light, non-greasy feel that reduces tackiness and improves spreadability',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '水分散性硅油，可赋予硅油特有的柔滑调理感，且不像不溶性高分子量二甲基硅氧烷那样容易产生厚重堆积感（供应商描述）',
      en: 'a water-dispersible silicone that delivers the conditioning/slip benefits of silicone without the heavy buildup typical of insoluble high-MW dimethicone fluids (supplier description)',
    },
    {
      zh: '多功能助乳化剂，兼具降低粘腻感、增加光泽等作用，适用于透明/近透明配方体系',
      en: 'a multi-functional co-emulsifier that also reduces tackiness and enhances gloss, suitable for clear/near-clear formulation systems',
    },
    {
      zh: '素食主义（vegan）友好、全合成来源，无动物源顾虑',
      en: 'vegan-suitable and fully synthetic, with no animal-sourcing concerns',
    },
  ],
  weaknesses: [
    {
      zh: '本次研究可访问的信息源中未查得HLB值或推荐用量百分比——Lubrizol产品查找器及Knowde页面在本次抓取中均返回空白内容，故此条目不纳入相关数字，以免臆造',
      en: 'no HLB value or recommended use-level percentage was found in the sources accessible during this research pass — the Lubrizol product-finder and Knowde pages both returned blank content on direct fetch, so no such figures are included here to avoid inventing them',
    },
    {
      zh: '作为助乳化剂而非主乳化剂，通常需与主O/W或W/Si乳化剂配合使用，而非单独承担乳化功能',
      en: 'as a co-emulsifier rather than a primary emulsifier, it is generally used alongside a primary O/W or W/Si emulsifier rather than carrying the emulsification function alone',
    },
    {
      zh: '属PEG（聚氧乙烯）改性硅油，不符合"无PEG"配方定位',
      en: 'being a PEG (ethoxylated) silicone, it does not fit a PEG-free formulation positioning',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '沐浴露、护发素、洗发水、剃须产品', en: 'body wash, conditioners, shampoos, shaving products' },
      notes: { zh: '供应商应用列表', en: 'per supplier application list' },
    },
    {
      system: { zh: '透明/近透明配方体系', en: 'clear / near-clear formulation systems' },
      notes: {
        zh: '需要硅油调理感但不希望体系浑浊的场景（供应商描述）',
        en: 'use cases needing silicone conditioning without introducing cloudiness (supplier description)',
      },
    },
  ],
  relatedIngredientSlugs: ['abil-em-90', 'dowsil-es-5600'],
  citations: [
    {
      id: 'trulux-silsense-dw18-product-page',
      supplier: 'Trulux (distributor)',
      documentTitle: 'SILSENSE DW-18 SILICONE (DIMETHICONE PEG-7 ISOSTEARATE) — Product Data',
      url: 'https://trulux.com/products/silsense-dw-18-silicone-dimethicone-peg-7-isostearate/',
      accessedDate: '2026-08-06',
      note: 'Successfully fetched directly. Used for INCI name, CAS number (133448-16-5), chemical composition/formation (isostearic acid esterified with alkyloxy-modified dimethicone copolyol), functions (co-emulsifier, sensory modifier, conditioner, slip agent, tack reducer, gloss enhancer), applications, and vegan status.',
    },
    {
      id: 'specialchem-silsense-dw18-tds',
      supplier: 'Lubrizol (via SpecialChem)',
      documentTitle: 'SilSense DW-18 silicone by Lubrizol - Technical Datasheet',
      url: 'https://www.specialchem.com/cosmetics/product/lubrizol-silsense-dw-18-silicone',
      accessedDate: '2026-08-06',
      note: 'Direct fetch of this page returned HTTP 403; used only as a cross-check of the "dimethicone copolyol ester" descriptor via the search-result listing title, not for numeric data.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh'],
  lastUpdated: '2026-08-06',
})
