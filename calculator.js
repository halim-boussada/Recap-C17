var input = document.getElementById("display");
function display(element) {
  input.value += element;
}

function equal() {
  input.value = eval(input.value);
}

function ac() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}
