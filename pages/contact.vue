<template>
	<div id="contact" class="wrapper">
		<div class="content">
			<navigation />
			<div class="column-image fixed-column-left bg-atr">
				<div class="overlay overlay-light-dark">
					<div class="position-absolute bottom-block">
						<div class="column-title text-left">
							<h2 class="position-relative primary-color">{{ pageTitle }}</h2><!-- ima before -->
							<div class="spacer-sm"></div>
							<h5>{{ subTitle }}</h5>
						</div>
						<div class="column-notifier secondary-background">
							<div class="scroll-down-wrap">
								<div class="mouse">
									<div class="scroller"></div>
								</div>
								<span class="primary-color">Scroll down to discover</span>
							</div>
						</div>
					</div>
					<div class="fixed-column-dec position-absolute"></div>
				</div>
			</div>
			<div class="column-about primary-background">
				<div class="column-inner-padding column-inner">
					<div class="container">
						<section id="sec1">
							<div class="section-title mb-5">
								<h3>{{ contactTitle }}</h3>
								<h5>{{ subTitle }}</h5>
								<div class="section-number">01.</div><!-- ima before -->
							</div>
							<div class="column-wrapper-item">
								<div class="column-wrapper-albums">
									<div class="col-sm-12 p-0">
										<div class="column-inner">
											<div class="d-flex flex-column text-left w-100">
												<h6 class="text-capitalize">Mail:</h6>
												<p class="primary-color"><a>mail@domain.com</a></p>
												<h6 class="text-capitalize">Address:</h6>
												<p class="primary-color">Ciscuttijeva 15, Pula</p>
												<h6 class="text-capitalize">Phone:</h6>
												<p class="primary-color"><a>+1234567890</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="sec-dec"></div>
						<section id="sec2">
							<div class="section-title fl-wrap mb-5">
								<h3>{{ locationTitle }}</h3>
								<h5>{{ subTitle }}</h5>
								<div class="section-number">02.</div><!-- ima before -->
							</div>
							<div class="column-wrapper-item">
								<div class="column-wrapper-albums">
									<div class="col-sm-12 p-0 mb-3">
										<div class="column-inner">
											<div class="d-flex flex-column align-items-center justify-content-center w-100 secondary-background" style="height: 250px;">
												<h1 class="primary-color">Place for Google Maps</h1>
											</div>
										</div>
									</div>
									<div class="col-sm-12 p-0">
										<div class="column-inner">
											<p class="primary-color">{{ locationText }}</p>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="sec-dec"></div>
						<section id="sec3">
							<div class="section-title fl-wrap mb-5">
								<h3>{{ inquiryTitle }}</h3>
								<h5>{{ subTitle }}</h5>
								<div class="section-number">03.</div><!-- ima before -->
							</div>
							<div class="column-wrapper-item">
								<div class="column-wrapper-albums">
									<div class="col-sm-12 p-0">
										<div class="column-inner">
											<form class="p-form">
												<input v-model="inquiry.name" placeholder="YOUR NAME" type="text" size="40" required class="p-input">
												<input v-model="inquiry.email" placeholder="EMAIL ADDRESS" type="email" size="40" required class="p-input">
												<textarea v-model="inquiry.message" placeholder="YOUR MESSAGE" type="text" rows="6" required class="p-textarea" style="resize: none;"></textarea>
											</form>
											<div class="block-btn-holder p-form-btn">
												<button @click="handleForm" class="position-relative primary-color">Send Message<span></span></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="end-line-dec"></div>
						<div class="back-to-top-btn text-right">
							<button @click="backToTop" class="position-relative primary-color">Back to top<span></span></button>
						</div>
					</div>
				</div>
				<div class="scroll-nav-wrap">
					<nav class="scroll-nav scroll-init">
						<div class="scroll-init">
							<a href="#sec1">Info</a>
						</div>
						<div class="scroll-init">
							<a href="#sec2">Location</a>
						</div>
						<div class="scroll-init">
							<a href="#sec3">Inquiry</a>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navigation from "../components/MainNavigationBar";
export default {
  	name: "contact",
	components: {Navigation},
	data () {
		return {
			pageTitle: 'Contact info',
			contactTitle: 'Contact information',
			subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget.',
			locationTitle: 'Studio location',
			locationText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisl ac elit porta pulvinar. In odio quam, accumsan sed justo ac, faucibus consequat nisl. Praesent eget aliquam ipsum, vel iaculis nisl. Curabitur rhoncus laoreet efficitur. Sed vitae suscipit quam, ut pulvinar lacus. Donec nec gravida est, sed auctor lorem. Donec dictum purus pretium neque varius vestibulum. Donec ipsum dolor, viverra eget nunc non, tincidunt dignissim augue. Proin ullamcorper risus leo, id eleifend sem mollis id. Proin dictum augue auctor nisl elementum, efficitur dapibus arcu placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			inquiryTitle: 'Get in touch',
			inquiry: {
				name: '',
				email: '',
				message: ''
			}
		}
	},
	methods: {
		backToTop() {
			window.scrollTo(0 ,0);
		},
		handleForm() {

		}
	}
}
</script>

<style scoped>
	.p-form {
		width: 100%;
		margin-bottom: 25px;
	}
	.p-form .p-input, .p-form .p-textarea {
		width: 100%;
		padding: 16px;
		margin-bottom: 25px;
		color: #ffffff;
		text-transform: uppercase;
		font-size: 11px;
		letter-spacing: 1px;
		font-weight: 600;
		background-color: #262626;
		border: none;
	}
	::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #ffffff;
		opacity: 1; /* Firefox */
	}
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
		color: #ffffff;
	}
	::-ms-input-placeholder { /* Microsoft Edge */
		color: #ffffff;
	}

</style>
