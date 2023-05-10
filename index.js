console.log("hellow welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let Gif = document.getElementById("songGif");
let myprogressBar = document.getElementById("myProgressBar");
let songItem=Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName : "Love ME",filePath: "./song/1.mp3",coverPath: "./src/2.png"},
    {songName : "Tum Mile",filePath: "./song/2.mp3",coverPath: "./src/3.png"},
    {songName : "Weekends StarBoy",filePath: "./song/3.mp3",coverPath: "./src/4.png"},
    {songName : "Travis Scott Ghoose Bumps",filePath: "./song/4.mp3",coverPath: "./src/5.png"},
    {songName : "Amplifier - Imran Khan",filePath: "./song/5.mp3",coverPath: "./src/3.png"},
    {songName : "Tere Hoke Rahenga",filePath: "./song/6.mp3",coverPath: "./src/2.png"},
    {songName : "Kali Kali Zulfo Pe",filePath: "./song/6.mp3",coverPath: "./src/2.png"},
]

// dynamically adding song images, song names and path
songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songTitle")[0].innerText = songs[i].songName;
// console.log(element, i)
})



// handle song play
masterPlay.addEventListener("click",()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.src = "./src/pause.svg";
    Gif.style.opacity = 1
    // console.log("music played")
    
} else {
    audioElement.pause();
    masterPlay.src = "./src/play.svg";
    Gif.style.opacity = 0
}

})


// updateing seekbar
audioElement.addEventListener("timeupdate", ()=>{
// console.log("timeupdate");
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
myprogressBar.value = progress ;


});

// updating audio on changing progressbar

myprogressBar.addEventListener("change", ()=>{
   audioElement.currentTime =( myprogressBar.value * audioElement.duration) / 100;

})

makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
      
            // console.log(element)
                //   e.target.src = './src/play.svg';
                element.src = './src/play.svg';
                
              
            })}


Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        // console.log(e.target)
        makeAllPlays();
       songIndex = parseInt(e.target.id)
//  console.log(e)
e.target.src = "./src/pause.svg";

audioElement.currentTime = 0;
audioElement.src = `./songs/${songIndex+1}.mp3`
audioElement.play();
masterPlay.src = "./src/pause.svg";
Gif.style.opacity = 1


        
           
        
    })
})

document.getElementById("next").addEventListener("click",
()=>{
    if(songIndex>=6){
        songIndex= 0; 
    }else{

        songIndex+=1;
    }
    audioElement.currentTime = 0;
audioElement.src = `./songs/${songIndex+1}.mp3`
audioElement.play();
masterPlay.src = "./src/pause.svg";
Gif.style.opacity = 1

})

document.getElementById("previous").addEventListener("click",
()=>{
    if(songIndex<=0){
        songIndex= 6; 
    }else{

        songIndex-=1;
    }
    audioElement.currentTime = 0;
audioElement.src = `./songs/${songIndex+1}.mp3`
audioElement.play();
masterPlay.src = "./src/pause.svg";
Gif.style.opacity = 1

})






// audioElement.play();

// Listen to events