Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,

    transition: 'fade', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        { src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'js/vendor/notes/notes.js', async: true }
    ]
});


function heartBeat() {
    document.getElementById('heart').classList.add('activated');
    var audio = new Audio('musics/heartbeat.mp3');
    audio.play();
}

var winampPlay = false;
function winamp() {
    if(!winampPlay) {
        var audio = new Audio('musics/winamp.mp3');
        audio.play();
        winampPlay = true;
    }
}

Reveal.addEventListener('winamp', winamp);