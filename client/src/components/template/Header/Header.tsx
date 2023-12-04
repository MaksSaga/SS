import { CatalogButton } from '../../molecules/Buttons/CatalogButton/CatalogButton.tsx'
import { CartButton } from '../../molecules/Buttons/CartButton/CartButton.tsx'
import { Logo } from '../../atoms/Logo/Logo.tsx'
import { BurgerButton } from '../../molecules/Buttons/BurgerButton/BurgerButton.tsx'
import { HeaderSearch } from '../../molecules/Search/HeaderSearch.tsx'

export const Header = () => {
  const VITE_NUMBER_PHONE = import.meta.env.VITE_NUMBER_PHONE

  return (
    <div className="bg-iron-600  ">
      <header className="flex px-7 py-5 max-md:px-3 max-md:py-4 justify-between items-center mx-auto max-w-4xl w-full gap-5">
        <div className="flex items-center gap-5">
          <BurgerButton />
          <Logo />
        </div>
        <div className="flex gap-1.5 items-stretch flex-1 justify-center">
          <CatalogButton className="max-md:hidden" />
          <HeaderSearch />
          <CartButton />
        </div>
        <div className="max-md:hidden">
          <a className="text-white" href={`tel:${VITE_NUMBER_PHONE}`}>
            {VITE_NUMBER_PHONE}
          </a>
        </div>
      </header>
    </div>
  )
}
