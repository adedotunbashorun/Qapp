<template>
    <Schedule :schedules="schedules"/>
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
            schedules: []
        }
    },
    mounted(){
        this.allSchedules()
    },
    methods:{
        allSchedules(){
            this.$store.dispatch('allSchedules', this.$store.state.auth.headers)
            .then((resp) => {
                this.schedules = resp.data.schedules
            }).catch(err => console.log())
        }
    }
}
</script>