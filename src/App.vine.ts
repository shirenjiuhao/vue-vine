import vueLogo from './assets/vue.svg'
import HelloWorld from './components/HelloWorld.vine'

function App() {
  return vine`
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a> +
      <a href="https://vuejs.org/" target="_blank">
        <img :src="vueLogo" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  `
}
export default App
