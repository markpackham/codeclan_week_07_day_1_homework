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
      picked: "Low",
    },
    methods: {
      saveNewItem: function () {
        this.todos.push({
          name: this.newItem,
          priority: this.picked,
        });
        this.newItem = "";
      },
    },
  });
});
