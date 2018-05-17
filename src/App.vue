<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      {{ $route.name }}
    </div>
    <ul>
      <li><router-link to="/" exact>home</router-link></li>
      <li>
        <router-link to="/params/111">/params/111</router-link>
      </li>
      <li>
        <router-link to="/params-reg/333">/params-reg/333</router-link>
      </li>
    </ul>
    <p>
      <pre>
        <code>
          {{ JSON.stringify($route, null, 2) }}
        </code>
      </pre>
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

a.router-link-active{
  color: #f66;
}

li.router-link-active a{
  color: #f66;
}
</style>
