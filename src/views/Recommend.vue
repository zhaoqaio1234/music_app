<template>
  <div class="recommend-container">
    <Banner :banner="banners"></Banner>
  </div>
</template>

<script>
import { getBanner } from '../api/index'
import Banner from '../components/Banner'
export default {
  name: 'recommend',
  data() {
    return {
      banners: [],
    }
  },
  components: {
    Banner,
  },
  created() {
    getBanner()
      .then((res) => {
        this.banners = res.banners
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style lang="sass" scoped>
</style>