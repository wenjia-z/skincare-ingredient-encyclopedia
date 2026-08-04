import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'xanthan-gum',
  category: 'polymer',
  inciName: 'Xanthan Gum',
  nameZh: '黄原胶',
  tradeNames: [
    { name: 'Keltrol CG', supplier: 'CP Kelco' },
    { name: 'Xanthan Gum, Prehydrated', supplier: 'MakingCosmetics' },
  ],
  chemicalClass: {
    zh: '发酵法微生物多糖（杂多糖）',
    en: 'Microbial fermentation-derived heteropolysaccharide (biogum)',
  },
  chemicalStructureSummary: {
    zh: '由甘蓝黑腐病黄单胞菌（Xanthomonas campestris）发酵葡萄糖/蔗糖产生的高分子量杂多糖。主链为β-1,4键连接的葡萄糖单元（结构上与纤维素相同），侧链由甘露糖与葡萄糖醛酸组成并通过氢键、静电作用与疏水缔合紧贴主链排列，使分子整体呈刚性螺旋构象。该刚性螺旋结构在静止/低剪切下形成强的分子间缔合网络（高粘度），受到剪切时螺旋结构沿流场取向、缔合被破坏，粘度大幅下降；剪切停止后又迅速恢复——这是其典型"假塑性/剪切变稀"流变行为的结构根源。',
    en: 'A high-molecular-weight heteropolysaccharide produced by fermenting glucose/sucrose with Xanthomonas campestris. The backbone is β-1,4-linked glucose (structurally identical to cellulose), with mannose/glucuronic-acid side chains that lie close against the backbone via hydrogen bonding, electrostatic, and hydrophobic association, giving the molecule an overall rigid helical conformation. At rest/low shear this rigid helix forms a strong intermolecular associative network (high viscosity); under shear the helices align with flow and the associations break down, sharply reducing viscosity, then recover quickly once shear stops — the structural basis of its characteristic pseudoplastic/shear-thinning rheology.',
  },
  performance: {
    skinFeel: {
      zh: '高浓度时呈凝胶状粘稠质地；剪切变稀特性使其涂抹展开时阻力小、易铺展，静置后迅速恢复粘稠以支撑悬浮体系',
      en: 'gel-like, viscous texture at higher concentration; shear-thinning behavior means low resistance and easy spreading on application, with viscosity quickly recovering at rest to support suspension',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非乳化剂，常作为乳液稳定剂/流变改性剂与乳化剂复配',
      en: 'not an emulsifier itself; commonly paired with an emulsifier as a stabilizing/rheology-modifying agent',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '剪切变稀特性显著（假塑性），涂抹感轻盈、静置悬浮能力强，是配方中悬浮颜料/珠光剂/不溶性活性物的常用选择',
      en: 'strongly pseudoplastic/shear-thinning — light on application yet strongly suspending at rest, a common choice for suspending pigments, pearlizers, or insoluble actives',
    },
    {
      zh: '发酵法天然来源、pH稳定范围宽（约3-12），耐盐/耐电解质性较好',
      en: 'naturally derived via fermentation, broad pH stability (~pH 3-12), and relatively good salt/electrolyte tolerance',
    },
    {
      zh: '与半乳甘露聚糖类（如刺槐豆胶）复配可产生协同增效，用更低总胶量达到目标粘度',
      en: 'synergizes with galactomannans (e.g. locust bean gum) to boost viscosity at lower total gum loading',
    },
  ],
  weaknesses: [
    {
      zh: '分散不当（未充分预分散或加水过快）易结块，需借助甘油/丙二醇预分散或高速搅拌',
      en: 'prone to clumping if not properly pre-dispersed (e.g. via glycol pre-wetting or high-shear mixing) before hydration',
    },
    {
      zh: '高浓度下质地偏"胶感"粘稠，用于强调清爽肤感的精华配方需谨慎控制用量',
      en: 'at higher concentrations the texture is distinctly "gummy"/viscous — needs careful dosing in serums aiming for a light feel',
    },
    {
      zh: '发酵多糖类，个别配方中可能受微生物酶（如特定防腐失效情况下）降解影响粘度稳定性',
      en: 'as a fermentation-derived polysaccharide, viscosity stability can in principle be affected by microbial enzymatic degradation if preservation fails',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '悬浮体系（磨砂膏、含颗粒/珠光精华）', en: 'suspension systems (scrubs, particle/pearl-suspending serums)' },
    },
    {
      system: { zh: '乳液/乳霜稳定增稠', en: 'emulsion/cream stabilization & thickening' },
    },
    {
      system: { zh: '表面活性剂体系（洁面、沐浴露）增稠增泡', en: 'surfactant systems (cleansers, body wash) — thickening and foam enhancement' },
    },
  ],
  typicalUseLevel: { min: 0.1, max: 2, unit: '%' },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'sepimax-zen'],
  citations: [
    {
      id: 'cosmile-xanthan-structure',
      supplier: 'COSMILE Europe',
      documentTitle: 'Xanthan Gum — INCI Ingredient Database Entry',
      url: 'https://cosmileeurope.eu/inci/detail/16999/xanthan-gum/',
      accessedDate: '2026-08-04',
      note: 'Used for backbone/side-chain structure description and general functional classification.',
    },
    {
      id: 'makingcosmetics-xanthan-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'Xanthan Gum, Prehydrated 316 — Technical Data',
      url: 'https://www.makingcosmetics.com/THK-XTGM-01.html?lang=en_US',
      accessedDate: '2026-08-04',
      note: 'Used for use level, dispersion/hydration guidance, and application list.',
    },
    {
      id: 'knowde-keltrolcg-tds',
      supplier: 'CP Kelco (via Knowde)',
      documentTitle: 'KELTROL CG Xanthan Gum — Product Technical Data',
      url: 'https://www.knowde.com/stores/cp-kelco/products/keltrol-cg-xanthan-gum',
      accessedDate: '2026-08-04',
      note: 'Used for INCI/CAS confirmation and application category list.',
    },
    {
      id: 'search-xanthan-rheology-mechanism',
      supplier: 'Published rheology literature (ScienceDirect/ResearchGate, indexed excerpts)',
      documentTitle: 'Xanthan gum helical conformation and shear-thinning behavior (multiple papers)',
      url: 'https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/xanthan-gum',
      accessedDate: '2026-08-04',
      note: 'Rigid-helix / shear-thinning mechanism and pH 3-12 stability figure found via web search snippets of published rheology literature; direct fetch of the ScienceDirect page was blocked (HTTP 403), so the exact wording is not independently confirmed first-hand.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-04',
})
