<template>
    <div class="main-content-container container-fluid px-4">
            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">User Management</h3>
            <span class="text-uppercase page-subtitle">Add, rename and manage</span>
            </div>
        </div>
        <!-- End Page Header -->

        <!-- Button -->
        <div class="row">
        <div class="col">
            <nuxt-link to="/admin/users/create">
            <button type="button" class="mb-2 btn btn-outline-primary mr-2">Create User</button></nuxt-link>
        </div>
        </div>
        <!-- / Button -->            

        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Users Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table id="user-table" class="table" style="margin:20px;">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">Full Name</th>
                        <th scope="col" class="border-0">Email</th>
                        <th scope="col" class="border-0">Phone Number</th>
                        <th scope="col" class="border-0">User Type</th>
                        <th scope="col" class="border-0">Is Scheduled</th>
                        <th scope="col" class="border-0"> Action </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user,index) in users" :key="index">
                        <td>{{ index +1 }}</td>
                        <td>{{ user.first_name + ' ' + user.last_name}}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>                        
                        <td>{{ user.user_type }}</td>
                        <td style="color: #3ED60E">{{ user.is_scheduled }}</td>
                        <td> 
                        <!-- <ul class="navbar-nav border-left flex-row ">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="d-none d-md-inline-block">Action</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small"> -->
                                <nuxt-link class="" :to="{name: 'admin-users-id', params:{id : user._id}}" title="edit / view">
                                <i class="material-icons">edit</i></nuxt-link>
                                <!-- <div class="dropdown-divider"></div> -->
                                <a v-if="user.user_type !== 'admin'" class="text-danger" style="cursor:pointer;" @click="deleteUser(user._id)" title="delete">
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
    props:['users'],
    mounted(){
        setTimeout(() => {
            $('#user-table').DataTable({})
        },2000)
    },
    methods:{
        deleteUser(id){
            this.$store.dispatch('removeUser', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
