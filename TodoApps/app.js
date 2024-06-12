
document.addEventListener('DOMContentLoaded', function(){
    let submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTodo();
        });
    });

        function addTodo(){
            let textTodo = document.getElementById('title').value;
            let timestamp = document.getElementById('date').value;

            let generateID = generateId();

            let todoObject = generateToDoObject(generateID, textTodo, timeStamp, false);
            todos.push(todoObject);

            document.dispatchEvent(new Event(RENDER_EVENT));

            }

            /* struktur data :
            {
                id: 'string',
                task: 'string',
    timestamp: 'string',
    isComplete: 'boolean'
    };
    */

   function generateId(){
    return +new Date();
    };

    function generateTodoObject(id, task, timestamp, isComplete){
        return {
        id,
        task,
        timestamp,
        isComplete
        }
        };

        let todos = [];
        const RENDER_EVENT = 'render-todo';
        document.addEventListener(RENDER_EVENT, function(){
            console.log(todos);
            });

function makeTodo(todoObject){
    let textTitle = document.createElement('h2');
    textTitle.innerText=todoObject.task;

    let textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp;

    let textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle,textTimestamp);

    let container = document.createElement('div');
    container.classList.add('item','shadow');
    container.append(textContainer);
    container.setAttribute('id',`todo-${todoObject.id}`);

    return container;

    if (todoObject.isComplete){
        let undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click', function(){
            undoTaskFromCompleted(todoObject.id);
        });

        let trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click',function(){
            removeTaskFromCompleted(todoObject.id);
        });

        container.append(undoButton, trashButton);
    } else {
        let checkButton = document.createElement('button');
        checkButton.classList.add('check-button');

        checkButton.addEventListener('click',function(){
            addTaskCompleted(todoObject.id);
        });
        container.append(checkButton);
    }

    return container;
};

document.addEventListener(RENDER_EVENT, function(){
    let uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML='';

    let completedTODOList = document.getElementById('completed-todos');
    completedTODOList.innerHTML='';

    for (let todoItem of todos){
        let todoElement = makeTodo(todoItem);
        if (!todoItem.isComplete){
            uncompletedTODOList.append(todoElement);
        } else {
            completedTODOList.append(todoElement);
        }
    }
});

function addTaskToCompleted (todoId){
    let todoTarget = findTodo(todoId);
    if (todoTarget == null) return;

    todoTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(todoId){
    for (let todoItem of todos){
        if (todoItem.id === todoId){
            return todoItem;
        }
    }
    return null;
}