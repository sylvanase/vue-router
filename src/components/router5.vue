<template>
  <div>
    <h1>路由的url传值</h1>
    <ul>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/params/111/222">/params/111/222</router-link>
      </li>
      <li>
        <router-link to="/params-regex/333">/params-regex/333</router-link>
      </li>
    </ul>
    <pre>
      <code>
        {{ JSON.stringify($route, null, 2)}}
      </code>
    </pre>
    <p>
      直接属性读取，aaa: {{ $route.params.aaa }}
    </p>
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
