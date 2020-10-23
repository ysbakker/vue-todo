<template>
  <div id="app">
    <h1>Epic TODO list application</h1>
    <TodoList />
    <TodoControls />
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
  async created() {
    this.$store.dispatch('populateTodos')
  },
}
</script>
