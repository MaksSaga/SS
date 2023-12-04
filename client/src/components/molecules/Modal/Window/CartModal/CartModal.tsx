import { WindowModal } from '../../../../atoms/Modal/Window/WindowModal.tsx'
import { FC } from 'react'
import { cn } from '../../../../../utils/tailwind/cn.ts'
import { useCartStore } from '../../../../../zustand/cart/useCartStore.ts'
import { CartCard } from '../../../Card/CartCard/CartCard.tsx'

interface ICartModal {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  className?: string
}

export const CartModal: FC<ICartModal> = ({ isActive, setIsActive, className }) => {
  const products = useCartStore(state => state.products)
  const addProduct = useCartStore(state => state.addProduct)

  const addNewProduct = () => {
    addProduct({
      unique_id: 0,
      currentPrice: 433,
      oldPrice: 999,
      img_url: '/src/assets/img/other/powerbank.png',
      name: 'PowerBank 50000 mAh (4 usb 1 micro 1 type-a)',
      count: 1,
    })
  }

  return (
    <WindowModal
      name="Кошик"
      isActive={isActive}
      setIsActive={setIsActive}
      className={cn('flex flex-col gap-5 px-1', className)}
    >
      {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <CartCard
              key={index}
              unique_id={item.unique_id}
              name={item.name}
              price={{ currentPrice: item.currentPrice, oldPrice: item.oldPrice }}
              count={item.count}
              img_url={item.img_url}
              available={{ available: 0 }}
            />
          )
        })
      ) : (
        <p className="text-center text-xl">Кошик поки що порожній :(</p>
      )}
      <button type="button" onClick={() => addNewProduct()}>
        ADD PRODUCT
      </button>
    </WindowModal>
  )
}
