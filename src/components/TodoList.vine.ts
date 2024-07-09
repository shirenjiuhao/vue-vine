import TodoItem from "./TodoItem.vine"
interface Todo {
  id: number;
  text: string;
}
function TodoList(props: { todos: Todo[] }) {
  const myEmit = vineEmits<{
    delTodo: [id: number]
  }>()
  const deleteTodo = (id: number) => {
    myEmit('delTodo', id)
  }
  const { todos } = props
  return vine`
    <div v-if="!todos.length">暂无待办事项</div>
    <div v-else>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo" />
    </div>
  `
}
export default TodoList
