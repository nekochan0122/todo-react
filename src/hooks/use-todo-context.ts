import { useContext } from 'react'

import { TodoContext } from '~/contexts/todo-context'

export function useTodoContext() {
  const state = useContext(TodoContext)

  if (!state) throw new Error('TodosProvider not found')

  return state
}
