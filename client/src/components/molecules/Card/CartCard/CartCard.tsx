import CrossSVG from 'assets/img/svg/cross.svg?react'
import { FC } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { Price } from '../../../atoms/Price/Price.tsx'
import { IPriceSection } from '../../Sections/PriceSection/PriceSection.tsx'
import { useCartStore } from '../../../../zustand/cart/useCartStore.ts'

interface ICartCard extends IPriceSection {
  unique_id: number
  name: string
  count: number
  img_url: string
  className?: string
}

export const CartCard: FC<ICartCard> = ({
  unique_id,
  name,
  price,
  count,
  img_url,
  available,
  className,
}) => {
  const removeProduct = useCartStore(state => state.removeProduct)

  return (
    <div className="relative">
      <div
        data-unique_id={unique_id}
        className={cn(
          'w-full grid grid-cols-[auto_2fr_1fr_auto] grid-rows-[auto_auto] gap-4 items-start border-b pb-2',
          {
            'select-none pointer-events-none opacity-50': available.available === 2,
          },
          className
        )}
      >
        <img
          src={img_url}
          alt="powerbank"
          className={cn('w-full max-w-[150px] min-w-[20px] max-sm:max-w-[60px]')}
        />
        <p className="text-iron-600 col-start-2 col-end-4">{name}</p>
        <span className="col-start-3 row-start-0 self-center">{count} кіл.</span>
        <Price currentPrice={price.currentPrice} big={false} oldPrice={price.oldPrice} />
      </div>
      <button
        onClick={() => removeProduct(unique_id)}
        type="button"
        className="flex justify-end absolute top-0 right-0"
      >
        <CrossSVG className="stroke-iron-550 w-3.5" />
      </button>
    </div>
  )
}
