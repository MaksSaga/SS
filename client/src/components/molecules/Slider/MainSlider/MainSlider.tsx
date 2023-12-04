import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const MainSlider = () => {
  const isMinMd: boolean = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1300}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="rounded-default max-h-[400px] w-full overflow-hidden select-none"
      loop={true}
    >
      <SwiperSlide>
        {isMinMd ? (
          <img className="w-full max-h-[400px]" src="/src/assets/img/other/slide_1.png" alt="" />
        ) : (
          <img
            className="w-full max-h-[400px]"
            src="/src/assets/img/other/slide_1_tel.png"
            alt=""
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {isMinMd ? (
          <img className="w-full max-h-[400px]" src="/src/assets/img/other/slide_1.png" alt="" />
        ) : (
          <img
            className="w-full max-h-[400px]"
            src="/src/assets/img/other/slide_1_tel.png"
            alt=""
          />
        )}
      </SwiperSlide>
    </Swiper>
  )
}
