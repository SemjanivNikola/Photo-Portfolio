<template>
    <div :class="[$store.state.darkMode ? 'dark' : 'light', 'bg-mode d-flex position-relative' ]">
        <!-- Navigation component -->
        <div class="col-2 d-inline row" style="min-width: 323px;">
            <AdminSideNavigation></AdminSideNavigation>
        </div>
        <!-- Content -->
        <div class="col-10 d-inline" style="flex: 0 0 82%; max-width: 82%;">
            <div style="height: 120px;"></div>
            <div class="container-fluid" style="">
                <!-- Ako nema fotografija -->
                <!--
                <div v-if="stash.length <= 0" class="d-flex flex-row w-100 h-100 justify-content-center align-items-center">
                    <h3 class="a-h3">Trenutno nema fotografija u galeriji. Pokušaj dodatki neke. Samo ih ubaci ovdje ili stisni gumb dolje.</h3>
                </div>
                -->
                <!-- Prikaz fotografija -->
                <!-- dodati v-else -->
                <div >
                    <!-- Tool bar -->
                    <ul :class="[$store.state.darkMode ? 'dark' : 'light', 'toolbar']">
                        <li>
                            <input type="text" v-model="searchText" name="searchText" placeholder="Pretraži" class="a-input">
                            <select :options="typeOptions" v-model="selectedFilterActivity" class="a-select">
                                <option v-for="opt in typeOptions" v-bind:value="opt.value">
                                    {{ opt.text }}
                                </option>
                            </select>
                            <button @click="searchGallery" class="toolbar-search">
                                <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </li>
						<li class="divider-vertical"></li>
						<li class="ml-3">
							<button v-if="!allPhotosSelected" @click="selectAllPhotos" class="toolbar-btn w-155">
								<span class="d-inline-block" style="width: 20%;">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi" viewBox="0 0 16 16">
										<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
										<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
									</svg>
								</span>
								<span class="w-75 d-inline-block">Odaberi sve</span>
							</button>
							<button v-else @click="selectAllPhotos" class="toolbar-btn w-155">
								<span class="d-inline-block" style="width: 20%;">
									<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi" viewBox="0 0 16 16" style="width: 80%; margin-bottom: 2px;">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
										<path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>
									</svg>
								</span>
								<span class="w-75 d-inline-block">Odznači sve</span>
							</button>
						</li>
						<li class="divider-vertical"></li>
                        <li @click="deletePhoto('store')" class="toolbar-btn w-85 ml-3">Izbriši</li>
                        <li @click="$refs['new-photos'].show()" class="toolbar-btn w-85">Dodaj</li>
                    </ul>
                    <!-- Image grid :style="{backgroundImage: i.src}" -->
                    <div class="d-flex flex-row flex-wrap w-100">
                        <div v-for="(img, index) in stash" :key="img.id" class="position-relative image-badge-wrapper">
                            <div class="badge-background" :style="{backgroundImage: `url(${img.url}`}" @click="showModal(img, index)"></div>
                            <div class="input-checkbox position-absolute">
                                <!-- custom checkbox -->
                                <checkbox :image-i-d="img.id" :status="img.status" @setItemStatus="setStatus"></checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Image info modal -->
        <b-modal id="modal-xl" title="Detalji" size="xl" ref="image-modal" hide-footer @hidden="resetModal">
            <div class="d-flex flex-row main-modal-wrapper">
                <div class="col-8 img-display" :style="{backgroundImage: `url(${modalPhotoInfo.src}`}"></div>
                <div class="col-4 info-display">
                    <ul>
						<li>
							<label for="img-title" class="d-block"><input id="img-title" type="text" v-model="modalPhotoInfo.title" class="desc" placeholder="Image title"></label>
							<label for="img-alt" class="d-block"><input id="img-alt" type="text" v-model="modalPhotoInfo.alt" class="desc" placeholder="Image alt description"></label>
						</li>
						<li>
							<span id="s-type" class="d-block"><span class="desc">{{modalPhotoInfo.type}}</span></span>
							<span id="s-c-size" class="d-block"><span class="desc">{{modalPhotoInfo.cSize}}</span></span>
							<span id="s-o-size" class="d-block"><span class="desc">{{modalPhotoInfo.oSize}}</span></span>
							<span id="s-compression" class="d-block"><span class="desc">{{modalPhotoInfo.compression}}</span></span>
						</li>
						<li>
							<span id="s-activity" class="d-block"><span class="desc">{{modalPhotoInfo.activity}}</span></span>
						</li>
                    </ul>
                    <hr>
                    <div class="w-100 text-center pl-3">
						<button @click="savePhotoInfoChanges" class="toolbar-btn w-155">Spremi promjene</button>
						<button @click="deletePhotoFromModal" class="toolbar-btn w-155">Izbriši</button>
					</div>
                </div>
            </div>
        </b-modal>
		<b-modal id="new-photos" size="xl" ref="new-photos" hide-header hide-footer centered>
			<div v-if="tempStash.length < 1">
				<label for="b-photos">Odaberi fotografije: </label>
				<input id="b-photos" type="file" name="b-photos" multiple @change="previewFiles">
			</div>
			<div v-else class="d-flex flex-row flex-wrap w-100">
				<div v-for="(img, index) in tempStash" :key="img.id" class="position-relative image-badge-wrapper">
					<div class="badge-background" :style="{backgroundImage: `url(${img.url}`}" @click="showModal(img, index)"></div>
					<div class="input-checkbox position-absolute">
						<!-- custom checkbox -->
						<checkbox :image-i-d="img.id" :status="img.status" @setItemStatus="setStatusTemp"></checkbox>
					</div>
				</div>
				<div class="w-100 text-center pl-3">
					<button @click="confirmNewPhotos" class="toolbar-btn w-155">Spremi</button>
					<button @click="deletePhoto(tempStash)" class="toolbar-btn w-155">Izbriši</button>
					<button @click="discard" class="toolbar-btn w-155">Odustani</button>
				</div>
			</div>
		</b-modal>
		<b-modal id="modal-sm" size="sm" ref="success-modal" hide-footer hide-header centered>
			All good!
			<button @click="$refs['success-modal'].hide()" class="toolbar-btn">OK</button>
		</b-modal>
    </div>
