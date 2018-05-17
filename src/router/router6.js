import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由传参
 */

const users = {
	template: '<div><h2>Users</h2><router-view></router-view></div>'
};
const user = {
	template: '<div>{{$route.params.username}} : {{$route.query.aaa}}</div>'
}
const home = {
	template: '<div>home page</div>'
}

export default new Router({
	mode: 'history',
	base: '/', // 基础路径
	routes: [{ // 数组存储路由，内部为json形式
		path: '/',
		name: home,
		component: home
	}, {
		path: '/users',
		component: users,
		children: [{
			path: ':username',
			name: 'user',
			component: user
		}]
	}]
})