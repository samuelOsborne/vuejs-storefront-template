<template>
    <div>
        <b-container>
            <b-navbar>
                <b-navbar-brand href="#">Logo</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">About</b-nav-item>
                    <b-nav-item href="#">Services</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>