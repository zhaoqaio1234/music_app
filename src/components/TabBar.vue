<template>
  <div class="tabbar">
    <router-link class="item" to="/recommend" tag="div"
      ><span>推荐</span></router-link
    >
    <router-link class="item" to="/singer" tag="div"
      ><span>歌手</span></router-link
    >
    <router-link class="item" to="/rank" tag="div"
      ><span>排行</span></router-link
    >
    <router-link class="item" to="/search" tag="div"
      ><span>搜索</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'tabbar',
}
</script>

<style scoped lang="scss">
// @import "../assets/css/varible";
@import '../assets/css/mixin';
.tabbar {
  // position: relative;
  // z-index: 999;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 84px;
  @include bg_sub_color();
  .item {
    span {
      line-height: 84px;
      @include font_size($font_medium_s);
      @include font_color();
    }
    &.router-link-active {
      span {
        @include font-active-color();
      }
      border-bottom: 5px solid #fff;
      @include border_color();
    }
  }
}
</style>