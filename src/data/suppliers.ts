export interface Supplier {
  name: string
  country: string
  url?: string
}

/** Reference metadata for suppliers cited across ingredient entries. Not schema-enforced — informational only. */
export const suppliers: Supplier[] = [
  { name: 'Croda', country: 'UK', url: 'https://www.croda.com' },
  { name: 'Seppic', country: 'France', url: 'https://www.seppic.com' },
  { name: 'BASF', country: 'Germany', url: 'https://www.basf.com' },
  { name: 'Dow', country: 'USA', url: 'https://www.dow.com' },
  { name: 'Lubrizol', country: 'USA', url: 'https://www.lubrizol.com' },
  { name: 'Evonik', country: 'Germany', url: 'https://www.evonik.com' },
  { name: 'Ashland', country: 'USA', url: 'https://www.ashland.com' },
  { name: 'Clariant', country: 'Switzerland', url: 'https://www.clariant.com' },
  { name: 'Gattefossé', country: 'France', url: 'https://www.gattefosse.com' },
  { name: 'Sino Lion', country: 'China', url: 'https://www.sinolion.com' },
]
