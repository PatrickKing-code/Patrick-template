import { Login } from "../../api/login";
import { setToken, setUsername, getUsername, removeToken, removeUsername } from '../../utils/login'
const state = {
  token: "",
  username: getUsername() || ''
};

const getters = {
};

const mutations = {
  // 必须的  同步 没有回调处理事情
  SET_TOKEN(state, value) {
    state.token = value;
  },
  SET_USERNAME(state, value) {
    state.username = value;
  }
};

const actions = {
  login(cxt, requestDate) {
    return new Promise((resolve, reject) => {
      Login(requestDate)
        .then(response => {
          let data = response.data.data
          // token  username
          cxt.commit('SET_TOKEN', data.token)
          cxt.commit('SET_USERNAME', data.username)
          setToken(data.token)
          setUsername(data.username)
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout({commit}){
    return new Promise( (resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_USERNAME', '')
      removeUsername()
      removeToken()
      resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
