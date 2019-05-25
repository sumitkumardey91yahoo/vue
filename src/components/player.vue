<template>
  <div>
       <video id="video"
           width="640"
           poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
           controls autoplay>
           </video>
          <button @click="playerPlay()" class="buttonStyle">play</button>
        <button @click="playerPause()" class="buttonStyle">pause</button>
  </div>
</template>

<script>
 import shaka from 'shaka-player';
export default {

  data() {
    return {
      manifestUri : 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',
      playerId: ''
    }
  },
  methods: {
    initApp () {
      shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        this.initPlayer();
      } else {
        console.error('Browser not supported!');
      }
    },
    playerPlay() {

     document.getElementById('video').play();
    },
    playerPause() {
     document.getElementById('video').pause();
    },
    initPlayer() {
        // Create a Player instance.
        this.playerId = document.getElementById('video');
        this.initEvent(this.playerId );
        var player = new shaka.Player(this.playerId);
        window.player = this.playerId;
        player.load(this.manifestUri).then(function() {
          console.log('The video has now been loaded!');
        })
    },
    initEvent(video) {

    }

  },
  mounted() {
    this.initApp();
        //this.playerId = document.getElementById('video');
    var video = document.getElementById('video');
     video.addEventListener('play', ()=> {
        console.log("play");
    });

    video.addEventListener('loadeddata', ()=> {
        console.log("loadeddata");
    });

    video.addEventListener('loadstart', ()=> {
        console.log("loadstart");
    });


    video.addEventListener('playing', ()=> {
        console.log("playing");
    });

    video.addEventListener('waiting', ()=> {
        console.log("waiting");
    });
  },
  created() {

  }

}
</script>

<style scope>
  .buttonStyle {
    width: 49%;
    background: cadetblue;
    display: block;
    margin: 28px;
  }
</style>

