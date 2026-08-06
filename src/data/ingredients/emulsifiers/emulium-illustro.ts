import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'emulium-illustro',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-6 Polyhydroxystearate (and) Polyglyceryl-6 Polyricinoleate (and) Polyglycerin-6',
  nameZh: '聚甘油-6聚羟基硬脂酸酯（和）聚甘油-6聚蓖麻醇酸酯（和）聚甘油-6',
  tradeNames: [{ name: 'Emulium Illustro', supplier: 'Gattefossé' }],
  chemicalClass: {
    zh: '聚甘油酯类非离子W/O乳化剂（PEG-free）',
    en: 'Non-ionic, PEG-free W/O emulsifier based on polyglycerol esters',
  },
  chemicalStructureSummary: {
    zh: '由低游离甘油规格的聚甘油-6（多个甘油单元缩聚形成的多羟基聚醚骨架，作为亲水头基）分别与12-羟基硬脂酸、蓖麻醇酸（源自蓖麻油的羟基脂肪酸）缩合成酯，得到聚甘油-6聚羟基硬脂酸酯与聚甘油-6聚蓖麻醇酸酯两种聚合型酯类乳化剂，并保留部分游离的聚甘油-6作为体系组分。聚甘油头基不含聚氧乙烯链（PEG-free），亲水性来自多个甘油羟基；两种脂肪酸尾链（羟基硬脂酸、蓖麻醇酸）均带侧链羟基，赋予分子链一定柔性与支化结构，是该产品被描述为具有"柔顺结构"的化学基础。',
    en: 'A low-free-glycerol grade of Polyglyceryl-6 (a polyether backbone formed by condensing multiple glycerol units, carrying multiple hydroxyls as the hydrophilic head) is separately esterified with 12-hydroxystearic acid and ricinoleic acid (a hydroxy fatty acid derived from castor oil) to give two polymeric ester emulsifiers — Polyglyceryl-6 Polyhydroxystearate and Polyglyceryl-6 Polyricinoleate — with some free Polyglyceryl-6 retained as a system component. The polyglycerol head group carries no polyoxyethylene chain (PEG-free); its hydrophilicity comes from multiple glycerol hydroxyls. Both fatty-acid tails (hydroxystearic acid, ricinoleic acid) carry pendant hydroxyl groups, giving the molecular chains flexibility and a branched structure — the chemical basis for the product being described as having a "supple structure."',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '无需共乳化剂即可稳定W/O体系的能力从何而来', en: 'Where the ability to stabilize W/O systems without a co-emulsifier comes from' },
      explanation: {
        zh: '聚甘油-6聚羟基硬脂酸酯与聚甘油-6聚蓖麻醇酸酯的酯键侧链均带有羟基，使分子在油相中呈支化、柔顺的构象而非刚性直链；这种柔顺结构能更充分地包裹水滴、在界面形成连续且有一定弹性的膜层，单一分子体系即可承担乳化与稳定的双重功能，因此不像多数W/O乳化剂那样需要额外搭配共乳化剂（如鲸蜡醇等结构剂）。',
        en: "The ester side chains of both Polyglyceryl-6 Polyhydroxystearate and Polyglyceryl-6 Polyricinoleate carry pendant hydroxyls, giving the molecules a branched, supple conformation in the oil phase rather than a rigid straight chain. This supple structure wraps more fully around water droplets, forming a continuous, somewhat elastic film at the interface — letting a single-molecule system handle both emulsifying and stabilizing duty, unlike most W/O emulsifiers that need a separate co-emulsifier (e.g. a structuring alcohol) alongside them.",
      },
    },
    {
      aspect: { zh: '冷法可加工性从何而来', en: 'Where the cold-processability comes from' },
      explanation: {
        zh: '聚甘油酯类分子不像蜡状脂肪醇/糖苷体系那样依赖高温下的结晶-熔融转变来形成乳化膜；其柔性酯键结构在室温下即可在界面自组装形成稳定膜层，无需加热使原料完全熔融即可完成乳化，这是该产品可"冷法加工"的结构基础，也降低了生产能耗。',
        en: "Polyglycerol ester molecules don't rely on a high-temperature crystallization-melting transition to form their emulsifying film the way waxy fatty-alcohol/glucoside systems do; their flexible ester structure can self-assemble into a stable film at the interface at room temperature, without needing the raw material to fully melt — the structural basis for cold processability, which also reduces manufacturing energy use.",
      },
    },
    {
      aspect: { zh: '对颜料/防晒剂的高相容性从何而来', en: 'Where the high compatibility with pigments/UV filters comes from' },
      explanation: {
        zh: '聚甘油头基的多羟基结构对颜料及无机防晒剂表面的极性基团（如金属氧化物表面羟基）具有较强的吸附/润湿能力，而柔顺的脂肪酸尾链又能在油相中充分伸展、降低颗粒间的范德华聚集倾向；两者共同作用使聚甘油酯类分子特别擅长润湿并稳定分散颜料/防晒剂颗粒，这是该产品被设计"专为彩妆/防晒等含颜料配方"的结构基础。',
        en: "The polyglycerol head's multiple hydroxyls adsorb/wet well onto the polar surface groups of pigments and inorganic UV filters (e.g. surface hydroxyls on metal-oxide particles), while the supple fatty-acid tails extend fully into the oil phase and reduce particle-particle van der Waals aggregation. Together these effects make polyglycerol ester molecules particularly good at wetting and stably dispersing pigment/UV-filter particles — the structural basis for the product being designed principally for pigmented formulations such as color cosmetics and sun care.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '轻盈柔滑的护肤感，呈现润泽有光泽的肤感效果',
      en: 'light, soft skin-care-like after-feel with a moisturized, glowy finish',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: 'PEG-free、天然来源（ISO 16128标准下100%天然来源）的W/O乳化剂，通过COSMOS认证，易生物降解',
      en: 'PEG-free, naturally derived (100% natural origin under ISO 16128) W/O emulsifier, COSMOS approved and readily biodegradable',
    },
    {
      zh: '无需共乳化剂即可稳定体系，且可冷法加工，简化生产工艺、降低能耗',
      en: 'stabilizes the system without a co-emulsifier and is cold-processable, simplifying manufacturing and reducing energy use',
    },
    {
      zh: '专为含颜料配方设计，与颜料及防晒剂相容性突出，5%用量下经临床验证不致粉刺（供应商数据），可替代硅油体系打造无硅质地',
      en: 'purpose-designed for pigmented formulas with standout pigment/UV-filter compatibility; clinically validated as non-comedogenic at 5% use level (supplier data); positioned as a silicone-free alternative for W/O textures',
    },
  ],
  weaknesses: [
    {
      zh: '公开可查的HLB值、外观及pH等数值型TDS数据未见于本次可访问的资料',
      en: 'publicly available numeric TDS data such as HLB, appearance, and pH were not found in the sources accessible during this research pass',
    },
    {
      zh: '专利申请中（patent pending），配方复现或供应链替代可能受限',
      en: 'the product is patent pending, which may limit formulation reverse-engineering or supply-chain substitution options',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '彩妆（粉底、遮瑕、腮红、古铜粉）', en: 'color cosmetics (foundation, concealer, blush, bronzer)' },
      notes: { zh: '专为分散颜料设计，供应商推荐用量3-5%', en: 'purpose-designed for pigment dispersion; supplier-recommended use level 3-5%' },
    },
    {
      system: { zh: '防晒配方', en: 'sun care formulas' },
      notes: { zh: '有助于分散UV滤光剂', en: 'helps disperse UV filters' },
    },
    {
      system: { zh: '唇部产品及清洁膏（cleansing balm）', en: 'lip products and cleansing balms' },
    },
  ],
  typicalUseLevel: { min: 3, max: 5, unit: '%' },
  relatedIngredientSlugs: ['emulium-delta-mb', 'abil-em-90'],
  citations: [
    {
      id: 'gattefosse-emuliumillustro-productfinder',
      supplier: 'Gattefossé',
      documentTitle: 'Emulium Illustro — Product Finder page',
      url: 'https://www.gattefosse.com/personal-care/product-finder/emulium-illustro',
      accessedDate: '2026-08-06',
      note: 'Official Gattefossé product-finder page, successfully fetched directly. Used for INCI name, product type (W/O emulsifier), PEG-free/cold-processable/no-co-emulsifier-needed claims, use level (3-5%), skin-feel/finish description, non-comedogenic claim (clinically validated at 5%), certifications (COSMOS, ISO 16128 100% natural origin, readily biodegradable, China NMPA notified, patent pending), and applications list (foundations, sunscreens, concealers, lip products, bronzers, blushes, cleansing balms).',
    },
    {
      id: 'cosmeticsandtoiletries-emuliumillustro',
      supplier: 'Cosmetics & Toiletries (trade publication)',
      documentTitle: 'Gattefossé\'s Emulium Illustro',
      url: 'https://www.cosmeticsandtoiletries.com/cosmetic-ingredients/cleansing/news/21843797/gattefosse-sa-gattefosses-emulium-illustro',
      accessedDate: '2026-08-06',
      note: 'Trade-press launch coverage found via search, used to cross-check the chemistry description (low-free-glycerol Polyglyceryl-6 esterified with 12-hydroxystearic acid and ricinoleic acid, giving a "supple structure") and the product\'s positioning as a silicone-free W/O alternative; also notes the In-Cosmetics Global 2019 Gold Innovation Award. Not independently re-fetched in full in this session — content drawn from the earlier web-search summary.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['chemicalStructureSummary'],
  lastUpdated: '2026-08-06',
})
