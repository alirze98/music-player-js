let musics =[
    {
        name:"linkin park",
        cover:"./images/index.jpg",
        audio:"./musics/03 - Talking To Myself.mp3"
    },
    {
        name:"linkin park",
        cover:"./images/linkin-park-billboard-650_orig.jpg",
        audio:"./musics/02 - Good Goodbye (feat Pusha T and Stormzy).mp3"
    },
    {
        name:"cold play",
        cover:"./images/index1.jpg",
        audio:"./musics/01.Coldplay - A Head Full Of Dreams.mp3"
    },

]

let trackName = document.querySelector(".track-name");
let cover = document.querySelector(".track-art");
let range = document.querySelector(".seek_slider");
let volumeSlider = document.querySelector(".volume_slider");
let nextBtn = document.querySelector(".next-track")
let prevBtn = document.querySelector(".prev-track");
let playBtn = document.querySelector(".playpause-track");


currentMusic = 0;
let audio = new Audio(musics[currentMusic].audio);


cover.src=musics[currentMusic].cover;


trackName.innerText=musics[currentMusic].name;

// define the functionality of seek slider
audio.addEventListener("canplay",()=>{
    range.max=audio.duration;
});
audio.addEventListener("timeupdate",()=>{
    range.value=audio.currentTime
})
range.addEventListener("input",()=>{
    audio.currentTime=range.value
})

// define the functionality of volume slider
volumeSlider.addEventListener("input",()=>{
    audio.volume=volumeSlider.value/100
})

// define the functionality of playpause and next and prev buttons
playBtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
        playBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';

    }else{
        audio.pause()
        playBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
})

nextBtn.addEventListener("click",()=>{
    trackChanger("next")
})
prevBtn.addEventListener("click",()=>{
    trackChanger("prev")
})

function trackChanger(state){
    audio.pause();
    range.value=0;
    playBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    audio.currentTime=0;

    if(state == "next"){
        if(currentMusic==musics.length-1){
            currentMusic=0;
           
        }else{
            currentMusic+=1
        }

    }else{
        if(currentMusic==0){
            currentMusic==musics.length-1
        }else{
            currentMusic-=1
        }

    }
    audio = new Audio(musics[currentMusic].audio);
    cover.src=musics[currentMusic].cover;
    trackName.innerText=musics[currentMusic].name;
  

}
