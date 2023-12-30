import { createContext, useReducer } from 'react'

type Todo = {
  id: string
  text: string
  done: boolean
}

type Action =
  | { type: 'CREATE'; text: Todo['text'] }
  | { type: 'TOGGLE'; id: Todo['id'] }
  | { type: 'REMOVE'; id: Todo['id'] }

type TodoState = Todo[]
type TodoDispatch = React.Dispatch<Action>

type TodoContext = {
  state: TodoState
  dispatch: TodoDispatch
}

export const TodoContext = createContext<TodoContext | null>(null)

type TodoContextProviderProps = React.PropsWithChildren<{
  defaultTodo?: Todo[]
}>

export function TodoContextProvider({ defaultTodo, children }: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(todosReducer, defaultTodo ?? [])

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
}

function todosReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case 'CREATE':
      return state.concat({
        id: crypto.getRandomValues(new Uint32Array(1))[0].toString(16),
        text: action.text,
        done: false,
      })

    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo))

    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id)

    default:
      throw new Error('Unhandled action')
  }
}
