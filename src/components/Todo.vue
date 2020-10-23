<template>
  <li
    :class="{ completed: item.completed }"
    @click="item.completed = !item.completed"
  >
    <input type="checkbox" :checked="item.completed" />
    <p>{{ item.title }}</p>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: ['item'],
}
</script>

<style lang="sass" scoped>
p, input[type=checkbox]
  font-size: 1.3em
  display: inline-block
  margin: 0

input[type=checkbox]
  margin-right: 1em;

li
  padding: 1em
  cursor: pointer
  background: #dd7777
  &.completed
    background: #77dd77
    p
      text-decoration: line-through
      font-weight: bold
  &:nth-child(even)
    background: darken(#dd7777, 10)
    &.completed
      background: darken(#77dd77, 10)
</style>
