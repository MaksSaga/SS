import { PrimaryButton } from '../../../atoms/Buttons/PrimaryButton.tsx'
import CatalogSVG from '../../../../assets/img/svg/catalog.svg?react'
import CrossSVG from '../../../../assets/img/svg/cross.svg?react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { FC, MutableRefObject, useRef, useState } from 'react'
import { CatalogModal } from '../../Modal/Mini/CatalogModal/CatalogModal.tsx'

interface ICatalogButton {
  className?: string
  adaptation?: boolean
}

export const CatalogButton: FC<ICatalogButton> = ({ adaptation = true, className }) => {
  const [isActiveCatalog, setIsActiveCatalog] = useState<boolean>(false)
  const catalogButtonRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const handlerIsActiveCatalog = () => setIsActiveCatalog(prevState => !prevState)

  return (
    <div className={cn('relative', className)}>
      <div ref={catalogButtonRef}>
        <PrimaryButton
          textClassName={cn({ 'max-lg:hidden': adaptation })}
          text="Каталог"
          gray
          Icon={
            isActiveCatalog ? (
              <CrossSVG className="stroke-white pointer-events-none" />
            ) : (
              <CatalogSVG className="stroke-white pointer-events-none" />
            )
          }
          handler={handlerIsActiveCatalog}
          className={cn('font-normal', { 'max-lg:w-10 max-lg:h-10': adaptation })}
        />
      </div>
      <CatalogModal
        setIsActive={handlerIsActiveCatalog}
        isActive={isActiveCatalog}
        parentLink={catalogButtonRef}
        position="left"
      />
    </div>
  )
}
