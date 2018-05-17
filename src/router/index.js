import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const first = {
	template: '<div>first page</div>'
};
const second = {
	template: '<div>second page</div>'
}
const home = {
	template: '<div>home page</div>'
}

const firstHome = {
	template: '<div><h1>first组件</h1><router-view></router-view></div>'
}

const firstFirst = {
	template: '<div>firstFirst page {{ $route.params.id }} {{ $route.params.user }}</div>'
};
const firstSecond = {
	template: '<div>firstSecond page</div>'
}

export default new Router({
	mode: 'history', // 路由模式
	base: '/', // 基路径
	routes: [{
		path: '/'
	}, {
		path: '/params/:a'
	}, {
		path: '/params-reg/:a',
		redirect: '/params/:a'
	}]
})