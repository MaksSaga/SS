import { FC, ReactNode } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'

interface IPrimaryBorderSection {
  className?: string
  children?: ReactNode
}

export const PrimaryBorderSection: FC<IPrimaryBorderSection> = ({ className, children }) => {
  return (
    <div className={cn('p-2.5 rounded-default border-0.5 border-iron-100', className)}>
      {children}
    </div>
  )
}
