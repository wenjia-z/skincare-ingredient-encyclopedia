import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'polyglyceryl-4-caprate',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-4 Caprate',
  nameZh: '聚甘油-4癸酸酯',
  tradeNames: [{ name: 'Soldoc PG 410', supplier: 'Industrial Química Lasem (IQL)' }],
  chemicalClass: {
    zh: '聚甘油酯类非离子乳化剂/增溶剂',
    en: 'Polyglycerol ester non-ionic emulsifier / solubilizer',
  },
  chemicalStructureSummary: {
    zh: '由聚甘油（4个甘油单元聚合形成的多支链、多羟基亲水骨架）与癸酸（辛酸/月桂酸之间的C10中链脂肪酸，来自椰子/棕榈仁油）酯化而成。相比本批次其他C16-22长链乳化剂，其疏水尾链短得多（C10），亲水头基则更庞大、支化程度更高，整体呈现高HLB（约14.5）、室温下为液态而非蜡状固体的特征。',
    en: 'An ester of polyglycerol (a branched, multi-hydroxyl hydrophilic backbone built from 4 glycerol units) with capric acid (a C10 medium-chain fatty acid, between caprylic and lauric acid, sourced from coconut/palm kernel oil). Compared with the other C16-22 long-chain emulsifiers in this batch, its hydrophobic tail is far shorter (C10) while its hydrophilic head is larger and more branched, giving it a high HLB (~14.5) and a liquid — rather than waxy solid — physical form at room temperature.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高HLB增溶/乳化能力从何而来', en: 'Where the high-HLB solubilizing/emulsifying ability comes from' },
      explanation: {
        zh: '癸酸尾链（C10）疏水性较弱，而支化的聚甘油-4头基携带大量游离羟基，与水形成密集氢键网络；短疏水尾与强亲水头共同作用，使其HLB高达约14.5，属于增溶剂/高HLB乳化剂区间——这是其更常用于爽肤水、精华等含水配方中增溶少量油溶性成分（香精、油溶活性物），而非稳定高油相乳霜的结构原因。',
        en: 'The capric acid tail (C10) is only mildly hydrophobic, while the branched polyglyceryl-4 head carries numerous free hydroxyls that form a dense hydrogen-bonding network with water. The combination of a short hydrophobic tail and a strongly hydrophilic head pushes its HLB to roughly 14.5, placing it in the solubilizer/high-HLB-emulsifier range — the structural reason it is more often used to solubilize small amounts of oil-soluble ingredients (fragrance, oil-soluble actives) into toners and essences than to stabilize a high-oil-phase cream.',
      },
    },
    {
      aspect: { zh: '室温液态、可冷法添加从何而来', en: 'Where the room-temperature liquid form and cold-process compatibility come from' },
      explanation: {
        zh: '与Montanov 68/202或Emulgade等需要C16以上长链才能结晶为蜡状固体的乳化剂不同，聚甘油-4癸酸酯的C10尾链太短，不足以在室温下规整排列结晶，因此始终保持液态；这正是其"无需预热、可冷法加入配方"这一实际操作优势的结构基础。',
        en: 'Unlike Montanov 68/202 or Emulgade, which need alkyl chains of C16 or longer to crystallize into a waxy solid, Polyglyceryl-4 Caprate\'s C10 tail is too short to pack into an ordered crystal lattice at room temperature, so it stays liquid — the structural basis for its practical advantage of needing no preheating and being addable via cold process.',
      },
    },
    {
      aspect: { zh: '轻盈水感肤感、不增稠从何而来', en: 'Where the light, aqueous skin feel and lack of thickening come from' },
      explanation: {
        zh: '分子尺寸小、不结晶成蜡质膜，铺展后不会像长链层状液晶乳化剂那样在皮肤表面留下较厚的封闭性膜层，因此肤感清爽、不粘腻；同样因为不形成液晶凝胶网络，它本身也不具备增稠功能，供应商资料明确指出其"不会增加配方粘度"，需另行搭配增稠剂才能获得膏霜质地。',
        en: 'Its small molecular size and lack of crystallization mean it does not leave a thick, occlusive film on skin the way long-chain lamellar liquid-crystal emulsifiers do, giving a light, non-tacky skin feel. For the same reason — no liquid-crystal gel network — it has no inherent thickening function; supplier data explicitly notes it "does not increase viscosity," so a separate thickener is needed to build a cream-like texture.',
      },
    },
  ],
  hlb: 14.5,
  appearance: {
    zh: '无色至微黄色粘稠液体',
    en: 'colorless to slightly yellowish viscous liquid',
  },
  performance: {
    skinFeel: {
      zh: '轻盈水感、不粘腻，铺展快，润肤性好',
      en: 'light, aqueous, non-tacky feel with fast spreading and good emolliency',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'low',
  },
  strengths: [
    {
      zh: '室温液态，无需预热熔融，支持冷法工艺，降低能耗与生产复杂度',
      en: 'liquid at room temperature, needs no pre-melting, supports cold-process manufacturing and reduces energy/process complexity',
    },
    {
      zh: '高HLB（约14.5）赋予较强的增溶能力，适合爽肤水、精华水、洁面液中增溶少量油溶性成分',
      en: 'high HLB (~14.5) gives strong solubilizing power, suited to solubilizing small amounts of oil-soluble ingredients in toners, essences, and cleansing waters',
    },
    {
      zh: '不含PEG，部分植物来源，具Ecocert兼容性，肤感温和，适合眼周及湿巾类低刺激配方',
      en: 'PEG-free, partly plant-derived, Ecocert-compatible, and mild on skin — suitable for low-irritation formulas such as eye-contour products and wet wipes',
    },
  ],
  weaknesses: [
    {
      zh: '本身不增加配方黏度，需另外搭配增稠剂/流变改性剂才能获得膏霜质地',
      en: 'does not itself increase formulation viscosity; a separate thickener/rheology modifier is needed to achieve a cream-like texture',
    },
    {
      zh: '短链高HLB结构决定其对高油相（丰润乳霜类）体系的稳定能力弱于Montanov 68/202、Olivem 1000等长链乳化剂',
      en: 'its short-chain, high-HLB structure makes it weaker than long-chain emulsifiers like Montanov 68/202 or Olivem 1000 at stabilizing high-oil-phase, rich-cream systems',
    },
    {
      zh: '据IQL资料，原料中约45%来自棕榈（椰子/棕榈仁油），主打"天然"但并非严格意义上的棕榈油-free产品，品牌方如强调无棕榈需另行确认',
      en: 'per IQL data, roughly 45% of the raw material is palm-derived (coconut/palm kernel oil); while marketed as natural, it is not strictly palm-free, so brands emphasizing palm-free claims should verify separately',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '爽肤水/精华水/胶束水', en: 'toners, essences, micellar waters' },
      notes: {
        zh: '作为增溶剂帮助少量香精、油溶性活性物分散于水相中',
        en: 'used as a solubilizer to help disperse small amounts of fragrance or oil-soluble actives into the water phase',
      },
    },
    {
      system: { zh: '自乳化沐浴油、眼周及湿巾类低刺激配方', en: 'self-emulsifying bath oils, eye-contour and wet-wipe low-irritation formulas' },
      notes: { zh: '接触水后可自发乳化，且工艺上支持冷法与热法两种生产方式', en: 'self-emulsifies on contact with water, and the process supports both cold and warm production methods' },
    },
  ],
  typicalUseLevel: { min: 2, max: 10, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'montanov-202', 'tego-care-450'],
  citations: [
    {
      id: 'iql-soldocpg410-official',
      supplier: 'Industrial Química Lasem (IQL)',
      documentTitle: 'Soldoc PG 410 — Official Product Page',
      url: 'https://cosmetics.iql-nog.com/products-solutions/57-soldoc-pg-410.html',
      accessedDate: '2026-08-05',
      note: 'Directly fetched manufacturer page; used for INCI name, appearance, natural/palm origin ratio (55% vegetable / 45% palm-derived), Ecocert positioning, and general applications (skincare, haircare, cleansing).',
    },
    {
      id: 'soapqueen-soldocpg410',
      supplier: 'SoapQueen Europe (distributor)',
      documentTitle: 'Soldoc PG 410 - Natural Emulsifier (OVL09)',
      url: 'https://www.soapqueen.eu/a-29036892/other-liquids/soldoc-pg-410-natural-emulsifier-ovl09/',
      accessedDate: '2026-08-05',
      note: 'Directly fetched distributor page; used for HLB=14.5, CAS number (160391-93-5), no-preheating/cold-and-warm-process claim, "does not increase viscosity" claim, and application notes (bath oils, natural certifications). Seppic-unrelated; IQL is a separate Spanish manufacturer. The primary specialchem.com and ulprospector.com listings for this product returned HTTP 403 on direct fetch.',
    },
    {
      id: 'search-pg4caprate-uselevel',
      supplier: 'Multiple indexed sources (BenchChem, Roots by Benda, and related ingredient-directory pages)',
      documentTitle: 'Polyglyceryl-4 Caprate — general ingredient reference data',
      accessedDate: '2026-08-05',
      note: 'Typical use level of 2-10% found via web search indexing of general Polyglyceryl-4 Caprate ingredient-directory pages, not specific to the Soldoc PG 410 grade or confirmed via IQL\'s own TDS — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-05',
})
