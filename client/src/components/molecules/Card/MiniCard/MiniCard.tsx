import { Discount, IDiscount } from '../../../atoms/Discount/Discount.tsx'
import { IPriceSection, PriceSection } from '../../Sections/PriceSection/PriceSection.tsx'
import { PrimaryBorderSection } from '../../../atoms/Sections/PrimaryBorderSection.tsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../../../utils/tailwind/cn.ts'

interface IMiniCard extends IPriceSection {
  unique_id: number
  name: string
  img: string
  discount?: IDiscount
  className?: string
}

export const MiniCard: FC<IMiniCard> = ({
  unique_id,
  name,
  img,
  discount,
  available,
  price,
  className,
}) => {
  return (
    <Link
      to={`card/${unique_id}`}
      className={cn(
        'transition-transform hover:scale-[102%] duration-300 group',
        {
          'pointer-events-none opacity-50 select-none': available.available === 0,
        },
        className
      )}
    >
      <PrimaryBorderSection className="h-full flex flex-col gap-2.5 relative pb-3 group-hover:border-iron-200 transition-colors duration-300">
        {discount && (
          <Discount
            number={discount.number}
            className={cn('absolute top-2.5 left-2.5', discount.className)}
          />
        )}
        <img className="w-full h-auto rounded-default" src={img} alt={name} />
        <p className="leading-5 break-words">{name}</p>
        <PriceSection
          price={{ currentPrice: price.currentPrice, oldPrice: price.oldPrice, big: false }}
          available={{ available: available.available }}
          className="mb-0 mt-auto"
        />
      </PrimaryBorderSection>
    </Link>
  )
}
