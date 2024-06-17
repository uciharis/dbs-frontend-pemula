// validasi utk tahun buku
// thn.1700 s.d 2024
let inputBookYear = document.getElementById('inputBookYear');
let errorMessage = document.getElementById('errorMessage');
inputBookYear.addEventListener('change',()=>{
    let bookYear = parseInt(inputBookYear.value);
    if(bookYear<1700 || bookYear>2024){
        errorMessage.textContent='tahun harus diantara 1700 s.d 2024';
        errorMessage.style.color='red';
        errorMessage.style.fontSize='0.7rem'
    } else{
        errorMessage.textContent=''
}
console.log(inputBookYear.textContent)
});
// initialize variabel2 bookshelf
const incompleteBook = [];
const RENDER_EVENT = 'render-masuk';
const SAVED_EVENT = 'saved-masuk '



// persiapan local storage :
function isStorageExist(){
    if (typeof(Storage)===undefined){
        alert('browsermu tidak mendukung penyimpanan lokal bruh ..');
        return false;
    } return true;
}

//fungsi save data
if (isStorageExist()){
    const parsed = JSON.stringify(incompleteBook )
}