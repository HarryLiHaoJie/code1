// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './api/config'
import vueTap from 'v-tap';
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'zh'})//可以设置语言，支持中文和英文
//import Axios from 'axios'
//import VueAxios from 'vue-axios'
//import Qs from 'qs'
import axios from 'axios'
Vue.use(vueTap);
Vue.config.productionTip = false
Vue.prototype.start = function (source) {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 //to login
//  if(!source || source == ''){
//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
//      return;
//  }
    if(isIOS){
        loadURL("huoq://btnLogin");
        return;
    }
    if(isAndroid){
	    JSInterface.toLogin();
	    return;
    }

	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}

Vue.prototype.stop = function () {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if(isIOS){
        loadURL("huoq://toInviteFriend");
        return;
    }
    if(isAndroid){
	    JSInterface.toInviteFriend();
	    return;
    }

	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}
//Vue.prototype.$ajax = axios
//Vue.use(VueAxios, Axios)
/* eslint-disable no-new */
Vue.use(require('vue-wechat-title'))
const qs = require('querystring')
const http = axios.create({
	baseURL: process.env.API_ROOT,
  timeout: 10000,
  transformRequest: [function(data) {
    // Do whatever you want to transform the data
    return qs.stringify(data)
  }],
  withCredentials: true,
	responseType: 'json',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
export default http;
Vue.prototype.$http = http
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
