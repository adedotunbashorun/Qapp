<template>
    <Dashboard :user="user"/>
</template>
<script>
import Dashboard from '~/components/Admin/dashboard.vue'
export default {
    layout: 'admin',
    components:{
        Dashboard
    },
    mounted(){
    },
    computed:{
        user(){            
            return this.$store.getters.authUser
        }        
    },
    methods:{
        getUser(){
            this.$store.dispatch('userById', [this.$store.getters.authUser._id,this.$store.state.auth.headers])
            .then((resp) => {
                    if (resp.data.user.temporarytoken == '') {
                        return redirect('/')
                    }
            }).catch(err => console.log())
        }
    }
}
</script>
