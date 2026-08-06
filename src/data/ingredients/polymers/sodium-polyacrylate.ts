import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'sodium-polyacrylate',
  category: 'polymer',
  inciName: 'Sodium Polyacrylate',
  nameZh: '聚丙烯酸钠',
  tradeNames: [
    { name: 'Sodium Polyacrylate', supplier: 'MakingCosmetics' },
    { name: 'RHEOSOL AP', supplier: 'Rheolab' },
    { name: 'Cosmedia SP', supplier: 'BASF' },
  ],
  chemicalClass: {
    zh: '合成阴离子线性聚丙烯酸盐（非交联，区别于卡波姆类交联丙烯酸聚合物）',
    en: 'Synthetic anionic linear polyacrylate salt (non-crosslinked, distinct from crosslinked Carbomer-type acrylic polymers)',
  },
  chemicalStructureSummary: {
    zh: '聚丙烯酸的钠盐，由丙烯酸单体经自由基聚合、再以氢氧化钠中和羧基而成。与卡波姆（交联聚丙烯酸）或Sepimax ZEN、Sepiplus 400等交联/锚定型丙烯酸酯聚合物不同，聚丙烯酸钠通常是线性（未交联）链状分子；链上大量羧基已预先中和为羧酸根（-COO⁻），遇水溶解后链间同性电荷相互排斥，使分子链伸展并大量束缚水分子形成粘稠溶液/凝胶。根据聚合度不同，分子量可从数百（低聚物，用作分散剂/水处理剂）跨越到超过百万道尔顿（高分子量增稠/吸水树脂用途）。作为线性阴离子聚合物，其对电解质（盐）的敏感性通常高于具备疏水缔合或专利锚定结构的交联型丙烯酸酯聚合物。',
    en: "The sodium salt of polyacrylic acid, made by free-radical polymerization of acrylic acid monomer followed by neutralizing the carboxyl groups with sodium hydroxide. Unlike Carbomer (crosslinked polyacrylic acid) or the crosslinked/anchored acrylate polymers such as Sepimax ZEN or Sepiplus 400, sodium polyacrylate is typically a linear (non-crosslinked) chain molecule; its many carboxyl groups are already neutralized to carboxylate (-COO⁻), and once dissolved in water, like-charge repulsion between chains extends the polymer and binds large amounts of water into a viscous solution/gel. Depending on degree of polymerization, molecular weight can range from a few hundred daltons (oligomers used as dispersants/water-treatment agents) to well over a million daltons (high-molecular-weight thickening/superabsorbent uses). As a linear anionic polymer, its sensitivity to electrolytes (salt) is generally higher than crosslinked acrylate polymers that rely on hydrophobic association or a patented anchoring architecture.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增稠能力从何而来', en: 'Where the thickening ability comes from' },
      explanation: {
        zh: '聚丙烯酸钠链上的羧酸根彼此带同性负电荷，溶于水后链间静电排斥驱使原本卷曲的线性分子链伸展开来，伸展的长链占据更大流体力学体积、并通过氢键和静电作用束缚大量水分子，从而使体系粘度显著上升——这一机制与卡波姆的增稠原理相同，区别在于聚丙烯酸钠链本身不交联，也无需额外中和步骤（出厂时已是钠盐形式）。',
        en: 'The carboxylate groups on the sodium polyacrylate chain carry like negative charges; once dissolved in water, electrostatic repulsion between chains drives the otherwise coiled linear molecule to extend. The extended chain occupies a much larger hydrodynamic volume and binds large amounts of water via hydrogen bonding and electrostatic interaction, sharply raising system viscosity — the same underlying mechanism as Carbomer thickening, except the sodium polyacrylate chain itself is not crosslinked and needs no separate neutralization step (it is already supplied as the sodium salt).',
      },
    },
    {
      aspect: { zh: '相较交联型丙烯酸酯聚合物，为何更易受电解质影响', en: 'Why it is more electrolyte-sensitive than crosslinked acrylate polymers' },
      explanation: {
        zh: '由于链间没有共价交联点或疏水缔合位点作为"骨架支撑"，聚丙烯酸钠的粘度几乎完全依赖游离羧酸根之间的静电排斥；体系中加入盐类电解质后，游离离子会屏蔽（德拜屏蔽）这些负电荷间的排斥力，链段因此重新蜷缩、流体力学体积骤减，粘度明显下降——这也是配方中高盐/高电解质体系需谨慎评估其稳定性的结构原因。',
        en: "Because there are no covalent crosslinks or hydrophobic association points acting as a supporting 'skeleton' between chains, sodium polyacrylate's viscosity depends almost entirely on electrostatic repulsion between free carboxylate groups. Adding salt/electrolytes to the system lets free ions screen (Debye screening) that charge repulsion, causing the chain segments to re-coil and their hydrodynamic volume to collapse — visibly lowering viscosity. This is the structural reason formulators need to carefully evaluate its stability in high-salt/high-electrolyte systems.",
      },
    },
    {
      aspect: { zh: '高吸水性（超吸水树脂用途）从何而来', en: 'Where the high water absorbency (superabsorbent use) comes from' },
      explanation: {
        zh: '高分子量、高羧酸根密度的聚丙烯酸钠分子网络具有很强的渗透压驱动吸水能力——链间静电排斥使网络内部渗透压远高于外部纯水，驱动水分子持续向网络内部扩散并被截留，因此该类聚合物可吸收远超自身重量的水分，这是其在高吸水树脂、保湿凝胶片等应用中的结构基础。',
        en: "A high-molecular-weight, high-carboxylate-density sodium polyacrylate network has strong osmotic-pressure-driven water absorption: electrostatic repulsion between chains keeps the osmotic pressure inside the network far above that of the surrounding pure water, continuously drawing water molecules inward where they become trapped. This is why such polymers can absorb many times their own weight in water — the structural basis for superabsorbent-polymer and hydrating-gel-sheet applications.",
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '溶于水后呈粘稠透明凝胶/溶液，肤感相对清爽，成膜后略带紧绷感',
      en: 'forms a viscous, transparent gel/solution once dissolved in water; a relatively light, non-greasy feel with a slight tightening sensation once a film forms',
    },
    pillingTendency: 'medium',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '作为线性阴离子聚合物成膜后可能与其他成膜剂/阳离子成分产生相互作用而结球，实际起球风险因配方而异，暂无供应商专项数据',
      en: 'as a linear anionic film-forming polymer it can interact with other film-formers/cationic ingredients on skin and contribute to pilling; actual risk is formulation-dependent and no supplier-specific pilling data was found',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '预中和的钠盐形式，遇水即可直接增稠，无需额外中和步骤（供应商数据：1%水溶液pH 6.0-7.0）',
      en: 'supplied as the pre-neutralized sodium salt, thickens directly on contact with water with no separate neutralization step (supplier data: pH 6.0-7.0 for a 1% aqueous solution)',
    },
    {
      zh: '也存在不含载体油/表面活性剂的粉末型均聚物产品，适合希望避免额外油分/表活负担的配方（供应商数据：RHEOSOL AP为不含载体油和表活的聚丙烯酸钠均聚物粉末）',
      en: 'carrier-oil-/surfactant-free powder homopolymer versions also exist, suited to formulations that want to avoid extra oil or surfactant load (supplier data: RHEOSOL AP is a sodium polyacrylate homopolymer powder free of carrier oils and surfactants)',
    },
    {
      zh: '超高吸水能力（可吸收远超自身重量的水），在保湿凝胶片、面膜等"锁水"型应用中具备结构优势',
      en: 'very high water-absorption capacity (can absorb many times its own weight in water), giving a structural advantage in water-locking applications like hydrating gel sheets and masks',
    },
  ],
  weaknesses: [
    {
      zh: '线性未交联结构对电解质（盐）敏感度较高，配方中含较高浓度盐类或阳离子成分时粘度可能明显下降',
      en: 'the linear, non-crosslinked structure is comparatively sensitive to electrolytes (salt); viscosity can drop noticeably in formulas with higher salt concentrations or cationic ingredients',
    },
    {
      zh: '合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
    {
      zh: '与交联型丙烯酸酯聚合物（如卡波姆、Sepimax ZEN）相比透明度与流变可调性方面的公开数据较少，可查证的正式供应商技术数据表相对有限',
      en: 'compared with crosslinked acrylate polymers (e.g. Carbomer, Sepimax ZEN), less public data is available on clarity and rheology tunability; verifiable formal supplier TDS documentation is comparatively limited',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '发用产品、洁面/沐浴增稠体系', en: 'hair-care products, cleanser/body-wash thickening systems' },
    },
    {
      system: { zh: '磨砂膏等悬浮体系', en: 'scrub formulations and other suspension systems' },
    },
    {
      system: { zh: '保湿凝胶片、高吸水贴片类产品', en: 'hydrating gel sheets and high-water-absorption patch products' },
    },
  ],
  typicalUseLevel: { min: 0.5, max: 2, unit: '%' },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'sepimax-zen', 'sepiplus-400'],
  citations: [
    {
      id: 'makingcosmetics-sodiumpolyacrylate-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'Sodium Polyacrylate — Product Data',
      url: 'https://www.makingcosmetics.com/Z-THK-SDPOLYACR-01-25000.html?lang=en_US',
      accessedDate: '2026-08-05',
      note: 'Used for INCI, appearance ("fine, white powder"), use level (0.5-2%), pH (1% aqueous solution: 6.0-7.0), applications, and storage guidance.',
    },
    {
      id: 'greenchem-sodiumpolyacrylate-paas',
      supplier: 'Shanghai Orient Chemical Co. / Greenchem International',
      documentTitle: 'Sodium Polyacrylate (PAAS) — Product Data',
      url: 'https://www.greenchemintl.com/Thickener/Sodium-polyacrylate-PAAS/',
      accessedDate: '2026-08-05',
      note: 'Used for general polymer chemistry background: pH range (6-9), molecular-weight ranges by application category, water-absorption capacity, and solubility/incompatibility notes (divalent metal ions). This source is a general industrial-chemical supplier, not cosmetics-specific, so its data is used only for general polymer science background, not cosmetic-specific claims.',
    },
    {
      id: 'basf-cosmediasp-tradename',
      supplier: 'BASF (via Azelis PC US distributor product page; cross-confirmed by a SpecialChem listing titled "COSMEDIA® SP (Sodium Polyacrylate)")',
      documentTitle: 'Cosmedia® SP — Product page',
      url: 'https://www.azelispc-us.com/product/cosmedia-sp/',
      accessedDate: '2026-08-06',
      note: "Confirms Cosmedia SP's INCI is 'Sodium Polyacrylate' — i.e. the same ingredient as this entry, added here as a trade name rather than a separate file per the project's dedupe policy. Distributor page also describes it as a neutralized, easy-to-disperse fine powder (pH 5-12) marketed specifically for its emulsifying + suspending + thickening capability without an additional emulsifier (\"emulsifier-free\" formulations) and a silky, velvety, non-tacky afterfeel — a more processing-engineered grade than the plain thickening-focused sodium polyacrylate covered elsewhere in this entry; this functional difference is noted here rather than expanding the full entry, per task scope.",
    },
    {
      id: 'knowde-rheosolap-snippet',
      supplier: 'Rheolab (via Knowde/SpecialChem — indexed excerpt)',
      documentTitle: 'RHEOSOL AP — Sodium Polyacrylate homopolymer powder, product listing',
      url: 'https://www.knowde.com/stores/rheolab/products/rheosol-ap',
      accessedDate: '2026-08-05',
      note: 'Used for confirming CAS 25549-84-2 and the carrier-oil-/surfactant-free homopolymer-powder positioning as a real named cosmetic-grade product. Found via web search snippet; the Knowde page itself returned no readable content on direct fetch in this session, so this fact is treated as partially verified.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['tradeNames'],
  lastUpdated: '2026-08-06',
})
