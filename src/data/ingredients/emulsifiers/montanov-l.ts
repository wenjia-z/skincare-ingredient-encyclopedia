import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'montanov-l',
  category: 'emulsifier',
  inciName: 'C14-22 Alcohols (and) C12-20 Alkyl Glucoside',
  nameZh: 'C14-22醇（和）C12-20烷基葡糖苷',
  tradeNames: [{ name: 'Montanov L', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子乳化剂，宽碳链范围版本',
    en: 'Alkyl polyglucoside (APG) non-ionic emulsifier, broad-chain-length variant',
  },
  chemicalStructureSummary: {
    zh: '由一系列C14-22脂肪醇与C12-20烷基糖苷复配而成，二者均为宽碳链范围的混合物，而非单一链长（不同于Montanov 68的C16-18或Montanov 202的C20-22）。糖苷型头基不含聚氧乙烯链，亲水性来自葡萄糖环上的多羟基结构；与Montanov 68/202同属Seppic"液晶促进剂"产品家族，但因烷基链长分布更宽、平均链长偏短，结晶度较低，是该系列中定位于"轻盈质地"的成员。',
    en: 'A blend of a range of C14-22 fatty alcohols with C12-20 alkyl glucoside, both components being broad-chain-length mixtures rather than a single chain length (unlike Montanov 68\'s C16-18 or Montanov 202\'s C20-22). The glucoside head group contains no ethoxylate chain; its hydrophilicity comes from the multiple hydroxyl groups on the glucose ring. It belongs to the same Seppic "liquid-crystal promoter" family as Montanov 68/202, but its wider alkyl chain-length distribution and shorter average chain length give lower crystallinity, positioning it as the lighter-texture member of the line.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '从流体喷雾到乳霜/膏体的质地跨度从何而来', en: 'Where the spray-to-butter texture range comes from' },
      explanation: {
        zh: 'C14-22醇与C12-20烷基糖苷均为宽分布的碳链混合物，其中包含比Montanov 68（C16-18）更短的链段；较短链段的存在降低了体系整体的结晶度与熔点，使配方师可以通过调整油相类型、油相占比来自由调控最终质地，覆盖从稀薄喷雾到厚重膏体的宽范围，而不必更换乳化剂本身。',
        en: 'Both the C14-22 alcohol blend and the C12-20 alkyl glucoside are wide-distribution chain mixtures that include shorter segments than Montanov 68\'s C16-18 chains; the presence of these shorter chains lowers the overall crystallinity and melting point of the system, letting a formulator freely tune the final texture — from thin sprays to thick butters — purely by adjusting oil type and oil-phase level, without needing to switch emulsifiers.',
      },
    },
    {
      aspect: { zh: '液晶网络与"超白"乳液外观从何而来', en: 'Where the liquid-crystal network and the "ultra-white" emulsion appearance come from' },
      explanation: {
        zh: '与同系列产品一样，脂肪醇与同源糖苷在水中共结晶排列成层状液晶网络，在界面上形成规整、致密的多层膜；这种结构不仅通过屈服应力物理性抑制油滴聚并（提供稳定与增稠功能），高度有序的液晶层还会对可见光产生较强散射，是供应商所描述"超白"乳液外观的结构基础。',
        en: 'As with the rest of the family, the fatty alcohols and matching-chain glucoside co-crystallize in water into a lamellar liquid-crystal network, forming a regular, dense multilayer film at the interface. This structure not only physically suppresses droplet coalescence via yield stress (providing stability/thickening) but the highly ordered liquid-crystal layers also scatter visible light strongly — the structural basis for the supplier-described "ultra-white" emulsion appearance.',
      },
    },
    {
      aspect: { zh: '保湿修护感（降低TEWL）从何而来', en: 'Where the moisturizing/barrier-supporting feel (reduced TEWL) comes from' },
      explanation: {
        zh: '糖苷头基的多羟基结构本身具有较强吸湿保水能力，液晶网络中又结合了大量水分；涂抹后在皮肤表面留下的水合层状膜层，是供应商所称"具修护作用、降低经皮水分流失、长效保湿"等描述的结构基础，这一机理与同系列的Montanov 68/202一致。',
        en: 'The glucoside head\'s multi-hydroxyl structure is itself strongly hygroscopic, and the liquid-crystal network also binds substantial water. The hydrated lamellar film left on skin after application is the structural basis for the supplier\'s claims of a "restructuring effect," reduced TEWL, and long-lasting moisturization — the same mechanism as the rest of the Montanov 68/202 family.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '轻盈、超柔和的质地，肤感清爽不厚重',
      en: 'light, ultra-soft texture with a non-heavy, non-greasy skin feel',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '天然来源、糖苷型非离子乳化剂，不含PEG/聚氧乙烯链，免用防腐剂配方友好（供应商数据：preservative-free）',
      en: 'naturally derived, glucoside-type non-ionic emulsifier, PEG-free, and formulation-friendly for preservative-free systems (supplier data: preservative-free)',
    },
    {
      zh: '质地可覆盖喷雾、乳液、乳霜到膏体等多种剂型，用途广泛（身体、面部、护肤、防晒、护发、洁肤、彩妆）',
      en: 'covers a wide texture range from sprays, lotions, and creams to butters, with broad applicability (body, face, skincare, sun care, hair care, hygiene, makeup)',
    },
    {
      zh: '通过COSMOS、NATRUE天然认证，同时具备HALAL、VEGAN及Mass Balance（RSPO）认证',
      en: 'COSMOS and NATRUE natural-cosmetics approved, plus HALAL, VEGAN, and Mass Balance (RSPO) certifications',
    },
  ],
  weaknesses: [
    {
      zh: '公开可查的HLB值与推荐用量百分比数据稀少，供应商官网（seppic.com）为JS渲染页面，本次研究未能直接抓取到完整数值型TDS数据',
      en: 'publicly available HLB value and recommended-use-level percentage data are scarce; the supplier\'s own page (seppic.com) is a JS-rendered SPA and this research pass could not directly fetch a full numeric TDS',
    },
    {
      zh: '与Montanov 68/202同属液晶促进剂家族，若配方需要冷法乳化，仍可能需要评估其加热乳化的工艺要求',
      en: 'like Montanov 68/202, it belongs to the liquid-crystal-promoter family, so cold-process formulations may still need to evaluate its hot-emulsification process requirements',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '喷雾/流体乳液', en: 'sprays / fluid lotions' },
      notes: { zh: '较低粘度质地，适合喷雾及流体身体乳', en: 'lower-viscosity textures suited to sprays and fluid body lotions' },
    },
    {
      system: { zh: 'O/W 乳霜/膏体', en: 'O/W creams / butters' },
      notes: { zh: '通过调整油相占比可制成厚重膏体质地', en: 'can be formulated into thick, buttery textures by adjusting oil-phase level' },
    },
    {
      system: { zh: '防晒、彩妆及护发配方', en: 'sun care, color cosmetics, and hair care formulas' },
    },
  ],
  relatedIngredientSlugs: ['montanov-68', 'montanov-202', 'montanov-82', 'olivem-1000'],
  citations: [
    {
      id: 'knowde-montanovl-listing',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'MONTANOV L — SEPPIC — C12-20 Alkyl Glucoside — Emulsifier product listing',
      url: 'https://www.knowde.com/stores/seppic-inc/products/montanov-l',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name confirmation (C14-22 Alcohols (and) C12-20 Alkyl Glucoside). Direct fetch of this JS-rendered page returned no extractable content in this session; facts drawn from the search-engine-indexed summary of the page.',
    },
    {
      id: 'search-montanovl-seppic-summary',
      supplier: 'Seppic (indexed excerpt, seppic.com product page)',
      documentTitle: 'MONTANOV L — Product page (seppic.com/product/montanov-l)',
      url: 'https://www.seppic.com/product/montanov-l',
      accessedDate: '2026-08-06',
      note: 'Used for product description, benefits (liquid-crystal promoter, ultra-white emulsions, spray-to-butter textures, restructuring/TEWL-reduction, moisturizing), applications, and certifications (China compliant, COSMOS, NATRUE, HALAL, VEGAN, Mass Balance). Direct fetch of this JS-rendered/CAPTCHA-protected page returned no usable content in this session (confirmed via two fetch attempts, including via a text-extraction proxy); facts drawn from the search-engine-indexed summary of the page content, not independently confirmed first-hand — see flaggedFields.',
    },
    {
      id: 'ulprospector-montanovl-listing',
      supplier: 'UL Prospector',
      documentTitle: 'MONTANOV L by SEPPIC — Personal Care & Cosmetics listing',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/1432/46815/MONTANOV-L',
      accessedDate: '2026-08-06',
      note: 'Cross-reference listing found via search confirming Montanov L as a distinct Seppic O/W emulsifier product; direct fetch returned HTTP 403 in this session.',
    },
    {
      id: 'note-inci-cross-check',
      supplier: 'Internal research note',
      documentTitle: 'INCI cross-check note',
      accessedDate: '2026-08-06',
      note: 'This entry\'s INCI (C14-22 Alcohols (and) C12-20 Alkyl Glucoside) is independently corroborated by this project\'s own montanov-202.ts entry, whose citations record that this composition was verified (via directly-fetched Lotioncrafter/Humblebee & Me sources) to belong to Montanov L, not Montanov 202.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh'],
  lastUpdated: '2026-08-06',
})