</template>

<script>
	import AdminSideNavigation from "../../components/AdminSideNavigation";
	import Checkbox from "../../components/Checkbox";

	export default {
		name: "gallery",
		components: {Checkbox, AdminSideNavigation},
		data () {
			return {
				// Images //
				stash: [],
				selectedImages: [],
				modalPhotoInfo: {},
				tempStash: [],		// New photos before saving in stash
				// Search //
				searchText: '',
				selectedFilterActivity: 0,
				typeOptions: [
					{text: 'Sve', value: 0},
					{text: 'Slide show', value: 1},
					{text: 'Nije u upotrebi', value: 2},
					{text: 'Album 1', value: 3}
				],
				allPhotosSelected: false
			}
		},
		watch: {
			selectedFilterActivity(state) {
				this.$store.commit('setGalleryFilter', state);
			}
		},
		mounted() {
			//this.$refs['image-modal'].show();
		},
		methods: {
			// AXIOS //
			handleGalleryRequest() {
				if(this.$store.getters.getMiniGallery.length <= 0) {
					this.$axios.$get('')
						.then(data => {
							console.log('Data: ', data);
						})
						.catch(error => {
							console.log('Request canceled. ', error);
						})
				}
			},
			handleGalleryPost() {
				this.$axios.$post('/gallery', this.tempStash[0])
					.then((r) => {
						console.log('R: ', r);
					})
					.catch((error) => {
						console.log('Error: ', error);
					})
			},
			// STORE //
			handleDelete() {

			},
			// GENERAL //
			confirmNewPhotos() {
				//this.handleGalleryPost();
				console.log('stash: ', this.tempStash);
				this.stash = this.tempStash;	//Maknuti liniju kasnije
				this.tempStash = [];
				this.$refs['new-photos'].hide();
			},
			discard() {
				this.$refs['new-photos'].hide();
				this.tempStash = [];
			},
			savePhotoInfoChanges() {
				this.$store.commit('savePhotoInfoChanges', {index: this.modalPhotoInfo.index, title: this.modalPhotoInfo.title, alt: this.modalPhotoInfo.alt});
				this.$refs['success-modal'].show();
			},
			deletePhotoFromModal() {
				this.hideModal();
				this.$store.commit('deletePhotos', this.modalPhotoInfo.index);
				this.resetModal();
			},
			deletePhoto(list) {
				let delCounter = 0;
				if (list === "store") {
					list = this.$store.getters.getMiniGallery;
					let keys = Object.keys(list).filter(function(key) {
						return list[key].status === true;
					}, this);
					keys.forEach((value) => {
						let n = Number(value);
						n = n - delCounter;
						this.$store.commit('deletePhotos', n);
						delCounter++;
					});
				}
				let keys = Object.keys(list).filter(function(key) {
					return list[key].status === true;
				}, this);
				keys.forEach((value) => {
					let n = Number(value);
					n = n - delCounter;
					this.$delete(list, n);
					delCounter++;
				});
			},
			selectAllPhotos() {
				this.allPhotosSelected = !this.allPhotosSelected;
				this.$store.commit('toggleAllPhotoStatus', this.allPhotosSelected);
			},
			setStatus(s, id) {
				this.$store.commit('setStatus', {id: id, status: s});
			},
			setStatusTemp(s, id) {
				console.log('tp #1: ', this.tempStash);
				console.log('id: ', id);
				let k = Object.keys(this.tempStash).filter(function(key) {
					return this.tempStash[key].id === id;
				}, this);
				console.log('key: ', k);
				this.tempStash[k[0]].status = s;
				console.log('tp: ', this.tempStash);
			},
			previewFiles() {
				let name = null;
				let type = null;
				let files = event.target.files;
				files.forEach((value, index) => {
					console.log('size: ', value);
					name = value.name.split('.');
					type = value.type.split('/');
					this.tempStash.push({id: index, title: name[0], size: value.size, type: type[1], src: '', url: '', status: false});
					this.readImages(value, index);
				}, this);
			},
            readImages(value, index) {
				const self = this;
				let url = null;
			    let reader = new FileReader();
			    let file = new Blob([value]);
				reader.readAsDataURL(file);
			    reader.onload = function() {
			    	file = reader.result;
			    	url = URL.createObjectURL(value);
			    	let b64 = file.split(',');
					self.tempStash[index].src = b64[1];
					self.tempStash[index].url = url;
                };
            },
			readImage() {
				console.log('h1');
				let img = `data:application/octet-stream;base64,${img}`;
				return img;
			},
			searchGallery() {

			},
			showModal(item, index) {
				this.$store.commit('setPhotoViewIndex', index);
				this.modalPhotoInfo = Object.assign({}, this.$store.getters.getPhotoView);
				this.modalPhotoInfo.index = index;
				this.$refs['image-modal'].show();
			},
			hideModal() {
				this.$refs['image-modal'].hide();
			},
			resetModal() {
				this.modalPhotoInfo = {};
			}
		},
		computed: {
			stashPhotos() {
				return this.$store.getters.getMiniGallery;
			},
			getImage() {
				return;
			}
		}
	}
