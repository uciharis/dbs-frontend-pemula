document.addEventListener('DOMContentLoaded', function(){
    let submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTodo();
    });
});

function addTodo(){
    let textTodo = document.getElementById('title').value;
    let timeStamp = document.getElementById('date').value;

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