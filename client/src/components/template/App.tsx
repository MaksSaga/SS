import { Layout } from './Layout.tsx'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/Main/MainPage.tsx'
import { CardMainPage } from '../../pages/Card/Main/CardMainPage.tsx'
import { CardDescriptionPage } from '../../pages/Card/Description/CardDescriptionPage.tsx'
import { CardHeader } from './CardHeader/CardHeader.tsx'
import { CategoryPage } from '../../pages/Category/CategoryPage.tsx'
import { SubsetPage } from '../../pages/Subset/SubsetPage.tsx'
import { AboutUsPage } from '../../pages/AboutUs/AboutUsPage.tsx'
import { ContactPage } from '../../pages/Contact/ContactPage.tsx'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage.tsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="subset/:subset" element={<SubsetPage />} />
        <Route path="card/:id" element={<CardHeader />}>
          <Route index element={<CardMainPage />} />
          <Route path="description" element={<CardDescriptionPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
