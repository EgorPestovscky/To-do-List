const buttonAdd = document.querySelector('.add__task')
const buttonRemove = document.querySelector('.remove__task')


//кнопка (добавить задачу)
//делаем обработчик событий для добавления задач на кнопку (добавить задачу).
buttonAdd.addEventListener('click', function() {
    let nameTask = prompt('название задачи') //через prompt будем получать название задачи.
    if (nameTask !== null && nameTask.trim() !== "") { // проверяем, ввёл ли пользователь текст или нет.
        const menuTask = document.getElementById('menu__task');
        menuTask.insertAdjacentHTML ( // если ввёл, то создаём новый элемент(задачу) и вставляем его в панель задач.
            'beforeend',
            `                <div class="task">
                    <div class="stateTask">
                        <button id="toggleButton" class="state"></button>
                    </div>
                    <div class="task__name">
                        <p class="name">${nameTask}</p>
                    </div>
                    <div class="task__delete__button">
                        <button class="task__delete">X</button>
                    </div>
                </div>`
        )
    } else {
        alert("Задача не может быть пустой!");// если не ввёл, будет выводится такой текст.
    }
    const items = document.querySelectorAll('.task');
    items.forEach((item, index) => {
        item.id = `task-${index + 1}`; // Присваиваем уникальный ID
    })
})



// кнопка (очистить панель)
//делаем обработчик событий для удаления задач на кнопку.
buttonRemove.addEventListener('click', function() {
    let task = document.querySelector('.task__menu') // Добавляем родительский элемент задач
    task.innerHTML = '' // вставляем пустую строку
})






