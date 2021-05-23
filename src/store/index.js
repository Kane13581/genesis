import { createStore } from 'vuex'

export default createStore({
  state: {
    isActive: false,
  },
  mutations: {
    changeStatus () {
      this.state.isActive = !this.state.isActive;
      console.log(this.state.isActive)
    }
  },
  actions: {
    changeStatus: context => {
    context.commit('changeStatus')
    }
  }
  ,
  modules: {
  }
})
