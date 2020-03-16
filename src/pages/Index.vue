<template>
    <div class="pt-5 pb-4">
        <b-container>
            <b-row class="pb-5">
                <b-col style="text-align: left">
                    <h1 class="font-weight-bold">
                        The Future of Animation and Interactive Design is here.
                    </h1>
                    <h4 class="pt-3">
                        Lottie animations and the tools you need to test and perfect them. Simply edit and ship your animations in just a few clicks.
                    </h4>
                    <p class="pt-3">
                        Lottie libraries and plugins available for free Web, iOS, Android, Flutter, React Native, Xamarin, NativeScript, Windows, Vue, Angular, QT, Skia, Framer X, Sketch for free.
                    </p>
                </b-col>
                <b-col>
                    <div class="presentation-card-image mx-auto">
                    </div>
                </b-col>
            </b-row>

            <p class="pb-3 font-weight-bold">
                Trusted by
            </p>

            <b-row class="pb-5" style="justify-content: center">
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
                <b-col xs="12">
                    <div class="client-card mx-auto" />
                </b-col>
            </b-row>
        </b-container>

        <div class="grey-section">
            <b-container>
                <b-col class="pt-5 pb-5">
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

                    <b-row class="pt-5">
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
                </b-col>
            </b-container>
        </div>

        <b-container>
            <b-col cols="10" class="mx-auto pt-5 pb-5">
                <Form>
                </Form>
            </b-col>
        </b-container>
    </div>
</template>

<script>
	import Form from "../components/Form/Form"

	export default {
		name: 'PageIndex',

		components: {
			Form
		}
	}
</script>
