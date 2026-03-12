export interface MenuItem {
  id: string
  name: string
  price: string
  description?: string
  category: 'cafes' | 'bebidas' | 'snacks' | 'doces' | 'wraps' | 'cocktails' | 'tabuas'
  badge?: 'popular' | 'especial'
}

export const menuItems: MenuItem[] = [
  // Cafés
  { id: 'expresso', name: 'Expresso', price: '1,00€', description: 'Café intenso e aromático, servido na perfeição.', category: 'cafes', badge: 'popular' },
  { id: 'cafe-velho-habito', name: 'Café à Velho Hábito', price: '1,60€', description: 'A nossa especialidade única, preparada com paixão.', category: 'cafes', badge: 'especial' },
  { id: 'cappuccino', name: 'Cappuccino', price: '3,00€', description: 'Espresso suave coberto com espuma de leite cremosa.', category: 'cafes' },

  // Bebidas
  { id: 'chocolate-quente', name: 'Chocolate Quente', price: '1,00€', description: 'Chocolate belga derretido em leite cremoso.', category: 'bebidas' },
  { id: 'fino', name: 'Fino', price: '1,80€', description: 'Cerveja fresca e refrescante, servida na perfeição.', category: 'bebidas' },
  { id: 'super-bock', name: 'Super Bock (0,33l)', price: '3,50€', description: 'Cerveja portuguesa, sabor intenso e refrescante.', category: 'bebidas' },

  // Snacks
  { id: 'tosta-mista', name: 'Tosta Mista', price: '3,50€', description: 'Pão tostado com fiambre e queijo derretido, servido quente.', category: 'snacks', badge: 'popular' },
  { id: 'cachorro', name: 'Cachorro', price: '5,50€', description: 'Queijo, fiambre, salsicha, cebola frita, batata palha e molhos.', category: 'snacks' },
  { id: 'prego', name: 'Prego', price: '6,00€', description: 'Bife, queijo, fiambre e mostarda, sabor intenso.', category: 'snacks' },
  { id: 'hamburguer', name: 'Hambúrguer', price: '6,50€', description: 'Hambúrguer, queijo, fiambre, bacon, alface, tomate, cebola frita, batata palha e molhos.', category: 'snacks' },

  // Doces
  { id: 'crepe-nutella', name: 'Crepe com Nutella', price: '4,50€', description: 'Nutella, chantilly e açúcar em pó, doce e cremoso.', category: 'doces' },
  { id: 'croissant-chocolate', name: 'Croissant de Chocolate', price: '1,50€', description: 'Croissant folhado recheado com chocolate, crocante e doce.', category: 'doces' },
]

export const menuCategories = [
  { id: 'cafes', label: 'Cafés', icon: '☕' },
  { id: 'bebidas', label: 'Bebidas', icon: '🍺' },
  { id: 'snacks', label: 'Snacks', icon: '🥪' },
  { id: 'doces', label: 'Doces', icon: '🍰' },
] as const

export const getMenuByCategory = (category: MenuItem['category']) =>
  menuItems.filter(item => item.category === category)
