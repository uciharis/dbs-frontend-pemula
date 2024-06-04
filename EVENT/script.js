function welcome(){
    alert('sim salabim muncullah elemen html!');
    let kontent = document.querySelector('.content');
    kontent.removeAttribute('hidden');
}
// document.body.onload = welcome;
// even diatas tanpa eventListener

// contoh menggunakan eventListener
window.addEventListener('load', welcome);

function adding(){
    let konter = document.getElementById('counter');
    konter.innerText++;

    if(konter.innerText == 7){
        let hiddenMessage = document.createElement('h3');
        hiddenMessage.innerText = 'selamat anda menemukan hadiah! ';
        let gambarHidden = document.createElement('img');
        gambarHidden.setAttribute('src','kitten.jpeg');
        let kontent = document.querySelector('.content');
        kontent.appendChild(hiddenMessage).appendChild(gambarHidden);
    }
}
// document.getElementById('tambahButton').onclick = adding;
// event tanpa eventListener

// menggunakan eventListener
document.getElementById('tambahButton').addEventListener('click',adding);