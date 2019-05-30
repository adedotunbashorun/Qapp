<template>
    <div class="main-content-container container-fluid px-4">

        <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <h3 class="page-title">Archieve Management</h3>
            <span class="text-uppercase page-subtitle"></span>
            </div>
        </div>
        <!-- End Page Header -->


        <!-- Default Light Table -->
        <div class="row">
            <div class="col">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                <h6 class="m-0">Archieve Listing</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center">
                <table id="response-table" class="table mb-0" style="margin:20px;">
                    <thead class="bg-light">
                    <tr>
                        <th scope="col" class="border-0">#</th>
                        <th scope="col" class="border-0">From</th>
                        <th scope="col" class="border-0">Response</th>
                        <th scope="col" class="border-0"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(response, index) in archieves" :key="index">
                            <td>{{ index + 1}}</td>
                            <td>{{response.from}}</td>
                            <td>{{response.data.substr(0, 100)}}</td>
                            <td><Adedotun :value="response.createdAt" fn="date" /></td>
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
    props:['archieves'],
    mounted(){
        setTimeout(() => {
            $('#response-table').DataTable({})
        },2000)
    },
    components:{
        Adedotun
    }
}
</script>
