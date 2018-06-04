import Vue from 'vue'
import Router from 'vue-router'
import AlbumList from '@/components/AlbumList'
import ShowAlbum from '@/components/ShowAlbum'
import CreateAlbum from '@/components/CreateAlbum'
import EditAlbum from '@/components/EditAlbum'

Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path: '/',
		  name: 'AlbumList',
		  component: AlbumList
	  }
	  {
		  path: '/show-album/:id',
		  name: 'ShowAlbum',
		  component: ShowAlbum
	  }
	  {
		  path: '/add-album',
		  name: 'CreateAlbum',
	          component: CreateAlbum
	  }
	  {
		  path: '/edit-album/:id',
		  name: 'EditAlbum',
		  component: EditAlbum
	  }
  ]
})
