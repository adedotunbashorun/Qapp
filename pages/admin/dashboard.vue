<template>
    <Dashboard :user="user" :result="result" />
</template>
<script>
import Dashboard from '~/components/Admin/dashboard.vue'
export default {
    middleware: 'auth',
    layout: 'admin',
    components:{
        Dashboard
    },
    data(){
      return{
        result:{}
      }
    },
    mounted(){
      this.getCount()
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    },
    methods:{
        getCount(){
            this.$store.dispatch('allCounts', this.$store.state.auth.headers)
            .then((resp) => {
              this.result = resp.data.result
            }).catch(err => console.log())
        }
    }
}
</script>
