import { Search } from '../../atoms/Search/Search.tsx'

export const HeaderSearch = () => {
  return (
    <Search
      handlerOnChange={value => console.log(value)}
      handlerOnClick={value => console.log(value)}
    />
  )
}
