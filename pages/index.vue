<template>
  <div class="bg-wrapper w-100 vh-100 pb-4 pl-4 pr-4">
	  <navigation />
	<div class="position-relative w-100 h-100">
		<!-- MULTI SLIDESHOW -->
		<div class="m-slideshow d-flex flex-row flex-nowrap h-100">
			<div class="col-7 p-0 overflow-hidden">
				<div id="main-slider" class="d-flex flex-row flex-nowrap w-100 h-100">
					<div v-for="item in mainSlider" :key="item.id" :data-index="item.id" class="overflow-hidden w-100 h-100 flex-shrink-0">
						<div class="slider-display" :style="{backgroundImage: `url(${item.src})`}"></div>
					</div>
				</div>
			</div>
			<div class="col-5 p-0">
				<div class="d-flex flex-column flex-nowrap h-100 w-100">
					<!-- Top side slider -->
					<div class="top-slide-wrapper overflow-hidden">
						<div id="top-slider" class="d-flex flex-row-reverse h-100 w-100 flex-nowrap">
							<div v-for="item in sideTopSlider" :key="item.id" :data-index="item.id" class="overflow-hidden w-100 h-100 flex-shrink-0">
								<div class="slider-display" :style="{backgroundImage: `url(${item.src})`}"></div>
							</div>
						</div>
					</div>
					<!-- Bottom side slider -->
					<div class="bottom-slide-wrapper overflow-hidden w-100">
						<div id="bot-slider" class="d-flex flex-column flex-nowrap h-100 w-100">
							<div v-for="item in sideBotSlider" :key="item.id" :data-index="item.id" class="overflow-hidden w-100 h-100 flex-shrink-0">
								<div class="slider-display" :style="{backgroundImage: `url(${item.src})`}"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- INFO OVERLAY -->
		<div class="position-absolute info-overlay pl-5">
			<div class="d-flex flex-column flex-nowrap w-100 h-100 pl-5">
				<div class="d-flex flex-row w-100 h-50">
					<div class="h-50 w-50 pt-5">
						<div class="follow-btn position-relative d-flex flex-row flex-nowrap align-items-center">
							<h4 class="m-0 sub-text">Follow</h4>
							<div class="follow-icon ml-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255,255,255)" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
								</svg>
							</div>
							<div class="follow-hidden-wrapper">
								<div class="mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
									</svg>
								</div>
								<div class="mr-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
										<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
									</svg>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
										<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 pt-5 pr-5">
						<div id="slide-progress-wrapper" class="float-right position-relative">
							<div id="slide-progress-indicator" class="position-absolute"></div>
						</div>
					</div>
				</div>
				<div class="h-50 pt-5 w-50">
					<div class="mb-5" style="background-color: white; height: 1px; width: 75px;"></div>
					<h4 class="sub-text">Photographer in Pula</h4>
					<h2>Name Surname</h2>
					<p class="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget lorem varius odio finibus volutpat non a lectus. Quisque sed magna rutrum, varius tortor at, volutpat magna. Sed scelerisque a ipsum vel finibus. </p>
					<div class="block-btn-holder">
						<button class="position-relative primary-color" @click="$router.push(`/portfolio`)">My portfolio<span></span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	import Navigation from '../components/MainNavigationBar'

	import img1 from '../static/temp/p1.jpg'
	import img2 from '../static/temp/p2.jpg'
	import img3 from '../static/temp/p3.jpg'

	export default {
		data() {
		return {
			mainSlider: [
				{id: 0, src: img1},
				{id: 1, src: img2},
				{id: 2, src: img3}
			],
			sideTopSlider: [
				{id: 0, src: img2},
				{id: 1, src: img3},
				{id: 2, src: img1}
			],
			sideBotSlider: [
				{id: 0, src: img3},
				{id: 1, src: img1},
				{id: 2, src: img2}
			],

			mainSliderEl: '',
			topSliderEl: '',
			botSliderEl: '',

			slidesTransition: {
				mainSlide: {
					inComing: '',
					outGoing: '',
					transition: {
						transform: ''
					}
				},
				sideTopSlide: {
					inComing: '',
					outGoing: '',
					transition: {
						transform: ''
					}
				},
				sideBotSlide: {
					inComing: '',
					outGoing: '',
					transition: {
						transform: ''
					}
				}
			}
		}
	},
		components: {
			Navigation
		},
		mounted() {
		this.mainSliderEl = document.querySelector('#main-slider');
		this.topSliderEl = document.querySelector('#top-slider');
		this.botSliderEl = document.querySelector('#bot-slider');
		this.setSlideTransform();
		this.slidesTransition.mainSlide.inComing = this.mainSliderEl.children[0].children[0];
		this.slidesTransition.sideTopSlide.inComing = this.topSliderEl.children[0].children[0];
		this.slidesTransition.sideBotSlide.inComing = this.botSliderEl.children[0].children[0];
		this.slidesTransition.mainSlide.outGoing = this.mainSliderEl.children[0].children[0];
		this.slidesTransition.sideTopSlide.outGoing = this.topSliderEl.children[0].children[0];
		this.slidesTransition.sideBotSlide.outGoing = this.botSliderEl.children[0].children[0];
		this.sliderController();
	},
		methods: {
		/**
		 * 	Novi dio - transition hooks
		 */
		setSlideTransform() {
			this.slidesTransition.mainSlide.transition.transform = 'translateX(-' + parseInt(this.mainSliderEl.clientWidth) + 'px)';
			this.slidesTransition.sideTopSlide.transition.transform = 'translateX(' + parseInt(this.topSliderEl.clientWidth) + 'px)';
			this.slidesTransition.sideBotSlide.transition.transform = 'translateY(-' + parseInt(this.botSliderEl.clientHeight) + 'px)';
		},
		sliderController() {
			// 1. dio - before-enter transition
			let progressBar = document.querySelector('#slide-progress-indicator');
			progressBar.style.animationName = 'none';
			setTimeout(() => {
				progressBar.style.animationName = 'progress-indicator'
			}, 10);

			this.mainSlideBeforeEnter(this.slidesTransition.mainSlide);
			this.mainSlideBeforeEnter(this.slidesTransition.sideTopSlide);
			this.mainSlideBeforeEnter(this.slidesTransition.sideBotSlide);

			// 2. dio - enter transition
			setTimeout(() => {
				this.mainSliderEnter(this.mainSliderEl, this.slidesTransition.mainSlide);
				this.mainSliderEnter(this.topSliderEl, this.slidesTransition.sideTopSlide);
				this.mainSliderEnter(this.botSliderEl, this.slidesTransition.sideBotSlide);

				// 3. dio - leave transition
				Promise.all(
					this.mainSliderEl.getAnimations().map(
						function(animation) {
							return animation.finished
						}
					)
				).then(() => {
					this.mainSlideLeave(this.mainSliderEl, 'main', this.mainSlider, this.slidesTransition.mainSlide);
					this.mainSlideLeave(this.topSliderEl, 'top', this.sideTopSlider, this.slidesTransition.sideTopSlide);
					this.mainSlideLeave(this.botSliderEl, 'bot', this.sideBotSlider, this.slidesTransition.sideBotSlide);
					// Rekurzivan poziv
					this.sliderController();
				});
			},7600);
		},
		updateSlidesTransition(el, slider) {
			switch (slider) {
				case 'main':
					this.slidesTransition.mainSlide.inComing = el.children[1].children[0];
					this.slidesTransition.mainSlide.outGoing = el.children[0].children[0];
					break;
				case 'top':
					this.slidesTransition.sideTopSlide.inComing = el.children[1].children[0];
					this.slidesTransition.sideTopSlide.outGoing = el.children[0].children[0];
					break;
				case 'bot':
					this.slidesTransition.sideBotSlide.inComing = el.children[1].children[0];
					this.slidesTransition.sideBotSlide.outGoing = el.children[0].children[0];
					break;
				default:
					break;
			}
		},
		updatePhotoArray(slider) {
			let c = Object.assign({}, slider[0]);
			this.$delete(slider, 0);
			setTimeout(() => {
				slider.push(c);
			}, 10);
		},
		sliderTransitionController(el, transition) {
			let keyFrames = new KeyframeEffect(el, transition, {
				duration: 1400
			});
			new Animation(keyFrames, document.timeline).play();
		},
		mainSlideBeforeEnter(slideTransition) {
			this.scaleAnimation(slideTransition.inComing);
		},
		mainSliderEnter(el, slideTransition) {
			slideTransition.inComing.animate([
				{transform: 'scale(1.8)'},
				{transform: 'scale(1)'}
			], {
				duration: 1800,
				fill: "forwards"
			});
			// Transition controller
			this.sliderTransitionController(el, slideTransition.transition);
		},
		mainSlideLeave(el, sliderIndication, slide, slideTransition) {
			this.updatePhotoArray(slide);
			this.updateSlidesTransition(el, sliderIndication);
			this.scaleAnimation(slideTransition.outGoing);
		},
		scaleAnimation(child) {
			child.animate({
				transform: 'scale(1.8)'
			}, {
				duration: 3800,
				fill: "forwards"
			});
		}
	}
}
</script>

