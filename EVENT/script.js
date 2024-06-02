function welcome(){
    alert('sim salabim muncullah elemen html!');
    let kontent = document.querySelector('.content');
    kontent.removeAttribute('hidden');
}
document.body.onload = welcome;