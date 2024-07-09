import { ref } from 'vue'

import TodoInput from './TodoInput.vine'
import TodoList from './TodoList.vine'

function HelloWorld(props: { msg: string }) {
  const { msg } = props
  const count = ref(0)
  const setCount = () => count.value++
  const list = ref([
    { id: 1, text: '学习HTML CSS JS' },
    { id: 2, text: '学习Vue Vine 框架' },
    { id: 3, text: '学习Node.js 服务端，全栈开发' }
  ])
  function addTodo(todo: string): void {
    const todoObj = {
      id: list.value.length + 1,
      text: todo
    }
    list.value.push(todoObj)
    // 下面这种写法 导致响应式丢失
    // list.value = [...list.value, todoObj]
  }
  function delTodo(id: number): void {
    const index = list.value.findIndex(o => o.id === id)
    list.value.splice(index, 1)
    // 下面这种写法 导致响应式丢失
    // list.value = list.value.filter(o => o.id !== id)
  }
  return vine`
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="setCount">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vine</code> to test HMR
      </p>
    </div>
    <TodoInput @update="addTodo" />
    <TodoList :todos="list" @delTodo="delTodo" />
  `
}
export default HelloWorld
