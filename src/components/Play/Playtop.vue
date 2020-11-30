<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-title">
      <h3>演员</h3>
      <p>薛之谦</p>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayHeader',
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable';
@import '../../assets/css/mixin';
.header {
  width: 100%;
  height: 100px;
  // @include bg_color();
  display: flex;
  justify-content: space-between;
  .header-center {
    line-height: 100px;
    color: #fff;
    @include font_size($font_medium);
    font-weight: bold;
  }
  .header-left {
    @include bg_img('../../assets/image/down');
  }
  .header-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    p {
      @include font_size($font_samll);
    }
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