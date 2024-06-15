// validasi utk tahun peminjaman
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
// ---------------------------------------------------------------------------
