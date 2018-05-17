import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 子路由使用
 */

const first = {
	template: '<div>first page</div>'
};
const second = {
	template: '<div>second page</div>'
}
const home = {
	template: '<div>home page</div>'
}

const firstChild = {
	template: '<div>first的子路由1</div>'
}

const secondChild = {
	template: '<div>first的子路由2</div>'
}

const firstTemplate = {
	template: `<div class="first">
		<h2>first的组件</h2>
		<router-view></router-view>
	</div>`
}

export default new Router({
	mode: 'history', // 路由模式，默认是hash模式，http://xxx.com#app，使用history模式url会像正常的url，http://xxx.com/id
	base: '/', // 基础路径
	routes: [{ // 数组存储路由，内部为json形式
		path: '/',
		component: home
	}, {
		path: '/first',
		component: firstTemplate,
		children: [{ // 子路由
			path: '/',
			component: first
		}, {
			path: 'first',
			component: firstChild
		}, {
			path: 'second',
			component: secondChild
		}]
	}, {
		path: '/second',
		component: second
	}]
})