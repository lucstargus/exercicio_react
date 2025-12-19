const ADD = 'ADD'
const REMOVE = 'REMOVE'
const EDIT = 'EDIT'

export const addContact = (contact) => ({ type: ADD, payload: contact })
export const removeContact = (id) => ({ type: REMOVE, payload: id })
export const editContact = (contact) => ({ type: EDIT, payload: contact })

export default function contactsReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]
    case REMOVE:
      return state.filter(c => c.id !== action.payload)
    case EDIT:
      return state.map(c => c.id === action.payload.id ? action.payload : c)
    default:
      return state
  }
}
