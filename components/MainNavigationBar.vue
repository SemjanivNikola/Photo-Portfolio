<template>
  <div id="navigation-bar" class="primary-background">
    <div class="logo">
      <h2>Brand</h2>
    </div>
    <div class="items-box">
      <ul>
		  <li>
			  <NuxtLink to="/">Home</NuxtLink>
		  </li>
		  <li>
			  <NuxtLink to="/about">About Me</NuxtLink>
		  </li>
		  <li>
			  <NuxtLink to="/contact">Contact</NuxtLink>
		  </li>
		  <li>
			  <NuxtLink to="/portfolio">Portfolio</NuxtLink>
		  </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavigationBar'
}
</script>

<style scoped>
#navigation-bar{
  height: 80px;
  width: 100%;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  padding: 0 60px 0 200px;
  -webkit-transform: translate3d(0, 0, 0);
  z-index: 10;
}
.logo{
  position: absolute;
	height: 100%;
  top:0;
  left: 50px;
	padding-top: 10px;
}
.logo h2 {
	color: var(--light);
}
.items-box{
  position: relative;
  top: 24px;
  left: 0;
  /*margin-right: 200px;*/
  display: block;
  color: #fff;
  font-size: 12px;
  float: right;
  transition: all .2s ease-in-out;
}
.items-box ul li{
  height: 50px;
  display: inline-block;
  float: left;
  margin-right: 30px;
}
.items-box ul li{
  text-transform: uppercase;
  line-height: 45px;
  font-weight: bold;
  cursor: pointer;
}
.items-box ul li a:hover{
  cursor: pointer;
  color: #545454;
  text-decoration: none;
}
.items-box ul li a{
  color: inherit;
  vertical-align: middle;
}
.items-box ul li a.router-link-exact-active {
  border-bottom: 1px solid #a68e64;
}
.fl-wrap{
  float: left;
  width: 100%;
  position: relative;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  opacity: 0;
  display: block;
  visibility: hidden;
  position: absolute;
  background-color: rgba(0, 0, 0, .7813);
  color: #fff;
  width: auto;
  min-width: 200px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  margin-top: 60px;
  padding: 12px 16px;
  z-index: 1;
  transition: all .2s ease-in-out;
}
.dropdown-content li {
  text-align: left;
  display: block;
  width: 100%;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}
</style>
