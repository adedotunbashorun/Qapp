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
                <nuxt-link to="/admin/users">
                <button type="button" class="mb-2 btn btn-outline-primary mr-2">Go back</button></nuxt-link>
            </div>
        </div>
        <!-- / Button -->

        <!-- Form -->
        <div class="row">
            <div class="card card-small mb-4 col-md-4" >
                <form @submit.prevent="checkForm">
                    <div class="row">
                        <div class="col-md-12">
                            <strong class="text-muted d-block mb-2"></strong>
                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                                </ul>
                            </p>
                            <div class="alert alert-success" v-if="success"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ success }}</div>
                            <div class="alert alert-danger" v-if="error"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ error }}</div>
                            <div class="form-group" style="max-width: 100%">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                </div>
                                <select class="form-control" v-model="user_details.title">
                                    <option value="">-- Select Title --</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Miss">Miss.</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group" style="max-width: 100%">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                </div>
                                <select class="form-control" v-model="user_details.medium">
                                    <option value="">-- Information Medium --</option>
                                    <option value="Email">Email</option>
                                    <option value="Sms">Sms</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group" style="max-width: 100%">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                </div>
                                <input type="text" class="form-control" v-model="user_details.first_name" placeholder="First Name" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                            </div>

                            <div class="form-group" style="max-width: 100%">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                </div>
                                <input type="text" class="form-control" v-model="user_details.last_name" placeholder="Last Name" aria-label="Full name" aria-describedby="basic-addon1"> </div>
                            </div>
                            <div class="form-group" style="max-width: 100%">
                                <input type="text" v-model="user_details.phone" pattern="^\+[1-9]\d{1,14}$" class="form-control" placeholder="Phone Number" value="">
                                <span class="note">Format: +2349034268873</span>
                            </div>

                            <div class="form-group" style="max-width: 100%">
                                <input type="text" v-model="user_details.email" class="form-control" id="inputAddress" placeholder="Email" value="">
                            </div>
                            <div class="form-group" style="max-width: 100%">
                                <button type="submit" class="mb-2 btn btn-primary mr-2">Update User</button>
                            </div>
                        </div>
                    </div>
                    <!-- End Form -->
                </form>
            </div>
            <div class="col-md-8" v-if="activities.length > 0">
                <div class="card card-small mb-4">
                    <div class="card-header border-bottom">
                    <h6 class="m-0">Activiting Log</h6>
                    </div>
                    <div class="card-body p-0 pb-3 text-center">
                        <table id="activity-table" class="table">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Action</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(activity,index) in activities" :key="index">
                                <th scope="row">
                                    {{ index+1 }}
                                </th>
                                <td>
                                    {{ activity.description }}
                                </td>
                                <td><Adedotun :value="activity.createdAt" fn="humandate" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12" v-if="responses.length > 0">
                    <div class="card card-small">
                        <div class="card-header border-bottom">
                          <h6 class="m-0">User Response</h6>
                        </div>
                        <div class="card-body p-0 pb-3 text-center">
                        <table id="response-table" class="table mb-0" style="margin:20px;">
                            <thead class="bg-light">
                            <tr>
                                <th scope="col" class="border-0">#</th>
                                <th scope="col" class="border-0">Question</th>
                                <th scope="col" class="border-0">From</th>
                                <th scope="col" class="border-0">Response</th>
                                <th scope="col" class="border-0"></th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(response, index) in responses" :key="index">
                                    <td>{{ index + 1}}</td>
                                    <td>{{ response.user_id.first_name + ' ' + response.user_id.last_name}}</td>
                                    <td>{{response.question_id.subject}}</td>
                                    <td>{{response.from}}</td>
                                    <td><a href="#" :data-data="response.data" data-toggle="modal" data-target="#getDetails" data-remote="false" class="bs-tooltip" data-original-title="Details">{{response.data.substr(0, 100)}}</a></td>
                                    <td><Adedotun :value="response.createdAt" fn="date" /></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="col-md-12" v-if="schedules.length > 0">
                  <div class="card card-small mb-4">
                      <div class="card-header border-bottom">
                        <h6 class="m-0">Schedule Log</h6>
                      </div>
                      <div class="card-body p-0 pb-3 text-center">
                          <table id="schedule-table" class="table">
                              <thead class="thead-dark">
                                  <tr>
                                      <th scope="col">S/N</th>
                                      <th scope="col">Category</th>
                                      <th scope="col"> Question</th>
                                      <th scope="col">Has Replied</th>
                                      <th scope="col">Scheduled Date</th>
                                      <th scope="col">Status</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(schedule,index) in schedules" :key="index">
                                  <th scope="row">
                                      {{ index+1 }}
                                  </th>
                                  <td>
                                      {{ schedule.category_id.name }}
                                  </td>
                                  <td>
                                      {{ schedule.question_id.subject }}
                                  </td>
                                  <td style="color: #3ED60E">{{ schedule.is_reply }}</td>
                                  <td><Adedotun :value="schedule.scheduled_date" fn="date" /></td>
                                  <td>{{ (new Date() > new Date(schedule.scheduled_date)) ? 'sent' : 'not sent'}}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>
            </div>
        <!-- End Default Light Table -->
            <div id="getDetails" class="modal fade" role="dialog">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"><i class="material-icons">detail</i> Details</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>

                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
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
        user_details: {
            title:'',
            medium:'',
            first_name:'',
            last_name:'',
            email:'',
            phone:''
        },
        responses: [],
        activities:[],
        schedules:[],
        success: '',
        error: ''
      }
  },
  components:{
      Adedotun
  },
  mounted(){
        this.getUser()
        this.activityLogs()
        this.userSchedule()
        this.allUserResponse()
        setTimeout(() => {
            $('#activity-table').DataTable({})
            $('#schedule-table').DataTable({})
            $('#response-table').DataTable({})
        },2000)
        var getDetails = $("#getDetails")
        // getDetails.on('hidden.bs.modal', function (e) {
        //     $(e.target).removeData("bs.modal").find(".loadAjax").empty();
        // });

        getDetails.on("show.bs.modal", function (e) {
            var link = $(e.relatedTarget);
            getDetails.find('p').html(link.data("data"))
        });

  },
  methods: {
    allUserResponse(){
        this.$store.dispatch('allUserResponse',[this.$nuxt._route.params.id, this.$store.state.auth.headers])
        .then((resp) => {
            this.responses = resp.data.responses
        }).catch(err => console.log())
    },
    getUser(){
        this.$store.dispatch('userById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
            return this.user_details = resp.data.user
        }).catch(err => console.log())
    },
    activityLogs(){
        this.$store.dispatch('activity', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
            this.activities = resp.data.activities
        }).catch(err => console.log())
    },
    userSchedule(){
        this.$store.dispatch('userSchedules', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
            this.schedules = resp.data.schedules
        }).catch(err => console.log())
    },
    update(){
        let component = this;
        this.$store.dispatch('updateUser', [component.user_details,this.$store.state.auth.headers])
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
        })
    },
    checkForm: function (e) {
        if (this.user_details.title && this.user_details.first_name && this.user_details.last_name && this.user_details.email && this.user_details.phone) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.user_details.title) {
        this.errors.push('Title required.');
        return false;
        }
        if (!this.user_details.first_name) {
        this.errors.push('FirstName required.');
        return false;
        }
        if (!this.user_details.last_name) {
        this.errors.push('LastName required.');
        return false;
        }
        if (!this.user_details.phone) {
        this.errors.push('Phone Number required.');
        return false;
        }
        if (!this.user_details.email) {
        this.errors.push('Email required.');
        return false;
        }else if (!this.validEmail(this.user_details.email)) {
        this.errors.push('Valid email required.');
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
