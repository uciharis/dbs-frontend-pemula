// bikin var utk key storage
const localStorageKey = 'PRESS_FREQUENCY';

// mengecek apakah localStorage dg key diatas tersedia/blm
if(typeof (Storage) !== 'undefined'){
    if(localStorage.getItem(localStorageKey) == null){
        localStorage.setItem(localStorageKey,0);
    }
    // bikin variabel masing2 tombol dan display
    let incrementButton = document.getElementById('incrementButton');
    let clearButton = document.getElementById('clear');
    let countDisplay = document.getElementById('count');
    let count=0;

    // nilai item dari local storage
    countDisplay.innerText = localStorage.getItem(localStorageKey);

    incrementButton.addEventListener('click', function(){
        count++;
        localStorage.setItem(localStorageKey,count)
        countDisplay.innerText=localStorage.getItem(localStorageKey);
    });

clearButton.addEventListener('click', function(){
    localStorage.removeItem(localStorageKey);
    countDisplay.innerText= 'kontol';
});
}else {
    alert('browser tidak mendukung');
}