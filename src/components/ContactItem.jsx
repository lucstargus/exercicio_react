import { useDispatch } from 'react-redux'
import { removeContact } from '../redux/contactsSlice'
import styled from 'styled-components'

const Item = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
`

export default function ContactItem({ contact, setEditing }) {
  const dispatch = useDispatch()

  return (
    <Item>
      <strong>{contact.name}</strong>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => setEditing(contact)}>Editar</button>
      <button onClick={() => dispatch(removeContact(contact.id))}>Remover</button>
    </Item>
  )
}
