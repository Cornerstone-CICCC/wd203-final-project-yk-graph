import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="sp:flex">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Header />
        <main className="flex-1 pt-14 sp:pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
