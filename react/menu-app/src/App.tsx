import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MenuList from './pages/1.MenuList'
import { MenuDetail } from './pages/2.MenuDetail'
import Menuinput from './pages/3.MenuInsert'
import { useState } from 'react'
import MenuEdit from './pages/4.MenuEdit'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id = "container">
      <Header/>
      <section id="content">
        <div id="menu-container" className='text-center'>
          <Routes>
            <Route path="/menus">
            <Route path='' element={<MenuList/>} />
            <Route path= ':id' element={<MenuDetail/>} />
            <Route path="new" element={<Menuinput/>} />
            <Route path=":id/edit" element={<MenuEdit/>} />
            </Route>
          </Routes>
          </div>
      </section>
  </div>
  )
}

export default App
