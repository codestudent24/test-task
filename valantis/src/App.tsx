import { useEffect, useState } from 'react'
import './App.css'
import { useGetItemsMutation } from './api/api'
import { ListItem } from './components/ItemList'
import Loader from './components/Loader/Loader'
import { Pagination } from './components/Pagination'
import { TypeProduct } from './types/product.type'
import { getUniqueItems } from './utils/getUniqueItems'

function App() {
  const [ items, setItems] = useState<TypeProduct[]>([])
  const [ ids, setIds ] = useState<string[]>([])
  const [ mutateItems ] = useGetItemsMutation()
  const [ isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    function getItems() {
      setIsLoading(true)
      mutateItems({ ids }).unwrap()
      .then(response => {
        const items = getUniqueItems(response.result)
        setItems(items)
      })
      .catch(error => console.log(`rejected: ${error}`))
      .finally(() => { setIsLoading(false) })
    }
    if (ids.length) getItems()
  }, [ids, mutateItems])

  return (
    <main>
      <h1>Список товаров</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ListItem items={items} />
      )}
      <Pagination setIds={setIds} />
    </main>
  )
}

export default App
