<template>
  <div>
    <h1>路由表组件群</h1>
    <ol>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/first">first</router-link>
      </li>
    </ol>
    <router-view></router-view>
    <!-- 为view指定name -->
    <router-view class="left" name="left"></router-view>
    <router-view class="right" name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.left{
  float: left;
  width: 50%;
  background-color: #ff6000;
}

.right{
  float: left;
  width: 50%;
  background-color: pink;
}
</style>
