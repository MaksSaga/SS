import { MouseEvent, useState } from 'react'
import { cn } from '../../../../utils/tailwind/cn.ts'
import { MiniCard } from '../../../molecules/Card/MiniCard/MiniCard.tsx'
import { CardsSection } from '../../../atoms/Sections/CardsSection.tsx'

const tabs = [
  {
    value: 'sale',
    label: 'Розпродаж',
  },
  {
    value: 'trend',
    label: 'У тренді',
  },
  {
    value: 'recommend',
    label: 'Рекомендуємо вам',
  },
]

export const MainPageSection = () => {
  const [activeTab, setActiveTab] = useState<string>('sale')

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-x-5 flex-wrap">
        {tabs.map(item => (
          <button
            key={item.value}
            id={item.value}
            type="button"
            className={cn('text-iron-300 pb-1.5 font-medium', {
              'text-crimson-500 underline-offset-8 underline': activeTab === item.value,
            })}
            onClick={(event: MouseEvent<HTMLButtonElement>) => setActiveTab(event.currentTarget.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <CardsSection>
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
        <MiniCard
          unique_id={999324}
          name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
          available={{ available: 1 }}
          img="/src/assets/img/other/powerbank.png"
          price={{ currentPrice: 999 }}
        />
      </CardsSection>
    </div>
  )
}
