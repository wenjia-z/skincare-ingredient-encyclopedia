import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'gelling-polymers-electrolyte-tolerance',
  title: {
    zh: '增稠/凝胶聚合物对比：耐电解质能力',
    en: 'Gelling Polymers: Electrolyte Tolerance Compared',
  },
  category: 'polymer',
  ingredientSlugs: ['carbopol-ultrez-20', 'sepimax-zen', 'xanthan-gum'],
  extraDimensions: [
    {
      key: 'neutralization',
      label: { zh: '是否需中和', en: 'Requires Neutralization' },
      valuesBySlug: {
        'carbopol-ultrez-20': { zh: '是（TEA/NaOH等）', en: 'Yes (TEA/NaOH etc.)' },
        'sepimax-zen': { zh: '否（预中和粉末，遇水即成胶）', en: 'No (pre-neutralized powder, gels on contact with water)' },
        'xanthan-gum': { zh: '否（非离子胶，无需中和）', en: 'No (non-ionic gum, no neutralization needed)' },
      },
    },
    {
      key: 'origin',
      label: { zh: '来源类型', en: 'Origin Type' },
      valuesBySlug: {
        'carbopol-ultrez-20': { zh: '合成（丙烯酸类）', en: 'Synthetic (acrylate)' },
        'sepimax-zen': { zh: '合成（丙烯酸类）', en: 'Synthetic (acrylate)' },
        'xanthan-gum': { zh: '发酵法天然来源', en: 'Naturally derived via fermentation' },
      },
    },
  ],
  summary: {
    zh: 'Carbopol Ultrez 20 是疏水改性交联卡波姆，耐电解质能力优于传统卡波姆但仍需中和；Sepimax ZEN 采用专利锚定结构、预中和粉末形式，耐电解质能力最强（供应商数据：耐10%盐）且工艺最简便；Xanthan Gum 为发酵法天然多糖，pH稳定范围宽、剪切变稀特性突出，适合天然定位配方，但耐盐性/耐受能力因来源结构不同而与两款合成聚合物存在差异，需结合具体配方电解质负载测试选择。',
    en: 'Carbopol Ultrez 20 is a hydrophobically modified crosslinked Carbomer with better electrolyte tolerance than plain Carbomer, but still requires neutralization. Sepimax ZEN uses a patented anchored structure and is supplied pre-neutralized, giving the strongest electrolyte tolerance (supplier data: stable to 10% salt) and the simplest process. Xanthan Gum is a naturally fermented polysaccharide with broad pH stability and pronounced shear-thinning, well suited to naturally-positioned formulas, though its salt tolerance profile differs structurally from the two synthetic polymers — formulators should test against the specific electrolyte load of their system.',
  },
})
