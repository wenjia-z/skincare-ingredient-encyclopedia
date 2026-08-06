import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'crodafos-cs20a',
  category: 'emulsifier',
  inciName: 'Cetearyl Alcohol (and) Ceteth-20 Phosphate (and) Dicetyl Phosphate',
  nameZh: '鲸蜡硬脂醇（和）鲸蜡醇聚醚-20磷酸酯（和）磷酸二鲸蜡酯',
  tradeNames: [{ name: 'Crodafos CS20A', supplier: 'Croda' }],
  chemicalClass: {
    zh: '脂肪醇磷酸酯类阴离子/非离子复配乳化蜡体系（高乙氧基化等级）',
    en: 'Fatty-alcohol phosphate-ester emulsifier blend (anionic/nonionic self-emulsifying wax system, higher-ethoxylation grade)',
  },
  chemicalStructureSummary: {
    zh: '与同系列的Crodafos CES结构类似，同样由鲸蜡硬脂醇、磷酸二鲸蜡酯与一种鲸蜡醇聚醚磷酸酯复配而成，区别在于CS20A所用的乙氧基化组分为鲸蜡醇聚醚-20磷酸酯（20摩尔环氧乙烷，而CES为10摩尔），即PEG链更长。更长的PEG链意味着该复配体系整体亲水性更高，作为高活性物含量（约50%）、可倾倒型乳液的主乳化剂使用，需现场中和（in-situ neutralisation）以电离磷酸基而触发乳化。',
    en: 'Structurally similar to Crodafos CES from the same Croda phosphate-ester family — a blend of Cetearyl Alcohol, Dicetyl Phosphate, and an ethoxylated ceteth-phosphate component — but CS20A uses Ceteth-20 Phosphate (20 moles of ethylene oxide) in place of CES\'s Ceteth-10 Phosphate (10 moles), i.e. a longer PEG chain. The longer PEG chain raises the overall hydrophilicity of the blend; it is used as a primary emulsifier for high-active-content (~50%) pourable emulsions and requires in-situ neutralization to ionize the phosphate group and trigger emulsification.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '20摩尔乙氧基化（相对CES的10摩尔）为何带来更易倾倒、耐受更高活性物负荷的体系', en: 'Why 20-mole ethoxylation (vs. CES\'s 10-mole) gives a more pourable, higher-active-load system' },
      explanation: {
        zh: '鲸蜡醇聚醚-20磷酸酯上更长的PEG链使该复配体系整体亲水性显著提升，形成的液晶/凝胶网络比CES更"松散"、粘度更低，因此能在高达约50%的活性物（如油相、彩妆颜料浆）负荷下仍保持可倾倒、可喷雾的低-中粘度，这与CES更厚重、更具附着力的定位形成互补。',
        en: "The longer PEG chain on Ceteth-20 Phosphate substantially raises the blend's overall hydrophilicity, giving a looser, lower-viscosity liquid-crystal/gel network than CES; this is what lets the system stay pourable/sprayable at active loads of up to roughly 50% (oil phase, color-cosmetic pigment slurries, etc.), complementing CES's heavier, more substantive positioning.",
      },
    },
    {
      aspect: { zh: '"需现场中和"、宽pH耐受性从何而来', en: 'Where the "requires in-situ neutralization" and wide pH tolerance come from' },
      explanation: {
        zh: '该体系以磷酸酯的酸式形态供货，磷酸基团需通过加入碱（现场中和，in-situ neutralisation）才能电离带上负电荷，从而驱动乳化并形成阴离子稳定的界面膜；由于乳化触发依赖于中和度而非固定的酯基结构，配方师可以在较宽的pH范围内调节中和程度，这是其"宽pH耐受性"的结构基础。',
        en: 'The system is supplied in the acid form of the phosphate ester; the phosphate group must be ionized by adding a base in situ (in-situ neutralization) to develop the negative charge that drives emulsification and forms an anionically stabilized interfacial film. Because emulsification is triggered by the degree of neutralization rather than a fixed ester structure, formulators can tune it across a comparatively wide pH range — the structural basis for its wide pH tolerance.',
      },
    },
    {
      aspect: { zh: '天然肤感附着力/调理性从何而来', en: 'Where the natural skin substantivity/conditioning benefit comes from' },
      explanation: {
        zh: '与Crodafos CES相同，磷酸基团的离子性使其在皮肤表面残留的膜层具有较强的附着力，而非像纯非离子酯类膜那样容易被简单擦拭或冲洗掉，这一共有结构特征是该系列被描述为"对皮肤具天然附着力并带来调理效益"的基础。',
        en: 'As with Crodafos CES, the ionic phosphate group gives the residual skin-surface film stronger adherence than a purely nonionic ester film, which is not as easily wiped or rinsed away — this shared structural feature is the basis for the family being described as "naturally substantive to the skin" with conditioning benefits.',
      },
    },
  ],
  appearance: {
    zh: '固体蜡状薄片/颗粒（pastille），25°C下呈颗粒状固体',
    en: 'solid waxy pastilles at 25°C',
  },
  performance: {
    skinFeel: {
      zh: '供应商称具天然附着力与调理效益；因活性物负荷高，肤感因具体配方而异，整体偏轻薄可倾倒质地',
      en: 'supplier describes natural substantivity and conditioning benefit; because it is used at high active loads, exact skin feel varies by formula, but the system is generally positioned for lighter, pourable textures',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '高活性物含量（约50%）主乳化剂，适合高负荷可倾倒型乳液，粘度可控（供应商数据）',
      en: 'a high-active-content (~50%) primary emulsifier suited to high-load pourable emulsions with controllable viscosity (supplier data)',
    },
    {
      zh: '宽pH耐受性，支持现场中和以调节乳化触发；天然肤感附着力，兼具调理效益',
      en: 'wide pH tolerance supporting in-situ neutralization to tune emulsification; natural skin substantivity with conditioning benefit',
    },
    {
      zh: '具RSPO、清真认证及IECIC合规标识',
      en: 'carries RSPO, Halal certification, and IECIC compliance listings',
    },
  ],
  weaknesses: [
    {
      zh: '含阴离子磷酸基，与阳离子调理剂/聚合物复配需额外验证相容性，为烷基磷酸酯类乳化剂普遍特性',
      en: 'carries an anionic phosphate group, so compatibility with cationic conditioning agents/polymers needs extra verification — a general characteristic of alkyl-phosphate emulsifiers',
    },
    {
      zh: '需现场中和这一额外工艺步骤，相较预中和/非离子乳化剂配方流程更复杂',
      en: 'the required in-situ neutralization step adds process complexity compared with pre-neutralized or nonionic emulsifier workflows',
    },
    {
      zh: 'HLB、精确使用浓度上限/下限及pH范围等完整数值数据锁定于Croda需登录访问的技术数据表，公开渠道未能独立核实',
      en: 'the full numeric TDS (HLB, precise use-level range, pH range) sits behind Croda\'s login-gated technical data sheet and could not be independently confirmed via public sources',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '液体粉底等高活性物负荷彩妆', en: 'liquid foundation and other high-active-load color cosmetics' },
    },
    {
      system: { zh: '身体喷雾/乳液、脱毛膏等可倾倒/喷雾型产品', en: 'body sprays/milks, depilatory creams, and other pourable/sprayable products' },
      notes: { zh: '供应商核心定位场景：中低粘度、可倾倒配方的粘度控制', en: "the supplier's core positioning use case: viscosity control for medium-to-low-viscosity, pourable formulas" },
    },
    {
      system: { zh: '晒后修护、身体护理、发色/烫发、剃须及防晒产品', en: 'after-sun, body care, hair color/perm, shaving, and sun-protection products' },
    },
  ],
  relatedIngredientSlugs: ['crodafos-ces', 'cetearyl-alcohol-ceteareth-20'],
  citations: [
    {
      id: 'crodabeauty-crodafos-cs20a-product-page',
      supplier: 'Croda Beauty',
      documentTitle: 'SP Crodafos™ CS20A MBAL | Croda Beauty (product page)',
      url: 'https://www.crodabeauty.com/en-gb/products/product/4228-sp_1_crodafos_1_cs20a_1_mbal',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for INCI name, chemical family, function (primary O/W emulsifier designed for pourable formulations with high active concentrations), key characteristics (naturally substantive/conditioning, wide pH tolerance, requires in-situ neutralization), applications list, and certifications (RSPO, Halal, IECIC).',
    },
    {
      id: 'cosmetihub-crodafos-cs20a-crosscheck',
      supplier: 'Cosmeti Hub',
      documentTitle: 'Crodafos CS20A-PA-(MH) — product listing',
      url: 'https://cosmetihub.com/products/crodafos-cs20a',
      accessedDate: '2026-08-06',
      note: 'Directly fetched distributor listing, used to cross-check INCI name (consistent with the Croda Beauty page) and general function/application description.',
    },
    {
      id: 'crodafos-cs20a-aggregated-actives-uselevel',
      supplier: 'Croda (aggregated via SpecialChem / UL Prospector listings)',
      documentTitle: 'Crodafos CS20A — aggregated active-content and applications data',
      url: 'https://www.specialchem.com/cosmetics/product/croda-sp-crodafos-cs20a-mbal',
      accessedDate: '2026-08-06',
      note: 'The "50% active content" figure and "no DEA" claim were found via a web-search summary drawing on SpecialChem/UL Prospector listings; direct fetch of the SpecialChem product page returned HTTP 403 (login-gated) in this session, so these figures are not independently confirmed first-hand — see flaggedFields. No numeric HLB or use-level percentage was found in any accessible source in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance.skinFeel'],
  lastUpdated: '2026-08-06',
})
