import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'pemulen-tr2',
  category: 'polymer',
  inciName: 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer',
  nameZh: '丙烯酸（酯）类/C10-30 烷醇丙烯酸酯交联聚合物',
  tradeNames: [{ name: 'Pemulen TR-2', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '疏水改性交联丙烯酸类聚合物（高分子聚合物型乳化剂，Lubrizol Pemulen系列，高疏水接枝比例款）',
    en: 'Hydrophobically modified crosslinked acrylic polymer (polymeric emulsifier, Lubrizol Pemulen series, higher-hydrophobe-content grade)',
  },
  chemicalStructureSummary: {
    zh: '与Pemulen TR-1同属交联聚丙烯酸/C10-30烷基丙烯酸酯共聚物，以烯丙基季戊四醇交联，INCI名称与TR-1及Carbopol Ultrez系列相同；但TR-2的疏水烷基接枝比例高于TR-1。这意味着分子链上用于锚定油滴界面的疏水基团更多，使其能够稳定远高于TR-1的油相比例（供应商数据：可乳化至多约50%油相），但相应地留在水相中自由伸展、参与增稠的链段比例更低，因此形成的乳液本体粘度也明显低于TR-1（供应商数据：0.2%粘液Brookfield粘度约1,050-3,750 cP），更适合喷雾型、低粘度配方。',
    en: 'Like Pemulen TR-1, TR-2 is a crosslinked polyacrylic acid / C10-30 alkyl acrylate copolymer crosslinked with allyl pentaerythritol, sharing the same INCI name as TR-1 and the Carbopol Ultrez series — but TR-2 carries a higher proportion of hydrophobic alkyl grafting than TR-1. That means more hydrophobic groups are available along the chain to anchor into oil-droplet interfaces, letting it stabilize a much higher oil-phase load than TR-1 (supplier data: up to ~50% oil), but correspondingly a smaller share of the chain remains free to extend into water and contribute to thickening — so the resulting emulsions have markedly lower bulk viscosity than TR-1 (supplier data: Brookfield viscosity of a 0.2% mucilage ~1,050-3,750 cP), making it better suited to sprayable, low-viscosity formulations.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高油相负载能力从何而来', en: 'Where the high oil-load capacity comes from' },
      explanation: {
        zh: 'TR-2链上疏水C10-30烷基接枝比例高于TR-1，更多疏水链段能够锚定进入油滴表面、增大界面覆盖与吸附强度，因而单位聚合物能稳定的油相量显著提升（供应商数据：可乳化至多约50%油相，高于TR-1的约20-30%），使其成为高油相负载配方（如丰润面霜）的常用乳化剂。',
        en: 'TR-2 carries a higher proportion of hydrophobic C10-30 alkyl grafts than TR-1, so more hydrophobic segments can anchor into the oil-droplet surface, increasing interfacial coverage and adsorption strength — which is why a given amount of polymer can stabilize significantly more oil (supplier data: up to ~50% oil, versus roughly 20-30% for TR-1), making TR-2 a common choice for high-oil-load formulas such as rich creams.',
      },
    },
    {
      aspect: { zh: '低本体粘度、适合喷雾配方从何而来', en: 'Where the low bulk viscosity suited to spray formulas comes from' },
      explanation: {
        zh: '由于更大比例的分子链段被"占用"于锚定油滴界面，留在连续水相中自由伸展、贡献链缠结/静电排斥增稠的链段比例相应减少，因此TR-2乳液的本体粘度明显低于TR-1（供应商数据：0.2%粘液Brookfield粘度约1,050-3,750 cP，约为TR-1的三分之一），这一较低粘度特性使其特别适合喷雾型、易泵出的低粘度乳液配方。',
        en: 'Because a larger fraction of the chain is "committed" to anchoring oil droplets at the interface, a smaller fraction remains free in the continuous water phase to contribute to chain-entanglement/electrostatic-repulsion thickening — so TR-2 emulsions have markedly lower bulk viscosity than TR-1 (supplier data: Brookfield viscosity of a 0.2% mucilage ~1,050-3,750 cP, roughly a third of TR-1\'s), which is exactly why it is well suited to sprayable, easily-pumped low-viscosity emulsions.',
      },
    },
    {
      aspect: { zh: '最佳pH区间为何更窄（4.0-5.0）', en: 'Why the optimal pH window (4.0-5.0) is narrower than TR-1' },
      explanation: {
        zh: '与TR-1相同，TR-2的増稠/乳化能力同样依赖羧基中和后的链伸展；但由于TR-2的疏水接枝比例更高、亲水羧基比例相对更低，链伸展所需的最适电荷密度对pH更为敏感，因而其标注的最佳性能区间（pH4.0-5.0）比TR-1（pH4.0-5.5）更窄，配方pH需要更精确地控制。',
        en: "Like TR-1, TR-2's thickening/emulsifying ability depends on chain extension once carboxyls are neutralized; but because TR-2 has a higher proportion of hydrophobic grafting and a correspondingly lower proportion of hydrophilic carboxyl groups, the optimal charge density for chain extension is more pH-sensitive — which is why its stated optimal performance window (pH 4.0-5.0) is narrower than TR-1's (pH 4.0-5.5), requiring more precise formulation pH control.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '形成低粘度、可喷雾的乳液，肤感清爽轻盈、铺展性好，适合喷雾及轻质配方',
      en: 'forms low-viscosity, sprayable emulsions with a light, easily-spreading skin feel — well suited to spray and lightweight formulas',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    pillingNotes: {
      zh: '属聚合物型乳化剂，疏水接枝比例高于TR-1，更适合喷雾/高油相负载配方',
      en: 'a polymeric emulsifier with a higher hydrophobic-graft ratio than TR-1, better suited to spray or high-oil-load formulations',
    },
    suspensionStabilization: 'low',
  },
  strengths: [
    {
      zh: '可稳定的油相比例显著高于TR-1（供应商数据：至多约50%），适合丰润乳霜类高油相配方',
      en: 'can stabilize a significantly higher oil-phase ratio than TR-1 (supplier data: up to ~50%), suited to rich, high-oil-load cream formulas',
    },
    {
      zh: '乳液本体粘度低（供应商数据：0.2%粘液Brookfield粘度约1,050-3,750 cP），特别适合喷雾型配方',
      en: 'low bulk emulsion viscosity (supplier data: Brookfield viscosity of a 0.2% mucilage ~1,050-3,750 cP), particularly suited to spray formulations',
    },
    {
      zh: '与TR-1相同，属温和聚合物乳化机制，无需传统小分子表面活性剂',
      en: 'like TR-1, a mild polymeric emulsification mechanism that needs no conventional small-molecule surfactant',
    },
  ],
  weaknesses: [
    {
      zh: '最佳pH区间更窄（约4.0-5.0），配方pH控制要求比TR-1更高',
      en: 'a narrower optimal pH window (~4.0-5.0) than TR-1, requiring tighter formulation pH control',
    },
    {
      zh: '具体推荐使用量在不同资料来源间存在差异（约0.15-0.4%），正式采用前建议以供应商官方PDS为准',
      en: 'the specific recommended use level varies across sources (roughly 0.15-0.4%) — the supplier\'s official PDS should be confirmed before formal use',
    },
    {
      zh: '属合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
  ],
  suitableSystems: [
    { system: { zh: '喷雾型乳液/防晒喷雾', en: 'sprayable emulsions / spray sunscreens' } },
    { system: { zh: '高油相负载面霜/身体乳', en: 'high-oil-load creams and body lotions' } },
    { system: { zh: '眼部、面部、手足护理产品', en: 'eye area, facial, and hand/foot care products' } },
  ],
  typicalUseLevel: { min: 0.15, max: 0.4, unit: '%' },
  relatedIngredientSlugs: ['pemulen-tr1', 'carbopol-ultrez-20', 'sepimax-zen'],
  citations: [
    {
      id: 'knowde-pemulentr2-tds',
      supplier: 'Lubrizol (via Knowde)',
      documentTitle: 'Pemulen™ TR-2 polymeric emulsifier — Product Technical Data',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/pemulen-polymers-tr-2-polymeric-emulsifier',
      accessedDate: '2026-08-05',
      note: 'Accessed via a text-extraction proxy since direct fetch of the Knowde page returned no content. Used for INCI, appearance, optimal pH range, maximum oil content, and the Brookfield/emulsion-viscosity table.',
    },
    {
      id: 'pharmaexcipients-pemulentr2',
      supplier: 'Lubrizol (via Pharma Excipients)',
      documentTitle: 'Pemulen™ TR-2 NF Polymer — Product Page',
      url: 'https://www.pharmaexcipients.com/product/pemulen-tr-2-nf-polymer/',
      accessedDate: '2026-08-05',
      note: 'Used for the chemical composition description and general functional positioning (primary O/W emulsion former, up to ~50% oil).',
    },
    {
      id: 'search-pemulen-tr1-tr2-comparison',
      supplier: 'Lubrizol (indexed distributor/formulation-literature excerpts via web search)',
      documentTitle: 'Pemulen TR-1 vs TR-2 comparison (use level, hydrophobe content)',
      accessedDate: '2026-08-05',
      note: 'The 0.15-0.4% use-level figure and the "higher hydrophobe content than TR-1" comparison were found via aggregated web-search snippets from multiple distributor/technical-bulletin sources; not independently fetched/confirmed from a single primary document, so flagged as partial.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-05',
})
