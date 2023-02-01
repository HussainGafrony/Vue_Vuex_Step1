export default  {

    login(context) {
        context.commit('setAuth', {
            is_auth: true
        });
    },
    logout(context) {
        context.commit('setAuth', {
            is_auth: false
        });
    }
}