import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'cetearyl-alcohol-ceteareth-20',
  category: 'emulsifier',
  inciName: 'Cetearyl Alcohol (and) Ceteareth-20',
  nameZh: '鲸蜡硬脂醇（和）鲸蜡硬脂醇聚醚-20',
  tradeNames: [
    { name: 'Emulsifying Wax NF (Cetearyl Alcohol/Ceteareth-20)', supplier: 'Mystic Moments UK' },
    { name: 'Cetearyl Alcohol + Ceteareth-20', supplier: 'Ataman Chemicals' },
  ],
  chemicalClass: {
    zh: '非离子自乳化蜡（脂肪醇 + PEG型脂肪醇醚复配型乳化蜡）',
    en: 'Non-ionic self-emulsifying wax (fatty alcohol + PEG-type ethoxylated fatty alcohol blend)',
  },
  chemicalStructureSummary: {
    zh: '由鲸蜡硬脂醇（C16-18脂肪醇，结构性/助稳定组分）与鲸蜡硬脂醇聚醚-20（同一C16-18脂肪醇骨架经约20个环氧乙烷单元醚化而成的PEG型非离子表面活性剂）复配而成。两者共用同一烷基链长度，在水中共结晶形成层状液晶网络——是"乳化蜡NF"这一经典自乳化蜡原型的PEG型代表（与烷基糖苷型的Montanov 68结构原理相似，但亲水头基为聚氧乙烯醚而非糖苷）。',
    en: 'A blend of Cetearyl Alcohol (a C16-18 fatty alcohol, providing structure/co-stabilization) and Ceteareth-20 (the same C16-18 fatty-alcohol backbone etherified with roughly 20 ethylene oxide units — a PEG-type non-ionic surfactant). Because both components share the same alkyl chain length, they co-crystallize in water into a lamellar liquid-crystal network — the PEG-type representative of the classic "Emulsifying Wax NF" archetype, structurally analogous to the glucoside-type Montanov 68 but with a polyoxyethylene ether head group instead of a sugar head group.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高HLB乳化能力从何而来', en: 'Where the high-HLB emulsification ability comes from' },
      explanation: {
        zh: '鲸蜡硬脂醇聚醚-20约20个环氧乙烷单元构成的聚氧乙烯链高度水合、亲水性强，使复配体系HLB达到约15-17的高值；由于该表面活性剂与鲸蜡硬脂醇共用相同的C16-18烷基链，两者在界面处能紧密共排列，降低界面张力的效率优于随意搭配、链长不匹配的乳化剂组合。',
        en: "Ceteareth-20's ~20-unit polyoxyethylene chain is strongly hydrated and hydrophilic, pushing the blended HLB up to a high ~15-17. Because this surfactant shares the same C16-18 alkyl chain length as Cetearyl Alcohol, the two co-align tightly at the interface, lowering interfacial tension more efficiently than a pairing of mismatched chain lengths would.",
      },
    },
    {
      aspect: { zh: '自乳化/悬浮稳定能力从何而来', en: 'Where the self-emulsifying / suspension-stabilization ability comes from' },
      explanation: {
        zh: '鲸蜡硬脂醇与鲸蜡硬脂醇聚醚-20共用同一烷基链，冷却结晶时会共同排列成层状液晶（凝胶网络）而非各自分离的相；该网络提供屈服应力，物理性抑制油滴聚并，因此该乳化蜡可"一步"完成乳化+稳定+增稠，无需另加增稠剂——这也是"自乳化蜡"这一名称的结构基础。',
        en: 'Because Cetearyl Alcohol and Ceteareth-20 share the same alkyl chain, they co-crystallize on cooling into a lamellar liquid-crystal gel network rather than separating into distinct phases. That network provides yield stress that physically suppresses droplet coalescence — allowing this wax to accomplish emulsification, stabilization, and thickening in one step without a separate thickener, which is the structural basis for the "self-emulsifying wax" designation.',
      },
    },
    {
      aspect: { zh: '宽pH稳定性从何而来', en: 'Where the broad pH stability comes from' },
      explanation: {
        zh: '鲸蜡硬脂醇聚醚-20的聚氧乙烯亲水头基通过醚键（C-O-C）而非酯键连接到脂肪醇骨架上；醚键在强酸或强碱条件下比酯键更耐水解，这正是该乳化蜡体系报告的pH稳定范围（约3-13）明显宽于甘油硬脂酸酯/PEG-100硬脂酸酯等酯型乳化剂（约4-9）的结构原因。',
        en: "Ceteareth-20's polyoxyethylene head is attached to the fatty-alcohol backbone via an ether linkage (C-O-C) rather than an ester bond. Ether linkages are markedly more resistant to hydrolysis under strongly acidic or alkaline conditions than ester bonds, which is the structural reason this wax system's reported pH stability window (~3-13) is notably broader than ester-type emulsifiers such as Glyceryl Stearate/PEG-100 Stearate (~4-9).",
      },
    },
  ],
  hlb: { min: 15, max: 17 },
  appearance: {
    zh: '白色至类白色蜡状颗粒/薄片，气味微弱或无',
    en: 'white to off-white waxy pellets/flakes, no or weak odor',
  },
  performance: {
    skinFeel: {
      zh: '经典乳霜质地，丰润偏中等厚重，铺展性良好',
      en: 'classic cream texture — moderately rich and moisturizing with good spreadability',
    },
    pillingTendency: 'medium',
    pillingNotes: {
      zh: '与其他成膜性/蜡质成分叠加使用时搓泥风险上升，与鲸蜡硬脂醇+糖苷型乳化蜡（如Montanov 68）表现相近',
      en: 'pilling risk increases when layered with other film-forming/waxy ingredients, similar to fatty-alcohol + glucoside-type waxes (e.g. Montanov 68)',
    },
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '真正的一步法自乳化蜡：兼具乳化、稳定与增稠功能，无需额外助乳化剂',
      en: 'a true one-step self-emulsifying wax combining emulsification, stabilization, and thickening — no co-emulsifier required',
    },
    {
      zh: '醚键连接结构耐水解，pH稳定范围宽（约3-13），配方兼容性好',
      en: 'the hydrolysis-resistant ether linkage gives a broad pH stability range (~3-13) and good formulation compatibility',
    },
    {
      zh: '技术成熟、多家供应商可提供同规格产品（Cetearyl Alcohol/Ceteareth-20组合），供应稳定、成本适中',
      en: 'mature technology available from multiple suppliers under the same Cetearyl Alcohol/Ceteareth-20 specification — stable supply, moderate cost',
    },
  ],
  weaknesses: [
    {
      zh: 'PEG型（聚氧乙烯化）结构，制造涉及环氧乙烷，成品可能含微量1,4-二噁烷残留，"PEG-free"定位配方通常会规避',
      en: 'as a PEG-type (ethoxylated) surfactant, manufacture involves ethylene oxide and the finished product may carry trace 1,4-dioxane — a reason "PEG-free" positioned formulations tend to avoid this ingredient class',
    },
    {
      zh: '为固体蜡片/颗粒，需加热至约70°C进行热法乳化，工艺能耗较高',
      en: 'a solid wax flake/pellet requiring hot-process emulsification (~70°C), which is more energy-intensive than cold-process alternatives',
    },
    {
      zh: '肤感偏经典厚重型，不太适合追求清爽轻薄质地的精华/凝胶类产品',
      en: 'the classic, moderately rich skin feel is less suited to lightweight serum/gel formats aiming for a light finish',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳霜 / 乳液（经典自乳化蜡体系）', en: 'O/W cream / lotion (classic self-emulsifying wax system)' },
      notes: { zh: '无需另加乳化剂即可形成稳定乳液', en: 'forms a stable emulsion without an additional emulsifier' },
    },
    {
      system: { zh: '护发素/免洗类头发护理产品', en: 'hair conditioner / leave-in hair care' },
      notes: { zh: '常见于该类产品作为基础乳化体系', en: 'commonly used as the base emulsification system in this category' },
    },
  ],
  typicalUseLevel: { min: 3, max: 8, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'polysorbate-60', 'peg-100-stearate-glyceryl-stearate'],
  citations: [
    {
      id: 'ataman-cetearyl-ceteareth20-tds',
      supplier: 'Ataman Chemicals',
      documentTitle: 'Cetearyl Alcohol + Ceteareth-20 — Technical Data',
      url: 'https://www.atamanchemicals.com/cetearyl-alcohol-ceteareth-20_u24892/',
      accessedDate: '2026-08-05',
      note: 'Used for INCI, HLB (15-17), appearance (white pellets), CAS/EC numbers, broad pH tolerance, and applications.',
    },
    {
      id: 'mysticmoments-cetearyl-ceteareth20',
      supplier: 'Mystic Moments UK',
      documentTitle: 'Emulsifying Wax Cetearyl Alcohol/Ceteareth 20 — Product Page',
      url: 'https://www.mysticmomentsuk.com/products/emulsifying-wax-cetearyl-alcohol-ceteareth-20',
      accessedDate: '2026-08-05',
      note: 'Used to cross-check INCI wording and typical use level (~4-5%).',
    },
    {
      id: 'lotioncrafter-ceteareth20-component',
      supplier: 'Lotioncrafter',
      documentTitle: 'Ceteareth 20 — Product Data',
      url: 'https://lotioncrafter.com/products/ceteareth-20',
      accessedDate: '2026-08-05',
      note: 'Covers the Ceteareth-20 component in isolation (HLB 15.5, white pastilles, 1-3% use rate as a co-emulsifier) rather than the pre-blended wax; used to corroborate the HLB range and confirm the ether-based (non-ester) chemistry.',
    },
    {
      id: 'polawax-composition-discrepancy-note',
      supplier: 'Croda (via Knowde) / DIYcosmetica / Bioshop Pakistan (secondary sources)',
      documentTitle: 'Polawax NF — composition cross-check (trade-name discrepancy note)',
      url: 'https://www.knowde.com/stores/croda/products/polawax-nf',
      accessedDate: '2026-08-05',
      note: 'Formulator folklore commonly labels this INCI combination "Croda Polawax." However, cross-checking Croda\'s own Knowde-hosted listing and two independent secondary sources (diycosmetica.com, bioshop.pk) found current Polawax NF documented as Cetearyl Alcohol (and) Polysorbate 60, or Cetearyl Alcohol (and) PEG-20 Stearate — not Ceteareth-20. Because this could not be reconciled, "Polawax" is deliberately NOT listed as a trade name here; the trade names above are generic distributor-branded products confirmed to carry the exact Cetearyl Alcohol/Ceteareth-20 INCI.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'tradeNames'],
  lastUpdated: '2026-08-05',
})