</script>

<style scoped>
    /******* TOOLBAR ******/
    .toolbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 14px 0;
        text-align: left;
        list-style-type: none;
    }
	.toolbar li {
		margin-right: 1rem;
	}
	.toolbar.light {
		border-bottom: 1px solid var(--dark-secondary);
	}
	.toolbar li .a-input, .toolbar li .a-select {
		height: 100%;
		outline: 0;
		padding-left: 8px;
		background-color: var(--light-v1);
		border-top: none;
		border-bottom: none;
		border-right: none;
		border-left: 2px solid var(--dark-secondary);
		border-radius: 2px;
		color: var(--dark-secondary);
	}
	.toolbar li .a-input {
		width: 255px;
		margin-right: 1rem;
	}
	.toolbar li .a-input:focus-visible {
		border-left-width: 3px;
	}
	.toolbar-search {
		width: 28px;
		height: 28px;
		border: 1px solid var(--dark-secondary);
		outline: 0;
		border-radius: 50%;
		background-color: var(--light-v1);
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	}
	.toolbar-search .bi {
		width: 100%;
		line-height: 25px;
		fill: var(--dark-secondary);
	}
	.toolbar-search:hover {
		background-color: var(--dark-secondary);
		border-color: var(--light-v1);
	}
	.toolbar-search:hover .bi {
		fill: var(--light-v1);
	}
	.toolbar .divider-vertical {
		width: 1px;
		margin: 0 1rem;
		background-color: var(--dark-secondary);
	}
	.toolbar-btn {
		text-align: center;
		border: 1px solid var(--dark-secondary);
		outline: 0;
		border-radius: 2px;
		text-transform: uppercase;
		font-size: 11px;
		letter-spacing: 1px;
		line-height: 25px;
		background-color: var(--light-v1);
		color: var(--dark-secondary);
		cursor: pointer;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	}
	.toolbar-btn.w-85 {
		width: 85px;
	}
	.toolbar-btn.w-155 {
		width: 155px;
	}
	.toolbar-btn:hover {
		background-color: var(--dark-secondary);
		color: var(--light-v1);
	}
    /******* IMAGE DISPLAY ******/
    .image-badge-wrapper {
        width: 160px;
        height: 160px;
        margin-right: 8px;
        margin-bottom: 8px;
        border-radius: 3px;
        overflow: hidden;
		cursor: pointer;
    }
    .badge-background {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .input-checkbox {
        top: 0;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        z-index: 10;
        background-color: #f7f7f7;
        border-bottom-left-radius: 3px;
        -moz-border-radius-bottomleft: 3px;
    }
    .main-modal-wrapper {
        height: 75vh;
    }
    .img-display, .info-display {
        height: 100%;
    }
    .img-display {
        background-color: #3b8070;
    }
    .info-display ul {
		list-style-type: none;
		margin: 0;
		padding-left: 1rem;
    }
	.info-display ul li {
		background-color: var(--light-v1);
		color: rgb(116, 110, 124);
		width: 100%;
		border-radius: 6px;
		box-shadow: 0 3px 7px 1px rgba(116, 110, 124, .482);
		padding: 12px;
		margin-bottom: 15px;
	}
	.info-display ul li span.desc {
		color: var(--dark-secondary);
	}
	.info-display ul li span.d-block {
		position: relative;
		text-align: left;
		padding-left: 130px;
	}
	#s-type:before {
		content: 'Tip: ';
	}
	#s-c-size:before {
		content: 'Trenutna veličina: ';
	}
	#s-o-size:before {
		content: 'Originalna veličina: ';
	}
	#s-compression:before {
		content: 'Kompresija: ';
	}
	#s-activity:before {
		content: 'Aktivnost: ';
	}
	.info-display ul li label {
		position: relative;
		text-align: right;
		padding-inline-start: 50px;
	}
	.info-display ul li label[for="img-alt"] {
		padding-block-start: 25px;
	}
	.info-display ul li label[for="img-alt"] input {
		width: 100%;
	}
	.info-display ul li label:before, .info-display ul li span.d-block:before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: left;
		font-size: 14px;
		font-family: inherit;
		z-index: 0;
	}
	.info-display ul li label[for="img-title"]:before {
		content: 'Naziv: ';
		width: 15%!important;
	}
	.info-display ul li label[for="img-alt"]:before {
		content: 'Opis: ';
		height: 50%!important;
	}
	label[for="img-title"] input {
		width: 80%;
	}
	.info-display ul li input.desc {
		border: none;
		border-bottom: 1px solid var(--dark-secondary);
		background: transparent;
		outline: 0;
		color: var(--dark-secondary);
	}
</style>
