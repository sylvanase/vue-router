import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 路由传参
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
	template: '<div>first的子路由1，通过params传递了一个参数id: {{ $route.params.id}}</div>'
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
		component: home,
		name: 'Home'
	}, {
		path: '/first',
		component: firstTemplate, // router3.0 拥有子路由的不可在此定义name，可能会导致子组件渲染失败
		children: [{ // 子路由
			path: '/',
			name: 'Home-first',
			component: first
		}, {
			path: 'first',
			name: 'Home-first-child-1',
			component: firstChild
		}, {
			path: 'second',
			name: 'Home-first-child-2',
			component: secondChild
		}, {
			path: 'third',
			redirect: 'first'
		}]
	}, {
		path: '/second',
		component: second,
		name: 'Home-second'
	}, {
		path: '/aaa/:id',
		component: firstChild
	}, {
		path: '/bbb/:id',
		redirect: '/aaa/:id' // 重定向至aaa
	}, {
		path: '/ccc/:id',
		redirect: newPath => { // 使用箭头函数，返回重定向的值
			const {
				hash,
				params,
				query
			} = newPath;
			if (params.id == '001') {
				return '/';
			} else {
				return '/aaa/:id'
			}
		}
	}]
})