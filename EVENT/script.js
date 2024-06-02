function welcome(){
    alert('sim salabim muncullah elemen html!');
    let kontent = document.querySelector('.content');
    kontent.removeAttribute('hidden');
}
document.body.onload = welcome;

function adding(){
    let konter = document.getElementById('counter');
    konter.innerText++;

    if(konter.innerText == 7){
        let hiddenMessage = document.createElement('h3');
        hiddenMessage.innerText = 'selamat anda menemukan hadiah! ';
        let gambarHidden = document.createElement('img');
        gambarHidden.setAttribute('src',https://i.ibb.co/0V49VRZ/catto.jpg');
        let kontent = document.querySelector('.content');
        kontent.appendChild(hiddenMessage).appendChild(gambarHidden);
    }
}
document.getElementById('tambahButton').onclick = adding;