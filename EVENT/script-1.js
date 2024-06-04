let gantiCaption = new Event('gantiCaption'); // inisiasi sebuah event

window.addEventListener('load',function(){
    let tombol = document.getElementById('tombol')
    tombol.addEventListener('gantiCaption',customEventHandler);
    tombol.addEventListener('click', function(){
        tombol.dispatchEvent(gantiCaption)
    })
});

function customEventHandler(event){
    console.log('event ' + event.type + ' telah dijalankan');
    let caption = document.getElementById('caption');
    caption.innerText = 'anda membangkitkan custom event'
}