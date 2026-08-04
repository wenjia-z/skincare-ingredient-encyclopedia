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
  structureFunctionAnalysis: [
    {
      aspect: { zh: '乳化能力从何而来', en: 'Where the emulsification ability comes from' },
      explanation: {
        zh: '两种橄榄油酯的亲油尾链（源自橄榄油脂肪酸，以油酸为主）插入油相，而失水山梨醇/脂肪醇头基留在水相；两组分在界面共排列降低界面张力，同时因分子结构互补（一个偏亲油、一个偏亲水），复配后整体HLB约9，处于中等偏低区间——这正是其能以较低总用量稳定较高比例油相的结构基础。',
        en: 'The lipophilic tails of both olive-oil esters (mainly oleic-acid derived) insert into the oil phase, while the sorbitan/fatty-alcohol head groups sit in the water phase; the two components co-align at the interface to lower interfacial tension. Because the pair is structurally complementary (one more lipophilic, one more hydrophilic), the blended HLB lands at ~9, a moderate value — the structural basis for stabilizing a fairly high oil-phase fraction at a relatively low total dose.',
      },
    },
    {
      aspect: { zh: '悬浮/稳定能力从何而来', en: 'Where the suspension/stabilization ability comes from' },
      explanation: {
        zh: '鲸蜡硬脂醇橄榄油酸酯（蜡状固体）与水共结晶时会形成层状液晶（凝胶网络）而非简单胶束；这一网络本身具有一定屈服应力，能像"支架"一样物理性地限制油滴的布朗运动和聚并，因此乳化剂本身即兼具增稠/稳定功能，无需额外增稠剂即可获得良好的乳液稳定性。',
        en: 'When Cetearyl Olivate (a waxy solid) co-crystallizes with water, it forms a lamellar liquid-crystal gel network rather than simple micelles; this network has intrinsic yield stress and physically restrains droplet Brownian motion and coalescence like a scaffold — so the emulsifier itself provides thickening/stabilizing function without a separate thickener.',
      },
    },
    {
      aspect: { zh: '丰润肤感与搓泥倾向从何而来', en: 'Where the rich skin feel and pilling tendency come from' },
      explanation: {
        zh: '层状液晶网络含有较多结合水与蜡质成分，铺展时留下的膜层较厚，因此肤感丰润、滋润度高；但也正因为这层蜡质/液晶膜在皮肤表面残留，若叠加其他成膜性原料（高分子量硅油、部分成膜聚合物），多层膜相互摩擦、卷曲即容易出现"搓泥"现象。',
        en: 'The lamellar liquid-crystal network holds substantial bound water and waxy material, leaving a thicker residual film on application — hence the rich, moisturizing skin feel. That same residual wax/liquid-crystal film is also why layering with other film-forming ingredients (high-MW silicones, some film-forming polymers) raises pilling risk, as the stacked films abrade and roll up against each other.',
      },
    },
  ],
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
