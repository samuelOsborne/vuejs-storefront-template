<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col>
                    Copyright 2020
                </b-col>
                <b-col>
                    <router-link :to="{}" class="footer-link-button">
                        Dribble
                    </router-link>
                    <router-link :to="{}" class="footer-link-button">
                        Medium
                    </router-link>
                    <router-link :to="{}" class="footer-link-button">
                        Instagram
                    </router-link>
                    <router-link :to="{}" class="footer-link-button">
                        Twitter
                    </router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'privacy-policy' }" class="footer-link-button">
                        Privacy Policy
                    </router-link>
                    <router-link :to="{ name: 'license-terms' }" class="footer-link-button">
                        License & Terms
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>