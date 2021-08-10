<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button type="primary" @click="getInfo">爱你</el-button>
    <el-button type="success">爱你</el-button>
    <el-button type="info">爱你</el-button>
    <el-button type="warning">爱你</el-button>
    <el-button type="danger">爱你</el-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async getInfo() {
      // this.$http.get() 获得的是一个promise
      //getInfo前面加修饰符async Promise前面加await 就变成一个对象
      // 利用解构法 获取data: res
     const { data: res } = await this.$http.get('/api/get', { 
        params: {name: 'zs', age: 20}
      })
      console.log(res);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
