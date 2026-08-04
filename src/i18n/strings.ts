/** Flat bilingual dictionary for UI chrome. Ingredient content itself is bilingual by construction (LocalizedText fields), not part of this file. */
export const strings = {
  siteTitle: { zh: '护肤原料百科', en: 'Skincare Ingredient Encyclopedia' },
  siteTagline: {
    zh: '乳化剂与聚合物技术百科，聚焦精华与面霜配方',
    en: 'Emulsifiers & polymers for serum and cream formulation',
  },

  navHome: { zh: '首页', en: 'Home' },
  navEmulsifiers: { zh: '乳化剂', en: 'Emulsifiers' },
  navPolymers: { zh: '聚合物 / 增稠剂', en: 'Polymers' },

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
} as const

export type StringKey = keyof typeof strings
