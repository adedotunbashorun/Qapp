<template>
    <div class="main-content-container container-fluid px-4">
            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Category Management</h3>
            <span class="text-uppercase page-subtitle">Add, rename and manage</span>
            </div>
        </div>
        <!-- End Page Header -->

        <!-- Button -->
        <div class="row">
        <div class="col-md-6">
            <nuxt-link to="/admin/category/create">
            <button type="button" class="mb-4 btn btn-outline-primary mr-4">Create Category</button></nuxt-link>
        </div>
        </div>
        <!-- / Button -->            

        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Category Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table class="table mb-0">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">Name</th>
                        <th scope="col" class="border-0">Description</th>
                        <th scope="col" class="border-0">Action </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category, index) in categories" :key="index">
                            <td>{{ index + 1}}</td>
                            <td>{{ category.name}}</td>
                            <td>{{category.description}}</td>
                            <td>
                                <ul class="navbar-nav border-left flex-row ">
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="d-none d-md-inline-block">Action</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-small">
                                        <nuxt-link class="dropdown-item" :to="{name: 'admin-category-id', params:{id : category._id}}">
                                        <i class="material-icons">&#xE7FD;</i>Edit Category</nuxt-link>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item text-danger" @click="deleteCategory(category._id)">
                                        <i class="material-icons text-danger">&#xE879;</i> Delete Category </a>
                                    </div>
                                    </li>
                                </ul>
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
    props:['categories'],
    methods:{
        deleteCategory(id){
            this.$store.dispatch('removeCategory', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
