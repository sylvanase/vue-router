<template>
  <div>
    <h1>路由的url传值(query)</h1>
    <ol>
      <li>
        <router-link to="/">/</router-link>
      </li>
      <li>
        <router-link to="/users">/users</router-link>
      </li>
      <ol>
        <!-- path与query共用 -->
        <li>
          <router-link :to="{path:'/users/mary',query:{aaa:'bbb'}}">mary</router-link>
        </li>
        <li>
          <router-link :to="{path:'/users/jim',query:{aaa:'ccc'}}">jim</router-link>
        </li>
        <li>
          <router-link to="users" append>append</router-link>
          <!-- 在当前路径后叠加 eg:http://localhost:8090/users/users/users/users -->
        </li>
        <li>
          <router-link to="exact" exact>exact</router-link>
          <!-- 严谨的路径，常用属性 -->
        </li>
      </ol>
      <router-link tag="li" to="/users">tag</router-link>
      
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  a.router-link-active{
    color: #f66;
  }
  li.router-link-active a{
    color: #f66;
  }
</style>
