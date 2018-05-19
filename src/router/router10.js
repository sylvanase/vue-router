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
	template: '<div>404页</div>',
	beforeRouteEnter(to, from, next) { // 组件内的守卫
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不能获取组件实例 `this`
		// 因为当守卫执行前，组件实例还没被创建
		// 
		next();
	},
	beforeRouteUpdate(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 可以访问组件实例 `this`
		next();
	},
	beforeRouteLeave(to, from, next) {
		next();
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例 `this`
	}
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
		name: 'parent',
		beforeEnter: (to, from, next) => { // 路由独享的守卫
			next() // next(false) 不可跳转
			// 跳转至别的路径 next({path: '/'})

		}
	}, {
		path: '*', // 注意path为*，放置在路由数组中的最后
		component: Page404
	}]
})