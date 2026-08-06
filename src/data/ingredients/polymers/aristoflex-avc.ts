import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'aristoflex-avc',
  category: 'polymer',
  inciName: 'Ammonium Acryloyldimethyltaurate/VP Copolymer',
  nameZh: '丙烯酰二甲基牛磺酸铵/乙烯基吡咯烷酮共聚物',
  tradeNames: [{ name: 'Aristoflex AVC', supplier: 'Clariant' }],
  chemicalClass: {
    zh: '预中和合成丙烯酸类共聚物（磺酸型，无乙氧基）',
    en: 'Pre-neutralized synthetic acrylic copolymer (sulfonate-type, ethoxylate-free)',
  },
  chemicalStructureSummary: {
    zh: '由阴离子的丙烯酰二甲基牛磺酸铵（一种磺酸型单体，结构上与AMPS/2-丙烯酰胺基-2-甲基丙磺酸类似）与非离子的乙烯基吡咯烷酮（VP）共聚而成，以预中和的白色粉末形式供应，遇水可直接分散成胶，无需另行加碱中和。1%溶液pH约4-6，粘度约48,000-65,000 mPa·s（1%溶液）。体系不含环氧乙烷（EO-free），可冷法加工。',
    en: 'A copolymer of the anionic sulfonate monomer ammonium acryloyldimethyltaurate (structurally related to AMPS / 2-acrylamido-2-methylpropane sulfonic acid) and nonionic vinylpyrrolidone (VP), supplied as a pre-neutralized white powder that disperses directly in water into a gel with no separate alkali neutralization step. A 1% solution has a pH of ~4-6 and a viscosity of ~48,000-65,000 mPa·s. The polymer is ethoxylate-free (EO-free) and can be processed cold.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '免中和即成胶从何而来', en: 'Where the no-neutralization gelling comes from' },
      explanation: {
        zh: '磺酸基（-SO3⁻）在生产阶段已以铵盐形式预中和供应，其解离状态几乎不受终端配方pH的影响（磺酸的pKa远低于羧酸），因此粉末一遇水即可立即呈现带电、伸展的构象并结合水分子成胶，无需像传统卡波姆那样另行滴加中和剂调节pH——这也是其被称为"预中和"聚合物、可冷法直接使用的结构基础。',
        en: "The sulfonate group (-SO3-) is supplied pre-neutralized as an ammonium salt during manufacture, and its ionization state is essentially unaffected by the finished formula's pH (a sulfonic acid's pKa is far lower than a carboxylic acid's). The powder therefore adopts a charged, extended conformation and binds water into a gel immediately on contact with water, with no separate neutralizer titration needed the way plain Carbomer requires — the structural basis for its being marketed as a 'pre-neutralized,' cold-processable polymer.",
      },
    },
    {
      aspect: { zh: '优异的乳化稳定/流变改性能力从何而来', en: 'Where the strong emulsion-stabilizing / rheology-modifying power comes from' },
      explanation: {
        zh: '共聚物同时携带强亲水的磺酸基链段与体积较大的非离子VP链段；前者提供增稠所需的静电排斥与束水能力，后者具有一定表面活性倾向，有助于其在油水界面处发挥"假乳化剂"作用，两者共同作用使其无需额外乳化剂即可稳定一定比例（供应商数据：约15%）的疏水相，形成清爽、轻盈的凝胶或膏霜质地。',
        en: 'The copolymer carries both a strongly hydrophilic sulfonate segment and a bulkier nonionic VP segment; the former supplies the electrostatic repulsion and water-binding that drive thickening, while the latter has some surface-active tendency that helps the polymer act as a "pseudo-emulsifier" at the oil-water interface. Together these let it stabilize a limited proportion of hydrophobic phase (supplier data: up to ~15%) without a separate emulsifier, producing a light, fresh gel or cream texture.',
      },
    },
    {
      aspect: { zh: '为何仍对电解质敏感（尽管磺酸基耐pH）', en: 'Why it is still electrolyte-sensitive despite its pH-resistant sulfonate group' },
      explanation: {
        zh: '磺酸基的强解离特性只解决了"pH变化导致基团质子化、失去电荷"的问题，并不能避免"游离电解质离子屏蔽链间静电排斥"（德拜屏蔽效应）这一独立现象；该共聚物是线性、非交联结构，缺少卡波姆Ultrez系列或Sepimax ZEN依靠疏水缔合/专利锚定骨架维持网络空间构型的"物理备份"机制，因此在高盐或高电解质活性物（如芦荟胶、乳酸钠、脲）存在时，链段更容易因电荷屏蔽而蜷缩，粘度出现明显下降。',
        en: "The sulfonate group's strong, pH-independent ionization only solves the problem of groups losing charge via protonation as pH shifts — it does not prevent the separate phenomenon of free electrolyte ions screening the electrostatic repulsion between chains (Debye screening). Because this copolymer is linear and non-crosslinked, it lacks the hydrophobic-association or patented anchoring backbone that gives Carbopol Ultrez-series or Sepimax ZEN polymers a physical 'backup' mechanism to hold the network's 3D shape. So in the presence of high salt or electrolyte-heavy actives (aloe vera, sodium lactate, urea), its chains re-coil more readily once charge repulsion is screened, and viscosity drops noticeably.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"清爽轻盈"的肤感，涂抹后快速消失（fast breaking），赋予柔滑铺展感',
      en: 'described by the supplier as giving a "fresh and light" skin feel, breaking quickly on skin (fast breaking) with smooth, easy spreading',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '作为"假乳化剂"可稳定一定比例疏水相（供应商数据：约15%），但功能定位仍以流变改性/凝胶化为主，通常不能完全替代传统乳化剂',
      en: 'as a "pseudo-emulsifier" it can stabilize a limited proportion of hydrophobic phase (supplier data: ~15%), but it is primarily positioned as a rheology modifier/gelling agent and cannot fully replace a conventional emulsifier in most systems',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '预中和粉末，冷法直接分散成胶，无需另行加碱中和，且不含乙氧基（EO-free）',
      en: 'a pre-neutralized powder that gels directly on cold-process hydration with no separate alkali neutralization, and is ethoxylate-free (EO-free)',
    },
    {
      zh: '兼具凝胶化与"假乳化"稳定能力，可在不添加传统乳化剂的情况下稳定约15%的疏水相，适合轻质凝胶/凝胶霜配方',
      en: 'combines gelling with "pseudo-emulsifying" stabilization, able to stabilize roughly 15% hydrophobic phase without a conventional emulsifier — well suited to lightweight gel/gel-cream formulas',
    },
    {
      zh: '与有机溶剂（乙醇、丙酮）相容性好，可用于含高浓度乙醇（供应商数据：50%以上）的配方增稠',
      en: 'good compatibility with organic solvents (ethanol, acetone), and can thicken formulas containing high ethanol concentrations (supplier data: 50%+)',
    },
  ],
  weaknesses: [
    {
      zh: '对电解质较为敏感，与芦荟胶、乳酸钠、盐、脲等高电解质活性物同时使用时粘度会明显下降，不适合高盐表面活性剂体系（如洁面、沐浴产品）',
      en: 'sensitive to electrolytes — viscosity drops noticeably when combined with high-electrolyte actives such as aloe vera, sodium lactate, salt, or urea, making it a poor fit for high-salt surfactant systems (e.g. cleansers, body wash)',
    },
    {
      zh: '有效稳定性范围为pH 4-9，超出pH 9时体系会因铵盐分解而释放氨味，配方pH需严格控制在此区间内',
      en: 'its effective stability range is pH 4-9; above pH 9 the ammonium salt breaks down and releases an ammonia odor, so formula pH must be kept strictly within this window',
    },
    {
      zh: '含水解蛋白等本身带盐分的活性物时也可能引发粘度损失，配方中同类成分需提前小试验证兼容性',
      en: 'actives that themselves carry salt content, such as hydrolyzed proteins, can also trigger viscosity loss — compatibility with such ingredients should be bench-tested in advance',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明水凝胶', en: 'clear aqueous gels' },
      notes: { zh: '低电解质体系下效果最佳', en: 'performs best in low-electrolyte systems' },
    },
    { system: { zh: '水包油乳液、乳霜、乳液状精华', en: 'oil-in-water emulsions, creams, lotions/milks' } },
    {
      system: { zh: '高乙醇配方（爽肤水、须后水等）', en: 'high-ethanol formulas (toners, after-shave, etc.)' },
      notes: { zh: '供应商数据：可耐受50%以上乙醇', en: 'supplier data: tolerates 50%+ ethanol' },
    },
  ],
  typicalUseLevel: { min: 0.5, max: 2, unit: '%' },
  relatedIngredientSlugs: ['sepinov-emt-10', 'sepimax-zen', 'carbopol-ultrez-20'],
  citations: [
    {
      id: 'lotioncrafter-aristoflexavc',
      supplier: 'Lotioncrafter (distributor)',
      documentTitle: 'Aristoflex AVC — Product Page',
      url: 'https://lotioncrafter.com/products/aristoflex-avc',
      accessedDate: '2026-08-05',
      note: "Used for INCI name, appearance (white powder), pH (4-6, 1% solution), viscosity (48,000-65,000 mPa·s, 1% solution), typical use level (0.5-2%), pH stability range (4-9), electrolyte sensitivity, and the ammonia-release note above pH 9. Clariant's own product page and Knowde listing could not be fetched directly in this session (blocked/blank).",
    },
    {
      id: 'humblebeeandme-aristoflexavc',
      supplier: 'Humblebee & Me (formulator educational resource)',
      documentTitle: 'Ammonium Acryloyldimethyltaurate/VP Copolymer (Aristoflex AVC) — Ingredient Profile',
      url: 'https://www.humblebeeandme.com/project/ammonium-acryloyldimethyltaurate-vp-copolymer-aristoflex-avc/',
      accessedDate: '2026-08-05',
      note: 'Used for the "pseudo-emulsifier" framing and ~15% hydrophobic-phase stabilization figure, processing methods (hot/cold, oil-phase or direct sprinkle-in), the specific electrolyte-avoidance list (aloe vera, sodium lactate, salt, urea), and storage guidance. A well-regarded formulator technical resource rather than a primary supplier document.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-05',
})
