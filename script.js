const songs=[
    {
        title:"Lost in the City Lights",
        author:"Cosmo Sheldrake",
        img:"images/cover-1.jpg ",
        src:"song/lost-in-city-lights-145038.mp3"
        
    },{
        title:"Forest Lullaby",
        author:"Lesfm",
        img:"images/cover-2.jpg",
        src:"song/forest-lullaby-110624.mp3"
    },
];
let currentSongIndex=0;
const audio=new Audio(songs[currentSongIndex].src);

document.getElementById("play").addEventListener("click",playpause);
document.getElementById("next").addEventListener("click",nextsong);
document.getElementById("prev").addEventListener("click",prevsong);
audio.addEventListener("timeupdate",updateProgressBar);


function playpause(){
    if(audio.paused){
        audio.play();
        document.getElementById("play").src="images/pause.svg"
    }else{
        audio.pause();
         document.getElementById("play").src="images/Play_fill.svg"
    }
}

function nextsong(){
    currentSongIndex=(currentSongIndex+1)% songs.length;
    switchSong();
}
function prevsong(){
    currentSongIndex=(currentSongIndex-1+songs.length)% songs.length;
    switchSong();
}

function switchSong(){
    audio.src=songs[currentSongIndex].src;
    audio.play();
    document.querySelector(".title").textContent=songs[currentSongIndex].title;
    document.querySelector(".author").textContent=songs[currentSongIndex].author;
    document.querySelector(".box2").style.backgroundImage=`url(${songs[currentSongIndex].img})`;
    document.getElementById("play").src="images/pause.svg"
}

function updateProgressBar(){
     const progress = document.querySelector(".progress");
    const start=document.querySelector(".timestart");
    const end=document.querySelector(".timeend");
if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;
   
  }
}
