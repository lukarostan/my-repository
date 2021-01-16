import Vue from "vue";
import Vuex from "vuex";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    albums: [],
    artists: []
  },
  mutations: {
    saveAlbums(state, payload) {
      state.albums = payload;
    },
    saveArtists(state, payload) {
      state.artists = payload;
    },
    toggleFavorite(state, payload){
      const selectedAlbum = state.albums.findIndex(element => element.id === payload)
      state.albums[selectedAlbum].favorite = !state.albums[selectedAlbum].favorite;      
    }
  },
  actions: {
    getAlbums({ commit }) {
      Vue.http
        .get("http://localhost:3004/albums")
        .then((response) => response.json())
        .then((data) => commit("saveAlbums", data))
        .catch(() => {
          console.log("Something went wrong");
        });
    },
    getArtists({ commit }) {
      Vue.http
        .get("http://localhost:3004/artists")
        .then((response) => response.json())
        .then((data) => commit("saveArtists", data))
        .catch(() => {
          console.log("Something went wrong");
        });
    },
  },
});
