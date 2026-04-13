import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | null;
  category: { name: string } | string;
  sizes: string[] | string;
  specs?: any;
}

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: any, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id && item.selectedSize === size
        );

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Normalize product data from DB or Component
          const categoryName = typeof product.category === 'object' ? product.category.name : product.category;
          
          set({
            items: [...currentItems, { 
              ...product, 
              category: categoryName,
              selectedSize: size, 
              quantity: 1 
            }],
          });
        }
      },
      removeItem: (productId, size) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === productId && item.selectedSize === size)
          ),
        });
      },
      updateQuantity: (productId, size, quantity) => {
        set({
          items: get().items.map((item) =>
            item.id === productId && item.selectedSize === size
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'casitaperu-cart',
    }
  )
);
