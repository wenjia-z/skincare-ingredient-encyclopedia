import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sodium-cmc',
  category: 'polymer',
  inciName: 'Cellulose Gum',
  nameZh: '羧甲基纤维素钠',
  tradeNames: [
    { name: 'Blanose', supplier: 'Ashland' },
    { name: 'Cellulose Gum CMC', supplier: 'MakingCosmetics' },
    { name: 'Carbopol BioSense', supplier: 'Lubrizol' },
  ],
  chemicalClass: {
    zh: '阴离子型纤维素醚（羧甲基化纤维素衍生物）',
    en: 'Anionic cellulose ether (carboxymethylated cellulose derivative)',
  },
  chemicalStructureSummary: {
    zh: '以纤维素为骨架，经碱纤维素与一氯乙酸反应，在脱水葡萄糖单元的羟基上引入羧甲基（-CH2COONa）取代基而成的阴离子水溶性高分子，外观为白色至类白色粉末。典型取代度（DS）约0.7-0.95，即平均每个脱水葡萄糖单元上约有0.7-0.95个羟基被羧甲基取代。中性至弱碱性水中（供应商数据：pH约6.5-8.5），羧甲基解离为带负电的羧酸根，链间静电排斥使分子链伸展、大量结合水分子，形成粘稠溶液；1%水溶液粘度依等级不同可从约1500 cps到5000 mPa·s不等。Lubrizol旗下Carbopol BioSense是本INCI下一款较新的天然来源等级：其原料为经微纤化处理（microfibrillated cellulose）的纤维素纤维，来自巴西Suzano认证桉树林，供应商标注天然来源成分占比98%，通过COSMOS/ECOCERT认证，并为Carbopol系列首款标注"易生物降解"的流变改性剂——即在归属同一INCI（Cellulose Gum）的前提下，通过原料来源与前处理工艺（微纤化桉树纤维 vs. 常规碱纤维素路线）实现差异化的可持续定位与"类硅弹性体"肤感诉求，供应商称其能替代硅弹性体、带来柔滑而不粘腻的肤感。',
    en: "A cellulose-based anionic water-soluble polymer made by reacting alkali-cellulose with monochloroacetic acid to introduce carboxymethyl (-CH2COONa) substituents onto the anhydroglucose hydroxyls, supplied as a white-to-off-white powder. Typical degree of substitution (DS) is ~0.7-0.95, meaning roughly 0.7-0.95 of the hydroxyls per anhydroglucose unit are carboxymethylated. In neutral-to-weakly-alkaline water (supplier data: pH ~6.5-8.5) the carboxymethyl groups ionize to negatively charged carboxylate, and electrostatic repulsion between chains extends the polymer and binds substantial water, producing a viscous solution; 1% solution viscosity ranges roughly from ~1500 cps to 5000 mPa·s depending on grade. Lubrizol's Carbopol BioSense is a newer, naturally-derived grade under this same INCI: its feedstock is microfibrillated cellulose fiber sourced from certified eucalyptus forests (Suzano, Brazil), with a supplier-stated 98% natural origin content, COSMOS/ECOCERT certification, and the distinction of being the first Carbopol-line rheology modifier marketed as readily biodegradable. In other words, while it falls under the same INCI (Cellulose Gum), its feedstock and pre-processing route (microfibrillated eucalyptus fiber vs. the conventional alkali-cellulose route) give it a differentiated sustainability positioning and a supplier-claimed \"silicone-elastomer-like\" soft, non-tacky skin feel, marketed as a possible replacement for silicone elastomers.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠/束水能力从何而来', en: 'Where the thickening / water-binding ability comes from' },
      explanation: {
        zh: '羧甲基解离产生的羧酸根带负电，链段间同性电荷相互排斥，驱动原本卷曲的纤维素链伸展为更舒展的构象；同时羧酸根与伸展后暴露的羟基通过静电水合与氢键结合大量水分子——链伸展与束水共同贡献了CMC的增稠能力与防止体系析水（syneresis）的效果。',
        en: 'Ionization of the carboxymethyl groups produces negatively charged carboxylate along the backbone; repulsion between like charges on neighboring segments drives the otherwise coiled cellulose chain into a more extended conformation, while the carboxylate groups and newly exposed hydroxyls bind substantial water via electrostatic hydration and hydrogen bonding. Chain extension plus water-binding together give CMC its thickening power and its resistance to syneresis (water separation).',
      },
    },
    {
      aspect: { zh: '中性至弱碱性下增稠最佳、酸性下效果下降从何而来', en: 'Where the neutral-to-alkaline optimum and acidic-condition drop-off come from' },
      explanation: {
        zh: '羧酸根的解离度随pH变化：在中性至碱性范围（供应商数据：pH约6.5-8.5）羧基充分解离、增稠效果最佳；而在低pH（接近或低于羧基的pKa≈4.5）时羧基被质子化为不带电的-COOH，链间静电排斥随之消失、分子重新蜷缩，增稠能力与溶解度都会下降——这决定了CMC更适合中性至弱碱性配方，在偏酸性配方中效果会打折扣。',
        en: "The ionization degree of the carboxylate groups is pH-dependent: in the neutral-to-alkaline range (supplier data: pH ~6.5-8.5) the carboxyls are fully ionized and thickening is strongest, whereas at low pH (near or below the carboxyl's pKa of ~4.5) the groups protonate back to neutral -COOH, electrostatic repulsion between chains disappears, and the chain re-coils — reducing both thickening power and solubility. This is why CMC performs best in neutral-to-weakly-alkaline formulas and loses effectiveness in more acidic systems.",
      },
    },
    {
      aspect: { zh: '电解质敏感性从何而来', en: 'Where the electrolyte sensitivity comes from' },
      explanation: {
        zh: '与传统卡波姆类似，CMC的增稠机制主要依赖羧酸根之间的静电排斥；体系中游离的阳离子（如Na⁺、Ca²⁺等电解质）会屏蔽这一排斥作用（德拜屏蔽效应），削弱链的伸展程度，因此高盐配方中CMC的增稠效率会有所下降，通常需要提高用量或改用耐盐的非离子替代品（如羟乙基纤维素）来补偿。',
        en: "Like plain Carbomer, CMC's thickening mechanism relies mainly on electrostatic repulsion between carboxylate groups; free cations in the system (Na+, Ca2+, and other electrolytes) screen this repulsion (Debye screening), reducing chain extension. As a result, CMC's thickening efficiency drops in high-salt formulas, typically requiring either a higher use level or substitution with a salt-tolerant nonionic alternative such as hydroxyethylcellulose to compensate.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '中性pH水溶液呈粘稠透明的凝胶状质地，成膜性较强，涂抹干燥后可带来轻微的"皮膜感"/收敛感',
      en: 'forms a viscous, clear gel-like texture in neutral-pH water; a relatively strong film-forming tendency can leave a mild "filmy"/tightening after-feel once dry on skin',
    },
    pillingTendency: 'medium',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非乳化剂；较强的成膜性在高用量或与其他成膜剂复配时更容易出现搓泥现象',
      en: 'not an emulsifier itself; its relatively strong film-forming tendency makes pilling more likely at higher use levels or when combined with other film-formers',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '天然纤维素衍生、成本较低，在pH 6.5-8.5范围内增稠效率高并能有效防止体系析水（syneresis），是中低价位配方中常用的增稠/稳定剂',
      en: 'a naturally derived, cost-effective cellulose ether that thickens efficiently and controls syneresis in the pH 6.5-8.5 range — a common thickener/stabilizer in cost-conscious formulas',
    },
    {
      zh: '可提供不同粘度等级（供应商数据显示1500-3100 cps与4000-5000 mPa·s两类典型区间，1%溶液），配方设计上可按需选择粘度型号',
      en: 'available in multiple viscosity grades (supplier data spans both a ~1500-3100 cps and a ~4000-5000 mPa·s range at 1% solution depending on grade), giving formulators flexibility to match target viscosity',
    },
    {
      zh: '兼具增稠、成膜、稳泡、抗析水等多功能性，广泛用于牙膏、洁面、彩妆等多个品类',
      en: 'multifunctional — thickening, film-forming, foam stabilization, and syneresis control — and widely used across toothpaste, cleansers, and color cosmetics',
    },
  ],
  weaknesses: [
    {
      zh: '阴离子特性使其增稠效率在低pH（接近或低于pKa≈4.5）及高电解质体系中显著下降，不适合强酸性或高盐配方（此类场景更适合非离子的羟乙基纤维素）',
      en: 'its anionic nature causes thickening efficiency to fall sharply at low pH (near or below pKa ~4.5) and in high-electrolyte systems, making it a poor fit for strongly acidic or high-salt formulas (nonionic hydroxyethylcellulose is better suited there)',
    },
    {
      zh: '可能与阳离子表面活性剂或阳离子调理聚合物发生电荷中和/沉淀，配方兼容性需要提前小试验证',
      en: 'can undergo charge neutralization/precipitation with cationic surfactants or cationic conditioning polymers, so compatibility should be bench-tested in advance',
    },
    {
      zh: '不同供应商/等级之间粘度与取代度差异较大（供应商数据显示1500-3100 cps与4000-5000 mPa·s两种典型区间并存），选型时需核实具体等级的技术数据',
      en: 'viscosity and degree of substitution vary meaningfully between suppliers/grades (supplier data shows both ~1500-3100 cps and ~4000-5000 mPa·s ranges in circulation), so the specific grade\'s technical data should be confirmed before formulating',
    },
  ],
  suitableSystems: [
    { system: { zh: '牙膏、口腔护理', en: 'toothpaste / oral care' } },
    { system: { zh: '面部护理、洁面产品', en: 'facial care, cleansers' } },
    { system: { zh: '乳液/膏霜增稠稳定', en: 'emulsion/cream thickening & stabilization' } },
  ],
  typicalUseLevel: { min: 0.5, max: 4, unit: '%' },
  relatedIngredientSlugs: ['natrosol-hec', 'xanthan-gum', 'carbopol-ultrez-20'],
  citations: [
    {
      id: 'cig-cmc-tds',
      supplier: 'Continental Industries Group (distributor)',
      documentTitle: 'Sodium Carboxymethyl Cellulose (CMC) — Technical Data Sheet',
      url: 'https://www.cig-global.com/wp-content/uploads/2019/10/CMC-2-TDS.pdf',
      accessedDate: '2026-08-05',
      note: "Distributor TDS for generic CMC (not brand-specific). Used for CAS number (9004-32-4), degree of substitution (0.7-0.95), viscosity (4000-5000 mPa·s at 1% solution), pH (6.5-8.5), and purity spec (99.5% min). Ashland's own Blanose product page returned no readable content when fetched directly, so this distributor spec sheet was used as the fallback per project SOP.",
    },
    {
      id: 'makingcosmetics-cellulose-gum',
      supplier: 'MakingCosmetics',
      documentTitle: 'Cellulose Gum CMC — Product Data',
      url: 'https://www.makingcosmetics.com/Z-THK-CELGUCM-01-22700.html?lang=en_US',
      accessedDate: '2026-08-05',
      note: 'Used for INCI name confirmation ("Cellulose gum"), appearance (creamy white free-flowing powder), typical use level (0.5-4%), viscosity (1500-3100 cps), and application list.',
    },
    {
      id: 'search-ashland-blanose-cmc',
      supplier: 'Ashland (indexed search snippet)',
      documentTitle: 'Blanose Sodium Carboxymethylcellulose — Product Overview',
      url: 'https://www.ashland.com/industries/personal-and-home-care/skin-and-sun-care/blanose-sodium-carboxymethylcellulose',
      accessedDate: '2026-08-05',
      note: "Direct fetch of Ashland's own product page failed (certificate/connection error). Manufacturing process description (alkali cellulose + monochloroacetic acid) and the 99.5%-min-purity personal-care grade detail were taken from the indexed search snippet of this page and not independently confirmed by direct fetch.",
    },
    {
      id: 'knowde-carbopol-biosense-tradename',
      supplier: 'Lubrizol (via Knowde, category listing page)',
      documentTitle: 'Carbopol® BioSense Polymer, Rheology Modifiers listing (Lubrizol Beauty & Personal Care storefront)',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products?category=technologies-cosmetic-ingredients-functionals-rheology-modifiers',
      accessedDate: '2026-08-06',
      note: 'Confirms Carbopol BioSense polymer\'s INCI is "Cellulose Gum" — the same INCI already covered by this entry — so it was added here as an additional trade name rather than as a separate ingredient file, per project dedupe policy. Direct fetch of Lubrizol\'s own BioSense product page and the SpecialChem product page both returned HTTP 403; this Knowde category-listing page was fetchable and used instead.',
    },
    {
      id: 'pharmaexcipients-carbopol-biosense-launch',
      supplier: 'Lubrizol (via Pharma Excipients, trade press)',
      documentTitle: "Lubrizol's Carbopol® BioSense Polymer Wins Bronze at BSB Innovation Awards",
      url: 'https://www.pharmaexcipients.com/news/lubrizolscarbopol-biosense/',
      accessedDate: '2026-08-06',
      note: 'Used for BioSense-specific composition/sourcing detail (microfibrillated cellulose feedstock, certified eucalyptus source, 98% natural origin, COSMOS/ECOCERT certified, first readily biodegradable Carbopol-line rheology modifier), silicone-elastomer-replacement positioning, and application context (serums, lotions, light creams, 500-15,000 mPa·s emulsions, sun care). Launch/award announced October 2025.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-06',
})
