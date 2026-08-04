import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'olivem-1000',
  category: 'emulsifier',
  inciName: 'Cetearyl Olivate (and) Sorbitan Olivate',
  nameZh: '鲸蜡硬脂醇橄榄油酸酯（和）失水山梨醇橄榄油酸酯',
  tradeNames: [{ name: 'Olivem 1000', supplier: 'Hallstar' }],
  chemicalClass: {
    zh: '橄榄油脂肪酸酯类非离子乳化剂（PEG-free）',
    en: 'Non-ionic, PEG-free olive-oil fatty acid ester emulsifier blend',
  },
  chemicalStructureSummary: {
    zh: '由两种橄榄油脂肪酸酯组成的复配体系：鲸蜡硬脂醇橄榄油酸酯（C16-18脂肪醇与橄榄油脂肪酸的酯，亲油性蜡状固体）与失水山梨醇橄榄油酸酯（失水山梨醇与橄榄油脂肪酸的酯，类似Span型的较亲水组分）。两者在水相中共结晶，于油水界面自组装形成层状液晶结构，是一种"仿生"乳化体系，结构上模拟角质层脂质双分子层排列。',
    en: 'A two-component olive-oil fatty acid ester blend: Cetearyl Olivate (an ester of C16-18 fatty alcohol with olive-oil fatty acids — a waxy, lipophilic solid) and Sorbitan Olivate (an ester of sorbitan with olive-oil fatty acids — a more hydrophilic, Span-type component). The two co-crystallize with water at the oil-water interface, self-assembling into a lamellar liquid-crystal structure that biomimetically resembles the lipid bilayer arrangement of the stratum corneum.',
  },
  hlb: 9,
  appearance: {
    zh: '类白色至象牙色蜡状薄片，熔点约65-75°C',
    en: 'off-white to ivory waxy flakes, melting point approx. 65-75°C',
  },
  performance: {
    skinFeel: {
      zh: '肤感丰润、带轻微蜡感，滋润度高；用量偏高时可能略显厚重',
      en: 'rich, slightly waxy skin feel with high moisturization; can feel heavier at higher use levels',
    },
    pillingTendency: 'medium',
    pillingNotes: {
      zh: '与其他成膜性/蜡质成分（如高分子量硅油、部分聚合物）叠加使用时搓泥风险上升',
      en: 'pilling risk increases when layered with other film-forming or waxy ingredients (e.g. high-MW silicones, some polymers)',
    },
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '自成液晶网络结构，兼具乳化与稳定/增稠功能，可减少对额外增稠剂的依赖',
      en: 'self-forms a liquid-crystal network that combines emulsification with stabilizing/thickening function, reducing reliance on separate thickeners',
    },
    {
      zh: 'PEG-free、非离子，天然来源（橄榄油），符合ECOCERT/COSMOS等天然认证要求',
      en: 'PEG-free, non-ionic, naturally derived from olive oil — compatible with ECOCERT/COSMOS natural certification requirements',
    },
    {
      zh: '仿生层状结构与皮肤脂质排列相似，理论上有利于降低刺激性、改善屏障相容性',
      en: 'biomimetic lamellar structure resembles skin lipid organization, theoretically supporting lower irritation potential and barrier compatibility',
    },
  ],
  weaknesses: [
    {
      zh: '为蜡状固体，需加热两相（约70°C）进行热法乳化，工艺能耗较高',
      en: 'a waxy solid requiring hot-process emulsification (~70°C for both phases), which is more energy-intensive than cold-process options',
    },
    {
      zh: 'HLB约9，属中等偏低，处理高油相或强电解质配方时可能需要复配其他乳化剂',
      en: 'HLB of ~9 is moderate; high oil-phase or high-electrolyte formulas may require a co-emulsifier',
    },
    {
      zh: '肤感偏丰润厚重，不太适合追求清爽轻薄肤感的精华类产品',
      en: 'the rich, emollient skin feel is less suited to lightweight serum formats aiming for a light finish',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳霜 / 乳液', en: 'O/W cream / lotion' },
      notes: {
        zh: '经典应用场景，油相占比可达约20-25%而无需额外复配乳化剂',
        en: 'classic use case; can support up to ~20-25% oil phase without a co-emulsifier',
      },
    },
    {
      system: { zh: '滋润型精华/屏障修复配方', en: 'rich serum / barrier-repair formulas' },
      notes: { zh: '低用量（约3-4%）用于偏滋润型精华', en: 'lower use level (~3-4%) for richer serum formats' },
    },
  ],
  typicalUseLevel: { min: 3, max: 8, unit: '%' },
  relatedIngredientSlugs: ['montanov-68'],
  citations: [
    {
      id: 'wsp-olivem1000-tds',
      supplier: 'Wholesale Supplies Plus',
      documentTitle: 'Olivem 1000 — Product & Technical Data Page',
      url: 'https://www.wholesalesuppliesplus.com/products/olivem-1000',
      accessedDate: '2026-08-04',
      note: 'Distributor-hosted technical summary of Hallstar Olivem 1000; the manufacturer TDS at hallstarbeauty.com returned HTTP 403 (bot protection) when fetched directly.',
    },
    {
      id: 'dauphine-olivem1000-tds',
      supplier: 'Dauphine Organics',
      documentTitle: 'Olivem 1000 — Technical Data',
      url: 'https://dauphineorganics.com/shop/olivem-1000/',
      accessedDate: '2026-08-04',
      note: 'Second distributor source used to cross-check melting point, use level, and pH range.',
    },
    {
      id: 'kalochem-olivem1000-hlb',
      supplier: 'Kalochem Cosmetics',
      documentTitle: 'OLIVEM 1000 - Technical Data (PDF)',
      url: 'https://cosmetics.kalochem.shop/product_files/04-08-22-0901/16596036650629OLIVEM%201000%20-%20Technical%20Data.pdf',
      accessedDate: '2026-08-04',
      note: 'HLB=9 value found via web search indexing of this PDF; direct fetch was blocked (HTTP 403), so this figure is not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'nameZh'],
  lastUpdated: '2026-08-04',
})
