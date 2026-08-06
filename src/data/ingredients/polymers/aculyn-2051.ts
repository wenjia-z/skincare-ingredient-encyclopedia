import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'aculyn-2051',
  category: 'polymer',
  inciName: 'Sodium Polyacrylate (and) Dimethicone (and) Cyclopentasiloxane (and) Trideceth-6 (and) PEG/PPG-18/18 Dimethicone',
  nameZh: '聚丙烯酸钠（和）聚二甲基硅氧烷（和）环五聚二甲基硅氧烷（和）鲸蜡醇聚醚-6（和）PEG/PPG-18/18 聚二甲基硅氧烷',
  tradeNames: [{ name: 'Aculyn 2051', supplier: 'Dow (brand originated at Rohm and Haas; Dow acquired Rohm and Haas in 2009 and now markets the Aculyn line)' }],
  chemicalClass: {
    zh: '反相（油包水）预制乳液型流变改性剂：以硅油为载体、内含预中和聚丙烯酸钠的自转相乳液体系',
    en: 'Inverse (water-in-oil) pre-formed emulsion rheology modifier: a self-inverting emulsion system carrying pre-neutralized sodium polyacrylate dispersed in a silicone-oil vehicle',
  },
  chemicalStructureSummary: {
    zh: '核心增稠活性物是预中和的聚丙烯酸钠（与该网站已收录的聚丙烯酸钠同属阴离子线性聚丙烯酸盐，但在ACULYN 2051中并非以纯品粉末形式供货），以水相液滴的形式分散、包裹在聚二甲基硅氧烷（5 cSt硅油，供应商标注为XIAMETER PMX-200 Silicone Fluid）与环五聚二甲基硅氧烷构成的连续硅油相中，形成一个"油包水"反相乳液。体系中另含两种功能性表面活性剂：PEG/PPG-18/18聚二甲基硅氧烷（硅乳化剂，用于稳定该反相乳液本身的储存稳定性）与鲸蜡醇聚醚-6/月桂醇聚醚-6类"转相剂"（trideceth-6，供应商称为inverting agent，用于配方中加水时引导聚丙烯酸钠液滴与外部水相接触并发生相转变）。与该网站已收录的聚丙烯酸钠或卡波姆等"直接粉末/纯品"增稠剂不同，ACULYN 2051的增稠机制被"预乳化在硅油中"这一物理形式包裹，只有在配方加水稀释、转相剂引导体系发生相反转（invert）之后，聚丙烯酸钠才接触水分、依靠羧酸根间的静电排斥快速伸展并大量束水成胶，因此可实现"倒入油相、加水搅拌即瞬间成胶"的冷法快速增稠。',
    en: "The core thickening active is pre-neutralized sodium polyacrylate (the same broad class of anionic, linear polyacrylate salt as the site's standalone Sodium Polyacrylate entry, but here it is never supplied as a neat powder). It is dispersed as aqueous droplets inside a continuous silicone-oil phase built from dimethicone (5 cSt silicone fluid, supplier-labeled XIAMETER PMX-200 Silicone Fluid) and cyclopentasiloxane, forming an inverse (water-in-oil) pre-formed emulsion. The system also carries two functional surfactants: PEG/PPG-18/18 dimethicone (a silicone emulsifier that keeps the inverse emulsion itself shelf-stable) and trideceth-6 (supplier-labeled the 'inverting agent', which helps the sodium polyacrylate droplets contact the formulation's external water phase and undergo phase inversion once diluted). Unlike the site's standalone Sodium Polyacrylate or Carbomer entries, which are supplied as neat powder/homopolymer that hydrates directly, ACULYN 2051's thickening chemistry is physically pre-packaged inside silicone oil — only once the formula is diluted with water and the inverting surfactant drives the system to invert does the sodium polyacrylate contact water, extend via carboxylate electrostatic repulsion, and bind large amounts of water into a gel. This is what lets the product be poured into the oil phase, mixed with water, and gel almost instantly under cold-process conditions.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '"倒入即成胶"的瞬时冷法增稠从何而来', en: 'Where the "pour and mix, instant gel" cold-process thickening comes from' },
      explanation: {
        zh: '聚丙烯酸钠液滴预先被硅乳化剂稳定、分散在硅油连续相中；一旦配方中加入外部水相，转相剂（trideceth-6）迅速改变界面活性剂的亲水亲油平衡，引导体系从"油包水"反转为"水包油"，使原本被硅油包裹、彼此隔绝的聚丙烯酸钠液滴得以接触外部水并互相连通；羧酸根间的静电排斥随即驱动聚合物链从预乳化的紧缩液滴状态快速伸展、束缚大量水分子，宏观上表现为供应商所述的"瞬间成胶"，且全程无需加热或额外中和步骤。',
        en: "The sodium polyacrylate droplets are pre-stabilized by the silicone emulsifier and dispersed through the continuous silicone-oil phase. Once external water is added to the formula, the inverting agent (trideceth-6) rapidly shifts the interfacial surfactant balance, driving the system from water-in-oil to oil-in-water; this lets the sodium polyacrylate droplets, previously isolated by silicone oil, contact the external water and merge into a continuous network. Carboxylate-carboxylate electrostatic repulsion then drives the polymer chains to rapidly extend out of their pre-emulsified, compacted-droplet state and bind large amounts of water — macroscopically the supplier-described 'instant gel', achieved with no heating and no separate neutralization step.",
      },
    },
    {
      aspect: { zh: '低剪切下同步乳化油相（含难乳化硅油/弹性体）的能力从何而来', en: 'Where the low-shear, simultaneous oil-phase (including hard-to-emulsify silicone/elastomer) emulsification comes from' },
      explanation: {
        zh: '转相完成后，体系中残余的硅乳化剂（PEG/PPG-18/18聚二甲基硅氧烷）与转相剂本身仍具有表面活性，可在聚丙烯酸钠增稠、连续相粘度骤增的同时，协助将配方中额外加入的矿物油、有机酯或弹性体/胶体混合硅油剪切、分散为细小油滴——连续相粘度的提升本身也通过降低油滴布朗运动、延缓聚结，起到动力学稳定乳液的作用；这解释了为何该产品无需另配传统乳化剂即可"边增稠边乳化"，尤其适合弹性体、胶体混合物等常规乳化剂难以处理的硅油体系。',
        en: 'After inversion, the residual functional surfactants (PEG/PPG-18/18 dimethicone and the trideceth-6 inverting agent) remain surface-active and can help shear and disperse additional mineral/organic oils or elastomer/gum-blend silicones added to the formula into fine droplets, at the same time the sodium polyacrylate is sharply raising continuous-phase viscosity — that viscosity increase itself kinetically stabilizes the emulsion by slowing droplet Brownian motion and coalescence. This explains why the product can thicken and emulsify simultaneously without a separate conventional emulsifier, and why it is positioned for elastomer blends and gum blends that are otherwise hard for ordinary emulsifiers to handle.',
      },
    },
    {
      aspect: { zh: '顺滑、不粘腻、非油腻的硅感肤感从何而来', en: 'Where the smooth, non-tacky, non-greasy silicone-like skin feel comes from' },
      explanation: {
        zh: '与纯水相的聚丙烯酸钠或卡波姆凝胶不同，ACULYN 2051的连续载体相本身就是聚二甲基硅氧烷与环五聚二甲基硅氧烷——这两种硅氧烷链具有低表面张力、低分子间摩擦系数的特性，涂抹铺展时优先在皮肤表面形成一层顺滑的硅膜，从而带来供应商所述"与硅氧烷相关的顺滑、非油腻、不粘腻"触感，区别于普通丙烯酸类增稠凝胶偏"水感/略黏"的肤感。',
        en: 'Unlike purely aqueous sodium polyacrylate or Carbomer gels, ACULYN 2051\'s continuous carrier phase is itself dimethicone and cyclopentasiloxane — siloxane chains with low surface tension and low intermolecular friction that preferentially spread into a smooth silicone film on the skin during application. This gives the "smooth, non-greasy, non-sticky aesthetics associated with silicones" the supplier describes, distinct from the more watery/slightly tacky feel of a plain acrylate thickening gel.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '硅感顺滑，供应商描述为不粘腻、不油腻，涂抹后有典型硅氧烷"滑感"',
      en: 'silicone-smooth, described by the supplier as non-sticky and non-greasy, with the typical siloxane "slip" on application',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    pillingNotes: {
      zh: '未见供应商就起球倾向的专项数据；作为硅氧烷载体的反相乳液聚合物，与其他成膜剂复配时的起球风险需实际配方验证',
      en: 'no supplier-specific pilling data found; as a silicone-carrier inverse-emulsion polymer, pilling risk when combined with other film-formers should be verified in the actual formula',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '一步完成增稠与乳化：倒入油相、加水搅拌即瞬间成胶，无需加热、无需另行中和（供应商数据）',
      en: 'combines thickening and emulsification in one step: pour into the oil phase, add water and mix — gelling is instant, with no heating and no separate neutralization required (supplier data)',
    },
    {
      zh: '兼容多种矿物油/有机油、弹性体混合物、胶体混合硅油等"难乳化"油相，以及防晒剂、维生素、高溶剂含量配方（供应商数据）',
      en: 'compatible with a wide range of mineral and organic oils, elastomer blends, gum blends and other hard-to-emulsify silicones, plus sunscreens, vitamins, and high-solvent-content formulations (supplier data)',
    },
    {
      zh: '硅氧烷载体带来顺滑、不粘腻、非油腻的独特肤感，适合追求"硅感"质地的护肤、防晒、护发及彩妆配方（供应商数据）',
      en: 'the silicone carrier delivers a distinctively smooth, non-sticky, non-greasy skin feel — well suited to skin care, sun care, hair care, and color-cosmetic formulas aiming for a "silicone" texture (supplier data)',
    },
  ],
  weaknesses: [
    {
      zh: '含硅氧烷载体（聚二甲基硅氧烷、环五聚二甲基硅氧烷），不适合追求"无硅"配方定位的产品线',
      en: 'contains a siloxane carrier (dimethicone, cyclopentasiloxane), making it unsuitable for product lines positioned as "silicone-free"',
    },
    {
      zh: '粘度随pH呈钟形曲线变化，供应商数据显示pH约6-10区间粘度最高，pH低于5或高于12时粘度大幅下降，配方pH需控制在有效区间内',
      en: 'viscosity follows a bell-shaped curve with pH; supplier data shows peak viscosity around pH 6-10, with viscosity dropping sharply below pH 5 or above pH 12, so formula pH must be kept within the effective window',
    },
    {
      zh: '作为反相乳液体系，配方结构较普通粉末型丙烯酸类增稠剂复杂，需按供应商建议的加料顺序（先入油相、再加水）操作以获得预期效果',
      en: 'as an inverse-emulsion system it has a more complex formulation logic than a plain powder acrylate thickener, and needs to be added in the supplier-recommended order (into the oil phase first, then water) to perform as expected',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '护肤、防晒配方', en: 'skin care and sun care formulations' },
    },
    {
      system: { zh: '免洗/冲洗护发素、护发造型产品', en: 'leave-in/rinse-off hair conditioners and hair styling products' },
    },
    {
      system: { zh: '含难乳化硅油（弹性体、胶体混合物）的彩妆及个人护理配方', en: 'color-cosmetic and personal-care formulas containing hard-to-emulsify silicones (elastomer blends, gum blends)' },
      notes: { zh: '供应商数据：可处理20-50%油相，具体比例视增稠剂类型而定', en: 'supplier data: can handle roughly 20-50% oil phase, depending on the specific thickener/oil type combination' },
    },
  ],
  typicalUseLevel: { min: 3, max: 6, unit: '%' },
  regulatoryNotes: {
    zh: '暂未查得供应商专项列示的监管认证信息；建议配方师直接向Dow确认最新法规/合规文件',
    en: 'no supplier-listed regulatory certifications were found in the sources accessed; formulators should confirm current compliance documentation directly with Dow',
  },
  relatedIngredientSlugs: ['sodium-polyacrylate', 'simulgel-eg', 'carbopol-ultrez-20'],
  citations: [
    {
      id: 'dow-aculyn2051-pdf',
      supplier: 'Dow',
      documentTitle: 'ACULYN™ 2051 Rheology Modifier — Consumer Solutions product sheet (Form No. 27-1183-01 D)',
      url: 'https://daltosur.com/media/documents/aculyn-2051-rheology-modifierguia062023.pdf',
      accessedDate: '2026-08-06',
      note: 'Primary Dow-authored product sheet (© 2018 The Dow Chemical Company), redistributed by Daltosur, a Dow distributor. Used for chemical description (water-in-oil emulsion of sodium polyacrylate in dimethicone/XIAMETER PMX-200 Silicone Fluid 5 cSt; surfactants PEG/PPG-18/18 Dimethicone and trideceth-6), applications, compatibility list, cold-process/no-neutralization/no-heating claims, and the pH-influence and %-vs-viscosity figures (Figures 1-3; used qualitatively — peak viscosity region and the general shape of the curves, not exact figure-read numeric values).',
    },
    {
      id: 'esummit-aculyn2051-listing',
      supplier: 'E-Summit Chemical (distributor)',
      documentTitle: 'ACULYN 2051 — product listing',
      url: 'https://www.e-summitchemical.com/web/index.php?route=product/product&product_id=200',
      accessedDate: '2026-08-06',
      note: 'Used for the full INCI declaration ("Sodium Polyacrylate (and) Dimethicone (and) Cyclopentasiloxane (and) Trideceth-6 (and) PEG/PPG-18/18 Dimethicone") and the recommended use level (3-6%). Dow\'s own PDP page (dow.com) returned HTTP 403 and the Knowde listing timed out when fetched directly in this session; this INCI string is corroborated by the Dow product-sheet\'s plain-language description of the same components (dimethicone, cyclopentasiloxane, trideceth-6, PEG/PPG-18/18 dimethicone, sodium polyacrylate).',
    },
    {
      id: 'dow-rohmhaas-acquisition-history',
      supplier: 'General industry/trade press (via web search)',
      documentTitle: 'Background on Dow\'s 2009 acquisition of Rohm and Haas and the Aculyn brand',
      accessedDate: '2026-08-06',
      note: 'Used only to confirm brand lineage stated in tradeNames: Aculyn originated as a Rohm and Haas rheology-modifier trademark; Dow completed its acquisition of Rohm and Haas in April 2009 and now markets the Aculyn line via Dow Inc. General corporate-history background, not a formulation-technical source.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['regulatoryNotes', 'pillingTendency'],
  lastUpdated: '2026-08-06',
})
