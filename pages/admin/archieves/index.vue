<template>
    <Archieve :archieves="archieves"/>
</template>
<script>
import Archieve from '~/components/Admin/Archieve/index.vue'
export default {
    layout: 'admin',
    components:{
        Archieve
    },
    data(){
        return {
            errors: [],
            archieves: []
        }
    },
    mounted(){
        this.archieves = this.$store.getters.Archieves
        // this.allSchedules()
    }
}
</script>