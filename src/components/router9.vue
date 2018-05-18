<template>
  <div>
    <h1>过渡动画</h1>
    <button v-on:click="show =! show"> show/hide text</button>
    <transition name="xxx">
      <p v-if="show"> 过渡动画效果 </p>
    </transition>
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
      <li>
        <router-link to="/momom">未指定路由，跳转404</router-link>
      </li>
    </ul>
    <transition :name="aaa" mode="out-in">
      <router-view ></router-view>
    </transition>
    
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
  watch: { // 通过监控路由来判定使用哪种动画
    '$route'(to, from){
      console.log(to); // 目标路由
      console.log(from); // 当前路由
      if(from.path == '/parent'){
        this.aaa = 'fade1'
      }else{
        this.aaa = 'fade2'
      }
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
