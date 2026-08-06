import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'hallstar-pg10-s',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-10 Stearate',
  nameZh: '聚甘油-10硬脂酸酯',
  tradeNames: [{ name: 'HallStar® PG10-S', supplier: 'Hallstar' }],
  chemicalClass: {
    zh: '聚甘油酯类非离子乳化剂/增溶剂',
    en: 'Polyglycerol ester non-ionic emulsifier / solubilizer',
  },
  chemicalStructureSummary: {
    zh: '由聚甘油（10个甘油单元缩聚形成的高支化、多羟基亲水骨架）与硬脂酸（C18长链饱和脂肪酸）酯化而成，供应商数据显示原料100%源自植物、采用RSPO质量平衡棕榈油。相比同系列的PG3-S（3个甘油单元），PG10-S的聚甘油头基更庞大、羟基密度更高，因此整体亲水性明显更强，是一种以O/W乳化/增溶为主的非离子表面活性剂。',
    en: 'An ester of polyglycerol (a highly branched, multi-hydroxyl hydrophilic backbone built by polymerizing 10 glycerol units) with stearic acid (a C18 long-chain saturated fatty acid); per supplier data the raw material is 100% plant-derived, using RSPO Mass Balance palm oil. Compared with the related HallStar PG3-S (3 glycerol units), PG10-S carries a much larger, more hydroxyl-dense polyglycerol head group, giving it markedly stronger hydrophilicity and positioning it as a predominantly O/W emulsifying/solubilizing non-ionic surfactant.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高HLB与O/W乳化能力从何而来', en: 'Where the high HLB and O/W emulsifying ability come from' },
      explanation: {
        zh: '10个甘油单元聚合形成的支化头基携带大量游离羟基，能与水形成密集的氢键网络，而C18硬脂酸尾链提供的疏水性相对固定；亲水头基远大于疏水尾链，使其有效HLB达到约12-13（供应商数据），因此偏向水包油（O/W）乳化及油溶性成分的增溶，而非稳定高油相体系。',
        en: 'The branched head group formed by polymerizing 10 glycerol units carries numerous free hydroxyls that form a dense hydrogen-bonding network with water, while the C18 stearic-acid tail contributes a comparatively fixed degree of hydrophobicity. Because the hydrophilic head so heavily outweighs the hydrophobic tail, the effective HLB reaches roughly 12-13 (per supplier data), biasing the molecule toward oil-in-water (O/W) emulsification and solubilizing oil-soluble ingredients rather than stabilizing high-oil-phase systems.',
      },
    },
    {
      aspect: { zh: '强吸湿性与长效保湿感从何而来', en: 'Where the strong hygroscopicity and long-lasting moisturizing feel come from' },
      explanation: {
        zh: '供应商描述该原料在含水配方中会形成"环状聚合"结构，即多个羟基之间通过氢键相互缔合、形成类似"笼状"结构将水分子锁住；这种多羟基聚甘油骨架的强吸湿性是其保湿性能持久稳定的结构基础，也解释了为何供应商将其定位为兼具乳化与皮肤调理（保湿）功能的原料。',
        en: 'Per supplier description, in water-containing formulas the ingredient forms a "cyclopolymerized" structure — multiple hydroxyls associating via hydrogen bonds into a cage-like arrangement that locks in water molecules. This strong hygroscopicity, rooted in the multi-hydroxyl polyglycerol backbone, is the structural basis for the long-lasting, stable moisturizing performance the supplier claims, and explains why the ingredient is positioned as both an emulsifier and a skin-conditioning (moisturizing) agent.',
      },
    },
    {
      aspect: { zh: '与PG3-S的O/W vs W/O差异从何而来', en: 'Where the O/W-vs-W/O contrast with PG3-S comes from' },
      explanation: {
        zh: 'PG10-S与同系列PG3-S共享"聚甘油+硬脂酸"的基本酯化结构，但聚甘油聚合度不同（10 vs 3个单元）：聚合度越高，头基体积和羟基数量越大，分子整体亲水性越强，因此PG10-S的HLB（约12-13）显著高于PG3-S（约9-10），前者适合O/W体系、后者适合W/O体系——两者是同一化学平台上通过调节聚甘油链长实现HLB"调档"的姐妹原料。',
        en: 'PG10-S shares the same basic "polyglycerol + stearic acid" esterification chemistry with its sister product PG3-S, but differs in polyglycerol degree of polymerization (10 vs. 3 units): a higher degree of polymerization means a bulkier head group with more hydroxyls and therefore stronger overall hydrophilicity, which is why PG10-S\'s HLB (~12-13) sits well above PG3-S\'s (~9-10) — the former suits O/W systems and the latter W/O systems. The two are sibling ingredients on the same chemical platform, "HLB-tuned" by adjusting polyglycerol chain length.',
      },
    },
  ],
  hlb: { min: 12, max: 13 },
  appearance: {
    zh: '类白色固体，微弱气味，熔点约55°C',
    en: 'off-white solid with a mild odor, melting point approx. 55°C',
  },
  performance: {
    skinFeel: {
      zh: '供应商数据：具备良好保湿性，长效且稳定；肤感未见供应商详细描述，暂标记为待确认',
      en: 'per supplier data: good moisturizing properties, long-lasting and stable; supplier does not detail a specific tactile skin-feel description — flagged as unconfirmed',
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
      zh: '高HLB（约12-13）使其兼具O/W乳化与增溶双重功能，同时因多羟基聚甘油骨架具吸湿锁水能力，赋予配方保湿性',
      en: 'high HLB (~12-13) gives it dual O/W emulsifying and solubilizing function, while the multi-hydroxyl polyglycerol backbone contributes hygroscopic, water-locking moisturizing benefit to a formula',
    },
    {
      zh: '易分散于水中，供应商定位为稳定、长效的功能性乳化剂',
      en: 'easily dispersible in water; positioned by the supplier as a stable, long-lasting functional emulsifier',
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
      zh: '高HLB结构决定其单独稳定高油相丰润乳霜的能力有限，通常需与低HLB乳化剂复配使用',
      en: 'the high-HLB structure limits its ability to stabilize high-oil-phase, rich-cream systems on its own; typically needs to be paired with a lower-HLB co-emulsifier',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳液/精华类配方', en: 'O/W lotion / serum formulas' },
      notes: {
        zh: '作为乳化剂/增溶剂，兼顾保湿肤感调理功能',
        en: 'used as an emulsifier/solubilizer while also contributing moisturizing skin-conditioning benefit',
      },
    },
    {
      system: { zh: '需增溶少量油溶性活性物或香精的水基配方', en: 'water-based formulas needing to solubilize small amounts of oil-soluble actives or fragrance' },
    },
  ],
  typicalUseLevel: { min: 1, max: 5, unit: '%' },
  relatedIngredientSlugs: ['hallstar-pg3-s', 'polyglyceryl-4-caprate'],
  citations: [
    {
      id: 'hallstarbeauty-pg10s-product-page',
      supplier: 'Hallstar',
      documentTitle: 'HallStar® PG10-S — Product Page (Hallstar BPC)',
      url: 'https://www.hallstarbeauty.com/product/hallstar-pg10-s/',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name, chemical description (polyglycerin + stearic acid esterification), appearance, melting point (~55°C), HLB (12/13), functional properties, PEG/PPG/dioxane/chlorine-free claims, use level (1-5%), and the hygroscopic "cyclopolymerized" water-locking description. Direct WebFetch of this page returned HTTP 403 (bot protection); content was retrieved via a search-engine indexed summary of this official Hallstar page.',
    },
    {
      id: 'ulprospector-pg10s-listing',
      supplier: 'UL Prospector (product listing index)',
      documentTitle: 'HallStar® PG10-S — Personal Care & Cosmetics product listing',
      url: 'https://www.ulprospector.com/en/la/PersonalCare/Detail/2212/8676758/HallStar-PG10-S',
      accessedDate: '2026-08-06',
      note: 'Corroborating listing found via web search confirming product identity and supplier; direct fetch returned HTTP 403 and was not independently verified beyond the search-indexed title/summary.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance.skinFeel', 'performance.pillingTendency', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-06',
})
