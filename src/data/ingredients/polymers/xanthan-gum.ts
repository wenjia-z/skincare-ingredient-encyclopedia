import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'xanthan-gum',
  category: 'polymer',
  inciName: 'Xanthan Gum',
  nameZh: '黄原胶',
  tradeNames: [
    { name: 'Keltrol CG', supplier: 'CP Kelco' },
    { name: 'Xanthan Gum, Prehydrated', supplier: 'MakingCosmetics' },
    { name: 'Rheocare XGN', supplier: 'BASF (product has since also been rebranded/marketed as Verdessence Xanthan)' },
  ],
  chemicalClass: {
    zh: '发酵法微生物多糖（杂多糖）',
    en: 'Microbial fermentation-derived heteropolysaccharide (biogum)',
  },
  chemicalStructureSummary: {
    zh: '由甘蓝黑腐病黄单胞菌（Xanthomonas campestris）发酵葡萄糖/蔗糖产生的高分子量杂多糖。主链为β-1,4键连接的葡萄糖单元（结构上与纤维素相同），侧链由甘露糖与葡萄糖醛酸组成并通过氢键、静电作用与疏水缔合紧贴主链排列，使分子整体呈刚性螺旋构象。该刚性螺旋结构在静止/低剪切下形成强的分子间缔合网络（高粘度），受到剪切时螺旋结构沿流场取向、缔合被破坏，粘度大幅下降；剪切停止后又迅速恢复——这是其典型"假塑性/剪切变稀"流变行为的结构根源。',
    en: 'A high-molecular-weight heteropolysaccharide produced by fermenting glucose/sucrose with Xanthomonas campestris. The backbone is β-1,4-linked glucose (structurally identical to cellulose), with mannose/glucuronic-acid side chains that lie close against the backbone via hydrogen bonding, electrostatic, and hydrophobic association, giving the molecule an overall rigid helical conformation. At rest/low shear this rigid helix forms a strong intermolecular associative network (high viscosity); under shear the helices align with flow and the associations break down, sharply reducing viscosity, then recover quickly once shear stops — the structural basis of its characteristic pseudoplastic/shear-thinning rheology.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠/悬浮能力从何而来', en: 'Where the thickening/suspension ability comes from' },
      explanation: {
        zh: '侧链紧贴主链形成的刚性螺旋在静止状态下彼此交叠、缔合，形成跨越整个体系的弱连接网络；这一网络在低剪切/静置下具有可观的屈服应力，足以对抗颗粒物（色素、珠光剂）的重力沉降，因此黄原胶在极低用量（0.1-2%）下即可提供很强的悬浮稳定能力。',
        en: 'The rigid helices, with side chains held close against the backbone, overlap and associate with each other at rest, forming a weak network that spans the whole system; this network has meaningful yield stress under low shear/at rest — enough to counter gravitational settling of particulates (pigments, pearlizers) — which is why xanthan gum provides strong suspension stability even at very low use levels (0.1-2%).',
      },
    },
    {
      aspect: { zh: '剪切变稀（涂抹轻盈）从何而来', en: 'Where the shear-thinning (light application feel) comes from' },
      explanation: {
        zh: '涂抹动作施加的剪切力使原本无规排列的刚性螺旋沿流动方向取向排列，分子间缔合点被逐一拆散，体系流动阻力骤降、粘度大幅降低，因此涂抹时几乎感受不到"胶感"阻力；一旦停止剪切，螺旋因布朗运动重新无序排列、缔合点重建，粘度又迅速恢复——这一"取向-解缔合-复原"循环正是假塑性行为的分子机制。',
        en: 'The shear applied during application forces the otherwise randomly oriented rigid helices to align with the flow direction, breaking apart the intermolecular association points one by one; flow resistance drops sharply and viscosity falls, so there is little "gummy" resistance felt on application. Once shear stops, Brownian motion re-randomizes the helices and rebuilds association points, restoring viscosity quickly — this "align → dissociate → recover" cycle is the molecular mechanism behind the pseudoplastic behavior.',
      },
    },
    {
      aspect: { zh: '宽pH稳定性从何而来', en: 'Where the broad pH stability comes from' },
      explanation: {
        zh: '螺旋结构由氢键、静电作用与疏水缔合共同稳定，并非单纯依赖某一可被pH剧烈影响的基团（如羧基电离态），因此在较宽pH范围（约3-12）内螺旋构象与缔合网络都能基本保持完整，粘度受pH变化影响相对较小。',
        en: "The helical structure is jointly stabilized by hydrogen bonding, electrostatic interaction, and hydrophobic association — not solely dependent on a single group whose ionization state swings sharply with pH (like a carboxyl group) — so the helix conformation and associative network stay largely intact across a wide pH range (~3-12), leaving viscosity relatively insensitive to pH changes.",
      },
    },
  ],
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
      id: 'basf-rheocarexgn-tds',
      supplier: 'BASF',
      documentTitle: 'Rheocare® XGN — Technical Information (PRD 30654984, Revision 2.0)',
      url: 'https://promo.basf.com/campaign/Projetos/CaringForYou/Documentos/Geral/Rheocare%C2%AE%20XGN.pdf',
      accessedDate: '2026-08-06',
      note: "Official BASF technical data sheet confirms Rheocare XGN's INCI is exactly 'Xanthan Gum' (CAS 11138-66-2) — i.e. the same ingredient as this entry, added here as a trade name rather than a separate file per the project's dedupe policy. TDS data: appearance (white to slightly yellow powder), viscosity 1300-1700 mPas (Brookfield, 1% xanthan gum in 1% KCl solution), pH 5.5-8.0 (1% in water), pH-stable range 2-12, non-sensitive to electrolytes and high shear rates, vegetable/glucose raw-material basis, no preservatives/antioxidants/solvents present. Use examples: co-stabilizing emulsions (0.1-0.5%) and thickening water-based systems like shower gel/shampoo (up to 1%). The product is also currently marketed by BASF/distributors as 'Verdessence Xanthan' (confirmed via BASF Care Creations and UL Prospector listings), described as 100% renewable-feedstock-based and non-GMO.",
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
  lastUpdated: '2026-08-06',
})
