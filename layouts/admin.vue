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
    </div>
</template>
<script>
import Header from '~/components/Layout/Admin/Header.vue'
import SideBar from '~/components/Layout/Admin/SideBar.vue'
import Footer from '~/components/Layout/Admin/Footer.vue'

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
                //{ src: 'https://apis.google.com/js/client.js'}
            ]
        }
    },
    data(){
        return {
            // user: {}
        }
    },
    components: {
        Header,Footer,SideBar
    },    
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    }
}
</script>