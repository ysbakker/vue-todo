<template>
  <div id="app">
    <h1>Epic TODO list application</h1>
    <TodoList :todos="todos" />
    <TodoControls @addTodo="addTodo" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoControls from './components/TodoControls.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoControls,
  },
  data() {
    return {
      todos: [],
    }
  },
  async created() {
    this.todos = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    ).then(res => res.json())

    this.todos = this.todos.filter(
      (todo, i) => i % Math.round(Math.random() * 100) === 0
    )
  },
  methods: {
    addTodo(todo) {
      this.todos = todo ? this.todos : [...this.todos, todo]
    },
  },
}
</script>
