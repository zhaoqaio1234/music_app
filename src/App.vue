<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Play></Play>
  </div>
</template>

<script>
import Header from './components/Header'
import Tabbar from './components/TabBar'
import Play from './views/Play'

export default {
  name: 'App1',
  components: {
    Header,
    Tabbar,
    Play,
  },
}
</script>
<style lang="scss">
</style>
