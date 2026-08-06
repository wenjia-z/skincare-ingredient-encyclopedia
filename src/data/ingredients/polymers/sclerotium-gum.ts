import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sclerotium-gum',
  category: 'polymer',
  inciName: 'Sclerotium Gum',
  nameZh: '小核菌胶',
  tradeNames: [
    { name: 'Amigel', supplier: 'Alban Muller' },
    { name: 'Amigum', supplier: 'Alban Muller' },
  ],
  chemicalClass: {
    zh: '发酵法非离子微生物多糖（β-葡聚糖类）',
    en: 'Fermentation-derived nonionic microbial polysaccharide (β-glucan type)',
  },
  chemicalStructureSummary: {
    zh: '由丝状真菌罗尔斯氏菌核菌（Sclerotium rolfsii）发酵产生的天然非离子多糖，外观为白色至类白色粉末，水溶性好。主链由β-(1→3)键连接的葡萄糖单元构成，每隔约3个主链葡萄糖单元通过β-(1→6)键连接一个葡萄糖侧基分支，形成高度支化的结构；在水溶液中该链倾向于形成线性、刚性的三螺旋构象。1%水溶液粘度约1800-5000 cPs，pH约5.5-8.5（1%水溶液，供应商数据）。',
    en: 'A natural nonionic polysaccharide produced by fermenting the filamentous fungus Sclerotium rolfsii, supplied as a white-to-off-white, readily water-soluble powder. The backbone consists of β-(1→3)-linked glucose units, with a β-(1→6)-linked glucose side branch attached roughly every third backbone unit, giving a highly branched structure; in aqueous solution the chain tends to adopt a linear, rigid triple-helical conformation. A 1% aqueous solution has a viscosity of approximately 1800-5000 cPs and a pH of ~5.5-8.5 (supplier data).',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高溶解度与优异增稠能力从何而来', en: 'Where the high solubility and strong thickening power come from' },
      explanation: {
        zh: '主链上每隔约3个葡萄糖单元就带有一个β-(1→6)葡萄糖侧支，这一高度支化结构打断了主链之间紧密堆叠、结晶的倾向，使大量羟基暴露于水中形成氢键，因此小核菌胶具有优异的水溶性；溶解后线性刚性的三螺旋链彼此缔合、交叠，在较低用量下即可形成覆盖整个体系的粘弹网络，赋予其强增稠与凝胶能力，供应商将其定位为"卡波姆的天然替代品"。',
        en: "A β-(1→6)-linked glucose side branch on roughly every third backbone unit disrupts the tight, crystalline stacking that an unbranched glucan chain would otherwise form, exposing abundant hydroxyls to hydrogen-bond with water — which is why scleroglucan dissolves so readily. Once dissolved, the linear, rigid triple-helical chains associate and overlap with each other, forming a viscoelastic network across the whole system even at low use levels, giving strong thickening/gelling power — the basis for the supplier's positioning of it as a 'natural alternative to Carbomer.'",
      },
    },
    {
      aspect: { zh: '宽pH/盐/温度稳定性从何而来', en: 'Where the broad pH/salt/temperature stability comes from' },
      explanation: {
        zh: '增稠网络主要依靠三螺旋链之间的氢键与物理缔合而非可解离基团间的静电排斥（其主链为非离子多糖），因此不像卡波姆或CMC那样依赖pH调节的电荷状态、也不易被电解质的德拜屏蔽效应破坏，这是其在较宽pH、盐浓度与温度范围内仍能保持结构与粘度稳定的结构基础。',
        en: 'The thickening network relies mainly on hydrogen bonding and physical association between triple-helical chains rather than electrostatic repulsion between ionizable groups, because the backbone is a nonionic polysaccharide. Unlike Carbomer or CMC, it does not depend on a pH-tuned charge state and is not readily disrupted by the Debye screening effect of electrolytes — the structural basis for its reported stability across a broad range of pH, salt concentration, and temperature.',
      },
    },
    {
      aspect: { zh: '柔滑肤感与悬浮/乳化稳定作用从何而来', en: 'Where the soft skin feel and suspension/emulsion-stabilizing action come from' },
      explanation: {
        zh: '支化多糖链上大量的羟基使其具有良好的保湿、成膜特性，涂抹后在皮肤表面形成柔软的水合膜，带来供应商所述"柔滑触感"；同时其三螺旋缔合网络在静置状态下具有一定屈服应力，足以延缓分散相液滴/颗粒的迁移聚集，因此也常被用于稳定乳液与悬浮体系。',
        en: "The abundant hydroxyls on the branched polysaccharide chain give it good moisture-binding and film-forming character, leaving a soft, hydrated film on skin after application — the basis for the supplier-described 'soft, supple' skin feel. At the same time, the associative triple-helix network has meaningful yield stress at rest, sufficient to slow the migration/coalescence of dispersed droplets or particles, which is why it is also commonly used to stabilize emulsions and suspensions.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"柔软丰润"的触感，成胶后质地细腻，涂抹后无明显粘腻感',
      en: "described by the supplier as giving a 'soft and supple' touch; forms a fine-textured gel with no noticeable tackiness on application",
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非传统意义上的乳化剂，但因其对乳液/悬浮体系的稳定作用，部分文献将其归类为具有一定乳化辅助能力',
      en: 'not a conventional emulsifier, though its role in stabilizing emulsions/suspensions leads some literature to credit it with a degree of emulsification-assisting ability',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '发酵法天然来源，常获COSMOS、ECOCERT等天然/有机认证，适合"天然感"定位的配方',
      en: 'a naturally fermented ingredient commonly carrying COSMOS/ECOCERT natural-organic certification, well suited to "natural" positioned formulas',
    },
    {
      zh: '供应商定位为卡波姆的天然替代品，能在较宽pH、盐浓度范围内提供稳定的增稠与悬浮稳定能力',
      en: 'positioned by the supplier as a natural alternative to Carbomer, providing stable thickening and suspension performance across a broad pH and salt-concentration range',
    },
    {
      zh: '涂抹肤感柔软丰润，用量极低（0.5%以下）即可用于喷雾型悬浮体系',
      en: 'gives a soft, plump skin feel and can be used at very low levels (below 0.5%) even in sprayable suspension systems',
    },
  ],
  weaknesses: [
    {
      zh: '作为发酵多糖，批次间粘度/性能一致性通常不如合成聚合物（如卡波姆）稳定，需结合具体供应商批次做小试验证',
      en: 'as a fermentation-derived polysaccharide, batch-to-batch viscosity/performance consistency is typically less tight than for a synthetic polymer like Carbomer, so bench verification per supplier batch is advisable',
    },
    {
      zh: '高用量（供应商数据：2%以上，用于极端/严苛配方场景）下成本相对较高，且质地可能偏粘稠',
      en: 'at higher use levels (supplier data: above 2%, reserved for extreme/demanding formulation scenarios) cost rises and texture can become noticeably viscous',
    },
    {
      zh: '发酵多糖类原料，需要有效防腐体系防止微生物污染导致粘度漂移',
      en: 'as a fermentation-derived polysaccharide it requires an effective preservation system to prevent microbial contamination from causing viscosity drift over time',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '天然定位凝胶（爽肤水、精华）', en: 'naturally positioned gels (toners, serums)' },
      notes: { zh: '供应商数据：0.8-1.2%用于凝胶配方', en: 'supplier data: 0.8-1.2% for gel formulations' },
    },
    {
      system: { zh: '乳液增稠稳定', en: 'emulsion thickening & stabilization' },
      notes: { zh: '供应商数据：0.5-1.5%用于乳液体系', en: 'supplier data: 0.5-1.5% for emulsion systems' },
    },
    {
      system: { zh: '喷雾型悬浮体系', en: 'sprayable suspension systems' },
      notes: { zh: '供应商数据：低于0.5%即可用于可雾化悬浮液', en: 'supplier data: below 0.5% for vaporizable/sprayable suspensions' },
    },
  ],
  typicalUseLevel: { min: 0.25, max: 2, unit: '%' },
  relatedIngredientSlugs: ['xanthan-gum', 'carbopol-ultrez-20', 'sepimax-zen'],
  citations: [
    {
      id: 'knowde-amigel-tds',
      supplier: 'Alban Muller (via Knowde)',
      documentTitle: 'Amigel — Sclerotium Gum, Product Technical Data',
      url: 'https://www.knowde.com/stores/alban-muller/products/amigel-gelling-agent',
      accessedDate: '2026-08-05',
      note: 'Used for CAS number (39464-87-4), pH range (5.5-8.5, 1% in water), viscosity (1800-5000 cPs, 1% solution), use-level breakdown by application, applications list, COSMOS/ECOCERT certification, and the "natural alternative to Carbomer" positioning.',
    },
    {
      id: 'search-sclerotium-structure',
      supplier: 'Published polysaccharide-chemistry literature (indexed excerpts, incl. ScienceDirect/PMC)',
      documentTitle: 'Scleroglucan / Sclerotium gum molecular structure (β-1,3/β-1,6 glucan, triple helix)',
      url: 'https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/scleroglucan',
      accessedDate: '2026-08-05',
      note: 'Backbone/branching structure (β-1,3 backbone with β-1,6 side branches every ~3rd unit) and triple-helix solution conformation found via web search snippets of published polysaccharide literature; direct fetch of the source pages was not completed in this session, so exact wording is not independently confirmed first-hand.',
    },
    {
      id: 'search-sclerotium-cn-use-level',
      supplier: 'CIR safety review (indexed excerpt, via Lesielle ingredient summary)',
      documentTitle: 'Sclerotium Gum / Hydrolyzed Sclerotium Gum — INCI Ingredient Summary',
      url: 'https://www.lesielle.com/us/sclerotium-gumhydrolyzed-sclerotium-gum-in-skincare-what-is-inci-1500',
      accessedDate: '2026-08-05',
      note: 'Used to cross-check the general CIR-reported typical concentration range (0.25-2%) against the Amigel per-application breakdown; found via search snippet, not independently fetched.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-05',
})
