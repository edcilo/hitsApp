export const state = () => ({
  token: null,
  user: null,
  auth: false,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  },
  setAuth(state, flag) {
    state.auth = flag
  }
}

export const actions = {
  async login({ commit }, payload) {
    try {
      const res = await this.$repositories.auth.login(payload)

      const { status, data } = res

      if (status === 200) {
        commit('setToken', data.access_token)
        commit('setUser', data.user)
        commit('setAuth', true)
      }

      return res
    } catch (e) {
      console.error('error login', e.response.data)
      return e.response
    }
  }
}
