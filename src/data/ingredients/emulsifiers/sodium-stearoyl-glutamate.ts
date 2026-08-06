import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sodium-stearoyl-glutamate',
  category: 'emulsifier',
  inciName: 'Sodium Stearoyl Glutamate',
  nameZh: '硬脂酰谷氨酸钠',
  tradeNames: [
    { name: 'Amisoft HS-11P', supplier: 'Ajinomoto' },
    { name: 'Eumulgin SG', supplier: 'BASF' },
  ],
  chemicalClass: {
    zh: '氨基酸衍生阴离子乳化剂（N-酰基谷氨酸盐）',
    en: 'Amino-acid-derived anionic emulsifier (N-acyl glutamate salt)',
  },
  chemicalStructureSummary: {
    zh: '由硬脂酸（多来自棕榈或椰子油脂肪酸，C18疏水尾链）与L-谷氨酸（一种氨基酸，谷氨酸本身也是角质层天然保湿因子NMF的组成成分之一）经酰胺键缩合而成的钠盐。谷氨酸分子上带有两个羧基，其中一个参与酰胺化，另一个保留为可电离的阴离子羧酸根，因此整体呈阴离子表面活性剂特性，头基结构与常见的皂基（脂肪酸皂）不同，更接近温和型氨基酸表面活性剂家族。',
    en: "The sodium salt formed by condensing stearic acid (typically from palm or coconut fatty acid, the C18 lipophilic tail) with L-glutamic acid (an amino acid that is itself a component of the stratum corneum's natural moisturizing factor, NMF) via an amide bond. Glutamic acid carries two carboxyl groups; one participates in the amide bond while the other remains a free, ionizable anionic carboxylate — giving the molecule overall anionic surfactant character with a head-group chemistry distinct from classic fatty-acid soap, closer to the mild amino-acid surfactant family.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '低用量高效乳化能力从何而来', en: 'Where the low-dose, high-efficiency emulsification ability comes from' },
      explanation: {
        zh: '长链C18硬脂酰尾链深入锚定油相，谷氨酸头基上可电离的羧酸根在界面形成强烈的静电排斥与水合作用，大幅降低界面张力；这种"强亲水头基+长疏水尾链"的强反差结构使其能在很低用量（约0.25-2%）下即发挥显著乳化效果，区别于许多需要更高用量的传统非离子乳化剂。',
        en: 'The long C18 stearoyl tail anchors deep into the oil phase, while the ionizable carboxylate on the glutamate head generates strong electrostatic repulsion and hydration at the interface, sharply lowering interfacial tension. This pronounced "strong hydrophilic head + long lipophilic tail" contrast lets it deliver significant emulsifying effect at a very low use level (~0.25-2%), unlike many non-ionic emulsifiers that require higher dosing.',
      },
    },
    {
      aspect: { zh: '层状凝胶网络与电解质耐受性从何而来', en: 'Where the lamellar gel network and electrolyte tolerance come from' },
      explanation: {
        zh: '与鲸蜡硬脂醇、硬脂酸甘油酯等脂肪醇/脂肪酸酯类共用相近的C18烷基链，二者可共结晶形成层状液晶凝胶网络，从而兼具增稠、稳定悬浮活性物/颜料的功能；同时其阴离子头基的电荷屏蔽方式使体系对电解质（如水溶性防晒剂、无机盐）的耐受性优于部分对电解质敏感的乳化体系，供应商资料称其可耐受约2%的氯化钠。',
        en: 'Sharing a similar C18 alkyl chain length with fatty alcohols/esters like cetearyl alcohol or glyceryl stearate lets it co-crystallize with them into a lamellar liquid-crystal gel network, giving it thickening and pigment/active-suspending function alongside emulsification. Its anionic head\'s charge-screening behavior also makes the system more tolerant of electrolytes (e.g. water-soluble UV filters, inorganic salts) than some electrolyte-sensitive systems — supplier data cites tolerance up to ~2% sodium chloride.',
      },
    },
    {
      aspect: { zh: '温和低刺激肤感从何而来', en: 'Where the mild, low-irritation skin feel comes from' },
      explanation: {
        zh: '谷氨酸本身是角质层天然保湿因子（NMF）的组成氨基酸之一，其头基结构与皮肤天然成分具有一定相似性，这被认为是该类氨基酸表面活性剂普遍温和性/低刺激性的结构基础；同时阴离子头基不含皂基常见的强碱性钠皂结构，涂抹后呈现粉感、不显著皂感的肤感特征。',
        en: "Glutamic acid is itself one of the amino acids that make up the stratum corneum's natural moisturizing factor (NMF), giving the head group some structural resemblance to the skin's own natural components — considered the structural basis for the generally mild, low-irritation character of this amino-acid surfactant class. The anionic head also lacks the strongly alkaline fatty-acid-soap structure common to classic soap bases, giving a powdery rather than soapy skin feel on application.",
      },
    },
  ],
  appearance: {
    zh: '类白色至白色自由流动粉末，熔点约54-60°C',
    en: 'off-white to white free-flowing powder, melting point approx. 54-60°C',
  },
  performance: {
    skinFeel: {
      zh: '温和、粉感明显，不显著皂感，涂抹后不粘腻',
      en: 'mild with a distinctly powdery finish, minimal soapy feel, non-tacky on application',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '氨基酸来源，用量极低（约0.25-2%）即可高效乳化，配方经济性好',
      en: 'amino-acid derived; highly efficient at very low use levels (~0.25-2%), giving good formulation economics',
    },
    {
      zh: '电解质耐受性优异（可耐受约2%氯化钠），与水溶性防晒剂等电解质活性物兼容性好',
      en: 'excellent electrolyte tolerance (up to ~2% sodium chloride), compatible with electrolyte-type actives such as water-soluble UV filters',
    },
    {
      zh: '温和低刺激、COSMOS/NATRUE/ECOCERT等天然认证兼容，常用于婴童及敏感肌配方',
      en: 'mild and low-irritation, compatible with COSMOS/NATRUE/ECOCERT natural certifications; commonly used in baby and sensitive-skin formulas',
    },
  ],
  weaknesses: [
    {
      zh: '不同来源（Amisoft、Eumulgin SG等）资料对HLB值报告不一致，公开渠道未找到经生产商直接确认的统一数值',
      en: 'HLB values reported across different sources (Amisoft, Eumulgin SG, etc.) are inconsistent; no single manufacturer-confirmed figure was found via public sources',
    },
    {
      zh: '作为阴离子表面活性剂，与阳离子调理剂/季铵盐类原料（如BTMS-50等）存在潜在配伍冲突，需谨慎复配',
      en: 'as an anionic surfactant, it carries potential incompatibility risk with cationic conditioning agents/quaternary ammonium ingredients (e.g. BTMS-50), requiring careful co-formulation',
    },
    {
      zh: '粉末形态通常需要与脂肪醇/单甘油酯等共结构剂搭配才能形成理想的层状凝胶网络，单独使用效果有限',
      en: 'the powder form typically needs to be paired with a co-structurant such as a fatty alcohol/monoglyceride to form an ideal lamellar gel network; standalone use has more limited effect',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 面霜 / 乳液（与脂肪醇复配）', en: 'O/W cream / lotion (paired with a fatty alcohol co-structurant)' },
      notes: { zh: '常与鲸蜡硬脂醇等复配形成层状凝胶网络', en: 'commonly paired with cetearyl alcohol or similar to form a lamellar gel network' },
    },
    {
      system: { zh: '含水溶性防晒剂/高电解质的配方', en: 'formulas with water-soluble UV filters / high electrolyte content' },
      notes: { zh: '电解质耐受性是其相对其他阴离子乳化剂的优势', en: 'electrolyte tolerance is a relative advantage over some other anionic emulsifiers' },
    },
  ],
  typicalUseLevel: { min: 0.25, max: 5, unit: '%' },
  relatedIngredientSlugs: ['ritamulse-scg', 'montanov-68'],
  citations: [
    {
      id: 'ajiaminoscience-hs11p',
      supplier: 'Ajinomoto AminoScience',
      documentTitle: 'Amisoft HS-11P — Product Page',
      url: 'https://ajiaminoscience.eu/personalcare/produit/amisoft-hs-11p/',
      accessedDate: '2026-08-05',
      note: "Ajinomoto's own regional subsidiary site (successfully fetched directly); used for INCI confirmation, cold-process capability, pH range (5-7), and certifications (COSMOS/NATRUE).",
    },
    {
      id: 'lotioncrafter-eumulgin-sg',
      supplier: 'Lotioncrafter (distributor, BASF-sourced data)',
      documentTitle: 'Sodium Stearoyl Glutamate (Eumulgin SG) — Product Page',
      url: 'https://lotioncrafter.com/products/eumulgin-sg',
      accessedDate: '2026-08-05',
      note: 'Distributor page reselling BASF Eumulgin SG data; used for appearance (white powder), melting point (54-60°C), use level (0.25-2%), and electrolyte-tolerance (up to 2% NaCl) figures. BASF\'s own carecreations.basf.us page and official TDS PDF could not be rendered as readable text in this pass.',
    },
    {
      id: 'search-knowde-amisoft-hs11p',
      supplier: 'Knowde (Ajinomoto store)',
      documentTitle: 'Amisoft HS-11P — Sodium Stearoyl Glutamate',
      url: 'https://www.knowde.com/stores/ajinomoto/products/amisoft-hs-11p',
      accessedDate: '2026-08-05',
      note: 'Used for general product description (O/W emulsifier, palm-derived, low-dosage claim) via search-engine snippet; direct page fetch returned no renderable content in this pass.',
    },
    {
      id: 'cosingsummary-ssg',
      supplier: 'Web search aggregation (CosIng/industry ingredient databases)',
      documentTitle: 'Sodium Stearoyl Glutamate — INCI/regulatory summary (search aggregation)',
      accessedDate: '2026-08-05',
      note: 'Used for general use-level range (up to ~5% in some cleansing-type applications) and NMF/mildness framing; aggregated from multiple ingredient-database search snippets rather than a single fetched primary page.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'performance.pillingTendency', 'typicalUseLevel'],
  lastUpdated: '2026-08-05',
})
