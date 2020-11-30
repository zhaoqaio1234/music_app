<template>
  <div class="detailtop-container">
    <div class="detailtop-img">
      <img :src="path" alt="" />
      <div class="mask" ref="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    rechange(opacity) {
      this.$refs.mask.style.opacity = opacity
    },
  },
}
</script>

<style lang="scss" scoped>
.detailtop-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  .detailtop-img {
    position: relative;
    img {
      width: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background: #000;
      width: 100%;
      height: 100%;
    }
  }
}
</style>