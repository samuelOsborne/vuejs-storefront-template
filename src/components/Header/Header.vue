<template>
    <div class="navbar-bg">
        <b-container>
            <b-navbar toggleable="lg" sticky>
                <b-navbar-brand>
                    <router-link :to="{ name: 'home' }" class="link-button">
                        Logo
                    </router-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item>
                            <router-link :to="{ name: 'about' }" class="link-button">
                                About
                            </router-link>
                        </b-nav-item>
                        <b-nav-item href="" class="link-button">
                            Services
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        }
    }
    // import Lottie from "vue-lottie";
    // import * as animationData from '../../assets/animations/9789-burger-menu.json';
    //
    // export default {
    //     name: "Header",
    //     components : {
    //         'lottie': Lottie
    //     },
    //     data () {
    //         return {
    //             defaultOptions: {animationData: animationData},
    //             // isActive: true,
    //             animationSpeed: 1,
    //             // loop: false,
    //             // autoplay: true
    //         }
    //     },
    //     methods: {
    //         unfold: function () {
    //             this.isActive = !this.isActive;
    //         },
    //         handleAnimation: function (anim) {
    //           this.anim = anim;
    //         },
    //         play: function () {
    //             this.anim.play();
    //         }
    //     }
    // }
</script>

<style scoped>

</style>