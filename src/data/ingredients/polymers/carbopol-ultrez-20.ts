import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'carbopol-ultrez-20',
  category: 'polymer',
  inciName: 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer',
  nameZh: '丙烯酸（酯）类/C10-30 烷醇丙烯酸酯交联聚合物',
  tradeNames: [{ name: 'Carbopol Ultrez 20', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '疏水改性交联丙烯酸类聚合物（相较于传统卡波姆额外接枝了C10-30长链烷基丙烯酸酯）',
    en: 'Hydrophobically modified crosslinked acrylic polymer (carries an additional C10-30 long-chain alkyl acrylate graft compared with plain Carbomer)',
  },
  chemicalStructureSummary: {
    zh: '主链为交联聚丙烯酸，分子链上带有大量羧基（-COOH）；与传统卡波姆（Carbomer）不同的是，链上还接枝了C10-30长链烷基丙烯酸酯，赋予其疏水缔合特性。中性/弱碱性条件下（pH约6.5-7.5），羧基被中和为羧酸根（-COO⁻），链间静电排斥使分子链充分伸展、大量束缚水分子，形成三维水凝胶网络；疏水长链之间的缔合进一步增强了网络强度与耐电解质/耐表面活性剂能力。',
    en: 'A crosslinked polyacrylic acid backbone bearing many carboxyl (-COOH) groups; unlike plain Carbomer, the chain also carries grafted C10-30 long-chain alkyl acrylate segments that give it hydrophobic-association behavior. Under neutral-to-weakly-alkaline conditions (pH ~6.5-7.5), the carboxyls are neutralized to carboxylate (-COO⁻), and electrostatic repulsion extends the chains and binds large amounts of water into a 3D hydrogel network; association between the hydrophobic side chains further reinforces the network and improves electrolyte/surfactant tolerance versus plain Carbomer.',
  },
  performance: {
    skinFeel: {
      zh: '可通过配方调节呈现"长流变"（丰盈弹性）或"短流变"（清爽水感）质地；自身作为凝胶呈清爽、不粘腻感',
      en: 'formulatable toward either "long rheology" (plump, elastic) or "short rheology" (light, watery) skin feel; as a plain gel it feels light and non-tacky',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身不是乳化剂；用作乳液稳定剂/流变改性剂时评级见下方悬浮稳定能力',
      en: 'not an emulsifier itself; see suspension/stabilization rating below for its role as an emulsion rheology modifier',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '相较传统卡波姆，疏水改性显著提升耐电解质与耐表面活性剂能力（供应商数据：0.1%wt NaCl条件下仍保持稳定），更适合表面活性剂/电解质含量较高的体系',
      en: 'compared with plain Carbomer, the hydrophobic modification significantly improves electrolyte and surfactant tolerance (supplier data: stable under 0.1% wt NaCl), better suited to formulas with higher surfactant/electrolyte content',
    },
    {
      zh: '自分散、遇水快速润湿（供应商数据：润湿时间≤10分钟），无需预分散工艺',
      en: 'self-wetting, disperses rapidly in water (supplier data: wetting time ≤10 minutes), no pre-dispersion step required',
    },
    {
      zh: '通过中和度、离子强度等参数可灵活调节流变类型（长流变/短流变），配方设计自由度高',
      en: 'rheology type (long vs. short) is tunable via neutralization degree and ionic strength, giving formulators significant design flexibility',
    },
  ],
  weaknesses: [
    {
      zh: '仍需中和（TEA或NaOH等）才能充分增稠，操作上需缓慢滴加、避免局部过碱或裹入气泡',
      en: 'still requires neutralization (e.g. TEA or NaOH) to fully thicken; must be added slowly with continuous stirring to avoid local over-alkalinization or air entrapment',
    },
    {
      zh: '尽管耐电解质能力优于传统卡波姆，极高盐浓度或强阳离子体系仍可能导致粘度损失',
      en: 'despite better electrolyte tolerance than plain Carbomer, very high salt concentrations or strong cationic systems can still cause viscosity loss',
    },
    {
      zh: '不具备乳化能力，仅作为流变改性/稳定剂使用，通常需与乳化剂复配',
      en: 'has no emulsifying capability on its own — used purely as a rheology modifier/stabilizer, typically paired with a separate emulsifier',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明凝胶（精华、啫喱）', en: 'clear gels (serums, gel-creams)' },
      notes: { zh: '3%分散液透光率可达约90%', en: 'supplier data: ~90% clarity at 3% dispersion' },
    },
    {
      system: { zh: '中高表面活性剂体系（洁面、沐浴露）', en: 'moderate-to-high surfactant systems (cleansers, body wash)' },
      notes: { zh: '在10-12wt%表面活性剂条件下仍保持良好稳定性', en: 'stable at 10-12 wt% surfactant active levels per supplier data' },
    },
    { system: { zh: '乳液/乳霜稳定增稠', en: 'emulsion/cream stabilization & thickening' } },
  ],
  regulatoryNotes: { zh: '供应商标注符合中国CFDA备案要求', en: 'supplier lists CFDA (China) compliance' },
  relatedIngredientSlugs: ['xanthan-gum', 'sepimax-zen'],
  citations: [
    {
      id: 'knowde-ultrez20-tds',
      supplier: 'Lubrizol (via Knowde)',
      documentTitle: 'Carbopol® Ultrez 20 Polymer — Product Technical Data',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/carbopol-polymers-ultrez-20-polymer',
      accessedDate: '2026-08-04',
      note: 'Used for INCI, viscosity specs, appearance, clarity, wetting time, surfactant-tolerance figures. Lubrizol\'s own product page and TDS PDF (lubrizol.com) returned HTTP 403 / timed out when fetched directly.',
    },
    {
      id: 'aneco-carbomer-structure',
      supplier: 'ANECO (industry technical article)',
      documentTitle: 'Carbomer in Cosmetics: Formulation Techniques, Texture Enhancement',
      url: 'https://www.anecochem.com/newsInfo-263.html',
      accessedDate: '2026-08-04',
      note: 'Used for neutralization mechanism/pH, electrolyte-sensitivity explanation, and the "long rheology / short rheology" skin-feel framing. General technical literature, not the primary supplier TDS.',
    },
  ],
  dataCompleteness: 'partial',
  lastUpdated: '2026-08-04',
})
