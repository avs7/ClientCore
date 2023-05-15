import { sampleContacts } from '../../data'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ContactDetails() {
  const params = useParams()
  const [contact, setContact] = useState({})

  useEffect(() => {
    setContact(sampleContacts.find(c => c.id === params.id))
  }, [params.id])

  return (
    <>
      <h3> Contact Details Page</h3>
      <h1>{contact.first_name}</h1>
      {/* https://tailwindui.com/components/application-ui/page-examples/detail-screens?include=archived */}
    </>
  )
}
