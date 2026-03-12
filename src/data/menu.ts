export interface MenuItem {
  id: string
  name: string
  price: string
  description?: string
  category: 'bebidas-quentes' | 'bebidas-frias' | 'snacks' | 'tostas' | 'doces'
}

export const menuItems: MenuItem[] = [
  // Bebidas Quentes
  { id: 'cafe', name: 'Café Expresso', price: '0,80€', category: 'bebidas-quentes' },
  { id: 'cafe-duplo', name: 'Café Duplo', price: '1,20€', category: 'bebidas-quentes' },
  { id: 'galao', name: 'Galão', price: '1,20€', category: 'bebidas-quentes' },
  { id: 'cappuccino', name: 'Cappuccino', price: '1,80€', category: 'bebidas-quentes' },
  { id: 'chocolate-quente', name: 'Chocolate Quente', price: '2,00€', category: 'bebidas-quentes' },
  { id: 'cha', name: 'Chá (várias opções)', price: '1,20€', category: 'bebidas-quentes' },

  // Bebidas Frias
  { id: 'agua', name: 'Água 0,5L', price: '1,00€', category: 'bebidas-frias' },
  { id: 'sumo-natural', name: 'Sumo Natural', price: '2,50€', category: 'bebidas-frias' },
  { id: 'ice-tea', name: 'Ice Tea', price: '1,80€', category: 'bebidas-frias' },
  { id: 'refrigerante', name: 'Refrigerante', price: '1,50€', category: 'bebidas-frias' },
  { id: 'cerveja', name: 'Cerveja', price: '1,80€', category: 'bebidas-frias' },

  // Snacks
  { id: 'tosta-mista', name: 'Tosta Mista', price: '2,50€', category: 'tostas' },
  { id: 'tosta-especial', name: 'Tosta Especial', price: '3,50€', description: 'Fiambre, queijo e ovo', category: 'tostas' },
  { id: 'tosta-frango', name: 'Tosta de Frango', price: '3,50€', category: 'tostas' },

  // Snacks
  { id: 'batatas-fritas', name: 'Batatas Fritas', price: '2,00€', category: 'snacks' },
  { id: 'nachos', name: 'Nachos com Queijo', price: '3,50€', category: 'snacks' },
  { id: 'nuggets', name: 'Nuggets (8 un.)', price: '3,50€', category: 'snacks' },

  // Doces
  { id: 'pastel-nata', name: 'Pastel de Nata', price: '1,20€', category: 'doces' },
  { id: 'bolo-chocolate', name: 'Bolo de Chocolate', price: '2,00€', category: 'doces' },
  { id: 'waffle', name: 'Waffle', price: '3,00€', description: 'Com gelado ou fruta', category: 'doces' },
]

export const menuCategories = [
  { id: 'bebidas-quentes', label: 'Bebidas Quentes', icon: '☕' },
  { id: 'bebidas-frias', label: 'Bebidas Frias', icon: '🧊' },
  { id: 'tostas', label: 'Tostas', icon: '🥪' },
  { id: 'snacks', label: 'Snacks', icon: '🍟' },
  { id: 'doces', label: 'Doces', icon: '🍰' },
] as const

export const getMenuByCategory = (category: MenuItem['category']) =>
  menuItems.filter(item => item.category === category)
