import { FC, useEffect, useState } from 'react'
import { IPrice } from '../../../atoms/Price/Price.tsx'
import { IIsAvailable } from '../../../atoms/Available/IsAvailable.tsx'
import { PrimaryButton } from '../../../atoms/Buttons/PrimaryButton.tsx'
import { PrimaryBorderSection } from '../../../atoms/Sections/PrimaryBorderSection.tsx'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { QuestionButton } from '../../Buttons/QuestionButton/QuestionButton.tsx'
import { PriceSection } from '../PriceSection/PriceSection.tsx'

interface IOrderSection {
  price: IPrice
  available: IIsAvailable
  handlerOrderButton: () => void
}

export const OrderSection: FC<IOrderSection> = ({ price, available, handlerOrderButton }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(true)

  useEffect(() => {
    setIsAvailable(available.available !== 0)
  }, [])

  return (
    <PrimaryBorderSection
      className={cn('flex justify-between items-center flex-wrap gap-5', {
        'select-none opacity-50 pointer-events-none': !isAvailable,
      })}
    >
      <PriceSection
        price={{
          currentPrice: price.currentPrice,
          oldPrice: price.oldPrice,
          className: price.className,
        }}
        available={{ available: available.available, className: available.className }}
      />
      <div className="flex gap-2.5 flex-wrap">
        <QuestionButton disabled={!isAvailable} />
        <PrimaryButton disabled={!isAvailable} text="Замовити" big handler={handlerOrderButton} />
      </div>
    </PrimaryBorderSection>
  )
}
