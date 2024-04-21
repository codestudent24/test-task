import { Outlet } from 'react-router-dom'
import { Header } from './components/UI/Header'

import './App.css'

function App() {

  return (
    <div className='layout'>
      <Header />

      <main>
        <h1>Тестирование по программе</h1>
        <h3>версия 0.1</h3>
        <Outlet />
      </main>

      <footer>Спасибо за участие в тестировании!</footer>
    </div>
  )
}

export default App
