import axios from 'axios'
import shortid from 'shortid'

const state = {
  options: [
    {
      text: '穿越到过去还是未来',
      src: '../assets/qs1.png',
      id: 'we35s'
    }
  ],
  votes: [
    {
      voter: '',
      optionId: '',
      id: ''
    }
  ]
}

const mutations = {
  addOption(state, data) {
    state.options.push(data)
  },
  voteup(state, vote) {
    state.votes.push(vote)
  },
  undo(state, voteId) {
    state.votes = state.votes.filter(t => t.id !== voteId)
  }
}

const actions = {
  undo({ commit }, { voteId }) {
    commit('undo', voteId)
  },
  addOption({ commit }, { text }) {
    let id = shortid.generate()
    commit('addOption', { text, id })
  },
  voteup({ commit }, { vote }) {
    let data = {
      ...vote,
      id: shortid.generate()
    }
    console.log(data)
    commit('voteup', data)
  }
}

export default {
  state,
  mutations,
  actions
}
