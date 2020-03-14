<!--
    Add props as number of links
-->
<template>
    <div class="full-page-overlay" v-bind:class="{ 'show-overlay': isOverlayActive }">
        <div class="overlay-content">
            <b-container>
                <slot>
                    <b-list-group>
                        <router-link :to="{}" class="link-button overlay-link" active-class="overlay-link">
                            Home
                        </router-link>
                        <router-link :to="{}" class="link-button overlay-link">
                            link
                        </router-link>
                        <router-link :to="{}" class="link-button overlay-link">
                            link
                        </router-link>
                    </b-list-group>
                    <b-row class="pt-5">
                        <b-col>
                            <router-link :to="{}" class="link-button overlay-link-sm">
                                link
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{}" class="link-button overlay-link-sm">
                                link
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{}" class="link-button overlay-link-sm">
                                link
                            </router-link>
                        </b-col>
                        <b-col>
                            <router-link :to="{}" class="link-button overlay-link-sm">
                                link
                            </router-link>
                        </b-col>
                    </b-row>
                </slot>
            </b-container>
        </div>
    </div>
</template>

<script>
    import { store } from "../../store";

    export default {
        name: "Overlay",

        computed: {
            isOverlayActive() {
                return store.isOverlayOpen
            }
        }
    }
</script>

<style scoped>

</style>