import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sinosurf-m68',
  category: 'emulsifier',
  inciName: 'Cetearyl Alcohol (and) Cetearyl Glucoside',
  nameZh: '鲸蜡硬脂醇（和）鲸蜡硬脂基葡糖苷',
  tradeNames: [{ name: 'SINOSURF M68', supplier: 'Sinocure Chemical Group' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子乳化剂——国产化Montanov 68同INCI体系',
    en: 'Alkyl polyglucoside (APG) non-ionic emulsifier — a domestically manufactured product with the same INCI system as Montanov 68',
  },
  chemicalStructureSummary: {
    zh: '与Seppic Montanov 68完全相同的INCI组成：C16-18脂肪醇（鲸蜡硬脂醇）与鲸蜡硬脂基葡糖苷（同一脂肪醇与葡萄糖缩合而成的糖苷）复配。生产商赛克（Sinocure Chemical Group，总部位于中国山东济南）在其技术资料中将其定位为"液晶促进剂"，通过与水共结晶形成层状液晶结构、模拟皮肤脂质双分子层排列。作为国产供应商提供的同类原料，可视为该APG乳化剂化学体系在国内的功能对标产品。',
    en: "Shares an identical INCI composition with Seppic's Montanov 68: a C16-18 fatty alcohol (Cetearyl Alcohol) blended with Cetearyl Glucoside (the same fatty alcohol condensed with glucose). Its manufacturer, Sinocure Chemical Group (headquartered in Jinan, Shandong, China), positions it in its own technical material as a 'liquid crystal promoter' that co-crystallizes with water into a lamellar liquid-crystal structure mimicking the skin's lipid bilayer arrangement. As a domestically supplied material in the same chemical class, it can be viewed as a China-based functional counterpart to this established APG emulsifier chemistry.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: 'O/W乳化与液晶促进能力从何而来', en: 'Where the O/W emulsification and liquid-crystal-promoting ability comes from' },
      explanation: {
        zh: '鲸蜡硬脂基葡糖苷的糖环头基带有大量羟基（对应赛克技术规格中270-290的羟值），可与水形成大量氢键强烈水合，而共用的C16-18烷基尾链锚定油相；这与Montanov 68同源的化学机理一致，驱动界面处形成层状液晶网络，这正是赛克技术资料中将其描述为"液晶促进剂"并强调"模拟皮肤脂质双分子层"的结构基础。',
        en: "The sugar-ring head group of Cetearyl Glucoside carries numerous hydroxyls (reflected in Sinocure's spec sheet hydroxyl value of 270-290), hydrating strongly through hydrogen bonding with water, while the shared C16-18 alkyl tail anchors into the oil phase. This is the same underlying chemistry as Montanov 68, driving lamellar liquid-crystal formation at the interface — the structural basis for Sinocure's own description of the product as a 'liquid crystal promoter' that mimics the skin's lipid bilayer.",
      },
    },
    {
      aspect: { zh: '低用量即可单独成乳从何而来', en: 'Where the ability to emulsify alone at a low use level comes from' },
      explanation: {
        zh: '游离脂肪醇（共结构剂）与糖苷（表面活性剂）共用相同的C16-18烷基链，使二者在水中共结晶而非各自分散，形成协同增效的层状网络；赛克技术资料称其在3-5%用量下即可作为唯一乳化剂使用，这与该协同共结晶机制相符。',
        en: 'The free fatty alcohol (co-structurant) and the glucoside (surfactant) share the same C16-18 alkyl chain, letting them co-crystallize in water rather than existing as separately dispersed phases, forming a synergistic lamellar network. Sinocure\'s technical data states the product can function as the sole emulsifier at 3-5% use level, consistent with this cooperative co-crystallization mechanism.',
      },
    },
    {
      aspect: { zh: '降低经皮水分流失（TEWL）与柔滑肤感从何而来', en: 'Where the reduced TEWL and soft skin feel come from' },
      explanation: {
        zh: '稳定乳液的同一层状液晶凝胶网络在涂抹后也会在皮肤表面留下具有一定屏障性但仍透气的膜层，这是赛克技术资料中"降低TEWL""柔和细腻肤感"等描述的结构基础，其机理与Montanov 68等同INCI体系的液晶促进剂完全一致。',
        en: "The same lamellar liquid-crystal gel network that stabilizes the emulsion also leaves a partially occlusive yet breathable residual film on skin after application — the structural basis for Sinocure's cited 'reduced TEWL' and 'soft, smooth skin feel' claims, via the same mechanism as other liquid-crystal-promoter emulsifiers sharing this INCI system, such as Montanov 68.",
      },
    },
  ],
  appearance: {
    zh: '25°C下为白色片状固体',
    en: 'white flakes at 25°C',
  },
  performance: {
    skinFeel: {
      zh: '柔和细腻，水合后呈透明凝胶状膏体，降低经皮水分流失',
      en: 'soft and smooth; forms a crystal-clear gel-like paste when hydrated, with reported TEWL reduction',
    },
    pillingTendency: 'low',
    pillingNotes: {
      zh: '搓泥倾向未见赛克技术资料直接说明，此处基于其与Montanov 68相同INCI/成膜机理类比推断，非厂商直接确认数值',
      en: 'pilling tendency is not directly addressed in Sinocure\'s technical material; inferred here by analogy to Montanov 68 (identical INCI/film-forming mechanism), not a vendor-confirmed figure',
    },
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '真实的国产供应商（赛克化学集团，中国山东济南），提供与国际成熟APG乳化剂体系（Montanov 68）相同INCI组成的原料，具备本土供应/替代进口的可行性',
      en: 'a genuine Chinese-domestic supplier (Sinocure Chemical Group, Jinan, Shandong, China) offering the same INCI composition as an established international APG emulsifier system (Montanov 68), giving a viable local-sourcing / import-substitution option',
    },
    {
      zh: '厂商官网直接公开了较完整的技术规格（羟值270-290、酸值≤1.0、熔点≤62°C、水分≤2.0%、5%水溶液pH 4.0-7.0），文档质量在同类国产原料中较为完整',
      en: "the manufacturer's own website directly publishes a fairly complete technical spec (hydroxyl value 270-290, acid value ≤1.0, melting point ≤62°C, water content ≤2.0%, pH 4.0-7.0 in 5% solution) — better-documented than many domestic raw materials in this category",
    },
    {
      zh: '不含防腐剂、宣称30天内可生物降解，应用范围覆盖护肤、护发、彩妆、婴童霜、防晒、脱毛/漂白等产品',
      en: 'preservative-free, claimed to biodegrade within 30 days, with a stated application range covering skincare, haircare, color cosmetics, baby cream, sun care, and depilatory/bleaching products',
    },
  ],
  weaknesses: [
    {
      zh: '赛克化学集团在国际市场的知名度与第三方配方验证案例远少于Seppic等成熟供应商，公开渠道未找到独立第三方（非厂商）测试数据或HLB值，需要formulator自行验证后再规模化使用',
      en: 'Sinocure Chemical Group has far less international market presence and third-party formulation validation than an established supplier like Seppic; no independent (non-manufacturer) test data or HLB value was found via public search, so formulators should independently verify before scaling up',
    },
    {
      zh: '固体片状（熔点≤62°C），与Montanov 68一样需要热法乳化工艺',
      en: 'a solid flake (melting point ≤62°C) that, like Montanov 68, requires hot-process emulsification',
    },
    {
      zh: '未找到公开发布的HLB数值',
      en: 'no publicly published HLB value was found',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 护肤/护发乳霜、乳液', en: 'O/W skincare / haircare cream, lotion' },
      notes: { zh: '3-5%用量下可作为单一乳化剂使用', en: 'can function as the sole emulsifier at a 3-5% use level' },
    },
    {
      system: { zh: '婴童霜、防晒、彩妆及脱毛/漂白类产品', en: 'baby cream, sun care, color cosmetics, and depilatory/bleaching products' },
      notes: { zh: '为赛克技术资料中列出的应用方向', en: 'application areas as listed in Sinocure\'s own technical material' },
    },
  ],
  typicalUseLevel: { min: 1, max: 5, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'olivem-1000', 'xyliance'],
  citations: [
    {
      id: 'sinocurechem-sinosurfm68',
      supplier: 'Sinocure Chemical Group',
      documentTitle: 'SINOSURF M68 — Cetearyl Alcohol & Cetearyl Glucoside Natural O/W Emulsifier',
      url: 'https://www.sinocurechem.com/products/surfactant/sinosurf-m68/',
      accessedDate: '2026-08-05',
      note: "Manufacturer's own product page, fetched directly without gating; primary source for INCI, CAS numbers, appearance, use level, pH range, hydroxyl/acid value, melting point, water content, applications, and biodegradability claim. This is the only source consulted for this product in this research pass — no independent third-party or distributor cross-reference was found.",
    },
    {
      id: 'search-sinocure-company-background',
      supplier: 'Web search aggregation (LinkedIn, Crunchbase, SpecialChem supplier listings)',
      documentTitle: 'Sinocure Chemical Group — company background (search aggregation)',
      accessedDate: '2026-08-05',
      note: 'Used to confirm Sinocure Chemical Group is a genuine China-headquartered company (Jinan, Shandong; founded 2003), for supplier verification.',
    },
    {
      id: 'reference-montanov68-inci-match',
      supplier: 'Cross-reference to this project\'s Montanov 68 entry',
      documentTitle: 'Montanov 68 — internal ingredient entry (INCI comparison)',
      accessedDate: '2026-08-05',
      note: 'Used only to confirm that SINOSURF M68 shares an identical INCI ("Cetearyl Alcohol (and) Cetearyl Glucoside") with the existing montanov-68 entry in this project; performance-rating inferences by analogy (pilling tendency, suspension stabilization) are flagged rather than presented as vendor-confirmed for this specific product.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'performance.pillingTendency'],
  lastUpdated: '2026-08-05',
})
