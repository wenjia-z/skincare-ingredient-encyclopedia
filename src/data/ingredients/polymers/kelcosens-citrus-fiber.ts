import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'kelcosens-citrus-fiber',
  category: 'polymer',
  inciName: 'Citrus Aurantium Sinensis Peel Extract',
  nameZh: '甜橙果皮提取物（柑橘纤维）',
  tradeNames: [
    { name: 'KELCOSENS Citrus Fiber', supplier: 'CP Kelco (a Tate & Lyle business)' },
    { name: 'KELCOSENS PiEL Citrus Fiber', supplier: 'CP Kelco (a Tate & Lyle business)' },
  ],
  chemicalClass: {
    zh: '天然来源、副产物升级再造的柑橘果皮纤维（不溶/可溶性植物细胞壁多糖复合物，非发酵型微生物胶，也非改性淀粉）',
    en: 'A naturally derived, upcycled-byproduct citrus-peel fiber (an insoluble/soluble plant-cell-wall polysaccharide complex — not a fermentation-derived microbial gum, and not a modified starch)',
  },
  chemicalStructureSummary: {
    zh: 'KELCOSENS Citrus Fiber以果汁加工业的副产物——柑橘（甜橙）果皮为原料制成，属于植物细胞壁纤维复合物（主要为纤维素、半纤维素、果胶等多糖成分的天然复合体），而非单一提纯的多糖分子。这与该网站已收录的黄原胶、施克兰胶（Sclerotium Gum）等发酵型微生物胶（由微生物分泌单一多糖链）在来源与结构上完全不同；也与羟丙基淀粉磷酸酯（改性玉米淀粉颗粒）不同——后者是化学改性的单一植物储藏多糖颗粒，而柑橘纤维保留了果皮细胞壁原有的多组分、多孔网状结构。供应商将其定位为"可替代表面活性剂型乳化剂"的稳定剂：细胞壁纤维网络具备一定持水与吸附能力，分散于水相后可通过物理网络包裹、悬浮油滴或颗粒物，从而在不依赖传统表面活性剂降低界面张力的情况下帮助稳定乳液。',
    en: "KELCOSENS Citrus Fiber is made from citrus (orange) peel, a byproduct of the juice-processing industry, and is a plant-cell-wall fiber complex (a natural composite of mainly cellulose, hemicellulose, and pectin polysaccharides) rather than a single purified polysaccharide molecule. This is fundamentally different in both source and structure from the site's fermentation-derived microbial gums such as Xanthan Gum or Sclerotium Gum (a single polysaccharide chain secreted by a microorganism), and also different from Hydroxypropyl Starch Phosphate (a chemically modified single plant-storage-polysaccharide granule) — citrus fiber instead retains the peel cell wall's native multi-component, porous network structure. The supplier positions it as a stabilizer that can serve as 'an alternative to surfactant-based emulsifiers': the cell-wall fiber network has some water-holding and adsorptive capacity, and once dispersed in the water phase can physically entrap and suspend oil droplets or particulates, helping stabilize emulsions without relying on surfactant-driven interfacial-tension reduction.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '"乳化剂替代型"稳定能力从何而来', en: 'Where the "emulsifier-alternative" stabilizing ability comes from' },
      explanation: {
        zh: '果皮细胞壁纤维保留了天然的多孔、网状微观结构，分散于水相后这些不溶/微溶的纤维颗粒可通过物理吸附与空间位阻，将油滴或颗粒物截留、包裹在纤维网络的孔隙之间，形成类似"皮克林乳液"（颗粒稳定乳液）的机制——这与传统表面活性剂型乳化剂依靠降低油水界面张力的化学机制不同，因此供应商将其定位为可在部分体系中替代或减少表面活性剂用量的稳定剂。',
        en: "The peel cell-wall fiber retains its native porous, network microstructure; once dispersed in the water phase, these insoluble/poorly soluble fiber particles can physically adsorb and sterically trap oil droplets or particulates within the network's pores — a mechanism closer to a Pickering-emulsion (particle-stabilized emulsion) effect than the interfacial-tension-lowering chemistry of a conventional surfactant emulsifier. This is the basis for the supplier's positioning of the ingredient as a stabilizer that can replace or reduce surfactant load in some systems.",
      },
    },
    {
      aspect: { zh: '轻盈清爽肤感、少泡沫/不皂化感从何而来', en: 'Where the light, refreshing skin feel and low soaping/tack come from' },
      explanation: {
        zh: '由于其稳定机制依赖纤维颗粒的物理网络包裹而非表面活性剂分子在皮肤表面残留的界面活性，配方中可显著降低传统表面活性剂型乳化剂的用量，减少此类乳化剂常见的"皂感"或残留粘腻感；供应商描述其带来"清爽、不皂化、不粘腻"的肤感触感，与其纤维颗粒—而非表面活性剂分子膜—作为主要稳定机制的结构定位相符。',
        en: "Because its stabilizing mechanism relies on the physical entrapment by fiber particles rather than a residual film of surfactant molecules on the skin, formulas can significantly cut back on conventional surfactant-type emulsifier load, reducing the soapy or tacky residual feel such emulsifiers commonly leave. The supplier describes the resulting skin feel as light, refreshing, with no soaping and no tack — consistent with fiber particles, not a surfactant molecular film, being the primary stabilizing structure.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为轻盈、清爽、"良好的拾取感与延展时间（pick-up & playtime）"，不皂化、不粘腻',
      en: 'described by the supplier as light and refreshing, with "good pick-up & playtime," no soaping and no tack',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '未见供应商就起球倾向的专项数据',
      en: 'no supplier-specific pilling data found',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '柑橘果汁加工业副产物升级再造而成，已获Upcycled Certified®认证（供应商数据：2023年10月，为首个获此认证的柑橘纤维原料）',
      en: 'upcycled from a citrus juice-industry byproduct, and has attained Upcycled Certified® status (supplier data: October 2023, described as the first citrus fiber ingredient to attain this certification)',
    },
    {
      zh: '定位为传统表面活性剂型乳化剂的天然替代方案，可冷法加工（供应商数据）',
      en: 'positioned as a natural alternative to conventional surfactant-based emulsifiers, and is cold-processable (supplier data)',
    },
    {
      zh: '符合ISO 16128天然/有机指数标准，并列示清真（Halal）、犹太洁食（Kosher）、无麸质、素食、非转基因等认证/标签（供应商数据）',
      en: 'complies with the ISO 16128 natural/organic index, and the supplier lists Halal, Kosher, gluten-free, vegan, and non-GMO status (supplier data)',
    },
  ],
  weaknesses: [
    {
      zh: '作为植物细胞壁纤维复合物（非单一纯化多糖），公开可查证的正式供应商技术数据表（具体用量、粘度、pH范围等数值）在本次调研中未能取得',
      en: 'as a plant-cell-wall fiber complex rather than a single purified polysaccharide, a formal, publicly fetchable supplier TDS with specific numeric data (use level, viscosity, pH range) could not be obtained in this research pass',
    },
    {
      zh: '来源天然、批次间成分比例（纤维素/半纤维素/果胶等）可能存在天然波动，供应商未公开具体的批次一致性控制数据',
      en: 'as a naturally sourced fiber, batch-to-batch composition ratios (cellulose/hemicellulose/pectin, etc.) may naturally vary; the supplier has not published specific batch-consistency control data',
    },
    {
      zh: '与该网站已收录的黄原胶、施克兰胶等发酵型微生物胶相比，作为"乳化剂替代"定位的原料，其独立稳定高油相配方的能力上限暂无供应商专项数据可引用',
      en: 'compared with fermentation-derived microbial gums like Xanthan Gum or Sclerotium Gum already on this site, no supplier-specific data was found quantifying the upper limit of oil-phase loading this "emulsifier-alternative" ingredient can stabilize on its own',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '面部精华、面霜、身体乳', en: 'facial serums, creams, and body lotions' },
      notes: { zh: '供应商推荐应用于护肤、面部护理及护手品类', en: 'supplier-recommended for skin care, facial care, and hand care categories' },
    },
    { system: { zh: '希望降低传统表面活性剂型乳化剂用量的"洁净配方"体系', en: '"clean formulation" systems aiming to reduce conventional surfactant-emulsifier load' } },
  ],
  regulatoryNotes: {
    zh: '供应商标注符合ISO 16128天然/有机指数、可生物降解（readily biodegradable）、Upcycled Certified®认证、Halal与Kosher认证',
    en: 'supplier lists ISO 16128 natural/organic index compliance, readily biodegradable status, Upcycled Certified® certification, and Halal/Kosher certification',
  },
  relatedIngredientSlugs: ['hydroxypropyl-starch-phosphate', 'xanthan-gum', 'sclerotium-gum'],
  citations: [
    {
      id: 'specialchem-kelcosens-citrusfiber-listing',
      supplier: 'CP Kelco (via SpecialChem product listing)',
      documentTitle: 'KELCOSENS Citrus Fiber — Cosmetics Ingredient product listing',
      url: 'https://www.specialchem.com/cosmetics/product/cp-kelco-kelcosens-citrus-fiber',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name ("Citrus Aurantium Sinensis Peel Extract"), the "gentle on skin," "good pick-up & playtime," "pleasant texture and light refreshing skin feel" descriptors, ISO 16128/Halal/Kosher/gluten-free/vegan/non-GMO listing, cold-processability, and recommended applications (facial creams, serums, body lotions; skin care, facial care, hand care). Fetched via a text-extraction proxy after a direct fetch returned HTTP 403; a second independent web-search snippet from the same SpecialChem supplier page corroborated the INCI name.',
    },
    {
      id: 'personalcareinsights-kelcosens-upcycled',
      supplier: 'Personal Care Insights (trade press)',
      documentTitle: "CP Kelco's skin care stabilizer Kelcosens Citrus Fiber is first to attain Upcycled Certification",
      url: 'https://www.personalcareinsights.com/personal-care/cp-kelcos-skin-care-stabilizer-kelcosens-citrus-fiber-is-first-to-attain-upcycled-certification.html',
      accessedDate: '2026-08-06',
      note: 'Used for the Upcycled Certified® certification date/status claim and general "upcycled from citrus peel juice-industry byproduct" sourcing description, via search-result snippet (direct fetch failed in this session). A post-publication link check found this URL now returns 404 — the article may have been moved/removed since the snippet was indexed.',
    },
    {
      id: 'tateandlyle-kelcosens-piel-page',
      supplier: 'Tate & Lyle (parent company of CP Kelco)',
      documentTitle: 'KELCOSENS PiEL Citrus Fiber — ingredient page',
      url: 'https://www.tateandlyle.com/ingredient/emulsion-stability-KELCOSENS-TM-PiEL-Citrus-Fiber-personal-care',
      accessedDate: '2026-08-06',
      note: 'Confirms CP Kelco now operates as part of Tate & Lyle (used for the supplier attribution "CP Kelco (a Tate & Lyle business)"), and via search-result snippet, describes the product as "an alternative to surfactant-based emulsifiers" enabling formulations with high oil content, with a "light and refreshing skin feel with no soaping or tack." Direct fetch of the full page returned only generic site navigation content, not the product-specific technical section, in this session.',
    },
    {
      id: 'incibeauty-citrusfiber-crosscheck',
      supplier: 'INCI Beauty (third-party cosmetic-ingredient database)',
      documentTitle: 'CITRUS AURANTIUM SINENSIS FIBER — ingredient entry (CAS 97766-30-8)',
      url: 'https://incibeauty.com/en/ingredients/4700-citrus-aurantium-sinensis-fiber',
      accessedDate: '2026-08-06',
      note: 'Found via search while cross-checking the INCI name; this database lists a closely related but textually distinct INCI string ("Citrus Aurantium Sinensis Fiber" rather than "...Peel Extract") for citrus-peel fiber generally. It is not confirmed whether this is the same registered INCI as the CP Kelco KELCOSENS product specifically or a related but separate INCI entry for citrus fiber as a category; flagged as an open discrepancy rather than silently resolved.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['inciName', 'typicalUseLevel', 'performance'],
  lastUpdated: '2026-08-06',
})
