<template>
  <div id="app">
    <h1>基本引用</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/first">first</router-link>
      </li>
      <li>
        <router-link to="/second">second</router-link>
      </li>
    </ul>
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
