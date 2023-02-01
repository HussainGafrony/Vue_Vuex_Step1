export default {
    finalCount(state) {
        return state.counter * 3;
    },
    normalCount(_, getters) {
        const normalCount = getters.finalCount;
        if (normalCount < 0) {
            return 0;
        } else if (normalCount > 100) {
            return 100;
        }
        return normalCount;
    },
}