// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/router9' // 在此修改对应的组件
import router from './router/router9' // 在此处修改路由文件，查看不同效果

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	components: {
		App
	},
	template: '<App/>'
}).$mount('#app');