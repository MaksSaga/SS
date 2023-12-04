import { cn } from '../../../utils/tailwind/cn'
import { FC, JSX } from 'react'

export interface IPrimaryButton {
  text: string
  Icon?: JSX.Element
  big?: boolean
  gray?: boolean
  className?: string
  textClassName?: string
  disabled?: boolean
  handler?: () => void
}

export const PrimaryButton: FC<IPrimaryButton> = ({
  text,
  Icon,
  big,
  gray,
  className,
  textClassName,
  disabled,
  handler,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={cn(
        'items-center flex gap-1.5 font-medium text-sm text-white justify-center p-2.5 bg-crimson-500 rounded-min hover:bg-crimson-600 transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:select-none',
        { 'text-base px-7 py-5': big, 'bg-iron-500 hover:bg-iron-550': gray },
        className
      )}
      onClick={handler}
    >
      {Icon}
      <p className={textClassName}>{text}</p>
    </button>
  )
}
