<template>
    <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
        <div class="main-navbar">
        <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
            <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
            <div class="d-table m-auto">
                <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px; max-height: 25px;" src="/images/Blueform_LOGO_MARK_COLORED_NO_BG.png" alt="Shards Dashboard">
                <span class="d-none d-md-inline ml-1">QAPP</span>
            </div>
            </a>
            <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <i class="material-icons">&#xE5C4;</i>
            </a>
        </nav>
        </div>
        <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
        <div class="input-group input-group-seamless ml-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fas fa-search"></i>
            </div>
            </div>
            <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
        </form>
        <div class="nav-wrapper">
        <ul class="nav flex-column">
            <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/dashboard">
                <i class="material-icons">home</i>
                <span><strong>Dashboard</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/users">
                <i class="material-icons">person</i>
                <span><strong>Users</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " to="/admin/category">
                <i class="material-icons">vertical_split</i>
                <span><strong>Categories</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " to="/admin/questions">
                <i class="material-icons">view_module</i>
                <span><strong>Questions</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " :to="{name: 'admin-schedules'}">
                <i class="material-icons">schedule</i>
                <span><strong>Schedules</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " :to="{name: 'admin-response'}">
                <i class="material-icons">reply</i>
                <span><strong>Response</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " :to="{name: 'admin-archieves'}">
                <i class="material-icons">list</i>
                <span><strong>Archieve</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <a class="nav-link" style="cursor:pointer;" @click="logoutUser">
                <i class="material-icons">logout</i>
                <span><strong>Logout</strong></span>
            </a>
            </li>
        </ul>
        </div>
    </aside>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    methods:{
        logoutUser() {
          let component = this;
          this.$store.dispatch('logout',this.$store.state.auth.headers)
          .then(() => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            const token = null
            const user = null
            this.$store.commit('LOGIN_SUCCESS', {token, user})
            this.$router.go('/')
          })
          .catch(err => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            const token = null
            const user = null
            this.$store.commit('LOGIN_SUCCESS', {token, user})
            this.$router.go('/')
          })
      },
    }
}
</script>
