import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'salcare-sc-80',
  category: 'polymer',
  inciName: 'Steareth-10 Allyl Ether/Acrylates Copolymer',
  nameZh: '硬脂醇聚醚-10烯丙基醚/丙烯酸酯共聚物',
  tradeNames: [{ name: 'Salcare SC 80', supplier: 'BASF' }],
  chemicalClass: {
    zh: '合成阴离子疏水缔合型碱溶胀乳液聚合物（HASE类缔合型增稠剂）',
    en: 'Synthetic anionic hydrophobically-modified alkali-swellable-emulsion (HASE-type associative) polymer thickener',
  },
  chemicalStructureSummary: {
    zh: '根据CosIng官方定义，Steareth-10 Allyl Ether/Acrylates Copolymer是"硬脂醇聚醚-10烯丙基醚"与"一种或多种丙烯酸、甲基丙烯酸或其简单酯类单体"共聚而成的聚合物（CAS 109292-17-3）。即主链由丙烯酸/甲基丙烯酸（及其酯）构成，同时接枝了少量疏水性大分子单体——硬脂醇聚醚-10烯丙基醚（一条C18硬脂基长链，末端带约10个环氧乙烷单元并以烯丙基醚形式连接到主链上）。这正是HASE（疏水改性碱溶胀乳液）类缔合型增稠剂的典型分子架构：出厂时以酸性阴离子乳液形式供应（链段紧密卷曲，粘度低），中和至工作pH后主链羧基电离、链段伸展，同时接枝的疏水尾链彼此缔合、或与体系中表面活性剂胶束等疏水结构发生缔合，形成叠加在静电排斥网络之上的疏水缔合网络。',
    en: 'Per the official CosIng definition, Steareth-10 Allyl Ether/Acrylates Copolymer is a copolymer of the allyl ether of Steareth-10 with one or more monomers of acrylic acid, methacrylic acid, or their simple esters (CAS 109292-17-3). That is, the backbone is built from acrylic/methacrylic acid (and its esters), with a small proportion of a hydrophobic macromonomer grafted on — Steareth-10 allyl ether, a C18 stearyl chain capped with roughly 10 ethylene-oxide units and attached to the backbone via an allyl-ether linkage. This is the classic molecular architecture of a HASE (hydrophobically-modified alkali-swellable emulsion) associative thickener: supplied as an acidic anionic emulsion (chains tightly coiled, low viscosity) as manufactured; once neutralized to its working pH, the backbone carboxyl groups ionize and the chains extend, while the grafted hydrophobic tails simultaneously associate with each other or with hydrophobic structures in the system (e.g. surfactant micelles), forming an additional associative network layered on top of the electrostatic one.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '"中和后于室温即可增稠"从何而来', en: 'Where "viscosity build at room temperature on neutralization" comes from' },
      explanation: {
        zh: '主链上的丙烯酸/甲基丙烯酸单元在出厂的酸性乳液中大部分未电离，链段紧密卷曲、体系粘度低；将体系pH调至供应商标示的工作区间（pH 6.5-12.0）后，羧基电离为羧酸根，同性电荷排斥驱使链段伸展、吸水膨胀，粘度随之在室温下直接建立，无需额外加热——这一基础机制与卡波姆类增稠剂相同。',
        en: 'The acrylic/methacrylic-acid units on the backbone are mostly un-ionized in the as-supplied acidic emulsion, keeping chains tightly coiled and viscosity low. Raising the system pH into the supplier-stated working range (pH 6.5-12.0) ionizes the carboxyl groups to carboxylate; like-charge repulsion drives the chains to extend and imbibe water, building viscosity directly at room temperature with no extra heating step — the same underlying mechanism as Carbomer-type thickeners.',
      },
    },
    {
      aspect: { zh: '缔合流变性与"高效增稠表面活性剂体系"从何而来', en: 'Where the associative rheology and "efficient thickening of surfactant systems" come from' },
      explanation: {
        zh: '接枝在主链上的硬脂醇聚醚-10烯丙基醚是一条C18脂肪疏水尾链；一旦链段因中和而伸展开来，这些疏水尾链倾向于彼此缔合，或插入/结合到体系中表面活性剂胶束等疏水微区，形成一层叠加在静电排斥网络之上的物理"缔合"网络。这种双重网络机制正是Salcare SC 80在高表面活性剂含量体系中能高效、可预期地建立粘度的结构原因——区别于纯粹依赖羧酸根静电排斥、在高表活/高电解质环境下容易被破坏的非缔合型聚丙烯酸盐。',
        en: "The Steareth-10 allyl-ether hydrophobe grafted onto the backbone is a C18 fatty tail. Once the chains extend on neutralization, these hydrophobic tails tend to associate with each other, or insert into/bind hydrophobic microdomains such as surfactant micelles present in the system, forming a physical 'associative' network layered on top of the electrostatic-repulsion network. This dual-network mechanism is the structural reason Salcare SC 80 can build viscosity efficiently and predictably in high-surfactant-content systems — unlike a non-associative polyacrylate that relies purely on carboxylate electrostatic repulsion and is more easily disrupted in high-surfactant/high-electrolyte environments.",
      },
    },
    {
      aspect: { zh: '电解质耐受性从何而来', en: 'Where the electrolyte tolerance comes from' },
      explanation: {
        zh: '由于增稠效果部分来自疏水尾链之间的缔合作用而非单纯依赖羧酸根之间的静电排斥，体系中游离离子屏蔽电荷排斥（即传统非缔合型聚丙烯酸盐粘度骤降的原因）对Salcare SC 80的影响相对有限——疏水缔合网络在电解质存在下仍能部分维持结构完整，因此其电解质耐受性通常优于纯静电排斥型丙烯酸类聚合物，这与供应商标注的"电解质耐受性"表现相符。',
        en: "Because part of the thickening effect comes from hydrophobic-tail association rather than purely from carboxylate electrostatic repulsion, screening of that charge repulsion by free ions in the system — the mechanism behind the sharp viscosity loss seen in conventional non-associative polyacrylates — has a comparatively limited effect on Salcare SC 80, since the hydrophobic associative network can partly retain its structural integrity even in the presence of electrolytes. This is consistent with the supplier's stated 'electrolyte tolerance' for the product.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '主要用于表面活性剂/清洁体系及透明凝胶产品，供应商强调其适合"清澈凝胶"配方；未见供应商就具体肤感描述词作专门说明',
      en: 'used mainly in surfactant/cleansing systems and clear-gel products; the supplier emphasizes suitability for "clear gel" formulations, but no supplier-specific skin-feel descriptor language was found',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '主要用于即冲洗型表面活性剂体系及爽肤水等透明凝胶，非典型驻留型高负荷成膜聚合物，未见供应商专项起球数据，按一般HASE类缔合增稠剂在此类应用中的经验判断为低风险',
      en: 'used mainly in rinse-off surfactant systems and clear leave-on gels like toners rather than as a high-load leave-on film-former; no supplier-specific pilling data was found, but risk is judged low based on general experience with HASE-type associative thickeners in these applications',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '中和后于室温即可直接建立粘度，无需加热工艺（供应商数据）',
      en: 'builds viscosity directly at room temperature upon neutralization, with no heating step required (supplier data)',
    },
    {
      zh: '缔合型（HASE）增稠机制使其在表面活性剂体系中增稠效率高、且具备电解质耐受性（供应商数据），尤其适合清澈凝胶类产品',
      en: 'the associative (HASE) thickening mechanism gives efficient thickening in surfactant systems along with electrolyte tolerance (supplier data), particularly suited to clear-gel products',
    },
    {
      zh: '与阴离子、两性、非离子表面活性剂均有良好兼容性（供应商数据），适配面部爽肤水、脱毛膏、透明防晒凝胶、磨砂膏、沐浴露等多种体系',
      en: 'good compatibility with anionic, amphoteric, and nonionic surfactants (supplier data), suiting systems such as facial toners, depilatories, clear sunscreen gels, facial scrubs, and shower/bath gels',
    },
  ],
  weaknesses: [
    {
      zh: '需要单独的中和步骤（加碱调至工作pH）才能建立粘度，不同于Sepimax ZEN等预中和型流变改性剂',
      en: 'requires a separate neutralization step (raising pH with alkali) to build viscosity, unlike pre-neutralized rheology modifiers such as Sepimax ZEN',
    },
    {
      zh: '有效工作pH区间偏碱性（供应商数据：约pH 6.5-12.0），对目标终产品pH偏中性/弱酸性的配方需额外验证兼容性',
      en: 'the effective working pH range skews alkaline (supplier data: roughly pH 6.5-12.0) — formulas targeting a neutral or mildly acidic finished pH need extra compatibility verification',
    },
    {
      zh: '合成丙烯酸类聚合物，天然/有机认证配方通常无法使用；本次调研未能获取到供应商公开的具体推荐用量（%），已标记为待核实',
      en: 'a synthetic acrylate polymer, generally unusable in natural/organic-certified formulations; this research pass could not locate a supplier-published numeric recommended use level (%), flagged as unverified',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明凝胶类产品（面部爽肤水、透明防晒凝胶、磨砂膏、沐浴露）', en: 'clear-gel products (facial toner, clear sunscreen gel, facial scrub, shower/bath gel)' },
      notes: { zh: '供应商列出的典型应用场景', en: 'flagship applications listed by the supplier' },
    },
    {
      system: { zh: '洗发水等发用表面活性剂体系', en: 'shampoo and other hair-care surfactant systems' },
    },
    {
      system: { zh: '脱毛膏类产品', en: 'depilatory products' },
    },
  ],
  relatedIngredientSlugs: ['sodium-polyacrylate', 'sepiplus-400', 'sepimax-zen'],
  citations: [
    {
      id: 'azelispc-salcaresc80-productpage',
      supplier: 'BASF (via Azelis PC US distributor product page)',
      documentTitle: 'Salcare® SC 80 — Product page (alkali-soluble associative thickener)',
      url: 'https://www.azelispc-us.com/product/salcare-sc-80/',
      accessedDate: '2026-08-06',
      note: 'Used for INCI, chemical classification (alkali-soluble associative thickener, anionic emulsion), pH range (6.5-12.0), "viscosity build at room temperature on neutralisation" language, clear-gel positioning, surfactant-thickening efficiency, and applications list.',
    },
    {
      id: 'search-salcaresc80-ulprospector-snippet',
      supplier: 'BASF (UL Prospector listing, indexed excerpt)',
      documentTitle: 'Salcare® SC 80 UP by BASF Personal Care — product listing',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/75/192780/Salcare-SC-80-UP',
      accessedDate: '2026-08-06',
      note: 'Cross-confirms INCI, "alkali soluble associative thickener" classification, and viscosity-building/associative-rheology/electrolyte-tolerance property language. Found via web-search summary; direct fetch of the UL Prospector page returned HTTP 403 in this session.',
    },
    {
      id: 'incidecoder-steareth10allylether-cosing-definition',
      supplier: 'incidecoder.com (INCI ingredient dictionary, citing official CosIng definition)',
      documentTitle: 'Steareth-10 Allyl Ether/Acrylates Copolymer — Ingredient dictionary entry',
      url: 'https://incidecoder.com/ingredients/steareth-10-allyl-ether-acrylates-copolymer',
      accessedDate: '2026-08-06',
      note: 'Used for the official CosIng structural definition ("a copolymer of the allyl ether of steareth-10 and one or more monomers of acrylic acid, methacrylic acid, or one of their simple esters," CAS 109292-17-3) underpinning the HASE-type structure-function analysis in this entry — general INCI-dictionary chemistry background, not a Salcare-SC-80-specific supplier claim.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
