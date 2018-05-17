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
	mode: 'history',
	base: '/', // 基础路径
	routes: [{ // 数组存储路由，内部为json形式
		path: '/'
	}, {
		path: '/params/:aaa/:bbb'
	}, {
		path: '/params-regex/:id(\\d+)' // 正则格式
	}]
})