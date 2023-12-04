import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools, persist } from 'zustand/middleware'

interface Product {
  unique_id: number
  name: string
  currentPrice: number
  oldPrice?: number
  count: number
  img_url: string
}

interface CartState {
  products: Product[] & []
  count: number
  priceTotal: number
  addProduct: (product: Product) => any
  removeProduct: (unique_id: number) => any
}

export const useCartStore = create<CartState>()(
  persist(
    devtools(
      immer(set => ({
        products: [],
        count: 0,
        priceTotal: 0,
        addProduct: product =>
          set((state: CartState) => {
            const existingProduct = state.products.find(
              item => item.unique_id === product.unique_id
            )

            if (existingProduct) {
              existingProduct.count += 1
              existingProduct.currentPrice += product.currentPrice

              if (existingProduct.oldPrice !== undefined && product.oldPrice !== undefined) {
                existingProduct.oldPrice += product.oldPrice
              }
            } else {
              state.products.push({
                ...product,
                count: 1,
              })
              state.count += 1
              state.priceTotal += product.currentPrice
            }
          }),
        removeProduct: (unique_id: number) => {
          set((state: CartState) => {
            const index = state.products.findIndex(item => item.unique_id === unique_id)

            if (index !== -1) {
              const removedProduct = state.products.splice(index, 1)[0]

              state.count -= removedProduct.count
              state.priceTotal -= removedProduct.currentPrice

              if (removedProduct.oldPrice !== undefined) {
                state.priceTotal -= removedProduct.oldPrice
              }
            }
          })
        },
      }))
    ),
    { name: 'cart', version: 1 }
  )
)
