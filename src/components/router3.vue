<template>
  <div>
    <h1>路由传参</h1>
    <p>使用name传参：{{ $route.name }}</p>
    <ol>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/first">first</router-link>
      </li>
      <ol>
        <li>
          <!-- name和params共用 -->
          <router-link :to="{name: 'Home-first-child-1', params:{id:123}}">first/first</router-link>
        </li>
        <li>
          <!-- 与query共用 -->
          <router-link to="/first/second">first/second</router-link>
        </li>
      </ol>
      <li>
        <router-link to="/second">second</router-link>
      </li>
    </ol>
    <router-view class=""></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
