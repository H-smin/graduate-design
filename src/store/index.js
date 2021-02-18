import Vue from 'vue'
import Vuex from 'vuex'
import moduleHome from './modules/moduleHome'
import modulePants from './modules/modulePants'
import moduleDress from './modules/moduleDress'
import moduleSuit from './modules/moduleSuit'
import moduleShooes from './modules/moduleShooes'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '1',
    commentInfo: {
      id: '1',
      userName: 'Lily',
      content: '物超所值，值得购买',
      releaseTime: '2020-9-1',
      imgSrc: 'https://s5.mogucdn.com/mlcdn/5abf39/170819_4filiag5bda0j6b7416758lb280j6_640x640.jpg_48x48.webp',
      size: 's'
    },
    tabbarShow: true,
    carList: [],
    saveSelGoods:JSON.parse(window.localStorage.getItem('key'))||[],
    //个人信息
    info: {
      src: require("../assets/img/profile/head.jpeg"),
      userName: "太乙真人abc",
      signs: "今天天气真好呀",
      gender:"男"
    },
    //所有订单
    allOrders:[]
  },
  getters: {
    getTabbarShow(state) {
      return state.tabbarShow
    },
   
  },
  mutations: {
    updateTabbarShow(state, payload) {
      state.tabbarShow = payload
    },
    addCar(state, payload) {
      let oldProduct=state.carList.find( item => (item.sort === payload.sort)&& (item.id === payload.id))
      if(oldProduct){
        oldProduct.count +=1
      }else{
        payload.count =1
        payload.checked=true
        state.carList.push(payload)
      }
    },
    checkClick(state, payload) {
      state.carList[payload].checked = !state.carList[payload].checked
    },
    delGoods(state,payload){
      state.carList.splice(payload,1)
    }
  },
  actions: {
  },
  modules: {
    moduleHome,
    modulePants,
    moduleDress,
    moduleSuit,
    moduleShooes
  }

})
