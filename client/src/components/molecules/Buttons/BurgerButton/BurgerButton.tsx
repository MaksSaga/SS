import { FC, MutableRefObject, useRef, useState } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { BurgerModal } from '../../Modal/Mini/BurgerModal/BurgerModal.tsx'

interface IBurger {
  className?: string
}

export const BurgerButton: FC<IBurger> = ({ className }) => {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false)
  const burgerButtonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null)

  const handlerOnClickBurger = () => {
    setIsActiveBurger(prevState => !prevState)
  }

  return (
    <div className="relative flex justify-center items-center">
      <button ref={burgerButtonRef} type="button" className="py-2.5" onClick={handlerOnClickBurger}>
        <div
          className={cn(
            'w-7 h-0.5 relative rounded-default bg-white before:w-7 before:h-0.5 before:bg-white before:absolute before:-top-2 before:left-0 after:w-7 after:h-0.5 after:bg-white after:absolute after:top-2 after:left-0 after:transition-transform before:transition-transform',
            { 'before:rotate-45 before:top-0 after:-rotate-45 after:top-0 h-0': isActiveBurger },
            className
          )}
        />
      </button>
      <BurgerModal
        parentLink={burgerButtonRef}
        isActive={isActiveBurger}
        setIsActive={setIsActiveBurger}
        position="left"
      />
    </div>
  )
}
