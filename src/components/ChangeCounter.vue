<template>
  <!-- <button @click="changeCount()">ChangeCounter</button> -->
  <button @click="inc">incrementState</button>
  <button @click="increase({ value: 10 })">increaseState</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'ChangeCounter_',
  methods: {
    // changeCount(){
    //     this.$store.dispatch('increment');
    // }

    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>