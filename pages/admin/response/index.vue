<template>
    <Response :resopnses="resopnses"/>
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
            resopnses: []
        }
    },
    mounted(){
        this.allSchedules()
    },
    methods:{
        allSchedules(){
            // this.$store.dispatch('allSchedules', this.$store.state.auth.headers)
            // .then((resp) => {
            //     this.schedules = resp.data.schedules
            // }).catch(err => console.log())
        }
    }
}
</script>