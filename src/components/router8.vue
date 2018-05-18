<template>
  <div>
    <h1>别名alias</h1>
    <p>实际访问的是别名，url也显示为别名，但实际路由指向path</p>
    <ol>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/first">first</router-link>
      </li>
      <ol>
        <li>
          <router-link :to="{name: 'Home-first-child-1', params:{id: 123}}">first/first</router-link>
        </li>
        <li>
          <router-link to="/first/second">first/second</router-link>
        </li>
        <li>
          <router-link to="/first/third">first/third</router-link>
        </li>
      </ol>
      <li>
        <router-link to="/second">second</router-link>
      </li>
      <li>
        <router-link to="/mua">second的别名1：mua</router-link>
      </li>
      <li>
        <router-link to="/momo">second的别名2：momo</router-link>
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
