
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F1F2F5]">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
