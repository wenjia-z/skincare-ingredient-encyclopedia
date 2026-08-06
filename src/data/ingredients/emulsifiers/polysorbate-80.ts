import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'polysorbate-80',
  category: 'emulsifier',
  inciName: 'Polysorbate 80',
  nameZh: '聚山梨醇酯80（聚氧乙烯失水山梨醇单油酸酯）',
  tradeNames: [
    { name: 'Crillet 4', supplier: 'Croda' },
    { name: 'Tween 80', supplier: 'Croda (legacy trade name)' },
  ],
  chemicalClass: {
    zh: '聚氧乙烯化失水山梨醇脂肪酸酯（PEG型非离子表面活性剂）',
    en: 'Ethoxylated sorbitan fatty acid ester (PEG-type non-ionic surfactant)',
  },
  chemicalStructureSummary: {
    zh: '化学上为聚氧乙烯(20)失水山梨醇单油酸酯：与聚山梨醇酯60结构框架相同（失水山梨醇骨架+约20个环氧乙烷单元的聚氧乙烯亲水头基），关键差异在于亲油尾链——聚山梨醇酯80连接的是油酸（含一个顺式双键的不饱和C18脂肪酸），而非聚山梨醇酯60的饱和硬脂酸。HLB同样约为15，属高HLB水包油(O/W)乳化剂/增溶剂。',
    en: 'Chemically polyoxyethylene(20) sorbitan monooleate: it shares the same structural framework as Polysorbate 60 (a sorbitan backbone with a polyoxyethylene head of ~20 ethylene oxide units), but the lipophilic tail differs — Polysorbate 80 carries oleic acid (an unsaturated C18 fatty acid with one cis double bond) rather than the saturated stearic acid used in Polysorbate 60. HLB is likewise ~15, a high-HLB O/W emulsifier/solubilizer.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '常温液态从何而来', en: 'Where the room-temperature liquid form comes from' },
      explanation: {
        zh: '油酸尾链上的顺式双键造成分子链产生一个固定"弯折"，破坏了脂肪酸链之间的整齐堆叠排列，使晶格难以形成；这正是聚山梨醇酯80（油酸酯）在常温下为液体，而结构几乎相同但用饱和硬脂酸的聚山梨醇酯60在常温下为蜡状固体的结构根源，也使其更易于冷法工艺直接添加使用。',
        en: "The cis double bond in the oleic-acid tail introduces a fixed kink in the chain that disrupts the tight, ordered packing fatty-acid chains normally achieve, preventing crystal-lattice formation. This is the structural reason Polysorbate 80 (the oleate ester) is a liquid at room temperature while the near-identical Polysorbate 60 (the saturated stearate ester) is a waxy solid — and why Polysorbate 80 is easy to dose directly in cold-process work.",
      },
    },
    {
      aspect: { zh: '高HLB增溶/乳化能力从何而来', en: 'Where the high-HLB solubilizing/emulsifying ability comes from' },
      explanation: {
        zh: '与聚山梨醇酯60相同，约20个环氧乙烷单元串联形成的聚氧乙烯链高度水合、体积远大于脂肪酸尾链，将HLB推高至约15；根据Bancroft规则，亲水头基占优的表面活性剂倾向于稳定水包油体系，同时其柔性胶束结构也擅长将精油、香精等油溶性成分包裹增溶入水相。',
        en: "As in Polysorbate 60, the ~20-unit polyoxyethylene chain is strongly hydrated and far larger in effective volume than the fatty-acid tail, pushing HLB up to ~15. Per Bancroft's rule, a hydrophilic-head-dominant surfactant favors O/W systems, and its flexible micellar structure is also effective at encapsulating and solubilizing oil-soluble materials (essential oils, fragrance) into the water phase.",
      },
    },
    {
      aspect: { zh: '悬浮/稳定能力偏弱、单独使用肤感偏油腻从何而来', en: 'Where the weak stabilization and slightly oily standalone skin feel come from' },
      explanation: {
        zh: '油酸尾链的"弯折"结构虽然阻止了结晶，但也意味着它无法像饱和脂肪醇/脂肪酸酯那样与其他组分共结晶形成层状液晶网络，因此单独使用时乳液缺乏屈服应力支撑，悬浮/稳定能力弱；同时液态油酸酯本身铺展后不易完全成膜挥发，残留在皮肤表面容易带来油腻或粘腻感，故常作为辅助增溶剂/乳化剂与其他初级乳化剂或增稠剂复配使用。',
        en: 'The kinked oleate tail that prevents crystallization also means it cannot co-crystallize with other components into a lamellar liquid-crystal network the way saturated fatty alcohols/esters do — so on its own the emulsion lacks yield-stress support, giving weak stabilization. The liquid oleate ester also tends to leave an oily or slightly tacky residue on skin rather than fully melting into an unnoticeable film, which is why it is typically used as an auxiliary solubilizer/emulsifier alongside a primary emulsifier or thickener.',
      },
    },
  ],
  hlb: 15,
  appearance: {
    zh: '常温下为琥珀色至淡黄色粘稠液体，气味微弱或无',
    en: 'amber to pale-yellow viscous liquid at room temperature, no or weak odor',
  },
  performance: {
    skinFeel: {
      zh: '单独使用时肤感偏水感带轻微油腻/粘腻，通常与其他乳化剂或增稠剂复配以改善肤感',
      en: 'watery feel with a slight oily/tacky note when used alone; typically paired with other emulsifiers or thickeners to refine skin feel',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'low',
  },
  strengths: [
    {
      zh: '常温为液体，无需加热熔化，冷法工艺可直接添加，配方操作便捷',
      en: 'liquid at room temperature — no melting step needed, so it can be dosed directly in cold-process formulations',
    },
    {
      zh: '增溶能力强，是精油、香精等油溶性成分增溶入水相的经典原料',
      en: 'a strong solubilizer, a classic choice for dissolving essential oils, fragrance, and other oil-soluble actives into the water phase',
    },
    {
      zh: '技术成熟、成本较低、供应稳定，配方应用经验极为丰富',
      en: 'mature, low-cost, widely available with an extensive formulation track record',
    },
  ],
  weaknesses: [
    {
      zh: 'PEG型（聚氧乙烯化）结构，制造过程涉及环氧乙烷，成品可能含微量1,4-二噁烷残留，"PEG-free"定位配方通常会规避',
      en: 'as a PEG-type (ethoxylated) surfactant, manufacture involves ethylene oxide and the finished product may carry trace 1,4-dioxane — a reason "PEG-free" positioned formulations tend to avoid this ingredient class',
    },
    {
      zh: '悬浮/稳定能力弱，单独使用无法支撑稳定乳液，通常需要额外的初级乳化剂或增稠剂配合',
      en: 'weak suspension/stabilization on its own — cannot support a stable emulsion alone, and usually needs a primary emulsifier or additional thickener',
    },
    {
      zh: '单独使用时可能带来轻微油腻或粘腻残留感，肤感精细度不及现代复配型或聚合物乳化剂',
      en: 'can leave a slightly oily or tacky residue when used alone; sensory refinement lags behind modern blended or polymeric emulsifiers',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '精油/香精/油溶性活性物增溶体系', en: 'essential-oil / fragrance / oil-soluble active solubilizing systems' },
      notes: { zh: '经典用途，常按油相用量的2-3倍添加增溶剂', en: 'classic use case; solubilizer typically dosed at ~2-3x the oil being solubilized' },
    },
    {
      system: { zh: 'O/W 乳液/洗浴产品中的辅助乳化剂', en: 'auxiliary emulsifier in O/W lotions / bath & wash products' },
      notes: { zh: '常与初级乳化剂、增稠剂复配使用', en: 'commonly paired with a primary emulsifier and a thickener' },
    },
  ],
  typicalUseLevel: { min: 1, max: 10, unit: '%' },
  relatedIngredientSlugs: ['polysorbate-60'],
  citations: [
    {
      id: 'makingcosmetics-ps80-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'Polysorbate 80 — Technical Data (fact sheet PDF)',
      url: 'https://www.makingcosmetics.com/on/demandware.static/-/Sites-makingcosmetics-master/default/dw06ec2259/fact-sheets/fact-sheet-polysorbate-80.pdf',
      accessedDate: '2026-08-05',
      note: 'Used for INCI, HLB (15), appearance (amber viscous liquid), use level (1-10%), chemical description (sorbitol + ethylene oxide + oleic acid), and applications.',
    },
    {
      id: 'humblebeeandme-ps80',
      supplier: 'Humblebee & Me (formulator technical article)',
      documentTitle: 'Polysorbate 80',
      url: 'https://www.humblebeeandme.com/project/polysorbate-80/',
      accessedDate: '2026-08-05',
      note: 'Independent formulator resource used to cross-check appearance (pale yellow liquid), pH of aqueous solution, and applications; not a primary supplier TDS, so its broader 1-20% use-level figure was not adopted over the MakingCosmetics TDS range.',
    },
    {
      id: 'knowde-ecotween80-croda',
      supplier: 'Croda (via Knowde)',
      documentTitle: 'ECO Tween 80 — Product Technical Data',
      url: 'https://www.knowde.com/stores/croda/products/eco-tween-80',
      accessedDate: '2026-08-05',
      note: 'Croda-supplied Knowde listing confirming INCI (Polysorbate 80) and HLB (15) directly from the manufacturer; this specific ECO Tween 80 grade is marketed for I&I/cleaning applications, used here only to cross-check grade-independent physicochemical data (HLB, solubility profile), not for cosmetic-specific claims.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance.skinFeel'],
  lastUpdated: '2026-08-05',
})
