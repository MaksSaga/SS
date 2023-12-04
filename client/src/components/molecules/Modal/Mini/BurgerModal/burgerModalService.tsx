import { JSX } from 'react'
import AboutUsSVG from '../../../../../assets/img/svg/about-us.svg?react'
import ContactSVG from '../../../../../assets/img/svg/contact.svg?react'

type TBurgerModalPages = { label: string; link: string; Icon: JSX.Element }[]

export const burgerModalPages: TBurgerModalPages = [
  {
    label: 'Про нас',
    link: 'about-us',
    Icon: <AboutUsSVG />,
  },
  {
    label: 'Контакты',
    link: 'contact',
    Icon: <ContactSVG />,
  },
]
