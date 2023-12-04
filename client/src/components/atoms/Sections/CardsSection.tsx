import { FC, ReactNode } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'

interface ICardsSection {
  className?: string
  children: ReactNode
}

export const CardsSection: FC<ICardsSection> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-6 gap-x-2.5 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 max-xl:grid-cols-5 gap-y-5 items-stretch',
        className
      )}
    >
      {children}
    </div>
  )
}
