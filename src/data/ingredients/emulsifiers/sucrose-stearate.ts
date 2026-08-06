import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sucrose-stearate',
  category: 'emulsifier',
  inciName: 'Sucrose Stearate',
  nameZh: '蔗糖硬脂酸酯',
  tradeNames: [{ name: 'Sisterna SP70-C', supplier: 'Sisterna B.V.' }],
  chemicalClass: {
    zh: '蔗糖脂肪酸酯类非离子表面活性剂（糖酯型，PEG-free）',
    en: 'Sucrose fatty acid ester non-ionic surfactant (sugar-ester type, PEG-free)',
  },
  chemicalStructureSummary: {
    zh: '由蔗糖（含8个羟基的二糖，天然强亲水骨架）与硬脂酸（C18饱和脂肪酸，亲油尾链）经酯化反应制得。SP70-C为高单酯含量等级（单酯约占70%，即平均每个蔗糖分子只酯化连接一条硬脂酸链，其余多个羟基保持游离），不含聚氧乙烯链（PEG-free），整体HLB约为15，为高HLB水包油(O/W)乳化剂/增溶剂，可直接溶于冷水。',
    en: 'Made by esterifying sucrose (an 8-hydroxyl disaccharide, an intrinsically strongly hydrophilic backbone) with stearic acid (a C18 saturated fatty acid, the lipophilic tail). The SP70-C grade is a high-mono-ester-content grade (~70% mono-ester, meaning on average only one stearic-acid chain is esterified per sucrose molecule, leaving several hydroxyls free). It carries no polyoxyethylene chain (PEG-free), with an overall HLB of ~15 — a high-HLB O/W emulsifier/solubilizer that dissolves directly in cold water.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高HLB从何而来（且无需PEG化）', en: 'Where the high HLB comes from (without ethoxylation)' },
      explanation: {
        zh: '蔗糖分子本身带有8个羟基，单酯化仅消耗其中一个，留下多达7个游离羟基暴露在水中形成大量氢键；这种"天然多羟基"结构无需借助聚氧乙烯链即可获得很高的亲水性，因此单酯含量越高（如SP70约70%单酯）的等级，亲水头基占比越大，HLB也越高，这与依赖PEG链拉高HLB的聚山梨醇酯类原料是完全不同的结构路径。',
        en: "Sucrose itself carries 8 hydroxyl groups, and mono-esterification consumes only one of them, leaving as many as 7 free hydroxyls exposed to water to form extensive hydrogen bonds. This 'naturally polyhydroxylated' structure achieves high hydrophilicity without any polyoxyethylene chain — so grades with higher mono-ester content (e.g. SP70's ~70% mono-ester) have a proportionally larger hydrophilic head and higher HLB. This is a fundamentally different structural route to a high HLB than the PEG-chain-dependent polysorbates.",
      },
    },
    {
      aspect: { zh: '冷水直接溶解/冷法工艺能力从何而来', en: 'Where the cold-water solubility / cold-process capability comes from' },
      explanation: {
        zh: '其亲水性来自蔗糖分子本身固有的多羟基结构，而非需要在水中伸展水合才能生效的柔性PEG链，因此SP70-C作为干燥喷雾粉末可直接溶于冷水形成溶液，使配方得以采用冷法工艺乳化，这是蜡状（需加热熔化）或PEG型（常温需搅拌水合）乳化剂难以做到的。',
        en: "Its hydrophilicity comes from the intrinsic multi-hydroxyl structure of the sucrose molecule itself, not from a flexible PEG chain that must extend and hydrate in water to become effective. This lets SP70-C, supplied as a spray-dried powder, dissolve directly in cold water — enabling cold-process emulsification in a way that waxy (melt-required) or PEG-type (stir-hydration-required) emulsifiers cannot easily match.",
      },
    },
    {
      aspect: { zh: '温和肤感从何而来', en: 'Where the mild skin feel comes from' },
      explanation: {
        zh: '其亲水头基是天然糖分子（蔗糖），结构上与已被证实肤感温和的糖苷型乳化剂（如烷基糖苷）同属"糖基头基"家族，不含醚键/聚氧乙烯链，因而不涉及PEG类原料常被关注的环氧乙烷/1,4-二噁烷残留问题，这是供应商强调其"温和""改善肤感光滑度"等定位的结构基础。',
        en: 'Its hydrophilic head group is a natural sugar (sucrose), placing it structurally in the same "sugar-based head group" family as glucoside-type emulsifiers already established as mild on skin, and it contains no ether linkage or polyoxyethylene chain — so it sidesteps the ethylene-oxide/1,4-dioxane residue concern associated with PEG-type ingredients. This is the structural basis for supplier positioning around mildness and improved skin smoothness.',
      },
    },
    {
      aspect: { zh: '硬脂酸酯对电解质较敏感从何而来', en: 'Where the electrolyte sensitivity of the stearate ester comes from' },
      explanation: {
        zh: '硬脂酸尾链（C18）较长，链间范德华力更强，使该分子在高电解质环境下更容易聚集、结晶析出而破坏乳液稳定性，相较于尾链更短的月桂酸酯（如蔗糖月桂酸酯）更易发生絮凝——这也是配方中需注意电解质用量的结构原因。',
        en: 'The longer C18 stearic-acid tail produces stronger inter-chain van der Waals forces, making the molecule more prone to aggregating and crystallizing out under high-electrolyte conditions, which can destabilize the emulsion — more so than the shorter-tail laurate esters (e.g. sucrose laurate). This is the structural reason formulators need to watch electrolyte loading when using this ingredient.',
      },
    },
  ],
  hlb: 15,
  appearance: {
    zh: '类白色至白色流动性良好的喷雾干燥粉末，味道和气味中性',
    en: 'off-white to white, free-flowing spray-dried powder, neutral taste and odor',
  },
  performance: {
    skinFeel: {
      zh: '供应商资料称能改善皮肤光滑度与湿润感；因不成厚重蜡质膜，肤感偏清爽',
      en: 'supplier materials describe improved skin smoothness and moisture feel; being non-waxy and non-film-heavy, the skin feel leans light and non-greasy',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: 'PEG-free，天然来源（蔗糖+植物脂肪酸），符合ECOCERT/COSMOS/NATRUE等天然认证要求',
      en: 'PEG-free, naturally derived (sucrose + plant fatty acid) — compatible with ECOCERT/COSMOS/NATRUE natural certification requirements',
    },
    {
      zh: '可直接冷水溶解，支持冷法工艺，降低能耗',
      en: 'dissolves directly in cold water, enabling cold-process formulation and reducing energy use',
    },
    {
      zh: '食品与化妆品双重应用背景，安全性数据积累丰富',
      en: 'a dual food- and cosmetic-grade history provides an extensive accumulated safety data record',
    },
  ],
  weaknesses: [
    {
      zh: '硬脂酸酯对高电解质环境较敏感，容易发生絮凝，相较蔗糖月桂酸酯等短链酯更需注意配方中电解质用量',
      en: 'the stearate ester is relatively sensitive to high-electrolyte conditions and prone to flocculation; more electrolyte caution is needed than with shorter-chain esters like sucrose laurate',
    },
    {
      zh: '不同单酯/多酯比例的批次会明显影响HLB与实际性能，配方选型需明确具体等级（如SP70-C）而非泛称"蔗糖硬脂酸酯"',
      en: 'batches with different mono-/di-/poly-ester ratios can noticeably shift HLB and real-world performance — formulators should specify the exact grade (e.g. SP70-C) rather than a generic "sucrose stearate"',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '轻盈型O/W乳液/精华（PEG-free定位）', en: 'lightweight O/W lotion / serum (PEG-free positioning)' },
      notes: { zh: '可作为主乳化剂或与其他非离子乳化剂复配', en: 'can serve as the primary emulsifier or be blended with other non-ionic emulsifiers' },
    },
    {
      system: { zh: '冷法工艺配方', en: 'cold-process formulations' },
      notes: { zh: '粉末可直接溶于冷水相', en: 'the powder dissolves directly into the cold water phase' },
    },
  ],
  typicalUseLevel: { min: 0.5, max: 5, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'olivem-1000'],
  citations: [
    {
      id: 'sisterna-faq',
      supplier: 'Sisterna B.V.',
      documentTitle: 'Sisterna Sucrose Esters — Frequently Asked Questions',
      url: 'https://www.sisterna.com/faq/',
      accessedDate: '2026-08-05',
      note: 'Directly fetched supplier FAQ page; used for grade overview (SP70/SP50/PS750 as high-HLB grades), appearance (spray-dried powders), general use-level range (0.5-5%), non-ionic/PEG-free positioning, and water solubility of high-HLB grades.',
    },
    {
      id: 'search-sp70c-hlb-inci',
      supplier: 'Sisterna (indexed via Knowde / UL Prospector / SpecialChem listings)',
      documentTitle: 'Sisterna SP70-C — Sucrose Stearate, HLB 15 (product listing cross-reference)',
      url: 'https://www.knowde.com/stores/sisterna-b-v/products/sisterna-sp70-c',
      accessedDate: '2026-08-05',
      note: 'INCI (Sucrose Stearate) and HLB (15) confirmed via consistent cross-referencing across Knowde/UL Prospector/SpecialChem search-indexed listings; direct fetches of these pages failed (blocked, or returned empty JS-rendered content), so this is treated as search-snippet-sourced rather than independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'search-sp70-appearance-monoester',
      supplier: 'Sisterna (indexed via web search snippet, Ingredients Network listing)',
      documentTitle: 'Sisterna SP70 — Sucrose Stearate product description',
      url: 'https://www.ingredientsnetwork.com/sisterna-sp70-prod625574.html',
      accessedDate: '2026-08-05',
      note: 'Appearance ("free-flowing, off-white powder, neutral in taste and odour") and ~70% mono-ester content found via search-engine snippet; page was not independently fetched in full.',
    },
    {
      id: 'search-electrolyte-sensitivity',
      supplier: 'Sisterna (indexed via web search snippet)',
      documentTitle: 'Sucrose ester stability notes — stearate vs laurate electrolyte sensitivity',
      accessedDate: '2026-08-05',
      note: 'The comparative note that stearate sucrose esters are more sensitive to flocculation in high-electrolyte environments than laurate esters was found via a search-result summary, not a directly fetched primary document.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'appearance', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-05',
})
