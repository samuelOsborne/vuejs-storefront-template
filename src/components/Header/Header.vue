<template>
    <div class="sticky-navbar">
        <b-navbar style="z-index: 1020">
            <b-container style="z-index: 1020">
                <b-navbar-brand :to="{ name: 'home' }" class="navbar-logo">
                    <img src="../../assets/placeholder-logo.svg" />
                </b-navbar-brand>
                <slot>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="hide-navbar-items align-link-center" :to="{ name: 'about' }" link-classes="link-button">
                            About
                        </b-nav-item>
                        <b-nav-item class="hide-navbar-items align-link-center" :to="{ name: '' }" link-classes="link-button">
                            Services
                        </b-nav-item>
                        <b-nav-item>
                            <button class="hamburger hamburger--spin" type="button" v-on:click="fullPageMenu"
                                    v-bind:class="{ 'active': isOverlayActive }">
                                <div class="inner">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                            </button>
                        </b-nav-item>
                    </b-navbar-nav>
                </slot>
            </b-container>
        </b-navbar>
        <Overlay>
        </Overlay>
    </div>
</template>

<script>
    import Overlay from "../Overlay/Overlay";
    import {mutations, store} from "../../store";

    export default {
        name: 'app',
        components: {
            Overlay
        },

        computed: {
            isOverlayActive() {
                return store.isOverlayOpen
            }
        },

        methods: {
            fullPageMenu: function () {
                mutations.toggleOverlay()
            }
        }
    }
</script>