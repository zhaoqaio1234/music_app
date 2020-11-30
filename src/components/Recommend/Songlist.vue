<template>
  <div class="song-container">
    <div class="song-top">
      <h3>最新音乐</h3>
    </div>
    <ul class="song-list">
      <li class="item" v-for="value in newsongs" :key="value.id">
        <!-- <img :src="value.picUrl" alt="" /> -->
        <img v-lazy="value.picUrl" />
        <div>
          <h3>{{ value.name }}</h3>
          <p>{{ value.song.artists[0].name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Songlist',
  props: {
    newsongs: {
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
.song-container {
  .song-top {
    width: 100%;
    height: 84px;
    padding: 0 20px;
    @include bg_sub_color();
    h3 {
      line-height: 84px;
      font-weight: bold;
      @include font_size($font_large);
      @include font-color();
    }
  }
  .song-list {
    width: 100%;
    overflow: hidden;
    .item {
      @include bg_sub_color();
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      //   margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      img {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        margin-right: 10px;
      }
      div {
        width: 70%;
        h3 {
          @include font_size($font_large);
          @include font_color();
          @include no-wrap();
        }
        p {
          @include font_size($font_samll);
          @include font_color();
          @include no-wrap();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>