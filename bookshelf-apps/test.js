// validasi untuk tahun buku
// tahun 1700 s.d 2024
let inputBookYear = document.getElementById('inputBookYear');
let errorMessage = document.getElementById('errorMessage');
inputBookYear.addEventListener('change', () => {
    let bookYear = parseInt(inputBookYear.value);
    if (bookYear < 1700 || bookYear > 2024) {
        errorMessage.textContent = 'tahun harus diantara 1700 s.d 2024';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '0.7rem';
    } else {
        errorMessage.textContent = '';
    }
});

const todos = [];
const RENDER_EVENT = 'render-todo';
const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';

function generateId() {
    return +new Date();
}

function generateTodoObject(id, title, author, year, isComplete) {
    return {
        id,
        title,
        author,
        year,
        isComplete
    };
}

function findTodo(todoId) {
    for (const todoItem of todos) {
        if (todoItem.id === todoId) {
            return todoItem;
        }
    }
    return null;
}

function findTodoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index;
        }
    }
    return -1;
}

/**
 * Fungsi ini digunakan untuk memeriksa apakah localStorage didukung oleh browser atau tidak
 *
 * @returns boolean
 */
function isStorageExist() /* boolean */ {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

/**
 * Fungsi ini digunakan untuk menyimpan data ke localStorage
 * berdasarkan KEY yang sudah ditetapkan sebelumnya.
 */
function saveData() {
    if (isStorageExist()) {
        const parsed /* string */ = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

/**
 * Fungsi ini digunakan untuk memuat data dari localStorage
 * Dan memasukkan data hasil parsing ke variabel {@see todos}
 */
function loadDataFromStorage() {
    const serializedData /* string */ = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const todo of data) {
            todos.push(todo);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
}

function makeTodo(todoObject) {
    const { id, title, author, year, isComplete } = todoObject;

    const textTitle = document.createElement('p');
    textTitle.innerText = title;

    const textAuthor = document.createElement('p');
    textAuthor.innerText = `Penulis: ${author}`;

    const textYear = document.createElement('p');
    textYear.innerText = `Tahun: ${year}`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textAuthor, textYear);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${id}`);

    if (isComplete) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.innerText = 'Undo';
        undoButton.addEventListener('click', function () {
            undoTaskFromCompleted(id);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.innerText = 'Delete';
        trashButton.addEventListener('click', function () {
            removeTaskFromCompleted(id);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.innerText = 'Complete';
        checkButton.addEventListener('click', function () {
            addTaskToCompleted(id);
        });

        container.append(checkButton);
    }

    return container;
}

function addTodo() {
    const inputTitle = document.getElementById('inputBookTitle').value;
    const inputAuthor = document.getElementById('inputBookAuthor').value;
    const year = document.getElementById('inputBookYear').value;
    const isComplete = document.getElementById('inputBookIsComplete').checked;

    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, inputTitle, inputAuthor, year, isComplete);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function addTaskToCompleted(todoId /* HTMLELement */) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function removeTaskFromCompleted(todoId /* HTMLELement */) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function undoTaskFromCompleted(todoId /* HTMLELement */) {
    const todoTarget = findTodo(todoId);
    if (todoTarget == null) return;

    todoTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

document.addEventListener('DOMContentLoaded', function () {
    const submitForm /* HTMLFormElement */ = document.getElementById('inputBook');

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener(SAVED_EVENT, () => {
    console.log('Data berhasil disimpan.');
});

document.addEventListener(RENDER_EVENT, function () {
    const uncompletedTODOList = document.getElementById('incompleteBookshelfList');
    const listCompleted = document.getElementById('completeBookShelfList');

    // clearing list item
    uncompletedTODOList.innerHTML = '';
    listCompleted.innerHTML = '';

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);
        if (todoItem.isComplete) {
            listCompleted.append(todoElement);
        } else {
            uncompletedTODOList.append(todoElement);
        }
    }
    console.log('RENDER_EVENT triggered:', todos); // Debugging log
});
