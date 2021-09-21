import t1 from "../static/temp/test.png"

//state
export const state = () => ({
	darkMode: false,
	activeGalleryFilter: 0,
	miniGallery: [
		{id: 1, status: false, src: t1}
	],
	adminGallery: [
		{id: 1, title: 'Test img', alt: 'Opis slike u altu', type: 'JPG', cSize: '134kb', oSize: '1.3MB', compression: '65%', activity: 'Slide Show', activityID: 1, status: false, src: t1}
	],
	webGallery: [],
	photoViewIndex: ''
});

//getters
export const getters = {
	getDarkMode: (state) => {
		return state.darkMode;
	},
	getGallery: (state) => {
		if (!state.activeGalleryFilter) {
			return state.photos;
		} else	return state.photos.filter(i => i.activityID === this.selectedFilterActivity);
	},
	getMiniGallery: (state) => {
		if (!state.activeGalleryFilter) {
			return state.miniGallery;
		} else	return state.miniGallery.filter(i => i.activityID === this.selectedFilterActivity);
	},
	getPhotoView: (state) => {
		return state.adminGallery[state.photoViewIndex];
	}
};

//actions
export const actions = {
	handlePhotoStatus: ({commit, payload}) => {
		return new Promise((resolve, reject) => {
			console.log('payload: ', payload);
			commit('setStatus', payload);
			resolve();
		});
	},
	handleGalleryRequest() {

	},
	async handlePhotoDelete() {
		const res = await this.$axios.$delete('')
	}
};

//mutations
export const mutations = {
	setDarkMode(state, value) {
		state.darkMode = value;
	},
	setGalleryFilter(state, value) {
		this.state.activeGalleryFilter = value;
	},
	deletePhotos(state, value) {
		state.miniGallery.splice(value, 1);
		state.adminGallery.splice(value, 1);
		//state.webGallery.splice(value, 1);	//Odkomentirati kasnije
		//this.$delete(state.webGallery, value);	//Odkomentirati kasnijevalue

	},
	filterPhotoById(state, value) {
		state.checkPhoto = state.miniGallery.filter(i => i.id === value);
	},
	setStatus(state, value) {
		let k = Object.keys(state.miniGallery).filter(function(key) {
			return state.miniGallery[key].id === value.id;
		});
		state.miniGallery[k[0]].status = value.status;
	},
	setPhotoViewIndex(state, value) {
		state.photoViewIndex = value;
	},
	savePhotoInfoChanges(state, value) {
		state.adminGallery[value.index].title = value.title;
		state.adminGallery[value.index].alt = value.alt;
	},
	confirmNewPhotos(state, value) {

	},
	toggleAllPhotoStatus(state, value) {
		if (value) {
			state.miniGallery.forEach((item) => {
				item.status = true;
			})
		} else {
			state.miniGallery.forEach((item) => {
				item.status = false;
			})
		}
	}
};
