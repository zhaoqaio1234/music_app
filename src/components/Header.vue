<template>
  <div class="header" @click="selcetColorClick">
    <div class="header-left"></div>
    <p class="header-center">音乐之家</p>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      themes: ["theme", "theme1", "theme2"],
      index: 0,
    };
  },
  methods: {
    selcetColorClick() {
      this.index++;
      if (this.index >= this.themes.length) {
        this.index = 0;
      }
      document.documentElement.setAttribute(
        "data-theme",
        this.themes[this.index]
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
@import "../assets/css/mixin";
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
  }
  .header-left {
    @include bg_img("../assets/image/logo");
  }
  .header-right {
    @include bg_img("../assets/image/account");
  }
  .header-left,
  .header-right {
    margin-top: 8px;
    width: 84px;
    height: 84px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    button {
      width: 100px;
      height: 100px;
      &:nth-of-type(1) {
        background: $background-color-theme;
      }
      &:nth-of-type(2) {
        background: $background-color-theme1;
      }
      &:nth-of-type(3) {
        background: $background-color-theme2;
      }
    }
  }
}
</style>