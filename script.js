//horloge

setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var clockTime = hours + " : " + minutes + " : " + seconds + " " + period;
  var clock = document.getElementById('clock');
  clock.innerText = clockTime;
}, 1000);


//contact form

$(document).ready(function() {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);

    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"]);
    }
    if (localStorage["message"]) {
      $('#message').val(localStorage["message"]);
    }
  }
  init();
});

$('.stored').change(function() {
  localStorage[$(this).attr('name')] = $(this).val();

});


//math addition

var number1;
var number2;

number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;

var checkAnswer = document.querySelector('input[type=texte]');
var value = checkAnswer.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function() {
  value = checkAnswer.value;
  if (value == answer) {
    alert('bonne réponse!');
  } else {
    alert("Désolé, la réponse est " + answer);
  }
  document.querySelector('input[type=texte]').value = "";
  document.getElementById('number1').innerHTML = "";
  document.getElementById('number2').innerHTML = "";
  number1 = Math.floor((Math.random() * 10) + 1);
  number2 = Math.floor((Math.random() * 10) + 1);
  document.getElementById('number1').innerHTML = number1;
  document.getElementById('number2').innerHTML = number2;

  answer = number1 + number2
};


//todo list

function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function clearDefault(a) {
  if (a.defaultValue == a.value) {
    a.value = ""
  }
};

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show() {
  var todos = get_todos();

  var html = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button></li>';
  };
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  };
}

document.getElementById('add').addEventListener('click', add);
show();
