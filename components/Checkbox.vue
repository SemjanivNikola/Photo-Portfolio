<template>
  <div>
    <div class="p-checkbox" @click="setStatus">
      <div :class="[isChecked ? 'active' : 'not-active', 'p-checkbox-inner']"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    imageID: Number,
	  status: Boolean
  },
  data () {
    return {
      isChecked: false
    }
  },
  watch: {
    status(status) {
      console.log('s: ', status);
      this.isChecked = status;
    }
  },
  methods: {
    setStatus() {
      //this.isChecked = status;
      this.isChecked = !this.isChecked;
      this.$emit('setItemStatus', this.isChecked, this.imageID);
    }
  }
}
</script>

<style scoped>
.p-checkbox {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.p-checkbox-inner {
  width: inherit;
  height: inherit;
}
.p-checkbox:hover {
  box-shadow: 0 0 12px 1px rgba(83, 79, 89, .6892) inset;
}
.active {
  background-image: url("../static/temp/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 12px 1px rgba(194, 194, 194, .3892) inset;
  animation-duration: 300ms;
  animation-name: scale;
}
.not-active {
  background: transparent;
}
  @keyframes scale {
    from {
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);}
    to {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
