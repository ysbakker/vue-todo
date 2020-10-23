const todo = {
  state: {
    todos: [],
  },
  getters: {
    getTodos: state => state.todos,
  },
  mutations: {
    addTodo: (state, payload) => (state.todos = [...state.todos, payload]),
    toggleTodo: (state, payload) => {
      const matchedTodo = state.todos.find(t => t.id === payload)
      if (matchedTodo) matchedTodo.completed = !matchedTodo.completed
    },
  },
  actions: {
    populateTodos: async ({ commit }) => {
      const todos = (
        await fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
          res.json()
        )
      ).filter((_, i) => i % Math.round(Math.random() * 100) === 0)

      todos.forEach(todo => commit('addTodo', todo))
    },
  },
}

export default todo
