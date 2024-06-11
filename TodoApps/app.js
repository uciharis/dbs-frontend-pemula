
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
}