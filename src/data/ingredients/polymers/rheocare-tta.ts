import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'rheocare-tta',
  category: 'polymer',
  inciName: 'Acrylates Copolymer',
  nameZh: '丙烯酸酯共聚物',
  tradeNames: [{ name: 'Rheocare TTA', supplier: 'BASF' }],
  chemicalClass: {
    zh: '合成阴离子丙烯酸类乳液聚合物（碱溶胀型乳液，ASE类）流变改性剂',
    en: 'Synthetic anionic acrylic emulsion polymer (alkali-swellable-emulsion, ASE-type) rheology modifier',
  },
  chemicalStructureSummary: {
    zh: '"Acrylates Copolymer"是一个通用INCI名称，按行业通用定义通常指丙烯酸/甲基丙烯酸与其简单酯（如丙烯酸乙酯、甲基丙烯酸甲酯等）共聚而成的聚合物。Rheocare TTA以阴离子水乳液形式供应：出厂状态下体系呈酸性，链上羧基大部分未电离，聚合物以细小乳胶粒子形式分散，粘度较低、便于泵送和计量；加入到配方（尤其是表面活性剂体系）并将体系pH调至供应商标示的透明区间（pH 5.5以上）后，羧基电离为羧酸根，链段因静电排斥而伸展、吸水膨胀，体系粘度随之显著上升——这是碱溶胀型乳液（ASE）聚合物的典型增稠机制。',
    en: '"Acrylates Copolymer" is a generic INCI name that, per standard industry/CosIng-style definitions, generally denotes a polymer of acrylic/methacrylic acid copolymerized with one or more of their simple esters (e.g. ethyl acrylate, methyl methacrylate). Rheocare TTA is supplied as an anionic aqueous emulsion: as manufactured it is acidic, with most of the backbone carboxyl groups un-ionized, so the polymer exists as small, tightly coiled latex particles at low viscosity — easy to pump and dose. Once incorporated into a formulation (particularly a surfactant system) and the system pH is raised into the supplier-stated clarity window (above pH 5.5), the carboxyl groups ionize to carboxylate, the chains extend under electrostatic repulsion and imbibe water, and system viscosity rises sharply — the classic thickening mechanism of an alkali-swellable-emulsion (ASE) polymer.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠能力从何而来', en: 'Where the thickening ability comes from' },
      explanation: {
        zh: '出厂时体系呈酸性，羧基大部分未电离，聚合物链紧密卷曲成细小乳胶粒子，因此原液本身粘度较低、便于分散计量；加入配方并将pH提升至供应商标示的清澈区间（pH 5.5以上）后，羧基电离为羧酸根，同性电荷相互排斥驱使链段从紧密卷曲状态伸展开来，占据更大流体力学体积并束缚大量水分子，从而使体系粘度显著上升——这是典型的碱溶胀型乳液（ASE）增稠机制，与卡波姆增稠时链段伸展的驱动力本质相同。',
        en: "As supplied, the system is acidic and most backbone carboxyl groups are un-ionized, so the polymer chains are tightly coiled into small latex particles — keeping the as-supplied liquid low-viscosity and easy to disperse/dose. Once incorporated into a formula and the pH is raised into the supplier's stated clarity window (above pH 5.5), the carboxyl groups ionize to carboxylate; like-charge repulsion drives the chain segments to uncoil from their tightly wound state, occupying a much larger hydrodynamic volume and binding large amounts of water — sharply raising viscosity. This is the classic alkali-swellable-emulsion (ASE) thickening mechanism, driven by the same underlying electrostatic chain-extension force as Carbomer thickening.",
      },
    },
    {
      aspect: { zh: '高表面活性剂含量下仍能形成透明配方从何而来', en: 'Where the ability to form clear formulations even at high surfactant levels comes from' },
      explanation: {
        zh: '作为乳液聚合物，Rheocare TTA以细小、粒径分布均匀的乳胶粒子形式供应；这些粒子在pH提升、羧基电离伸展后能均匀溶胀分散于水相/表面活性剂体系中，不易形成较大的、会显著散射可见光的聚集结构，因此即使在表面活性剂含量很高的体系（供应商数据）中也能维持配方的高透明度，区别于依赖不溶性颗粒堆积增稠（易致浑浊）的部分天然胶类或淀粉类增稠剂。',
        en: 'As an emulsion polymer, Rheocare TTA is supplied as small, uniformly sized latex particles. Once pH is raised and the carboxyl groups ionize and uncoil, these particles swell and disperse evenly through the water/surfactant phase without readily forming larger aggregate structures that would scatter visible light significantly — so the formulation can retain high transparency even at high surfactant loads (supplier data), unlike some natural gums or starch-based thickeners that build viscosity via packed, undissolved particles and tend toward cloudiness.',
      },
    },
    {
      aspect: { zh: '在高盐/高电解质表面活性剂体系中的耐受性从何而来', en: 'Where the tolerance to high-salt/high-electrolyte surfactant systems comes from' },
      explanation: {
        zh: '纯粹依赖羧酸根静电排斥增稠的丙烯酸类聚合物（如未改性的聚丙烯酸钠）通常对电解质敏感——体系中游离离子会屏蔽羧酸根之间的电荷排斥，导致链段重新蜷缩、粘度下降。供应商将Rheocare TTA描述为具备"高盐及电解质耐受性"，暗示其乳液聚合物设计（如共聚单体组成、乳胶粒子结构）在电解质存在下仍能维持一定的增稠效果；但公开渠道未披露具体差异化改性细节（如是否含疏水缔合单体），此处按供应商说法标注，具体分子机制标记为待验证。',
        en: "Acrylate polymers that thicken purely via carboxylate electrostatic repulsion (e.g. an unmodified sodium polyacrylate) are typically electrolyte-sensitive — free ions in the system screen the charge repulsion between carboxylates, causing chains to re-coil and viscosity to drop. The supplier describes Rheocare TTA as having 'high salt & electrolyte tolerance,' implying its emulsion-polymer design (comonomer composition, latex particle architecture) retains meaningful thickening even in the presence of electrolytes; however, public sources found in this session do not disclose the specific differentiating modification (e.g. whether a hydrophobic associative comonomer is present), so the precise molecular mechanism behind this tolerance is flagged as unverified rather than asserted.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '主要用于表面活性剂体系（洗发水、液体皂、沐浴露等），肤感表现依配方而异；供应商强调其可"快速、易于分散"，并在高表活含量下仍保持配方透明清澈',
      en: 'used mainly in surfactant systems (shampoo, liquid soap, body wash), so skin feel is formula-dependent; the supplier emphasizes that it disperses "quickly and easily" and keeps formulations clear even at high surfactant loads',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '主要用于即冲洗型表面活性剂体系，非驻留型皮肤成膜聚合物，未见供应商就起球倾向作出专门说明，一般认为起球风险较低',
      en: 'used mainly in rinse-off surfactant systems rather than as a leave-on skin film-former; no supplier-specific pilling data was found, but pilling risk is generally considered low in this context',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '即使在表面活性剂含量很高的体系中也能形成清澈透明的配方（供应商数据），是透明洗发水/液体皂等产品的常用选择',
      en: 'forms clear, transparent formulations even at high surfactant loads (supplier data) — a common choice for transparent shampoos, liquid soaps, and similar products',
    },
    {
      zh: '供应商数据：具备高盐及电解质耐受性，冷法/热法均可加工，且分散迅速简便',
      en: 'supplier data: high salt and electrolyte tolerance; hot- or cold-processable, and disperses quickly and easily',
    },
    {
      zh: '与阴离子、非离子、两性表面活性剂均兼容（供应商数据），适配多种洁面/洗护配方体系',
      en: 'compatible with anionic, nonionic, and amphoteric surfactants (supplier data), suiting a wide range of cleansing/hair-care formulation systems',
    },
  ],
  weaknesses: [
    {
      zh: '作为碱溶胀型乳液聚合物，透明度/增稠效果需在pH 5.5以上才能体现（供应商数据），不适合目标pH偏酸性的配方而未做额外设计',
      en: 'as an alkali-swellable-emulsion polymer, clarity/thickening only develops above pH 5.5 (supplier data) — not directly suited to formulas targeting an acidic finished pH without additional formulation work',
    },
    {
      zh: '推荐用量偏高（供应商数据：3-8%），高于多数天然胶类增稠剂（如黄原胶通常0.1-2%），配方成本与载量需相应考虑',
      en: 'recommended use level is comparatively high (supplier data: 3-8%), well above natural gum thickeners such as xanthan gum (typically 0.1-2%) — formulation cost and loading should be considered accordingly',
    },
    {
      zh: '合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明表面活性剂体系（洗发水、液体皂、沐浴露）', en: 'transparent surfactant systems (shampoo, liquid soap, body wash)' },
      notes: { zh: '典型旗舰应用场景，凸显高透明度与耐电解质优势', en: 'flagship use case, highlighting high clarity and electrolyte tolerance' },
    },
    {
      system: { zh: '面部洁面产品、染发/造型产品', en: 'facial cleansers, hair-coloring and styling products' },
    },
    {
      system: { zh: '婴儿洁肤产品', en: 'baby care and cleansing products' },
    },
  ],
  typicalUseLevel: { min: 3, max: 8, unit: '%' },
  relatedIngredientSlugs: ['xanthan-gum', 'sodium-polyacrylate', 'sepiplus-400'],
  citations: [
    {
      id: 'azelispc-rheocaretta-productpage',
      supplier: 'BASF (via Azelis PC US distributor product page)',
      documentTitle: 'Rheocare® TTA — Product page (Acrylates Copolymer)',
      url: 'https://www.azelispc-us.com/product/rheocare-tta/',
      accessedDate: '2026-08-06',
      note: 'Used for INCI, physical form (anionic emulsion), use level (3-8%), pH/clarity threshold (transparency above pH 5.5), electrolyte tolerance, processing (hot/cold, quick dispersion), and surfactant compatibility.',
    },
    {
      id: 'psurplus-rheocaretta-listing',
      supplier: 'Premium Surplus (chemical distributor listing)',
      documentTitle: 'Rheocare TTA — product listing',
      url: 'https://psurplus.com/surplus-chemicals/1428/Rheocare-TTA',
      accessedDate: '2026-08-06',
      note: 'Cross-confirms INCI (Acrylates Copolymer), physical form (emulsion), and core function description ("thickening, stabilizing & suspending properties in surfactant systems").',
    },
    {
      id: 'search-rheocaretta-specialchem-snippet',
      supplier: 'BASF (SpecialChem listing, indexed excerpt)',
      documentTitle: 'RHEOCARE TTA — BASF product listing (SpecialChem)',
      url: 'https://cosmetics.specialchem.com/product/i-basf-rheocare-tta',
      accessedDate: '2026-08-06',
      note: 'Used for appearance description ("white/semi-translucent aqueous emulsion") and the applications list (baby care & cleansing, color care, face cleansing, hair coloring, liquid soaps, shampoos, styling, shower/bath). Found via web-search summary; direct fetch of the page returned HTTP 403 in this session and was not independently confirmed first-hand.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-06',
})
