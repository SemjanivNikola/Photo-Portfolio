<template>
	<div class="wrapper">
		<!-- Navigation bar -->
		<navigation />
		<div class="content-full-height secondary-background">
			<div v-if="album.length !== 0" class="carousel-wrapper position-relative" style="padding-right: 80px;">
				<div id="slider">
					<div class="horizontal-slider-container position-relative" @scroll="test">
						<div class="slider-inner-wa position-absolute">
							<div class="slider-wrapper portfolio-item">
								<div v-for="image in album" :key="image.id" class="slider-item" @click="openAlbum">
									<div class="item-cover" :style="{backgroundImage: `url(${image.src})`}"></div>
									<div class="slider-text-box position-absolute">
										<h4 class="primary-color">Item title</h4>
										<h5 class="primary-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere quam eu est maximus mattis. Quisque sit amet lacinia lectus, et gravida velit.</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-else style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
				<div style="width: 350px; height: 350px; margin-bottom: 50px;">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 255, 255)" viewBox="0 0 16 16" style="width: 100%; height: 100%;">
						<path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						<path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
					</svg>
				</div>
				<h1 class="primary-color">No album found.</h1>
			</div>
		</div>
	</div>
</template>

<script>
	import Navigation from "../../components/MainNavigationBar";
	import img1 from '../../static/temp/p10.jpg'
	import img2 from '../../static/temp/p9.jpg'
	import img3 from '../../static/temp/p8.jpg'
	import img4 from '../../static/temp/p7.jpg'

export default {
  name: "portfolioOverview",
  data () {
    return {
    	album: [
			{id: 1, src: img1},
			{id: 2, src: img2},
			{id: 3, src: img3},
			{id: 4, src: img4},
			{id: 5, src: img1},
			{id: 6, src: img2},
			{id: 7, src: img3},
			{id: 8, src: img4},
		]
    }
  },
	components: {
  		Navigation
	},
  mounted () {
	  let slider = document.querySelector('#slider');
	  let h = slider.clientHeight;
	  let w = slider.clientWidth;
	  let child = slider.childNodes[0];
	  let childInner = child.childNodes[0];
	  child.style.width = childInner.style.height =  h + 'px';
	  child.style.height = childInner.style.width = w + 'px';
	  child.style.transform = 'rotateZ(-90deg) translateY(-' + h + 'px)';
	  childInner.style.transform = 'rotateZ(90deg) translateX(' + h + 'px)';
  },
	methods: {
		test (e) {
			//console.log('Event: ', e);
		},
		openAlbum () {
			this.$router.push('/portfolio/detailed');
		}
	}
}
</script>

<style scoped>
/*****************  FULL HEIGHT SIDE BUTTON  **************************/
.fh-side-btn {
  position: absolute;
  top: 0;
  right: 15px;
  padding: 0 15px;
  width: 80px;
  height: 100%;
  background-color: rgb(38, 38, 38);
}
.fh-side-btn:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  background-color: rgba(27, 27, 27, .332);
  transform-origin: right;
  transition: width 300ms ease-out;
  pointer-events: none;
}
.fh-side-btn a {
  display: block;
  height: 100%;
}
.fh-side-btn a h6 {
  text-align: center;
  writing-mode: sideways-lr;
  height: 100%;
  padding: 0 15px;
}
.fh-side-btn:hover:before {
  width: 100%;
}
/******************************************************/
/*						General						 */
.item-cover {
	width: 100%;
	height: 100%;
	background-image: url("../../static/temp/tmp_01.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 8500ms ease-out;
}
.slider-item {
	overflow: hidden;
}
.slider-item:hover .item-cover{
	transform: scale(1.4);
}
.slider-item:hover .slider-text-box h5 {
	opacity: 1;
	-webkit-transform: translateY(0);
	-moz-transform: translateY(0);
	-ms-transform: translateY(0);
	-o-transform: translateY(0);
	transform: translateY(0);
}
.ov-hidden{
	overflow: hidden;
}
.slider-container{
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	list-style-type: none;
	padding: 0;
	z-index: 1;
}
.slider-wrapper{
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	transition-property: transform, -webkit-transform;
	box-sizing: content-box;
	-webkit-box-sizing: content-box;
}
.icon-box{
	position: absolute;
	width: 40px;
	height: 40px;
	font-size: 11px;
	border-radius: 100%;
	line-height: 40px;
}
.box-bg-cur{
	color: #fff;
	background: rgba(0, 0, 0, .7);
	cursor: pointer;
}
.icon-ms{
	margin-top: 8px;
}
.slider-arrow{
	top: 50%;
	margin-top: -18px;
	z-index: 20;
}
.slider-arrow-prev{
	left: 40px;
}
.slider-arrow-next{
	right: 40px;
}
.close-fs{
	position: absolute;
	width: 170px;
	height: 50px;
	right: 50px;
	line-height: 50px;
	z-index: 100;
}
.bottom-panel{
	position: absolute;
	height: 90px;
	width: 100%;
	left: 0;
	bottom: 0;
	padding-left: 30px;
	z-index: 11;transform: translate3d(0px, 0px, 0px);
	background-color: #161616;
}
.bottom-panel-col{
	float: left;
	position: relative;
}
.col-left{
	width: 500px;
}
.col-right{
	width: calc(100% - 500px);
}
.details-list{
	float: left;
	position: relative;
	padding-right: 60px;
	top: 24px;
}
.details-list ul li{
	float: left;
	position: relative;
	width: 140px;
	padding: 15px 0;
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	background-color: #292929;
	cursor: pointer;
}
.decor-b:before{
	content: '';
	position: absolute;
	top: 16px;
	width: 1px;
	height: 16px;
	left: 0;
	background: #999;
}
.slider-counter{
	float: right;
	position: relative;
	width: auto;
	left: 0;
	top: 30px;
	bottom: inherit;
	padding: 10px 15px;
	background-color: #000000;
}
.slider-counter:before{
	content: '';
	position: absolute;
	top: 20px;
	left: 50%;
	width: 8px;
	height: 1px;
	margin-left: -4px;
	background: #999;
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.slider-counter:after{
	content: '';
	position: absolute;
	left: -60px;
	top: 50%;
	height: 30px;
	width: 1px;
	margin-top: -15px;
}
.slider-counter:before, .slider-counter:after{
	background: rgba(255, 255, 255, .3);
}
.slider-counter span{
	float: left;
	position: relative;
	width: 30px;
	font-size: 12px;
	font-weight: 700;
	color: #fff;
}
.fs-mode-title{
	float: right;
	position: relative;
	top: 40px;
	margin-right: 20px;
	font-size: 10px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: rgba(255, 255, 255, .8);
}
.fs-mode-icon{
	float: right;
	position: relative;
	width: 40px;
	height: 30px;
	top: 36px;
	margin-right: 50px;
	cursor: pointer;
	z-index: 6;
}
</style>
