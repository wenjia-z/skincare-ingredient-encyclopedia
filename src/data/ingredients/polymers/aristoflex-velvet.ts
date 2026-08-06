import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'aristoflex-velvet',
  category: 'polymer',
  inciName: 'Polyacrylate Crosspolymer-11',
  nameZh: '聚丙烯酸酯交联聚合物-11',
  tradeNames: [{ name: 'Aristoflex Velvet', supplier: 'Clariant' }],
  chemicalClass: {
    zh: '合成阴离子交联丙烯酸酯类聚合物（牛磺酸酯类，预中和即用型流变改性剂）',
    en: 'Synthetic anionic crosslinked acrylate polymer (taurate-type, pre-neutralized ready-to-use rheology modifier)',
  },
  chemicalStructureSummary: {
    zh: '基于甲基丙烯酸、丙烯酰基二甲基牛磺酸（acryloyl dimethyltaurate）与二甲基丙烯酰胺的共聚物，以PPG-3甘油三丙烯酸酯交联，并用氨部分中和。丙烯酰基二甲基牛磺酸单元带有强酸性磺酸基（-SO3⁻），相较传统聚丙烯酸类聚合物依赖的弱酸性羧基（-COOH/-COO⁻），磺酸基在很宽的pH范围内都保持解离/带电状态，因而聚合物无需像卡波姆那样依赖特定中和度才能保持链伸展与增稠能力。产品以预中和形式提供，遇水或油相均可分散，属于新一代无需额外中和步骤的"即用型"丙烯酸酯类流变改性剂。',
    en: 'A copolymer of methacrylic acid, acryloyl dimethyltaurate, and dimethylacrylamide, crosslinked with PPG-3 glyceryl triacrylate and partially neutralized with ammonia. The acryloyl dimethyltaurate unit carries a strong-acid sulfonate group (-SO3⁻); unlike the weak-acid carboxyl group (-COOH/-COO⁻) that traditional polyacrylate/Carbomer-type polymers depend on, the sulfonate group stays ionized/charged across a much wider pH range, so the polymer does not need a specific neutralization degree (the way Carbomer does) to keep its chains extended and thickening. It is supplied pre-neutralized and can be dispersed into either the water or the oil phase — positioning it as a next-generation, ready-to-use acrylate rheology modifier that skips the separate neutralization step.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '宽pH/耐电解质稳定性从何而来', en: 'Where the broad pH / electrolyte stability comes from' },
      explanation: {
        zh: '磺酸基属强酸基团，其解离状态几乎不受体系pH或盐离子屏蔽（德拜屏蔽）的影响——不同于传统卡波姆完全依赖羧酸根静电排斥（高盐/极端pH下电荷被屏蔽、链蜷缩、粘度骤降）的机制，因此Aristoflex Velvet能在更宽的pH与电解质条件下维持增稠/稳定网络，这也是供应商强调其"耐盐"特性的结构基础。',
        en: 'The sulfonate group is a strong acid whose ionization state is largely unaffected by system pH or ionic-strength (Debye) screening — unlike plain Carbomer, which relies entirely on carboxylate electrostatic repulsion that collapses (charges screened, chains re-coil, viscosity drops) at high salt or extreme pH. This is the structural basis for Aristoflex Velvet maintaining its thickening/stabilizing network across a wider pH and electrolyte window, and the basis for the supplier\'s "salt tolerance" claim.',
      },
    },
    {
      aspect: { zh: '免中和、即用性从何而来', en: 'Where the no-neutralization, ready-to-use property comes from' },
      explanation: {
        zh: '产品在生产阶段即已用氨部分中和，链上磺酸/羧酸基团已处于带电伸展所需的电荷状态，配方师加入体系后无需再额外滴加碱剂中和即可直接呈现增稠效果，相较传统卡波姆的人工中和步骤（易过碱、裹入气泡）显著简化了生产工艺。',
        en: 'Because the polymer is already partially neutralized with ammonia during manufacture, the sulfonate/carboxyl groups on the chain are already in the charged, extended state needed for thickening — so once added to a formula it thickens immediately, with no separate alkali-addition/neutralization step required. This considerably simplifies manufacturing compared with plain Carbomer, which is manually neutralized on the bench (a step prone to local over-alkalinization or air entrainment).',
      },
    },
    {
      aspect: { zh: '丝绒般"熔融"肤感从何而来', en: 'Where the velvety "melting" skin feel comes from' },
      explanation: {
        zh: '二甲基丙烯酰胺单元的引入使交联网络相对疏松、柔顺，不同于纯聚丙烯酸类交联网络的"弹性凝胶感"，涂抹时网络在剪切下更易断裂重组、贴合皮肤表面，因而呈现供应商所述"涂抹时逐渐熔化、留下丝绒柔滑肤感"的独特肤感，区别于传统卡波姆凝胶更挺括的质地。',
        en: "The inclusion of dimethylacrylamide comonomer units gives the crosslinked network a comparatively looser, more supple character than a purely polyacrylic-acid crosslinked gel's springy, elastic feel — under the shear of application, the network breaks and reforms more readily and conforms closely to the skin surface, producing the supplier-described sensation of the product \"gently melting\" on application and leaving a velvety-soft feel, distinct from the firmer, more elastic gel texture of plain Carbomer.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述涂抹时逐渐"熔化"，留下丝绒柔滑、滋润不粘腻的肤感；可分散于油相或水相，配方形式灵活',
      en: 'described by the supplier as gently "melting" on application, leaving a velvety-soft, moisturized, non-tacky feel; can be dispersed into either the oil or water phase for flexible formulating',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身并非传统意义乳化剂，但其交联网络可为"无乳化剂"体系（emulsifier-free cream gel）提供物理稳定作用，常见于低油相、清爽质地配方',
      en: 'not a conventional emulsifier itself, but its crosslinked network can physically stabilize "emulsifier-free" cream-gel systems, commonly used in low-oil, light-textured formulas',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '不含环氧乙烷、不含防腐剂，预中和即用，可分散于油相或水相，工艺灵活简化',
      en: 'EO-free and preservative-free, pre-neutralized and ready-to-use, dispersible into either the oil or water phase — flexible and simplified processing',
    },
    {
      zh: '强酸性磺酸基结构带来优于传统弱酸型丙烯酸类聚合物（如普通卡波姆）的耐盐/耐电解质性能',
      en: 'the strong-acid sulfonate structure gives better salt/electrolyte tolerance than weak-acid polyacrylic-type polymers such as plain Carbomer',
    },
    {
      zh: '独特的丝绒感与"熔化式"涂抹体验，适合精华、乳液等强调肤感的高端配方',
      en: 'a distinctive velvety, "melting" application experience, suited to serums, lotions, and other sensory-forward premium formulas',
    },
  ],
  weaknesses: [
    {
      zh: '具体推荐用量、粘度及详细pH稳定范围等定量数据未能从可公开访问的资料中确认，正式采用前建议向Clariant索取TDS核实',
      en: 'specific recommended use level, viscosity, and detailed pH-stability range could not be confirmed from publicly accessible sources — a formal TDS from Clariant should be requested before production use',
    },
    {
      zh: '属合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '作为相对较新的产品线，第三方配方案例与文献积累仍少于卡波姆、Sepimax ZEN等成熟原料',
      en: 'as a comparatively newer product line, third-party formulation case studies and published literature are still more limited than for established polymers like Carbomer or Sepimax ZEN',
    },
  ],
  suitableSystems: [
    { system: { zh: '透明凝胶与精华', en: 'clear gels and serums' } },
    { system: { zh: '乳液/乳霜及无乳化剂啫喱膏体', en: 'lotions/creams and emulsifier-free cream-gel systems' } },
    { system: { zh: '化妆水、防晒及彩妆产品', en: 'toners, sun care, and color cosmetics' } },
  ],
  regulatoryNotes: {
    zh: '供应商标注素食（Vegan）与清真（Halal）认证',
    en: 'supplier lists Vegan and Halal certification',
  },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'sepimax-zen', 'simulgel-eg'],
  citations: [
    {
      id: 'specialchem-aristoflex-velvet-tds',
      supplier: 'Clariant (via SpecialChem)',
      documentTitle: 'Aristoflex Velvet — Technical Datasheet',
      url: 'https://cosmetics.specialchem.com/product/i-clariant-aristoflex-velvet',
      accessedDate: '2026-08-05',
      note: 'Accessed via a text-extraction proxy since direct fetch returned HTTP 403; used for INCI, general performance claims, applications, and skin-feel language. The full quantitative datasheet (use level, pH, viscosity) is behind a login gate and was not accessible.',
    },
    {
      id: 'incidecoder-polyacrylate-crosspolymer-11',
      supplier: 'INCIDecoder (reproducing the CosIng entry)',
      documentTitle: 'Polyacrylate Crosspolymer-11 — ingredient composition',
      url: 'https://incidecoder.com/ingredients/polyacrylate-crosspolymer-11',
      accessedDate: '2026-08-05',
      note: 'Used for the chemical composition/structure description (methacrylic acid / acryloyl dimethyltaurate / dimethylacrylamide copolymer, crosslinked with PPG-3 glyceryl triacrylate, ammonia-neutralized), sourced from the official CosIng INCI definition as reproduced on this page.',
    },
    {
      id: 'ulprospector-aristoflex-velvet',
      supplier: 'Clariant (via UL Prospector)',
      documentTitle: 'Aristoflex Velvet — product listing',
      url: 'https://www.ulprospector.com/en/na/PersonalCare/Detail/1022/238732/Aristoflex-Velvet',
      accessedDate: '2026-08-05',
      note: 'Listing confirms trade name/supplier and application categories; the page required CAPTCHA verification and did not yield further quantitative data.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-05',
})
