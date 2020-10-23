<template>
  <div id="app">
    <h1>Epic TODO list application</h1>
    <TodoList v-bind:testing="test" />
    <TodoControls />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoControls from "./components/TodoControls.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoControls
  }
};
</script>
