import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(prev => !prev)

  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 p-2'>
        <Outlet context={{ modalOpen, toggleModal }} />
      </div>
      <Footer />
    </div>
  )
}
