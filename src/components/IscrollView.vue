<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'IscrollView',
  mounted() {
    this.iscroll = new Iscroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      // probeType: 3,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
    })
    // setTimeout(() => {
    //   console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh()
    //   console.log(this.iscroll.maxScrollY)
    // }, 5000)
    // 1、 创建一个观察者对象
    let observer = new MutationObserver(() => {
      this.iscroll.refresh()
    })
    // 2、 告诉观察者对象我们需要观察什么内容
    let config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为false，设置为true可以观察后代节点
      attributeFilter: ['height', 'offsetHeught'],
    }
    // 3、告诉观察者对象，我们需要观察谁，需要观察什么内容

    // 第一个参数：告诉观察者对象我们需要观察谁
    // 第二个参数：告诉观察者对象我们需要观察什么内容

    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动距离的方法给外界使用
    scrolling(fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>