<template>
    <div class="main-content-container container-fluid px-4">
            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Question Management</h3>
            <span class="text-uppercase page-subtitle">Add, rename and manage</span>
            </div>
        </div>
        <!-- End Page Header -->

        <!-- Button -->
        <div class="row">
        <div class="col-md-6">
            <nuxt-link to="/admin/questions/create">
            <button type="button" class="mb-4 btn btn-outline-primary mr-4">Create Question</button></nuxt-link>
        </div>
        </div>
        <!-- / Button -->            

        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Question Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table id="question-table" class="table mb-0" style="margin:20px;">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>                        
                        <th scope="col" class="border-0">Category</th>
                        <th scope="col" class="border-0">Name</th>
                        <th scope="col" class="border-0">Description</th>
                        <th scope="col" class="border-0">Action </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(question, index) in questions" :key="index">
                            <td>{{ index + 1}}</td>                            
                            <td>{{ (question.category_id != null) ? question.category_id.name : ''}}</td>
                            <td>{{ question.subject}}</td>
                            <td>{{question.description}}</td>
                            <td>
                                <!-- <ul class="navbar-nav border-left flex-row ">
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="d-none d-md-inline-block">Action</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-small"> -->
                                        <nuxt-link class="" :to="{name: 'admin-questions-id', params:{id : question._id}}" title="edit / view">
                                        <i class="material-icons">edit</i></nuxt-link>
                                        <!-- <div class="dropdown-divider"></div> -->
                                        <a class="text-danger" style="cursor:pointer;" @click="deleteQuestion(question._id)" title="delete">
                                        <i class="material-icons text-danger">delete</i></a>
                                    <!-- </div>
                                    </li>
                                </ul> -->
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <!-- End Default Light Table -->

    </div>
</template>
<script>
export default {
    props:['questions'],
    mounted(){
        setTimeout(() => {
            $('#question-table').DataTable({})
        },2000)
    },
    methods:{
        deleteQuestion(id){
            this.$store.dispatch('deleteQuestion', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
