<template>
    <div class="main-content-container container-fluid px-4">
            
        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Schedule Management</h3>
            <span class="text-uppercase page-subtitle">Add, rename and manage</span>
            </div>
        </div>
        <!-- End Page Header -->
                    

        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Schedule Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table id="schedule-table" class="table mb-0">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">User</th>
                        <th scope="col" class="border-0">Category</th>                        
                        <th scope="col" class="border-0">Question</th>                                                
                        <th scope="col" class="border-0">Schedule</th>
                        <th scope="col" class="border-0">Action </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(schedule, index) in schedules" :key="index">
                            <td>{{ index + 1}}</td>
                            <td>{{ schedule.user_id.first_name + ' ' + schedule.user_id.last_name}}</td>
                            <td>{{schedule.category_id.name}}</td>
                            <td>{{schedule.question_id.subject}}</td>  
                            <td><Adedotun :value="schedule.scheduled_date" fn="date" /></td>
                            <td>
                                <!-- <ul class="navbar-nav border-left flex-row ">
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="d-none d-md-inline-block">Action</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-small"> -->
                                    <nuxt-link class="" :to="{name: 'admin-users-id', params:{id : schedule.user_id._id}}" title="view">
                                        <i class="material-icons">&#xE7FD;</i></nuxt-link>
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
import Adedotun from '../../Extra/adedotun'
export default {
    props:['schedules'],
    mounted(){
        setTimeout(() => {
            $('#schedule-table').DataTable({})
        },2000)
    },
    components:{
        Adedotun
    }
}
</script>
