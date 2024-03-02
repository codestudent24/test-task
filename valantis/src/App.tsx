import './App.css'
import { Filter } from './components/Filter'
import { Pagination } from './components/Pagination'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <main>
      <h1>Список товаров</h1>
      <Filter />
      <ProductList />
      <Pagination />
    </main>
  )
}

export default App
