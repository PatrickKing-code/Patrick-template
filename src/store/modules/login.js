import { Login } from "../../api/login";
import { setToken, setUsername, getUsername } from '../../utils/login'
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
    return new Promise((resolve, reejct) => {
      Login(requestDate)
        .then(response => {
          let data = response.data.data
          console.log(data);
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
