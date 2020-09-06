const mutations = {
  OPEN_MODAL (state, target) {
    if (!state.data.includes(target)) {
      state.data.push(target)
    }
  },

  CLOSE_MODAL (state, target) {
    state.data = state.data.filter(modal => modal !== target)
  }
}

export default mutations
