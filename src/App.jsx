import { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

export default function App() {
  const [editing, setEditing] = useState(null)

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Contatos</h1>
      <ContactForm contact={editing} setEditing={setEditing} />
      <ContactList setEditing={setEditing} />
    </div>
  )
}
