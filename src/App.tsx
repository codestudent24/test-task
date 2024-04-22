import { Outlet } from 'react-router-dom'
import { Header } from './components/UI/Header'

import './App.css'
import { Footer } from './components/UI/Footer'

function App() {

  return (
    <div className='layout'>
      <Header />

      <main>
        <h1>Тестирование по программе</h1>
        <h3 className='app-version'>версия 0.1</h3>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
