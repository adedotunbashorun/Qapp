<template>
    <div class="container-fluid">
        <div class="row">
            <SideBar/>
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <Header :user="user"/>
                <div class="main-content-container container-fluid px-4">
                    <nuxt />
                </div>
                <Footer/>
            </main>
        </div>
        <div id="changePassword" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"><i class="material-icons">detail</i> Reset Password</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div>
                          <div class="form-label-group">
                            <label for="inputPassword">Old Password</label>
                            <input type="password" class="form-control" v-model="reset.old_password" placeholder="Password" required>
                          </div>
                          <div class="form-label-group">
                            <label for="inputPassword">New Password</label>
                            <input type="password" class="form-control" v-model="reset.password" placeholder="Password" required>
                          </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="mb-2 btn btn-primary mr-2" @click="resetPassword()">Change Password</button>
                      <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '~/components/Layout/Admin/Header.vue'
import SideBar from '~/components/Layout/Admin/SideBar.vue'
import Footer from '~/components/Layout/Admin/Footer.vue'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    head () {
        return {
            bodyAttrs: {
                class: 'h-100'
            },
            link: [
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css',crossorigin:'anonymous' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet',href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'},
                { rel: 'stylesheet', href: '/styles/shards-dashboards.1.1.0.min.css', 'id':"main-stylesheet", 'data-version':"1.1.0" },
                { rel: 'stylesheet', href: '/styles/extras.1.1.0.min.css' },
                { rel: 'stylesheet',href: 'https://buttons.github.io/buttons.js'},
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Overpass|Raleway'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
                { rel: 'stylesheet',href: '/styled.css'},
                { rel: 'stylesheet', href: '/styles/toastr/toastr.min.css'},
                { rel: 'stylesheet', href:'//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css'}
            ],
            script: [
                { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
                { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'},
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js' },
                { src: 'https://unpkg.com/shards-ui@latest/dist/js/shards.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js' },
                { src: '/scripts/extras.1.1.0.min.js' },
                { src: '/scripts/shards-dashboards.1.1.0.min.js' },
                { src: '/scripts/app/app-blog-overview.1.1.0.js' },
                { src: '//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js'},
                { src: '/scripts/toastr/toastr.init.js' },
                { src: '/scripts/toastr/toastr.min.js' },
            ]
        }
    },
    data(){
        return {
          reset:{
            old_password: '',
            password: '',
          }
            // user: {}
        }
    },
    components: {
        Header,Footer,SideBar //qT7ZpC
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    },
    mounted(){
      // alert(JSON.stringify(this.user))
      if(this.user.reset_password === true){
        $("#changePassword").modal('show')
      }
    },
    methods:{
      resetPassword(){
            let component = this;
            component.reset._id = this.user._id;
            this.$store.dispatch('resetPassword', [component.reset,this.$store.state.auth.headers])
            .then((resp) => {
                this.error = ''
                this.success = ''
                if(resp.data.error){
                  this.error = resp.data.msg
                }else{
                  this.success = resp.data.msg
                  this.reset= {
                      password:'',
                      old_password:''
                  }
                  Cookie.remove('user')
                  Cookie.set('user', resp.data.user)
                  this.errors = []
                  location.reload()
                }

            })
            .catch(err => {
                console.log(err)
                this.error = err.message
            })
        },
    }
}
</script>
