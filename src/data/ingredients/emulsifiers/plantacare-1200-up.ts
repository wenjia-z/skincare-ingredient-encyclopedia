import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'plantacare-1200-up',
  category: 'emulsifier',
  inciName: 'Lauryl Glucoside',
  nameZh: '月桂醇葡糖苷',
  tradeNames: [{ name: 'Plantacare 1200 UP', supplier: 'BASF' }],
  chemicalClass: {
    zh: '非离子烷基糖苷（APG）类表面活性剂/助乳化剂',
    en: 'Non-ionic alkyl polyglucoside (APG) surfactant / co-emulsifier',
  },
  chemicalStructureSummary: {
    zh: '由天然来源的月桂醇（源自椰子/棕榈仁油的C12脂肪醇）与葡萄糖（源自玉米淀粉）经缩合反应形成糖苷键连接而成：疏水的C12烷基长链构成尾部，亲水的葡萄糖环（带多个游离羟基）构成头基。据检索到的经销商/供应商数据摘要，其以约50-53%活性物、47-50%水分的浑浊粘稠水溶液形式供货，pH（20%水溶液，含15%异丙醇）约11.5-12.5。',
    en: 'Formed by a glycosidic condensation between naturally sourced lauryl alcohol (a C12 fatty alcohol derived from coconut/palm-kernel oil) and glucose (derived from corn starch): a hydrophobic C12 alkyl chain forms the tail, and a hydrophilic glucose ring (bearing multiple free hydroxyl groups) forms the head group. Per an indexed supplier/distributor data summary, it is supplied as a cloudy, viscous aqueous solution at approx. 50-53% active substance / 47-50% water content, with a pH (20% solution in 15% isopropanol) of approx. 11.5-12.5.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '温和、低刺激清洁性能从何而来', en: 'Where the mild, low-irritation cleansing performance comes from' },
      explanation: {
        zh: '葡萄糖头基通过多个羟基与水形成大量氢键进行水合，而非依靠离子电荷，不像阴离子表面活性剂那样携带强负电荷去强烈结合皮肤角质蛋白和眼粘膜蛋白；这种非离子、多羟基头基化学结构是烷基糖苷类被普遍认为温和、低刺激的结构基础。',
        en: 'The glucose head group hydrates through multiple hydrogen-bond-forming hydroxyls rather than carrying an ionic charge — unlike anionic surfactants, which interact strongly (and often harshly) with skin/eye proteins via electrostatic charge. This non-ionic, multi-hydroxyl head-group chemistry is the structural basis for the mildness and low irritation potential broadly attributed to alkyl polyglucosides.',
      },
    },
    {
      aspect: { zh: '增稠/助乳化能力从何而来', en: 'Where the viscosity-building / co-emulsifying behavior comes from' },
      explanation: {
        zh: 'C12烷基尾链搭配体积较大、多羟基的糖环头基，使分子的头基/尾链比例偏大；在水体系中这有利于形成拉长、彼此缠结的胶束/层状结构而非简单球形胶束，这正是此类烷基糖苷常被用作清洁配方中增稠助乳化剂（而非单独作为主表面活性剂）的结构原因。',
        en: 'The C12 alkyl tail combined with a bulky, multi-hydroxyl sugar head gives the molecule a comparatively large head-group-to-tail ratio; in aqueous systems this favors the formation of elongated, entangling micellar/lamellar structures rather than simple spherical micelles — the structural reason alkyl glucosides such as this one are valued as viscosity-building co-surfactants/co-emulsifiers in cleansing formulations rather than used purely as a primary detergent.',
      },
    },
    {
      aspect: { zh: '可再生来源与温和配方兼容性从何而来', en: 'Where the renewable-sourcing / mild-formulation compatibility comes from' },
      explanation: {
        zh: '疏水尾链（椰子/棕榈仁来源）与亲水头基（玉米淀粉来源）均为植物来源，且分子不含环氧乙烷缩合结构（无PEG/EO），因而既规避了部分含PEG表面活性剂的1,4-二氧六环残留顾虑，也符合供应商所述的RSPO大宗平衡与可再生原料认证方向。',
        en: 'Because both the hydrophobic tail (coconut/palm-kernel derived) and the hydrophilic head (corn-starch derived) are plant-based, and the molecule carries no ethylene-oxide condensation (no PEG/EO), it avoids both the 1,4-dioxane/ethylene-oxide-residue concerns that affect some PEG-based surfactants and aligns with the supplier-stated RSPO mass-balance and renewable-feedstock positioning.',
      },
    },
  ],
  appearance: {
    zh: '浑浊粘稠水溶液',
    en: 'cloudy, viscous aqueous solution',
  },
  performance: {
    skinFeel: {
      zh: '温和，具非离子表面活性剂典型的轻盈、不涩感',
      en: 'mild; the light, non-tacky feel typical of non-ionic glucoside surfactants',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'low',
  },
  strengths: [
    {
      zh: '温和、非离子、可生物降解的APG表面活性剂，眼部/皮肤刺激性很低，广泛用于婴幼儿及敏感肌清洁产品',
      en: 'mild, non-ionic, biodegradable APG surfactant with very low reported eye/skin irritation potential — widely used in baby-care and sensitive-skin cleansing products',
    },
    {
      zh: '原料100%源自可再生植物原料，并获RSPO大宗平衡（Mass Balance）认证（供应商数据）',
      en: '100% renewable, plant-derived feedstocks, RSPO Mass Balance certified (supplier data)',
    },
    {
      zh: '可作为清洁配方中的助乳化/增稠成分，有助于减少额外增稠剂或电解质用量',
      en: 'functions as a co-emulsifying / viscosity-building ingredient in cleansing formulations, helping reduce reliance on separate thickeners or salt',
    },
  ],
  weaknesses: [
    {
      zh: '原料本身呈较强碱性（pH约11.5-12.5），配方师需据此调整终产品pH；该数值仅通过间接检索到的经销商页面摘要获得，本次研究未能直接抓取供应商一手技术数据表加以独立核实',
      en: 'the raw material itself is fairly alkaline (pH approx. 11.5-12.5), which formulators must account for when adjusting final product pH; this figure was obtained only via an indirectly indexed distributor-page summary and was not independently confirmed by directly fetching a primary supplier TDS in this research pass',
    },
    {
      zh: 'BASF官方技术数据表需登录Care360°门户账号才能查看，本次研究未能取得精确的HLB值与推荐用量范围，故此条目未纳入相关数字，以免臆造',
      en: "the official BASF technical data sheet is gated behind a Care360° portal account login, so an exact HLB value and recommended-use-level range were not obtainable in this pass; these are omitted from this entry rather than invented",
    },
    {
      zh: '作为以清洁功能为主的表面活性剂，其独立乳化/稳定能力不及Cetearyl Glucoside等典型初级O/W乳化酯类，通常需与主乳化剂复配使用',
      en: 'as primarily a cleansing surfactant, it lacks the strong standalone emulsification/stabilization capacity of true primary O/W emulsifier esters (e.g. Cetearyl Glucoside), so it is typically paired with a primary emulsifier rather than used alone in leave-on emulsions',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '淋洗类清洁产品', en: 'rinse-off cleansing products' },
      notes: {
        zh: '洗发水、液体皂、沐浴露、婴儿洗护、洁面产品、湿巾等（供应商应用列表）',
        en: 'shampoo, liquid soap, shower/bath products, baby care, facial cleansers, wipes (per supplier application list)',
      },
    },
    {
      system: { zh: '牙膏/漱口水', en: 'toothpaste / mouthwash' },
      notes: { zh: '供应商应用列表列出的口腔护理场景', en: 'oral-care use case listed in supplier applications' },
    },
  ],
  relatedIngredientSlugs: ['montanov-68', 'sinosurf-m68'],
  citations: [
    {
      id: 'specialchem-plantacare1200up-tds',
      supplier: 'BASF (via SpecialChem)',
      documentTitle: 'PLANTACARE® 1200 UP (Surfactant) - BASF - Technical Datasheet',
      url: 'https://www.specialchem.com/cosmetics/product/basf-plantacare-1200-up',
      accessedDate: '2026-08-06',
      note: 'Direct fetch of this page returned HTTP 403 (bot protection); active-substance content (50-53%), water content (47-50%), pH (11.5-12.5), applications list, RSPO-MB status, and 24-month shelf life were captured via a search-engine-indexed summary of the page, not independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'basf-care360-plantacare1200up',
      supplier: 'BASF',
      documentTitle: 'Plantacare® 1200 UP — Product Finder (Care360°)',
      url: 'https://care360.basf.com/global/en/Product-Finder/30530216',
      accessedDate: '2026-08-06',
      note: "Fetched directly from BASF's own Care360° product-finder page; confirms INCI name (Lauryl Glucoside), product number (30530216), and general product category. The full downloadable technical data sheet is gated behind Care360° portal login/registration and was not accessible in this session.",
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh', 'appearance'],
  lastUpdated: '2026-08-06',
})
