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
    songLyrics: document.getElementsByClassName("song-lyrics")[0],
}

let lyricsURL = "";

// console.log(pictures);
for (const picture in pictures) { 
    // console.log(`${picture}: ${pictures[picture]}`);

    pictures[picture].selector.addEventListener("click", function(){
        /*
        let xhttp = new XMLHttpRequest();
        // console.log(chosenPicture);
        xhttp.open("GET", pictures[picture].relativePath);

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                output.songLyrics.innerHTML = this.responseText;
            }
        };
        xhttp.send();
        */
       fetch(pictures[picture].relativePath)
       .then(
           response => response.text()
        )
        .then(
            data => output.songLyrics.innerHTML = data
        )
    });
}

//Междинен вариант, но с повторения:
// pictures.picture1.addEventListener('click', function(){
//     lyricsURL = "../back-end/lyrics/charlotte_sometimes.txt";
//     loadLyrics(lyricsURL);
// });

// pictures.picture2.addEventListener('click', function(){
//     lyricsURL = "../back-end/lyrics/hey_you.txt";
//     loadLyrics(lyricsURL);
// });

// pictures.picture3.addEventListener('click', function(){
//     lyricsURL = "../back-end/lyrics/pictures_of_you.txt";
//     loadLyrics(lyricsURL);
// });