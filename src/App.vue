<template>
  <base-container title="Vuex" v-if="checkAuth">
  <h3>{{ Counter }}</h3>
  <TheCounter></TheCounter>
  <TheFavorite></TheFavorite>
  <button @click="plusCount()">Add 10</button>

  <ChangeCounter></ChangeCounter>
</base-container>
  <base-container title="Auth_User"> 


  <UserAuth></UserAuth>
</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheFavorite from './components/TheFavorite.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    UserAuth,
    BaseContainer,
    TheCounter,
    ChangeCounter,
    TheFavorite,
  },
  computed: {
    Counter() {
      return this.$store.getters.normalCount;
    },
    checkAuth(){
      return this.$store.getters.checkUserAuth;
    }
  },
  methods: {
    plusCount() {
      // this.$store.commit('increase',{value:33});
      // this.$store.dispatch('increase',{value:33});
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>