import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sepimax-zen',
  category: 'polymer',
  inciName: 'Polyacrylate Crosspolymer-6',
  nameZh: '聚丙烯酸酯交联聚合物-6',
  tradeNames: [{ name: 'Sepimax ZEN', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '新一代合成阴离子交联聚丙烯酸酯（预中和粉末型）',
    en: 'Next-generation synthetic anionic crosslinked polyacrylate (pre-neutralized powder)',
  },
  chemicalStructureSummary: {
    zh: '与传统卡波姆同属交联聚丙烯酸类，但采用Seppic专利的差异化交联/锚定结构（供应商称为"chassis"骨架），并以预中和粉末形式提供——遇水即可直接成胶，无需额外中和步骤。这种锚定结构在高电解质环境下仍能维持三维网络的空间占位，不像传统卡波姆那样单纯依赖羧酸根之间的静电排斥（该排斥在高盐环境下会被电荷屏蔽而失效、粘度骤降），因此表现出对高浓度电解质（供应商数据：可耐受高达10%盐）远高于传统卡波姆的耐受性。',
    en: 'A crosslinked polyacrylate related to traditional Carbomer, but built on a differentiated, patented crosslinking/anchoring architecture (marketed by Seppic as a "chassis" backbone) and supplied pre-neutralized as a powder — it gels directly on contact with water, with no separate neutralization step. This anchored structure keeps the 3D network spatially occupied even under high electrolyte load, unlike plain Carbomer, whose thickening relies purely on carboxylate electrostatic repulsion — a mechanism that collapses (and causes sharp viscosity loss) once ionic strength screens the charges. This gives markedly higher electrolyte tolerance than plain Carbomer (supplier data: stable up to 10% salt).',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠能力从何而来', en: 'Where the thickening ability comes from' },
      explanation: {
        zh: '与传统卡波姆一样，交联聚丙烯酸主链上的羧酸根之间的静电排斥仍是其主要增稠机制之一——只是Sepimax ZEN以预中和粉末形式提供，链上羧基在生产阶段已被中和为羧酸根，遇水后无需额外加碱即可立即呈伸展构象、束缚水分子成胶，因此工艺上省去了中和步骤。',
        en: "Like plain Carbomer, electrostatic repulsion between carboxylate groups on the crosslinked polyacrylic backbone remains one of the main thickening mechanisms — the difference is that Sepimax ZEN is supplied pre-neutralized as a powder, with the carboxyls already converted to carboxylate during manufacture. On contact with water it immediately adopts an extended conformation and binds water into a gel with no separate alkali addition, removing the neutralization step from the process.",
      },
    },
    {
      aspect: { zh: '强耐电解质能力从何而来', en: 'Where the strong electrolyte tolerance comes from' },
      explanation: {
        zh: '关键差异在于交联/锚定方式：供应商专利的"chassis"骨架在交联点之间引入了不依赖静电排斥的空间占位结构，即使体系中游离离子屏蔽了羧酸根之间的电荷排斥（传统卡波姆在此情形下会塌缩失粘），锚定骨架仍能撑起三维网络的基本空间构型，因此Sepimax ZEN能在高达10%盐浓度下维持粘度，耐电解质能力显著优于依赖纯静电排斥的传统卡波姆。',
        en: "The key difference is in the crosslinking/anchoring architecture: the supplier's patented \"chassis\" backbone introduces spatial anchor points between crosslinks that don't rely on electrostatic repulsion. Even when free ions in the system screen the charge repulsion between carboxylates (which is exactly when plain Carbomer collapses and loses viscosity), the anchored backbone still holds up the network's basic 3D geometry — letting Sepimax ZEN maintain viscosity at up to 10% salt, well beyond a Carbomer relying on pure electrostatic repulsion.",
      },
    },
    {
      aspect: { zh: '透明凝胶与细腻泡沫质地从何而来', en: 'Where the clear gel and fine foam texture come from' },
      explanation: {
        zh: '预中和使体系中不存在未溶解的中和剂颗粒或局部过碱区域（传统卡波姆手动中和易出现的问题），网络交联更均匀，光散射更少，因此成胶透明度更高；均匀的网络结构在起泡体系中也更容易形成薄而稳定的液膜，带来供应商所述"更细腻柔软"的泡沫质地。',
        en: 'Pre-neutralization means there are no undissolved neutralizer particles or locally over-alkaline zones (a common issue with manually neutralized Carbomer), so the network crosslinks more uniformly, scattering less light and giving higher gel clarity. That same uniform network structure also more readily forms thin, stable lamellae in foaming systems, contributing to the "finer, softer" foam texture the supplier describes.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"天鹅绒般丰润、优雅"的肤感，成胶透明清澈，起泡产品中可带来更细腻柔软的泡沫',
      en: 'described by the supplier as a "velvety, rich and elegant" skin feel; forms clear, transparent gels; in foaming products contributes finer, softer foam',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非乳化剂，常用于稳定/增稠已乳化体系或作为透明凝胶基质',
      en: 'not an emulsifier itself; typically used to stabilize/thicken an already-emulsified system or as a clear gel base',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '预中和粉末，冷法/热法均可直接分散成胶，无需额外中和步骤，简化工艺',
      en: 'pre-neutralized powder that gels directly on hydration (cold- or hot-process), no separate neutralization step — simplifies manufacturing',
    },
    {
      zh: '电解质耐受性远超传统卡波姆（供应商数据：耐受最高10%盐），适合高盐、高活性物负载配方',
      en: 'electrolyte tolerance far exceeds plain Carbomer (supplier data: stable up to 10% salt), suited to high-salt or high-active-load formulas',
    },
    {
      zh: '与水杨酸、果酸、防晒剂、表面活性剂等多种常见活性物/体系兼容性好',
      en: 'good compatibility with common actives/systems including salicylic acid, AHAs, sunscreen filters, and surfactants',
    },
  ],
  weaknesses: [
    {
      zh: '有效pH范围（约2-8）虽比部分卡波姆更宽，但仍需在配方设计时确认体系pH落在此区间',
      en: 'effective pH range (~2-8) is wider than some Carbomers, but formulators still need to confirm the system pH falls within this window',
    },
    {
      zh: '作为合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '价格通常高于传统卡波姆或天然胶类增稠剂，属中高端流变改性剂',
      en: 'typically priced higher than plain Carbomer or natural gum thickeners — a premium rheology modifier',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '高电解质/高活性物精华与凝胶', en: 'high-electrolyte / high-active-load serums and gels' },
      notes: { zh: '典型应用场景，凸显其相较传统卡波姆的核心优势', en: 'flagship use case highlighting its core advantage over plain Carbomer' },
    },
    {
      system: { zh: '透明凝胶基质', en: 'clear gel bases' },
    },
    {
      system: { zh: '洁面/沐浴等表面活性剂体系增稠', en: 'thickening of surfactant systems (cleansers, body wash)' },
    },
  ],
  typicalUseLevel: { min: 0.4, max: 2, unit: '%' },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'xanthan-gum'],
  citations: [
    {
      id: 'knowde-sepimaxzen-tds',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'SEPIMAX ZEN — Product Technical Data',
      url: 'https://www.knowde.com/stores/seppic-inc/products/sepimax-zen',
      accessedDate: '2026-08-04',
      note: 'Used for INCI, pH range, electrolyte tolerance, skin-feel language, and applications. Seppic\'s own product page (seppic.com) could not be verified as fetchable in this session.',
    },
    {
      id: 'search-sepimaxzen-viscosity',
      supplier: 'Seppic (indexed excerpt)',
      documentTitle: 'SEPIMAX ZEN — Technical Datasheet (SpecialChem listing)',
      url: 'https://cosmetics.specialchem.com/product/i-seppic-sepimax-zen',
      accessedDate: '2026-08-04',
      note: 'Viscosity figures (2% in water: 30,000-60,000 mPas; 2% in 2% NaCl: 20,000-50,000 mPas) and use level (0.4-2.0%) found via web search snippet; direct fetch was not attempted/confirmed in this session — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-04',
})
