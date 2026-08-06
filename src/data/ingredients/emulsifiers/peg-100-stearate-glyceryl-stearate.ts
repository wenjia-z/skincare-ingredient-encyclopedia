import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'peg-100-stearate-glyceryl-stearate',
  category: 'emulsifier',
  inciName: 'Glyceryl Stearate (and) PEG-100 Stearate',
  nameZh: '硬脂酸甘油酯（和）PEG-100硬脂酸酯',
  tradeNames: [
    { name: 'Arlacel 165', supplier: 'Croda' },
    { name: 'Simulsol 165', supplier: 'Seppic' },
  ],
  chemicalClass: {
    zh: '非离子复配型自乳化蜡（甘油单酯 + PEG型脂肪酸酯）',
    en: 'Non-ionic blended self-emulsifying wax (glycerol monoester + PEG-type fatty acid ester)',
  },
  chemicalStructureSummary: {
    zh: '由甘油硬脂酸酯（甘油与硬脂酸的单酯，低HLB、亲油性强，倾向油包水）与PEG-100硬脂酸酯（硬脂酸与约100个环氧乙烷单元的聚乙二醇缩合而成的酯，HLB很高、强亲水）复配而成，通常以甘油硬脂酸酯占比过半（>50%）、PEG-100硬脂酸酯占比不足半（<50%）的比例组合。两组分共用相同的硬脂酸尾链，复配后整体HLB降至中等偏高的约11，构成经典的"一步法"O/W自乳化蜡。',
    en: 'A blend of Glyceryl Stearate (the mono-ester of glycerol and stearic acid — low HLB, strongly lipophilic, W/O-leaning) and PEG-100 Stearate (stearic acid condensed with a polyethylene glycol chain of roughly 100 ethylene oxide units — very high HLB, strongly hydrophilic), typically combined at a ratio of more than 50% glyceryl stearate to less than 50% PEG-100 stearate. Both components share the same stearic-acid tail; blended together, the overall HLB lands at a moderately high ~11, forming a classic "one-step" O/W self-emulsifying wax.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '可调HLB与乳化能力从何而来', en: 'Where the tunable HLB and emulsification ability come from' },
      explanation: {
        zh: 'PEG-100硬脂酸酯约100个环氧乙烷单元构成的聚氧乙烯链极其庞大、水合能力极强（该组分单独的HLB可高达约19），而甘油硬脂酸酯的甘油头基亲水性温和、单独HLB较低；两者通过调整配比可在中等偏高区间精细"调档"整体HLB（复配后约为11），同时因共用硬脂酸尾链，两者能在界面处共同定位而非各自分相，是这类"复配自乳化蜡"设计思路的结构基础。',
        en: "PEG-100 Stearate's ~100-unit polyoxyethylene chain is enormous and strongly hydrated (the component alone has an HLB as high as ~19), while Glyceryl Stearate's glycerol head is only mildly hydrophilic with a low standalone HLB. Adjusting the ratio between the two lets formulators fine-tune the blended HLB into a moderately-high band (~11 as blended), and because both esters share the same stearic-acid tail, they co-locate at the interface rather than partitioning into separate phases — the structural logic behind this class of 'blended self-emulsifying wax' designs.",
      },
    },
    {
      aspect: { zh: '轻盈丝滑质地/中等塑体能力从何而来', en: 'Where the light, silky texture and moderate bodying ability come from' },
      explanation: {
        zh: '两种硬脂酸酯共用同一烷基尾链，冷却时能共结晶形成较细腻的微晶网络，赋予乳液一定粘度与塑体感，但因缺少蜡状脂肪醇或糖苷型乳化剂那样"厚重"的层状液晶网络，形成的膜层更薄、更轻盈，因此常被描述为"丝滑、轻盈"的乳液质地，塑体能力属中等而非强悬浮稳定型。',
        en: "The two stearate esters, sharing the same alkyl tail, co-crystallize on cooling into a relatively fine microcrystalline network, giving the emulsion some viscosity and body. But because it lacks the heavier lamellar liquid-crystal network of waxy fatty-alcohol or glucoside-type emulsifiers, the resulting film is thinner and lighter — hence the frequently reported 'silky, lightweight' emulsion texture, with moderate rather than strong suspension/stabilization power.",
      },
    },
    {
      aspect: { zh: '中等pH耐受范围从何而来', en: 'Where the moderate pH tolerance range comes from' },
      explanation: {
        zh: '甘油硬脂酸酯与PEG-100硬脂酸酯均通过酯键（而非醚键）连接亲水头基与脂肪酸尾链，酯键在强酸或强碱条件下更易水解断裂；这是该复配乳化蜡pH耐受范围（约4-9）明显窄于醚键连接的鲸蜡硬脂醇聚醚-20型乳化蜡（约3-13）的结构原因。',
        en: 'Both Glyceryl Stearate and PEG-100 Stearate link their hydrophilic head groups to the fatty-acid tail via ester bonds (not ether bonds), and ester linkages are more prone to hydrolysis under strongly acidic or alkaline conditions. This is the structural reason this blended wax\'s pH tolerance window (~4-9) is noticeably narrower than the ether-linked Cetearyl Alcohol/Ceteareth-20 type wax (~3-13).',
      },
    },
  ],
  hlb: 11,
  appearance: {
    zh: '白色易碎薄片状固体，部分供应商也提供粉末或颗粒形态',
    en: 'white, brittle flakes; some suppliers also offer powder or pellet forms',
  },
  performance: {
    skinFeel: {
      zh: '轻盈丝滑，不显著增加体系稠度，可从喷雾型乳液延展至厚身乳霜',
      en: 'light and silky; does not contribute substantial viscosity on its own, scaling from sprayable milks to thick creams',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '用量跨度极宽（约1-25%），单一原料即可覆盖从喷雾乳液到厚身面霜/身体乳的多种质地',
      en: 'a very wide usable dose range (~1-25%) lets a single ingredient span textures from sprayable lotions to thick face creams/body butters',
    },
    {
      zh: '肤感轻盈丝滑，不显著增加体系粘稠度，适合追求清爽质感的现代配方',
      en: 'light, silky skin feel without contributing much extra viscosity — suited to modern formulations aiming for a light finish',
    },
    {
      zh: '多家主流供应商（Croda、Seppic、Evonik、Inolex等）均有对应等效产品，供应稳定',
      en: 'equivalent products are available from multiple major suppliers (Croda, Seppic, Evonik, Inolex, etc.), giving stable supply options',
    },
  ],
  weaknesses: [
    {
      zh: '酯键连接结构，pH耐受范围中等（约4-9），强碱/强酸配方中稳定性不及醚键型乳化蜡',
      en: 'ester-linked chemistry gives only moderate pH tolerance (~4-9) — less robust than ether-linked wax types in strongly alkaline/acidic formulas',
    },
    {
      zh: 'PEG-100硬脂酸酯组分属PEG型（聚氧乙烯化）结构，制造涉及环氧乙烷，与其他PEG类原料存在相同的微量1,4-二噁烷残留考量',
      en: 'the PEG-100 Stearate component is PEG-type (ethoxylated), so manufacture involves ethylene oxide, carrying the same trace 1,4-dioxane consideration as other PEG-type ingredients',
    },
    {
      zh: '塑体/悬浮稳定能力中等，配方中悬浮颗粒或高油相体系可能仍需额外增稠剂/流变改性剂配合',
      en: 'only moderate bodying/suspension-stabilization power — formulas with suspended particles or a high oil phase may still need an additional thickener/rheology modifier',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳液至乳霜（用量可调质地）', en: 'O/W lotion through cream (texture tunable by dose)' },
      notes: { zh: '典型用量：5%喷雾乳液、10%标准乳液、15%厚乳液、20%乳霜、25%厚身乳霜', en: 'typical dosing: ~5% sprayable milk, 10% standard lotion, 15% thick lotion, 20% cream, 25% thick cream' },
    },
    {
      system: { zh: '身体乳/身体乳霜类轻盈质地产品', en: 'body lotion / body cream light-texture products' },
    },
  ],
  typicalUseLevel: { min: 1, max: 25, unit: '%' },
  relatedIngredientSlugs: ['cetearyl-alcohol-ceteareth-20', 'glyceryl-stearate-se', 'montanov-68'],
  citations: [
    {
      id: 'humblebeeandme-glystearate-peg100',
      supplier: 'Humblebee & Me (formulator technical article)',
      documentTitle: 'Glyceryl Stearate (and) PEG-100 Stearate',
      url: 'https://www.humblebeeandme.com/project/glyceryl-stearate-and-peg-100-stearate/',
      accessedDate: '2026-08-05',
      note: 'Primary source used for INCI wording, appearance, melting point (50-60°C), use-level range and dosing table, pH range, applications, and the multi-supplier trade-name list (Arlacel 165, Simulsol 165, Tego Care 165, Lexemul 561 MB). Croda\'s and Seppic\'s own official TDS pages were gated/JS-rendered and returned no usable content or HTTP 403 when fetched directly, so this independent formulator resource was used instead — the use-level range is therefore not confirmed against a primary supplier TDS.',
    },
    {
      id: 'ulprospector-arlacel165-hlb',
      supplier: 'Croda (indexed via UL Prospector/SpecialChem listing)',
      documentTitle: 'Arlacel 165 — Product description (HLB, applications)',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/134/6611607/Arlacel-165',
      accessedDate: '2026-08-05',
      note: 'HLB=11 and the "acid-stable self-emulsifying glyceryl monostearate" functional description found via search-engine snippet indexing of this listing; direct fetch returned HTTP 403 so not independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'naturalbulksupplies-glystearate-peg100-spec',
      supplier: 'Natural Bulk Supplies',
      documentTitle: 'Glyceryl Stearate & PEG-100 Stearate — Spec Sheet',
      url: 'https://naturalbulksupplies.com/content/pdf/Glyceryl%20Stearate%20&%20Peg-100%20Stearate%20Spec%20Sheet.pdf',
      accessedDate: '2026-08-05',
      note: 'PDF text extraction was partial/garbled on fetch; used only to corroborate the composition ratio (>50% glyceryl stearate, <50% PEG-100 stearate).',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'typicalUseLevel'],
  lastUpdated: '2026-08-05',
})
