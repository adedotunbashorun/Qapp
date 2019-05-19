<template>
    <Schedule :users="users"/>
</template>
<script>
import Schedule from '~/components/Admin/Schedule/index.vue'
export default {
    layout: 'admin',
    components:{
        Schedule
    },
    data(){
        return {
            errors: [],
            users: []
        }
    },
    mounted(){
        this.allUsers()
    },
    methods:{
        allUsers(){
            this.$store.dispatch('allUsers', this.$store.state.auth.headers)
            .then((resp) => {
                this.users = resp.data.users
            }).catch(err => console.log())
        }
    }
}
</script>