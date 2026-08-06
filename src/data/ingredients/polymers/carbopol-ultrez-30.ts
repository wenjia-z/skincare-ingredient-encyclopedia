import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'carbopol-ultrez-30',
  category: 'polymer',
  inciName: 'Carbomer',
  nameZh: '卡波姆',
  tradeNames: [{ name: 'Carbopol Ultrez 30', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '交联聚丙烯酸均聚物（非疏水改性；与Carbopol 980同属经典卡波姆化学，但交联/聚合工艺经过优化，赋予更宽pH适用范围与更高耐电解质能力，同时具备Ultrez系列的易分散粉末特性）',
    en: 'Crosslinked polyacrylic acid homopolymer (not hydrophobically modified — same base chemistry family as Carbopol 980, but with an optimized crosslinking/polymerization process that gives it a broader usable pH range and better electrolyte tolerance, while also carrying the Ultrez series\' easy-to-disperse powder trait)',
  },
  chemicalStructureSummary: {
    zh: '与Carbopol 980一样，Ultrez 30是交联聚丙烯酸均聚物，供应商明确说明其为"交联聚丙烯酸均聚物"，不含Ultrez 20那样额外接枝的C10-30长链烷基丙烯酸酯疏水单体——即Ultrez 30与Ultrez 20虽同属"Ultrez"品牌、INCI同为Carbomer，但化学结构并不相同：Ultrez 20靠疏水缔合提升耐电解质能力，Ultrez 30则被供应商定位为通过优化的交联密度与聚合工艺，在不引入疏水基团的前提下实现宽pH区间（供应商数据：pH 4.0-12.0）与良好电解质耐受性。中和后，链上羧基转变为羧酸根，静电排斥驱动分子链伸展、束缚大量水分子形成凝胶，这一基础机制与经典卡波姆（如980）相同；区别在于Ultrez 30的粉末遇水润湿分散更快（供应商数据：润湿时间≤15分钟），继承了"Ultrez"系列自分散、易于操作的粉体特性，而不像980等经典等级需要谨慎撒粉分散。',
    en: "Like Carbopol 980, Ultrez 30 is a crosslinked polyacrylic acid homopolymer — the supplier explicitly describes it as a \"cross-linked homopolymer of polyacrylic acid,\" with none of the additional grafted C10-30 long-chain alkyl acrylate hydrophobic monomer that Ultrez 20 carries. In other words, although Ultrez 30 shares the \"Ultrez\" branding and the Carbomer INCI with Ultrez 20, the underlying chemistry differs: Ultrez 20 improves electrolyte tolerance via hydrophobic association, while Ultrez 30 is positioned by the supplier as achieving a broad usable pH range (supplier data: pH 4.0-12.0) and good electrolyte tolerance through an optimized crosslink density/polymerization process, without introducing hydrophobic groups. After neutralization, carboxyl groups on the chain convert to carboxylate, and electrostatic repulsion drives chain extension and water binding to form a gel — the same basic mechanism as classic Carbomer grades like 980. The difference is that Ultrez 30's powder wets and disperses in water faster (supplier data: wetting time ≤15 minutes), inheriting the \"Ultrez\" line's self-dispersing, easy-to-handle powder trait, unlike classic grades such as 980 that require careful sift-in dispersion.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '宽pH适用范围从何而来', en: 'Where the broad usable pH range comes from' },
      explanation: {
        zh: '经典卡波姆（如980）在偏低pH（接近羧基pKa≈4.5-6）时羧基解离不充分、增稠效果明显下降；Ultrez 30通过优化的交联密度与聚合工艺，在较低中和度下仍能维持较多羧基解离和链段伸展，因此供应商标注其可在低至pH4.0-4.5的酸性体系（如含AHA、水杨酸或有机酸防腐剂的配方）中保持增稠效果，适用范围（pH 4.0-12.0）明显宽于经典卡波姆。',
        en: "Classic Carbomer grades (like 980) show a clear drop in thickening at lower pH (near the carboxyl pKa of ~4.5-6) because the carboxyls aren't sufficiently ionized; Ultrez 30's optimized crosslink density/polymerization process maintains more carboxyl ionization and chain extension even at lower neutralization levels, so the supplier specifies it retains thickening down to pH 4.0-4.5 in acidic systems (e.g. formulas containing AHAs, salicylic acid, or organic-acid preservatives) — giving it a notably broader usable range (pH 4.0-12.0) than classic Carbomer grades.",
      },
    },
    {
      aspect: { zh: '相较Ultrez 20的耐电解质机制不同从何而来', en: 'Where the different (non-hydrophobic) electrolyte-tolerance mechanism vs. Ultrez 20 comes from' },
      explanation: {
        zh: 'Ultrez 20依靠链上额外接枝的C10-30长链烷基之间的疏水缔合，形成不依赖静电排斥的"物理交联点"来抵御盐屏蔽；Ultrez 30并不具备这一疏水结构，其电解质耐受性据信主要来自更高/更优化的交联密度——更密的交联网络本身对链段蜷缩的抵抗力更强，即使部分羧酸根电荷被电解质屏蔽，网络也不会像交联度较低的经典卡波姆那样迅速塌陷。这意味着两款Ultrez产品虽然品牌定位接近，但达成相似目标（宽电解质耐受）所依赖的分子结构机制并不相同。',
        en: "Ultrez 20 relies on hydrophobic association between its extra grafted C10-30 alkyl chains, forming \"physical crosslink points\" independent of electrostatic repulsion to resist salt screening. Ultrez 30 has no such hydrophobic structure; its electrolyte tolerance is understood to come mainly from a higher/optimized crosslink density — a denser crosslinked network inherently resists chain collapse more than a lower-crosslink classic Carbomer, so even when some carboxylate charge is screened by electrolytes, the network doesn't collapse as quickly. This means the two Ultrez products, despite similar brand positioning, achieve a similar goal (broad electrolyte tolerance) through different underlying structural mechanisms.",
      },
    },
    {
      aspect: { zh: '快速润湿分散从何而来', en: 'Where the fast wetting/dispersion comes from' },
      explanation: {
        zh: '供应商数据显示Ultrez 30润湿时间≤15分钟，明显快于需谨慎撒粉、易结块的经典卡波姆粉末；这通常与"Ultrez"系列粉末的颗粒形态/粒径分布优化有关（更均匀的颗粒表面遇水时不易迅速外层糊化包裹内部干粉、形成"鱼眼"结块），使其可以更快、更均匀地分散于水相，简化配方制备流程。',
        en: 'Supplier data shows Ultrez 30\'s wetting time is ≤15 minutes, notably faster than classic Carbomer powders that require careful sift-in addition to avoid clumping. This is generally attributed to particle-morphology/particle-size-distribution optimization in the "Ultrez" line of powders (a more uniform particle surface is less prone to quickly gelling into an outer layer that traps dry powder inside, forming "fisheye" clumps), letting it disperse into the water phase faster and more evenly and simplifying batch preparation.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '中和后呈"丰富且具辨识度"的凝胶质地（供应商用语），涂抹感与经典卡波姆有区别但仍属清爽、不粘腻',
      en: 'a "rich and distinct" gel texture once neutralized (supplier wording); a light, non-tacky feel on application, though texturally distinguishable from classic Carbomer grades',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身不是乳化剂；用作乳液稳定剂/流变改性剂时评级见下方悬浮稳定能力',
      en: 'not an emulsifier itself; see suspension/stabilization rating below for its role as an emulsion rheology modifier',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '宽pH适用范围（供应商数据：pH 4.0-12.0），在含AHA、水杨酸或酸性防腐剂等偏酸性配方中仍能保持增稠效果，是经典卡波姆的明显短板',
      en: 'broad usable pH range (supplier data: pH 4.0-12.0), retaining thickening in mildly acidic formulas containing AHAs, salicylic acid, or acidic preservatives — a clear weak point for classic Carbomer grades',
    },
    {
      zh: '良好电解质耐受性，且遇水快速润湿分散（供应商数据：润湿时间≤15分钟），操作便利性优于经典卡波姆',
      en: 'good electrolyte tolerance, plus fast wetting/dispersion in water (supplier data: wetting time ≤15 minutes) — more convenient to handle than classic Carbomer grades',
    },
    {
      zh: '高粘度增稠效率（供应商数据：0.2%粘液Brookfield粘度约45,000-65,000 cP），适用于防晒、止汗产品等多品类',
      en: 'high thickening efficiency (supplier data: Brookfield viscosity of a 0.2% mucilage ~45,000-65,000 cP), suited to sun care, antiperspirant/deodorant, and other varied product categories',
    },
  ],
  weaknesses: [
    {
      zh: '不具备Ultrez 20的疏水改性结构，无法通过配方参数在"长流变/短流变"之间自由切换，肤感可调性相对有限',
      en: 'lacks Ultrez 20\'s hydrophobic-modification structure, so it cannot be tuned between "long/short rheology" via formulation parameters the way Ultrez 20 can — comparatively limited skin-feel tunability',
    },
    {
      zh: '仍需中和（TEA、NaOH等）才能充分增稠，操作上需缓慢加入并持续搅拌',
      en: 'still requires neutralization (e.g. TEA, NaOH) to fully thicken; must be added slowly with continuous stirring',
    },
    {
      zh: '不具备乳化能力，仅作为流变改性/稳定剂使用，通常需与乳化剂复配',
      en: 'has no emulsifying capability on its own — used purely as a rheology modifier/stabilizer, typically paired with a separate emulsifier',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '含酸性活性物的配方（AHA、水杨酸、酸性防腐体系）', en: 'formulas with acidic actives (AHAs, salicylic acid, acidic-preservative systems)' },
      notes: { zh: '供应商数据：低至pH4.0-4.5仍可保持增稠', en: 'supplier data: retains thickening down to pH 4.0-4.5' },
    },
    {
      system: { zh: '止汗/除臭产品、防晒、手足护理', en: 'antiperspirant/deodorant products, sun care, hand/foot care' },
    },
    { system: { zh: '身体乳/膏霜、湿巾浸渍液、免洗手部消毒凝胶', en: 'body lotions/creams, wipe-impregnation lotions, hand sanitizer gels' } },
  ],
  typicalUseLevel: { min: 0.1, max: 0.2, unit: '%' },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'carbopol-980'],
  citations: [
    {
      id: 'knowde-ultrez30-tds',
      supplier: 'Lubrizol (via Knowde)',
      documentTitle: 'Carbopol® Ultrez 30 Polymer — Product Technical Data',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/carbopol-polymers-ultrez-30-polymer',
      accessedDate: '2026-08-06',
      note: 'Used for INCI (Carbomer), "cross-linked homopolymer of polyacrylic acid" chemical description (confirming it is not hydrophobically modified), appearance (white powder), use level (0.1-0.2 wt% in electrolyte-free systems), pH range (4.0-12.0), Brookfield viscosity (45,000-65,000 cP at 0.2% mucilage, 25°C), wetting time (≤15 min, test method TP-BRK-030), and application list. Lubrizol\'s own product page and SpecialChem/UL Prospector pages returned HTTP 403 when fetched directly.',
    },
    {
      id: 'cosmeticsbusiness-ultrez30-launch',
      supplier: 'CosmeticsBusiness (trade press)',
      documentTitle: 'Lubrizol launches Carbopol Ultrez 30 Polymer',
      url: 'https://cosmeticsbusiness.com/lubrizol-launches-carbopol-ultrez-30-polymer-87205',
      accessedDate: '2026-08-06',
      note: 'Used to corroborate positioning (broad pH range, electrolyte tolerance, "rich and distinct" sensory) and applications (antiperspirant/deodorant, body lotions/creams/gels, wipes, hand sanitizers, sun/hand/foot/face/eye care) found in the Knowde source.',
    },
  ],
  dataCompleteness: 'partial',
  lastUpdated: '2026-08-06',
})
