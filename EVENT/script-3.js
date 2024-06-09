document.addEventListener('DOMContentLoaded', function(){
    let inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText=inputMaxLengthOnLoad;

    document.getElementById('inputNama').addEventListener('input',function(){
        // event input : nilai elemen input berubah,baik ketik, tempel teks, atau hapus
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

    document.getElementById('inputNama').addEventListener('focus', function(){
        // event focus : ketika elemen diklik atau pindah tab ke elemen tsb
        console.log('inputNama - focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });

    document.getElementById('inputNama').addEventListener('blur', function(){
        // event blur :
        console.log('inputNama - blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });

    document.getElementById('inputCaptcha').addEventListener('change',function(){
        console.log('inputCaptcha - change');

        let inputCaptcha = document.getElementById('inputCaptcha').value;
        let submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU' || inputCaptcha === 'prnu') {
            alert('captcha anda masukkan sudah benar');
            submitButtonStatus.removeAttribute('disabled');
            console.log('submit enabled');
        } else {
            alert('captcha anda masukkan masih salah')
            submitButtonStatus.setAttribute('disabled','');
            console.log('submit disabled');
        }
        event.preventDefault();
    });

});