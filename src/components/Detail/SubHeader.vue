<template>
  <div class="header" @click="selcetColorClick">
    <div class="header-left" @click.stop="back"></div>
    <p class="header-center">{{ title }}</p>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Subheader',
  data() {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0,
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    selcetColorClick() {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute(
        'data-theme',
        this.themes[this.index]
      )
    },
    back() {
      window.history.back()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable';
@import '../../assets/css/mixin';
.header {
  width: 100%;
  height: 100px;
  @include bg_color();
  display: flex;
  justify-content: space-between;
  .header-center {
    line-height: 100px;
    color: #fff;
    @include font_size($font_medium);
    font-weight: bold;
    @include no_wrap();
  }
  .header-left {
    @include bg_img('../../assets/image/back');
  }
  .header-right {
    @include bg_img('../../assets/image/more');
  }
  .header-left,
  .header-right {
    margin-top: 8px;
    width: 84px;
    height: 84px;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>