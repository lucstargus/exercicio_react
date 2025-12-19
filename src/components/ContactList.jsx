import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

export default function ContactList({ setEditing }) {
  const contacts = useSelector(state => state)
  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} setEditing={setEditing} />
      ))}
    </>
  )
}
