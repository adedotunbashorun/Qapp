<template>
    <Question :questions="questions"/>
</template>
<script>
import Question from '~/components/Admin/Question/index.vue'
export default {
    layout: 'admin',
    data(){
        return {
            errors: [],
            questions: []
        }
    },
    components:{
        Question
    },
    mounted(){
        this.allQuestions()
    },
    methods:{
        allQuestions(){
            this.$store.dispatch('allQuestions', this.$store.state.auth.headers)
            .then((resp) => { this.questions = resp.data.questions
            }).catch(err => console.log())
        }
    }
}
</script>