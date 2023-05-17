import { useState } from 'react'

export default function useModal() {
  const [open, setOpen] = useState(false)

  const toggleModal = () => setOpen(prev => !prev)

  return [open, toggleModal]
}
