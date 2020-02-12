import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: {}
  },
  mutations: {
    addBookmark(state, data) {
      console.log('addBookmark');
      const { name, href, fullName } = data;
      // eslint-disable-next-line prefer-object-spread
      state.bookmarks = Object.assign({}, state.bookmarks, {
        bookmarks: {
          [fullName]: { name, href }
        }
      });
      console.log(state.bookmarks);
    }
  },
  actions: {},
  modules: {}
});
