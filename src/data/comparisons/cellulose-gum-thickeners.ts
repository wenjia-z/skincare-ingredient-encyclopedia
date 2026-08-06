import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'cellulose-gum-thickeners-ionic-vs-nonionic',
  title: {
    zh: '纤维素/天然胶类增稠剂：离子型 vs 非离子型',
    en: 'Cellulose & Natural Gum Thickeners: Ionic vs. Nonionic',
  },
  category: 'polymer',
  ingredientSlugs: ['natrosol-hec', 'sodium-cmc', 'sclerotium-gum'],
  extraDimensions: [
    {
      key: 'ionic-character',
      label: { zh: '离子性质', en: 'Ionic character' },
      valuesBySlug: {
        'natrosol-hec': { zh: '非离子', en: 'Nonionic' },
        'sodium-cmc': { zh: '阴离子', en: 'Anionic' },
        'sclerotium-gum': { zh: '非离子', en: 'Nonionic' },
      },
    },
    {
      key: 'origin',
      label: { zh: '来源类型', en: 'Origin type' },
      valuesBySlug: {
        'natrosol-hec': { zh: '半合成（纤维素化学改性）', en: 'Semi-synthetic (chemically modified cellulose)' },
        'sodium-cmc': { zh: '半合成（纤维素化学改性）', en: 'Semi-synthetic (chemically modified cellulose)' },
        'sclerotium-gum': { zh: '发酵法天然来源', en: 'Naturally derived via fermentation' },
      },
    },
  ],
  summary: {
    zh: '三者都是不依赖丙烯酸类交联网络的"传统"增稠剂，但离子性质与耐受行为不同。羟乙基纤维素（HEC）链上不带可解离基团，粘度对pH与电解质环境相对不敏感，是阳离子表面活性剂/调理剂配方（如护发素）中少数可用的高效增稠剂之一。羧甲基纤维素钠（CMC）带阴离子羧甲基，遇水解离产生静电排斥增稠，但也因此对高价阳离子（钙、镁等）敏感，可能形成沉淀。小核菌胶（Sclerotium Gum）为发酵法天然非离子多糖，呈刚性三螺旋构象，兼具增稠与悬浮能力，常用于"天然"定位的配方中替代黄原胶。三者的选择需结合体系离子环境（尤其是否含阳离子活性物）与天然/合成定位来判断。',
    en: 'All three are "traditional" thickeners that do not rely on an acrylate crosslinked network, but differ in ionic character and tolerance behavior. Hydroxyethylcellulose (HEC) carries no ionizable groups on its chain, so its viscosity is relatively insensitive to pH and electrolyte environment, making it one of the few efficient thickeners usable in cationic-surfactant/conditioning formulas (e.g. hair conditioners). Sodium carboxymethylcellulose (CMC) carries an anionic carboxymethyl group that thickens via electrostatic repulsion on ionization, but is correspondingly sensitive to multivalent cations (calcium, magnesium), which can cause precipitation. Sclerotium Gum is a fermentation-derived natural nonionic polysaccharide with a rigid triple-helical conformation, combining thickening with suspension ability, and is often used in "naturally positioned" formulas as a xanthan gum alternative. Choosing among the three depends on the system\'s ionic environment (especially whether cationic actives are present) and natural-vs-synthetic positioning.',
  },
})
