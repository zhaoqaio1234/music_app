<template>
  <div class="recommend-container">
    <div class="wrapper">
      <Iscrollview>
        <div>
          <Banner :banner="banners"></Banner>
          <Personalized
            :personalized="personalized"
            :title="'推荐歌单'"
            @fatherSelectItem="fatherSelectItem"
            :type="'personalized'"
          ></Personalized>
          <Personalized
            :personalized="albums"
            :title="'最新专辑'"
            @fatherSelectItem="fatherSelectItem"
            :type="'albums'"
          ></Personalized>
          <Songlist :newsongs="newsongs"></Songlist>
        </div>
      </Iscrollview>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {
  getBanner,
  getPersonalized,
  getNewAlbum,
  getSongList,
} from '../api/index'
import Banner from '@/components/Recommend/Banner'
import Personalized from '@/components/Recommend/Personalized'
import Songlist from '@/components/Recommend/Songlist'
import Iscrollview from '@/components/IscrollView'

export default {
  name: 'recommend',
  data() {
    return {
      banners: [],
      personalized: [],
      albums: [],
      newsongs: [],
    }
  },
  components: {
    Banner,
    Personalized,
    Songlist,
    Iscrollview,
  },
  methods: {
    fatherSelectItem(id, type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`,
      })
    },
  },
  created() {
    // 获取banner信息
    getBanner()
      .then((res) => {
        this.banners = res.banners
        // console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    // 获取推荐歌单
    getPersonalized()
      .then((res) => {
        this.personalized = res.result
        // console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    // 获取最新专辑
    getNewAlbum()
      .then((res) => {
        this.albums = res.albums.splice(0, 6)
        // console.log(res)
      })
      .catch((eroor) => {
        console.log(eroor)
      })
    // 获取最新音乐
    getSongList()
      .then((res) => {
        this.newsongs = res.result
        // console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss" scoped>
.recommend-container {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.v-enter {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0%);
}
.v-enter-active {
  transition: transform 1s;
}
.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>