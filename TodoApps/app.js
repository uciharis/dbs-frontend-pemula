document.addEventListener('DOMContentLoaded', function(){
    let submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', function(event){
        event.preventDefault();
        addTodo();
    });
});

function addTodo(){
    let textTodo = document.getElementById('title').value;
    
}