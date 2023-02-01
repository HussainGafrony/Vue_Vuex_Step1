<template>
  <!-- <h3>{{ Counter }}</h3> -->
  <h3>{{ finalCount }}</h3>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'theCounter_',

  data() {
    return {};
  },
  computed: {
    // Counter() {
    //  return this.$store.getters.finalCount;
    // },
    ...mapGetters('numbers/',['finalCount']),
  },
};
</script>