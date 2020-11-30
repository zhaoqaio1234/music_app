<template>
  <div class="detailbottom-container">
    <ul>
      <li class="bottom-top">
        <div class="detailbottom-icon"></div>
        <div class="detailbottom-title">播放全部</div>
      </li>
      <li class="item" v-for="item in playlist" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>{{ item.al.name }}-{{ item.ar[0].name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin';
@import '@/assets/css/variable';
.detailbottom-container {
  width: 100%;
  li {
    width: 100%;
    height: 120px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
  }
  .bottom-top {
    display: flex;
    align-items: center;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    .detailbottom-icon {
      width: 60px;
      height: 60px;
      @include bg_img('../../assets/image/small_play');
      margin-right: 20px;
    }
    .detailbottom-title {
      @include font_color();
      @include font_size(($font_large));
    }
  }
  .item {
    h3 {
      @include font_size($font_medium);
      @include font_color();
      @include no-wrap();
    }
    p {
      @include font_color();
      @include font_size($font_samll);
      @include no-wrap;
      margin-top: 20px;
      opacity: 0.8;
    }
  }
}
</style>