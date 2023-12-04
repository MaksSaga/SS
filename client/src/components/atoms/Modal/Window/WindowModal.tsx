import { FC, MouseEvent, MutableRefObject, ReactNode, useCallback, useRef } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import CrossSVG from 'assets/img/svg/cross.svg?react'

interface IWindowModal {
  name: string
  children: ReactNode
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  className?: string
}

export const WindowModal: FC<IWindowModal> = ({
  name,
  isActive,
  setIsActive,
  children,
  className,
}) => {
  const wrapperWindowModal: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const hiddenWindowModal = useCallback((): void => {
    setIsActive(false)
  }, [setIsActive])

  const validateClickWrapperWindowModal = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === wrapperWindowModal.current) hiddenWindowModal()
  }

  return (
    <div
      ref={wrapperWindowModal}
      className={cn(
        'w-full h-full fixed opacity-0 duration-300 transition-all top-0 left-0 bg-black/0 -z-50 pointer-events-none',
        {
          'opacity-1 bg-black/40 z-50 pointer-events-auto': isActive,
        }
      )}
      onClick={(event: MouseEvent<HTMLDivElement>) => validateClickWrapperWindowModal(event)}
    >
      <div
        className={cn(
          'max-h-[94%] transition-transform max-md:py-2 max-md:px-2 px-5 py-5 rounded-default flex flex-col w-3/5 max-md:w-[96%] bg-white absolute left-1/2 top-1/2 -translate-y-2/3 duration-300 -translate-x-1/2',
          { '-translate-y-1/2': isActive }
        )}
      >
        <div className="max-md:py-2 max-md:px-2  px-5 py-5 rounded-default absolute top-0 left-0 w-full bg-white text-xl max-h-16 border-b flex justify-between">
          <p>{name}</p>
          <button
            className="stroke-iron-400 hover:stroke-iron-600 transition-colors"
            onClick={hiddenWindowModal}
          >
            <CrossSVG />
          </button>
        </div>
        <div className={cn('overflow-y-auto mt-16', className)}>{children}</div>
      </div>
    </div>
  )
}
