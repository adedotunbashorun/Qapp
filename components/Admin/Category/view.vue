<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Edit User</h3>
            <span class="text-uppercase page-subtitle">Fill form to edit a user</span>
            </div>
        </div>
        <!-- End Page Header -->

        <!-- Button -->
        <div class="row">
            <div class="col">
                <nuxt-link to="/admin/category">
                <button type="button" class="mb-2 btn btn-outline-primary mr-2">Go back</button></nuxt-link>
            </div>
        </div>
        <!-- / Button -->

        <!-- Form -->
        <div class="row">
            <div class="card card-small mb-4 col-md-4" >
                <form @submit.prevent="checkForm">
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="alert alert-success" v-if="success"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ success }}</div>
                    <div class="alert alert-danger" v-if="error"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ error }}</div>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" v-model="data.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <textarea type="text" class="form-control" v-model="data.description" rows="4" aria-describedby="basic-addon1">
                        </textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <button type="submit" class="mb-2 btn btn-primary mr-2">Update category</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-8">
                <div class="card card-small mb-4">
                    <div class="card-header border-bottom">
                    <h6 class="m-0">Category Question</h6>
                    </div>
                    <div class="card-body p-0 pb-3 text-center">
                        <table id="question-table" class="table mb-0">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Question</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(q,index) in questions" :key="index">
                                <th scope="row">
                                    {{ index+1 }}
                                </th>
                                <td>
                                    {{ q.subject }}
                                </td>
                                <td>
                                    {{ q.description }}
                                </td>
                                <td><Adedotun :value="q.createdAt" fn="humandate" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Adedotun from '../../Extra/adedotun'
export default {
    data(){
      return {
        errors: [],
        data: {
            name:'',
            description:''
        },
        questions:[],
        success: '',
        error:''
      }
  },
  mounted(){
        this.getCategory()
        this.getQuestions()
        setTimeout(() => {
            $('#question-table').DataTable({})
        },2000)
  },
  components:{
      Adedotun
  },
  methods: {
    getCategory(){
        this.$store.dispatch('categoryById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
             this.data = resp.data.category
        }).catch(err => console.log())
    },
    getQuestions(){
        this.$store.dispatch('allCategoryQuestions', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
            this.questions = resp.data.questions
        }).catch(err => console.log())
    },
    update(){
        let component = this;
        this.$store.dispatch('updateCategory', [component.data,this.$store.state.auth.headers])
        .then((resp) => {
          this.error = ''
          this.success = ''
          if(resp.data.error){
            this.error = resp.data.msg
          }else{
            this.success = resp.data.msg
            this.errors = []
          }
        })
        .catch(err => {
            this.error = 'please verify that the data entered are correct.'
            console.log(err)
        })
    },
    checkForm: function (e) {
        if (this.data.name && this.data.description) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.data.name) {
        this.errors.push('Name required.');
        return false;
        }
        if (!this.data.description) {
        this.errors.push('Description required.');
        return false;
        }
        e.preventDefault();
    }
  }
}
</script>
