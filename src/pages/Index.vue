<template>
    <div class="pt-5 pb-4">
        <b-container>
            <b-row>
                <b-col cols="8">
                    <b-jumbotron header="This is a Vuejs website template"
                                 lead="Made with Bootstrap-Vue"
                                 class="jumbotron-header-text">
                        <p>
                            For more information scroll down!
                        </p>
                        <b-button variant="primary">
                            Get Started!
                        </b-button>
                    </b-jumbotron>
                </b-col>
                <b-col>
                    <b-card img-alt="Image" class="presentation-card">
                        <div class="presentation-card-image background-shadow-small">
                        </div>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-card-group deck>
                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>

                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>

                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-row>

            <b-row class="pt-5 pb-5">
                <b-card-group deck>
                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>

                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>

                    <b-card class="background-shadow-small-to-heavy"
                            img-alt="Image"
                            img-top
                            body-class="card-body">
                        <b-card-img src="../assets/icons/construction.svg" class="card-img"/>
                        <b-card-title>Title</b-card-title>
                        <b-card-text>
                            A pseudo-Latin text used in web design, layout,
                            and printing in place of things to emphasise design for previewing layouts.
                        </b-card-text>
                    </b-card>
                </b-card-group>
            </b-row>
            <Form>
            </Form>
        </b-container>
    </div>
</template>

<script>
    import Form from "../components/Form/Form";

    export default {
        name: 'PageIndex',

        components: {
            Form
        }
    }
</script>
