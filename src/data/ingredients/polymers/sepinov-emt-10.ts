import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sepinov-emt-10',
  category: 'polymer',
  inciName: 'Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer',
  nameZh: '丙烯酸羟乙酯/丙烯酰二甲基牛磺酸钠共聚物',
  tradeNames: [{ name: 'Sepinov EMT 10', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '预中和合成丙烯酸类共聚物（磺酸型，粉末状）',
    en: 'Pre-neutralized synthetic acrylic copolymer (sulfonate-type, powder form)',
  },
  chemicalStructureSummary: {
    zh: '由非离子的丙烯酸羟乙酯与阴离子的丙烯酰二甲基牛磺酸钠（一种磺酸型单体，结构上与AMPS/2-丙烯酰胺基-2-甲基丙磺酸类似）共聚而成，以预中和的白色粉末形式供应，遇水或油相可直接分散，无需额外中和步骤。CAS号111286-86-3。该聚合物兼具增稠与乳化稳定双重功能，供应商称之为"2合1"粉末聚合物，可用于冷法或热法工艺，直接分散于油相或水相中。',
    en: 'A copolymer of nonionic hydroxyethyl acrylate and the anionic sulfonate monomer sodium acryloyldimethyl taurate (structurally related to AMPS / 2-acrylamido-2-methylpropane sulfonic acid), supplied as a pre-neutralized white powder that disperses directly in water or the oil phase with no separate neutralization step required. CAS 111286-86-3. The polymer combines thickening and emulsion-stabilizing function in one material — marketed by the supplier as a "2-in-1" powder polymer — and can be used in cold- or hot-process manufacturing, dispersed directly into either the oil or water phase.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '宽pH稳定增稠能力从何而来', en: 'Where the wide-pH-range thickening stability comes from' },
      explanation: {
        zh: '丙烯酰二甲基牛磺酸钠带有磺酸基（-SO3⁻），其解离状态几乎不受pH影响（磺酸的pKa远低于羧酸），不同于依赖羧酸根解离的传统卡波姆类聚合物；因此该共聚物在pH 3-12的宽泛区间内都能维持链上负电荷密度基本恒定，增稠所需的静电排斥与束水能力不会像羧酸类聚合物那样随pH下降而明显减弱，这是其被供应商标注"宽pH范围"稳定性的结构基础。',
        en: 'Sodium acryloyldimethyl taurate carries a sulfonate group (-SO3-) whose ionization state is essentially pH-independent (a sulfonic acid\'s pKa is far lower than a carboxylic acid\'s), unlike traditional Carbomer-type polymers that rely on carboxylate ionization. This lets the copolymer maintain a largely constant negative charge density across the wide pH 3-12 range the supplier lists, so the electrostatic repulsion and water-binding that drive thickening do not fade at low pH the way they do for carboxylate-based polymers — the structural basis for its supplier-cited wide-pH stability.',
      },
    },
    {
      aspect: { zh: '"2合1"增稠-乳化双重功能从何而来', en: 'Where the "2-in-1" thickening + emulsifying dual function comes from' },
      explanation: {
        zh: '共聚物同时携带亲水性强的磺酸基链段（提供增稠、束水能力）与非离子的丙烯酸羟乙酯链段，遇水膨胀形成粘弹网络的同时，也能在分散的油滴周围形成保护层、阻碍油滴聚并，因此单一聚合物即可同时承担"稳定+增稠+质构调节"的功能，这是其相较于"乳化剂+增稠剂"两组分体系的效率优势，供应商数据显示可稳定高达40-45%的油相。',
        en: 'The copolymer carries both a strongly hydrophilic sulfonate-bearing segment (delivering thickening and water-binding) and a nonionic hydroxyethyl acrylate segment; on hydration it swells into a viscoelastic network while also forming a protective layer around dispersed oil droplets that hinders coalescence. A single polymer can therefore handle stabilization, thickening, and texture in one step — an efficiency advantage over a separate emulsifier + thickener combination — with supplier data showing it can stabilize up to 40-45% oil phase.',
      },
    },
    {
      aspect: { zh: '良好电解质耐受性从何而来', en: 'Where the good electrolyte tolerance comes from' },
      explanation: {
        zh: '供应商将其良好的耐电解质性归因于其浓缩粉末形态：由于产品以高浓度粉末形式加入配方，实际配方中聚合物相对于游离电解质离子的有效浓度更高，缔合网络受盐离子屏蔽效应的相对影响被稀释，因此在多数电解质体系中仍能维持较好的增稠与稳定表现，优于许多依赖纯羧酸根静电排斥的传统丙烯酸类增稠剂。',
        en: "The supplier attributes its good electrolyte tolerance to its concentrated powder form: because the polymer is introduced at high local concentration, the polymer network's effective concentration relative to free electrolyte ions in the finished formula is higher, diluting the relative impact of ionic screening on the associative network. This lets it maintain reasonably good thickening and stabilization in most electrolyte-containing systems, outperforming many traditional acrylic thickeners that rely purely on carboxylate electrostatic repulsion.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"清爽缎光"质地，肤感光滑柔软、不粘腻',
      en: 'described by the supplier as giving a "satiny-fresh" texture — smooth, soft, and non-tacky on skin',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '兼具增稠与乳化稳定双重功能，属于"聚合物乳化剂/稳定剂"一类，而非传统低分子表面活性剂型乳化剂',
      en: 'combines thickening and emulsion-stabilizing function — classed as a "polymeric emulsifier/stabilizer" rather than a traditional low-molecular-weight surfactant emulsifier',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '预中和粉末形态，冷法/热法均可直接分散于油相或水相，无需额外中和步骤，工艺简便',
      en: 'a pre-neutralized powder that disperses directly into either the oil or water phase, cold- or hot-process, with no separate neutralization step — simplifying manufacturing',
    },
    {
      zh: '油相稳定能力强（供应商数据：可稳定高达40-45%的油相），适合高油分、丰盈质地的乳霜/凝胶乳配方',
      en: 'strong oil-stabilizing capacity (supplier data: up to 40-45% fatty phase), suited to rich, high-oil-load creams and cream-gels',
    },
    {
      zh: '对婴幼儿娇嫩肌肤耐受性良好，且属于非微塑料聚合物，可用于对塑料微粒有明确要求的配方',
      en: 'well tolerated on delicate infant/baby skin and classed as a non-microplastic polymer, making it suitable for formulas with explicit microplastic-avoidance requirements',
    },
  ],
  weaknesses: [
    {
      zh: '作为合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylic polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '不同应用场景（乳液 vs. 凝胶乳）建议用量区间不同（供应商数据：乳液0.2-2%，凝胶乳0.4-3%），配方前需结合具体体系确认目标用量',
      en: 'recommended use levels differ by application (supplier data: 0.2-2% in emulsions vs. 0.4-3% in cream-gels), so the target level should be confirmed against the specific system before formulating',
    },
    {
      zh: '作为粉末原料，分散不当（如局部加料过快或未充分搅拌）可能导致结块或成胶不均，需按供应商推荐的分散工艺操作',
      en: "as a powder raw material, improper dispersion (e.g. adding too quickly or under-mixing) can cause clumping or uneven gelation, so the supplier's recommended dispersion technique should be followed",
    },
  ],
  suitableSystems: [
    {
      system: { zh: '面部/身体护理乳液与凝胶乳', en: 'face & body care emulsions and cream-gels' },
      notes: { zh: '供应商数据：乳液0.2-2%，凝胶乳0.4-3%', en: 'supplier data: 0.2-2% in emulsions, 0.4-3% in cream-gels' },
    },
    { system: { zh: '自晒黑（self-tanning）产品', en: 'self-tanning products' } },
    { system: { zh: '婴幼儿护理产品', en: 'baby care products' } },
    { system: { zh: '洁面/沐浴等表面活性剂体系增稠稳定', en: 'thickening/stabilization of surfactant systems (facial cleanser, shower gel)' } },
  ],
  typicalUseLevel: { min: 0.2, max: 3, unit: '%' },
  relatedIngredientSlugs: ['aristoflex-avc', 'carbopol-ultrez-20', 'sepimax-zen'],
  citations: [
    {
      id: 'knowde-sepinovemt10-tds',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'SEPINOV EMT 10 — Product Technical Data',
      url: 'https://www.knowde.com/stores/seppic-inc/products/sepinov-emt-10',
      accessedDate: '2026-08-05',
      note: "Used for INCI name, CAS number (111286-86-3), pH range (3-12), applications list, oil-stabilization capacity (up to 40-45% fatty phase), electrolyte-resistance rationale, skin-feel description, and use-level breakdown by application (emulsion 0.2-2%, cream-gel 0.4-3%). Seppic's own product page (seppic.com) was not independently confirmed as fetchable in this session.",
    },
    {
      id: 'seppic-sepinovemt10-scribd',
      supplier: 'Seppic (technical presentation, hosted on Scribd)',
      documentTitle: 'Sepinov™ EMT 10: New "2-in-1" Powder Polymer — Technical Presentation',
      url: 'https://www.scribd.com/document/425588696/polimero',
      accessedDate: '2026-08-05',
      note: "Used for the additional viscosity range (20,000-100,000 mPa·s) and oil-phase compatibility range (10-50%) mentioned in strengths/weaknesses framing. Only a landing-page excerpt of this Seppic-authored deck was viewable, not the full original document, so these figures are not independently cross-verified against the complete source and are not asserted as precise specification values in this entry.",
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-05',
})
