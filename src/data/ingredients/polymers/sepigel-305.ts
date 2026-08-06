import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sepigel-305',
  category: 'polymer',
  inciName: 'Polyacrylamide (and) C13-14 Isoparaffin (and) Laureth-7',
  nameZh: '聚丙烯酰胺（和）C13-14异构烷烃（和）月桂醇聚醚-7',
  tradeNames: [{ name: 'Sepigel 305', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '预制反相乳液型合成丙烯酰胺类共聚物（非离子型，液态即用型，早期一代产品）',
    en: 'Pre-formed inverse-emulsion synthetic polyacrylamide-type polymer (nonionic, ready-to-use liquid, an earlier-generation product in this polymer class)',
  },
  chemicalStructureSummary: {
    zh: '通过反相乳液聚合工艺，将非离子丙烯酰胺单体聚合为高分子量聚丙烯酰胺，聚合物以已分散、预中和（免中和）的液态形式直接分散在C13-14异构烷烃（惰性溶剂载体）与月桂醇聚醚-7（辅助乳化剂/表面活性剂）中供货。供应商将其定位为"化妆品行业首个由反相乳液聚合工艺制得的多功能液态聚合物"，是Seppic后续磺酸型液态聚合物（如同目录中的Simulgel EG）的早期一代产品。聚丙烯酰胺链上不含可解离的羧基或磺酸基，其增稠机制主要依靠高分子量链吸水溶胀后彼此缠结、形成物理网络，而非依赖离子型基团的静电排斥，因此增稠效果对pH变化相对不敏感。',
    en: 'Produced via inverse-emulsion polymerization, in which nonionic acrylamide monomer is polymerized into a high-molecular-weight polyacrylamide; the resulting polymer is supplied already dispersed and pre-neutralized (neutralization-free) as a ready-to-use liquid, carried in C13-14 isoparaffin (an inert solvent vehicle) with laureth-7 (a co-emulsifier/surfactant) to aid dispersion. The supplier positions it as "the pioneer of liquid multifunctional polymers in the cosmetics industry," made via the same inverse-emulsion polymerization process, and it is an earlier-generation product in the line that Seppic\'s later sulfonate-type liquid polymers (e.g. Simulgel EG, elsewhere in this catalog) belong to. Because the polyacrylamide chain carries no ionizable carboxyl or sulfonate groups, its thickening mechanism relies mainly on high-molecular-weight chains swelling with water and physically entangling with one another, rather than on electrostatic repulsion between ionic groups — making its thickening comparatively insensitive to pH change.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '宽pH范围（3-11）稳定增稠从何而来', en: 'Where the stable thickening across a broad pH range (3-11) comes from' },
      explanation: {
        zh: '与依赖羧酸根/磺酸根解离状态增稠的丙烯酸类聚合物不同，聚丙烯酰胺主链为非离子结构，其增稠网络主要来自高分子量链吸水溶胀后的物理缠结，而非可被pH改变的电荷状态；因此供应商标注该原料在pH 3-11这一较宽范围内均可有效发挥增稠/稳定作用，不需要像卡波姆那样严格控制中和度与体系pH。',
        en: "Unlike acrylic polymers that thicken via the ionization state of carboxylate/sulfonate groups, the polyacrylamide backbone is nonionic — its thickening network arises mainly from physical entanglement of water-swollen, high-molecular-weight chains rather than a pH-dependent charge state. This is why the supplier lists the material as effective across the broad pH 3-11 range, without the tight neutralization-degree and formula-pH control that a Carbomer requires.",
      },
    },
    {
      aspect: { zh: '免中和、即开即用从何而来', en: 'Where the no-neutralization, ready-to-use property comes from' },
      explanation: {
        zh: '聚合物在生产阶段即以反相乳液聚合方式完成聚合，并以预分散、预中和的液态形式直接供货（载于C13-14异构烷烃与月桂醇聚醚-7中）；配方师只需将其直接加入水相搅拌分散即可增稠，无需像传统卡波姆粉末那样另行中和，简化了冷法工艺流程——这也是供应商将其定位为"液态多功能聚合物先驱"的结构基础。',
        en: 'Polymerization is completed during manufacture via the inverse-emulsion process, and the polymer ships already pre-dispersed and pre-neutralized as a liquid (carried in C13-14 isoparaffin and laureth-7); the formulator simply stirs it directly into the water phase to thicken, with no separate neutralization step like a traditional Carbomer powder requires — simplifying cold-process manufacturing, and the structural basis for the supplier\'s "pioneer of liquid multifunctional polymers" positioning.',
      },
    },
    {
      aspect: { zh: '柔软、丰润肤感从何而来', en: 'Where the soft, supple skin feel comes from' },
      explanation: {
        zh: '聚丙烯酰胺主链不含离子型基团，成胶后不会像部分羧酸类/磺酸类聚合物那样在皮肤表面留下明显的拉丝或紧绷感；载体中的月桂醇聚醚-7兼具辅助乳化与表面活性作用，有助于该原料在体系中更均匀地铺展与成胶，二者共同作用赋予供应商所述"柔软、丰润"的感官特性。',
        en: 'The nonionic polyacrylamide backbone does not leave the pronounced stringy or tight after-feel that some carboxylate- or sulfonate-based polymers can once gelled; the laureth-7 in the carrier serves a co-emulsifying/surfactant role that helps the material spread and gel more evenly through the system. Together these give the supplier-described "soft and supple" sensory profile.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为"柔软、丰润"的质地，成胶后不透明乳白色',
      en: 'described by the supplier as giving a "soft and supple" texture; forms an opaque, milky-white gel',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    pillingNotes: {
      zh: '兼具增稠与乳化稳定双重功能，可作为水包油/油包水乳液的增稠稳定剂使用',
      en: 'combines thickening and emulsion-stabilizing function; can be used as a thickening/stabilizing agent in both O/W and W/O lotion formulations',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '预制液态、免中和，冷法工艺下可直接分散使用，简化生产流程',
      en: 'pre-formed liquid requiring no neutralization — disperses directly in cold-process manufacturing, simplifying production',
    },
    {
      zh: '有效pH范围宽（供应商数据：pH 3-11），配方pH适用弹性大',
      en: 'broad effective pH range (supplier data: pH 3-11), giving formulators wide flexibility on formula pH',
    },
    {
      zh: '日本获得"医药部外品"（Quasi-Drug）认证（供应商数据），在日本市场配方合规方面具备优势',
      en: 'carries Quasi-Drug Certification in Japan (supplier data), an advantage for formula compliance in that market',
    },
  ],
  weaknesses: [
    {
      zh: '作为合成聚丙烯酰胺类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic polyacrylamide-type polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '作为较早一代反相乳液聚合物，供应商后续推出了磺酸型升级产品（如Simulgel EG），在耐电解质等性能上可能有差异，选型时建议对比',
      en: 'as a comparatively earlier-generation inverse-emulsion polymer, the supplier has since introduced sulfonate-type successor products (e.g. Simulgel EG) that may differ in electrolyte tolerance and other performance — worth benchmarking when selecting between them',
    },
    {
      zh: '本次检索未能获取Brookfield粘度等具体数值型供应商数据，相关字段暂标记为未验证',
      en: 'this research pass could not obtain specific numeric supplier data such as Brookfield viscosity figures — this field is flagged as unverified',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '面部/身体乳液与乳霜（增稠/稳定，含高油相配方）', en: 'face & body lotions and creams (thickening/stabilizing, including high-oil-content formulas)' },
      notes: { zh: '供应商参考：约0.5-2%用于增稠，约2%可达乳液粘度，约3-5%用于高油相稳定乳液及丰润身体乳（use-level figures found via secondary/search sources, see citations）', en: 'supplier-referenced guidance: ~0.5-2% for thickening, ~2% for lotion viscosity, ~3-5% for stable high-oil-content emulsions and richer body butters (use-level figures found via secondary/search sources, see citations)' },
    },
    { system: { zh: '免洗手部消毒凝胶', en: 'leave-on hand sanitizer gels' } },
    { system: { zh: '低成本水包油/油包水乳液配方工具', en: 'a general-purpose O/W and W/O lotion-formulation tool' } },
  ],
  typicalUseLevel: { min: 0.5, max: 5, unit: '%' },
  regulatoryNotes: {
    zh: '供应商标注日本"医药部外品"（Quasi-Drug）认证',
    en: 'supplier lists Quasi-Drug Certification (Japan)',
  },
  relatedIngredientSlugs: ['simulgel-eg', 'sepimax-zen', 'sepinov-emt-10'],
  citations: [
    {
      id: 'seppic-sepigel305-official-datasheet',
      supplier: 'Seppic',
      documentTitle: 'SEPIGEL 305 — Product Data Sheet ("Ingredients that inspire")',
      url: 'http://www.seppic.com/view-315-seproduit.html',
      accessedDate: '2026-08-06',
      note: 'Primary supplier data sheet (fetched directly as PDF at research time). Used for INCI ("Polyacrylamide & C13-14 Isoparaffin & Laureth-7"), physical form ("thickening, stabilizing, liquid, ready-to-use polymer"), pH range (3-11), sensory profile ("softness and suppleness"), and Quasi-Drug Certification (Japan). A post-publication link check found this URL now returns 404 — likely a Seppic site restructuring since the PDF was retrieved; the data above was taken from the document while it was live.',
    },
    {
      id: 'ci-guide-sepigel305-search',
      supplier: 'Cosmetic Ingredients Guide (ci.guide, indexed search snippet)',
      documentTitle: 'SEPIGEL™ 305 — ingredient reference page',
      url: 'https://ci.guide/polymers/sepigeltm-305',
      accessedDate: '2026-08-06',
      note: 'Cross-check for INCI composition breakdown and functional description ("thickener, solubilizer, emollient"; "fantasy cream and lotion-making tool" for low-cost O/W and W/O lotions). Direct fetch of specialchem.com and seppic.com\'s own current product pages returned HTTP 403 or empty content in this session, so this secondary reference source was used to corroborate the primary PDF.',
    },
    {
      id: 'search-sepigel305-use-level',
      supplier: 'Formulator/retailer reference sources (indexed search excerpt, incl. myskinrecipes.com formulation guidance)',
      documentTitle: 'Sepigel 305 — use-level and application guidance (0.5-5% by application)',
      url: 'https://www.myskinrecipes.com/shop/en/oil-in-water/2056-sepgel-305.html',
      accessedDate: '2026-08-06',
      note: 'Use-level breakdown by application (0.5-2% thickening, 2% lotion viscosity, 3-5% high-oil-content stable emulsions/body butters) found via web-search snippets referencing this and similar formulator/retailer sources, not independently confirmed against the primary Seppic TDS in this session — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
