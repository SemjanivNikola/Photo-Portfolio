<template>
  <div id="nav" class="position-sticky">
    <!--<h4>IME APLIKACIJE</h4>-->
    <div class="w-100" style="padding: 0 5rem;">
      <img src="../static/icon.png" alt="App logo" class="w-100">
    </div>
    <div style="height: 40px;"></div>
    <div class="nav-item-wrapper-top">
      <ul class="main-menu">
        <ul class="main-menu">
          <li class="nav-title">Kontrolana ploča</li>
          <li><NuxtLink to="/admin/dashboard"><span data-hover="Pregled">Pregled</span></NuxtLink></li>
          <li class="nav-title">Upravljanje</li>
          <li><NuxtLink to="/admin/gallery"><span data-hover="Galerija">Galerija</span></NuxtLink></li>
          <li><NuxtLink to="/admin/presentation"><span data-hover="Prezentacija">Prezentacija</span></NuxtLink></li>
          <li class="nav-title">Postavke računa</li>
          <li><NuxtLink to="/admnin/account"><span data-hover="Račun">Račun</span></NuxtLink></li>
          <li><a href="#"><span data-hover="Odjavi se">Odjavi se</span></a></li>
        </ul>
      </ul>
    </div>
    <div class="nav-item-wrapper-bottom">
      <ul class="inner-menu-bottom">
        <li><span data-hover="Minimiziraj">Minimiziraj</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminSideNavigation"
}
</script>

<style scoped>
#nav {
  top: 0;
  left: 0;
  height: 100vh;
  background-color: var(--dark-primary);
  color: #fff;
  padding: 50px 0;
}
.nav-item-wrapper-top {
  height: auto;
  width: inherit;
}
.nav-item-wrapper-bottom {
  width: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
}
.main-menu {
  padding-left: 2.5rem;
  width: 100%;
  list-style-type:  none;
  text-align: left;
}
.main-menu li.nav-title {
  margin: 25px 0 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--dim-secondary);
}
.main-menu li, .inner-menu-bottom li {
  overflow: hidden;
}
.main-menu li a, .inner-menu-bottom li {
  width: 100%;
  color: #fff;
  text-decoration: none;
  border-right: 3px solid transparent;
  border-radius: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.main-menu li a span, .inner-menu-bottom li span {
  position: relative;
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
}
.main-menu li a span:before, .inner-menu-bottom li span:before {
  content: attr(data-hover);
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 700;
  color: #ffffff;
  -webkit-transform: translateY(25px);
  -moz-transform: translateY(25px);
  -ms-transform: translateY(25px);
  -o-transform: translateY(25px);
  transform: translateY(25px);
}
.main-menu li:hover span, .inner-menu-bottom li:hover span {
  -webkit-transform: translateY(-25px);
  -moz-transform: translateY(-25px);
  transform: translateY(-25px);
}
.main-menu li:hover a, .inner-menu-bottom li:hover {
  border-right-color: #fff;
}
.inner-menu-bottom {
  padding-left: 20px;
  color: #fff;
  width: 100%;
  height: auto;
  text-align: left;
}
</style>
