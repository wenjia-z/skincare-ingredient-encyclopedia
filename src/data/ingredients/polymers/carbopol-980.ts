import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'carbopol-980',
  category: 'polymer',
  inciName: 'Carbomer',
  nameZh: '卡波姆',
  tradeNames: [
    { name: 'Carbopol 980', supplier: 'Lubrizol' },
    { name: 'TEGO® Carbomer 140', supplier: 'Evonik' },
  ],
  chemicalClass: {
    zh: '传统（非疏水改性）交联聚丙烯酸均聚物——不含Ultrez系列所具备的C10-30长链烷基疏水接枝，是该疏水改性升级的基础对照产品',
    en: 'Classic (non-hydrophobically-modified) crosslinked polyacrylic acid homopolymer — lacks the C10-30 long-chain alkyl hydrophobic graft found in the Ultrez series, and is the baseline product that the Ultrez hydrophobic modification is an upgrade over',
  },
  chemicalStructureSummary: {
    zh: '由丙烯酸单体经多烯基交联剂聚合而成的交联聚丙烯酸均聚物，供应商标注其在"毒理学优选的助溶剂体系"中聚合生产（区别于早年以苯为溶剂的传统卡波姆工艺）。与本目录中的Carbopol Ultrez 20不同，980分子链上不含额外接枝的C10-30长链烷基丙烯酸酯疏水单体，是一条"纯"聚丙烯酸交联网络，不具备疏水缔合能力。中和后（如以TEA/NaOH），链上羧基转变为带负电的羧酸根，链间静电排斥驱动分子链充分伸展、大量束缚水分子，体积可溶胀至数百倍，形成清澈透明的水凝胶；由于缺少Ultrez系列的疏水缔合"物理交联点"，980的增稠/凝胶强度完全依赖静电排斥这一单一机制，因此耐电解质、耐表面活性剂能力低于Ultrez 20，且供应商粉末通常需要更谨慎的撒粉分散工艺（缓慢筛入水中并持续搅拌）以避免结块，不具备Ultrez系列标榜的"自分散、快速润湿"特性。',
    en: "A crosslinked polyacrylic acid homopolymer made by polymerizing acrylic acid monomer with a polyalkenyl crosslinker; the supplier states it is polymerized in a \"toxicologically preferred cosolvent system\" (distinct from the benzene-solvent process used for older-generation Carbomers). Unlike Carbopol Ultrez 20 elsewhere in this catalog, Carbopol 980's chain carries no additional grafted C10-30 long-chain alkyl acrylate hydrophobic monomer — it is a \"plain\" polyacrylic acid crosslinked network with no hydrophobic-association capability. After neutralization (e.g. with TEA/NaOH), the carboxyl groups on the chain convert to negatively charged carboxylate, and electrostatic repulsion between chains drives them to extend fully and bind large amounts of water, swelling hundreds of times in volume to form a clear, transparent hydrogel. Because it lacks the Ultrez series' hydrophobic-association \"physical crosslink points,\" Carbopol 980's thickening/gel strength relies entirely on this single electrostatic-repulsion mechanism, giving it lower electrolyte and surfactant tolerance than Ultrez 20; its powder also typically requires a more careful sift-and-disperse technique (slow addition into water under continuous agitation to avoid clumping/fisheyes) and does not carry the Ultrez series' \"self-dispersing, fast-wetting\" trait.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高效增稠能力从何而来', en: 'Where the high thickening efficiency comes from' },
      explanation: {
        zh: '980作为"高效"卡波姆等级，其交联密度与分子量经过优化，使中和后单位质量的聚合物能形成更致密、更大范围伸展的三维网络；供应商数据显示0.2%粘液的Brookfield粘度可达13,000-60,000 cP区间（视测试条件而定），说明极低用量下即可获得高粘度，这正是"高效"定位的直接体现。',
        en: 'As a "high-efficiency" Carbomer grade, 980\'s crosslink density and molecular weight are optimized so that, once neutralized, a given mass of polymer forms a denser, more extensively expanded 3D network. Supplier data shows a Brookfield viscosity of 13,000-60,000 cP for a 0.2% mucilage (depending on test conditions), meaning high viscosity is achievable at very low use levels — the direct expression of its "high-efficiency" positioning.',
      },
    },
    {
      aspect: { zh: '相较Ultrez 20耐电解质能力更弱从何而来', en: 'Where the lower electrolyte tolerance vs. Ultrez 20 comes from' },
      explanation: {
        zh: '980的增稠完全依赖羧酸根之间的静电排斥；高盐环境下体系中游离离子会屏蔽这些电荷（德拜屏蔽效应），排斥力骤减、链重新蜷缩，粘度大幅下降。Ultrez 20额外接枝的C10-30长链烷基之间可发生疏水缔合，形成不依赖静电排斥的"物理交联点"，即使电荷被盐屏蔽仍能部分维持网络——980不具备这一结构，因此耐电解质/耐表面活性剂能力明显逊于Ultrez 20，更适合电解质含量低的清澈凝胶体系而非高表活配方。',
        en: "980's thickening relies entirely on carboxylate-carboxylate electrostatic repulsion; in a high-salt environment, free ions screen these charges (Debye screening), repulsion collapses, and the chains re-coil, sharply dropping viscosity. Ultrez 20's additional grafted C10-30 alkyl chains can undergo hydrophobic association, forming \"physical crosslink points\" that don't depend on electrostatic repulsion and partially maintain the network even when charges are salt-screened. 980 lacks this structure, so its electrolyte/surfactant tolerance is markedly weaker than Ultrez 20's — making it better suited to low-electrolyte clear gels than high-surfactant formulas.",
      },
    },
    {
      aspect: { zh: '清澈度与轻盈肤感从何而来', en: 'Where the clarity and light skin feel come from' },
      explanation: {
        zh: '未经疏水改性的聚丙烯酸链在充分中和、伸展后形成高度均匀的水凝胶网络，链段间不存在疏水缔合区带来的光散射中心，因此凝胶透光率高、外观清澈；同时凝胶本身不含油脂类成分，涂抹后水分蒸发快，呈现供应商所述的"轻盈肤感"。',
        en: 'Once fully neutralized and extended, the non-hydrophobically-modified polyacrylic chain forms a highly uniform hydrogel network with no light-scattering centers from hydrophobic-association domains, giving the gel high transparency and a clear appearance; the gel itself contains no oily components, so water evaporates quickly on application, giving the supplier-described "light skin feel."',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '中和后呈清澈、轻盈的凝胶质地，涂抹后水感强、无油腻感',
      en: 'a clear, light gel texture once neutralized; a watery feel on application with no greasiness',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '本身不是乳化剂；作为乳液稳定剂/流变改性剂使用，见下方悬浮稳定能力评级',
      en: 'not an emulsifier itself; when used as an emulsion rheology modifier/stabilizer, see the suspension/stabilization rating below',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '高效增稠，极低用量下即可形成高粘度清澈凝胶（供应商数据：0.2%粘液Brookfield粘度13,000-60,000 cP区间，视测试条件而定）',
      en: 'highly efficient thickening — forms high-viscosity, clear gels at very low use levels (supplier data: Brookfield viscosity of a 0.2% mucilage spans 13,000-60,000 cP depending on test conditions)',
    },
    {
      zh: '凝胶清澈度高，是透明啫喱、免洗手部消毒凝胶等强调外观通透度产品的经典基础增稠剂',
      en: 'high gel clarity — a classic go-to thickener for clear gels, leave-on hand sanitizer gels, and other products where visual transparency matters',
    },
    {
      zh: '相较更早一代（苯溶剂工艺）卡波姆，采用供应商所述"毒理学优选的助溶剂体系"聚合生产',
      en: 'compared with older-generation (benzene-solvent-process) Carbomers, produced via what the supplier describes as a "toxicologically preferred cosolvent system"',
    },
  ],
  weaknesses: [
    {
      zh: '不含疏水改性接枝，耐电解质/耐表面活性剂能力明显低于Ultrez 20，高盐或高表活体系中粘度损失较大',
      en: 'lacking the hydrophobic-modification graft, its electrolyte/surfactant tolerance is markedly lower than Ultrez 20\'s — significant viscosity loss in high-salt or high-surfactant systems',
    },
    {
      zh: '粉末分散时需谨慎撒粉、持续搅拌，操作不当容易结块（"鱼眼"），不具备Ultrez系列标榜的自分散、快速润湿特性',
      en: 'the powder requires careful sift-in dispersion with continuous stirring; improper addition easily causes clumping ("fisheyes") — it lacks the self-dispersing, fast-wetting trait the Ultrez series is marketed for',
    },
    {
      zh: '仍需额外中和（TEA、NaOH等）才能充分增稠，操作步骤和pH控制要求较高',
      en: 'still requires separate neutralization (e.g. TEA, NaOH) to fully thicken, with correspondingly higher process-control and pH-control requirements',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '透明凝胶（啫喱、精华）', en: 'clear gels (gel-creams, serums)' },
    },
    {
      system: { zh: '免洗手部消毒凝胶', en: 'leave-on hand sanitizer gels' },
    },
    {
      system: { zh: '低电解质乳液/膏霜的稳定增稠', en: 'stabilizing/thickening of low-electrolyte emulsions and creams' },
    },
  ],
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'carbopol-ultrez-30', 'sodium-polyacrylate'],
  citations: [
    {
      id: 'knowde-carbopol980-tds',
      supplier: 'Lubrizol (via Knowde)',
      documentTitle: 'Carbopol® 980 Polymer — Product Technical Data',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/carbopol-polymers-980-polymer',
      accessedDate: '2026-08-06',
      note: 'Used for INCI (Carbomer), appearance (white powder), Brookfield viscosity specs (13,000-30,000 cP and 40,000-60,000 cP at 0.2% mucilage, 25°C), cosolvent-polymerization description, and application list. Lubrizol\'s own product page and SpecialChem/PharmaExcipients pages returned HTTP 403 / connection errors when fetched directly.',
    },
    {
      id: 'aneco-carbomer-structure-980',
      supplier: 'ANECO (industry technical article)',
      documentTitle: 'Carbomer in Cosmetics: Formulation Techniques, Texture Enhancement',
      url: 'https://www.anecochem.com/newsInfo-263.html',
      accessedDate: '2026-08-06',
      note: 'General technical literature (not Lubrizol-specific) used for the neutralization mechanism/pH-dependence explanation and general electrolyte-sensitivity reasoning common to unmodified Carbomer homopolymers.',
    },
    {
      id: 'thefreelibrary-tegocarbomer140g-tradename',
      supplier: 'Evonik (secondary trade-press coverage)',
      documentTitle: '"The latest carbomer from Evonik" — trade-press product note on TEGO® Carbomer 140 G',
      url: 'https://www.thefreelibrary.com/The+latest+carbomer+from+Evonik.-a0239658759',
      accessedDate: '2026-08-06',
      note: 'INCI for TEGO® Carbomer 140 (G) is reported as plain "Carbomer" — the same INCI as Carbopol 980 — so it is recorded here as an additional trade name rather than a separate entry. Snippet describes it as "an excellent viscosity adjuster, viscosity builder and emulsion stabilizer...soluble in both water and alcohol and can be used over a wide pH [range]." Corroborated by a second trade-press snippet (Cosmetics & Toiletries, "Improving Dispersion in Gels/Emulsions with Granulated Carbomer") describing the granulated 140 G grade as suited to "highly viscous emulsion production" and "transparent water- or alcohol-based gels." Direct fetch of both thefreelibrary.com and cosmeticsandtoiletries.com pages returned HTTP 403 in this session; content is from search-result snippets of these secondary/trade-press sources, not a fetched primary Evonik TDS — no primary Evonik TDS for plain (non-granulated) 140 could be located and fetched in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['typicalUseLevel'],
  lastUpdated: '2026-08-06',
})
