/** Flat bilingual dictionary for UI chrome. Ingredient content itself is bilingual by construction (LocalizedText fields), not part of this file. */
export const strings = {
  siteTitle: { zh: '护肤原料百科', en: 'Skincare Ingredient Encyclopedia' },
  siteTagline: {
    zh: '乳化剂与聚合物技术百科，适用于各类护肤品配方',
    en: 'Emulsifiers & polymers for all types of skincare formulation',
  },

  navHome: { zh: '首页', en: 'Home' },
  navEmulsifiers: { zh: '乳化剂', en: 'Emulsifiers' },
  navPolymers: { zh: '聚合物 / 增稠剂', en: 'Polymers' },
  navAbout: { zh: '数据来源与说明', en: 'Data & Sources' },

  searchPlaceholder: { zh: '搜索 INCI 名、中文名或商品名…', en: 'Search INCI, Chinese, or trade name…' },
  searchNoResults: { zh: '未找到匹配的原料', en: 'No matching ingredients found' },

  categoryEmulsifier: { zh: '乳化剂', en: 'Emulsifier' },
  categoryPolymer: { zh: '聚合物 / 增稠剂', en: 'Polymer' },

  colInciName: { zh: 'INCI 名称', en: 'INCI Name' },
  colNameZh: { zh: '中文名', en: 'Chinese Name' },
  colTradeName: { zh: '商品名', en: 'Trade Name' },
  colSupplier: { zh: '供应商', en: 'Supplier' },
  colHlb: { zh: 'HLB 值', en: 'HLB' },
  colCategory: { zh: '类别', en: 'Category' },

  sectionChemicalStructure: { zh: '化学结构简述', en: 'Chemical Structure' },
  sectionStructureFunction: { zh: '结构-功能关联分析', en: 'Structure–Function Relationship' },
  sectionPerformance: { zh: '性能特点', en: 'Performance Characteristics' },
  sectionStrengthsWeaknesses: { zh: '结构化学角度的优缺点分析', en: 'Structural Strengths & Weaknesses' },
  sectionStrengths: { zh: '优势', en: 'Strengths' },
  sectionWeaknesses: { zh: '劣势', en: 'Weaknesses' },
  sectionSuitableSystems: { zh: '适用配方体系', en: 'Suitable Formulation Systems' },
  sectionCitations: { zh: '数据来源', en: 'Sources' },
  sectionRelated: { zh: '相似原料对比', en: 'Compare with Similar Ingredients' },
  sectionComparison: { zh: '原料对比', en: 'Ingredient Comparison' },

  perfSkinFeel: { zh: '肤感', en: 'Skin Feel' },
  perfPilling: { zh: '搓泥倾向', en: 'Pilling Tendency' },
  perfEmulsification: { zh: '乳化能力', en: 'Emulsification Ability' },
  perfSuspension: { zh: '悬浮 / 稳定能力', en: 'Suspension / Stabilization' },

  ratingLow: { zh: '低', en: 'Low' },
  ratingMedium: { zh: '中', en: 'Medium' },
  ratingHigh: { zh: '高', en: 'High' },
  ratingUnknown: { zh: '暂无数据', en: 'Unknown' },

  dataVerified: { zh: '数据已核实', en: 'Verified' },
  dataPartial: { zh: '部分数据待核实', en: 'Partially Verified' },
  dataUnverifiedFlagged: { zh: '数据未核实，谨慎参考', en: 'Unverified — Use with Caution' },

  compareCta: { zh: '对比相似原料', en: 'Compare Similar Ingredients' },
  backToList: { zh: '返回列表', en: 'Back to List' },
  notFoundTitle: { zh: '页面未找到', en: 'Page Not Found' },
  notFoundBody: { zh: '你要找的原料或页面不存在。', en: "The ingredient or page you're looking for doesn't exist." },

  langToggleLabel: { zh: 'EN', en: '中文' },

  aboutTitle: { zh: '数据来源与核实说明', en: 'Data Sources & Verification' },
  aboutIntro: {
    zh: '本站每一条技术数据（INCI名、HLB、性能评级、优缺点等）都必须能追溯到一份真实、可查的来源——供应商技术数据表（TDS）、成分数据库或已发表的化妆品化学文献，绝不凭空编造。以下说明具体的核实流程，以及页面上"数据已核实 / 部分数据待核实 / 数据未核实"三种标记的确切含义。',
    en: "Every technical claim on this site (INCI name, HLB, performance ratings, strengths/weaknesses, etc.) must trace back to a real, checkable source — a supplier technical data sheet (TDS), an ingredient database, or published cosmetic-chemistry literature. Nothing is invented. This page explains exactly how that verification works, and what the three data-completeness badges you see across the site actually mean.",
  },

  aboutMethodologyTitle: { zh: '核实流程', en: 'Verification Process' },
  aboutMethodologyStep1Title: { zh: '1. 查找官方技术数据表', en: '1. Locate the official technical data sheet' },
  aboutMethodologyStep1Body: {
    zh: '优先搜索供应商官网的产品页/成分查找工具（如Croda、Seppic、BASF、Evonik、Ashland、Clariant、Lubrizol等），同时检索中英文渠道——部分中国本土供应商在中文官网上的资料更完整。',
    en: 'Search first for the official product page or ingredient-finder tool on the manufacturer\'s own site (Croda, Seppic, BASF, Evonik, Ashland, Clariant, Lubrizol, etc.), checking both English- and Chinese-language sources — some Chinese-domestic suppliers have more complete data on their Chinese site.',
  },
  aboutMethodologyStep2Title: { zh: '2. 抓取并提取事实', en: '2. Fetch the page and extract facts' },
  aboutMethodologyStep2Body: {
    zh: '实际打开该网页/PDF，提取INCI名、HLB、外观、推荐用量、相容性等具体数据——而不是凭记忆或推测填写。',
    en: 'Actually open the page or PDF and extract INCI name, HLB, appearance, recommended use level, compatibility notes, and other specifics — never filled in from memory or inference.',
  },
  aboutMethodologyStep3Title: { zh: '3. 逐条记录来源', en: '3. Record every fact with a citation' },
  aboutMethodologyStep3Body: {
    zh: '每条事实都关联一条引用记录：供应商名称、文档标题、链接（若可获取）、实际查阅日期，以及一句说明该来源具体支持哪部分内容。这些引用会完整显示在每个原料详情页底部的"数据来源"栏目中。',
    en: 'Every fact is tied to a citation record: supplier name, document title, a URL (when available), the actual date it was accessed, and a note on exactly what that source supports. These citations are shown in full in the "Sources" section at the bottom of every ingredient page.',
  },
  aboutMethodologyStep4Title: { zh: '4. 官方数据表不可获取时的替代方案', en: '4. When the primary TDS is gated' },
  aboutMethodologyStep4Body: {
    zh: '许多官方技术数据表需要注册/申请样品才能查看。此时退而求其次，参考供应商的公开产品介绍页、CosIng欧盟成分数据库，或已发表的化妆品化学文献（如经典专著、行业综述），并将该条目标记为"部分数据待核实"。',
    en: 'Many official TDS documents are gated behind a "request a sample" registration. When that happens, the fallback is the supplier\'s public product description page, the EU CosIng ingredient database, or established published cosmetic-chemistry literature — and the entry is marked "Partially Verified".',
  },
  aboutMethodologyStep5Title: { zh: '5. 完全找不到公开数据时', en: '5. When no public data exists at all' },
  aboutMethodologyStep5Body: {
    zh: '对于较新或部分中国本土原料，有时确实找不到任何可查的公开数据。此时仍会撰写该词条，但会将对应字段标记为"数据未核实"，并在条目中列出具体是哪些字段——绝不用编造的数字填补空白。',
    en: "For newer or some Chinese-domestic ingredients, no checkable public data may exist at all for a given field. The entry still gets written, but the affected fields are marked unverified and listed explicitly — a gap is never filled with an invented number.",
  },

  aboutBadgesTitle: { zh: '三种数据标记的含义', en: 'What the Three Badges Mean' },
  aboutBadgeVerifiedDesc: {
    zh: '该条目的每一项字段都已核对到一份可直接查阅（可抓取）的一手来源，没有依赖搜索摘要或二手转述。',
    en: 'Every field in this entry has been cross-checked against a primary source that was directly fetchable — not relied on a search snippet or a secondary paraphrase.',
  },
  aboutBadgePartialDesc: {
    zh: '大部分字段有可靠来源支持，但个别字段——通常因官方数据表被登录墙拦截，或只能通过搜索结果摘要而非完整网页确认——未能对照一手来源核实。具体是哪些字段，会在条目的"数据来源"引用说明中标出。',
    en: 'Most fields are solidly sourced, but specific fields — usually because the official TDS was gated, or could only be confirmed via a search-result snippet rather than the full page — could not be checked against a primary source. Exactly which fields are called out in that entry\'s citation notes.',
  },
  aboutBadgeUnverifiedDesc: {
    zh: '未能找到该原料对应字段的任何公开可查资料（常见于较新或部分中国本土原料）。这些字段仍会显示，但仅供参考，配方前务必自行向供应商索取一手数据表核实。',
    en: 'No checkable public data could be found at all for this entry\'s flagged fields (common for newer or some Chinese-domestic ingredients). These fields are still shown, but for reference only — always request a primary data sheet from the supplier directly before formulating with them.',
  },
  aboutBadgeCount: { zh: '{n} / {total} 个词条', en: '{n} / {total} entries' },

  aboutSourcesTitle: { zh: '常用一手与二手来源', en: 'Primary & Secondary Sources Used' },
  aboutSourcesSuppliersIntro: {
    zh: '优先引用以下供应商的官方技术资料：',
    en: 'Official technical materials from the following suppliers are preferred wherever available:',
  },
  aboutSourcesFallbackIntro: {
    zh: '当官方数据表不可获取时，会依次尝试以下二手/聚合渠道：Knowde、MakingCosmetics、SpecialChem、UL Prospector 等原料聚合数据库，以及欧盟 CosIng 成分数据库和已发表的化妆品化学文献。',
    en: 'When the official TDS is unavailable, the fallback chain tries ingredient-aggregator databases (Knowde, MakingCosmetics, SpecialChem, UL Prospector), the EU CosIng ingredient database, and published cosmetic-chemistry literature, in roughly that order.',
  },

  aboutLimitationsTitle: { zh: '局限性说明', en: 'Known Limitations' },
  aboutLimitationsBody: {
    zh: '本站的"核实"是指基于公开网络资料的二次核实——即找到并引用真实发布的供应商文档，而非实验室层面的独立检测，也无法访问需要账号权限的付费/受限技术数据表。部分聚合网站（如SpecialChem、UL Prospector）会对自动化访问返回403拒绝，这种情况下该条目会依据搜索结果摘要标注来源，并在引用说明中明确指出未能直接抓取完整页面。配方决策前，仍建议直接联系供应商获取官方一手数据表。',
    en: "\"Verification\" here means secondary verification against publicly available web sources — locating and citing real, published supplier documents — not independent lab testing, and not access to gated/account-only technical data sheets. Some aggregator sites (e.g. SpecialChem, UL Prospector) return a 403 to automated access; in those cases the entry is sourced from search-result snippets instead, and the citation note says so explicitly. Before finalizing a formulation, always confirm critical specs directly with the supplier's own primary data sheet.",
  },
} as const

export type StringKey = keyof typeof strings
