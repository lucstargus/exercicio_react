import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../redux/contactsSlice'
import styled from 'styled-components'

const Form = styled.form`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function ContactForm({ contact, setEditing }) {
  const [name, setName] = useState(contact?.name || '')
  const [email, setEmail] = useState(contact?.email || '')
  const [phone, setPhone] = useState(contact?.phone || '')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = { id: contact?.id || Date.now(), name, email, phone }
    contact ? dispatch(editContact(newContact)) : dispatch(addContact(newContact))
    setEditing(null)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Nome completo" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
      <button type="submit">Salvar</button>
    </Form>
  )
}
