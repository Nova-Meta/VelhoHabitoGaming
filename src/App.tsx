import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Jogos } from './pages/Jogos'
import { Eventos } from './pages/Eventos'
import { Menu } from './pages/Menu'
import { Reservas } from './pages/Reservas'
import { ScrollToTop } from './components/utils/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
        </Route>
      </Routes>
    </>
  )
}
