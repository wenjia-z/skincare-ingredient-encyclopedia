import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'klucel-hpc',
  category: 'polymer',
  inciName: 'Hydroxypropylcellulose',
  nameZh: '羟丙基纤维素',
  tradeNames: [{ name: 'Klucel MF', supplier: 'Ashland' }],
  chemicalClass: {
    zh: '非离子型纤维素醚（羟丙基醚化）',
    en: 'Nonionic cellulose ether (hydroxypropyl-substituted)',
  },
  chemicalStructureSummary: {
    zh: '羟丙基纤维素以纤维素（碱纤维素）与环氧丙烷反应，在脱水葡萄糖单元上引入羟丙基（-CH2CH(OH)CH3）取代基而制得，属非离子型水溶性高分子。其反应原理与羟乙基纤维素（HEC）相似，均以环氧化物与碱纤维素反应，但羟丙基纤维素使用的是环氧丙烷而非环氧乙烷，取代基上多出一个甲基支链且羟基为仲羟基而非伯羟基，极性明显低于HEC的羟乙基取代基。产品（Klucel MF级）外观为白色至类白色、无臭、可自由流动的粉末。由于极性降低、疏水性增强，羟丙基纤维素在纤维素醚类中较为特殊——不仅溶于水，还溶于多种极性有机溶剂（如乙醇最高约70%浓度、甲醇、异丙醇），并具有热塑性。',
    en: "Hydroxypropylcellulose (HPC) is made by reacting cellulose (as alkali cellulose) with propylene oxide to introduce hydroxypropyl (-CH2CH(OH)CH3) substituents onto the anhydroglucose backbone, giving a nonionic, water-soluble polymer. The reaction principle parallels hydroxyethylcellulose (HEC) — both react an epoxide with alkali cellulose — but HPC uses propylene oxide rather than ethylene oxide, so its substituent carries an extra methyl branch and a secondary (rather than primary) hydroxyl, making it markedly less polar than HEC's hydroxyethyl substituent. The Klucel MF grade is supplied as a white to off-white, odorless, free-flowing powder. Because of its lower polarity and greater hydrophobic character, HPC is unusual among cellulose ethers in being soluble not only in water but also in a range of polar organic solvents (ethanol up to roughly 70% concentration, methanol, isopropanol), and it is thermoplastic.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '水/有机溶剂双重溶解性从何而来', en: 'Where the dual water / organic-solvent solubility comes from' },
      explanation: {
        zh: '羟丙基取代基相较于HEC的羟乙基取代基多出一个甲基支链、极性更低，使纤维素主链获得足够的疏水特性，即便被稀释进入乙醇、异丙醇等极性有机溶剂中仍能保持溶解，而非像HEC那样只能在水中溶解。这一特性使羟丙基纤维素能够直接用于高酒精含量的水醇体系配方，是其区别于其他纤维素醚的关键结构基础。',
        en: "The extra methyl branch and lower polarity of the hydroxypropyl substituent (versus HEC's simple hydroxyethyl group) give the cellulose backbone enough hydrophobic character to remain soluble once diluted into polar organic solvents such as ethanol and isopropanol, not just water. This is the key structural feature that lets HPC be formulated directly into high-alcohol-content hydroalcoholic systems, unlike HEC which is water-soluble only.",
      },
    },
    {
      aspect: { zh: '热塑性与成膜性从何而来', en: 'Where the thermoplastic film-forming behavior comes from' },
      explanation: {
        zh: '与HEC相比，羟丙基取代同样削弱了纤维素链间原有的紧密氢键网络，但羟丙基支链引入的疏水性进一步降低了聚合物受热软化所需的能量，使其呈现热塑性（可随加热软化、便于熔融加工）；配方干燥成膜时，这种链间作用力的减弱使成膜呈柔韧、透明、耐水，而非其他部分水溶性胶类常见的脆性膜，因而支持其在免洗定型、驻留型产品中作为定型/成膜剂使用。',
        en: "As with HEC, the hydroxypropyl substitution disrupts the cellulose chains' native tight inter-chain hydrogen bonding, but the added hydrophobic character of the propyl branch further lowers the energy needed for the polymer to soften on heating, giving it thermoplastic behavior (it softens with heat, facilitating melt processing). When a formulation dries down, this same reduction in inter-chain forces produces flexible, transparent, water-resistant films rather than the more brittle films typical of some other partially water-soluble gums — supporting its use as a hold/fixative film former in leave-on, styling-type formats.",
      },
    },
    {
      aspect: { zh: '快速低粘度水化为何有利于多功能应用', en: 'Why rapid, low-viscosity hydration supports multifunctional use' },
      explanation: {
        zh: '羟丙基纤维素在典型用量下水化速度较快、达到的溶液粘度相对较低，配方师可将其作为轻质稳定剂、温和增稠剂或粘合剂使用，而不会大幅推高体系整体粘度；这一特性使其能在约pH 2-11的较宽范围内、跨越多种配方载体发挥辅助性增稠/稳定作用。',
        en: 'HPC hydrates comparatively quickly to a relatively low solution viscosity at typical use levels, letting formulators use it as a light-bodied stabilizer, mild thickener, or binder without substantially raising overall product viscosity. This property is exploited across the roughly pH 2-11 range it tolerates, supporting a secondary thickening/stabilizing role across a variety of formulation vehicles.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '干燥后形成柔韧、透明、耐水的薄膜；在典型用量下水化较快、成液粘度相对较低',
      en: 'dries down to a flexible, transparent, water-resistant film; hydrates relatively quickly to a comparatively low solution viscosity at typical use levels',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '所查阅的经销商资料未就起球倾向提供数据，标注为未知而非臆测',
      en: 'the distributor source reviewed did not provide pilling data; marked unknown rather than estimated',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '在纤维素醚类中较为特殊地兼具水与极性有机溶剂（乙醇、甲醇、异丙醇）双重溶解性，可跨水醇体系、无水体系与水性体系多种配方类型使用',
      en: 'unusual dual solubility in both water and polar organic solvents (ethanol, methanol, isopropanol) among cellulose ethers — versatile across hydroalcoholic, anhydrous and aqueous formulation types',
    },
    {
      zh: '热塑性、可成膜：干燥后形成柔韧透明耐水膜，且可随加热软化（用于药用热熔挤出等加工工艺），支持其在定型/驻留型产品中的成膜应用',
      en: 'thermoplastic and film-forming — dries to a flexible, transparent, water-resistant film, and softens with heat (used in pharmaceutical hot-melt extrusion processing), supporting styling/hold film-forming applications',
    },
    {
      zh: 'pH耐受范围较宽（约pH 2-11），且已在药用（符合USP/NF、Ph.Eur.、JP药典，用作口服片剂粘合剂）与个人护理领域长期应用，安全性及法规资料积累充分',
      en: 'broad pH tolerance (roughly pH 2-11) with a long track record of both pharmaceutical use (USP/NF, Ph.Eur., JP-compliant; oral tablet binder) and personal-care use, giving substantial accumulated safety and regulatory data',
    },
  ],
  weaknesses: [
    {
      zh: '作为非离子型增稠剂，其固有增稠效率不及离子型/缔合型增稠剂，通常作为轻质稳定剂/粘合剂而非主增稠剂使用（此为纤维素醚类的一般结构-功能推论，本次调研的经销商资料未给出该牌号的独立定量数据）',
      en: 'as a nonionic thickener, its inherent viscosity-building efficiency is lower than ionic/associative thickeners — typically used as a light-bodied stabilizer/binder rather than a primary high-viscosity thickener (a general structure-function inference for cellulose ethers; not independently quantified for this grade in the distributor source reviewed)',
    },
    {
      zh: '本次调研中Ashland官方产品页因证书问题无法直接抓取，所引用的数据来自经销商产品页而非一手Ashland技术资料表（TDS/PDS），牌号级别的具体粘度数值及推荐用量范围有待用一手资料进一步核实',
      en: "Ashland's own official product page could not be directly fetched in this research session (certificate/access issue), so the data cited here comes from a distributor product page rather than a first-party Ashland TDS/PDS — grade-specific numeric viscosity data and a precise recommended-use-level range should be independently re-verified against Ashland's own documentation",
    },
    {
      zh: '作为纤维素衍生物，与其他纤维素醚类似，在防腐不足时易受微生物/纤维素酶降解影响而损失粘度，且本身不具备显著乳化能力',
      en: 'as a cellulose derivative, it shares the general limitation of other cellulose ethers — susceptibility to viscosity loss from microbial/cellulase degradation without adequate preservation — and has no significant inherent emulsifying capability',
    },
  ],
  suitableSystems: [
    { system: { zh: '透明凝胶/乳霜（流变改性/稳定剂）', en: 'clear gels and creams (rheology modifier / stabilizer)' } },
    {
      system: { zh: '护发定型产品（发胶、免洗造型精华）', en: 'hair styling products (styling gels, leave-in treatments)' },
      notes: { zh: '经销商资料：用作洗发水及造型凝胶中的增稠剂；成膜性支持定型保持力', en: 'distributor source: used as a thickener in shampoos and styling gels; film-forming property supports styling hold' },
    },
    {
      system: { zh: '水醇/无水凝胶体系（如免洗手部消毒凝胶等含高浓度乙醇的产品）', en: 'hydroalcoholic / anhydrous gel systems (e.g. high-ethanol-content products such as hand sanitizer gel)' },
      notes: { zh: '基于其在乙醇/异丙醇中溶解性的推论，非一手资料对该具体品类的直接确认', en: 'inferred from its documented ethanol/isopropanol solubility; this specific product category was not independently confirmed via a primary Ashland source in this research session' },
    },
  ],
  relatedIngredientSlugs: ['natrosol-hec', 'benecel-hpmc'],
  citations: [
    {
      id: 'ericwchem-klucel-mf',
      supplier: 'Ashland (via ericwchem.com, distributor product page)',
      documentTitle: 'Ashland Klucel MF Hydroxypropyl Cellulose — Product Page',
      url: 'https://www.ericwchem.com/products/ashland-klucel-mf-hydroxypropyl-cellulose.html',
      accessedDate: '2026-08-06',
      note: "Used for INCI name, appearance, water/organic-solvent solubility (ethanol/methanol/isopropanol), thermoplastic and film-forming description, pH tolerance range, and general application areas (topical gels/creams, and personal-care thickener use in shampoos and styling gels). Ashland's own klucel-hydroxypropylcellulose product page (ashland.com) returned a TLS certificate error when fetched directly in this session, so this distributor mirror was used as the fallback source per the research workflow.",
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: [
    'suitableSystems (AP/deodorant, suncare, hand-sanitizer, shave-gel application breadth referenced in the research brief was not independently confirmed via a primary Ashland TDS in this session; only the hydroalcoholic-gel suitability inferred from sourced solubility data is included)',
    'typicalUseLevel (no numeric recommended-use-level data found in the accessible source; field omitted rather than estimated)',
    'grade-specific viscosity table (only qualitative "rapid, low-viscosity hydration" description found; numeric cP-by-grade values not confirmed)',
  ],
  lastUpdated: '2026-08-06',
})
