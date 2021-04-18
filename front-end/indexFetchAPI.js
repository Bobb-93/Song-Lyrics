// YOUR CODE HERE
const pictures = {
    picture1: 
        {
            selector: document.querySelector(".pictures-container>img[data-id='1']"),
            relativePath: "../back-end/lyrics/charlotte_sometimes.txt"
        },
    picture2: 
        {
            selector: document.querySelector(".pictures-container>img[data-id='2']"),
            relativePath: "../back-end/lyrics/hey_you.txt"
        },
    picture3: 
        {
            selector: document.querySelector(".pictures-container>img[data-id='3']"),
            relativePath: "../back-end/lyrics/pictures_of_you.txt"
        }
};

const output = {
    // songTitle: document.getElementById("song-title"),
    songLyrics: document.getElementsByClassName("song-lyrics")[0]
};

let lyricsURL = "";

for (const picture in pictures) { 
    // console.log(`${picture}: ${pictures[picture]}`);

    pictures[picture].selector.addEventListener("click", function(){       
       fetch(pictures[picture].relativePath)
       .then(
           response => response.text()
        )
        .then(
            data => output.songLyrics.innerHTML = data
        )
    });
}