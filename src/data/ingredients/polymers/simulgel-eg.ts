import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'simulgel-eg',
  category: 'polymer',
  inciName: 'Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer (and) Isohexadecane (and) Polysorbate 80',
  nameZh: '丙烯酸钠/丙烯酰二甲基牛磺酸钠共聚物（和）异十六烷（和）聚山梨醇酯80',
  tradeNames: [{ name: 'Simulgel EG', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '预制反相乳液型合成丙烯酸类共聚物（磺酸型，液态即用型）',
    en: 'Pre-formed inverse-emulsion synthetic acrylic copolymer (sulfonate-type, ready-to-use liquid)',
  },
  chemicalStructureSummary: {
    zh: '通过反相乳液聚合工艺，将阴离子丙烯酸钠与磺酸型单体丙烯酰二甲基牛磺酸钠共聚，聚合物以已分散、预中和的液态形式直接分散在异十六烷（惰性溶剂载体）与聚山梨醇酯80（辅助乳化剂）中供货，是一款"即开即用"的液体聚合物，无需另行溶解或中和。链上磺酸基（-SO3⁻）解离几乎不受pH影响，赋予聚合物在遇水后快速水合、形成粘弹性网络的能力，同时载体中的聚山梨醇酯80有助于该聚合物在体系中更均匀地分散和成胶。',
    en: 'Produced via inverse-emulsion polymerization, combining anionic sodium acrylate with the sulfonate monomer sodium acryloyldimethyl taurate; the resulting polymer is supplied already dispersed and pre-neutralized as a ready-to-use liquid, carried in isohexadecane (an inert solvent vehicle) with polysorbate 80 (a co-emulsifier) to aid dispersion. This "open-and-use" liquid form needs no separate dissolution or neutralization step. The sulfonate group (-SO3-) on the backbone ionizes essentially independent of pH, giving the polymer rapid hydration and viscoelastic-network formation on contact with water, while the polysorbate 80 in the carrier helps the polymer disperse and gel more evenly through the system.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '免中和、即开即用从何而来', en: 'Where the no-neutralization, ready-to-use property comes from' },
      explanation: {
        zh: '聚合物在生产阶段即以反相乳液聚合方式完成聚合并预中和，出厂前磺酸基已全部转化为带负电的磺酸根并稳定分散在异十六烷/聚山梨醇酯80载体中；配方师只需将其直接加入水相搅拌分散即可成胶，无需像传统卡波姆粉末那样另行中和，简化了冷法工艺流程。',
        en: "Polymerization and neutralization are both completed during manufacture via the inverse-emulsion process — the sulfonate groups are already fully converted to their negatively charged form and stably dispersed in the isohexadecane/polysorbate 80 carrier before it ships. The formulator simply stirs it directly into the water phase to gel, with no separate neutralization step like a traditional Carbomer powder requires — simplifying cold-process manufacturing.",
      },
    },
    {
      aspect: { zh: '柔和、轻盈肤感从何而来', en: 'Where the soft, light skin feel comes from' },
      explanation: {
        zh: '磺酸型单体的解离不依赖羧酸根，聚合物网络在成胶后不会像部分羧酸类聚合物那样在皮肤表面留下明显的"拉丝"或紧绷感；同时载体中的惰性溶剂异十六烷本身具有轻盈、不油腻的铺展特性，两者共同作用使该原料呈现供应商所述"柔软、清爽、轻盈"的肤感，区别于粉末型丙烯酸类聚合物成胶后偏厚重的质地。',
        en: "Because the sulfonate monomer's ionization does not depend on carboxylate groups, the resulting gel network does not leave the pronounced \"stringy\"/tight after-feel that some carboxylate-based polymers can. The inert isohexadecane carrier itself spreads lightly and non-greasily, and together these give the supplier-described \"soft, fresh, light\" skin feel — distinct from the comparatively heavier texture of powder-form acrylic polymers once gelled.",
      },
    },
    {
      aspect: { zh: '兼具乳化稳定能力从何而来', en: 'Where the emulsion-stabilizing ability comes from' },
      explanation: {
        zh: '共聚物骨架吸水膨胀形成三维粘弹网络的同时，配方中已内置的聚山梨醇酯80可辅助在油滴表面形成界面膜，二者共同作用使该原料除增稠外还具备乳化稳定功能，可作为唯一乳化/稳定体系使用（供应商数据：作为唯一乳化剂用量1-5%），而不仅是增稠剂。',
        en: 'While the copolymer backbone swells on hydration into a 3D viscoelastic network, the polysorbate 80 already built into the formula assists in forming an interfacial film around oil droplets. Together these give the material emulsion-stabilizing function in addition to thickening, letting it serve as a sole emulsifying/stabilizing system (supplier-referenced use level: 1-5% as sole emulsifier) rather than functioning purely as a thickener.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"柔软、清爽、轻盈"质地，兼顾丰盈感与轻薄铺展性，适用于多种气候与产品类型',
      en: 'described by the supplier as giving a "soft, fresh, light" texture that balances richness with light spreadability, suited to a range of climates and product types',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '兼具增稠与乳化稳定双重功能，属于"聚合物乳化剂/稳定剂"一类，可作为唯一乳化体系或与其他乳化剂复配使用',
      en: 'combines thickening and emulsion-stabilizing function — classed as a "polymeric emulsifier/stabilizer" that can serve as the sole emulsifying system or be paired with another emulsifier',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '预制液态、免中和，冷法工艺下可直接分散使用，简化生产流程',
      en: 'pre-formed liquid requiring no neutralization — disperses directly in cold-process manufacturing, simplifying production',
    },
    {
      zh: '肤感柔和轻盈，供应商定位为在丰盈质地与清爽感之间取得平衡，适合多品类应用（面部/身体护理、防晒、彩妆）',
      en: 'soft, light skin feel positioned by the supplier as balancing richness with a fresh feel, suited to a wide range of categories (face/body care, sun care, color cosmetics)',
    },
    {
      zh: '不含溶剂型生产工艺（供应商称为"solvent-free" manufacturing process），兼容多种防晒剂、颜料与油相成分',
      en: 'manufactured via a solvent-free process (per supplier claims) and compatible with a wide range of UV filters, pigments, and oil-phase ingredients',
    },
  ],
  weaknesses: [
    {
      zh: '作为合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylic polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '含有效pH范围限制（供应商数据：约pH 5.5-12），配方pH需在此区间内才能保证充分成胶',
      en: 'has a defined effective pH range (supplier data: ~pH 5.5-12) — the formula pH must fall within this window for full gelling',
    },
    {
      zh: '如同多数聚合物型增稠剂，对高浓度电解质（盐、蛋白质、酸性活性物）较为敏感，配方中引入这些成分时需谨慎测试',
      en: 'like most polymeric thickeners, sensitive to high electrolyte loads (salts, proteins, acidic actives) — formulas introducing these should be tested carefully',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '面部/身体护理乳液与乳霜（唯一乳化剂或复配）', en: 'face & body care lotions and creams (as sole emulsifier or in combination)' },
      notes: { zh: '供应商参考：作为唯一乳化剂用量1-5%；作为乳后增稠/稳定剂用量0.5-2%', en: 'supplier-referenced guidance: 1-5% as sole emulsifier; 0.5-2% as a post-emulsification thickener/stabilizer' },
    },
    { system: { zh: '防晒产品', en: 'sun care products' } },
    { system: { zh: '彩妆（乳液/膏霜型）', en: 'color cosmetics (fluid/cream formats)' } },
    { system: { zh: '沐浴/洁肤体系', en: 'bath & shower systems' } },
  ],
  typicalUseLevel: { min: 0.5, max: 5, unit: '%' },
  relatedIngredientSlugs: ['sepinov-emt-10', 'sepimax-zen', 'aristoflex-avc'],
  citations: [
    {
      id: 'knowde-simulgeleg-tds',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'SIMULGEL EG — Product Technical Data',
      url: 'https://www.knowde.com/stores/seppic-inc/products/simulgel-eg',
      accessedDate: '2026-08-06',
      note: "Used for INCI composition, physical form, ionic character, pH range (5.5-12), appearance/texture description, applications list, and manufacturing-process claims (solvent-free, preservative-free). Seppic's own product page (seppic.com) rendered no static content when fetched directly in this session.",
    },
    {
      id: 'specialchem-simulgeleg-search',
      supplier: 'SpecialChem / formulator reference (indexed excerpt)',
      documentTitle: 'SIMULGEL EG — Cosmetics Ingredient Listing & formulation reference',
      url: 'https://www.specialchem.com/cosmetics/product/seppic-simulgel-eg',
      accessedDate: '2026-08-06',
      note: 'Direct fetch of this page returned HTTP 403; use-level figures (0.5-2% as post-emulsification stabilizer/thickener, 1-5% as sole emulsifier) and the electrolyte-sensitivity note were found via web-search snippets referencing this and related formulator sources, not independently confirmed against the full primary document — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
