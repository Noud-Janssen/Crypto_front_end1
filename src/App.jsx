import {Routes, Route, Router, BrowserRouter} from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import Home from './pages/home'
import Coin from './pages/coin'
import All from './pages/all'
import PageNotFound from './pages/404'
import Favorites from './pages/favorites'

function App() {  
  return (
    <> 
      <BrowserRouter>
        <Header></Header>
        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Coin></Coin>}/>
          <Route path="/404" element={<PageNotFound></PageNotFound>}/>
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
