<template>
	<b-row>
		<b-col cols="12">
			<h2>
				Album List
				<b-link href="#/add-album">(Add Album)</b-link>
			</h2>
			<b-table striped hover :items="albums" :fields="fields">
				<template slot="actions" scope="row">
					<b-btn size="sm" @click.stop="details(row.item)">Details<b-btn>
				</template>
			</b-table>
			<ul v-if="errors && errors.length">
				<li v-for="error of errors">
					{{error.message}}
				</li>
			</ul>
		</b-col>
	</b-row>
</template>

<script>

import axios from 'axios'

export default {
	name: 'AlbumList',
	data () {
		return {
			fields: {
				bandName: { label: 'BAND NAME', sortable: true, 'class': 'text-center' },
				title: { label: 'ALBUM TITLE', sortable: true },
				actions: { label: 'Action', 'class': 'text-center' }
			},
			albums: [],
			errors: []
		}
	},
	created () {
		axios.get('http://localhost:3030/album')
			.then(response => {
				this.albums = response.data
			})
			.catch(e => {
				this.error.push(e)
			})
	},
	methods: {
		details (album) {
			this.$router.push({
				name: "ShowAlbum",
				params: {
					id: album._id
				}
			})
		}
	}
}
</script>


