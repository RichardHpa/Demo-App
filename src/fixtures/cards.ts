import type { Card } from 'types/fixtures/card'

export const cards: Card[] = [
  {
    id: 'pl3-1',
    name: 'Absol G',
    supertype: 'Pokémon',
    subtypes: ['Basic', 'SP'],
    level: '59',
    hp: '70',
    types: ['Darkness'],
    attacks: [
      {
        name: 'Feint Attack',
        cost: ['Darkness'],
        convertedEnergyCost: 1,
        damage: '',
        text: "This attack does 20 damage to that Pokémon. This attack\n's damage isn\n't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon",
      },
      {
        name: 'Doom News',
        cost: ['Darkness', 'Colorless', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '',
        text: "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
      },
    ],
    weaknesses: [{ type: 'Fighting', value: '×2' }],
    resistances: [{ type: 'Psychic', value: '-20' }],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'pl3',
      name: 'Supreme Victors',
      series: 'Platinum',
      printedTotal: 147,
      total: 153,
      legalities: { unlimited: 'Legal' },
      ptcgoCode: 'SV',
      releaseDate: '2009/08/19',
      updatedAt: '2018/03/07 22:40:00',
      images: {
        symbol: 'https://images.pokemontcg.io/pl3/symbol.png',
        logo: 'https://images.pokemontcg.io/pl3/logo.png',
      },
    },
    number: '1',
    artist: 'Yusuke Ishikawa',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [359],
    legalities: { unlimited: 'Legal' },
    images: {
      small: 'https://images.pokemontcg.io/pl3/1.png',
      large: 'https://images.pokemontcg.io/pl3/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/pl3-1',
      updatedAt: '2022/10/06',
      prices: {
        holofoil: { low: 3.0, mid: 5.29, high: 8.6, market: 7.22, directLow: 3.98 },
        reverseHolofoil: { low: 2.78, mid: 3.99, high: 11.79, market: 3.68 },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/pl3-1',
      updatedAt: '2022/10/06',
      prices: {
        averageSellPrice: 299.45,
        lowPrice: 0.5,
        trendPrice: 78.12,
        reverseHoloSell: 9.23,
        reverseHoloLow: 0.5,
        reverseHoloTrend: 5.37,
        lowPriceExPlus: 2.4,
        avg1: 595.8,
        avg7: 151.99,
        avg30: 37.86,
        reverseHoloAvg1: 1.99,
        reverseHoloAvg7: 6.48,
        reverseHoloAvg30: 3.62,
      },
    },
  },
  {
    id: 'ex12-1',
    name: 'Aerodactyl',
    supertype: 'Pokémon',
    subtypes: ['Stage 1'],
    hp: '70',
    types: ['Colorless'],
    evolvesFrom: 'Mysterious Fossil',
    abilities: [
      {
        name: 'Reactive Protection',
        text: "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
        type: 'Poké-Body',
      },
    ],
    attacks: [
      {
        name: 'Power Blow',
        cost: ['Colorless'],
        convertedEnergyCost: 1,
        damage: '10+',
        text: 'Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.',
      },
      {
        name: 'Speed Stroke',
        cost: ['Colorless', 'Colorless', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '40',
        text: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
      },
    ],
    weaknesses: [{ type: 'Lightning', value: '×2' }],
    resistances: [{ type: 'Fighting', value: '-30' }],
    set: {
      id: 'ex12',
      name: 'Legend Maker',
      series: 'EX',
      printedTotal: 92,
      total: 93,
      legalities: { unlimited: 'Legal' },
      ptcgoCode: 'LM',
      releaseDate: '2006/02/01',
      updatedAt: '2018/03/04 10:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/ex12/symbol.png',
        logo: 'https://images.pokemontcg.io/ex12/logo.png',
      },
    },
    number: '1',
    artist: 'Hajime Kusajima',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [142],
    legalities: { unlimited: 'Legal' },
    images: {
      small: 'https://images.pokemontcg.io/ex12/1.png',
      large: 'https://images.pokemontcg.io/ex12/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/ex12-1',
      updatedAt: '2022/10/06',
      prices: {
        holofoil: { low: 9.13, mid: 12.0, high: 18.74, market: 13.3 },
        reverseHolofoil: { low: 19.79, mid: 26.24, high: 34.99, market: 36.18 },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/ex12-1',
      updatedAt: '2022/10/06',
      prices: {
        averageSellPrice: 8.2,
        lowPrice: 0.8,
        trendPrice: 5.97,
        reverseHoloSell: 52.5,
        reverseHoloLow: 2.5,
        reverseHoloTrend: 21.85,
        lowPriceExPlus: 6.99,
        avg1: 19.99,
        avg7: 7.1,
        avg30: 8.89,
        reverseHoloAvg1: 54.99,
        reverseHoloAvg7: 23.25,
        reverseHoloAvg30: 13.1,
      },
    },
  },
  {
    id: 'xy5-1',
    name: 'Weedle',
    supertype: 'Pokémon',
    subtypes: ['Basic'],
    hp: '50',
    types: ['Grass'],
    evolvesTo: ['Kakuna'],
    attacks: [
      {
        name: 'Multiply',
        cost: ['Grass'],
        convertedEnergyCost: 1,
        damage: '',
        text: 'Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.',
      },
    ],
    weaknesses: [{ type: 'Fire', value: '×2' }],
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    set: {
      id: 'xy5',
      name: 'Primal Clash',
      series: 'XY',
      printedTotal: 160,
      total: 164,
      legalities: { unlimited: 'Legal', expanded: 'Legal' },
      ptcgoCode: 'PRC',
      releaseDate: '2015/02/04',
      updatedAt: '2020/05/01 16:06:00',
      images: {
        symbol: 'https://images.pokemontcg.io/xy5/symbol.png',
        logo: 'https://images.pokemontcg.io/xy5/logo.png',
      },
    },
    number: '1',
    artist: 'Midori Harada',
    rarity: 'Common',
    flavorText:
      'Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.',
    nationalPokedexNumbers: [13],
    legalities: { unlimited: 'Legal', expanded: 'Legal' },
    images: {
      small: 'https://images.pokemontcg.io/xy5/1.png',
      large: 'https://images.pokemontcg.io/xy5/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/xy5-1',
      updatedAt: '2022/10/06',
      prices: {
        normal: { low: 0.06, mid: 0.2, high: 1.07, market: 0.16 },
        reverseHolofoil: {
          low: 0.2,
          mid: 0.39,
          high: 3.59,
          market: 0.27,
          directLow: 0.25,
        },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/xy5-1',
      updatedAt: '2022/10/06',
      prices: {
        averageSellPrice: 0.1,
        lowPrice: 0.02,
        trendPrice: 0.09,
        reverseHoloSell: 0.38,
        reverseHoloLow: 0.09,
        reverseHoloTrend: 0.62,
        lowPriceExPlus: 0.03,
        avg1: 0.06,
        avg7: 0.09,
        avg30: 0.08,
        reverseHoloAvg1: 0.1,
        reverseHoloAvg7: 0.64,
        reverseHoloAvg30: 0.42,
      },
    },
  },
]

export const card = cards[0]
