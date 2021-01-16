<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("getArtists");
    this.$store.dispatch("getAlbums");
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;700&display=swap')
*
  box-sizing: border-box
  margin: 0
  padding: 0
  font-family: 'Work Sans', sans-serif
  text-decoration: none
a
  text-decoration: none
</style>
