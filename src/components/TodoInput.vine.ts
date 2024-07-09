import { ref } from 'vue'
function TodoInput() {
  const myEmit = vineEmits<{
    update: [val: string]
  }>()

  const text = ref('')
  function addTodo() {
    myEmit('update', text.value)
    text.value = ''
  }
  return vine`
    <div>
      <input type="text" v-model="text" />
      <button @click="addTodo">addInput</button>
    </div>
  `
}
export default TodoInput
