// set data

var data = {
  message: "Hello World!"
}

new Vue({
  el: "#app",
  data: data
});

// data binding

new Vue({
  el: "#data-binding",
  data: {
    message: "Init data"
  }
});

// object with array - for loop

new Vue({
  el: "#array-loop",
  data: {
    todos: [
      { id: 1, text: "Learn Javascript" },
      { id: 2, text: "Learn Vue.js" },
      { id: 3, text: "Build awesome things!" }
    ]
  }
});

// methods

new Vue({
  el: "#onclick",
  data: {
    message: "reverse message"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

// all things together

var allTodos = [
  { text: "Learn Javascript" },
  { text: "Learn Vue.js" },
  { text: "Build awesome things!" }
]

var vue = new Vue({
  el: "#all-together",

  data: {
    newTodo: '',
    todos: allTodos
  },

  methods: {
    addTodo: function() {
      if (this.newTodo) {
        this.todos.push({ text: this.newTodo });
        this.newTodo = '';
      }
    },

    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});

// inheritance

var NewComponent = Vue.extend({});
new NewComponent();
