<template>
	<div id="dashboard" :class="[darkMode ? 'dark' : 'light', 'w-100 vh-100 bg-mode']">
		<div class="container position-relative pt-extra h-100">
			<div class="d-flex flex-column">
				<div class="card-group">
					<div :class="[darkMode ? 'dark' : 'light', 'card active']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
							</svg>
						</div>
						<div class="text-center p-3">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Početna</h5>
						</div>
					</div>
					<NuxtLink to="/admin/presentation" :class="[darkMode ? 'dark' : 'light', 'card']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
							</svg>
						</div>
						<div class="p-3 text-center">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Prezentacija slika</h5>
						</div>
					</NuxtLink>
					<NuxtLink to="/admin/information" :class="[darkMode ? 'dark' : 'light', 'card']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
							</svg>
						</div>
						<div class="text-center p-3">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Uređivanje informacija</h5>
						</div>
					</NuxtLink>
				</div>
				<div class="card-group">
					<NuxtLink to="/admin/gallery" :class="[darkMode ? 'dark' : 'light', 'card']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
								<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
							</svg>
						</div>
						<div class="text-center p-3">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Galerija</h5>
						</div>
					</NuxtLink>
					<NuxtLink to="/admin/account" :class="[darkMode ? 'dark' : 'light', 'card']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
								<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
							</svg>
						</div>
						<div class="p-3 text-center">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Postavke računa</h5>
						</div>
					</NuxtLink>
					<NuxtLink to="/admin" :class="[darkMode ? 'dark' : 'light', 'card']">
						<div class="icon-top">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
							</svg>
						</div>
						<div class="p-3 text-center">
							<h5 :class="[darkMode ? 'dark' : 'light', 'a-h5']">Odjava</h5>
						</div>
					</NuxtLink>
				</div>
				<div class="notification-wrapper position-absolute">
					<div class="info-bar">
						<div class="info-bar-icon">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
								<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
								<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
							</svg>
						</div>
						<div class="info-bar-desc">
							Obavijesti
						</div>
					</div>
					<div class="tab-content">
						<h3 class="a-h3">Trenutno nema obavijesti.</h3>
					</div>
				</div>
			</div>
		</div>
		<div :class="[darkMode ? 'dark' : 'light', 'float-btn']" @click="toggleDarkMode">
			<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16">
				<path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dashboard",
		data () {
			return {
				darkMode: ''
			}
		},
		created() {
			this.darkMode = this.$store.getters.getDarkMode;
		},
		methods: {
			toggleDarkMode () {
				this.darkMode = !this.darkMode;
				this.$store.commit('setDarkMode', this.darkMode);
			}
		}
	}
</script>

<style scoped>
	.card-group .card {
		width: 12rem;
		height: 12rem;
		justify-content: center;
		margin-right: 15px;
		margin-bottom: 8px;
		cursor: pointer;
	}
	.card-group .card:last-child {
		margin-right: 0;
	}
	.card.active.dark {
		background-color: var(--dark-primary-light);
	}
	.card.active.light {
		background-color: var(--dark-primary-light);
	}
	.card.dark {
		background-color: var(--light);
	}
	.card.light {
		background-color: var(--dark-primary);
	}
	.card.dark .icon-top .bi {
		fill: var(--dark-primary);
	}
	.card.light .icon-top .bi, .card.active .icon-top .bi {
		fill: var(--light);
	}
	.card.light:hover {
		background-color: var(--dark-primary-light);
	}
	.card.dark:hover {
		background-color: var(--dark-primary-light);
	}
	.a-h5.dark {
		color: var(--dark-primary);
	}
	.a-h5.light, .card.active .text-center .a-h5 {
		color: var(--light);
	}

	h3.a-h3, h5.a-h5 {
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-style: normal;
		text-transform: uppercase;
		color: var(--dark-primary);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.icon-top {
		margin: 15px auto 0 auto;
		width: 65px;
	}
	.icon-top svg {
		width: 100%;
	}
	.notification-wrapper {
		bottom: 0;
		left: 0;
		width: 100%;
		height: 275px;
		background-color: var(--light-v1);
	}
	.pt-extra {
		padding-top: 220px;
	}
	.info-bar {
		height: 35px;
		padding-left: 10px;
		padding-bottom: 15px;
		border-bottom: 2px solid #f7f7f7;
	}
	.info-bar-icon {
		height: 32px;
		width: 32px;
		padding: 4px;
		display: inline-block;
	}
	.info-bar-desc {
		padding-left: 8px;
		display: inline-block;
	}
	.bi {
		width: 100%;
	}
	.tab-content {
		padding: 10px 0 20px 10px;
	}
</style>
