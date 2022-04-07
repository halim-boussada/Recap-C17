var todos = [
  { todo: "go to the gym" },
  { todo: "have eftar with familie" },
  { todo: "do assignments" },
];

var root = document.getElementById("root");

function render() {
  root.innerHTML = "";
  for (var i = 0; i < todos.length; i++) {
    // root.innerHTML += "<li>" + todos[i].todo + "</li>";
    root.innerHTML += `<li>${todos[i].todo}</li>`;
  }
}

render();

function addElement() {
  var newValue = document.getElementById("input").value;
  var newTodo = { todo: newValue };
  todos.push(newTodo);
  //   todos.push({todo : document.getElementById("input").value})
  render();
  document.getElementById("input").value = "";
}
