import ContactDetails from '../components/contacts/ContactDetails'
import ContactList from '../components/contacts/ContactList'
import NoteList from '../components/notes/NoteList'
import ContentLayout from '../layouts/ContentLayout'

export default function Notes() {
  return (
    <ContentLayout
      contentType={'Contacts'}
      contentElement={<ContactDetails />}
      contentList={<ContactList />}
    />
  )
}
