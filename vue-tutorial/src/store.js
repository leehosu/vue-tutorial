import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 0
    },
    getters : {
        getCounter : function(state){
            return state.counter
        }
    },
    mutations : {
        plusCounter(state){
            console.log("plus")
            return state.counter++
        },
        minCounter(state){
            console.log("min!")
            return state.counter--
        },
        tenPlus(state, payload){
            console.log("ten plus")
            return state.counter += payload
        }
    }
})