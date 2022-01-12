
    var mysong = document.getElementById("mySong");
    var icon = document.getElementById("icon");

    icon.onclick = function () {
        if(mysong.paused){
            mysong.play();
            icon.src = "img/pause.png";
        }else{
            mysong.pause();
            icon.src = "img/play.png";
        }
    }
