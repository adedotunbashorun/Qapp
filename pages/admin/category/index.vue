<template>
    <Category :categories="categories"/>
</template>
<script>
import Category from '~/components/Admin/Category/index.vue'
export default {
    layout: 'admin',
    components:{
        Category
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