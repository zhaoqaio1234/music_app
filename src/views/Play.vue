<template>
  <div class="play-container">
    <Playtop></Playtop>
    <Playmiddle></Playmiddle>
  </div>
</template>

<script>
import Playtop from '@/components/Play/Playtop'
import Playmiddle from '@/components/Play/Playmiddle'
export default {
  components: {
    Playtop,
    Playmiddle,
  },
}
</script>

<style lang="scss" scoped>
.play-container {
  position: fixed;
  //   width: 100%;
  //   height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: pink;
}
</style>