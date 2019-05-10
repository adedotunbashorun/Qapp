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
        <div class="col">
            <nuxt-link to="/admin/questions/create">
            <button type="button" class="mb-2 btn btn-outline-primary mr-2">Create Question</button></nuxt-link>
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
                <table class="table mb-0">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">Full Name</th>
                        <th scope="col" class="border-0">Username</th>
                        <th scope="col" class="border-0">Phone Number</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0">        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Edward Fagbohun</td>
                        <td>Edwardf</td>
                        <td>08032050567</td>
                        <td style="color: #3ED60E">True</td>
                        <td> 
                        <ul class="navbar-nav border-left flex-row ">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="d-none d-md-inline-block">Action</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="user-profile-lite.html">
                                <i class="material-icons">&#xE7FD;</i>Edit User</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#">
                                <i class="material-icons text-danger">&#xE879;</i> Delete User </a>
                            </div>
                            </li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Kaycee</td>
                        <td>Kay</td>
                        <td>0909828928</td>
                        <td style="color: #3ED60E">True</td>
                        <td>
                        <ul class="navbar-nav border-left flex-row ">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="d-none d-md-inline-block">Action</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="user-profile-lite.html">
                                <i class="material-icons">&#xE7FD;</i>Edit User</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#">
                                <i class="material-icons text-danger">&#xE879;</i> Delete User </a>
                            </div>
                            </li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tochukwu Egesi</td>
                        <td>Tochi</td>
                        <td>0708282020</td>
                        <td style="color: #3ED60E">True</td>
                        <td>
                        <ul class="navbar-nav border-left flex-row ">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="d-none d-md-inline-block">Action</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="user-profile-lite.html">
                                <i class="material-icons">edit</i>Edit User</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#">
                                <i class="material-icons text-danger">delete</i> Delete User </a>
                            </div>
                            </li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ionoshepera klause</td>
                        <td>Iono</td>
                        <td>+44 454893992</td>
                        <td style="color: #3ED60E">True</td>
                        <td>
                        <ul class="navbar-nav border-left flex-row ">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <span class="d-none d-md-inline-block">Action</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="user-profile-lite.html">
                                <i class="material-icons">&#xE7FD;</i>Edit User</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#">
                                <i class="material-icons text-danger">&#xE879;</i> Delete User </a>
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
