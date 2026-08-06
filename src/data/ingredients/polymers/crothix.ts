import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'crothix',
  category: 'polymer',
  inciName: 'PEG-150 Pentaerythrityl Tetrastearate',
  nameZh: '聚乙二醇-150 季戊四醇四硬脂酸酯',
  tradeNames: [
    { name: 'Crothix', supplier: 'Croda' },
    { name: 'Crothix Liquid', supplier: 'Croda' },
    { name: 'SP Crothix MBAL', supplier: 'Croda (RSPO Mass Balance certified sustainable-palm variant)' },
  ],
  chemicalClass: {
    zh: '非离子型缔合类增稠剂（聚乙二醇化的四臂硬脂酸酯，复合高分子量酯类）',
    en: 'Nonionic associative thickener (a PEGylated four-arm stearate ester, a complex high-molecular-weight ester)',
  },
  chemicalStructureSummary: {
    zh: 'PEG-150季戊四醇四硬脂酸酯以季戊四醇（一个带四个羟基的小分子多元醇核心）为骨架，四个羟基分别与硬脂酸成酯，形成四臂疏水"锚点"，再引入约150摩尔环氧乙烷（PEG-150）赋予分子长链亲水段。整体呈现"四臂疏水核心 + 长链亲水臂"的星状/梳状结构，与该网站已收录的丙烯酸类增稠剂（卡波姆、聚丙烯酸钠等，依靠羧酸根静电排斥增稠）在化学本质上完全不同——PEG-150季戊四醇四硬脂酸酯不带电荷，属于非离子缔合类增稠剂，其增稠依赖硬脂酸疏水端与体系中表面活性剂胶束的疏水缔合，而非静电作用。供应商称其为"复合高分子量酯类"（complex high-molecular-weight ester），固体（Crothix）以颗粒/片状（pastilles）供货，液体（Crothix Liquid）为常温下的液态形式，INCI标注为"PEG-150 Pentaerythrityl Tetrastearate (and) Aqua (and) PEG-6 Caprylic/Capric Glycerides"，即在固体活性物基础上预先分散于水与PEG-6辛酸/癸酸甘油酯载体中，便于计量与冷法投料。',
    en: 'PEG-150 Pentaerythrityl Tetrastearate is built on a pentaerythritol core (a small polyol bearing four hydroxyl groups), each of the four hydroxyls esterified with stearic acid to create four hydrophobic "anchor" arms, with roughly 150 moles of ethylene oxide (PEG-150) then introduced to give the molecule long hydrophilic chain segments. The overall architecture is a star/comb polymer of "four hydrophobic anchors plus long hydrophilic arms," chemically distinct from the site\'s acrylate-family thickeners (Carbomer, Sodium Polyacrylate) that thicken via carboxylate electrostatic repulsion — PEG-150 Pentaerythrityl Tetrastearate carries no charge and is a nonionic associative thickener whose thickening depends on hydrophobic association between its stearate end-groups and surfactant micelles in the system, not electrostatic effects. The supplier describes it as a "complex high-molecular-weight ester"; the solid grade (Crothix) is supplied as pastilles, while the liquid grade (Crothix Liquid) is a room-temperature liquid with the INCI declaration "PEG-150 Pentaerythrityl Tetrastearate (and) Aqua (and) PEG-6 Caprylic/Capric Glycerides" — i.e. the same active pre-dispersed in water and a PEG-6 caprylic/capric glyceride carrier for easier metering and cold-process addition.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '在表面活性剂体系中免中和即高效增稠从何而来', en: 'Where the no-neutralization, high-efficiency thickening in surfactant systems comes from' },
      explanation: {
        zh: '该分子的四个硬脂酸疏水端可分别嵌入体系中表面活性剂形成的胶束疏水核心，一个PEG-150季戊四醇四硬脂酸酯分子因此可同时"桥连"多个胶束，将原本自由流动的胶束连接成松散的三维网络，宏观上表现为粘度上升；这一缔合增稠机制不依赖任何电荷基团的电离状态，因此无需像卡波姆或聚丙烯酸类增稠剂那样通过中和调节pH才能生效，也解释了其"免中和"、"适用于宽泛体系"的特性，以及可在表面活性剂/电解质含量较高的洁面、沐浴产品中稳定发挥增稠作用。',
        en: "The molecule's four stearate hydrophobic end-groups can each partition into the hydrophobic core of a surfactant micelle in the system; a single PEG-150 Pentaerythrityl Tetrastearate molecule can therefore 'bridge' multiple micelles simultaneously, linking otherwise free-flowing micelles into a loose three-dimensional network that shows up macroscopically as increased viscosity. Because this associative-thickening mechanism does not depend on the ionization state of any charged group, it needs no pH-adjusting neutralization step the way Carbomer or acrylate thickeners do — explaining both the 'no neutralization' property and its ability to thicken reliably in surfactant/electrolyte-rich systems such as cleansers and body wash.",
      },
    },
    {
      aspect: { zh: '相较双臂型缔合增稠剂（如PEG-150 双硬脂酸酯）效率更高从何而来', en: 'Where the higher efficiency versus two-arm associative thickeners (e.g. PEG-150 Distearate) comes from' },
      explanation: {
        zh: '常见的非离子缔合增稠剂（如PEG-150双硬脂酸酯）通常只在链两端各带一个疏水锚点，每个分子最多同时桥连两个胶束；而PEG-150季戊四醇四硬脂酸酯以季戊四醇为核心提供四个疏水锚点，理论上单个分子可同时参与更多疏水缔合位点、连接更多胶束，网络交联密度在同等用量下更高，这与文献将其描述为"相较PEG-150双硬脂酸酯等同类聚合物效率更优"的结构基础相符——即更低用量即可达到目标粘度。',
        en: 'Common nonionic associative thickeners such as PEG-150 Distearate carry only one hydrophobic anchor at each end of a linear chain, so each molecule can bridge at most two micelles at a time. PEG-150 Pentaerythrityl Tetrastearate instead uses a pentaerythritol core to provide four hydrophobic anchors, so in principle a single molecule can participate in more simultaneous hydrophobic-association points and bridge more micelles, giving a denser network at the same use level. This matches the literature description of it being more efficient than comparable polymers such as PEG-150 Distearate — i.e. reaching a target viscosity at a lower use level.',
      },
    },
    {
      aspect: { zh: '"抗刺激"/温和化表面活性剂体系的作用从何而来', en: 'Where the "counter-irritant" / mild-surfactant-system role comes from' },
      explanation: {
        zh: '游离（未成胶束）的表面活性剂单体通常被认为是刺激性的主要来源之一；当该聚合物的疏水端与表面活性剂分子共同参与胶束/网络缔合时，会倾向于将更多表面活性剂分子"卷入"聚合物-胶束网络结构中，降低体系中游离表面活性剂单体的相对比例，这是供应商将其描述为"counter-irritant"、有助于配制温和表面活性剂体系的结构性解释；该说明为基于胶束缔合增稠剂通用作用机制的推断，具体温和度效果仍需配方实测验证。',
        en: "Free (non-micellized) surfactant monomers are generally considered a major contributor to surfactant-system irritation potential. When this polymer's hydrophobic ends co-associate with surfactant molecules into micelle/network structures, it tends to draw more surfactant molecules into the polymer-micelle network, lowering the relative proportion of free surfactant monomer in the system — this is the structural rationale for the supplier's description of it as a 'counter-irritant' that aids mild surfactant-system formulation. This explanation is a general inference from associative-thickener micellization behavior; the actual mildness benefit in a specific formula still needs bench verification.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '无直接肤感描述数据；供应商强调其有助于配制温和表面活性剂体系及清爽、透明配方',
      en: 'no direct skin-feel description found; the supplier emphasizes its role in formulating mild surfactant systems and light, clear formulations',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '主要定位为表面活性剂体系增稠剂而非成膜剂，未见供应商就起球倾向的专项数据',
      en: 'primarily positioned as a surfactant-system thickener rather than a film-former; no supplier-specific pilling data found',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '免中和即可在表面活性剂体系中产生显著增稠效果，即使用量较低（供应商数据：典型用量约0.5-2%）',
      en: 'produces substantial thickening in surfactant systems with no neutralization step required, even at low use levels (supplier-referenced typical concentration: ~0.5-2%)',
    },
    {
      zh: '耐电解质/耐盐，适用于清澈透明及"难增稠"配方体系（如含椰油酰肌氨酸钠等表面活性剂的体系）',
      en: 'tolerates electrolytes and salt, and is effective in clear/transparent and otherwise "hard-to-thicken" systems (e.g. systems containing sodium lauroyl sarcosinate)',
    },
    {
      zh: '供应商定位为"抗刺激"成分，有助于配制温和表面活性剂体系；并提供RSPO Mass Balance认证的可持续棕榈来源版本（SP Crothix MBAL）',
      en: 'positioned by the supplier as a counter-irritant that helps formulate mild surfactant systems; also available in an RSPO Mass Balance-certified sustainable-palm variant (SP Crothix MBAL)',
    },
  ],
  weaknesses: [
    {
      zh: '固体（Crothix）与液体（Crothix Liquid）两种规格的可生物降解性标注不同（供应商数据：固体标注"天然可生物降解"，液体标注"非天然可生物降解"），选型时需注意区分',
      en: "the solid (Crothix) and liquid (Crothix Liquid) grades carry different biodegradability listings on the supplier's own pages (solid: listed as inherently biodegradable; liquid: listed as not inherently biodegradable) — formulators should check the specific grade",
    },
    {
      zh: '本身不具备乳化能力，属于纯粹的增稠/流变改性剂，通常需与其他乳化剂或表面活性剂体系复配使用',
      en: 'has no emulsifying capability on its own — it is purely a thickening/rheology-modifying agent, typically used alongside a separate emulsifier or surfactant system',
    },
    {
      zh: '公开可查证的具体粘度、pH及活性物百分比等数值型供应商技术数据表在本次调研中未能完整取得（部分页面要求账号登录）',
      en: 'a complete, publicly fetchable supplier TDS with specific numeric data (viscosity, pH, exact active percentage) could not be fully obtained in this research pass; some supplier pages require account login',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '洗发水、沐浴露、泡沫浴、液体皂、洁面产品', en: 'shampoos, shower gels, foam baths, liquid soaps, and facial cleansers' },
      notes: { zh: '供应商数据：在洗涤剂体系中即使用量较低也能产生显著粘度', en: 'supplier data: produces substantial viscosity in detergent systems, even at low levels' },
    },
    { system: { zh: '止汗/香体产品、身体护理、面部/颈部护肤配方', en: 'antiperspirant/deodorant products, body care, and face/neck skin-care formulations' } },
    { system: { zh: '防晒产品、护发造型产品', en: 'sun-protection products and hair styling products' } },
  ],
  typicalUseLevel: { min: 0.5, max: 2, unit: '%' },
  regulatoryNotes: {
    zh: '供应商标注RSPO Mass Balance（可持续棕榈来源变体SP Crothix MBAL）、清真（Halal）及素食（Vegan）适用性认证',
    en: 'supplier lists RSPO Mass Balance certification (for the sustainable-palm SP Crothix MBAL variant), and Halal and Vegan suitability',
  },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'sodium-polyacrylate'],
  citations: [
    {
      id: 'crodabeauty-crothix-liquid-page',
      supplier: 'Croda Beauty',
      documentTitle: 'Crothix™ Liquid — product page',
      url: 'https://www.crodabeauty.com/en-gb/products/product/4250-crothix_1_liquid',
      accessedDate: '2026-08-06',
      note: 'Primary supplier page for the liquid grade. Used for INCI ("PEG-150 Pentaerythrityl Tetrastearate (and) Aqua (and) PEG-6 Caprylic/Capric Glycerides"), physical form (liquid at 25°C), no-neutralization claim, counter-irritant/mild-surfactant-system positioning, compatibility with clear and hard-to-thicken systems, applications list, RSPO Mass Balance/Halal/Vegan listings, the sustainable-palm SP Crothix MBAL variant, and the "not inherently biodegradable" note for this specific grade. Accessed via a text-extraction proxy after a direct fetch returned no substantive body content; specific use-level, pH, and viscosity numeric data were not available on this page.',
    },
    {
      id: 'crodabeauty-crothix-solid-page',
      supplier: 'Croda Beauty',
      documentTitle: 'Crothix™ — product page (solid grade)',
      url: 'https://www.crodabeauty.com/en-gb/products/product/1791-crothix',
      accessedDate: '2026-08-06',
      note: 'Primary supplier page for the solid grade. Used for INCI ("PEG-150 Pentaerythrityl Tetrastearate"), physical form (pastilles at 25°C), "substantial viscosity...even at low levels" claim, applications list, RSPO Mass Balance/Halal/Vegan listings, and the "inherently biodegradable" note for this specific grade (differing from the liquid grade\'s listing). Specific actives percentage and melting point were noted as requiring account login and were not accessed.',
    },
    {
      id: 'ciguide-peg150-pentaerythrityl-tetrastearate',
      supplier: 'ci.guide (cosmetic-ingredient reference site)',
      documentTitle: 'PEG-150 Pentaerythrityl Tetrastearate — ingredient profile (trade name Crothix)',
      url: 'https://ci.guide/polymers/peg-150-pentaerythrityl-tetrastearate',
      accessedDate: '2026-08-06',
      note: 'Used for CAS number (130249-48-8), FDA UNII (8L4OOQ76AM), the molecular description (PEG with ~150 mol ethylene oxide attached to a pentaerythrityl tetrastearate backbone), the emollient/counter-irritant/thickener function summary, the typical concentration range (0.5-2%), the note on superior efficiency versus PEG-150 Distearate, and effectiveness in systems containing sodium lauroyl sarcosinate. A secondary reference resource, not a primary Croda document.',
    },
    {
      id: 'ulprospector-crothixliquid-listing',
      supplier: 'UL Prospector (product listing index)',
      documentTitle: 'Crothix Liquid by Croda Beauty — Personal Care & Cosmetics product listing',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/134/6611699/Crothix-Liquid',
      accessedDate: '2026-08-06',
      note: 'Corroborates the Crothix Liquid INCI declaration via an independent index listing, found through web search snippet; the page itself was not directly fetched in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance', 'typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
