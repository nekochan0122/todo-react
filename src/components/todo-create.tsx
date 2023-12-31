import { useRef } from 'react'

import { useTodoContext } from '~/hooks/use-todo-context'

export function TodoCreate() {
  const inputRef = useRef<React.ElementRef<'input'>>(null)

  const { dispatch } = useTodoContext()

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!inputRef.current) return

    const text = inputRef.current.value || ''
    if (!text.length) return alert('Please enter a todo')

    dispatch({ type: 'CREATE', text })
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
      <button type='submit'>add</button>
    </form>
  )
}
