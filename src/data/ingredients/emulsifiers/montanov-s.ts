import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'montanov-s',
  category: 'emulsifier',
  inciName: 'Cocoglucoside (and) Coconut Alcohol',
  nameZh: '椰油基葡糖苷（和）椰油醇',
  tradeNames: [{ name: 'Montanov S', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子共乳化剂（辅助乳化剂）',
    en: 'Alkyl polyglucoside (APG) non-ionic co-emulsifier',
  },
  chemicalStructureSummary: {
    zh: '由椰油基葡糖苷（源自椰子油的短-中链C8-16烷基与葡萄糖缩合而成的糖苷）与椰油醇（同样源自椰子油的短-中链C12-18脂肪醇混合物）复配而成。两组分均来自椰子油、链长偏短，区别于Montanov 68/82等以长链鲸蜡硬脂醇为骨架的主乳化剂，因此Montanov S被定位为"共乳化剂"（co-emulsifier）——单独使用乳化能力较弱，但与主乳化剂搭配时可增强界面膜柔韧性、促进固体颗粒（如防晒剂）的分散。',
    en: 'A blend of Cocoglucoside (a shorter/medium-chain C8-16 alkyl group derived from coconut oil, condensed with glucose) with Coconut Alcohol (a shorter/medium-chain C12-18 fatty-alcohol mixture, also coconut-derived). Both components are coconut-derived and comparatively short-chain, unlike primary emulsifiers such as Montanov 68/82 that use long-chain cetearyl alcohol as their backbone — so Montanov S is positioned as a co-emulsifier: it has weaker emulsifying power on its own, but when paired with a primary emulsifier it increases interfacial-film flexibility and promotes dispersion of solid particles (e.g. UV filters).',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '作为共乳化剂稳定O/W体系的机制从何而来', en: 'Where its mechanism as a co-emulsifier stabilizing O/W systems comes from' },
      explanation: {
        zh: '椰油基葡糖苷与椰油醇的链长均短于典型主乳化剂（如Montanov 68的C16-18），单独成膜的刚性不足以支撑稳定乳液；但当其插入主乳化剂形成的层状液晶网络间隙时，短链的柔性可以填补长链堆积产生的空隙、降低界面膜的局部张力波动，从而与主乳化剂协同增强整体乳液稳定性——这正是"共乳化剂"而非独立主乳化剂的结构基础。',
        en: "Both Cocoglucoside and Coconut Alcohol have shorter chains than a typical primary emulsifier (e.g. Montanov 68's C16-18), so the film they form alone lacks the rigidity to support a stable emulsion on its own. But when they insert into the gaps of a primary emulsifier's lamellar liquid-crystal network, their shorter, more flexible chains fill in packing defects left by the longer chains and smooth out local interfacial-tension fluctuations — synergistically reinforcing overall emulsion stability alongside the primary emulsifier. This is the structural basis for its role as a co-emulsifier rather than a standalone primary emulsifier.",
      },
    },
    {
      aspect: { zh: '促进防晒剂（太阳滤光剂）分散的能力从何而来', en: 'Where the ability to promote UV-filter (solar filter) dispersion comes from' },
      explanation: {
        zh: '短-中链的糖苷/脂肪醇分子比长链体系具有更高的界面流动性，更容易包裹、锚定不规则形状的防晒剂颗粒（无机滤光剂）或高负载量的有机滤光剂分子，减少其聚集析出；供应商数据称其能带来"SPF随时间保持稳定"的效果，这与其提升防晒剂在体系内分散均匀度、降低团聚导致的局部SPF损失有关。',
        en: "The shorter/medium-chain glucoside and fatty-alcohol molecules have higher interfacial mobility than long-chain systems, making it easier for them to wrap around and anchor irregularly shaped inorganic UV-filter particles, or accommodate high loadings of organic filter molecules, reducing their tendency to aggregate and separate out. Supplier data describes an effect of keeping 'SPF stable over time,' which is consistent with improved, more even dispersion of the filters in the system and reduced localized SPF loss from aggregation.",
      },
    },
    {
      aspect: { zh: '对泡沫外观/触感的改变从何而来', en: 'Where the change in foam appearance/feel comes from' },
      explanation: {
        zh: '椰油基葡糖苷本身是一种常见的椰油基表面活性剂结构单元，具有一定起泡活性；作为共乳化剂添加到配方中时，其分子会在气液界面（而不仅是油水界面）竞争吸附，改变原有起泡体系的界面膜厚度与弹性，因此供应商数据提到其可改变泡沫的外观与肤感，这一效应源自其表面活性单元本身的两亲结构，而非乳化功能本身。',
        en: "Cocoglucoside is itself a common coconut-derived surfactant building block with some inherent foaming activity. When added to a formula as a co-emulsifier, its molecules also compete for adsorption at the air-liquid interface (not just the oil-water interface), altering the thickness and elasticity of an existing foam system's interfacial film — which is why supplier data notes it can change foam appearance and skin feel. This effect stems from the amphiphilic surfactant unit itself, not from its emulsifying function.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '作为共乳化剂用量通常较低，本身对整体肤感影响有限；供应商数据提及可改变泡沫体系的触感',
      en: 'used at typically low levels as a co-emulsifier, so its own contribution to overall skin feel is limited; supplier data notes it can alter the tactile feel of foaming systems',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '天然来源的共乳化剂，免防腐剂（preservative-free），通过ECOCERT、COSMOS、Natrue天然认证',
      en: 'naturally derived co-emulsifier, preservative-free, ECOCERT/COSMOS/Natrue approved',
    },
    {
      zh: '与化学（有机）及矿物（无机）防晒剂均相容，供应商数据称有助于SPF随时间保持稳定',
      en: 'compatible with both chemical (organic) and mineral (inorganic) UV filters; supplier data credits it with helping keep SPF stable over time',
    },
    {
      zh: '兼具改变泡沫外观/肤感的功能，可用于个人护理起泡配方的质地调整',
      en: 'also functions to modify foam appearance/skin feel, useful for texture tuning in personal-care foaming formulas',
    },
  ],
  weaknesses: [
    {
      zh: '为共乳化剂而非独立主乳化剂，单独使用时乳化能力有限，需与其他乳化剂（如Montanov系列主乳化剂）配合使用',
      en: 'a co-emulsifier rather than a standalone primary emulsifier — limited emulsifying power on its own, and needs to be paired with another emulsifier (e.g. a primary Montanov-family emulsifier)',
    },
    {
      zh: '公开可查的HLB值、推荐用量百分比及外观数据稀少，供应商官网（seppic.com）为JS渲染/受保护页面，本次研究未能直接抓取到完整数值型TDS数据',
      en: 'publicly available HLB, use-level percentage, and appearance data are scarce; the supplier\'s own page (seppic.com) is a JS-rendered/protected page and this research pass could not directly fetch a full numeric TDS',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '防晒配方（搭配主乳化剂）', en: 'sun care formulas (paired with a primary emulsifier)' },
      notes: { zh: '促进有机/无机防晒剂的分散与SPF稳定性', en: 'promotes dispersion of organic/inorganic UV filters and SPF stability' },
    },
    {
      system: { zh: '起泡类个人护理配方', en: 'foaming personal-care formulas' },
      notes: { zh: '用作泡沫质构调节剂', en: 'used as a foam-texture modifier' },
    },
    {
      system: { zh: '各类O/W乳化体系（作为共乳化剂）', en: 'general O/W emulsion systems (as a co-emulsifier)' },
    },
  ],
  relatedIngredientSlugs: ['montanov-82', 'montanov-l', 'montanov-68'],
  citations: [
    {
      id: 'search-montanovs-seppic-summary',
      supplier: 'Seppic (indexed excerpt, seppic.com product page)',
      documentTitle: 'MONTANOV S — Universal natural O/W co-emulsifier (seppic.com/product/montanov-s)',
      url: 'https://www.seppic.com/product/montanov-s',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name (Cocoglucoside (and) Coconut Alcohol), product description (co-emulsifier of natural origin, stabilizes O/W emulsions, promotes dispersion of solar filters, compatible with chemical filters and mineral screens, SPF stable over time, changes foam appearance/feel, preservative-free), and certifications (ECOCERT, COSMOS, Natrue). Direct fetch of this JS-rendered/CAPTCHA-protected page returned no usable content in this session (confirmed via two fetch attempts, including via a text-extraction proxy); facts drawn from the search-engine-indexed summary of the page content, not independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'knowde-montanovs-listing',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'MONTANOV S — SEPPIC — Coco-Glucoside — Co-Emulsifier — COSMOS product listing',
      url: 'https://www.knowde.com/stores/seppic-inc/products/montanov-s',
      accessedDate: '2026-08-06',
      note: 'Cross-reference listing confirming Montanov S is explicitly categorized as a "Co-Emulsifier" (not a primary emulsifier) with Coco-Glucoside as a lead INCI component; direct fetch returned empty/unusable content in this session (JS-rendered page).',
    },
    {
      id: 'ulprospector-montanovs-listing',
      supplier: 'UL Prospector',
      documentTitle: 'MONTANOV S by SEPPIC — Personal Care & Cosmetics listing',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/1432/46816/MONTANOV-S',
      accessedDate: '2026-08-06',
      note: 'Cross-reference listing found via search corroborating Montanov S as a Seppic co-emulsifier product; direct fetch returned HTTP 403 in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh'],
  lastUpdated: '2026-08-06',
})
