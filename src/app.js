import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        { name: "Buy shopping", priority: "Low" },
        { name: "Clean bathroom", priority: "Low" },
        { name: "Car's MOT", priority: "High" },
      ],
      newItem: "",
      picked: "",
    },
    methods: {
      saveNewItem: function () {
        this.todos.push(this.newItem);
        this.newItem = "";
      },
      setPriority: function (index) {
        this.items[index].isPurchased = true;
      },
    },
  });
});
