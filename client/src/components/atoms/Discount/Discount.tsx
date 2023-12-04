import { FC } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'

export interface IDiscount {
  big?: boolean
  number: number
  className?: string
}

export const Discount: FC<IDiscount> = ({ big, number, className }) => {
  return (
    <div
      className={cn(
        'px-2 py-0.5 text-white bg-crimson-500 w-fit font-semibold text-xs rounded-full',
        { 'px-4 py-1 text-xl text-white': big },
        className
      )}
    >
      -{number}%
    </div>
  )
}
