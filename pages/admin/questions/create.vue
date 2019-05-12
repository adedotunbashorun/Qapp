<template>
    <CreateQuestion :categories="categories" />
</template>
<script>
import CreateQuestion from '~/components/Admin/Question/add.vue'
export default {
    layout: 'admin',
    components:{
        CreateQuestion
    },    
    mounted(){
        this.allCategories()
    },
    computed:{   
        categories(){
            return this.$store.state.category.categories
        }
    },
    methods:{
        allCategories(){
            this.$store.dispatch('allCategories', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>