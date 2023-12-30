import { useTodoContext } from '~/hooks/use-todo-context'

export function TodoList() {
  const { state, dispatch } = useTodoContext()

  return (
    <ul>
      {state.map((todo) => (
        <li key={todo.id}>
          <input
            id={todo.id}
            type='checkbox'
            checked={todo.done}
            onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })}
          />
          <label htmlFor={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </label>
          <button onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}>remove</button>
        </li>
      ))}
    </ul>
  )
}
