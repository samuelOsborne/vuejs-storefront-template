<template>
    <div class="sticky-navbar">
        <b-navbar toggleable="lg" style="z-index: 1020">
            <b-container>
                <b-navbar-brand :to="{ name: 'home' }" class="navbar-logo">
                    <img src="../../assets/placeholder-logo.svg" />
                </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="link-button hide-navbar-items" :to="{ name: 'about' }">
                        About
                    </b-nav-item>
                    <b-nav-item class="link-button hide-navbar-items" :to="{ name: '' }">
                        Services
                    </b-nav-item>
                    <b-nav-item class="link-button" >
                        <span style="font-size:25px;cursor:pointer;line-height: normal;" v-on:click="fullPageMenu">&#9776;</span>
                    </b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>

        <div class="full-page-overlay" v-bind:class="{ 'show-overlay': this.isActive }">
            <div class="overlay-content">
                <b-list-group>
                    <router-link :to=" {} ">
                        Home
                    </router-link>
                    <router-link :to=" {} ">
                        link
                    </router-link>
                    <router-link :to=" {} ">
                        link
                    </router-link>
                </b-list-group>
                <b-row>
                    <b-col>
                        <router-link :to=" {} ">
                            link
                        </router-link>
                    </b-col>
                    <b-col>
                        <router-link :to=" {} ">
                            link
                        </router-link>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data : function() {
            return (
                {
                    isActive: false
                }
            )
        },
        methods: {
            fullPageMenu: function () {
                this.isActive = !this.isActive;
            }
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