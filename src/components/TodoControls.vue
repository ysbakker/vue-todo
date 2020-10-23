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
      this.$emit('addTodo', this.todo)
      this.todo = ''
    },
  },
}
</script>
