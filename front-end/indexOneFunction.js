// YOUR CODE HERE
const pictures = {
    picture1: document.querySelector(".pictures-container>img[data-id='1']"),
    picture2: document.querySelector(".pictures-container>img[data-id='2']"),
    picture3: document.querySelector(".pictures-container>img[data-id='3']")
};

const output = {
    // songTitle: document.getElementById("song-title"),
    songLyrics: document.getElementsByClassName("song-lyrics")[0],
}

let lyricsURL = "";

// console.log(pictures.picture1);

//lyrics of first song
function loadLyrics(chosenPicture) {
    let xhttp = new XMLHttpRequest();
    console.log(chosenPicture);
    xhttp.open("GET", chosenPicture, true);

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            output.songLyrics.innerHTML = this.responseText;
        }
    };
    xhttp.send();
}

// console.log(pictures);
// for (const picture in pictures) {
//     picture.addEventListener("click", loadLyrics);
//     console.log(picture);
// }

pictures.picture1.addEventListener('click', function(){
    lyricsURL = "../back-end/lyrics/charlotte_sometimes.txt";
    loadLyrics(lyricsURL);
});

pictures.picture2.addEventListener('click', function(){
    lyricsURL = "../back-end/lyrics/hey_you.txt";
    loadLyrics(lyricsURL);
});

pictures.picture3.addEventListener('click', function(){
    lyricsURL = "../back-end/lyrics/pictures_of_you.txt";
    loadLyrics(lyricsURL);
});