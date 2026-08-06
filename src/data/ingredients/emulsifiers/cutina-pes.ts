import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'cutina-pes',
  category: 'emulsifier',
  inciName: 'Pentaerythrityl Distearate',
  nameZh: '季戊四醇二硬脂酸酯',
  tradeNames: [{ name: 'Cutina® PES', supplier: 'BASF' }],
  chemicalClass: {
    zh: '多元醇脂肪酸酯类稠化剂/助乳化剂（蜡质固体）',
    en: 'Polyol fatty-acid-ester consistency agent / co-emulsifier (waxy solid)',
  },
  chemicalStructureSummary: {
    zh: '为季戊四醇（一种带4个羟基的支化多元醇核心）与硬脂酸（C18长链饱和脂肪酸）反应形成的脂肪酸酯混合物，其中2个羟基被硬脂酸酯化（"二"硬脂酸酯），另有2个羟基保持游离。相比常见的单醇型脂肪酸酯（如鲸蜡硬脂醇），季戊四醇的四臂支化结构使分子呈现"星形"拓扑，酯化后仍保留部分极性羟基，兼具蜡质结晶性与一定的界面活性调节能力。供应商官方技术资料将其归类为"稠化蜡"（consistency wax），而非独立的初级乳化剂。',
    en: 'A fatty-acid-ester mixture formed by reacting pentaerythritol (a branched polyol core bearing four hydroxyl groups) with stearic acid (a C18 long-chain saturated fatty acid), in which two of the four hydroxyls are esterified with stearic acid (the "di"-stearate) while two remain free. Compared with common mono-alcohol fatty esters (e.g. cetearyl alcohol esters), pentaerythritol\'s four-armed branched core gives the molecule a "star-shaped" topology, and the retained free hydroxyls after esterification give it some polarity alongside its waxy crystallinity. The official BASF technical documentation classifies it as a "consistency wax" rather than a standalone primary emulsifier.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '稠化/膏体一致性从何而来', en: 'Where the thickening / consistency-building effect comes from' },
      explanation: {
        zh: '季戊四醇的四臂支化核心搭配两条C18硬脂酸长链，使分子易于彼此堆叠、结晶形成蜡质网络；这一结晶网络在O/W乳液的连续水相或油相中物理性地增加流动阻力，是其被BASF定位为"稠化剂"、能为配方建立黏度与稠度的结构基础。',
        en: 'Pentaerythritol\'s four-armed branched core, paired with two C18 stearic-acid chains, lets the molecules stack and crystallize into a waxy network readily; this crystalline network physically increases flow resistance within the continuous phase of an O/W emulsion — the structural basis for BASF positioning it as a "consistency wax" that builds viscosity and body in a formula.',
      },
    },
    {
      aspect: { zh: '"非蜡质"细腻肤感从何而来', en: 'Where the "non-waxy" refined skin feel comes from' },
      explanation: {
        zh: '与全酯化、完全非极性的蜡类（如典型的鲸蜡醇酯蜡）不同，季戊四醇二硬脂酸酯保留2个未酯化的游离羟基，为分子引入少量极性/氢键位点；这部分残余极性有助于分子在结晶网络中排列得更细密、减少粗大蜡质结晶的形成，是供应商所述其能带来"非蜡质、呵护感肤感"而非典型厚重蜡感的结构线索（一般酯类结构-肤感原理，供应商未给出具体机理说明）。',
        en: 'Unlike fully esterified, fully non-polar waxes (e.g. typical cetyl-ester waxes), pentaerythrityl distearate retains two unesterified free hydroxyls, introducing a small amount of polarity/hydrogen-bonding character into the molecule; this residual polarity likely helps the molecules pack into a finer crystalline network and reduces the formation of coarse wax crystals — a plausible structural explanation (general ester structure-skin-feel reasoning, not a mechanism the supplier itself details) for the supplier-described "non-waxy, caring" skin feel rather than a typical heavy waxy feel.',
      },
    },
    {
      aspect: { zh: '作为助乳化剂（而非独立初级乳化剂）的定位从何而来', en: 'Where its positioning as a co-emulsifier (rather than a standalone primary emulsifier) comes from' },
      explanation: {
        zh: '分子仅保留2个游离羟基作为潜在亲水位点，相对于其庞大、结晶性强的双硬脂酸酯疏水部分而言亲水贡献有限，难以单独在界面上形成稳定的低界面张力乳化膜；因此BASF技术资料将其定位为需与"离子型或非离子型"等其他乳化剂体系搭配使用的稠化/稳定助剂，而非独立初级乳化剂。',
        en: 'With only two free hydroxyls left as potential hydrophilic sites, the molecule\'s hydrophilic contribution is limited relative to its large, strongly crystalline distearate hydrophobic portion, making it unlikely to form a stable, low-interfacial-tension emulsifying film at the interface on its own; this is why BASF\'s technical material positions it as a thickening/stabilizing auxiliary meant to be paired with another "ionic or non-ionic" emulsifier system, rather than as a standalone primary emulsifier.',
      },
    },
  ],
  appearance: {
    zh: '类白色蜡状颗粒，气味轻微',
    en: 'off-white, wax-like pellets with little intrinsic odor',
  },
  performance: {
    skinFeel: {
      zh: '供应商数据：赋予配方非蜡质、呵护感的肤感，同时提供触感上的"感官冲击力"（sensorial impact）',
      en: 'per supplier data: gives the formula a non-waxy, caring skin feel while delivering tactile "sensorial impact"',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '官方BASF技术资料确认：作为O/W配方的稠化剂，能兼顾建立黏度/稳定性与带来"非蜡质"的细腻肤感（体养、面部护理等场景）',
      en: 'confirmed by official BASF technical documentation: as a consistency builder for O/W formulas, it combines viscosity/stability building with a "non-waxy," refined skin feel (body care, face care, and similar applications)',
    },
    {
      zh: '不含防腐剂（供应商数据：产品本身unpreserved），适合对成分简化有要求的配方',
      en: 'contains no preservative (supplier data: the product itself is unpreserved), suiting formulas aiming for a simplified ingredient list',
    },
    {
      zh: '可与离子型或非离子型多种乳化体系搭配使用，作为通用型稠化/稳定助剂具有较高兼容性',
      en: 'compatible for pairing with either ionic or non-ionic emulsifier systems, giving it broad utility as a general-purpose thickening/stabilizing auxiliary',
    },
  ],
  weaknesses: [
    {
      zh: '官方TDS将其定位为稠化剂/助乳化剂而非独立初级乳化剂，需与其他乳化剂体系搭配使用才能构建完整乳液',
      en: 'the official TDS positions it as a consistency builder/co-emulsifier rather than a standalone primary emulsifier — it needs to be paired with another emulsifier system to build a complete emulsion',
    },
    {
      zh: '室温下为蜡状固体，需加热工艺熔融加入，官方TDS未提供具体熔点数据',
      en: 'a waxy solid at room temperature requiring hot-process melting for incorporation; the official TDS does not provide a specific melting point figure',
    },
    {
      zh: 'BASF官方TDS未公开HLB值或推荐用量区间；本条目引用的黏度/稳定性及适用肤质范围（体养、面部、敏感肌、婴儿护理）数据来自第三方经销商/索引页面的检索摘要，未能直接访问原始页面核实，数据完整度标记为partial',
      en: 'the official BASF TDS does not publish an HLB value or a recommended use-level range; the viscosity/stability performance and target-application claims (body care, face care, sensitive skin, baby care) cited in this entry come from a search-indexed summary of third-party distributor/listing pages that could not be directly re-opened to verify — data completeness is marked partial',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 体养/面部护理乳霜、乳液', en: 'O/W body-care / face-care creams and lotions' },
      notes: {
        zh: '官方TDS核心应用场景：为O/W配方提供稠度建立与感官冲击力',
        en: 'the core application in the official TDS: building consistency and delivering sensorial impact in O/W formulas',
      },
    },
    {
      system: { zh: '敏感肌及婴儿护理配方', en: 'sensitive-skin and baby-care formulas' },
      notes: {
        zh: '据第三方索引页面摘要，未直接核实原始来源，标记为待确认',
        en: 'per a third-party indexed-page summary, not independently re-verified against the primary source — flagged as unconfirmed',
      },
    },
  ],
  relatedIngredientSlugs: [],
  citations: [
    {
      id: 'basf-cutina-pes-official-tds',
      supplier: 'BASF',
      documentTitle: 'Cutina® PES — Technical Information (PRD 30532605, Revision 4.1)',
      url: 'https://promo.basf.com/campaign/Projetos/CaringForYou/Documentos/Cuidados%20de%20la%20Piel/Cutina%C2%AE%20PES.pdf',
      accessedDate: '2026-08-06',
      note: 'Directly fetched and read official BASF PDF technical data sheet (valid since 16.01.2015). Used for chemical description ("fatty acid esters mixture with pentaerythritol"), INCI name, appearance ("off-white, wax-like pellets with little intrinsic odor"), example of use ("consistency builder delivering sensorial impact to cosmetic O/W formulations"), and unpreserved status. This document confirms Cutina PES is a current BASF Care Chemicals brand (the Cutina line originated under Cognis, which BASF acquired in 2010) — Cutina PES is BASF-owned, not a Clariant product, contrary to the initial task assumption.',
    },
    {
      id: 'search-summary-cutina-pes-performance',
      supplier: 'Multiple indexed sources (UL Prospector and BASF Personal Care/Care360 product-finder listings, via web search)',
      documentTitle: 'Cutina® PES — Personal Care & Cosmetics product listing summaries',
      url: 'https://www.ulprospector.com/en/eu/PersonalCare/Detail/804/34072/Cutina-PES',
      accessedDate: '2026-08-06',
      note: 'Used for the viscosity/stability-building performance claim ("builds up good viscosity and stability of O/W emulsion with different emulsifier systems (ionic/non-ionic), while creating a non-waxy and caring skin feel") and target-application list (body care, face care, sensitive skin, baby care). Content retrieved via search-engine indexed summaries; direct WebFetch of ulprospector.com and BASF\'s Care360/personal-care.basf.com product-finder pages was blocked by HTTP 403 or a login wall in this research pass, so these specific claims are not independently re-verified against a primary, directly-opened page.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'typicalUseLevel', 'performance.pillingTendency', 'suitableSystems'],
  lastUpdated: '2026-08-06',
})
