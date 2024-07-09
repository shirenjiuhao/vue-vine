function TodoItem(props: {
  todo: {
    id: number
    text: string
  }
}) {
  const { todo } = props
  const myEmit = vineEmits<{
    deleteTodo: [id: number]
  }>()
  const delTodo = () => {
    myEmit('deleteTodo', todo.id)
  }
  return vine`
    <div>
      <span>{{ todo.text }}</span>
      <button @click="delTodo"> X </button>
    </div>
    `
}
export default TodoItem
