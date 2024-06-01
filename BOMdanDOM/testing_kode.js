// let links = document.getElementById('link');
// console.log(links.innerHTML)
// console.log(links.innerText)

// sisip 'selamat mnikmati pada tahapan masak air
const newElement = document.createElement('li'); // buat elemen baru ny dulu
newElement.innerText='selamat menikmati' // tambah 'selamat menikmati' ke elemen baru tsb
const sisipDaftar = document.getElementById('daftar'); // cari id='daftar'
sisipDaftar.appendChild(newElement); // sisip dg appendChild
// appendChild menyisipkan anu ke child element terakhir

// menambahkan step 'hidupkan kompor' di awal tahap
const idupKompor = document.createElement('li'); //bikin elemen dlu
idupKompor.innerText='hidupin kompor'; //masukkan teks ke elemen tsb
// pake sisipDaftar yg sudah dideklare diatas. karna parent dari li
// cari elemen child utk disisip di sebelum elemen tsb
const sisipAwal = document.getElementById('awal');
// pake method insertBefore
sisipDaftar.insertBefore(idupKompor,sisipAwal);