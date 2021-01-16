<template>
  <div class="album-list-page">
    <pageheader>
      <h1>Album List</h1>
    </pageheader>
    <div class="album-list-container">
      <albumListItem/>
    </div>
  </div>
</template>

<script>
import albumListItem from "@/components/albumListItem.vue";
import pageheader from "@/components/pageheader.vue";

export default {
  name: "albumList",
  components: {
    pageheader,
    albumListItem,
  }
};
</script>
<style lang="sass">
@media screen and (max-width: 768px)
  .album-list-container
    width: 85%
@media screen and (min-width: 768px) and (max-width: 1600px)
  .album-list-container
    width: 80vw
@media screen and (min-width: 1600px)
  .album-list-container
    margin: auto
    width: 1400px

.album-list-page
  background-color: snow
  .album-list-container > *
    margin: 10px 0
  .album-list-container
    margin: auto
</style>