<style>
	.bg-wrapper {
		background-color: rgb(22, 22, 22);
		padding-top: 80px;
	}
	.top-slide-wrapper {
		height: 50%;
		border-left-width: 5px;
		background-color: rgb(22, 22, 22);
		border-left-style: solid;
		border-bottom-width: 5px;
		background-color: rgb(22, 22, 22);
		border-bottom-style: solid;
		margin-left: -20%;
		width: 120%;
	}
	.bottom-slide-wrapper {
		height: 50%;
		border-left-width: 5px;
		background-color: rgb(22, 22, 22);
		border-left-style: solid;
	}
	.slider-display {
		width: inherit;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.info-overlay {
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0 , 0, 0, .32);
		color: #ffffff;
	}
	h4.sub-text {
		text-transform: uppercase;
		font-size: 10px;
		letter-spacing: 2px;
		text-align: left;
		font-weight: 500;
	}
	p.sub-text {
		font-size: 12px;
		line-height: 24px;
		padding-bottom: 10px;
		font-weight: 500;
		text-align: left;
	}
	/************************************************/
	/*			Slide progress indicator		   */
	#slide-progress-wrapper {
		height: 1px;
		width: 125px;
		right: 0;
		background-color: #cecece;
	}
	#slide-progress-indicator {
		width: 0;
		height: 1px;
		background-color: #ffffff;
		animation-direction: normal;
		animation-iteration-count: 1;
		animation-duration: 8400ms;
	}
	@keyframes progress-indicator {
		0% {width: 0;}
		100% {width: 100%;}
	}
	/************************************************/
	/*					Button					   */
	.block-btn-holder, .back-to-top-btn {
		padding: 15px 10px;
		margin-bottom: 100px;
		text-align: left;
	}
	div.block-btn-holder .col-sm-6 {
		width: 50%;
		max-width: 50%;
		display: inline-block;
	}
	.block-btn-holder a, .block-btn-holder button, .back-to-top-btn button, .block-btn-holder .col-sm-6 a {
		padding: 12px 40px;
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		background-color: #0E0E0E;
		text-decoration: none;
		border: none;
		overflow: hidden;
		transition: 100ms ease-out;
		transition-delay: 250ms;
		cursor: pointer;
	}
	.block-btn-holder a span, .block-btn-holder button span, .back-to-top-btn button span, .block-btn-holder .col-sm-6 a span {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: #0E0E0E;
		animation-direction: normal;
		animation-duration: 1800ms;
		z-index: 1;
	}
	.block-btn-holder a:before, .block-btn-holder button:before, .back-to-top-btn button:before, .block-btn-holder .col-sm-6 a:before {
		content: "\2192";
		position: absolute;
		top: 7px;
		right: 10px;
		font-size: 13px;
		color: inherit;
		transition: 300ms ease-out;
	}
	.back-to-top-btn button:before {
		content: "\2191" !important;
	}
	.block-btn-holder.p-form-btn button:before {
		content: ''!important;
	}
	.block-btn-holder a:hover, .block-btn-holder button:hover, .back-to-top-btn button:hover, .block-btn-holder .col-sm-6 a:hover {
		color: #999999;
	}
	.block-btn-holder a:hover span, .block-btn-holder button:hover span, .back-to-top-btn button:hover span, .block-btn-holder .col-sm-6 a:hover span {
		animation-name: wide-cut;
	}
	@keyframes wide-cut {
		0% {width: 1%}
		50% {width: 100%}
		100% {transform: translateX(120%)}
	}
	.follow-btn {
		width: 18%;
		cursor: pointer;
	}
	.follow-btn .follow-icon, .follow-btn .follow-hidden-wrapper {
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	}
	.follow-hidden-wrapper {
		position: absolute;
		opacity: 0;
		left: 2px;
		bottom: 0;
		margin-bottom: -30px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.follow-btn:hover .follow-icon {
		-webkit-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		transform: translateX(100%);
	}
	.follow-btn:hover .follow-hidden-wrapper {
		opacity: 1;
	}
</style>
