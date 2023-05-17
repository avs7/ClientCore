import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalElement, setModalElement] = useState(null)

  const toggleModal = () => setModalOpen(prev => !prev)

  const handleClick = (modalDescription, element) => {
    setModalElement(element)
    setModalType(modalDescription)
    toggleModal()
  }

  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 p-2'>
        <Outlet
          context={{
            modalOpen,
            toggleModal,
            modalType,
            setModalType,
            handleClick,
            modalElement,
          }}
        />
      </div>
      <Footer />
    </div>
  )
}
