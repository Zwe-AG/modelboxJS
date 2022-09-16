var getModal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.getElementById('btn-close');
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
    getModal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
    getModal.style.display = "none";
});

window.onclick = function(e){
    // console.log(e.target);
    if (e.target === getModal) {
        getModal.style.display = "none";
    }
}

var getdoc = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){

   if(getdoc.requestFullscreen){
         getdoc.requestFullscreen();
   }else if(getdoc.msRequestFullscreen){
          getdoc.msRequestFullscreen();        
   }else if(getdoc.webkitRequestFullscreen){
         getdoc.webkitRequestFullscreen();
   }
   getbtnclosescreen.style.display = "inline-block";
});

getbtnclosescreen.addEventListener('click',function(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }
   getbtnclosescreen.style.display = "none";
});