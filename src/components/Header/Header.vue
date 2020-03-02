<template>
    <div>
        <div class="navbar-bg">
            <b-container>
                <b-navbar toggleable="lg" sticky>
                    <b-navbar-brand>
                        <router-link :to="{ name: 'home' }" class="link-button">
                            Logo
                        </router-link>
                    </b-navbar-brand>
                    <!--                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
                    <!--                    <b-collapse id="nav-collapse" is-nav>-->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="link-button hide-navbar-items" :to="{ name: 'about' }">
                            About
                        </b-nav-item>
                        <b-nav-item class="link-button hide-navbar-items" :to="{ name: '' }">
                            Services
                        </b-nav-item>
                        <b-nav-item class="link-button" >
                            <span style="font-size:25px;cursor:pointer;line-height: normal" v-on:click="fullPageMenu">&#9776;</span>
                        </b-nav-item>
                    </b-navbar-nav>
                    <!--                    </b-collapse>-->
                </b-navbar>
            </b-container>
        </div>

        <div class="full-page-overlay" v-bind:class="{ 'show-overlay': this.isActive }" style="width: 0;">
            <a href="javascript:void(0)" class="closebtn" v-on:click="fullPageMenu">&times;</a>
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
                console.log(this.isActive);
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