var API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs'
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsObject = JSON.parse(xhttp.responseText);
        var content = '';
        for (var i = 0; i < jsObject.items.length; i++) {
            var mp3Item = '<ul class="mp3-item">';
                mp3Item = '<li>';
                mp3Item = '<span class="numericalOrder">01</span>';
                mp3Item = '<img class="fn-thumb" width="100" height="100" src="https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs" alt="">';
                mp3Item = '<h4>' + jsObject.name[i] +'</h4>';
                mp3Item = '<audio controls autoplay="autoplay">';
                mp3Item = '<source src="https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs" type="audio/mpeg">';
                mp3Item = '</audio>';
                mp3Item = '</li>';
                mp3Item = '</ul>';
        }
        document.getElementById('myMp3').innerHTML = content;
    }
};
xhttp.open("GET", API, true);
xhttp.send();
}