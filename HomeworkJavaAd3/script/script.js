
let reminders = [];
let colors = ['green', 'pink', 'yellow', 'blue', 'red'];
// Contructor
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

// Selectors

let title = document.getElementById('title');
let priority = document.getElementById('priority');
let color = document.getElementById('color');
let description = document.getElementById('description');
let tbody = document.querySelector('tbody');
let addReminder = document.getElementById('add-reminder');
let showRemindersBtn = document.getElementById('show-reminders');

// Events
addReminder.addEventListener('click', function () {
  tbody.innerHTML = '';
  let titleValue = title.value;
  let priorityValue = priority.value;
  let colorValue = color.value;
  let descriptionValue = description.value;

  let newReminder = new Reminder(titleValue, priorityValue, colorValue, descriptionValue);

  if (checkInputs()) {
    alert('Please enter empty fields');
    return;
  } 
    if (!checkColors(color)) {
      alert('We dont have that color');
    } else {
      reminders.push(newReminder);
      showReminders();
    }
  
});

showRemindersBtn.addEventListener('click', showReminders());

function showReminders() {
  tbody.innerHTML = '';
  for (const reminder of reminders) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.innerText = reminder.title;
    td1.style.color = reminder.color;
    td2.innerText = reminder.priority;
    td3.innerText = reminder.description;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function checkInputs() {
  if (title.value === '' || priority.value === '' || color.value === '' || description.value === '')
    return true;
  else
    return false;
}


function checkColors(newColor) {
  for (const color of colors) {
    if (newColor.value === color) {
      return true
    }
  }
  return false
}