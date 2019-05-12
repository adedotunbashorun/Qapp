<template>
    <Question :questions="questions"/>
</template>
<script>
import Question from '~/components/Admin/Question/index.vue'
export default {
    layout: 'admin',
    components:{
        Question
    },
    mounted(){
        this.allQuestions()
    },
    computed:{   
        questions(){
            return this.$store.state.question.questions
        }
    },
    methods:{
        allQuestions(){
            this.$store.dispatch('allQuestions', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>