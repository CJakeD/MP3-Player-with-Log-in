//song list, pwede ra mag add bisag pila//
let All_song = [
   {
     name: "Double Take",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "dhruv"
   },
   {
     name: "360",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Charli XCX"
   },
   {
     name: "365",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Charli XCX"
   },
   {
    name: "Sway to my beat in the Cosmos",
    path: "music/4.mp3",
    img: "images/4.jpg",
    singer: "Chevy - HoyoMix"
  }
];


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};