import { createStore } from 'vuex';
import RootMutations from './mutations.js';
import RootActions from './actions.js';
import RootGetters from './getters.js';
import CounterModel from './modules/counter/index.js';



const store = createStore({
    modules: {
        numbers: CounterModel
    },
    state() {
        return {
            IsLogin: false,
        }
    },
    mutations: RootMutations,
    actions: RootActions,
    getters: RootGetters
});

export default store;