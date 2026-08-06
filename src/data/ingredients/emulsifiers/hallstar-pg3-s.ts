import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'hallstar-pg3-s',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-3 Stearate',
  nameZh: '聚甘油-3硬脂酸酯',
  tradeNames: [{ name: 'HallStar® PG3-S', supplier: 'Hallstar' }],
  chemicalClass: {
    zh: '聚甘油酯类非离子乳化剂/增溶剂',
    en: 'Polyglycerol ester non-ionic emulsifier / solubilizer',
  },
  chemicalStructureSummary: {
    zh: '由三聚甘油（3个甘油单元经无氯、高温蒸馏工艺缩聚形成的低聚/交联超支化三甘油分子）与硬脂酸（C18长链饱和脂肪酸）酯化而成，供应商数据显示原料100%源自植物、采用RSPO质量平衡棕榈油。与同系列的PG10-S（10个甘油单元）相比，PG3-S的聚甘油头基更小、羟基数更少，亲水性明显弱于PG10-S，整体呈现偏亲油的W/O乳化剂特征。',
    en: 'An ester of triglycerol (a low-oligomer, crosslinked/hyperbranched three-glycerol-unit molecule produced via a chlorine-free, high-heat distillation process) with stearic acid (a C18 long-chain saturated fatty acid); per supplier data the raw material is 100% plant-derived, using RSPO Mass Balance palm oil. Compared with the related HallStar PG10-S (10 glycerol units), PG3-S has a smaller, less hydroxyl-dense head group and is markedly less hydrophilic, giving it the profile of a more lipophilic, W/O-leaning emulsifier.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: 'W/O乳化能力从何而来', en: 'Where the W/O emulsifying ability comes from' },
      explanation: {
        zh: '三聚甘油头基仅由3个甘油单元构成，游离羟基数量远少于10聚甘油的PG10-S，亲水性相对有限；而C18硬脂酸尾链的疏水贡献不变，因此亲油-亲水比例向疏水一侧倾斜，有效HLB约9-10（供应商数据），使其更易在界面上以油相为连续相排列，形成并稳定水包油含量低于25%的W/O乳液。',
        en: 'The triglycerol head group is built from just 3 glycerol units, giving far fewer free hydroxyls than the 10-unit PG10-S and correspondingly limited hydrophilicity; the hydrophobic contribution from the C18 stearic-acid tail stays the same, so the lipophile/hydrophile balance shifts toward the hydrophobic side, with an effective HLB of roughly 9-10 (per supplier data). This makes it more inclined to orient at the interface with the oil phase as the continuous phase, forming and stabilizing W/O emulsions with water content up to 25%.',
      },
    },
    {
      aspect: { zh: '兼作O/W体系助乳化剂从何而来', en: 'Where its role as a co-emulsifier in O/W systems comes from' },
      explanation: {
        zh: '尽管整体偏亲油，三聚甘油头基仍保留一定数量的游离羟基，能与水形成有限的氢键作用；这部分残余亲水性不足以单独支撑O/W乳化，但足以在O/W体系中与高HLB乳化剂协同，起到调节界面膜刚性、辅助稳定的作用，因此供应商将其定位为"W/O乳化剂，同时可作O/W体系的助乳化剂"。',
        en: 'Although overall lipophilic, the triglycerol head group still retains a limited number of free hydroxyls capable of some hydrogen bonding with water; this residual hydrophilicity is not enough to support O/W emulsification on its own, but is sufficient to work synergistically with a high-HLB emulsifier in O/W systems, helping tune interfacial-film rigidity and aid stabilization — which is why the supplier positions it as "a W/O emulsifier that can also serve as a co-emulsifier in O/W systems."',
      },
    },
    {
      aspect: { zh: '与PG10-S的HLB梯度关系', en: 'The HLB-gradient relationship with PG10-S' },
      explanation: {
        zh: 'PG3-S与PG10-S共享同一"聚甘油+硬脂酸"酯化平台，唯一结构变量是聚甘油聚合度（3 vs 10）。聚合度越低，头基越小、亲水性越弱，HLB越低；这使Hallstar这两款产品成为可按聚合度调档的同平台姐妹原料，配方师可根据目标体系（W/O或O/W）选择对应聚合度的品级。',
        en: 'PG3-S and PG10-S share the same "polyglycerol + stearic acid" esterification platform; the sole structural variable is the polyglycerol degree of polymerization (3 vs. 10). A lower degree of polymerization means a smaller, less hydrophilic head group and a lower HLB — making these two Hallstar products platform siblings that can be dialed in by polymerization degree, letting a formulator pick the grade matched to the target system (W/O or O/W).',
      },
    },
  ],
  hlb: { min: 9, max: 10 },
  appearance: {
    zh: '类白色固体，微弱气味，熔点约55°C',
    en: 'off-white solid with a mild odor, melting point approx. 55°C',
  },
  performance: {
    skinFeel: {
      zh: '供应商数据未详细描述具体肤感触感，暂标记为待确认；定位为可形成高稳定性W/O乳液的皮肤调理剂',
      en: 'supplier data does not detail a specific tactile skin-feel description — flagged as unconfirmed; positioned as a skin-conditioning agent capable of forming highly stable W/O emulsions',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '100%植物来源原料，采用RSPO质量平衡棕榈油，不含PEG、PPG、1,4-二氧六环及氯，供应商数据显示对皮肤无刺激、无致敏性',
      en: '100% plant-based raw material using RSPO Mass Balance palm oil; PEG-, PPG-, 1,4-dioxane- and chlorine-free; per supplier data, non-irritating and non-sensitizing to skin',
    },
    {
      zh: '供应商数据：可形成油含量低于25%的高稳定性W/O乳液，同时可作为O/W体系的助乳化剂使用，用法灵活',
      en: 'per supplier data: forms highly stable W/O emulsions with oil content below 25%, and can also serve as a co-emulsifier in O/W systems, giving formulation flexibility',
    },
    {
      zh: '中等HLB（约9-10）定位清晰，与同系列PG10-S形成互补的高低HLB乳化剂对，便于配方师按体系选型',
      en: 'a clearly positioned moderate HLB (~9-10) that pairs complementarily with the higher-HLB PG10-S from the same line, making it easy for formulators to select the grade matched to their system',
    },
  ],
  weaknesses: [
    {
      zh: '室温下为固体（熔点约55°C），热法工艺需先熔融，能耗高于液态乳化剂',
      en: 'a solid at room temperature (melting point ~55°C); hot-process manufacturing requires melting first, more energy-intensive than liquid emulsifiers',
    },
    {
      zh: '目前可公开获取的资料以供应商官网产品页为主，尚未找到独立第三方技术数据表（如具体黏度、pH范围、稳定性测试数据），数据完整度标记为partial',
      en: 'publicly available data currently comes mainly from the supplier\'s own product page; an independent third-party TDS (specific viscosity, pH range, stability test data) has not been located, so data completeness is marked partial',
    },
    {
      zh: '作为W/O乳化剂，其可稳定的水相占比有限（供应商数据：油含量需低于25%以外的体系未见说明），高含水W/O配方需另行验证',
      en: 'as a W/O emulsifier, the water-phase fraction it can stabilize is limited (supplier data specifies oil content below 25%; behavior outside that range is not documented), so high-water-content W/O formulas would need separate verification',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'W/O 乳霜/乳液（低油相，<25%）', en: 'W/O cream / lotion (low oil phase, <25%)' },
      notes: {
        zh: '供应商数据：形成高稳定性W/O乳液的主力应用场景',
        en: 'per supplier data: the primary use case for forming highly stable W/O emulsions',
      },
    },
    {
      system: { zh: 'O/W体系中的助乳化剂', en: 'co-emulsifier role within O/W systems' },
    },
  ],
  typicalUseLevel: { min: 1, max: 6, unit: '%' },
  relatedIngredientSlugs: ['hallstar-pg10-s', 'polyglyceryl-4-caprate'],
  citations: [
    {
      id: 'hallstarbeauty-pg3s-product-page',
      supplier: 'Hallstar',
      documentTitle: 'HallStar® PG3-S — Product Page (Hallstar BPC)',
      url: 'https://www.hallstarbeauty.com/product/hallstar-pg3-s/',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name, chemical description (triglycerol via chlorine-free high-heat distillation, then esterified with stearic acid), appearance, melting point (~55°C), HLB (9/10), functional properties, PEG/PPG/dioxane/chlorine-free claims, use level (1-6%), and the W/O emulsion (<25% oil) / O/W co-emulsifier positioning. Direct WebFetch of this page returned HTTP 403 (bot protection); content was retrieved via a search-engine indexed summary of this official Hallstar page.',
    },
    {
      id: 'epa-comptox-pg3-stearate',
      supplier: 'US EPA CompTox Chemicals Dashboard',
      documentTitle: 'Chemical Detail: Polyglyceryl-3 Stearate (DTXSID801042437)',
      url: 'https://comptox.epa.gov/chemexpo/chemical/DTXSID801042437/',
      accessedDate: '2026-08-06',
      note: 'Independent government database cross-check confirming CAS 27321-72-8 for Polyglyceryl-3 Stearate and its widespread use in personal-care formulations (moisturizers, lotions, sunscreen, makeup) — used only to corroborate ingredient identity, not for the Hallstar-specific performance figures above.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance.skinFeel', 'performance.pillingTendency', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-06',
})
