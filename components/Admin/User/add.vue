<template>
    <div class="main-content-container container-fluid px-4">            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Add User</h3>
            <span class="text-uppercase page-subtitle">Fill form to create new user</span>
            </div>
        </div>
        <!-- End Page Header -->

        <!-- Button -->
        <div class="row">
        <div class="col">
            <nuxt-link to="/admin/users">
            <button type="button" class="mb-2 btn btn-outline-primary mr-2">Go back</button></nuxt-link>
        </div>
        </div>
        <!-- / Button -->            

        <!-- Form -->
        
        <form @submit.prevent="checkForm">
            <div class="row">
                <div class="col">
                    <strong class="text-muted d-block mb-2"></strong>
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <select class="form-control" v-model="user.title">
                            <option value="">-- Select Title --</option>
                            <option value="Mr">Mr.</option>
                            <option value="Mrs">Mrs.</option>
                            <option value="Miss">Miss.</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <select class="form-control" v-model="user.user_type">
                            <option value="">-- User Type--</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <select class="form-control" v-model="user.medium">
                            <option value="">-- Information Medium --</option>
                            <option value="Email">Email</option>
                            <option value="Sms">Sms</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" v-model="user.first_name" placeholder="First Name" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" v-model="user.last_name" placeholder="Last Name" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                    </div>
                    <div class="form-group" style="max-width: 30%">
                        <input type="text" v-model="user.phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{4}" class="form-control" placeholder="Phone Number" value="" required> 
                        <span class="note">Format: 2349034268873</span>
                    </div>
                    
                    <div class="form-group" style="max-width: 30%">
                        <input type="text" v-model="user.email" class="form-control" id="inputAddress" placeholder="Email" value=""> 
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <input type="password" class="form-control" v-model="user.password" id="inputPassword4" placeholder="Password" value="">
                    </div>                
                </div>
            </div>
            <!-- End Form -->

            <!-- Button -->
            <div class="row">
                <div class="col">
                <button type="submit" class="mb-2 btn btn-primary mr-2">Add user</button>
                </div>
            </div>
            <!-- / Button --> 
        </form>
    </div>

</template>
<script>
export default {
    data(){
        return {
            errors: [],
            user: {
                title:'',
                medium:'',
                user_type:'',
                first_name:'',
                last_name:'',
                email:'',
                phone:'',
                password:''
            }
        }
    },
    methods: {
        register(){
            let component = this;
            this.$store.dispatch('addUser', [component.user,this.$store.state.auth.headers])
            .then((resp) => {component.$router.push('/admin/users')})
            .catch(err => console.log(err))
        },
        checkForm: function (e) {
            if (this.user.title && this.user.first_name && this.user.last_name && this.user.email && this.user.phone && this.user.password) {
            this.register();
            return true;
            }

            this.errors = [];
            if (!this.user.title) {
            this.errors.push('Title required.');
            return false;
            }
            if (!this.user.first_name) {
            this.errors.push('FirstName required.');
            return false;
            }
            if (!this.user.last_name) {
            this.errors.push('LastName required.');
            return false;
            }
            if (!this.user.phone) {
            this.errors.push('Phone Number required.');
            return false;
            }
            if (!this.user.email) {
            this.errors.push('Email required.');
            return false;
            }else if (!this.validEmail(this.user.email)) {
            this.errors.push('Valid email required.');
            return false;
            }
            if (!this.user.password) {
            this.errors.push('Password required.');
            return false;
            }
            e.preventDefault();

        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
