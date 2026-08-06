import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'hydroxypropyl-starch-phosphate',
  category: 'polymer',
  inciName: 'Hydroxypropyl Starch Phosphate',
  nameZh: '羟丙基淀粉磷酸酯',
  tradeNames: [
    { name: 'HP Starch 292', supplier: 'MakingCosmetics' },
    { name: 'AGENAJEL 20.313', supplier: 'Agrana' },
    { name: 'Beauté by Roquette® ST 320', supplier: 'Roquette' },
    { name: 'Structure XL', supplier: 'National Starch / Nouryon (legacy; personal-care business later divested to Omya)' },
  ],
  chemicalClass: {
    zh: '天然改性淀粉衍生物（羟丙基醚化并经磷酸盐轻度交联的蜡质玉米淀粉）',
    en: 'Naturally derived modified-starch ingredient (hydroxypropyl-etherified, lightly phosphate-crosslinked waxy corn/maize starch)',
  },
  chemicalStructureSummary: {
    zh: '以蜡质玉米淀粉（几乎全部为支链淀粉）为原料，先用环氧丙烷进行羟丙基醚化，再以磷酸盐进行轻度交联改性。羟丙基的引入削弱了淀粉分子链间原有的紧密氢键缔合，使颗粒无需加热糊化即可直接在冷水中溶胀分散（供应商称为"冷水溶胀性"）；磷酸酯交联则在链间引入少量共价"支点"，提升颗粒抗剪切、抗回生（久置不易析水凝沉）及耐盐的稳定性。整体是支链化的多糖颗粒网络，与丙烯酸类合成聚合物依赖羧酸根静电排斥、或黄原胶依赖刚性螺旋缔合的增稠机制不同——羟丙基淀粉磷酸酯的增稠主要依靠吸水溶胀后的淀粉颗粒彼此挤压、堆积形成的物理网络。',
    en: "Made from waxy maize starch (almost entirely amylopectin) that is first etherified with propylene oxide to introduce hydroxypropyl groups, then lightly crosslinked with phosphate. The hydroxypropyl substitution weakens the starch chains' native tight inter-chain hydrogen bonding, letting the granules swell and disperse directly in cold water with no cooking/gelatinization step needed (supplier-described \"cold-water-swellable\" behavior); the phosphate crosslinks introduce a small number of covalent anchor points between chains, improving the granules' shear resistance, resistance to retrogradation (syneresis on standing), and salt tolerance. The overall structure is a network of branched-polysaccharide granules, and its thickening mechanism differs from synthetic acrylate polymers (which rely on carboxylate electrostatic repulsion) or xanthan gum (which relies on rigid-helix association) — hydroxypropyl starch phosphate thickens mainly through swollen starch granules physically packing and crowding against each other.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '冷水直接成粘（无需加热糊化）从何而来', en: 'Where the cold-water thickening (no cooking needed) comes from' },
      explanation: {
        zh: '天然淀粉颗粒需要加热才能破坏结晶区、糊化溶胀；羟丙基取代基插入淀粉分子链之间，干扰了原本紧密的链间氢键网络，使颗粒结晶度降低、亲水性提升，因此遇冷水即可快速吸水溶胀分散，无需传统淀粉糊化所需的高温蒸煮步骤，简化冷法配方工艺。',
        en: "Native starch granules normally need heat to disrupt their crystalline regions and gelatinize/swell; the hydroxypropyl groups inserted between starch chains interfere with the native tight inter-chain hydrogen-bond network, lowering crystallinity and raising hydrophilicity, so the granules rapidly absorb water and swell/disperse in cold water — skipping the high-temperature cooking step that plain starch gelatinization requires, and simplifying cold-process formulation.",
      },
    },
    {
      aspect: { zh: '抗剪切、抗回生（盐稳定凝胶）从何而来', en: 'Where the shear resistance and anti-retrogradation (salt-stable gel) come from' },
      explanation: {
        zh: '磷酸酯交联在淀粉分子链之间引入了少量共价连接点，相当于给溶胀后的颗粒内部加了"支撑筋"：搅拌/泵送等剪切作用下颗粒不易被打散破碎（供应商描述为剪切变稀且粘度可快速恢复），静置储存时也不易因链段重新缔合、析出结晶而"回生"析水，因此凝胶体系在盐（电解质）存在下依然能保持稳定粘度。',
        en: "The phosphate crosslinks introduce a small number of covalent connections between starch chains — effectively internal 'reinforcing struts' inside the swollen granules. Under shear (stirring, pumping) the granules resist being broken apart (the supplier describes shear-thinning behavior with rapid viscosity recovery), and on storage they are less prone to 'retrogradation' — chain segments re-associating and expelling water as crystallites reform — so gels stay at stable viscosity even in the presence of salt/electrolytes.",
      },
    },
    {
      aspect: { zh: '丝滑粉质肤感、降低油腻感从何而来', en: 'Where the smooth, powdery skin feel and reduced greasy feel come from' },
      explanation: {
        zh: '溶胀后的淀粉颗粒呈规则的球形/椭球形微粒，彼此滚动摩擦系数低，涂抹时在皮肤表面产生细腻的"滚珠"触感；同时颗粒表面亲水基团（羟丙基、磷酸基）能吸附并锁住体系中多余的游离水/油，从而降低配方整体的油腻感，并在彩妆粉体中带来供应商所述的丝滑天鹅绒质地。',
        en: "The swollen starch granules are regular spherical/ellipsoidal particles with low inter-particle rolling friction, giving a fine 'ball-bearing' tactile sensation on the skin during application; the hydrophilic groups on the granule surface (hydroxypropyl, phosphate) also help bind excess free water/oil in the formula, reducing overall greasy feel and contributing the smooth, velvety texture the supplier describes in color-cosmetic powders.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '冷水膨胀分散后呈顺滑、略带天鹅绒感的膏体质地，粉质触感明显，可降低体系油腻感；用于彩妆粉体时带来丝滑顺滑的触感',
      en: 'a smooth, slightly velvety cream-like texture once swollen in cold water; a distinctly powdery, tactile feel that reduces overall greasiness; contributes a silky-smooth touch when used in color-cosmetic powders',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '非典型成膜型聚合物，未见供应商就起球倾向作出专门说明；作为颗粒状增稠体系，一般认为起球风险较低',
      en: 'not a typical film-forming polymer; no supplier data specifically addresses pilling, but as a particulate-swelling thickening system it is generally considered low-risk for pilling',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '冷法直接分散增稠，无需加热糊化，可简化生产工艺（供应商数据：冷水或温水中即可溶胀分散）',
      en: 'disperses and thickens directly via cold process, no cooking/gelatinization step needed — simplifies manufacturing (supplier data: swells/disperses in cold or warm water)',
    },
    {
      zh: '天然来源（玉米淀粉）的增稠替代方案，部分产品线标注符合Clean at Sephora、Credo Clean Standard、Ulta Conscious Beauty等"洁净美妆"标准，另有产品线标注清真/犹太洁食认证',
      en: 'a naturally derived (corn starch) alternative to synthetic thickeners; one product line lists compliance with Clean at Sephora, Credo Clean Standard, and Ulta Beauty Conscious Beauty labeling standards, and another lists Halal/Kosher certification',
    },
    {
      zh: '剪切变稀、粘度恢复快，且凝胶盐稳定；同时提供"immediate viscosity and body"及顺滑后感等多重配方收益（供应商数据）',
      en: 'shear-thinning with rapid viscosity recovery, and salt-stable gels; supplier data also credits it with giving immediate viscosity/body plus a smooth after-feel',
    },
  ],
  weaknesses: [
    {
      zh: '推荐用量较高（约3-10%），显著高于黄原胶等发酵多糖胶（约0.1-2%），配方载量与成本需相应考虑',
      en: 'recommended use level is comparatively high (~3-10%), well above fermentation gums like xanthan gum (~0.1-2%) — formulation load and cost need to be considered accordingly',
    },
    {
      zh: '分散时需充分搅拌，供应商建议优先在油相或甘油中预分散以避免结块',
      en: 'requires thorough stirring during dispersion; the supplier recommends pre-dispersing in the oil phase or glycerin first to avoid clumping',
    },
    {
      zh: '作为改性淀粉颗粒体系，配方通常呈不透明外观（供应商描述为"opaque formulations"），不适合追求高透明度的凝胶产品',
      en: 'as a modified-starch particulate system, formulations are typically opaque (supplier description: "leads to opaque formulations") — not suited to gels aiming for high clarity',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '各类膏霜/乳液', en: 'creams and lotions of all types' },
    },
    {
      system: { zh: '彩妆（粉底、睫毛膏、液体散粉等）', en: 'color cosmetics (foundation, mascara, liquid loose powder, etc.)' },
      notes: { zh: '供应商数据：赋予粉体丝滑天鹅绒质地', en: 'supplier data: gives powders a smooth, velvety texture' },
    },
    {
      system: { zh: '防晒、止汗产品及洗发/护发体系', en: 'sunscreen, antiperspirant products, and shampoo/conditioner systems' },
    },
  ],
  typicalUseLevel: { min: 3, max: 10, unit: '%' },
  regulatoryNotes: {
    zh: '供应商产品线分别标注符合REACH（欧盟）要求，及被列入Clean at Sephora、Credo Clean Standard、Ulta Beauty Conscious Beauty等"洁净美妆"清单；另有产品线标注中国合规、清真（Halal）与犹太洁食（Kosher）认证',
    en: 'supplier product lines separately list REACH (EU) compliance, inclusion on Clean at Sephora / Credo Clean Standard / Ulta Beauty Conscious Beauty "clean beauty" lists, and (for another line) China compliance plus Halal/Kosher certification',
  },
  relatedIngredientSlugs: ['konjac-glucomannan', 'xanthan-gum'],
  citations: [
    {
      id: 'knowde-agenajel-hpsp-tds',
      supplier: 'Agrana (via Knowde)',
      documentTitle: 'AGENAJEL 20.313 — Hydroxypropyl Starch Phosphate Product Data (REACH)',
      url: 'https://www.knowde.com/stores/agrana/products/agenajel-20-313',
      accessedDate: '2026-08-05',
      note: 'Used for appearance, viscosity (~2500 mPa·s at 5% dispersion, Brookfield 50 rpm), pH (5.0-7.0, 1% solution), dispersion guidance (pre-disperse in oil phase or glycerin), applications, and clean-beauty standard listings.',
    },
    {
      id: 'makingcosmetics-hpstarch-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'HP Starch 292 (Hydroxypropyl Starch Phosphate) — Product Data',
      url: 'https://www.makingcosmetics.com/TEX-HPST-01.html?lang=en_US',
      accessedDate: '2026-08-05',
      note: 'Used for appearance ("off-white free-flowing powder"), pH range (4.5-7, 1% solution), use level (3-10%), viscosity (4.5% dispersion: 2,000-7,000 cps, salt-stable gel), and benefits/applications list.',
    },
    {
      id: 'roquette-st320-page',
      supplier: 'Roquette',
      documentTitle: 'Beauté by Roquette® ST 320 — Hydroxypropyl Starch Phosphate product page',
      url: 'https://www.roquette.com/cosmetics-st-320---hydroxypropyl-starch-phosphate',
      accessedDate: '2026-08-05',
      note: 'Used to confirm corn-starch source, cold/warm-water dispersibility, and applications. Detailed numeric TDS (viscosity, exact use level) is gated behind Roquette account registration and was not accessible in this session.',
    },
    {
      id: 'ulprospector-structurexl-tradename',
      supplier: 'UL Prospector (product listing index, cross-referenced with additional trade-dictionary and cosmetic-ingredient-supplier sources)',
      documentTitle: 'STRUCTURE XL — Personal Care & Cosmetics product listing (Hydroxypropyl Starch Phosphate)',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/581/217068/STRUCTURE-XL',
      accessedDate: '2026-08-06',
      note: "Confirms Structure XL is a trade name for this same INCI/ingredient (originally a National Starch product; ownership of the underlying personal-care starch business has since changed hands, appearing under Nouryon/Akzo Nobel and Omya listings). Direct fetch of the UL Prospector page returned HTTP 403 in this session; the trade-name mapping is corroborated by multiple independent secondary listings (Ataman Kimya, myskinrecipes/CreamThick, cosmeticingredients.com.au) found via web search, not by a single primary supplier TDS.",
    },
  ],
  dataCompleteness: 'verified',
  lastUpdated: '2026-08-05',
})
