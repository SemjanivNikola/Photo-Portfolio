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
    imageID: Number
  },
  data () {
    return {
      isChecked: false
    }
  },
  methods: {
    setStatus() {
      this.isChecked = !this.isChecked;
    }
  }
}
</script>

<style scoped>
.p-checkbox {
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.p-checkbox-inner {
  width: inherit;
  height: inherit;
}
.active {
  background-color: #007bff;
}
.not-active {
  background: transparent;
}
</style>
