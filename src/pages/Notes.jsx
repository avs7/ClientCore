import ContentLayout from '../layouts/ContentLayout'
import NoteList from '../components/notes/NoteList'
import NoteDetails from '../components/notes/NoteDetails'

export default function Notes() {
  return (
    <ContentLayout
      contentType={'Notes'}
      contentElement={<NoteDetails />}
      contentList={<NoteList />}
    />
  )
}
