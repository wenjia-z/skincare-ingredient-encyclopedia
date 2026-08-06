import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'benecel-hpmc',
  category: 'polymer',
  inciName: 'Hydroxypropyl Methylcellulose',
  nameZh: '羟丙基甲基纤维素',
  tradeNames: [
    { name: 'Benecel E10M', supplier: 'Ashland' },
    { name: 'Benecel K200M', supplier: 'Ashland' },
  ],
  chemicalClass: {
    zh: '非离子型纤维素醚（羟丙基与甲基混合醚化）',
    en: 'Nonionic cellulose ether (mixed hydroxypropyl/methyl ether)',
  },
  chemicalStructureSummary: {
    zh: '羟丙基甲基纤维素（HPMC）由碱纤维素同时与环氧丙烷及氯甲烷反应制得，在脱水葡萄糖单元上同时引入羟丙氧基（约7%-12%）与甲氧基（约28%-30%）两种取代基，属非离子型纤维素醚——与仅带羟丙基取代基的Klucel（羟丙基纤维素）以及仅带羟乙基取代基的Natrosol（羟乙基纤维素）均不相同。产品为白色至类白色粉末；参考牌号2%水溶液在20℃下粘度约4-6 mPa·s（低粘度牌号），而个人护理常用牌号（如Benecel E10M、K200M）在表面活性剂体系中可建立显著更高的粘度。甲氧基/羟丙氧基的取代模式还赋予其独特的热致凝胶特性：水溶液在加热至约58-64℃（参考牌号的凝胶/浊点温度区间）时会可逆地形成凝胶，冷却后又恢复澄清溶液——这与大多数其他水溶性聚合物"受热变稀"的行为相反。',
    en: "Hydroxypropyl methylcellulose (HPMC) is made by reacting alkali cellulose with both propylene oxide and methyl chloride, introducing a mix of hydroxypropoxy (~7-12%) and methoxy (~28-30%) substituents onto the anhydroglucose backbone — a nonionic cellulose ether distinct from Klucel (hydroxypropylcellulose, which carries only hydroxypropyl substituents) and from Natrosol (hydroxyethylcellulose, which carries only hydroxyethyl substituents). It is supplied as a white to off-white powder; for the reference low-viscosity grade, a 2% aqueous solution has a viscosity of roughly 4-6 mPa·s at 20°C, while the personal-care grades commonly used in cosmetics (e.g. Benecel E10M, K200M) build substantially higher viscosity in surfactant systems. The methoxy/hydroxypropoxy substitution pattern also gives HPMC a distinctive reverse thermal-gelation behavior: aqueous solutions form a reversible gel on heating to roughly 58-64°C (the gel/cloud-point range reported for the reference grade), then redissolve to a clear solution on cooling — the opposite of most other water-soluble polymers, which thin (rather than gel) with heat.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '甲基/羟丙基混合取代为何能在表面活性剂体系中高效增稠并增强泡沫', en: 'Why the mixed methyl/hydroxypropyl substitution builds strong viscosity in surfactant systems and enhances foam' },
      explanation: {
        zh: '相较于仅带羟乙基或羟丙基的纤维素醚，甲氧基密集的链段疏水性明显更强，赋予HPMC一定的两亲性、类表面活性剂特征；在富含表面活性剂的体系（洗发水、沐浴露）中，这些疏水链段可与表面活性剂胶束/层状结构发生缔合。所引用的技术资料直接证实了这一浓度依赖的强增稠效应（如高粘度牌号K200M在1%用量、12%表面活性剂条件下粘度可达约7,720 cps）；同样的两亲特性使其能够嵌入并强化泡沫气泡间的表面活性剂液膜，这是其被列为表面活性剂体系中泡沫增强/稳定剂的结构基础。',
        en: 'Compared with cellulose ethers bearing only hydroxyethyl or hydroxypropyl substituents, the methoxy-rich stretches along the HPMC chain are markedly more hydrophobic, giving the polymer some amphiphilic, surfactant-like character. In surfactant-rich systems (shampoos, body washes) these hydrophobic segments can associate with surfactant micelles/lamellae. The sourced technical bulletin directly documents this concentration-dependent viscosity build (e.g. the higher-viscosity K200M grade reaches roughly 7,720 cps at 1% active with 12% surfactant); the same amphiphilic character that lets it partition into and reinforce the thin surfactant films between foam bubbles is consistent with its role as a foam enhancer/stabilizer in surfactant systems.',
      },
    },
    {
      aspect: { zh: '为何受热形成凝胶而非变稀（逆向热凝胶化）', en: 'Why it gels on heating rather than thinning (reverse thermal gelation)' },
      explanation: {
        zh: '在凝胶温度以下，羟丙氧基/甲氧基取代基被有序的水化层包裹，使链段彼此分离、自由移动（低粘度）；随温度升高，该水化层逐渐被破坏，相邻链上疏水的甲氧基取代区域暴露并相互缔合，形成三维网络——即受热可逆凝胶化，冷却后又恢复溶液状态，这与HEC、HPC等不具备该疏水缔合机制的非离子纤维素醚"受热/受剪切变稀"的行为正相反。',
        en: "Below the gel temperature, the hydroxypropoxy/methoxy substituents are surrounded by an ordered hydration shell that keeps the chains apart and mobile (low viscosity). As temperature rises, this hydration shell is progressively disrupted, exposing the hydrophobic methoxy-substituted regions of neighboring chains, which then associate with one another to form a three-dimensional network — producing a reversible gel on heating and a return to solution on cooling, the opposite of the shear/temperature-thinning behavior shown by nonionic ethers such as HEC or HPC that lack this hydrophobic-association mechanism.",
      },
    },
    {
      aspect: { zh: '为何能兼具增稠与成膜功能（"结合+增稠+成膜"）', en: 'Why it functions as both a thickener and a film former ("bonding + thickening + film forming")' },
      explanation: {
        zh: '推动溶液中链缠结/增稠的亲水（羟丙氧基、未取代羟基）与疏水（甲氧基）平衡结构，在水分蒸发后同样能使HPMC干燥形成连续、内聚的聚合物膜；因此单一原料即可在涂抹阶段发挥流变改性作用，干燥后又留下具有一定粘合/成膜性的残留层（如睫毛膏配方中的应用）。',
        en: 'The same balance of hydrophilic (hydroxypropoxy, unsubstituted hydroxyl) and hydrophobic (methoxy) character that drives chain entanglement/thickening in solution also lets HPMC dry down into a continuous, cohesive polymer film once water evaporates. This lets a single ingredient act as a rheology modifier during application and leave a light bonding/film-forming residue afterward (e.g. in mascara formulations).',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '在表面活性剂体系中随聚合物浓度及表面活性剂种类显著增稠；经销商资料描述其肤感温和不刺激，适合敏感肌配方，同时具有成膜性',
      en: 'builds viscosity that increases sharply with polymer concentration and surfactant type in surfactant-based systems; a distributor source describes it as mild and non-irritating, suited to sensitive-skin formulations, while also functioning as a film former',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '所查阅资料未就起球倾向提供数据，标注为未知而非臆测',
      en: 'no pilling-specific data was found in the sources reviewed; marked unknown rather than estimated',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '与多种阴离子及两性表面活性剂（月桂基/月桂醇醚硫酸铵/钠、椰油酰胺丙基甜菜碱、月桂胺氧化物、椰油两性基乙酸钠、椰油两性基二丙酸钠）具有明确的增稠协同效应，低用量（0.5%-1.0%有效物）即可显著增稠（K200M在1%用量/12%表面活性剂下可达约7,720 cps），可替代部分盐类（NaCl）增稠工艺，避免供应商资料提及的设备腐蚀及刺激性问题',
      en: 'well-documented thickening synergy with a range of anionic and amphoteric surfactants (ammonium/sodium lauryl & laureth sulfates, cocamidopropyl betaine, lauramine oxide, sodium cocoamphoacetate, disodium cocoamphodipropionate) at low use levels (0.5%-1.0% active), reaching roughly 7,720 cps for K200M at 1% active with 12% surfactant — can replace salt (NaCl)-based thickening, avoiding the equipment-corrosion and irritation trade-offs noted in the sourced technical bulletin',
    },
    {
      zh: '具有逆向热凝胶化特性（约58-64℃可逆凝胶化，冷却复溶），是区别于其他非离子纤维素醚的独特流变行为，适用于需要受热触发结构化或高温稳定性的体系',
      en: 'reverse thermal gelation (reversible gelation at roughly 58-64°C, redissolving on cooling) is a distinctive rheological behavior versus other nonionic cellulose ethers, useful where heat-triggered structuring or high-temperature stability is desired',
    },
    {
      zh: '单一非离子原料兼具"结合+增稠+成膜"多重功能，pH及温度耐受范围较宽，且在药用（缓释片包衣）及食品领域已有长期法规使用历史',
      en: 'a single nonionic ingredient offering combined "bonding + thickening + film forming" function, with broad pH/temperature stability and a long-established regulatory track record in pharmaceutical (sustained-release tablet coating) and food-grade uses',
    },
  ],
  weaknesses: [
    {
      zh: '兼容性并非普适：所引用的Ashland技术公告指出，在较高聚合物用量下烷基糖苷类表面活性剂与HPMC会出现不兼容，实际配方中的表面活性剂兼容性需逐一验证',
      en: 'compatibility is not universal — the sourced Ashland technical bulletin notes that alkylpolyglucoside surfactants become incompatible with HPMC at higher polymer concentrations, so surfactant-system compatibility needs to be verified case by case',
    },
    {
      zh: '与Klucel类似，本次调研未能直接抓取Ashland官方一手技术资料表（证书访问问题），所用数据来自经销商技术公告及产品列表页而非一手Ashland文件，部分牌号规格数值使用前建议以Ashland官方资料复核',
      en: "as with Klucel, the primary official Ashland TDS/PDS could not be directly fetched in this research session (certificate/access issue); the data used here comes from a secondary distributor technical bulletin and product listing rather than a first-party Ashland document, so some grade-specific specification values should be re-verified against Ashland's own documentation before formulation use",
    },
    {
      zh: '作为非离子、不与油相特异结合的聚合物，自身乳化能力低，需与真正的乳化剂配合使用而非替代乳化剂',
      en: 'as a nonionic polymer with no specific oil-phase association, it has low native emulsification ability — it functions as a thickener/stabilizer/foam enhancer alongside a true emulsifier, not as a replacement for one',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '表面活性剂洁净体系（洗发水、护发素、沐浴露、洗手液）', en: 'surfactant-based cleansing systems (shampoos, hair conditioners, body washes, hand soaps)' },
      notes: { zh: '经销商技术公告数据：0.5%-1.0%有效物用量下与多种阴离子/两性表面活性剂产生显著增稠协同', en: 'distributor technical bulletin data: significant thickening synergy with a range of anionic/amphoteric surfactants at 0.5-1.0% active use level' },
    },
    { system: { zh: '彩妆（睫毛膏等，利用其成膜性）', en: 'color cosmetics (e.g. mascara, leveraging its film-forming property)' } },
    { system: { zh: '一般膏霜（温和流变改性）', en: 'general creams (mild rheology modification)' } },
  ],
  typicalUseLevel: { min: 0.2, max: 2, unit: '%' },
  relatedIngredientSlugs: ['klucel-hpc', 'natrosol-hec'],
  citations: [
    {
      id: 'ashland-benecel-tib-vc703c',
      supplier: 'Ashland (Aqualon Benecel; Technical Information Bulletin TIB VC-703C, mirrored via Scribd)',
      documentTitle: 'TIB VC-703C — Benecel E10M and K200M Hydroxypropylmethylcellulose in Surfactant Systems (Technical Information Bulletin)',
      url: 'https://www.scribd.com/document/1065349590/TIB-VC-703C-Benecel-E10M-K200M',
      accessedDate: '2026-08-06',
      note: "Ashland technical bulletin. Used for INCI name confirmation, cosmetic grade names (Benecel E10M, K200M), use levels tested (0.50% and 1.00% active vs 6.00%/12.00% active surfactant), surfactant compatibility (ammonium/sodium lauryl & laureth sulfates, cocamidopropyl betaine, lauramine oxide, sodium cocoamphoacetate, disodium cocoamphodipropionate — compatible; alkylpolyglucosides — incompatible at higher polymer concentration), resulting viscosity ranges (E10M: 26-996 cps; K200M: up to ~7,720 cps), and the non-corrosive / reduced-irritation manufacturing advantage versus salt (NaCl) thickening. Ashland's own official product page (ashland.com) returned a TLS certificate error when fetched directly in this session.",
    },
    {
      id: 'skincarematerial-benecel-hpmc',
      supplier: 'skincarematerial.com (distributor listing, Ashland Benecel HPMC)',
      documentTitle: 'Ashland Benecel HPMC (Hydroxypropyl Methylcellulose) — Multifunctional Pharmaceutical Excipient / Food-Grade Thickener product listing (CAS 9004-65-3)',
      url: 'https://www.skincarematerial.com/Ashland-Benecel-HPMC-Hydroxypropyl-Methylcellulose-Multifunctional-Pharmaceutical-Excipient-Food-Grade-Thickener-CAS-9004-65-3-pd539289448.html',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name confirmation, CAS number, appearance, methoxy/hydroxypropoxy substitution ranges, reference-grade viscosity (2% solution, 4-6 mPa·s at 20°C) and gel temperature (58-64°C), general personal-care use-level range (0.2%-2%), and the "bonding + thickening + film forming" functional description.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: [
    'pillingTendency (no source found)',
    'grade-by-grade viscosity specification table (only two grades\' surfactant-thickening data confirmed via the sourced technical bulletin; a full grade lineup was not independently verified)',
    'primary Ashland TDS/PDS not independently accessed this session (certificate/access issue) — data relies on distributor-sourced secondary documents',
  ],
  lastUpdated: '2026-08-06',
})
