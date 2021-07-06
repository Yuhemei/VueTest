<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">首   页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">JavaScript</el-menu-item>
        <el-menu-item index="2-2">python</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">SQL</template>
          <el-menu-item index="2-4-1">MongoDB</el-menu-item>
          <el-menu-item index="2-4-2">MySQL</el-menu-item>
          <el-menu-item index="2-4-3">PostGress</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >消息中心</el-menu-item>
      <el-menu-item index="4"
        >个人主页</el-menu-item
      >
    </el-menu>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/canvas">Canvas</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return{
       activeIndex: '1',
       handleSelect(key, keyPath) {
        console.log( key, keyPath);
        this.$router.replace(key)
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
