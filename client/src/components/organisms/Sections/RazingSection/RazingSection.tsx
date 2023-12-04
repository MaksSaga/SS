import { MiniCard } from '../../../molecules/Card/MiniCard/MiniCard.tsx'

export const RazingSection = () => {
  return (
    <div className="grid grid-cols-6 gap-x-2.5 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 max-xl:grid-cols-5 gap-y-5 items-stretch">
      <MiniCard
        cardID={999324}
        name="PowerBank 50000 mAh (4 usb 1 micro 1 type-a)"
        available={{ available: 1 }}
        img="/src/assets/img/other/powerbank.png"
        price={{ currentPrice: 999 }}
      />
    </div>
  )
}
