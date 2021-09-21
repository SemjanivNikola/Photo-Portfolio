<template>
    <div class="d-flex position-relative overflow-hidden">
        <!-- Navigation component -->
        <div class="col-2 d-inline p-0">
            <AdminSideNavigation></AdminSideNavigation>
        </div>
        <!-- Content -->
        <div id="main-content-wrapper" class="d-inline">
            <div class="container-fluid">

                <!-- Module 1 -->
                <div class="module-wrapper">
                    <div class="w-100" @click="toggleModules(1)" style="cursor: pointer;">
                        <h5>Slide Show</h5>
                        <p>Postavite fotografije za brzi i zanimljivi prikaz na početnoj stranici</p>
                    </div>
                    <div :class="[m1Show ? 'module-wrapper-open' : 'module-wrapper-close', 'flex-row w-100']">
                        <ul style="width: inherit;">
                            <li class="module-item-f">
                                <div class="d-inline-block">
                                    <h5 class="d-inline-block" >Prikaz 1</h5>
                                    <p style="margin: 0;">Glavni prikaz</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-end w-50">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="photo-selection-wrapper">
                                            <!--
                                            <span class="selected-photo"></span>
                                            -->
                                            <span v-if="slideShowGroup[0].length < 6" class="add-new-photo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                      </span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                        </div>
                                        <div class="b-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-collection" viewBox="0 0 16 16">
                                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                                            </svg>
                                        </div>
                                        <p style="margin: 0 20px 0 0;">5/6</p>
                                        <div class="b-icon" style="margin-right: 10px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="module-item-f">
                                <div class="d-inline-block">
                                    <h5 class="d-inline-block" >Prikaz 2</h5>
                                    <p style="margin: 0;">Sporedni sadržaj - desno gore</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-end w-50">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="photo-selection-wrapper">
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                        </div>
                                        <div class="b-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-collection" viewBox="0 0 16 16">
                                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                                            </svg>
                                        </div>
                                        <p style="margin: 0 20px 0 0;">6/6</p>
                                        <div class="b-icon" style="margin-right: 10px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="module-item-f">
                                <div class="d-inline-block">
                                    <h5 class="d-inline-block" >Prikaz 3</h5>
                                    <p style="margin: 0;">Sporedni sadržaj - desno dolje</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-end w-50">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="photo-selection-wrapper">
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                            <span class="selected-photo"></span>
                                        </div>
                                        <div class="b-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-collection" viewBox="0 0 16 16">
                                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                                            </svg>
                                        </div>
                                        <p style="margin: 0 20px 0 0;">6/6</p>
                                        <div  class="b-icon" style="margin-right: 10px;">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Module 2 -->
                <div class="module-wrapper">
                    <div class="w-100" @click="toggleModules(2)" style="cursor: pointer;">
                        <h5>Portfolio</h5>
                        <p>Upravljanje portfoliom kroz nekoliko mogucnosti:</p>
                        <ul class="classic-list">
                            <li>Dodavanje novog albuma sa slikama</li>
                            <li>Brisanje postojećeg albuma</li>
                            <li>Uređivanje postojećeg albuma dodavanjem, brisanjem ili zamjenom slika</li>
                        </ul>
                    </div>
                    <div :class="[m2Show ? 'module-wrapper-open' : 'module-wrapper-close', 'w-100 h-100 overflow-hidden module-item']">
                        <div class="d-flex flex-row flex-nowrap">
                            <div class="module-item-card"></div>
                            <div class="module-item-card"></div>
                            <div class="module-item-card"></div>
                            <div class="module-item-card module-item-card-new"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="side-panel-wrapper">
            <!-- Side panel overlay -->
            <div class="position-absolute side-panel-overlay"></div>
            <!-- Side panel content -->
            <div class="side-panel-inner w-100">
                <div class="d-flex flex-row justify-content-center pl-3">
                    <div class="col-5 d-inline-block p-0 mr-2">
                        <div class="module-item module-description">
                            <h4><b>Trenutno odabrano: {{selectedSpaceName}}</b></h4>
                            <h5><i>{{selectedSpace}}</i></h5>
                            <h5>{{dateOfCreation}} | {{lastModified}}</h5>
                        </div>
                    </div>
                    <div class="col-7 d-inline-block p-0">
                        <div class="module-item">
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-start justify-content-center pl-3">
                    <div class="col-5 d-inline-block p-0 mr-2">
                        <div class="d-flex flex-column">
                            <div class="module-item">
                                <div class="overview-wrapper">
                                    <div class="overview-img-wrapper"></div>
                                    <ul class="btn-group justify-content-center">
                                        <li class="ov-btn ov-btn-success">Dodaj</li>
                                        <li class="ov-btn ov-btn-danger">Ukloni</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="module-item">
                                <div class="overview-wrapper">
                                    <ul class="btn-group-vertical mb-3">
                                        <li>Aktivan pregled: {{activeView}}</li>
                                        <li>Dodano fotografija: {{imageInPreparation.length}}</li>
                                    </ul>
                                    <hr>
                                    <div class="photo-selection-wrapper">
                                        <span class="selected-photo"></span>
                                        <span class="selected-photo"></span>
                                        <span class="selected-photo"></span>
                                        <span class="selected-photo"></span>
                                        <span class="selected-photo"></span>
                                        <span class="selected-photo"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 d-inline-block p-0">
                        <div class="module-item">
                            <div class="overview-picker">
                                <ul class="btn-group-vertical mb-3">
                                    <li>
                                        <select :options="typeOptions" v-model="filterType">
                                            <option v-for="opt in typeOptions" v-bind:value="opt.value">
                                                {{ opt.text }}
                                            </option>
                                        </select>
                                    </li>
                                </ul>
                                <div class="d-flex flex-row flex-wrap w-100">
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                    <div style="width: 80px; height: 80px; border-radius: 3px; margin: 0 12px 12px 0; background-color: #4f5678;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--
                    <div class="module-item" style="width: 520px;">
                      <div class="selection-wrapper">
                        <div class="col-6 d-inline-block selection-item si1"></div>
                        <div class="col-5 d-inline-block">
                          <div class="selection-item si2"></div>
                          <div class="selection-item si3"></div>
                        </div>
                      </div>
                    </div>
                    -->
                </div>
            </div>
            <!-- Toggle button -->
            <div class="side-content-opener" @click="toggleSidePanel"></div>
        </div>
    </div>
