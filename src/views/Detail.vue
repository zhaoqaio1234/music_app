<template>
  <div class="detail-container">
    <Subheader :title="playlist.name"></Subheader>
    <Detailtop :path="playlist.coverImgUrl" ref="top"></Detailtop>

    <div class="bottom">
      <Iscrollview ref="scrollview">
        <Detailbottom :playlist="playlist.tracks"></Detailbottom>
      </Iscrollview>
    </div>
  </div>
</template>

<script>
import { getPlayList, getAlbum } from '@/api/index'
import Subheader from '@/components/Detail/SubHeader'
import Detailtop from '@/components/Detail/DetailTop'
import Detailbottom from '@/components/Detail/DetailBottom'
import Iscrollview from '@/components/IscrollView'
export default {
  components: {
    Subheader,
    Detailtop,
    Detailbottom,
    Iscrollview,
  },
  data() {
    return {
      playlist: [],
    }
  },
  created() {
    console.log(this.$route)
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((res) => {
          // console.log(res)
          this.playlist = res.playlist
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (this.$route.params.type === 'albums') {
      console.log(123)
      getAlbum({ id: this.$route.params.id })
        .then((res) => {
          this.playlist = {
            // name: res.playlist.name,
            coverImgUrl: res.album.blurPicUrl,
            name: res.album.name,
            tracks: res.artists,
          }
          // console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    let defaultHeight = this.$refs.top.$el.offsetHeight

    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) {
        // let scale = (20 * Math.abs(offsetY)) / defaultHeight

        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
        let scale = Math.abs(offsetY) / defaultHeight
        this.$refs.top.rechange(scale)
      } else {
        let scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include bg_sub_color();
}
.bottom {
  position: fixed;
  top: 500px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>