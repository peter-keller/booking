const actions = {
  open ({ commit }, target) {
    commit('OPEN_MODAL', target)
  },

  close ({ commit }, target) {
    commit('CLOSE_MODAL', target)
  }
}

export default actions
