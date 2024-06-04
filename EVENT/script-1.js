let gantiCaption = new Event('gantiCaption'); // inisiasi sebuah event

window.addEventListener('load',function(){
    let tombol = document.getElementById('tombo')
    tombol.addEventListener('gantiCaption',customEventHandler);
    tombol.addEventListener('click', function(){})
})