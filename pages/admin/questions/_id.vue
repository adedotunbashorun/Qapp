<template>
    <QuestionView :categories="categories"/>
</template>
<script>
import QuestionView from '~/components/Admin/Question/view.vue'
export default {
    layout: 'admin',
    components:{
        QuestionView
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