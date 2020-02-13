import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: {}
  },
  mutations: {
    toggleBookmark(state, data) {
      const { name, href, fullName } = data;
      const { bookmarks } = state;
      if (fullName in state.bookmarks) {
        delete state.bookmarks[fullName];
      } else {
        state.bookmarks = { ...bookmarks, [fullName]: { name, href } };
      }
    }
  },
  getters: {
    getBookmarks: state => state.bookmarks
  },
  actions: {},
  modules: {}
});
