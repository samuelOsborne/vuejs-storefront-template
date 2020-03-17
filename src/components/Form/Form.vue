<template>
    <div class="background-shadow-small form">
        <h2>
            Contact us
        </h2>
        <b-form @submit="onSubmit" v-if="show">
            <b-form-group
                    id="input-group-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
                <b-form-input
                        id="input-2"
                        v-model="form.name"
                        required
                        placeholder="Email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3">
                <b-form-textarea
                        rows="10"
                        max-rows="15"
                        id="input-3"
                        v-model="form.text"
                        required
                        placeholder="What can we do for you?"
                        style="overflow: hidden"
                ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
	export default {
		name: "Form",

		data() {
			return {
				form: {
					email: '',
					name: '',
                    text: ''
				},
				show: true
			}
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault();
				alert(JSON.stringify(this.form))
			},
			onReset(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.name = '';
				this.form.text= '';
				// Trick to reset/clear native browser form validation state
				this.$nextTick(() => {
					this.show = true
				})
			}
		}
	}
</script>

<style scoped>

</style>
