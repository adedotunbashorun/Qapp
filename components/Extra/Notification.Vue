<template>
    <li class="nav-item dropdown">
        <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="ni ni-bell-55"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
          <a class="dropdown-item" v-for="notification in notifications" v-on:click="MarkAsRead(notification)">{{ notification.data.user.name }}</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
</template>

<script>
    export default {
        props: ['notifications'],
        methods: {
            MarkAsRead: function(notification){
                var data = {
                    id: notification.id
                };
                axios.post('/admin/notification/read',data).then(response =>{
                    window.location.href = "/admin/users/" + notification.data.user.id + "/edit";
                });
            }
        },
        created() {
          axios.get('/admin/notification/get').then(response =>{
            this.notifications = response.data;
          });
        }
    }
</script>
