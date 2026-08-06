import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'cosmedia-ultragel-300',
  category: 'polymer',
  inciName: 'Polyquaternium-37 (and) Dicapryl Carbonate (and) Lauryl Glucoside',
  nameZh: '聚季铵盐-37（和）碳酸二辛酯（和）月桂基葡糖苷',
  tradeNames: [{ name: 'Cosmedia Ultragel 300', supplier: 'BASF' }],
  chemicalClass: {
    zh: '阳离子交联丙烯酸类均聚物（反相乳液聚合法制得）流变改性/调理型聚合物三组分复配体系',
    en: 'Cationic crosslinked acrylate homopolymer (produced via inverse-emulsion polymerization), supplied as a three-component rheology-modifying / conditioning polymer blend',
  },
  chemicalStructureSummary: {
    zh: '按行业INCI词典定义，聚季铵盐-37是2-甲基丙烯酰氨基乙基三甲基氯化铵（一种季铵型甲基丙烯酸酯单体）的均聚物，链上每个重复单元都自带永久性正电荷（三甲基铵基团），其电离状态不随pH改变——这与依赖羧酸根电离（受pH影响）增稠的丙烯酸类阴离子聚合物（如卡波姆、聚丙烯酸钠）形成结构性差异。该聚合物通常以反相（油包水）乳液聚合工艺制成，因此成品需与载体油（此处为碳酸二辛酯）和非离子表面活性剂（此处为月桂基葡糖苷）共同配制，以维持聚合物粒子分散稳定，并帮助其在加入水相后快速转相、水合伸展——这与Sepiplus 400（聚丙烯酸酯-13＋聚异丁烯＋聚山梨醇酯-20）等反相乳液聚合物的工艺逻辑一致。',
    en: "Per standard INCI-dictionary definitions, Polyquaternium-37 is the homopolymer of 2-methacryloxyethyltrimethylammonium chloride — a quaternary-ammonium methacrylate monomer — so every repeat unit along the chain carries a permanent, pH-independent positive charge on its trimethylammonium head group. This is a structural difference from anionic acrylate polymers (e.g. Carbomer, sodium polyacrylate) that thicken via carboxylate ionization, which is pH-dependent. The polymer is typically manufactured via inverse (water-in-oil) emulsion polymerization, so the finished product must be co-formulated with a carrier oil (Dicapryl Carbonate here) and a nonionic surfactant (Lauryl Glucoside here) to keep the polymer particles stably dispersed and to help them phase-invert and hydrate/extend quickly once added to the water phase — the same process logic used by other inverse-emulsion polymers such as Sepiplus 400 (Polyacrylate-13 + Polyisobutene + Polysorbate 20).",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '无需中和即可增稠从何而来', en: 'Where the no-neutralization thickening comes from' },
      explanation: {
        zh: '与依赖羧酸根电离的阴离子丙烯酸类聚合物不同，聚季铵盐-37链上的季铵正电荷是永久性的、不依赖pH的电离平衡；因此加水稀释后，链段之间因同性正电荷相互排斥而直接伸展、吸水膨胀建立粘度，配方师无需像使用卡波姆那样额外加碱中和——这与供应商"无需中和"的产品定位相符。',
        en: "Unlike anionic acrylate polymers that rely on carboxylate ionization, the quaternary ammonium charges on Polyquaternium-37 are permanent and don't depend on a pH-sensitive ionization equilibrium. So on dilution in water, the chain segments repel each other directly via their like positive charges, extending and imbibing water to build viscosity — with no separate alkali-neutralization step needed, unlike Carbomer. This matches the supplier's positioning of the product as requiring no neutralization.",
      },
    },
    {
      aspect: { zh: '皮肤/毛发调理性从何而来', en: 'Where the skin/hair conditioning benefit comes from' },
      explanation: {
        zh: '毛发（尤其经染烫等化学处理后）与皮肤表面通常带净负电荷；聚季铵盐-37链上密集分布的永久性季铵正电荷能与这些带负电的表面产生静电吸附，沉积形成一层调理膜——这是聚季铵盐类调理剂的通用作用机制，也是该产品被定位为兼具"增稠+调理"双重功能的结构基础。',
        en: 'Hair (especially chemically treated/damaged hair) and skin surfaces typically carry a net negative charge. The densely spaced, permanent quaternary-ammonium positive charges along the Polyquaternium-37 backbone are electrostatically attracted to and adsorb onto these negatively charged surfaces, depositing a conditioning film — the general mechanism shared by Polyquaternium-family conditioning agents, and the structural basis for this product being positioned as both a thickener and a conditioning agent.',
      },
    },
    {
      aspect: { zh: '透明凝胶配方能力从何而来', en: 'Where the crystal-clear gel-forming capability comes from' },
      explanation: {
        zh: '反相乳液聚合工艺配合精心匹配的载体油/非离子表面活性剂体系，使聚合物以细小、均匀的粒子形式稳定分散；加入水相后粒子快速转相、均匀水合伸展，不易形成较大的散射光的聚集结构，因此稀释后的凝胶体系能维持较高的透明度（供应商数据），这也是其被命名为"Ultragel"、定位为透明配方专用增稠剂的结构原因。',
        en: 'The inverse-emulsion polymerization process, paired with a carefully matched carrier-oil/nonionic-surfactant system, keeps the polymer stably dispersed as small, uniform particles. Once added to the water phase, these particles phase-invert and hydrate/extend uniformly rather than forming larger light-scattering aggregates, so the diluted gel system retains high clarity (supplier data) — the structural reason behind the "Ultragel" name and its positioning as a thickener for crystal-clear formulations.',
      },
    },
  ],
  performance: {
    skinFeel: {
      zh: '供应商描述为具备优雅的铺展性与柔顺、不粘腻的丰润肤感，兼具皮肤/毛发调理效果',
      en: "described by the supplier as having elegant spreading properties and a soft, non-tacky, rich skin feel, alongside a skin/hair conditioning effect",
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'low',
    pillingNotes: {
      zh: '作为阳离子聚合物，理论上可能与配方中阴离子成分（部分增稠剂、表面活性剂）产生电荷相互作用而影响成膜均匀性，但未见供应商就起球倾向作出专门说明，故标记为未知，配方中建议实测',
      en: 'as a cationic polymer it could in principle interact electrostatically with anionic ingredients elsewhere in a formula (some thickeners, surfactants), affecting film uniformity, but no supplier-specific pilling data was found — marked unknown; formulators should verify empirically',
    },
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '永久性阳离子电荷带来pH无关的增稠效果，无需中和步骤，冷法/热法均可加工（供应商数据）',
      en: 'permanent cationic charge gives pH-independent thickening with no neutralization step required; hot- or cold-processable (supplier data)',
    },
    {
      zh: '可形成高透明度凝胶，且据供应商数据具备较高屈服值、可悬浮珠光颗粒/气泡等分散相',
      en: 'forms highly transparent gels, and per supplier data has a relatively high yield value, able to suspend dispersed phases such as beads/pearls or air bubbles',
    },
    {
      zh: '供应商数据：不含防腐剂、不含环氧乙烷（EO-free），并可与果酸（AHA）、自晒剂（DHA）等活性物兼容',
      en: 'supplier data: preservative-free, ethylene-oxide-free (EO-free), and compatible with actives such as AHAs and self-tanning DHA',
    },
  ],
  weaknesses: [
    {
      zh: '作为阳离子聚合物，与配方中阴离子表面活性剂/聚合物/活性物的电荷相容性需要逐一验证，兼容性不如非离子/两性体系广泛',
      en: 'as a cationic polymer, charge compatibility with anionic surfactants/polymers/actives elsewhere in a formula must be verified case by case — less universally compatible than nonionic/amphoteric systems',
    },
    {
      zh: '本次调研中不同渠道对其外观/物理形态描述不一致（部分资料称"粉末型高活性聚合物"，但其INCI中含载体油与表面活性剂组分，通常提示为液态/膏状乳液型产品），确切物理形态标记为待核实',
      en: 'sources found in this research pass described its physical form inconsistently (one described it as a "high-active polymer in powder form," though its INCI includes a carrier oil and surfactant component, which typically points to a liquid/paste emulsion-type product) — exact physical form is flagged as unverified',
    },
    {
      zh: '合成丙烯酸类阳离子聚合物，天然/有机认证配方通常无法使用',
      en: 'a synthetic cationic acrylate polymer, generally unusable in natural/organic-certified formulations',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '护发素等毛发调理产品', en: 'hair conditioners and hair-conditioning formulations' },
    },
    {
      system: { zh: '免洗洗手液、防晒及古铜/自晒产品', en: 'hand sanitizers, sun care, and bronzing/self-tan products' },
    },
    {
      system: { zh: '追求高透明度的护肤凝胶', en: 'skin-care gels aiming for high transparency' },
    },
  ],
  typicalUseLevel: { min: 0.5, max: 2, unit: '%' },
  relatedIngredientSlugs: ['sepiplus-400', 'sodium-polyacrylate'],
  citations: [
    {
      id: 'azelispc-cosmediaultragel300-productpage',
      supplier: 'BASF (via Azelis PC US distributor product page)',
      documentTitle: 'Cosmedia® Ultragel 300 — Product page',
      url: 'https://www.azelispc-us.com/product/cosmedia-ultragel-300/',
      accessedDate: '2026-08-06',
      note: 'Used for INCI (Polyquaternium-37 (and) Dicapryl Carbonate (and) Lauryl Glucoside), pH range (3-10), use level (0.5-2.0%), processing (hot/cold, no neutralization, easy dispersion), suspension/yield-value claims, AHA/DHA compatibility, and EO-free positioning. Also the source of the physical-form ("powder") language flagged as inconsistent in weaknesses/flaggedFields.',
    },
    {
      id: 'basf-care360-cosmediaultragel300-highlight',
      supplier: 'BASF (Care360 product-highlight page)',
      documentTitle: 'Cosmedia® ULTRAGEL 300 — Product Highlight',
      url: 'https://care360.basf.com/emea/en/industries/personal-care/concepts-trends/products/products-detail-highlight/30535838',
      accessedDate: '2026-08-06',
      note: 'Used for cationic thickening/stabilizing classification, conditioning benefit, clear-formulation positioning, cold/hot processability, preservative-free claim, and hair-care application focus.',
    },
    {
      id: 'incidecoder-polyquaternium37-definition',
      supplier: 'incidecoder.com (INCI ingredient dictionary, citing CosIng-style definition)',
      documentTitle: 'Polyquaternium-37 — Ingredient dictionary entry',
      url: 'https://incidecoder.com/ingredients/polyquaternium-37',
      accessedDate: '2026-08-06',
      note: "Used for the general structural definition of Polyquaternium-37 as the homopolymer of 2-methacryloxyethyltrimethylammonium chloride (CAS 26161-33-1) and its classification as a cationic film-former/conditioning/thickening polymer — general INCI-dictionary chemistry background, not a Cosmedia-Ultragel-300-specific supplier claim.",
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['appearance'],
  lastUpdated: '2026-08-06',
})
