<template>
  <div class="artist">
    <pageheader>
      <h1>{{artist.title}}</h1>
      <a href="/"> <span class="btn">back to album list</span> </a>
    </pageheader>
    <!-- <div class="album-list-container">
      <albumListItem
      v-for="album in albumsByArtist"
      :key="album.id">
      </albumListItem>
    </div> --> 
  </div>
</template>
<script>
import pageheader from "@/components/pageheader.vue"
import home from "@/assets/home.png"
/* import AlbumListItem from '../components/albumListItem.vue' */
export default {
  components: {
    pageheader,
    /* AlbumListItem */
  },
  data(){
    return{
      home: home,
      id: this.$route.params.id,
      artist: {},
      albums: {}
    }
  },
  created(){
    fetch("http://localhost:3004/artists/" + this.id)
    .then(response => response.json())
    .then(((data) => this.artist = data))
  },
  computed: {
    albumsByArtist() {
      console.log(this.$store.state.albums.filter())
      return this.$store.state.albums.artistId === this.artist.id
    }
  }
}
</script>
<style lang="sass">
@media screen and (max-width: 768px)
    .btn
        padding: 10px
@media screen and (min-width: 768px)
    .btn
        padding: 7px 12px
        font-size: 14px
.btn
    text-transform: uppercase
    text-decoration: none
    color: white
    background-color: #13D6EA
    font-weight: 700
    border-radius: 3px
    border: 2px solid white
    transition: background-color 0.3s, color 0.3s, border 0.3s
.btn:hover
    cursor: pointer
    background-color: #fff
    color: #13D6EA
    border: 2px solid #13D6EA
</style>