</template>

<script>
	import AdminSideNavigation from "../../components/AdminSideNavigation";
	export default {
		name: "presentation",
		data () {
			return {
				// Side panel
				sidePanelEl: '',
				sidePanelShow: false,
				selectedSpace: 'Album',
				selectedSpaceName: 'Album test 1',
				dateOfCreation: '21/7/2021',
				lastModified: '21/7/2021',
				activeView: 'Dodavanje',
				imageInPreparation: [],
				// Filter images on side panel
				filterType: 0,
				typeOptions: [
					{text: 'Sve', value: 0},
					{text: 'Ime albuma', value: 1},
					{text: 'Slide show', value: 2},
					{text: 'Nije u upotrebi', value: 3}
				],
				// Modules
				m1Show: true,
				m2Show: false,
				// Photo Spaces
				// slideGroup[0] - 1st slide show (big one)
				// slideGroup[1] - 2st slide show (top-right one)
				// slideGroup[2] - 3st slide show (bottom-right one)
				slideShowGroup: [
					[
						// img id, img src
						{
							id: 123123,
							src: '/img/path'

						}
					], [], []]
			}
		},
		mounted() {
			this.sidePanelEl = window.document.querySelector('#side-panel-wrapper');
		},
		components: {AdminSideNavigation},
		methods: {
			toggleModules(module) {
				if (module === 1) {
					this.m1Show = !this.m1Show;
					this.m2Show = false;
				} else {
					this.m2Show = !this.m2Show;
					this.m1Show = false;
				}
			},
			toggleSidePanel() {
				console.log('main content: ', this.sidePanelEl);
				this.sidePanelShow = !this.sidePanelShow;
				if (this.sidePanelShow) {
					this.sidePanelEl.style.width = '100%';
					this.sidePanelEl.style.paddingLeft = '35rem';
				}
				else {
					this.sidePanelEl.style.width = '3%';
					this.sidePanelEl.style.paddingLeft = '0';
				}
			}
		}
	}
</script>

