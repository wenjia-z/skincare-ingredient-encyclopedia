import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'lecithin',
  category: 'emulsifier',
  inciName: 'Hydrogenated Lecithin',
  nameZh: '氢化卵磷脂',
  tradeNames: [{ name: 'Lipoid P 75-3', supplier: 'Lipoid' }],
  chemicalClass: {
    zh: '磷脂类非离子乳化剂（天然/仿生来源）',
    en: 'Phospholipid-based non-ionic emulsifier (natural, biomimetic)',
  },
  chemicalStructureSummary: {
    zh: 'Lipoid P 75-3以非转基因大豆来源的氢化磷脂（主要成分为磷脂酰胆碱）为主体。天然卵磷脂中的脂肪酸链多为不饱和（亚油酸、油酸为主），经氢化处理后转变为饱和链，提升抗氧化稳定性。磷脂酰胆碱分子具有两性离子型磷酸胆碱头基（高度极性、易水合）与两条脂肪酸尾链，其双亲结构与角质层/细胞膜的磷脂双分子层高度相似，是一种"仿生"乳化剂。',
    en: "Lipoid P 75-3 is built on hydrogenated phospholipids (mainly phosphatidylcholine) from non-GMO soybean. Natural lecithin's fatty-acid chains are mostly unsaturated (linoleic and oleic acid predominant); hydrogenation converts them to saturated chains, improving oxidative stability. Phosphatidylcholine carries a zwitterionic phosphocholine head group (highly polar, readily hydrated) and two fatty-acid tails — an amphiphilic structure closely resembling the phospholipid bilayers of the stratum corneum and cell membranes, making it a biomimetic emulsifier.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '仿生亲肤性与极佳肤感从何而来', en: 'Where the biomimetic skin compatibility and superior skin feel come from' },
      explanation: {
        zh: '两性离子型磷酸胆碱头基在水中强烈水合，饱和脂肪酸尾链锚定油相；因其分子结构与皮肤自身细胞膜磷脂几乎一致，涂抹后不仅是"停留"在油水界面，更能与角质层脂质结构相融合，这是供应商所称"极致耐受性""完美肤感"的结构基础，也是其能以极低用量（如约1%）达到与约4%二甲基硅油350相近的丝滑感的原因。',
        en: "The zwitterionic phosphocholine head hydrates strongly in water while the saturated fatty-acid tails anchor into the oil phase; because the molecule is structurally almost identical to the skin's own membrane phospholipids, it doesn't just sit at the oil-water interface but integrates with the stratum corneum's lipid structure. This is the structural basis for the supplier's claims of 'unparalleled tolerability' and 'perfect skin feel,' and why a very low use level (~1%) can approach the silky sensory effect of roughly 4% dimethicone 350.",
      },
    },
    {
      aspect: { zh: '氢化如何改善稳定性', en: 'How hydrogenation improves stability' },
      explanation: {
        zh: '天然（未氢化）卵磷脂中的磷脂酰胆碱多带不饱和脂肪酸链，双键易被氧化而产生哈败味及颜色劣变；将双键饱和化后消除了这一氧化位点，这正是化妆品级原料多选用"氢化卵磷脂"而非普通卵磷脂的结构性原因——以牺牲部分流动性为代价换取更长的成品保质期。',
        en: "Unhydrogenated phosphatidylcholine carries mostly unsaturated fatty-acid chains, whose double bonds are prone to oxidation, producing rancid odors and color degradation over time. Saturating those double bonds removes this oxidation-prone site — the structural reason cosmetic-grade lecithin ingredients favor 'hydrogenated lecithin' over plain lecithin, trading some fluidity for a longer finished-product shelf life.",
      },
    },
    {
      aspect: { zh: '为何HLB体系不适用于此类原料', en: 'Why a single HLB value does not reliably describe this ingredient class' },
      explanation: {
        zh: '天然磷脂制品并非单一分子，而是磷脂酰胆碱、磷脂酰乙醇胺、磷脂酰肌醇等多种磷脂及不同脂肪酸组成的混合物，其比例因植物来源和加工工艺而异；这种组成上的结构异质性正是文献中卵磷脂HLB数值差异巨大（粗制卵磷脂常引用约4、偏W/O，而脱油/改性组分可远高于此）的根本原因，也是Lipoid通过氢化/分离工艺推出P 75-3等标准化组分以获得更一致乳化表现的动机。',
        en: 'Natural phospholipid preparations are not a single molecule but a mixture of several phospholipid classes (phosphatidylcholine, phosphatidylethanolamine, phosphatidylinositol, etc.) with varying fatty-acid profiles that differ by plant source and processing. This structural heterogeneity is the fundamental reason published lecithin HLB values vary so widely (crude lecithin is often cited around HLB 4, W/O-leaning, while de-oiled/modified fractions can be much higher), and is why Lipoid uses hydrogenation/fractionation to produce standardized fractions like P 75-3 for more consistent emulsifying performance.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '光滑、丝绸感，被供应商定位为"硅油替代"，低用量下即有明显肤感提升',
      en: 'smooth, silky feel; positioned by the supplier as a "silicone alternative," with noticeable sensory improvement even at low use levels',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '100%天然、非转基因大豆来源，通过COSMOS认证，磷脂结构与皮肤自身细胞膜高度相似，耐受性极佳',
      en: '100% natural, non-GMO soy-derived, COSMOS-approved; its phospholipid structure closely resembles the skin\'s own cell membranes, giving excellent tolerability',
    },
    {
      zh: '低用量下即可提供接近硅油的丝滑肤感（供应商引用：约1%用量效果可比拟约4%二甲基硅油350），适合"无硅"配方替代方案',
      en: 'delivers a near-silicone silky feel at low use levels (supplier reference: ~1% comparable to ~4% dimethicone 350) — a useful option for silicone-free formulations',
    },
    {
      zh: '经氢化处理提升抗氧化稳定性，优于未改性的普通卵磷脂',
      en: 'hydrogenation improves oxidative stability relative to unmodified, standard lecithin',
    },
  ],
  weaknesses: [
    {
      zh: '天然磷脂组成随原料批次/植物来源存在差异，且该类原料没有统一可靠的HLB数值，难以用HLB体系直接指导配方设计',
      en: 'natural phospholipid composition varies by raw-material batch and plant source, and there is no single reliable HLB value for this ingredient class, making HLB-system formulation guidance difficult to apply directly',
    },
    {
      zh: '一般更适合作为辅助乳化剂/肤感调节剂与主乳化剂搭配使用，单独用于高油相体系的稳定能力未见明确的供应商数据支持',
      en: 'generally better suited as a co-emulsifier/skin-feel modifier alongside a primary emulsifier; no clear supplier data supports its standalone stabilizing capability in high-oil-phase systems',
    },
    {
      zh: '外观、精确推荐用量区间、pH适用范围等信息目前无法从公开可访问渠道确认，Lipoid官方TDS及市场平台详情页均返回访问受限',
      en: 'appearance, a precise recommended use-level range, and pH compatibility could not be confirmed from publicly accessible sources; both Lipoid\'s official TDS and marketplace detail pages returned access-restricted results',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '敏感肌/受损肌肤及婴儿、私密护理配方', en: 'sensitive/damaged skin, baby care, and intimate care formulas' },
      notes: { zh: '供应商明确列出的推荐应用场景', en: 'explicitly listed by the supplier as a recommended application' },
    },
    {
      system: { zh: '"无硅"轻盈质地乳霜/乳液', en: '"silicone-free" lightweight-textured creams and lotions' },
      notes: {
        zh: '作为肤感调节的辅助乳化剂，用于替代或减少硅油用量',
        en: 'used as a skin-feel-modifying co-emulsifier to replace or reduce silicone usage',
      },
    },
  ],
  regulatoryNotes: {
    zh: '普通（非氢化）大豆/葵花卵磷脂在化妆品中也常作为水包油辅助乳化剂使用，常见用量约0.5-5%；但该用量数据来自卵磷脂这一大类原料的通用文献，并非针对Lipoid P 75-3这一氢化改性等级的专属数据，故本词条未将其作为typicalUseLevel收录。',
    en: 'Standard (non-hydrogenated) soy/sunflower lecithin is also commonly used in cosmetics as an O/W co-emulsifier, typically around 0.5-5%; however, this figure comes from general lecithin-class literature rather than data specific to the hydrogenated Lipoid P 75-3 grade, so it has not been recorded as this entry\'s typicalUseLevel.',
  },
  relatedIngredientSlugs: ['olivem-1000', 'montanov-68'],
  citations: [
    {
      id: 'lipoid-kosmetik-p753-biomimetic',
      supplier: 'Lipoid Kosmetik',
      documentTitle: 'LIPOID P 75-3: Powerful Biomimetic Emulsifier with Perfect Skin Feel',
      url: 'https://www.lipoid-kosmetik.com/lipoid-p-75-3-powerful-biomimetic-emulsifier-with-perfect-skin-feel/',
      accessedDate: '2026-08-05',
      note: 'Directly fetched supplier page; source for the biomimetic lamellar-bilayer claim, "silicone alternative" positioning, the 1% vs. 4% Dimethicone 350 sensory comparison, and suitable applications (sensitive/damaged skin, baby, intimate care).',
    },
    {
      id: 'knowde-lipoid-p753-inci',
      supplier: 'Lipoid (via Knowde marketplace listing)',
      documentTitle: 'LIPOID P 75-3 — Hydrogenated Lecithin, CAS 92128-87-5',
      url: 'https://www.knowde.com/stores/lipoid/products/lipoid-p-75-3',
      accessedDate: '2026-08-05',
      note: 'INCI name (Hydrogenated Lecithin), CAS number (92128-87-5), and COSMOS-approval status found via web search indexing of this Knowde listing; direct fetch of the page returned no retrievable content, so these details are not independently confirmed first-hand.',
    },
    {
      id: 'search-lecithin-hlb-general',
      supplier: 'Multiple indexed sources (SpecialChem/HLBcalc, general lecithin literature)',
      documentTitle: 'General reference data on lecithin HLB variability',
      accessedDate: '2026-08-05',
      note: 'General cosmetic-chemistry literature/reference pages (search-indexed, no single stable URL) cited for the general fact that crude lecithin is often quoted around HLB 4 (W/O-leaning) while de-oiled/modified phospholipid fractions vary widely — used only to support the structure-function point on why a single HLB is unreliable for this ingredient class, not as a specific value for Lipoid P 75-3.',
    },
  ],
  dataCompleteness: 'unverified-flagged',
  flaggedFields: ['appearance', 'typicalUseLevel', 'hlb', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-05',
})
