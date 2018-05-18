<template>
  <div>
    <h1>路由重定向</h1>
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
        <router-link to="/aaa/456">aaa</router-link>
      </li>
      <li>
        <router-link to="/bbb/789">bbb</router-link>
      </li>
      <li>
        <router-link to="/ccc/001">ccc001</router-link>
      </li>
      <li>
        <router-link to="/ccc/002">ccc002</router-link>
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
