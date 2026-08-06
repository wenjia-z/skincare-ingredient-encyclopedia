import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'crodesta-f110',
  category: 'emulsifier',
  inciName: 'Sucrose Stearate (and) Sucrose Distearate',
  nameZh: '蔗糖硬脂酸酯（和）蔗糖二硬脂酸酯',
  tradeNames: [{ name: 'Crodesta F110', supplier: 'Croda' }],
  chemicalClass: {
    zh: '蔗糖脂肪酸酯类非离子乳化剂（单酯/二酯复配，PEG-free）',
    en: 'Sucrose fatty-acid ester blend, non-ionic emulsifier (mono-/di-ester blend, PEG-free)',
  },
  chemicalStructureSummary: {
    zh: '以蔗糖（含8个羟基的二糖，天然强亲水骨架）与硬脂酸经酯化反应制得，但与目录中已收录的高单酯型蔗糖硬脂酸酯（Sisterna SP70-C，单酯占比约70%，INCI仅标注"Sucrose Stearate"）不同，Crodesta F110的INCI为复合命名"Sucrose Stearate (and) Sucrose Distearate"，即刻意保留了更高比例的二酯（每个蔗糖分子连接两条硬脂酸链）与单酯的复配体系。这一结构设计思路与Olivem 1000（由两种橄榄油酯复配而成的独立命名体系）类似——通过复配不同酯化度的组分，而非追求单一高纯度酯，来实现特定的HLB与性能定位。',
    en: 'Made by esterifying sucrose (an 8-hydroxyl disaccharide with an intrinsically hydrophilic backbone) with stearic acid, but unlike the catalog\'s existing high-mono-ester sucrose stearate (Sisterna SP70-C, ~70% mono-ester, INCI listed simply as "Sucrose Stearate"), Crodesta F110 carries the compound INCI name "Sucrose Stearate (and) Sucrose Distearate" — a deliberate blend that retains a higher proportion of the di-ester species (two stearic-acid chains per sucrose molecule) alongside the mono-ester. This blending strategy parallels Olivem 1000 (a separately named blend of two olive-oil esters): combining components of different esterification degree, rather than a single high-purity ester, to hit a specific HLB and performance target.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: 'HLB 12（相较高单酯型蔗糖酯的HLB约15）从何而来', en: 'Where the HLB of 12 (vs. ~15 for a high-mono-ester sucrose ester) comes from' },
      explanation: {
        zh: '二酯组分消耗蔗糖分子8个羟基中的两个（各连接一条硬脂酸链），相较单酯（仅消耗一个）留下更少的游离羟基暴露于水中、且多带一条亲油尾链；将这部分二酯掺入单酯基质后，整体分子的"亲水头基占比"被拉低，因而HLB从高单酯型蔗糖酯（约15）降至Crodesta F110实测的12.0，定位为更均衡的O/W乳化剂而非单纯的增溶剂。',
        en: "Di-ester species consume two of sucrose's eight hydroxyls with stearic-acid chains (versus one for the mono-ester), leaving fewer free hydroxyls exposed to water and adding a second lipophilic tail per molecule. Blending this di-ester fraction into the mono-ester base pulls down the overall proportion of hydrophilic head-group area, lowering HLB from the ~15 of a high-mono-ester sucrose ester to Crodesta F110's reported 12.0 — positioning it as a more balanced O/W emulsifier rather than a pure solubilizer.",
      },
    },
    {
      aspect: { zh: '非碱性、非皂基体系中的低刺激性从何而来', en: 'Where the reduced irritation in non-alkaline, non-soap systems comes from' },
      explanation: {
        zh: '与其他蔗糖酯类似，其亲水头基是天然糖分子而非皂基所依赖的脂肪酸羧酸根（阴离子皂）；由于不涉及经典皂基O/W体系所需的碱性皂化环境与阴离子表活剂化学，配方无需依赖已知更易致刺激的碱性、皂基乳化路径，这正是Crodesta F110被定位为"降低非碱性、非皂基乳液刺激性""适合敏感肌"的结构基础。',
        en: 'Like other sucrose esters, its hydrophilic head is a natural sugar rather than the fatty-acid carboxylate (anionic soap) head group that classic soap-based emulsifiers rely on. Because the formula avoids the alkaline, soap-forming environment and anionic-surfactant chemistry that classic soap-type O/W creams require — a chemistry recognized as a driver of irritation — this is the structural basis for Crodesta F110\'s positioning as reducing irritation in non-alkaline, non-soap emulsions suited to sensitive skin.',
      },
    },
    {
      aspect: { zh: '冷法工艺适用性从何而来', en: 'Where the cold-process suitability comes from' },
      explanation: {
        zh: '与其他糖酯类乳化剂相同，其亲水性来自蔗糖分子固有的多羟基结构，无需像PEG链那样需要在水中充分水合，也无需像蜡状乳化剂那样需要加热熔融，因而支持冷法工艺，这与其被归入Croda"Blue Technology"（冷法工艺）产品线的定位一致。',
        en: 'As with other sugar-ester emulsifiers, its hydrophilicity comes from the intrinsic multi-hydroxyl sucrose structure, which does not need the extended hydration that PEG chains require, nor the melting step that waxy emulsifiers require — supporting cold-process formulation, consistent with its inclusion in Croda\'s "Blue Technology" cold-processing product line.',
      },
    },
  ],
  hlb: 12,
  appearance: {
    zh: '类白色粉末（25°C）',
    en: 'off-white powder (at 25°C)',
  },
  performance: {
    skinFeel: {
      zh: '供应商定位为温和、适合敏感肌，可降低非碱性非皂基乳液的刺激性',
      en: 'positioned by the supplier as mild and suited to sensitive skin, reducing irritation in non-alkaline, non-soap emulsions',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '定位于敏感肌、非碱性非皂基乳液，可降低刺激性（供应商数据）',
      en: 'positioned for sensitive skin and non-alkaline, non-soap emulsions, reducing irritation (supplier data)',
    },
    {
      zh: '通过COSMOS天然认证，属Croda"Blue Technology"冷法工艺产品线',
      en: 'COSMOS natural approved, and part of Croda\'s "Blue Technology" cold-process product line',
    },
    {
      zh: '应用场景覆盖防晒、晒后修护、身体/面部护理及眼部护理等多类温和定位配方',
      en: 'application range spans sun care, after-sun, body/face care, and eye-contour care — all mild-positioned formula types',
    },
  ],
  weaknesses: [
    {
      zh: '与其他硬脂酸型蔗糖酯类似，二酯比例较高时对高电解质环境的敏感性可能更明显，需留意配方中电解质用量（一般糖酯化学特性，参见目录中蔗糖硬脂酸酯词条）',
      en: 'as with other stearate-type sucrose esters, a higher di-ester fraction can increase sensitivity to high-electrolyte conditions — formulators should watch electrolyte loading (a general sucrose-ester chemistry consideration, see the catalog\'s sucrose stearate entry)',
    },
    {
      zh: '作为单酯/二酯复配粉末，批次间单酯:二酯比例的一致性会直接影响实际HLB与性能表现',
      en: 'as a mono-/di-ester powder blend, batch-to-batch consistency of the mono:di-ester ratio directly affects actual HLB and real-world performance',
    },
    {
      zh: '精确熔点、固含量及推荐使用浓度上下限等完整数值数据锁定于Croda需登录访问的技术数据表，公开渠道未能独立核实',
      en: 'precise melting point, solids content, and the exact recommended use-level range sit behind Croda\'s login-gated technical data sheet and could not be independently confirmed via public sources',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '敏感肌/非碱性O/W乳霜、乳液', en: 'sensitive-skin / non-alkaline O/W creams and lotions' },
      notes: { zh: '供应商核心定位场景', en: "the supplier's core positioning use case" },
    },
    {
      system: { zh: '防晒及晒后修护配方', en: 'sun-protection and after-sun formulas' },
    },
    {
      system: { zh: '冷法工艺配方', en: 'cold-process formulations' },
      notes: { zh: '属Croda Blue Technology冷法工艺产品线', en: "part of Croda's Blue Technology cold-process product line" },
    },
  ],
  typicalUseLevel: { min: 3, max: 6, unit: '%' },
  regulatoryNotes: {
    zh: '经确认标注COSMOS天然认证；另有间接检索来源提及ECOCERT认证，未经直接核实（见flaggedFields）',
    en: 'confirmed as COSMOS natural approved; an additional ECOCERT certification claim was found only via indirect search indexing and has not been independently confirmed (see flaggedFields)',
  },
  relatedIngredientSlugs: ['sucrose-stearate', 'olivem-1000'],
  citations: [
    {
      id: 'crodabeauty-crodesta-f110-product-page',
      supplier: 'Croda Beauty',
      documentTitle: 'Crodesta™ F110 | Croda Beauty (product page)',
      url: 'https://www.crodabeauty.com/en-gb/products/product/2012-crodesta_1_f110',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for exact INCI name ("Sucrose Stearate (and) Sucrose Distearate"), chemical family (carbohydrate, sugars & derivatives), functions (counter-irritant, skin conditioning, emulsifier), physical form (powder), applications list, positioning (mild O/W emulsifier for sensitive skin, reduces irritation in non-alkaline non-soap emulsions), and COSMOS natural certification. The full technical data sheet (HLB, melting point, solids %) requires a Croda account login and was not accessible in this session.',
    },
    {
      id: 'crodesta-f110-aggregated-hlb-uselevel',
      supplier: 'Croda (aggregated via SpecialChem / Croda Pharma / Croda Health Care listings)',
      documentTitle: 'Crodesta F110 — aggregated HLB, use-level, and ECOCERT data',
      url: 'https://www.specialchem.com/cosmetics/product/croda-crodesta-f110',
      accessedDate: '2026-08-06',
      note: 'HLB (12.0), recommended use level (3-6%), and an ECOCERT-approval claim were found via a web-search summary drawing on SpecialChem/Croda Pharma/Croda Health Care listings; direct fetch of the SpecialChem product page returned HTTP 403 (login-gated) in this session, so these figures are not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'typicalUseLevel', 'regulatoryNotes'],
  lastUpdated: '2026-08-06',
})
