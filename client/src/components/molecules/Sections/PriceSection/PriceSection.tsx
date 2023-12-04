import { IPrice, Price } from '../../../atoms/Price/Price.tsx'
import { IIsAvailable, IsAvailable } from '../../../atoms/Available/IsAvailable.tsx'
import { FC } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'

export interface IPriceSection {
  price: IPrice
  available: IIsAvailable
  className?: string
}

export const PriceSection: FC<IPriceSection> = ({ price, available, className }) => {
  return (
    <div className={cn('', className)}>
      <Price
        currentPrice={price.currentPrice}
        oldPrice={price.oldPrice}
        big={price.big}
        className={price.className}
      />
      <IsAvailable available={available.available} className={available.className} />
    </div>
  )
}
