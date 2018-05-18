import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由传参
 */

const home = {
	template: `<div><h2>Home</h2><p>This is home page</p></div>`
}

const parent = {
	template: `<div><h2>Parent</h2><p>This is parent page</p></div>`
}

const firstTemplate = {
	template: `<div class="first">
		<h2>first的组件</h2>
		<router-view></router-view>
	</div>`
}

const Page404 = {
	template: '<div>404页</div>'
}

export default new Router({
	mode: 'history', // 路由模式，默认是hash模式，http://xxx.com#app，使用history模式url会像正常的url，http://xxx.com/id
	base: '/', // 基础路径
	routes: [{ // 数组存储路由，内部为json形式
		path: '/',
		component: home,
		name: 'Home'
	}, {
		path: '/parent',
		component: parent,
		name: 'parent'
	}, {
		path: '*',
		component: Page404
	}]
})