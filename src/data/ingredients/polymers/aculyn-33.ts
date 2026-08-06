import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'aculyn-33',
  category: 'polymer',
  inciName: 'Acrylates Copolymer',
  nameZh: '丙烯酸酯类共聚物',
  tradeNames: [{ name: 'Aculyn 33', supplier: 'Dow' }],
  chemicalClass: {
    zh: '阴离子型碱溶胀丙烯酸类聚合物乳液（ASE型），轻度交联，非缔合型',
    en: 'Anionic alkali-swellable acrylic polymer emulsion (ASE), lightly crosslinked, non-associative',
  },
  chemicalStructureSummary: {
    zh: 'ACULYN 33是由酸性单体（丙烯酸）与丙烯酸酯共聚单体经乳液聚合制得的碱溶胀乳液（ASE）聚合物，并经轻度共价交联以形成"短"而假塑性的流动特征。与同系列的ACULYN 22/88（HASE型）不同，其主链上不带长链疏水侧链，属于非缔合型增稠机制。产品以牛奶白色、28%固含量水乳液供应，未中和时pH约3.0、密度1.05、粘度约10 mPa·s，当量重218（每1当量NaOH中和的干聚合物克数）；2%固含量水溶液的假塑性指数（6rpm/60rpm粘度比）为5.0。中和后（pH>6.5左右起效）主链羧基电离带电、链段因静电排斥而伸展，长链彼此物理缠结并构建连续相的三维网络——由于不存在疏水缔合位点，该聚合物不与表面活性剂胶束、颗粒物或乳液油滴发生特异性相互作用，仅通过链缠结与静电排斥"构造"连续水相。',
    en: "ACULYN 33 is an alkali-swellable emulsion (ASE) polymer synthesized from acid (acrylic acid) and acrylate-ester comonomers via emulsion polymerization, lightly crosslinked to impart a short, pseudoplastic flow. Unlike the related HASE polymers ACULYN 22/88, its backbone carries no long-chain hydrophobic side groups, making its thickening mechanism non-associative. It is supplied as a milky-white, 28%-solids aqueous emulsion at pH ~3.0 (as supplied), density 1.05, as-supplied viscosity ~10 mPa·s, and an equivalent weight of 218 (grams of dry polymer neutralized by one equivalent of NaOH); a 2%-solids aqueous solution has a pseudoplastic index (viscosity at 6 rpm / viscosity at 60 rpm) of 5.0. On neutralization (effective above roughly pH 6.5), the backbone carboxyl groups ionize and repel one another, causing the chains to unfold; the extended long chains then physically entangle and structure the continuous aqueous phase. Because it has no hydrophobic association sites, the polymer does not interact specifically with surfactant micelles, particulates, or emulsion oil droplets — it thickens purely by structuring the continuous phase via chain entanglement and electrostatic repulsion.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '非缔合机制为何带来对过氧化物、电解质及极性溶剂的稳定性', en: 'Why the non-associative mechanism gives stability with peroxide, electrolytes and polar solvents' },
      explanation: {
        zh: '由于链上不存在与表面活性剂胶束或氧化性物质特异结合的疏水"锚点"，ACULYN 33完全通过链缠结与电荷排斥来构造连续相，这一机制对体系中具体存在的化学物种相对不敏感——这正是供应商资料中说明其"与过氧化物及其他氧化剂、电解质、极性溶剂及吡啶硫酮锌兼容"的结构基础，也是其在过氧化物稳定性测试及高岭土悬浮实验中表现出可预测、稳定响应的原因，区别于ACULYN 22等HASE型缔合聚合物随表面活性剂浓度呈"钟形"响应曲线的行为。',
        en: "Because the chain carries no hydrophobic \"anchor\" that specifically binds surfactant micelles or oxidizing species, ACULYN 33 structures the continuous phase purely through chain entanglement and charge repulsion — a mechanism that is relatively indifferent to the specific chemical species present. This is the structural basis for the supplier's description of it as compatible with peroxide and other oxidizing agents, electrolytes, polar solvents, and zinc pyrithione, and for its predictable, stable response in the sourced peroxide-stability and kaolin-clay-suspension data — in contrast to the bell-shaped, surfactant-concentration-dependent response seen with associative HASE polymers such as ACULYN 22.",
      },
    },
    {
      aspect: { zh: '轻度交联为何带来"短、如黄油般"的流动质感', en: 'Why light crosslinking gives a "short, buttery" flow feel' },
      explanation: {
        zh: '与ACULYN 88类似，共价交联点将中和后带电、伸展的链网络约束在有边界的结构内，使其在受剪切时以可预测的方式发生结构破坏（中等程度剪切变稀，假塑性指数5.0）并可恢复，从而产生供应商所描述的"短、如黄油般"、不拉丝的涂抹后感，而非高分子量线性聚电解质常见的蛛网状拉丝流动。',
        en: 'As with ACULYN 88, covalent crosslink points bound the extended, charged network into a finite structure, so that under applied shear it breaks down in a predictable, moderate shear-thinning manner (pseudoplastic index 5.0) and recovers — producing the supplier-described "short, buttery," non-stringy after-feel rather than the cobwebby, stringy flow typical of high-molecular-weight linear polyelectrolytes.',
      },
    },
    {
      aspect: { zh: '为何能高效增稠极性有机溶剂体系', en: 'Why it thickens polar organic-solvent systems efficiently' },
      explanation: {
        zh: '因增稠来源于电荷排斥与链缠结而非疏水缔合，其增稠机制不会像缔合型聚合物网络那样被极性有机助溶剂破坏；供应商技术资料中给出的50%乙醇、丙二醇、甘油及山梨醇溶液的增稠效率数据，以及最高可增稠至60%异丙醇溶液的说明，直接证实了这一极性溶剂耐受性，是其被定位为"适用于含极性溶剂配方的高性价比增稠剂"的分子基础。',
        en: "Because thickening comes from charge repulsion and chain entanglement rather than hydrophobic association, the mechanism is not disrupted by polar organic co-solvents the way an associative-polymer network can be. The supplier's own thickening-efficiency data for 50% ethanol, propylene glycol, glycerine and sorbitol solutions, and its stated ability to thicken up to 60% isopropyl-alcohol solutions, directly demonstrate this polar-solvent tolerance — the molecular basis for its positioning as \"a cost-effective thickener for formulations containing polar solvents.\"",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '牛奶白色液体，中和后转变为澄清高粘度溶液，呈现"短、如黄油般"的流变质感；供应商描述为温和、柔软、不油腻、不粘手，接触皮肤无水感',
      en: 'a milky-white liquid that becomes a clear, highly viscous solution on neutralization, with a "short, buttery" rheology; supplier-described as mild, soft, non-greasy, non-sticky, with no watery feel on skin contact',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '所查阅的供应商技术资料未就起球倾向作出专门说明；技术资料中"缔合性：无"的说明表明其不具备典型乳化剂功能',
      en: 'the supplier technical data sheet reviewed did not provide specific pilling data; the document\'s own "Association: none" classification indicates it does not have typical emulsifier functionality',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '非缔合型ASE化学结构对过氧化物（二部分体系）、电解质、二/三价离子及极性溶剂/醇类具有优异的稳定性与兼容性（供应商过氧化物保留率及兼容性数据）',
      en: 'non-associative ASE chemistry gives excellent stability and compatibility with peroxide (in two-part systems), electrolytes, divalent/trivalent ions, and polar solvents/alcohols (supplier peroxide-retention and compatibility data)',
    },
    {
      zh: '极低用量下即可高效稳定悬浮颗粒物：30%高岭土浆料中，0.25%-0.75%聚合物固含量即可使粘度从1,400升至>100,000 cps，同时保持冷法加工、瞬间增稠特性',
      en: 'highly efficient particulate suspension at very low use levels — in a 30% kaolin clay slurry, 0.25-0.75% polymer solids raises viscosity from 1,400 to >100,000 cps, while remaining cold-processable with instant thickening',
    },
    {
      zh: '毒理学与生态毒理学资料完整：大鼠经口/兔经皮LD50均>5.0 g/kg（无毒）、Ames试验非致突变、人体斑贴试验无致敏无刺激、对大型蚤及呆头鱼均无毒性，为配方使用提供了充分的安全性支持',
      en: 'well-documented toxicology/ecotoxicology profile — oral (rat) and dermal (rabbit) LD50 both >5.0 g/kg (non-toxic), non-mutagenic in the Ames test, non-sensitizing/non-irritating in human patch testing, and non-toxic to Daphnia magna and fathead minnow, giving formulators substantial safety-data support',
    },
  ],
  weaknesses: [
    {
      zh: '在pH<6左右基本不发挥增稠作用（供应商特性表将"低pH兼容性（<pH6）"标注为"否"），有效稳定/增稠区间为pH 6.0-12.5，酸性配方需改用其他流变改性剂或采用两部分工艺',
      en: 'essentially ineffective as a thickener below roughly pH 6 (the supplier\'s own feature table rates "low pH compatibility (<pH 6)" as "No"), with an effective stabilizing/thickening window of pH 6.0-12.5 — acidic formulations need a different rheology modifier or a two-part approach',
    },
    {
      zh: '不具备缔合特性（供应商资料标注"缔合性：无"），无法像ACULYN 22/88等HASE型聚合物那样与表面活性剂胶束特异性结合，因而在高表面活性剂体系中的增稠增效能力及聚合物型乳化剂功能均不适用',
      en: 'not associative (supplier data lists "Association: none") — cannot interact specifically with surfactant micelles the way HASE polymers such as ACULYN 22/88 can, so it lacks the surfactant-system thickening synergy and polymeric-emulsifier function of those grades',
    },
    {
      zh: '不具备阳离子表面活性剂兼容性（供应商特性表标注"否"），且储存需保持在1-49°C之间，超出该温度范围可能发生不可逆的絮凝/结块',
      en: 'no compatibility with cationic surfactants (explicitly rated "No" in the supplier feature table), and must be stored between 1-49°C — exposure outside this range may cause irreversible coagulation',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '含醇/二醇的收敛水、洁肤水', en: 'alcohol- and glycol-containing astringents / cleansing toners' },
      notes: { zh: '供应商数据：最高可增稠至60%异丙醇溶液', en: 'supplier data: can efficiently thicken up to 60% isopropyl-alcohol solutions' },
    },
    { system: { zh: '洗手液、乳液、彩妆膏霜', en: 'hand soaps, lotions, make-up creams and lotions' } },
    {
      system: { zh: '双组分过氧化物配方（染发剂、免洗手部消毒剂、烫发中和液）', en: 'two-part peroxide-containing formulations (hair dyes, hand disinfectants, permanent-wave neutralizers)' },
    },
    { system: { zh: '去屑洗发水（吡啶硫酮锌悬浮）、脱毛膏', en: 'anti-dandruff shampoos (zinc pyrithione suspension), depilatories' } },
  ],
  typicalUseLevel: { min: 0.25, max: 3, unit: '%' },
  relatedIngredientSlugs: ['aculyn-22', 'aculyn-88', 'carbopol-ultrez-20'],
  citations: [
    {
      id: 'dow-aculyn-33-tds',
      supplier: 'Dow (originally published by Rohm and Haas Company)',
      documentTitle: 'ACULYN™ 33 Rheology Modifier/Stabilizer — A Cost-Effective Thickener for Formulations Containing Polar Solvents',
      url: 'https://daltosur.com/media/documents/aculyn-33-polymertds042020a.pdf',
      accessedDate: '2026-08-06',
      note: "Distributor-hosted mirror (Daltosur) of a Rohm and Haas/Dow bulletin (copyright line reads \"©Rohm and Haas, 2006\" under a Dow-branded cover page — Rohm and Haas's specialty-chemicals business, including the ACULYN line, was acquired by Dow in 2009, and the brand is now marketed directly under Dow). Successfully fetched and read as a 9-page PDF. Used for INCI name, ASE chemistry/mechanism-of-action description and structure diagram, typical properties table (solids, pH, density, equivalent weight, viscosity, pseudoplastic index), peroxide-stability data table, kaolin-clay suspension table, polar-solvent thickening-efficiency data, salt-tolerance/pH-tolerance feature table, applications list, and the acute/genetic/human/ecotoxicity data tables.",
    },
  ],
  dataCompleteness: 'verified',
  lastUpdated: '2026-08-06',
})
