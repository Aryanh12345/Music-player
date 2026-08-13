let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ct = document.getElementById("ctrlicon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(song.paused){
        song.play();
        ct.classList.remove("fa-play");
        ct.classList.add("fa-pause");
    } else {
        song.pause();
        ct.classList.remove("fa-pause");
        ct.classList.add("fa-play");
    }
}

setInterval(()=>{
    progress.value = song.currentTime;
},500);


progress.onchange = function(){
    song.currentTime = progress.value;
}