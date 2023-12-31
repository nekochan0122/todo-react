import { TodoContextProvider } from '~/contexts/todo-context'
import { TodoCreate } from '~/components/todo-create'
import { TodoList } from '~/components/todo-list'

const defaultTodo = [
  { id: 'default-1', text: 'Buy milk', done: true },
  { id: 'default-2', text: 'Buy a unicorn', done: false },
]

export function App() {
  return (
    <TodoContextProvider {...{ defaultTodo }}>
      <TodoCreate />
      <TodoList />
    </TodoContextProvider>
  )
}
