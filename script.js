document.addEventListener("DOMContentLoaded", function () {
    var przycisk = document.getElementById("przycisk");
    var muzyka = document.getElementById("muzyka");

    przycisk.addEventListener("click", function () {
        if (przycisk.firstElementChild.src.endsWith("assets/mute.png")) {
            przycisk.firstElementChild.src = "assets/unmute.png"; 
            muzyka.play(); 
        } else {    
            przycisk.firstElementChild.src = "assets/mute.png"; 
            muzyka.pause();
        }
    });
});


