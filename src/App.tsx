import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Items from './pages/Items'
import NotFound from './pages/NotFound'
import { PATHS } from './routes/paths'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.items}>
          <Route index element={<Items />} />
          <Route path=":id" element={<ItemDetail />} />
        </Route>
        <Route path={PATHS.cart} element={<Cart />} />
        <Route path={PATHS.checkout} element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
