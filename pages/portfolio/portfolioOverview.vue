<template>
  <div class="wrapper">
    Hello
  </div>
</template>

<script>
export default {
  name: "portfolioOverview",
  data () {
    return {
    }
  },
  mounted () {
    let slider = document.querySelector('#slider');
    console.log('t: ', slider.clientHeight);
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
</style>
