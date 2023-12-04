import { Dispatch, FC, MutableRefObject, ReactNode, SetStateAction, useEffect } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'

export interface IMiniModal {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  parentLink: MutableRefObject<any>
  position?: 'left' | 'right'
  children?: ReactNode
}

export const MiniModal: FC<IMiniModal> = ({
  isActive,
  setIsActive,
  position = 'left',
  parentLink,
  children,
}) => {
  useEffect(() => {
    const hideMiniModal = (event: any) => {
      if (!parentLink.current?.contains(event.target)) setIsActive(false)
    }

    isActive
      ? document.addEventListener('click', hideMiniModal)
      : document.removeEventListener('click', hideMiniModal)
    return () => document.removeEventListener('click', hideMiniModal)
  }, [isActive])

  return (
    <div
      className={cn(
        'transition-transform -z-50 opacity-0 -translate-y-5 absolute top-[calc(100%+15px)] rounded-default bg-white px-2.5 py-2.5 flex flex-col gap-1.5 drop-shadow-lg w-auto whitespace-nowrap',
        {
          'translate-y-0 opacity-100 z-50': isActive,
          'left-0': position === 'left',
          'right-0': position === 'right',
        }
      )}
    >
      {children}
    </div>
  )
}
