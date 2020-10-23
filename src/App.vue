<template>
  <div id="app">
    <h1>Epic TODO list application</h1>
    <TodoList v-for="todo in todos" :key="todo.id" :content="todo.content" />
    <TodoControls />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoControls from './components/TodoControls.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoControls,
  },
  data: () => ({
    todos: [
      { id: 1, content: 'this is a todo' },
      { id: 2, content: 'this is a todo' },
      { id: 3, content: 'this is a todo' },
      { id: 4, content: 'this is a todo' },
    ],
  }),
};
</script>
