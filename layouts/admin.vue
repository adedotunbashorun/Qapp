<template>
    <div class="container-fluid">
        <div class="row">
            <SideBar/>
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <Header/>
                <div class="main-content-container container-fluid px-4">
                    <nuxt />
                </div>                
                <Footer/>
            </main>
        </div>
    </div>
</template>
<script>
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import Footer from '~/components/Footer.vue'

export default {
    head () {
        return {
            bodyAttrs: {
                id: 'page-top'
            },
            link: [
                { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:'anonymous' },
                { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.0/dist/aos.css' },
                { rel: 'stylesheet',href: '/css/main.css', type:"text/css"}
            ],
            script: [        
                { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", crossorigin:"anonymous" },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1", crossorigin:"anonymous" },
                { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM", crossorigin:"anonymous"},
                { src: 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.1/typed.min.js' },
                { src: 'https://unpkg.com/aos@2.3.0/dist/aos.js' },
                { src: '/js/text-to-speech.js' }
            ]
        }
    },
    components: {
        Header,Footer,SideBar
    }
}
</script>