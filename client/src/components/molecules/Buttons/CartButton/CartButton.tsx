import { PrimaryButton } from '../../../atoms/Buttons/PrimaryButton.tsx'
import CartSVG from '../../../../assets/img/svg/cart.svg?react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { FC, useState } from 'react'
import { CartModal } from '../../Modal/Window/CartModal/CartModal.tsx'
import { useCartStore } from '../../../../zustand/cart/useCartStore.ts'

interface ICartButton {
  className?: string
  adaptation?: boolean
}

export const CartButton: FC<ICartButton> = ({ adaptation = true, className }) => {
  const products = useCartStore(store => store.products)
  const [isActiveWindowModal, setIsActiveWindowModal] = useState<boolean>(false)

  return (
    <>
      <div className="relative">
        <PrimaryButton
          textClassName={cn({ 'max-lg:hidden': adaptation })}
          gray
          text="Кошик"
          handler={() => setIsActiveWindowModal(prevState => !prevState)}
          Icon={<CartSVG className="fill-white" />}
          className={cn('font-normal', { 'max-lg:w-10 max-lg:h-10': adaptation }, className)}
        />
        <span className="absolute -top-2 text-sm -right-2 px-2 flex justify-center items-center rounded-full bg-crimson-500 text-white">
          {products.length <= 0 ? null : products.length}
        </span>
      </div>
      <CartModal isActive={isActiveWindowModal} setIsActive={setIsActiveWindowModal} />
    </>
  )
}
