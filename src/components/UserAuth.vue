<template>
    <button style="margin-right:23px;" @click="login()">Login</button>
    <button @click="logout()">Logout</button>
</template>
<script>

export default {
    name:'user_auth',
    data(){
        return {
            
        }
    
    },
    methods:{

        login(){
            return this.$store.dispatch('login');
        },
        logout(){
            return this.$store.dispatch('logout');
        }
        
    }
}
</script>