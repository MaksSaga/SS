import { MainSlider } from '../../components/molecules/Slider/MainSlider/MainSlider.tsx'
import { MainPageSection } from '../../components/organisms/Sections/MainPageSection/MainPageSection.tsx'

export const MainPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <MainSlider />
      <MainPageSection />
    </div>
  )
}
