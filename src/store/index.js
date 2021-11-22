import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3',
      userDetails: [
        {
          id: 1,
          firstName:'John',
          lastName: 'Troot',
          email: 'john@cc.com',
          password: 'adsf33'
        },
        {
          id: 2,
          firstName:'Sarang',
          lastName: 'Meino',
          email: 'sara@asdf.com',
          password: 'adsf33'
        },
      ]
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    userInfo(state){
      return state.userDetails;
    }
  },
  actions: {
    test(context,payload){
      console.log(payload)
      const dataStr = {
        firstname: payload.firstName,
        lastname: payload.lastName,
        email: payload.email,
        password: payload.password
      }
      const response = fetch(`http://localhost/myProjectVue-CorsApi/public/api/saveUser`, {
        method: 'POST',
        body: JSON.stringify(dataStr)
      });
      console.log(response)
      // const responseData = response.json();
  
      if (!response.ok) {
        // const error = new Error(responseData.message || 'Failed to send request.');
        // throw error;
      }
      context.commit('test',{
        ...payload
      })
    },
    delete(context){
      context.commit('delete')
    },
  },
  mutations: {
    test(state, payload){
      state.userDetails.push(payload)
      console.log(state)
    },
    delete(state){
      state.userDetails = state.userDetails.filter( item => 
        item.id !== 1)
        console.log(state.userDetails)
    }
  }
});

export default store;