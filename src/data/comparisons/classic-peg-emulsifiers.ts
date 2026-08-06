import { defineComparison } from '../../schema/defineComparison'

export default defineComparison({
  id: 'classic-peg-emulsifiers-single-vs-blend',
  title: {
    zh: '经典PEG型乳化剂：单一表面活性剂 vs 复配自乳化蜡',
    en: 'Classic PEG-type Emulsifiers: Single Surfactant vs. Blended Self-Emulsifying Wax',
  },
  category: 'emulsifier',
  ingredientSlugs: ['polysorbate-60', 'polysorbate-80', 'peg-100-stearate-glyceryl-stearate'],
  extraDimensions: [
    {
      key: 'form',
      label: { zh: '组成形式', en: 'Composition' },
      valuesBySlug: {
        'polysorbate-60': { zh: '单一表面活性剂', en: 'Single surfactant' },
        'polysorbate-80': { zh: '单一表面活性剂', en: 'Single surfactant' },
        'peg-100-stearate-glyceryl-stearate': { zh: '两组分复配自乳化蜡', en: 'Two-component blended self-emulsifying wax' },
      },
    },
    {
      key: 'fatty-tail',
      label: { zh: '亲油尾链', en: 'Lipophilic tail' },
      valuesBySlug: {
        'polysorbate-60': { zh: '硬脂酸（饱和C18）', en: 'Stearic acid (saturated C18)' },
        'polysorbate-80': { zh: '油酸（不饱和C18，含一个顺式双键）', en: 'Oleic acid (unsaturated C18, one cis double bond)' },
        'peg-100-stearate-glyceryl-stearate': { zh: '硬脂酸（两组分共用）', en: 'Stearic acid (shared by both components)' },
      },
    },
  ],
  summary: {
    zh: '三者都是PEG型（聚氧乙烯化）经典O/W乳化剂，但结构策略不同。Polysorbate 60/80 是单一高HLB（约14.9-15）表面活性剂，二者结构框架相同，仅亲油尾链的饱和/不饱和程度不同——这一差异使Polysorbate 80在低温流动性、增溶油溶性成分方面略有优势，但两者都需与低HLB油溶性乳化剂复配才能构建稳定体系。PEG-100硬脂酸酯（和）硬脂酸甘油酯 则是预先复配好的"一步法"自乳化蜡：高HLB的PEG-100硬脂酸酯与低HLB的甘油硬脂酸酯按比例混合，整体HLB降至中等偏高（约11），单独使用即可乳化成体系，简化了配方复配步骤，是许多入门配方常用的"万能"乳化剂。',
    en: 'All three are classic PEG-type (ethoxylated) O/W emulsifiers, but with different structural strategies. Polysorbate 60/80 are single, high-HLB (~14.9-15) surfactants sharing the same structural framework — differing only in the saturation of the lipophilic tail, which gives Polysorbate 80 a slight edge in cold-flow behavior and solubilizing oil-soluble ingredients; both still need pairing with a low-HLB, oil-soluble co-emulsifier to build a stable system. Glyceryl Stearate (and) PEG-100 Stearate, by contrast, is a pre-blended "one-step" self-emulsifying wax: a high-HLB PEG-100 stearate is combined with a low-HLB glyceryl stearate at a fixed ratio, landing overall HLB at a moderately high ~11 — it can emulsify a system on its own, simplifying the blending step and making it a common go-to emulsifier in many beginner formulations.',
  },
})
