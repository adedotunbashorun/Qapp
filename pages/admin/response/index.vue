<template>
    <Response :responses="responses"/>
</template>
<script>
import Response from '~/components/Admin/Response/index.vue'
export default {
    layout: 'admin',
    components:{
        Response
    },
    data(){
        return {
            errors: [],
            responses: []
        }
    },
    mounted(){
        this.allSchedules()
    },
    methods:{
        allSchedules(){
            this.$store.dispatch('allResponse', this.$store.state.auth.headers)
            .then((resp) => {
                this.responses = resp.data.responses
            }).catch(err => console.log())
        }
    }
}
</script>