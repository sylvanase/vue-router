<template>
  <div>
    <h1>导航守卫，编程式导航</h1>
    <p>植入方式：全局、单个路由、组件级</p>
    <p>参数或查询的改变不会触发守卫</p>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/parent">/parent</router-link>
      </li>
      <li>
        <router-link to="/yayay">未指定路由，跳转404</router-link>
      </li>
    </ul>

    <transition :name="aaa" mode="out-in">
      <router-view ></router-view>
    </transition>
    <button v-on:click="back">后退</button>
    <button v-on:click="forward">前进</button>
    <button v-on:click="home">返回首页</button>
    <button v-on:click="query">query传值</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      show:true,
      aaa: 'fade'
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    home(){
      this.$router.push('/');
    },
    query(){
      // 传值不意味着动态修改了路由表
      this.$router.push({path:'/', query:{aaa: '111',bbb: '222'}})
    }
  }
}
</script>

<style scoped>
.fade1-enter-active, .fade1-leave-active{
  transition: opacity .5s;
}

.fade1-enter,.fade1-leave-active{
  opacity: 0;
}


.fade2-enter-active, .fade2-leave-active{
  transition: background 0.5s ease-in,color 0.3s ease-out;
}

.fade2-enter,.fade2-leave-active{
  background-color: #f6f6f6;
  color: red;
}

.xxx-enter-active, .xxx-leave-active{
  transition: opacity 1.5s;
}

.xxx-enter,.xxx-leave-active{
  opacity: 0;
}


</style>
