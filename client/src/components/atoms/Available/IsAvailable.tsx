import { FC, useEffect, useState } from 'react'
import { cn } from '../../../utils/tailwind/cn.ts'

export interface IIsAvailable {
  available?: 0 | 1 | 2
  className?: string
}

export const IsAvailable: FC<IIsAvailable> = ({ available = 1, className }) => {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    switch (available) {
      case 0:
        setText('Немає у наявності')
        break
      case 2:
        setText('Закінчується')
        break
      default:
        setText('Є у наявності')
        break
    }
  }, [available])

  return (
    <p
      className={cn(
        'text-sm text-teal-500 leading-4',
        { 'text-crimson-500': available !== 1 },
        className
      )}
    >
      {text}
    </p>
  )
}
