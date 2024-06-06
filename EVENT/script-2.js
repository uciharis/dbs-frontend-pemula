let submitAction = document.getElementById('formDataDiri');
submitAction.addEventListener('submit', function(event){
    let inputNama = document.getElementById('inputNama').value;
    //console.log(inputNama);
    let inputDomisili = document.getElementById('inputDomisili').value;
    //console.log(inputDomisili);
    let hiddenMessage = `halo, ${inputNama}. bagaimana kondisi di ${inputDomisili}?`

    document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
    event.preventDefault();

});