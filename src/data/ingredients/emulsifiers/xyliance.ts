import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'xyliance',
  category: 'emulsifier',
  inciName: 'Cetearyl Wheat Straw Glycosides (and) Cetearyl Alcohol',
  nameZh: '鲸蜡硬脂基小麦秸秆糖苷（和）鲸蜡硬脂醇',
  tradeNames: [{ name: 'Xyliance', supplier: 'Givaudan (formerly Soliance)' }],
  chemicalClass: {
    zh: '小麦秸秆多戊糖苷类天然非离子乳化剂（烷基多戊糖苷）',
    en: 'Wheat-straw-derived alkyl polypentoside natural non-ionic emulsifier',
  },
  chemicalStructureSummary: {
    zh: '由两部分组成：亲水部分为"小麦秸秆糖苷"——从小麦秸秆半纤维素水解得到的多戊糖（主要为D-木糖、L-阿拉伯糖，并含部分D-葡萄糖）以糖苷键连接在C16-18烷基链上；亲油部分为游离的鲸蜡硬脂醇（约占45%），与糖苷组分共存并共结晶。整体思路与常见的烷基葡糖苷（APG）乳化剂（如Montanov 68、Olivem 1000所用糖苷/酯体系）相近，但其糖苷单元来自五碳糖（木糖/阿拉伯糖），原料来源为农业副产物小麦秸秆而非玉米/棕榈来源的葡萄糖。',
    en: "Composed of two parts: a hydrophilic part — 'wheat straw glycosides,' polypentose sugars (mainly D-xylose and L-arabinose, with some D-glucose) hydrolyzed from wheat-straw hemicellulose and glycosidically linked to a C16-18 alkyl chain — and a lipophilic part, free Cetearyl Alcohol (~45%), which co-exists and co-crystallizes with the glycoside component. The overall logic parallels common alkyl polyglucoside (APG) emulsifiers (the glucoside/ester systems used in Montanov 68 or Olivem 1000), but its sugar units are five-carbon sugars (xylose/arabinose) sourced from an agricultural by-product — wheat straw — rather than glucose from corn or palm.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高油相自乳化能力从何而来', en: 'Where the high-oil-phase, co-emulsifier-free ability comes from' },
      explanation: {
        zh: '多戊糖头基（木糖/阿拉伯糖/葡萄糖单元）带有大量羟基，可形成多点氢键强烈水合，而共用的C16-18烷基链（连同高比例的游离鲸蜡硬脂醇约45%）则深入锚定油相；由于该原料本身已同时提供表面活性剂与共结构剂两种功能，因此可在不添加共乳化剂的情况下稳定高达约45-50%的油相。',
        en: 'The polypentoside head groups (xylose/arabinose/glucose units) carry numerous hydroxyls that hydrate strongly via multiple hydrogen bonds, while the shared C16-18 alkyl chain — together with the high proportion (~45%) of free Cetearyl Alcohol — anchors deep into the oil phase. Because the material already supplies both the surfactant and the co-structurant function in one blend, it can stabilize up to ~45-50% oil phase without an added co-emulsifier.',
      },
    },
    {
      aspect: { zh: '宽pH稳定范围（2-12）从何而来', en: 'Where the broad pH stability range (2-12) comes from' },
      explanation: {
        zh: '多戊糖与脂肪醇之间是非酯化的糖苷键连接，相较于甘油酯、乳酸酯等酯键连接的乳化剂，糖苷键对酸/碱水解的化学稳定性更高，这是其pH稳定范围（约2-12）明显宽于Ritamulse SCG等酯类自乳化体系的结构性原因。',
        en: "The bond linking the polypentose to the fatty alcohol is a non-ester glycosidic linkage. Compared with ester-linked emulsifiers (glycerides, lactylates), a glycosidic bond is chemically more resistant to acid/base hydrolysis — the structural reason its pH stability range (~2-12) is markedly broader than ester-type self-emulsifying systems such as Ritamulse SCG.",
      },
    },
    {
      aspect: { zh: '必须热法加工、电解质耐受性差从何而来', en: 'Where the hot-process requirement and poor electrolyte tolerance come from' },
      explanation: {
        zh: '该原料为固体蜡质糖苷混合物，只有在两相都加热至约70°C使其完全熔融后再降温，才能与鲸蜡硬脂醇共结晶排列成起作用的层状液晶网络；而这一层状网络的稳定性依赖界面处的氢键/水合平衡，加入电解质会屏蔽或破坏这种平衡，因此与其他层状液晶型乳化剂类似，遇盐易破乳。',
        en: 'The material is a solid, waxy glycoside blend that only co-crystallizes with Cetearyl Alcohol into a functional lamellar liquid-crystal network once both phases are fully melted (~70°C) and then cooled together. That lamellar network\'s stability depends on a hydrogen-bonding/hydration balance at the interface, and added electrolytes screen or disrupt that balance — so, like other lamellar-liquid-crystal emulsifiers, the emulsion tends to break when salts are added.',
      },
    },
    {
      aspect: { zh: '柔滑不粘腻肤感从何而来', en: 'Where the silky, non-tacky skin feel comes from' },
      explanation: {
        zh: '多戊糖头基由较小的五碳糖环（木糖/阿拉伯糖）组成，其在界面的水合方式与葡萄糖型糖苷类似，但堆积体积相对更小，涂抹后残留膜层更轻薄柔滑，这是引用资料中"柔滑、不粘腻、不显皂感"等肤感描述的结构基础。',
        en: 'The polypentoside head consists of relatively small five-carbon sugar rings (xylose/arabinose), which hydrate at the interface in a manner similar to glucose-based glucosides but pack less bulkily. This leaves a lighter, silkier residual film on application — the structural basis for the cited "silky, non-tacky, non-soapy" skin-feel description.',
      },
    },
  ],
  appearance: {
    zh: '类白色至米白色蜡质颗粒/片状固体',
    en: 'pale beige to white waxy granules/flakes',
  },
  performance: {
    skinFeel: {
      zh: '柔滑、不粘腻、不显皂感，乳液呈现"丰润细腻"的外观',
      en: 'silky, non-tacky, non-soapy skin feel; emulsions have a rich, luxurious appearance',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '自乳化能力强，无需复配乳化剂，可支持较高油相比例（约20-50%）',
      en: 'strong self-emulsifying ability, needs no co-emulsifier, and supports a fairly high oil-phase range (~20-50%)',
    },
    {
      zh: 'pH稳定范围宽（约2-12），显著优于多数酯类天然乳化剂',
      en: 'broad pH stability range (~2-12), notably wider than most ester-type natural emulsifiers',
    },
    {
      zh: 'ECOCERT/COSMOS认证、纯素，原料来自农业副产物（小麦秸秆半纤维素），符合天然/升级回收原料定位',
      en: 'ECOCERT/COSMOS-approved, vegan, and sourced from an agricultural by-product (wheat-straw hemicellulose), fitting a natural/upcycled-ingredient positioning',
    },
  ],
  weaknesses: [
    {
      zh: '必须热法加工（两相均需加热至约70°C），并非冷法可处理的乳化剂，工艺能耗较高',
      en: 'requires hot-process (both phases heated to ~70°C) — it is not a cold-processable emulsifier, and the process is more energy-intensive',
    },
    {
      zh: '电解质耐受性差，加入盐类活性物或高浓度电解质易导致破乳',
      en: 'poor electrolyte tolerance; adding salt-type actives or high electrolyte concentrations tends to break the emulsion',
    },
    {
      zh: '不适合低油相或喷雾型乳液配方，通常仍需搭配额外增稠剂/稳定剂以获得长期稳定性；自2015年由Givaudan接手生产后已不再是"零棕榈油"原料，宣称天然/纯净定位时需注意此变化',
      en: 'not suited to low-oil-phase or sprayable-lotion formats, and typically still needs an added thickener/stabilizer for long-term stability; since Givaudan took over production in 2015 it is no longer palm-oil-free, a point to note for natural/clean-positioned claims',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '丰润型手霜/身体霜/面霜', en: 'rich hand cream / body cream / face cream' },
      notes: { zh: '油相占比可达约20-45%', en: 'supports oil-phase content up to ~20-45%' },
    },
    {
      system: { zh: '面膜、深层护发/护发素类产品', en: 'masks, deep hair-conditioning products' },
    },
  ],
  typicalUseLevel: { min: 3.5, max: 8, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'olivem-1000', 'sinosurf-m68'],
  citations: [
    {
      id: 'formulabotanica-xyliance',
      supplier: 'Formula Botanica (formulation education site)',
      documentTitle: 'How to Make an Emulsion with Xyliance, a Natural & Vegan Emulsifier',
      url: 'https://formulabotanica.com/xyliance-emulsifier/',
      accessedDate: '2026-08-05',
      note: 'Fetched directly; used for INCI, appearance, use level, hot-process requirement (~70°C), oil-phase range (20-45%), electrolyte-tolerance issue, and the note that Xyliance lost its palm-oil-free status after Givaudan acquired Soliance in 2015. This source also identifies the manufacturer as Givaudan (formerly Soliance) — not Croda, which is what an initial (unverified) assumption named; this entry uses the manufacturer confirmed by research.',
    },
    {
      id: 'givaudan-xyliance-neo',
      supplier: 'Givaudan Active Beauty',
      documentTitle: 'Xyliance NEO — Official Product Page',
      url: 'https://www.givaudan.com/fragrance-beauty/active-beauty/products/xyliance',
      accessedDate: '2026-08-05',
      note: "Fetched directly from the manufacturer's own site; used for the higher oil-phase capacity (up to ~50%) and broad pH range (2-12) figures, and confirms current ownership. This page describes the current 'Xyliance NEO' version and does not itself state hot- vs cold-process guidance or HLB — those details come from the Formula Botanica source, which may reflect the earlier Soliance-era version of the product; a possible formulation difference between versions is noted here rather than assumed identical.",
    },
    {
      id: 'search-xyliance-inci-confirm',
      supplier: 'Web search aggregation (The Herbarie, CM Studio+, Huiles & Sens listings)',
      documentTitle: 'Xyliance — INCI cross-reference (search aggregation)',
      accessedDate: '2026-08-05',
      note: 'Multiple independent distributor/ingredient-database listings consistently confirm the INCI "Cetearyl Wheat Straw Glycosides (and) Cetearyl Alcohol"; a primary PDF datasheet (agrobiobase.com) could not be extracted as readable text in this pass.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'performance.pillingTendency', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-05',
})
