import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'hostaphat-kl-340-d',
  category: 'emulsifier',
  inciName: 'Trilaureth-4 Phosphate',
  nameZh: '三月桂醇聚醚-4磷酸酯',
  tradeNames: [{ name: 'Hostaphat KL 340 D', supplier: 'Clariant' }],
  chemicalClass: {
    zh: '阴离子磷酸酯类O/W乳化剂（预中和型）',
    en: 'Anionic phosphate-ester O/W emulsifier (pre-neutralized)',
  },
  chemicalStructureSummary: {
    zh: '以磷酸为核心，与三条月桂醇聚醚-4（Laureth-4，即经4个环氧乙烷单元加成的月桂醇）链段酯化而成的磷酸酯：疏水的C12烷基尾链通过聚氧乙烯（4EO）链段连接至中心的磷酸基团，磷酸基在预中和后带负电荷，形成阴离子型亲水头基。相较于典型的非离子型聚氧乙烯醚乳化剂，磷酸阴离子头基能提供更高的界面电荷密度，这是其HLB值偏高、适合稳定水包油（O/W）体系的结构基础（供应商数据：Clariant官网描述其为"高HLB"预中和阴离子O/W乳化剂）。',
    en: 'A phosphate ester built around a central phosphoric-acid unit esterified with three Laureth-4 chains (lauryl alcohol ethoxylated with 4 ethylene-oxide units): the hydrophobic C12 alkyl tails are each linked through a short polyoxyethylene (4EO) spacer to the central phosphate group, which carries a negative charge once pre-neutralized, forming an anionic hydrophilic head. Compared with a typical non-ionic polyoxyethylene-ether emulsifier, the anionic phosphate head group provides higher interfacial charge density — the structural basis for the comparatively high HLB the supplier describes and for its suitability in stabilizing oil-in-water (O/W) systems (supplier data: Clariant\'s own product page describes it as a "high HLB," pre-neutralized anionic O/W emulsifier).',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高HLB与O/W乳化能力从何而来', en: 'Where the high HLB and O/W emulsifying ability come from' },
      explanation: {
        zh: '磷酸基团经预中和后带负电荷，相比非离子型聚醚头基能提供更强的静电排斥与更高的亲水性，这使得该原料整体偏亲水、HLB偏高（供应商定性描述为"高HLB"），是其能够稳定水包油乳液、并兼容电解质及UV滤剂等极性成分的结构基础。',
        en: 'The phosphate group carries a negative charge once pre-neutralized, providing stronger electrostatic repulsion and higher hydrophilicity than a non-ionic polyether head group alone — the reason the ingredient skews strongly hydrophilic and the supplier describes it qualitatively as "high HLB," which is the structural basis for its ability to stabilize oil-in-water emulsions and remain compatible with electrolytes and UV filters.',
      },
    },
    {
      aspect: { zh: '可冷法配方、快速吸收的轻盈肤感从何而来', en: 'Where the cold-processability and light, fast-absorbing skin feel come from' },
      explanation: {
        zh: '磷酸酯预中和后已是水溶性盐的形式，无需像游离酸型磷酸酯那样额外中和步骤，也无需加热熔融即可分散于水相，这是其"冷法可加工"特性的结构基础；同时三条较短的C12+4EO链段整体分子量适中，铺展后残留感较轻，有利于形成低粘度、快速吸收的乳液质地（供应商数据）。',
        en: "Being pre-neutralized, the phosphate ester is already in a water-soluble salt form, so it disperses into the water phase without the extra neutralization step or heating/melting that a free-acid phosphate ester would require — the structural basis for its cold-processability. The three comparatively short C12+4EO chains also keep the overall molecular weight moderate, leaving a lighter residual film that supports low-viscosity, fast-absorbing emulsion textures (supplier data).",
      },
    },
    {
      aspect: { zh: '与UV滤剂、电解质等极性成分的兼容性从何而来', en: 'Where the compatibility with UV filters and electrolytes comes from' },
      explanation: {
        zh: '磷酸阴离子头基的强亲水性与电荷屏蔽能力，使其形成的界面膜对体系中引入的电解质（如盐类）及部分极性有机UV滤剂的耐受性更强，不易因离子强度变化而破乳，这与供应商所述"与醇类、电解质、UV滤剂及各类油脂具有良好相容性"一致。',
        en: 'The strong hydrophilicity and charge-screening capacity of the anionic phosphate head group make the interfacial film it forms more tolerant of electrolytes (e.g. salts) and some polar organic UV filters introduced into the system, resisting emulsion breakdown from changes in ionic strength — consistent with the supplier\'s description of "very good compatibility with alcohols, electrolytes, UV filters and all types of oils."',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商数据：肤感舒适，延展性好，吸收快，后感轻盈',
      en: 'supplier data: pleasant skin feel, good spreadability, quick absorption, lightweight after-feel',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '预中和型阴离子O/W乳化剂，可冷法加工，与醇类、电解质、UV滤剂及各类油脂相容性良好（供应商数据）',
      en: 'a pre-neutralized anionic O/W emulsifier that is cold-processable, with good compatibility with alcohols, electrolytes, UV filters, and all types of oils (supplier data)',
    },
    {
      zh: '高HLB特性使其能够配制各类油脂及UV滤剂体系的乳液，尤其适合稀薄、可泵送的乳液及喷雾质地（供应商数据）',
      en: 'the high-HLB characteristic allows formulation of emulsions across a wide range of oils and UV filters, and is especially well suited to thin, pumpable lotion and spray textures (supplier data)',
    },
    {
      zh: '素食主义（vegan）认证，且原料含棕榈来源成分并获RSPO大宗平衡认证（供应商数据）',
      en: 'vegan-certified, and contains palm-derived content that is RSPO Mass Balance certified (supplier data)',
    },
  ],
  weaknesses: [
    {
      zh: '本次研究未能取得具体的HLB数值、活性物含量、pH及推荐用量百分比——Clariant自有产品页面未列出这些数值，SpecialChem/Knowde上的详细技术数据表在本次抓取中被拦截或返回空白，故本条目不纳入相关数字，以免臆造',
      en: 'this research pass did not obtain specific numeric values for HLB, active content, pH, or a recommended use-level percentage — these are not listed on Clariant\'s own product page, and the detailed technical data sheet on SpecialChem/Knowde returned blocked or blank content on direct fetch, so no such figures are included here to avoid inventing them',
    },
    {
      zh: '作为磷酸酯类阴离子乳化剂，对配方pH及其他阴/阳离子成分的相容性需要在配方中单独验证（此为该化学类别的一般性考虑，非该原料的供应商专属数据）',
      en: 'as a phosphate-ester anionic emulsifier, compatibility with formulation pH and other anionic/cationic ingredients needs to be verified case-by-case (a general consideration for this chemical class, not a supplier-specific claim for this ingredient)',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '低粘度乳液、喷雾及乳液型产品', en: 'low-viscosity lotions, sprays and milk-type textures' },
      notes: { zh: '供应商数据：特别适合稀薄、可泵送的质地', en: 'supplier data: particularly well suited to thin, pumpable formats' },
    },
    {
      system: { zh: '彩妆、面部/身体/发用护理、湿巾、止汗/除臭及防晒产品', en: 'color cosmetics, face/body/hair care, wet wipes, antiperspirants/deodorants, and sun protection products' },
      notes: { zh: '供应商应用列表', en: 'per supplier application list' },
    },
  ],
  relatedIngredientSlugs: [],
  citations: [
    {
      id: 'clariant-hostaphat-kl340d-product-page',
      supplier: 'Clariant',
      documentTitle: 'Hostaphat® KL 340 D — Product Page',
      url: 'https://www.clariant.com/en/products/hostaphat-kl-340-d-1',
      accessedDate: '2026-08-06',
      note: "Fetched directly from Clariant's own site. Confirms INCI name (Trilaureth-4 Phosphate), function (pre-neutralized, cold-processable anionic O/W emulsifier), compatibility notes, applications, vegan status, RSPO-MB (palm-based) content, and China registration. Full numeric TDS (HLB value, active content %, pH, exact recommended dosage) was not present on this page.",
    },
    {
      id: 'specialchem-hostaphat-kl340d-tds',
      supplier: 'Clariant (via SpecialChem)',
      documentTitle: 'Hostaphat KL 340 D - Clariant - Technical Datasheet',
      url: 'https://cosmetics.specialchem.com/product/i-clariant-hostaphat-kl-340-d',
      accessedDate: '2026-08-06',
      note: 'Direct fetch of this page returned HTTP 403 / blank content; used only for the qualitative "high HLB," "flexible emulsifier for challenging formulations" descriptor and the thin-lotion/spray/milk formulation guidance via the search-result summary, not for numeric values.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh', 'hlb'],
  lastUpdated: '2026-08-06',
})
