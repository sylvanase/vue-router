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

export default new Router({
	mode: 'history', // 路由模式，默认是hash模式，http://xxx.com#app，使用history模式url会像正常的url，http://xxx.com/id
	base: '/', // 基础路径
	routes: [{ // 数组存储路由，内部为json形式
		path: '/',
		components: { // 通过name指定每个router-view显示的组件
			default: home, // 默认home
			left: first, // name为left的router-view显示first组件
			right: second
		},
		name: 'Home'
	}, {
		path: '/first',
		components: {
			default: first
		},
		name: 'Home-first'
	}, {
		path: '/second',
		component: second,
		name: 'Home-second'
	}]
})