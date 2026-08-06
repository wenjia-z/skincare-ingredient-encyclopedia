import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'kelcogel-gellan-gum',
  category: 'polymer',
  inciName: 'Gellan Gum',
  nameZh: '结冷胶',
  tradeNames: [{ name: 'Kelcogel (incl. CG-HA / CG-LA grades)', supplier: 'CP Kelco' }],
  chemicalClass: {
    zh: '发酵法阴离子微生物多糖（鞘氨醇单胞菌属发酵产物）',
    en: 'Fermentation-derived anionic microbial polysaccharide (Sphingomonas fermentation product)',
  },
  chemicalStructureSummary: {
    zh: '由鞘氨醇单胞菌（Sphingomonas sp.）发酵产生的线性阴离子多糖，重复单元为四糖结构：两个D-葡萄糖、一个D-葡萄糖醛酸与一个L-鼠李糖依次连接。葡萄糖醛酸上的羧基使主链带负电（阴离子多糖）。天然发酵产物本身带有乙酰基与甘油酸酯等酰基取代基，称为"高酰基"（High Acyl, CG-HA）型；经碱处理脱除大部分酰基后得到"低酰基"（Low Acyl, CG-LA）型。两种形式在水中受热溶解后随温度下降形成双螺旋，双螺旋进一步在阳离子（Ca²⁺、K⁺、Na⁺等）介导下聚集缔合，形成三维凝胶网络——这一"成核-螺旋化-阳离子聚集"的两步机制是结冷胶胶凝的结构基础。',
    en: 'A linear anionic polysaccharide produced by fermenting Sphingomonas sp. bacteria, with a repeating tetrasaccharide unit of two D-glucose residues, one D-glucuronic acid residue, and one L-rhamnose residue in sequence. The carboxyl group on the glucuronic-acid residue gives the backbone its negative charge (anionic polysaccharide). The native fermentation product itself carries acetyl and glyceryl acyl substituents and is called "high acyl" (High Acyl, CG-HA) gellan; treating it with alkali to remove most of these acyl groups yields "low acyl" (Low Acyl, CG-LA) gellan. On cooling from a heated aqueous solution, both forms first form double helices, which then further associate/aggregate under the mediation of cations (Ca2+, K+, Na+, etc.) into a 3D gel network — this two-step "nucleation → helix formation → cation-mediated aggregation" mechanism is the structural basis of gellan gum gelation.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '阳离子触发成胶从何而来', en: 'Where the cation-triggered gelling comes from' },
      explanation: {
        zh: '主链上葡萄糖醛酸的羧基带负电，双螺旋链之间因同性电荷相互排斥、难以靠近；体系中引入阳离子（如Ca²⁺、Na⁺）后，阳离子可与相邻双螺旋链上的羧酸根发生"位点结合"，屏蔽静电排斥并在链间架起离子桥，使原本分散的双螺旋聚集缔合为跨越体系的三维网络——这正是结冷胶遇电解质/阳离子（包括配方中的其他阳离子成分或皮肤表面的汗液电解质）即可快速成胶、形成凝胶膜的结构基础。',
        en: "The carboxyl groups on the backbone's glucuronic-acid residues carry a negative charge, so double-helical chains repel each other and resist coming close together. When cations (e.g. Ca2+, Na+) are introduced into the system, they can \"site-bind\" between the carboxylates on adjacent double helices, screening the electrostatic repulsion and bridging the chains ionically — pulling otherwise dispersed double helices together into a 3D network spanning the system. This is the structural basis for gellan gum's ability to gel rapidly, and form a gel film, on contact with electrolytes/cations (including other cationic formula ingredients or the electrolytes in skin/sweat).",
      },
    },
    {
      aspect: { zh: '高酰基（CG-HA）弹性软凝胶 vs. 低酰基（CG-LA）脆性硬凝胶从何而来', en: 'Where the high-acyl (CG-HA) soft/elastic gel vs. low-acyl (CG-LA) brittle/firm gel difference comes from' },
      explanation: {
        zh: '高酰基型双螺旋外侧保留有乙酰基等取代基，这些体积较大的侧基在空间上阻碍相邻双螺旋进一步紧密聚集，因此阳离子介导的缔合区域较松散、数量较少，形成的凝胶质地柔软、有弹性、透明度较低；低酰基型脱除了这些取代基后，双螺旋外表面更平滑、可更紧密地彼此贴合聚集，缔合区域更致密、数量更多，因此形成的凝胶更硬、更脆、透明度更高。这一结构差异使结冷胶可通过选择/复配酰基化程度不同的等级，覆盖从啫喱状软凝胶到脆性硬胶的多种质地。',
        en: 'In the high-acyl form, acetyl and other substituents remain on the outside of the double helix; these bulkier side groups sterically hinder adjacent double helices from packing tightly together, so the cation-mediated association zones are looser and fewer, giving a gel that is soft, elastic, and less clear. In the low-acyl form, removal of these substituents leaves a smoother helix surface that can pack much more tightly, giving denser and more numerous association zones — producing a firmer, more brittle, and clearer gel. This structural difference lets formulators span textures from soft, elastic gels to brittle, firm gels by choosing or blending gellan grades of different acyl content.',
      },
    },
    {
      aspect: { zh: '悬浮/乳化稳定与成膜能力从何而来', en: 'Where the suspension/emulsion-stabilizing and film-forming ability come from' },
      explanation: {
        zh: '即使在远低于宏观成胶所需的浓度下，微量阳离子介导的双螺旋局部缔合也能在体系中形成弱凝胶网络（"流体凝胶"），具备一定屈服应力，足以延缓分散相液滴或颗粒的沉降/聚并，因此结冷胶常用于悬浮体系与乳液稳定；而在较高浓度或干燥成膜后，紧密缔合的三维网络本身即可形成连续的凝胶膜，赋予其成膜能力。',
        en: 'Even at concentrations well below what is needed for macroscopic gelling, trace cation-mediated local association between double helices can form a weak network ("fluid gel") with meaningful yield stress — enough to slow the settling/coalescence of dispersed droplets or particles, which is why gellan gum is commonly used to stabilize suspensions and emulsions. At higher concentration, or once dried, the tightly associated 3D network itself forms a continuous gel film, giving it film-forming capability.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '高酰基（CG-HA）型呈柔软、有弹性的凝胶质地；低酰基（CG-LA）型呈更硬、更脆、透明度更高的凝胶质地；供应商将其定位为可用于身体乳、面部保湿霜等的成膜/稳定型凝胶剂',
      en: 'high-acyl (CG-HA) grades give a soft, elastic gel texture; low-acyl (CG-LA) grades give a firmer, more brittle, clearer gel texture; supplier positions it as a film-forming/stabilizing gelling agent usable in body wash, facial moisturizers, and similar formats',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身非典型乳化剂，但可作为乳液稳定剂使用（供应商功能标签含emulsifier/emulsion stabilizer）',
      en: 'not a conventional emulsifier itself, though the supplier functional tags include emulsifier/emulsion stabilizer usage as a stabilizing agent',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '可通过高酰基/低酰基等级选择或复配，在同一原料家族内覆盖软弹凝胶到硬脆凝胶等多种质地',
      en: 'texture is tunable from soft/elastic to firm/brittle gels within the same ingredient family by choosing or blending high-acyl vs. low-acyl grades',
    },
    {
      zh: '发酵法天然来源，部分等级标注符合Clean at Sephora、Credo Clean Standard等"洁净美妆"清单',
      en: 'a naturally fermentation-derived ingredient; some grades are listed as meeting Clean at Sephora / Credo Clean Standard "clean beauty" criteria',
    },
    {
      zh: '兼具凝胶、成膜、悬浮与乳液稳定多重功能，应用覆盖沐浴露、面部保湿霜、抗衰产品等',
      en: 'multifunctional — gelling, film-forming, suspension-stabilizing, and emulsion-stabilizing in one ingredient, with applications spanning body wash, facial moisturizers, and anti-aging products',
    },
  ],
  weaknesses: [
    {
      zh: '成胶依赖阳离子（Ca²⁺、Na⁺等）介导，配方中阳离子/电解质浓度需仔细控制，否则可能提前局部成胶或强度不足',
      en: 'gelling depends on cation (Ca2+, Na+, etc.) mediation, so the formula\'s cation/electrolyte level needs careful control to avoid premature localized gelling or insufficient gel strength',
    },
    {
      zh: '溶解通常需加热（供应商数据未在本次检索中获取具体温度），冷法直接分散能力弱于部分合成聚合物',
      en: 'dissolution typically requires heating (specific temperature figures were not obtained in this research pass); cold-process dispersibility is weaker than some synthetic polymers',
    },
    {
      zh: '本次检索未能获取推荐用量、粘度及pH等具体数值型供应商数据，相关字段暂标记为未验证',
      en: 'this research pass could not obtain specific numeric supplier data for recommended use level, viscosity, or pH — these fields are flagged as unverified',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '身体乳、面部保湿霜等成膜/稳定型凝胶体系', en: 'body wash, facial moisturizers, and other film-forming/stabilizing gel systems' },
    },
    {
      system: { zh: '悬浮体系（颗粒/珠光剂悬浮）', en: 'suspension systems (suspending particulates/pearlizers)' },
    },
    {
      system: { zh: '乳液/乳霜稳定', en: 'emulsion/cream stabilization' },
    },
  ],
  regulatoryNotes: {
    zh: '列于欧盟CosIng数据库（同时作为食品添加剂E418收录），部分产品线标注Clean at Sephora、Credo Clean Standard清洁美妆标准',
    en: 'listed in the EU CosIng database (also registered as food additive E 418); some product lines list Clean at Sephora / Credo Clean Standard compliance',
  },
  relatedIngredientSlugs: ['kelco-care-diutan-gum', 'xanthan-gum', 'sclerotium-gum'],
  citations: [
    {
      id: 'knowde-kelcogel-cgha-tds',
      supplier: 'CP Kelco (via Knowde)',
      documentTitle: 'KELCOGEL® CG-HA Gellan Gum — Product Technical Data',
      url: 'https://www.knowde.com/stores/cp-kelco/products/kelcogel-cg-ha-gellan-gum',
      accessedDate: '2026-08-06',
      note: 'Used for INCI (Gellan Gum), CAS number (71010-52-1), applications (body wash, facial moisturizers, anti-aging products, pharmaceutical capsules/tablets), functional tags (emulsifier, emulsion stabilizer, film former, stabilizer, thickener, viscosity modifier), Clean at Sephora / Credo Clean Standard listing, and grade classification. Direct fetch returned a partial extract (no appearance, use level, pH, or viscosity figures were present in the retrieved content); the SpecialChem product page for the CG-LA grade returned HTTP 403.',
    },
    {
      id: 'specialchem-kelcogel-search',
      supplier: 'SpecialChem / UL Prospector (indexed search snippets)',
      documentTitle: 'Kelcogel Gellan Gum & Kelcogel CG-LA — Cosmetics Ingredient Listings',
      accessedDate: '2026-08-06',
      note: 'Used for the personal-care functional description ("forms elastic gels, modifies textures, stabilizes formulations, creates films") and confirmation that CG-HA (high acyl) and CG-LA (low acyl) are the two personal-care grade lines. Found via web-search snippets; direct fetch of both specialchem.com pages returned HTTP 403 in this session.',
    },
    {
      id: 'search-gellan-gum-structure',
      supplier: 'Published carbohydrate-chemistry literature (indexed excerpts, incl. MDPI review and Science Advances)',
      documentTitle: 'Gellan gum molecular structure and gelation mechanism (tetrasaccharide backbone, double helix, cation-mediated aggregation, high-acyl vs. low-acyl)',
      url: 'https://www.mdpi.com/1999-4923/15/1/108',
      accessedDate: '2026-08-06',
      note: 'Backbone composition (2x D-glucose, D-glucuronic acid, L-rhamnose repeat unit), high-acyl/low-acyl distinction, and the double-helix-formation-then-cation-mediated-aggregation gelation mechanism found via web-search snippets of published polysaccharide-chemistry review literature; exact wording not independently confirmed against the full primary document in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel', 'appearance'],
  lastUpdated: '2026-08-06',
})
