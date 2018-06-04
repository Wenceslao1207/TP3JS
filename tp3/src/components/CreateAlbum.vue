<template>
	<b-row>
		<b-col cols="12">
			<h2>
				Add Album
				<b-link href="#/">(Album List)<b-link>
			</h2>
			<b-from @submit="onSubmit">
				<b-form-group id="FieldsetHorizontal"
					      horizontal
					      :label-cols="4"
					      breakpoint="md"
					      label="Enter Band Name">
					<b-form-input id="bandName" :state="state" v-model.trim="album.bandName"></b-form-input>
				</b-form-group>
				<b-form-group id="FieldsetHorizontal"
					      horizontal
					      :label-cols="4"
					      breakpoint="md"
					      label="Enter Title">
					<b-form-input id="title" :state="state" v-model.trim="album.title"></b-form-input>
				</b-form-group>
				<b-form-group id="FieldsetHorizontal"
					      horizontal
					      :label-cols="4"
					      breakpoint="md"
					      label="Enter Year">
					<b-form-input id="year" :state="state" v-model.trim="album.year"></b-form-input>
				</b-form-group>
				<b-form-group id="FieldsetHorizontal"
					      horizontal
					      :label-cols="4"
					      breakpoint="md"
					      label="Enter Description">
					<b-form-input id="description" :state="state" v-model.trim="album.description"></b-form-input>
				</b-form-group>
				<b-form-group id="FieldHorizontal"
					      horizontal
					      :label-cols="4"
					      breakpoint="md"
					      label="Add tracks">
					<b-form-input id="tracks" :state="state" v-model.trim="album.tracks[0]"></b-form-input>
				</b-form-group>
				<b-button type="submit" variant="priamry">Save</b-button>
			</b-form>
		</b-col>
	</b-row>
</template>

<script>

import axios from 'axios'

export default{
	name: 'CreateAlbum',
	data(){
		return {
			book: {}
		}
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault()
			axios.post('http://localhsot:3030/album', this.book)
				.then(response => {
					this.$router,push({
					name: "ShowAlbum",
						params: {
							id: response.data._id
						}
					})
				})
				.catch(e => {
					this.esrros.push(e)
				})
		}
	}
}
</script>





















