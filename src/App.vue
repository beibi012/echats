<template>
  <div id="app">
    <el-container style="width: auto;height: auto">
      <the-aside></the-aside>
      <el-container style="width: 100%;display: flex;flex-direction: column">
        <the-header></the-header>
        <the-body></the-body>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import TheAside from "./components/TheAside";
import TheHeader from "./components/TheHeader";
import TheBody from "./components/TheBody";
import randomData from "./js/random";


export default {
  name: 'App',
  components: {
    TheAside,
    TheHeader,
    TheBody
  },
  beforeMount(){
    this.$store.state.goods.brandData=randomData()
    console.log(this.$store.state.goods.brandData)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  #app{
    width: 100vw;
    height: 100vh;
  }
</style>
