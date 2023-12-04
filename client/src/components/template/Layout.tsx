import { Header } from './Header/Header.tsx'
import { Footer } from './Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-7 py-5 max-md:px-3 max-md:py-4 w-full flex-1">
        <Outlet />
      </div>
      <div className="mb-0">
        <Footer />
      </div>
    </div>
  )
}
