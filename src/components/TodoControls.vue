<template>
  <form @submit="addTodo">
    <input v-model="todo" value="todo" />
    <input type="submit" :value="`Add ${todo || 'todo'}`" />
  </form>
</template>

<script>
export default {
  name: 'TodoControls',
  data() {
    return {
      todo: '',
    }
  },
  methods: {
    addTodo(event) {
      event.preventDefault()
      const todo = {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        title: this.todo,
        completed: false,
      }
      this.$store.commit('addTodo', todo)
      this.todo = ''
    },
  },
}
</script>
