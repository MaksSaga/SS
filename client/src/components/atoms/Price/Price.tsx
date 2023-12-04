import { FC } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'

export interface IPrice {
  currentPrice: number
  oldPrice?: number
  className?: string
  big?: boolean
}

export const Price: FC<IPrice> = ({ currentPrice, oldPrice, big = true, className }) => {
  return (
    <div className={cn('', className)}>
      {oldPrice && (
        <p
          className={cn('text-iron-200 line-through select-none', {
            'text-m text-iron-200': big,
          })}
        >
          {oldPrice} ₴
        </p>
      )}
      <p
        className={cn('font-semibold text-2xl text-iron-600 leading-6', {
          'text-crimson-500': oldPrice,
          'text-3xl leading-8': big,
        })}
      >
        {currentPrice} ₴
      </p>
    </div>
  )
}
