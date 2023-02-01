<template>
    {{ counter }}
    <p>We do more</p>
</template>
<script>
export default {
    computed:{
        counter(){
            return this.$store.getters['numbers/normalCount'];
        }
    }
}
</script>