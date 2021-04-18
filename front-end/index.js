// YOUR CODE HERE
const pictures = {
    picture1: document.querySelector(".pictures-container>img[data-id='1']"),
    picture2: document.querySelector(".pictures-container>img[data-id='2']"),
    picture3: document.querySelector(".pictures-container>img[data-id='3']")
};

const output = {
    // songTitle: document.getElementById("song-title"),
    songTitle: document.getElementsByClassName("song-lyrics")[0],
}

console.log(pictures.picture1);

//lyrics of first song
function loadLyrics1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../back-end/lyrics/charlotte_sometimes.txt", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            output.songTitle.innerHTML = this.responseText;
        }
    };
    xhttp.send();
}

pictures.picture1.addEventListener('click', function(){
    loadLyrics1();
});

//lyrics of second song
function loadLyrics2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../back-end/lyrics/hey_you.txt", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            output.songTitle.innerHTML = this.responseText;
        }
    };
    xhttp.send();
}

pictures.picture2.addEventListener('click', function(){
    loadLyrics2();
});

//lyrics of third song
function loadLyrics3() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../back-end/lyrics/pictures_of_you.txt", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            output.songTitle.innerHTML = this.responseText;
        }
    };
    xhttp.send();
}

pictures.picture3.addEventListener('click', function(){
    loadLyrics3();
});