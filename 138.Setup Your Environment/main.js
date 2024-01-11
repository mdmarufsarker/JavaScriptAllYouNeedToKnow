import './src/scss/style.scss'
import StackLearner from './src/images/stack_learner.png'
import { setupCounter } from './src/js/counter.js'
import {add, subtract, multiply, divide} from './src/js/calculator.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${StackLearner}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Programmers!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(10, 20))

setupCounter(document.querySelector('#counter'))
