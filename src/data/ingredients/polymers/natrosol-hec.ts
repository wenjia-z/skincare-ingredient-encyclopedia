import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'natrosol-hec',
  category: 'polymer',
  inciName: 'Hydroxyethylcellulose',
  nameZh: '羟乙基纤维素',
  tradeNames: [{ name: 'Natrosol 250 HHR', supplier: 'Ashland' }],
  chemicalClass: {
    zh: '非离子型纤维素醚',
    en: 'Nonionic cellulose ether',
  },
  chemicalStructureSummary: {
    zh: '以纤维素为骨架，经环氧乙烷与碱纤维素在受控条件下反应、引入羟乙基取代基而成的非离子水溶性高分子，外观为白色可自由流动的颗粒状粉末。Natrosol 250系列平均摩尔取代度（MS）约2.5（即每2个脱水葡萄糖单元约含5个环氧乙烷基团），取代度（DS）约2.0；商品化的"R"级（如250 HHR）在颗粒表面包覆了pH敏感的缓释涂层，用于延缓遇水初期的吸水速度、防止结块。因分子链上不带可解离的离子基团，其溶液粘度与外观对pH、盐等电解质环境的敏感度远低于阴离子型纤维素醚（如羧甲基纤维素钠）。2%水溶液pH约为7.0。',
    en: 'A nonionic, water-soluble polymer on a cellulose backbone, made by reacting ethylene oxide with alkali-cellulose under controlled conditions to introduce hydroxyethyl substituents; supplied as a white, free-flowing granular powder. The Natrosol 250 series has an average molar substitution (MS) of ~2.5 (about 5 ethylene oxide groups per 2 anhydroglucose units) and a degree of substitution (DS) of ~2.0. Commercial "R" grades (e.g. 250 HHR) carry a pH-sensitive surface coating that delays initial water uptake to prevent lump formation. Because the chain carries no ionizable groups, its solution viscosity and clarity are far less sensitive to pH and electrolyte environment than anionic cellulose ethers such as sodium carboxymethylcellulose. A 2% aqueous solution has a pH of approximately 7.0.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠/剪切变稀从何而来', en: 'Where the thickening / shear-thinning behavior comes from' },
      explanation: {
        zh: '长链纤维素骨架上引入的羟乙基取代基破坏了原纤维素的紧密结晶氢键网络，使其转为水溶性；溶解后长链之间仍通过氢键与物理缠结形成松散的三维网络。静置时该缠结网络贡献粘度；涂抹施加的剪切力使线性长链沿流场取向、缠结点被逐一拆散，粘度随之骤降，形成典型的假塑性/剪切变稀行为——这正是产品"从容器中厚重挤出、涂抹时又能轻松展开"的分子基础。',
        en: 'The hydroxyethyl substituents grafted onto the long cellulose backbone disrupt the tight crystalline hydrogen-bond network of native cellulose, making it water-soluble; once dissolved, the long chains still associate via hydrogen bonding and physical entanglement, forming a loose three-dimensional network. At rest this entangled network contributes viscosity; the shear applied on application aligns the linear chains with the flow direction and breaks apart the entanglement points one by one, sharply reducing viscosity — the classic pseudoplastic/shear-thinning behavior that lets the product dispense thick and rich from the container yet spread easily on application.',
      },
    },
    {
      aspect: { zh: '非离子特性带来的pH/电解质耐受从何而来', en: 'Where the nonionic pH/electrolyte tolerance comes from' },
      explanation: {
        zh: '与羧甲基纤维素钠、卡波姆等阴离子聚合物不同，羟乙基纤维素链上没有可解离的羧基或磺酸基，其增稠机制主要依赖链缠结与氢键而非静电排斥。因此不存在"高盐环境下电荷被屏蔽、链塌缩失粘"或"低pH下羧基质子化、排斥力消失"的问题，可在高电解质体系（如高盐牙膏配方）中保持相对稳定的粘度和澄清外观。',
        en: 'Unlike sodium carboxymethylcellulose or Carbomer, hydroxyethylcellulose has no ionizable carboxyl or sulfonate groups on its chain; its thickening mechanism relies mainly on chain entanglement and hydrogen bonding rather than electrostatic repulsion. It is therefore not subject to the charge-screening collapse that anionic polymers suffer in high-salt environments, or the loss of repulsion that occurs when carboxyl groups protonate at low pH — allowing it to maintain relatively stable viscosity and clarity in high-electrolyte systems such as high-salt toothpaste formulas.',
      },
    },
    {
      aspect: { zh: 'R级表面处理为何能防止结块', en: 'Why the R-grade surface treatment prevents clumping' },
      explanation: {
        zh: 'R级颗粒表面包覆的pH敏感涂层在中性至偏酸性水中溶解较慢，为颗粒提供了一段短暂的"延迟吸水期"，使粉末有机会先在水中充分分散开，再逐渐吸水膨胀，从而避免了粉末遇水瞬间表层糊化、内部未被润湿而结成"鱼眼"团块的问题；待颗粒分散均匀后再将体系pH提高至8.5以上，涂层随之加速溶解，完成充分水化增稠。',
        en: 'The pH-sensitive coating on R-grade particles dissolves relatively slowly in neutral-to-mildly-acidic water, giving the powder a brief "delayed hydration window" in which it can disperse fully before it starts to swell — avoiding the classic problem where the particle surface gels instantly on contact with water while the core stays dry, forming "fish-eye" lumps. Once the particles are evenly dispersed, raising the system pH above 8.5 accelerates dissolution of the coating so full hydration and thickening can proceed.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '水溶液澄清透明，具剪切变稀特性——从容器中挤出时浓稠厚重，涂抹于皮肤/头发时阻力小、易于铺展，并带来一定的爽滑感',
      en: 'aqueous solutions are crystal clear with shear-thinning behavior — dispenses thick and rich from the container, then spreads easily with low resistance on skin/hair, leaving a smooth, slippery after-feel',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非乳化剂，供应商描述其可"改善乳液稳定性"，通常作为乳液增稠/稳定辅助剂与乳化剂复配使用',
      en: 'not an emulsifier itself; supplier describes it as improving emulsion stability, typically used as a thickening/stabilizing aid alongside a true emulsifier',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '非离子特性使其在高盐、宽pH范围体系（如高盐牙膏配方）中仍能保持澄清外观与相对稳定的粘度，这是相较于CMC、卡波姆等阴离子/需中和体系的核心优势',
      en: 'its nonionic nature lets it retain clarity and relatively stable viscosity in high-salt, wide-pH-range systems (e.g. high-salt toothpaste formulas) — a core advantage over anionic/neutralization-dependent systems like CMC or Carbomer',
    },
    {
      zh: '遇水形成澄清透明凝胶，剪切变稀特性带来"厚重挤出、轻盈铺展"的独特应用手感',
      en: 'forms crystal-clear gels in water; shear-thinning behavior gives the characteristic "thick dispensing, light spreading" application feel',
    },
    {
      zh: '应用范围广，涵盖护发素、洁面/沐浴露、剃须膏、牙膏、湿巾、走珠除臭剂固体棒、彩妆/睫毛膏、润滑凝胶等多个品类',
      en: 'broad application range spanning hair conditioners, cleansers/body wash, shave gels, toothpaste, wipes, deodorant sticks, makeup/mascara, and lubricant gels',
    },
  ],
  weaknesses: [
    {
      zh: 'R级粉末虽经缓释处理防止结块，仍需按"先在pH≤7的水中充分分散、再将体系pH提高至8.5以上"的两段式工艺操作，对配方工艺有一定要求',
      en: 'even the delayed-hydration R-grade powder requires a two-step process — dispersing at pH ≤7 first, then raising the system pH above 8.5 — which adds a process constraint',
    },
    {
      zh: '作为非交联的线性高分子，静置状态下的屈服应力/悬浮能力弱于依赖刚性螺旋缔合（黄原胶）或交联凝胶网络（卡波姆）的增稠剂，用于悬浮颗粒物的效果相对有限',
      en: 'as a non-crosslinked linear polymer, its at-rest yield stress/suspension power is weaker than thickeners built on rigid-helix association (xanthan gum) or a crosslinked gel network (Carbomer), making it comparatively less effective at suspending particulates',
    },
    {
      zh: '常规级未经抗酶处理，在纤维素酶活性较高的环境（如防腐失效、微生物污染）下可能发生粘度损失，敏感场景需选用具生物稳定性的"B"级',
      en: 'standard grades are not enzyme-resistant and can lose viscosity in environments with active cellulase (e.g. preservation failure, microbial contamination); sensitive applications should use the biostable "B" grade instead',
    },
  ],
  suitableSystems: [
    { system: { zh: '护发素/护发精华', en: 'hair conditioners / leave-in treatments' } },
    {
      system: { zh: '高盐配方（牙膏、须后啫喱等）', en: 'high-salt formulas (toothpaste, after-shave gel, etc.)' },
      notes: { zh: '非离子特性在高电解质体系中比阴离子胶类更能保持澄清与稳定粘度', en: 'nonionic character keeps it clearer and more viscosity-stable than anionic gums in high-electrolyte systems' },
    },
    { system: { zh: '透明凝胶/精华', en: 'clear gels / serums' } },
    { system: { zh: '表面活性剂体系增稠（洁面、沐浴露）', en: 'thickening of surfactant systems (cleansers, body wash)' } },
  ],
  typicalUseLevel: { min: 0.1, max: 3, unit: '%' },
  relatedIngredientSlugs: ['sodium-cmc', 'xanthan-gum', 'carbopol-ultrez-20'],
  citations: [
    {
      id: 'ashland-natrosol-250-hrhhr-pds',
      supplier: 'Ashland',
      documentTitle: 'Natrosol™ 250 HR/HHR Hydroxyethylcellulose, PC Grade — Product Data (No. 4581-2)',
      url: 'https://www.dkshdiscover.com/medias/TDS-Natrosol-250-HHR-Ashland.pdf?context=bWFzdGVyfGJhY2tvZmZpY2VleGNlbGltcG9ydHwxMzMwMjR8YXBwbGljYXRpb24vcGRmfGFHRXpMMmc0TVM4NU1EYzVOVGd6TlRjeE9UazRMMVJFVTE5T1lYUnliM052YkY4eU5UQWdTRWhTWDBGemFHeGhibVF1Y0dSbXw0NTQ3MTkxZjI2YjE1OGNiNDk1MzJiZWE0ZjBhODc4Mzg4OWRkNTczZmE1NGIwMGFhODFiN2FlN2YzMTc2MzRj&attachment=true',
      accessedDate: '2026-08-05',
      note: "Ashland's own numbered technical bulletin (No. 4581-2), successfully fetched as a PDF via a distributor-hosted mirror (DKSH). Used for INCI name, DS/MS values, viscosity-by-grade table, pH of 2% solution, applications list, R/B grade explanation, and dispersion technique.",
    },
    {
      id: 'lotioncrafter-hec',
      supplier: 'Lotioncrafter (distributor, Ashland Natrosol 250 HHR CS)',
      documentTitle: 'Hydroxyethylcellulose (HEC) — Product Page',
      url: 'https://lotioncrafter.com/products/hydroxyethylcellulose-hec',
      accessedDate: '2026-08-05',
      note: 'Used to cross-check typical use level (0.1-3%) and 1% solution pH (6.7) against the Ashland PDS figures.',
    },
  ],
  dataCompleteness: 'verified',
  lastUpdated: '2026-08-05',
})
