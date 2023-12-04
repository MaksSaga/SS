import { useParams } from 'react-router-dom'

export const SubsetPage = () => {
  const { subset } = useParams()

  return <div>{subset}</div>
}
