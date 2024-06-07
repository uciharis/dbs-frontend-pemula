document.addEventListener('DOMContentLoaded', function(){
    let inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText=inputMaxLengthOnLoad;

    document.getElementById('inputNama').addEventListener('input',function(){
        let jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        let jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        console.log('jumlah char diketik: ', jumlahKarakterDiketik);
        console.log('jumlah char Maks: ', jumlahKarakterMaksimal);
        let sisaKarakterUpdate = jumlahKarakterMaksimal-jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if (sisaKarakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerText = 'batas char habis!';
        } else if (sisaKarakterUpdate <= 5){
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });
});