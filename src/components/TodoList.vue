<template>
  <div>
    <ul>
      <Todo v-for="todo in todos" :key="todo.id" :item="todo" />
    </ul>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
  },
}
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
  padding-left: 0
</style>
