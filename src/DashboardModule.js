import Vue from "vue";

const state = {
  characters: []
};

const actions = {
  getAllCharacters: ({
    commit
  }) => {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get("/characters")
        .then(resp => {
          commit("getAllCharactersSuccess", resp.data.character);
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

const mutations = {
  getAllCharactersSuccess: (state, characters) => {
    state.characters = characters;
  }
};

export default {
  state,
  actions,
  mutations
};