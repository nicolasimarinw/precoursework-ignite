console.log('Hello World');

class Player{
    constructor(){
        this.trackList = {};
        this.index = 0;
        this.trackPlaying = 1;
    }
    
    add(artist, title, album){
        this.index ++;
        this.trackList[this.index] = new Track(artist, title, album);
    }

    play(){
        let current = this.trackPlaying;
        console.log(this.trackList[current].title);
        return this.trackList; 
    }

    next(){
        if(this.trackPlaying === this.index){
            this.trackPlaying = 1;
        } else {
            this.trackPlaying ++;
        }
        player.play();
    }

    
    previous(){
        if(this.trackPlaying === 1){
            this.trackPlaying = this.index;
        } else {
            this.trackPlaying --;
        }
        player.play();
    }
}

class Track{
    constructor(artist, title, album){
        this.artist = artist;
        this.title = title;
        this.album = album;
    }
}

let player = new Player();
player.add('Masayoshi Tanaka','Tropic Birds','All of Me');
player.add('Ryo Fukui','Early Summer', 'Early Summer');
player.add('Fleetwood Mac', 'Hypnotized', 'Mystery to Me');
player.play();
player.next();
player.previous();
player.previous();
player.next();
console.log(player);