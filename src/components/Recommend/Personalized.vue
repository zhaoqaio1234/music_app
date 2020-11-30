<template>
  <div class="personalized-container">
    <div class="personalized-top">
      <h3>{{ title }}</h3>
    </div>
    <div class="personalized-list">
      <div
        class="item"
        v-for="item in personalized"
        :key="item.id"
        @click="selectItem(item.id)"
      >
        <!-- <img :src="item.picUrl" alt="" /> -->
        <img v-lazy="item.picUrl" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    selectItem(id) {
      console.log(this.type)
      this.$emit('fatherSelectItem', id, this.type)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin';
@import '@/assets/css/variable';
.personalized-container {
  .personalized-top {
    @include bg_sub_color();
    padding: 0 20px;
    width: 100%;
    line-height: 84px;
    border-bottom: 1px solid #ccc;
    h3 {
      font-weight: bold;
      @include font_size($font_large);
      @include font_color();
    }
  }
  .personalized-list {
    @include bg_sub_color();
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    .item {
      width: 200px;
      padding: 20px 0;
      img {
        width: 200px;
        height: 200px;
        border-radius: 20px;
      }
      p {
        @include clamp(2);
        @include font_color();
        @include font_size($font_medium_s);
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>