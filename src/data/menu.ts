export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  tag?: string
  image?: string
}

export const signaturePizzas: MenuItem[] = [
  {
    id: 'salame-piccante',
    name: 'Salame Piccante',
    description: 'Spicy salame, San Marzano tomato, fior di latte, torn basil, grated parmesan',
    price: 18,
    tag: 'Best Seller',
  },
  {
    id: 'pepperoni-napoletana',
    name: 'Pepperoni Napoletana',
    description: 'Double pepperoni, fior di latte, San Marzano tomato, oregano',
    price: 17,
    tag: 'Chef Pick',
  },
  {
    id: 'gamberi-e-limone',
    name: 'Gamberi e Limone',
    description: 'Wild shrimp, garlic, chilli oil, lemon zest, torn basil',
    price: 22,
    tag: 'Seafood',
  },
]

export const alsoOnMenu: MenuItem[] = [
  {
    id: 'diavola',
    name: 'Diavola',
    description: 'Spicy salame, chilli honey, fior di latte',
    price: 18,
  },
  {
    id: 'tartufo-e-burrata',
    name: 'Tartufo e Burrata',
    description: 'Black truffle cream, wild mushroom, burrata',
    price: 22,
  },
  {
    id: 'verdure-dellorto',
    name: "Verdure dell'Orto",
    description: 'Courgette, peppers, olives, rocket, vegan mozzarella',
    price: 16,
  },
]

export const stats = [
  { value: 485, suffix: '°C', label: 'Wood-fired oven heat' },
  { value: 90, suffix: 's', label: 'Fire to table' },
  { value: 24, suffix: 'h', label: 'Slow-proofed dough' },
  { value: 3, suffix: '', label: 'Ingredients per pie, minimum fuss' },
]
