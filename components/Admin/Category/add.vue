<template>
    <div class="main-content-container container-fluid px-4">
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Add Category</h3>
            <span class="text-uppercase page-subtitle">Fill form to create new category</span>
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
            <div class="col">
                <strong class="text-muted d-block mb-2"></strong>
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
                        <input type="text" class="form-control" v-model="category.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <textarea type="text" class="form-control" v-model="category.description" rows="4" aria-describedby="basic-addon1">
                        </textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <button type="submit" class="mb-2 btn btn-primary mr-2">Add category</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Form -->

        <!-- Button -->

        <!-- / Button -->
    </div>

</template>
<script>
export default {
    data(){
        return {
            errors: [],
            category: {
                name:'',
                description:''
            },
            success: '',
            error: ''
        }
    },
    methods: {
        register(){
            let component = this;
            this.$store.dispatch('addCategory', [component.category,this.$store.state.auth.headers])
            .then((resp) => {
               this.error = ''
                this.success = ''
                if(resp.data.error){
                  this.error = resp.data.msg
                }else{
                  this.success = ''
                  this.success = resp.data.msg
                  this.category= {
                      name:'',
                      description:''
                  }
                  this.errors = []
                }
            })
            .catch(err => {
                this.error = ''
                this.error = 'please verify that the data entered are correct.'
                console.log(err)
            })
        },
        checkForm: function (e) {
            if (this.category.name && this.category.description) {
            this.register();
            return true;
            }

            this.errors = [];
            if (!this.category.name) {
            this.errors.push('Name required.');
            return false;
            }
            if (!this.category.description) {
            this.errors.push('Description required.');
            return false;
            }
            e.preventDefault();
        }
    }
}
</script>

