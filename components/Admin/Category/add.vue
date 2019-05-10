<template>
    <div class="main-content-container container-fluid px-4">            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Add User</h3>
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
                <form>
                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" placeholder="Full Name" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" placeholder="Phone number" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> </div>
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <input type="text" class="form-control" id="inputAddress" placeholder="Email" value=""> 
                    </div>

                    <div class="form-group" style="max-width: 30%">
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value="">
                    </div>
                </form>
            </div>
        </div>
        <!-- End Form -->

        <!-- Button -->
        <div class="row">
            <div class="col">
            <button type="button" class="mb-2 btn btn-primary mr-2">Add category</button>
            </div>
        </div>
        <!-- / Button --> 
    </div>

</template>
