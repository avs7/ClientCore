import { sampleNotes } from '../../data'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function NoteDetails() {
  const params = useParams()
  const [note, setNote] = useState({})

  useEffect(() => {
    setNote(sampleNotes.find(n => n.id === params.id))
  }, [params.id])

  return (
    <>
      <h1>{note?.title}</h1>
      <h3>{note?.details}</h3>
    </>
  )
}
