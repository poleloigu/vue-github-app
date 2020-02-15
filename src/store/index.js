import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: []
  },
  mutations: {
    toggleBookmark(state, data) {
      // eslint-disable-next-line object-curly-newline
      const { name, href, author, fullName, stars, forks, id } = data;
      const index = state.bookmarks.findIndex(item => item.fullName === fullName);
      if (index === -1) {
        state.bookmarks.push({
          name,
          href,
          author,
          fullName,
          stars,
          forks,
          id
        });
      } else {
        state.bookmarks.splice(index, 1);
      }
      localStorage.setItem('bookmarked', JSON.stringify(state.bookmarks));
    },
    addAllBookmarks(state, data) {
      state.bookmarks = data;
    }
  },
  getters: {
    getBookmarks: state => state.bookmarks
  },
  actions: {},
  modules: {}
});
