import CounterMutations from './mutations.js';
import CounterActions from './actions.js';
import CounterGetters from './getters.js';
export default {
    namespaced: true
    , state() {
        return {
            counter: 0,
        }
    },
    mutations: CounterMutations,
    actions: CounterActions,
    getters: CounterGetters
}
