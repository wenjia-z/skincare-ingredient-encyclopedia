import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'ziboxan-xanthan-gum',
  category: 'polymer',
  inciName: 'Xanthan Gum',
  nameZh: '黄原胶（中国产，Ziboxan®品牌）',
  tradeNames: [{ name: 'Ziboxan', supplier: 'Deosen Biochemical' }],
  chemicalClass: {
    zh: '发酵法微生物多糖（杂多糖），中国产化妆品级供应链',
    en: 'Microbial fermentation-derived heteropolysaccharide (biogum), from a China-based cosmetic-grade supply chain',
  },
  chemicalStructureSummary: {
    zh: 'Ziboxan®是中国内蒙古鄂尔多斯的Deosen Biochemical（大成生化，据行业资料为全球产能最大的黄原胶生产商之一）以甘蓝黑腐病黄单胞菌（Xanthomonas campestris）发酵糖类原料生产的黄原胶品牌，INCI名称与化学结构均与标准黄原胶（Xanthan Gum）一致：主链为β-1,4键连接的葡萄糖单元，侧链由甘露糖与葡萄糖醛酸组成并紧贴主链排列，形成刚性螺旋构象。该品牌下针对化妆品与个人护理场景提供细分牌号（如Ziboxan® TS80/200、TP、AC等），供应商宣称其化妆品级产品"不含纤维素酶"，用于避免体系粘度随时间因酶解而衰减。',
    en: "Ziboxan® is a xanthan gum brand produced by Deosen Biochemical, based in Ordos, Inner Mongolia, China (described in industry sources as one of the world's largest xanthan gum producers), made by fermenting sugar feedstock with Xanthomonas campestris. Its INCI name and chemical structure are identical to standard xanthan gum: a β-1,4-linked glucose backbone with mannose/glucuronic-acid side chains lying close against the backbone, giving a rigid helical conformation. Under this brand, the supplier offers cosmetics/personal-care-specific grades (e.g. Ziboxan® TS80/200, TP, AC), and states its cosmetic-grade products are \"cellulase-free\" — intended to prevent viscosity from decaying over time due to enzymatic (cellulase) degradation.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '低用量强增稠/剪切变稀从何而来', en: 'Where the strong low-dose thickening and shear-thinning come from' },
      explanation: {
        zh: '与所有黄原胶一样，Ziboxan®的刚性螺旋分子在静止状态下相互缔合形成跨越体系的弱网络，赋予其在极低用量下的强增稠与悬浮能力；涂抹/挤出等剪切作用下螺旋沿流场取向、缔合点被拆散，粘度大幅下降，供应商也据此强调其"优异的剪切变稀流动性，使产品易于从管中挤出"，停止剪切后网络又迅速恢复。',
        en: "Like all xanthan gum, Ziboxan®'s rigid helical molecules associate with each other at rest to form a network spanning the whole system, giving strong thickening and suspension ability at very low use levels. Under the shear of application or extrusion, the helices align with flow and their association points break apart, sharply lowering viscosity — the supplier likewise highlights 'excellent shear-thinning flow that makes products easy to squeeze from a tube' — and the network quickly re-forms once shear stops.",
      },
    },
    {
      aspect: { zh: '面膜类应用中"贴肤易撕"从何而来', en: "Where the mask application's 'clings well, peels easily' behavior comes from" },
      explanation: {
        zh: '黄原胶静置时的高粘度/一定屈服应力使其对皮肤表面具有良好的初始粘附力，有助于面膜基质紧贴皮肤不易滑落；而剪切变稀特性又使其在揭除面膜时的剥离阻力相对可控，二者共同解释了供应商所述"因黄原胶良好的粘附性与高静态粘度，面膜更易贴合皮肤且易于撕除"这一应用表现。',
        en: "Xanthan gum's high at-rest viscosity/meaningful yield stress gives it good initial adhesion to the skin surface, helping a mask base cling without sliding off; its shear-thinning behavior then keeps peel-off resistance manageable when the mask is removed. Together these explain the supplier's stated application benefit that 'due to xanthan gum's good adhesion and high static viscosity, masks adhere to skin more easily and peel off easily.'",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '与标准黄原胶一致：高浓度下呈凝胶状粘稠质地，剪切变稀特性使涂抹展开阻力小，供应商称其可使产品"扩散吸收更快，令皮肤触感更顺滑"',
      en: "consistent with standard xanthan gum: gel-like, viscous texture at higher concentration, with shear-thinning giving low resistance on application; the supplier states it can make products 'diffuse and absorb more quickly, leaving skin feeling smoother'",
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非乳化剂，常作为乳液稳定剂/流变改性剂与乳化剂复配，与标准黄原胶一致',
      en: 'not an emulsifier itself; commonly paired with an emulsifier as a stabilizing/rheology-modifying agent, consistent with standard xanthan gum',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '中国本土规模化生产，供应商宣传定位为全球产能领先的黄原胶生产商之一，为国内配方师提供本地化供应链选择',
      en: 'large-scale China-based production; the supplier is positioned in industry sources as one of the world\'s leading xanthan gum producers by capacity, offering a localized supply-chain option for domestic formulators',
    },
    {
      zh: '化妆品/个人护理专用牌号（Ziboxan® TS80/200、TP、AC等）针对不同应用场景（面膜、洗护、牙膏等）分级提供，供应商数据：化妆品用推荐添加量约0.2%-0.5%',
      en: 'dedicated cosmetics/personal-care grades (Ziboxan® TS80/200, TP, AC, etc.) offered by application scenario (masks, cleansing/wash-care, toothpaste, etc.); supplier data: recommended cosmetic dosage approx. 0.2%-0.5%',
    },
    {
      zh: '供应商称化妆品级产品"不含纤维素酶"，旨在避免体系粘度因酶解而随时间衰减',
      en: 'the supplier states cosmetic-grade product is "cellulase-free," intended to prevent viscosity from decaying over time due to enzymatic degradation',
    },
  ],
  weaknesses: [
    {
      zh: '公开可查的正式技术数据表（含具体粘度mPa·s数值、pH稳定区间等）未能在本次检索中直接获取，官网因证书问题在本次会话中无法直接抓取，现有数据主要来自供应商官方博客/文章转载',
      en: 'a formal public technical data sheet (with specific viscosity in mPa·s, pH stability range, etc.) was not directly obtained in this research pass; the supplier\'s own website could not be directly fetched in this session due to a certificate issue, so the data used here comes mainly from the supplier\'s own blog/article republication',
    },
    {
      zh: '与国际知名黄原胶品牌（如CP Kelco Keltrol系列）相比，第三方独立评测/文献引用相对较少，实际配方性能建议进行小样验证对比',
      en: 'compared with internationally established xanthan gum brands (e.g. CP Kelco\'s Keltrol line), there is comparatively little independent third-party review/literature coverage — small-batch bench validation against alternatives is recommended before committing',
    },
    {
      zh: '继承标准黄原胶的固有缺点：分散不当（未充分预分散或加水过快）易结块，需借助甘油/丙二醇预分散或高速搅拌',
      en: 'inherits the intrinsic limitations of standard xanthan gum: prone to clumping if not properly pre-dispersed (e.g. via glycol pre-wetting or high-shear mixing) before hydration',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '面膜（贴片/泥膜基质）', en: 'facial masks (sheet-mask essence / clay-mask base)' },
      notes: { zh: '供应商重点推荐场景，强调贴肤性与易撕除性', en: "a scenario the supplier specifically highlights, emphasizing skin adhesion and easy peel-off" },
    },
    {
      system: { zh: '洁面/沐浴等表面活性剂体系增稠', en: 'thickening of surfactant systems (cleansers, body wash)' },
      notes: { zh: '供应商数据：推荐添加量约0.2%-0.5%', en: 'supplier data: recommended dosage approx. 0.2%-0.5%' },
    },
    {
      system: { zh: '乳液/乳霜稳定增稠', en: 'emulsion/cream stabilization & thickening' },
    },
  ],
  typicalUseLevel: { min: 0.2, max: 0.5, unit: '%' },
  regulatoryNotes: {
    zh: '未见供应商专项公开的中国化妆品监管备案信息，建议配方师在实际使用前向供应商索取最新法规/备案文件',
    en: 'no supplier-specific public data on China cosmetic-regulatory registration/filing status was found; formulators should request current regulatory/filing documentation from the supplier before use',
  },
  relatedIngredientSlugs: ['xanthan-gum', 'konjac-glucomannan'],
  citations: [
    {
      id: 'deosen-medium-xanthan-cosmetic-applications',
      supplier: 'Deosen Biochemical (official company Medium account)',
      documentTitle: 'Xanthan Gum in Health, Personal Care & Cosmetic Applications',
      url: 'https://deosenbiochemical.medium.com/xanthan-gum-in-health-personal-care-cosmetic-applications-5b4a43deff1d',
      accessedDate: '2026-08-05',
      note: "Used for recommended cosmetic grades (Ziboxan® TS80/200, TP, AC), recommended dosage (0.2%-0.5%), skin-feel/mask-adhesion claims, and the 'cellulase-free' claim. The supplier's primary website (deosen.com) returned a certificate error on direct fetch in this session, so this company-authored secondary channel was used instead.",
    },
    {
      id: 'search-deosen-company-background',
      supplier: 'Multiple industry sources (UL Prospector, Deosen distributor listings — indexed excerpts)',
      documentTitle: 'Deosen Biochemical (Ordos) Ltd. — company/producer background',
      url: 'https://www.ulprospector.com/en/asia/Food/Suppliers/11552/Deosen-Biochemical-Ltd',
      accessedDate: '2026-08-05',
      note: 'Used for company background (China-based, large-scale xanthan gum producer) via web search snippets; not independently fetched/confirmed in full.',
    },
    {
      id: 'cosmile-xanthan-structure-shared',
      supplier: 'COSMILE Europe',
      documentTitle: 'Xanthan Gum — INCI Ingredient Database Entry',
      url: 'https://cosmileeurope.eu/inci/detail/16999/xanthan-gum/',
      accessedDate: '2026-08-05',
      note: 'General xanthan gum backbone/side-chain structure and INCI classification — used as background chemistry shared by all xanthan gum grades regardless of producer (see also the xanthan-gum entry from CP Kelco for the same underlying chemistry).',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary', 'weaknesses'],
  lastUpdated: '2026-08-05',
})