<style scoped>
    .module-wrapper-open-f {
        display: flex;
    }
    .module-wrapper-open {
        display: block;
    }
    .module-wrapper-close {
        display: none;
    }
    .module-item.module-description {
        padding: 8px 15px;
    }
    .module-item.module-description h4, .module-item.module-description h5 {
        color: #000;
    }
    /* SIDE PANEL PICKER */
    .overview-wrapper {
        width: 100%;
    }
    .overview-img-wrapper {
        width: inherit;
        border-radius: 5px;
        overflow: hidden;
        height: 340px;
        vertical-align: middle;
        background-color: #4f5678;
    }
    .btn-group {
        width: 100%;
        margin-top: -10px;
        padding-bottom: 15px;
    }
    #main-content-wrapper {
        flex: 0 0 80%;
        max-width: 80%;
        max-height: 100vh;
        padding: 3.5rem 2.5rem;
        transition: flex 400ms ease-out;
    }
    .ov-btn {
        position: relative;
        padding: 10px 45px;
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: capitalize;
        color: #f7f7f7;
        font-weight: bold;
        border-radius: 4px;
        box-shadow: 0 5px 10px 1px rgba(194, 194, 194, .7);
        overflow: hidden;
        cursor: pointer;
    }
    .ov-btn:first-child {
        margin-right: 2.2rem;
    }
    .ov-btn:hover:before {
        transform: translateX(100%);
    }
    .ov-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(135deg, transparent, transparent, rgba(194, 194, 194, .7), rgba(247, 247, 247, .5), rgba(194, 194, 194, .7), transparent, transparent);
        transform: translateX(-100%);
        transition: transform 360ms ease-out;
        z-index: 10;
    }
    .ov-btn-success {
        background-image: linear-gradient(to right top, #4b7203, #5e8c04, #72a603);
    }
    .ov-btn-danger {
        background-image: linear-gradient(to right top, #9e0303, #b52424, #e33434);
    }
    #side-panel-wrapper {
        top: 0;
        right: 0;
        max-width: 100%;
        width: 3%;
        height: 100vh;
        position: absolute;
        overflow: visible;
        padding-left: 0;
        box-shadow: 8px 0 25px 12px #DCDCDC;
        transition: all 450ms ease-out;
        z-index: 50;
    }
    .side-panel-inner {
        position: relative;
        height: 100%;
        min-width: 1300px;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 2rem 2.7rem 3rem;
        background-color: #BFE2F2;
        z-index: 50;
    }
    .side-panel-overlay {
        width: inherit;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8234);
        z-index: 20;
    }
    .side-content-opener {
        position: absolute;
        top: 50%;
        left: -40px;
        height: 80px;
        width: 80px;
        border: 1px solid gray;
        border-radius: 50%;
        transform: translate(0, -50%);
        background-color: #007bff;
        z-index: 100;
        cursor: pointer;
    }
    .selection-wrapper {
        display: flex;
        height: 80px;
        justify-content: center;
    }
    .selection-wrapper .col-6, .selection-wrapper .col-5 {
        height: inherit;
        padding: 0!important;
    }
    .selection-item {
        position: relative;
        border-color: #4f5678;
        border-radius: 3px;
        border-style: groove;
        cursor: pointer;
    }
    .selection-item:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #007bff;
        opacity: 0;
        z-index: 20;
        transition: all 400ms ease-out;
    }
    .selection-item:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: #f7f7f7;
        z-index: 20;
        transition: all 400ms ease-out;
    }
    .selection-item:hover:before {
        opacity: 1;
    }
    .selection-item:hover:after {
        height: 10px;
        width: 10px;
    }
    .si1 {
        border-width: 2px;
        height: inherit;
    }
    .si2 {
        width: 100%;
        height: 50%;
        border-top-width: 2px;
        border-right-width: 2px;
        border-bottom-width: 2px;
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .si3 {
        width: 100%;
        height: 50%;
        border-right-width: 2px;
        border-bottom-width: 2px;
        border-top: none;
        border-left: none;
        border-bottom-left-radius: 0;
    }
    .module-wrapper {
        padding: 15px;
        margin-bottom: 2.2rem;
        border-radius: 5px;
        background-color: #BFE2F2;
        -webkit-transition: all 300ms ease-out;
        -moz-transition: all 300ms ease-out;
        -ms-transition: all 300ms ease-out;
        -o-transition: all 300ms ease-out;
        transition: all 300ms ease-out;
    }
    .module-item, .module-item-f {
        width: 100%;
        padding: 18px 15px;
        background-color: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 8px;
    }
    .module-item-f {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .module-item-card {
        width: 270px;
        height: 320px;
        margin-right: 12px;
        border-radius: 5px;
        background-color: #cecece;
    }
    .module-item-card.module-item-card-new {
        background-color: #dee2e6;
    }
    .photo-selection-wrapper {
        margin-right: 38px;
    }
    .selected-photo {
        width: 32px;
        height: 32px;
        display: inline-block;
        position: relative;
        border: none;
        border-radius: 50%;
        margin-right: -12px;
        background-image: url("../../static/temp/test_img_1.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .selected-photo:before {
        content: 'X';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .4234);
        color: #ffffff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        opacity: 0;
        cursor: pointer;
        z-index: 10;
        -webkit-transition: opacity 350ms ease-out;
        -moz-transition: opacity 350ms ease-out;
        -ms-transition: opacity 350ms ease-out;
        -o-transition: opacity 350ms ease-out;
        transition: opacity 350ms ease-out;
    }
    .selected-photo:hover:before {
        opacity: 1;
    }
    .add-new-photo {
        width: 32px;
        height: 32px;
        display: inline-block;
        position: relative;
        border: none;
        border-radius: 50%;
        margin-right: -12px;
        color: #595959;
        text-align: center;
        background-color: #f5f5f5;
        z-index: 15;
        cursor: pointer;
        -webkit-transition: all 350ms ease-out;
        -moz-transition: all 350ms ease-out;
        -ms-transition: all 350ms ease-out;
        -o-transition: all 350ms ease-out;
        transition: all 350ms ease-out;
    }
    .add-new-photo:hover {
        background-color: #bdbdbd;
        color: #F5F5F5;
    }
    .add-new-photo svg {
        width: 70%;
        vertical-align: super;
        padding-top: 4px;
    }
    .b-icon {
        width: 32px;
    }
    .b-icon .bi-collection, .b-icon .bi-three-dots-vertical {
        width: 70%;
        height: 100%;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .classic-list {
        margin-bottom: 1rem;
        padding-left: 40px;
        list-style-type: disc;
        list-style-position: inside;
    }
</style>
