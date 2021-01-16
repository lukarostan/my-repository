<template>
  <div>
    <div
      class="album-list-item"
      :albums="albums"
      v-for="(album, index) in albums"
      :key="index"
      :id="album.id"
    >
      <img class="star" :src="star" alt="favorite" v-if="album.favorite" />
      <img class="album-art" :src="album.imageUrl" alt="album art" />
      <div class="full-name">
        <p class="album-name">{{ album.title }}</p>
        <router-link class="artist-name" :to="'/artist/' + album.artistId">
          {{ getArtistName(album.artistId) }}
        </router-link>
      </div>
      <div class="release-year">
        <span class="label">Released: </span>
        <span class="year">{{ album.releaseDate.slice(0, 4) }}</span>
      </div>
      <span class="price">{{ album.price }}</span>
      <button
        v-bind:class="{
          btnMark: !album.favorite,
          btnRemove: album.favorite,
        }"
        class="btn"
        @click="toggleFav(album.id)"
      >
        {{ album.favorite == true ? "Remove favorite" : "Mark as favorite" }}
      </button>
    </div>
  </div>
</template>
<script>
import star from "@/assets/star.png";
export default {
  name: "albumListItem",
  props: ["search"],
  data: function() {
    return {
      star: star,
    };
  },
  methods: {
    getArtistName(numId) {
      let artist = this.artists.find(({ id }) => id === numId);
      return artist.title;
    },
    toggleFav(albumId) {
      this.$store.commit("toggleFavorite", albumId);
    },
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
    artists() {
      return this.$store.state.artists;
    },
    albumsFromArtist() {
      var albumsFromArtist = this.$store.state.albums.map((album) => {
        return {
          title: album.title + "test",
        };
      });
      return albumsFromArtist;
    },
    /* filteredAlbums: function() {
      return this.albums.filter((album) => {
        return album.tile.match(this.search);
      });
    }, */
  },
};
</script>

<style lang="sass" scoped>
@media screen and (max-width: 768px)
    .album-list-item > *
        margin: 2px
    .album-list-item
        display: flex
        flex-direction: column
        text-align: center
        align-items: center
        padding: 10px
        .album-art
            width: 75%
        .star
            position: absolute
            width: 35px
        .btn
          padding: 10px
@media screen and (min-width: 768px)
    .album-list-item
        display: flex
        flex-direction: row
        align-items: center
        padding: 25px 0
        .album-art
            width: 80px
        .price
            width: 5%
        .star
            width: 25px
            position: absolute
            margin-left: 90px
        .full-name
          margin-right: 10%
        .release-year
          margin-right: 10%
        .btn
          margin-left: 10%

.album-list-item:hover
    background-color: #EAFCFD
.album-list-item
    margin: 10px 0
    background-color: #fff
    box-shadow: 0px 1px 3px #E7E7E7
    transition: background-color 0.3s
    .btn:hover
      border: 3px solid #13D6EA
      background-color: #fff
      color: #13D6EA
    .btn
      font-size: 12px
      text-transform: uppercase
      padding: 10px 25px
      cursor: pointer
      border-radius: 5px
      border: 3px solid white
      outline: none
      font-weight: 700
    .btnMark
      color: white
      background-color: #13D6EA
    .btnRemove
      text-decoration: underline
      background-color: white
      color: #13D6EA
    .star
      position: absolute
    .album-art
        margin: 0px 24px
    .full-name
        width: 30%
        .album-name
            font-weight: 500
            font-size: 18px
        .artist-name:hover
            cursor: pointer
            text-decoration: underline
        .artist-name
            font-weight: 400
            color: #A0A0A0
            font-size: 12px
    .release-year
        width: fit-content
        .label
            font-size: 14px
            color: #A0A0A0
            font-weight: 400




</style>
