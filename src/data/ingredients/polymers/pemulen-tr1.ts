import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'pemulen-tr1',
  category: 'polymer',
  inciName: 'Acrylates/C10-30 Alkyl Acrylate Crosspolymer',
  nameZh: '丙烯酸（酯）类/C10-30 烷醇丙烯酸酯交联聚合物',
  tradeNames: [{ name: 'Pemulen TR-1', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '疏水改性交联丙烯酸类聚合物（高分子聚合物型乳化剂，Lubrizol Pemulen系列）',
    en: 'Hydrophobically modified crosslinked acrylic polymer (polymeric emulsifier, Lubrizol Pemulen series)',
  },
  chemicalStructureSummary: {
    zh: '主链为交联聚丙烯酸，通过烯丙基季戊四醇（allyl pentaerythritol）交联，并接枝了C10-30长链烷基丙烯酸酯疏水单体——这一基础骨架与Carbopol Ultrez系列相同（INCI名称也相同），但Pemulen系列的疏水烷基接枝比例经过专门优化，赋予其作为"聚合物乳化剂"的核心能力：中和后，聚丙烯酸主链在水相中充分伸展、束缚水分子并靠链间静电排斥增稠，而C10-30长链烷基则以疏水缔合方式嵌入油滴表面——同一条分子链同时"抓住"油相与水相，形成类似传统表面活性剂的界面吸附，却无需使用刺激性更强的小分子表面活性剂，因此常用于强调温和性的乳液配方。',
    en: 'The backbone is crosslinked polyacrylic acid, crosslinked with allyl pentaerythritol and grafted with C10-30 long-chain alkyl acrylate hydrophobic monomer — the same basic architecture as the Carbopol Ultrez series (and the same INCI name), but the Pemulen series\' proportion of hydrophobic alkyl grafting is specifically tuned to give it its core ability as a "polymeric emulsifier": once neutralized, the polyacrylic backbone extends fully into the water phase, binds water, and thickens via interchain electrostatic repulsion, while the C10-30 long alkyl chains embed into the oil-droplet surface via hydrophobic association — the same molecule simultaneously "grips" both the oil and water phases, adsorbing at the interface much like a conventional surfactant, but without needing a more irritating small-molecule surfactant, which is why it is commonly used in formulas that emphasize mildness.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '聚合物乳化能力从何而来', en: 'Where the polymeric emulsification ability comes from' },
      explanation: {
        zh: '分子链同时具备"亲水主链+疏水侧链"的双重结构：中和后的聚丙烯酸主链伸展入水相，疏水的C10-30烷基则锚定入油滴表面，二者共同作用使同一分子既能吸附于油水界面稳定乳液，又能在连续相中建立粘度网络，因此Pemulen TR-1能在极低用量（供应商数据：0.2-0.4%）下形成稳定、温和的O/W乳液，无需额外添加传统表面活性剂。',
        en: 'The chain has a dual structure — a hydrophilic backbone plus hydrophobic side chains: once neutralized, the polyacrylic backbone extends into the water phase while the hydrophobic C10-30 alkyl grafts anchor into the oil-droplet surface. Together these let the same molecule both adsorb at the oil-water interface to stabilize the emulsion and build viscosity in the continuous phase — which is why Pemulen TR-1 can form stable, mild O/W emulsions at a very low use level (supplier data: 0.2-0.4%) without needing a conventional surfactant added.',
      },
    },
    {
      aspect: { zh: '相较TR-2粘度更高、可乳化油相比例较低从何而来', en: 'Where the higher viscosity / lower oil capacity vs. TR-2 comes from' },
      explanation: {
        zh: 'TR-1的疏水烷基接枝比例相对较低，因此分子链中留在水相内自由伸展、参与链缠结/静电排斥增稠的部分比例更高——这带来更高的本体粘度（供应商数据：0.2%粘液的Brookfield粘度约3,000-13,000 cP），但同时可用于锚定油滴界面的疏水基团相对有限，其可稳定的油相比例上限也较低（供应商数据：pH4.0-5.5范围内最多可乳化约30%油相）。',
        en: 'TR-1 has a relatively lower proportion of hydrophobic alkyl grafting, so a larger share of the chain remains free to extend into the aqueous phase and participate in chain-entanglement/electrostatic-repulsion thickening — giving it higher bulk viscosity (supplier data: Brookfield viscosity of a 0.2% mucilage is ~3,000-13,000 cP), but correspondingly fewer hydrophobic groups are available to anchor oil droplets, capping the oil phase it can stabilize at a comparatively lower ceiling (supplier data: up to ~30% oil within pH 4.0-5.5).',
      },
    },
    {
      aspect: { zh: '有效pH范围为何集中在偏酸性区间', en: 'Why the effective pH range centers on the mildly acidic window' },
      explanation: {
        zh: '与所有聚丙烯酸类聚合物一样，其增稠/乳化能力依赖羧基中和为羧酸根后的链伸展与静电排斥；pH过低（羧基未充分解离）或体系强碱环境都会削弱这一机制，因此供应商标注其最佳性能区间为pH 4.0-5.5（乳化能力最强，约30%油相），更宽泛的可用区间为pH 3.0-11.0（乳化能力降至约20%油相），配方设计时需将体系pH纳入考量。',
        en: 'Like all polyacrylic acid-type polymers, its thickening/emulsifying ability depends on chain extension and electrostatic repulsion once the carboxyl groups are neutralized to carboxylate; either too-low pH (carboxyls insufficiently ionized) or a strongly alkaline system weakens this mechanism, which is why the supplier specifies peak performance in the pH 4.0-5.5 window (highest oil-emulsifying capacity, ~30% oil) and a broader but reduced-capacity usable range of pH 3.0-11.0 (~20% oil) — formulators need to factor system pH into the design.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '形成的乳液质地温和细腻，不含传统表面活性剂，肤感相对清爽；因粘度较高，涂抹时略带膏霜感',
      en: 'forms a mild, fine-textured emulsion without conventional surfactants and a comparatively light skin feel; being higher-viscosity, it has a somewhat creamier body on application',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    pillingNotes: {
      zh: '属聚合物型乳化剂，兼具乳化与增稠双重功能；高盐体系建议与卡波姆类聚合物复配以增强稳定性',
      en: 'a polymeric emulsifier that combines emulsifying and thickening function; for high-salt systems the supplier recommends pairing with a Carbopol-type polymer for added stability',
    },
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '温和聚合物乳化机制，无需传统小分子表面活性剂，用量极低（供应商数据：0.2-0.4%）即可形成稳定O/W乳液',
      en: 'a mild polymeric emulsification mechanism that needs no conventional small-molecule surfactant — forms stable O/W emulsions at a very low use level (supplier data: 0.2-0.4%)',
    },
    {
      zh: '形成的乳液粘度较高（供应商数据：0.2%粘液Brookfield粘度约3,000-13,000 cP），适合膏霜类质地',
      en: 'forms comparatively high-viscosity emulsions (supplier data: Brookfield viscosity of a 0.2% mucilage ~3,000-13,000 cP), suited to cream-type textures',
    },
    {
      zh: '可乳化油相比例约20-30%（视pH而定），适用于身体乳、面霜、防晒等多种体系',
      en: 'can emulsify roughly 20-30% oil phase (depending on pH), suited to body lotions, creams, sun care, and other systems',
    },
  ],
  weaknesses: [
    {
      zh: '有效性能高度依赖pH（最佳区间pH4.0-5.5），体系pH需谨慎控制',
      en: 'performance is highly pH-dependent (optimal window pH 4.0-5.5), so system pH needs careful control',
    },
    {
      zh: '高电解质/高盐体系下稳定性有限，供应商建议与卡波姆类聚合物复配增强耐受性',
      en: 'stability is limited in high-electrolyte/high-salt systems; the supplier recommends pairing with a Carbopol-type polymer to improve tolerance',
    },
    {
      zh: '属合成丙烯酸类聚合物，天然/有机认证配方通常无法使用',
      en: 'as a synthetic acrylate polymer, it is generally unusable in natural/organic-certified formulations',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '身体乳/面霜（主乳化体系）', en: 'body lotions/creams (primary emulsification system)' },
      notes: { zh: '供应商推荐用量0.2-0.4%', en: 'supplier-recommended use level 0.2-0.4%' },
    },
    { system: { zh: '眼部、面部、手足护理及防晒产品', en: 'eye area, facial, hand/foot care, and sun care products' } },
    { system: { zh: '湿巾浸渍液', en: 'wipe-impregnation lotions' } },
  ],
  typicalUseLevel: { min: 0.2, max: 0.4, unit: '%' },
  relatedIngredientSlugs: ['carbopol-ultrez-20', 'pemulen-tr2', 'sepimax-zen'],
  citations: [
    {
      id: 'knowde-pemulentr1-tds',
      supplier: 'Lubrizol (via Knowde)',
      documentTitle: 'Pemulen™ TR-1 polymer — Product Technical Data',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/pemulen-polymers-tr-1-polymer',
      accessedDate: '2026-08-05',
      note: 'Accessed via a text-extraction proxy since direct fetch of the Knowde page returned no content. Used for INCI, appearance, use level, pH/oil-capacity figures, and the Brookfield/emulsion-viscosity table. Lubrizol\'s own product page (lubrizol.com) could not be fetched directly in this session (blocked).',
    },
    {
      id: 'pharmaexcipients-pemulentr1',
      supplier: 'Lubrizol (via Pharma Excipients)',
      documentTitle: 'Pemulen™ TR-1 NF Polymer — Product Page',
      url: 'https://www.pharmaexcipients.com/product/pemulen-tr-1-nf-polymer/',
      accessedDate: '2026-08-05',
      note: 'Used for the chemical composition description (crosslinked copolymer of acrylic acid and C10-30 alkyl acrylate, crosslinked with allyl pentaerythritol) and oil-emulsifying capacity figures.',
    },
  ],
  dataCompleteness: 'partial',
  lastUpdated: '2026-08-05',
})
