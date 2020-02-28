<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col>
                    Copyright 2020
                </b-col>
                <b-col>
                    <router-link :to="{}" class="link-button">
                        Dribble
                    </router-link>
                    <router-link :to="{}" class="link-button">
                        Medium
                    </router-link>
                    <router-link :to="{}" class="link-button">
                        Instagram
                    </router-link>
                    <router-link :to="{}" class="link-button">
                        Twitter
                    </router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'privacy-policy' }" class="link-button">
                        Privacy Policy
                    </router-link>
                    <router-link :to="{ name: 'license-terms' }" class="link-button">
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