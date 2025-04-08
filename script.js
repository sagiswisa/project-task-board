

let form = document.getElementById('add-task');
const taskList = document.getElementById('taskList');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskInfo = document.getElementById('taskINFO').value;
    const dueDate = document.getElementById('due-Date').value;
    const taskTime = document.getElementById('task-time').value;

    if (!taskInfo || !dueDate || !taskTime) {
        alert('Please fill out all fields!');
        return;
    }


const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.innerHTML = `
                 <button class="delete-button">&times;</button>
        <div id=<"info-box"> 
        <p id= "note-task"><div class ="task-title">Task</div><div class = "task info"> ${taskInfo}</div></p>
        </div>
        <div id="bottom-date">
            <p><strong>Due:</strong> <span class="note-date">${dueDate}</span></p>
            <p><strong>Time: <span class="note-time">${taskTime}</span> </strong> </p>

        </div>
    `;



newNote.querySelector('.delete-button').addEventListener('click', function () {
    newNote.remove();

const notes = JSON.parse(localStorage.getItem('notes')) || [];
const updatedNotes = notes.filter(note => note.taskInfo !== taskInfo || note.dueDate !== dueDate || note.taskTime !== taskTime);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    });


const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ taskInfo, dueDate, taskTime });
    localStorage.setItem('notes', JSON.stringify(notes));

    taskList.appendChild(newNote);
    form.reset();
});

const form2 = document.querySelector('#add-task'); 

document.querySelector('#reset-button').addEventListener('click', function () {
    if (form2) {
        form2.reset();
}
});