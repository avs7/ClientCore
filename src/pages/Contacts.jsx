import ContentLayout from '../layouts/ContentLayout'
import ContactDetails from '../components/contacts/ContactDetails'
import ContactList from '../components/contacts/ContactList'

export default function Contacts() {
  return (
    <ContentLayout
      contentType={'Contacts'}
      contentElement={<ContactDetails />}
      contentList={<ContactList />}
    />
  )
}
