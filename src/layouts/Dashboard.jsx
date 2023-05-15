import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 p-2'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
