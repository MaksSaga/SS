import { useParams } from 'react-router-dom'

export const CategoryPage = () => {
  const { category } = useParams()

  return <div>{category}</div>
}
