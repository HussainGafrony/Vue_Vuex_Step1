export default {

    setAuth(state, payload) {
        state.IsLogin = payload.is_auth;
    }
}