// -------------- tes prompt, alert (bagian dari Browser obj model -------
/*
alert(pesanku);
let hasil=(prompt('pesanku','asu lo le '));
console.log(hasil)
console.info(hasil)
console.warn(hasil)
console.error(hasil)

----------objek browser (window) bersifat global -------------
function alert(something){
    console.log('hati hati '+ something)
}
alert('kontolodon')

window.alert('asuik')

*/

// --- merubah dimensi gambar ---

let gambar = document.getElementById('gambar');
gambar.setAttribute('width','300px'); // hanya atribut dan strktur
gambar.style.width='300px'; //ubah riil :p
gambar.setAttribute('height','215px'); // hanya atribut dan struktur html
gambar.style.height='215px' //ubah rill :p


// --- menambah attribut button play menjadi tipe submit ---
let buttons = document.querySelectorAll('.button');
// mengambil button 'play', array ke-3
let playButton = buttons[3]; // baru level div
// panggil buttonnya
let childPlayButton = playButton.children[0];
// baru kita kasi atribut
childPlayButton.setAttribute('type','submit');

