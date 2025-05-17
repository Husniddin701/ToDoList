document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.querySelector('.task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskDiv.appendChild(checkbox);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = taskText;
        taskDiv.appendChild(taskTextSpan);

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
           
        });
        taskDiv.appendChild(editButton);

        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskDiv.remove();
        });
        taskDiv.appendChild(deleteButton);

      
        const dateTimeDiv = document.createElement('div');
        dateTimeDiv.classList.add('date-time');

        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateTimeDiv.appendChild(dateInput);

        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        dateTimeDiv.appendChild(timeInput);

        const setTimeButton = document.createElement('button');
        setTimeButton.textContent = 'Set time';
        setTimeButton.addEventListener('click', function() {
            const selectedDate = dateInput.value;
            const selectedTime = timeInput.value;

            if (selectedDate && selectedTime) {
                const reminderDateTime = new Date(`${selectedDate}T${selectedTime}`); 
                setReminder(taskText, reminderDateTime);
            } else {
                alert('Iltimos, sanani va vaqtni kiriting!');
            }
        });
        dateTimeDiv.appendChild(setTimeButton);

        taskDiv.appendChild(dateTimeDiv);

        taskList.appendChild(taskDiv);
    }

    function setReminder(taskText, reminderDateTime) {
        const now = new Date();
        const timeDiff = reminderDateTime.getTime() - now.getTime();

        if (timeDiff > 0) {
            setTimeout(function() {
                alert(`Eslatma: ${taskText}!`);
            }, timeDiff);
        } else {
            alert("Belgilangan vaqt o'tib ketgan!");
        }
    }
});
