<template>
  <div id="app">
    <h1>子路由应用</h1>
    <ol>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/first">first</router-link>
      </li>
      <ol>
        <li>
          <router-link to="/first/first">first/first</router-link>
        </li>
        <li>
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
