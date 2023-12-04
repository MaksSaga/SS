import { FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../../utils/tailwind/cn.ts'

interface ILogo {
  className?: string
  adaptation?: boolean
}

export const Logo: FC<ILogo> = ({ adaptation = true, className }) => {
  return (
    <Link to="/" className={cn('text-crimson-500 text-3xl uppercase font-medium', className)}>
      <p className={cn({ 'max-lg:hidden ': adaptation })}>
        Sale <span className="text-white">Sale</span>
      </p>
      <p className={cn('hidden', { 'max-lg:flex': adaptation })}>
        S<span className="text-white">S</span>
      </p>
    </Link>
  )
}
