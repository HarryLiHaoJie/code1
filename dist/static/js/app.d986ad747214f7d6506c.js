webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_wechat_title__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_wechat_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_wechat_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_question__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_account__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_matters__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_matters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__common_matters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_recharge__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_recharge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__common_recharge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_explain__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_explain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__common_explain__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_about__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_safety__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_safety___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_safety__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sign__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_sign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_integral_detail__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_integral_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_integral_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_invitation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_invitation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_invitation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reward_detail__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reward_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_reward_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_prompt__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_prompt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_prompt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_protocol_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_protocol_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_protocol_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_usagerules__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_usagerules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_usagerules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_syqxt__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_syqxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_syqxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_goods_agreement__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_goods_agreement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_goods_agreement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_car_agreement__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_car_agreement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_car_agreement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_share__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__api_config__ = __webpack_require__(6);

























__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/question',
    name: 'question',
    component: __WEBPACK_IMPORTED_MODULE_4__components_question___default.a,
    redirect: 'account',
    children: [{
      path: '/question/account',
      meta: {
        title: '常见问题'
      },
      component: __WEBPACK_IMPORTED_MODULE_5__common_account___default.a
    }, {
      path: '/question/matters',
      component: __WEBPACK_IMPORTED_MODULE_6__common_matters___default.a
    }, {
      path: '/question/recharge',
      component: __WEBPACK_IMPORTED_MODULE_7__common_recharge___default.a
    }, {
      path: '/question/explain',
      component: __WEBPACK_IMPORTED_MODULE_8__common_explain___default.a
    }]
  }, {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于新华金典'
    },
    component: __WEBPACK_IMPORTED_MODULE_9__components_about___default.a
  }, {
    path: '/safety',
    name: 'safety',
    meta: {
      title: '安全保障'
    },
    component: __WEBPACK_IMPORTED_MODULE_10__components_safety___default.a
  }, {
    path: '/sign',
    name: 'sign',
    meta: {
      title: '每日签到'
    },
    component: __WEBPACK_IMPORTED_MODULE_11__components_sign___default.a
  }, {
    path: '/integral_detail',
    name: 'integral_detail',
    meta: {
      title: '积分明细'
    },
    component: __WEBPACK_IMPORTED_MODULE_12__components_integral_detail___default.a
  }, {
    path: '/invitation',
    name: 'invitation',
    meta: {
      title: '邀请好友 '
    },
    component: __WEBPACK_IMPORTED_MODULE_13__components_invitation___default.a
  }, {
    path: '/reward_detail',
    name: 'reward_detail',
    meta: {
      title: '奖励列表'
    },
    component: __WEBPACK_IMPORTED_MODULE_14__components_reward_detail___default.a
  }, {
    path: '/prompt',
    name: 'prompt',
    meta: {
      title: '充值错误代码含义'
    },
    component: __WEBPACK_IMPORTED_MODULE_15__components_prompt___default.a
  }, {
    path: '/protocol_service',
    name: 'protocol_service',
    meta: {
      title: '服务协议'
    },
    component: __WEBPACK_IMPORTED_MODULE_16__components_protocol_service___default.a
  }, {
    path: '/service',
    name: 'service',
    meta: {
      title: '注册协议'
    },
    component: __WEBPACK_IMPORTED_MODULE_17__components_service___default.a
  }, {
    path: '/usagerules',
    name: 'usagerules',
    meta: {
      title: '使用规则'
    },
    component: __WEBPACK_IMPORTED_MODULE_18__components_usagerules___default.a
  }, {
    path: '/syqxt',
    name: 'syqxt',
    meta: {
      title: '收益曲线'
    },
    component: __WEBPACK_IMPORTED_MODULE_19__components_syqxt___default.a
  }, {
    path: '/goods_agreement',
    name: 'goods_agreement',
    meta: {
      title: '电子合同'
    },
    component: __WEBPACK_IMPORTED_MODULE_20__components_goods_agreement___default.a
  }, {
    path: '/car_agreement',
    name: 'car_agreement',
    meta: {
      title: '电子合同'
    },
    component: __WEBPACK_IMPORTED_MODULE_21__components_car_agreement___default.a
  }, {
    path: '/share',
    name: 'share',
    meta: {
      title: '注册'
    },
    component: __WEBPACK_IMPORTED_MODULE_22__components_share___default.a
  }]
}));

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(2);




/* unused harmony default export */ var _unused_webpack_default_export = ({

	//	  url: '/route',
	baseURL: __webpack_require__.i({"NODE_ENV":"production"}).API_ROOT,
	method: 'POST',

	transformRequest: [function (data) {
		//为了避免qs格式化时对内层对象的格式化先把内层的对象转为
		data.CustData = JSON.stringify(data.CustData);
		//由于使用的form-data传数据所以要格式化
		data = __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(data);
		return data;
	}],

	transformResponse: [function (data) {

		return data;
	}],
	timeout: 1000,
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

	//	  params: {
	//	    eid:8484662,
	//	    openid:'57c80528e4b07e300ed4ffbb',
	//	    pubacckey:'',
	//	    timestamp:'',
	//	    nonce:'',
	//	    pubaccid:'',
	//	  },
	//
	//
	//	  paramsSerializer: function(params) {
	//	    return Qs.stringify(params)
	//	  },
	//
	//
	//	data: {
	//  	EID:"8484662",
	//  	Method:"kis.APP003678.ueanalysis.UEStockAnalysis.",
	//  	NetID:"8484662159954",
	//	    CustData:{
	//	     	"Result": "",
	//	      	"ErrMsg": "",
	//	      	"AccountDB": "",
	//	        "TotalPage": "",
	//	        "CurrentPage": "1",
	//	        "ItemsOfPage": "100",
	//	        "Data": {}
	//	    }
	//	},
	//
	//

	//
	//
	//	withCredentials: false, // default
	//
	//
	//	responseType: 'json', // default
	//
	//
	//
	//	onUploadProgress: function (progressEvent) {
	//	    // Do whatever you want with the native progress event
	//	},
	//
	//
	//	onDownloadProgress: function (progressEvent) {
	//	    // Do whatever you want with the native progress event
	//	},
	//
	//
	//	maxContentLength: 2000,
	//
	//
	//	validateStatus: function (status) {
	//	    return status >= 200 && status < 300; // default
	//	},
	//
	//
	//	maxRedirects: 5, // default
});

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RexExp.$1.length));
    }
    var message = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (var k in message) {
        if (new RegExp(`(${k})`).test(fmt)) {
            var str = message[k] + '';
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/login_bg.9405598.png";

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(136),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			activeClass: 'select',
			seen: false,
			todos: [{
				text: '如何注册？',
				text1: '点击“我的”页面后，点击“注册送红包”，并填写手机号码，获取验证码，设置登录密码，即可完成注册。',
				select: false
			}, {
				text: '注册账户时，设置登录密码有什么要求？',
				text1: '密码必须包含数字和英文字母（区分大小写）或符号，至少6位字符，不超过16位字符。',
				select: false
			}, {
				text: '忘记用户名、密码、怎么办？',
				text1: '用户名即为您的手机号。忘记登录密码，可以登录页面，点击“忘记密码”，按系统提示操作即可。忘记交易密码，可以登录后，在“我的”页面，点击左上角图标，点击修改交易密码，点击下方忘记密码，验证手机后即可修改交易密码。',
				select: false
			}, {
				text: '交易密码有什么用？',
				text1: '交易密码是为保证用户资金安全而设立密码体系，所有涉及到资金类操作（如充值、提现、购买理财产品），系统都需校验交易密码。所以说交易密码非常重要，切勿将交易密码告知他人并妥善保管。',
				select: false
			}, {
				text: '为什么要进行实名认证？',
				text1: '为了提高账户安全等级，保障资金的安全性和合同的有效性，客户需在首次充值前完成实名登记,新华金典承诺会对所有用户资料严格保密。',
				select: false
			}, {
				text: '实名登记时，如果身份证号里含有x，怎么填写？',
				text1: '直接填写X。',
				select: false
			}, {
				text: '银行卡绑定后是否可更改？',
				text1: '在绑定银行卡后，若要修改请联系客服人员，再重新绑定。但需注意：即将绑定银行卡的开户名需与原实名认证姓名必须一致，否则会导致提现失败。',
				select: false
			}, {
				text: '注册时手机收不到验证码怎么办？',
				text1: '（1）确认短信是否被手机软件拦截或过滤；   <br/>（2）确认手机是否能正常接收短信（信号问题、欠费、停机等）；<br/> （3）短信收发过程中可能会有延时，请耐心等候。<br/>若排除以上问题仍没有收到，可点击“再次发送”按钮，若仍未解决，请联系我司客服。',
				select: false
			}, {
				text: '为什么要绑定银行卡？',
				text1: '绑定银行卡是第三方资金托管安全方式中重要的一环，也是实名认证的一种方式，资金流动在绑定银行卡内，对投资者提供了资金安全保障，同时对投资也较为方便。',
				select: false
			}, {
				text: '支持哪些银行进行实名认证？（仅支持储蓄卡，暂不支持信用卡）？',
				text1: '目前仅支持：工行、农行、建行、中行、交行、兴业、中信、光大、平安、邮政、上海、浦发、民生',
				select: false
			}, {
				text: '为什么会登录失败？',
				text1: '请您核对以下几点，这些可能是导致您登录失败的原因：<br/>（1）请您确认输入的手机号是否正确；<br/>（2）请您确认输入的密码是否正确。如果忘记密码，您可以点击【忘记密码】重新设置；<br/>（3）网络问题也会造成登录失败，如果提示网页有错误，建议您稍后尝试。',
				select: false
			}, {
				text: '手势密码有什么用？',
				text1: '手势密码为保护用户资金及账户信息安全。建议启用该功能。',
				select: false
			}, {
				text: '忘记手势密码，怎么办？',
				text1: '如果已进入APP界面，可在手势密码页面，点击忘记手势密码，选择重新登录。待重新登录后，重置手势密码。',
				select: false
			}, {
				text: '怎么关闭手势密码？',
				text1: '选择“我的”页面，点击左上角图标，在手势密码锁定栏中点击右边开关，开关显示灰色即为关闭。',
				select: false
			}, {
				text: '绑定账户的银行卡丢失，怎么办？',
				text1: '为了您的资金安全请及时拨打我们客服热线进行解绑操作。',
				select: false
			}]
		};
	},
	methods: {
		tab1: function (todos, index) {
			/*默认切换类的动作*/
			todos.forEach(function (el) {
				el.select = false;
			});
			//				todos[index].select = true;
			if (this.seen == false) {
				todos[index].select = true;
				this.seen = true;
			} else {
				todos[index].select = false;
				this.seen = false;
			}
		}
	}
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			activeClass: 'select',
			seen: false,
			todos3: [{
				text: '什么是理财券？',
				text1: '1、理财券在投资中可作为虚拟金使用，且每次只能使用一张；<br/> 2、理财券不能直接提现，使用理财券产生的利息可以提现；<br/>3、零钱罐不可使用理财券。<br/><br/>示例：<br/>如用户A购买10000元理财产品，使用2000元理财券，则实际支付10000元，产品到期后将获得10000元本金和12000元产生的利息。',
				select: false
			}, {
				text: '什么是“累计收益”？',
				text1: '截止目前所购买理财产品所产生收益之和。',
				select: false
			}, {
				text: '什么是“可用余额”？',
				text1: '截止目前可用于购买理财产品的账户金额。',
				select: false
			}, {
				text: '什么是“投资中金额”？',
				text1: '截止目前所购买且还没结束的理财产品总金额。',
				select: false
			}, {
				text: '什么是“理财券余额”？',
				text1: '未使用且在有效期内的理财券余额之和。',
				select: false
			}, {
				text: '什么是“待结算收益”？',
				text1: '截止目前所购买且还没结束的理财产品总收益（利息）。',
				select: false
			}, {
				text: '什么是“已结算收益”？',
				text1: '截止目前所购买的理财产品且到账的收益（利息）之和。',
				select: false
			}, {
				text: '什么是“资产总额”？',
				text1: '可用余额 + 理财金额（不含理财券金额）。',
				select: false
			}, {
				text: '什么是“项目总额”？',
				text1: '指该理财项目所募集的总资金。',
				select: false
			}, {
				text: '什么是“起投金额”？',
				text1: '指理财产品支持最少购买金额。',
				select: false
			}, {
				text: '什么是“可投金额”？',
				text1: '指目前该理财产品剩余可投资金额。',
				select: false
			}, {
				text: '什么是“封闭期”？',
				text1: '投资期限开始至结束之间的时间。',
				select: false
			}, {
				text: '什么是“到期时间”？',
				text1: '指封闭期结束的时间。',
				select: false
			}, {
				text: '什么是“起息日”？',
				text1: '指购买的理财产品正式起息的日期。',
				select: false
			}, {
				text: '什么是“到期还本付息”？',
				text1: '又称到期一次还本付息，是指投资人在投资期限内不是按月偿还本息，而是封闭期后一次性归还本金和利息。',
				select: false
			}]
		};
	},
	methods: {
		tab4: function (todos3, index) {
			/*默认切换类的动作*/
			todos3.forEach(function (el) {
				el.select = false;
			});
			//				todos3[index].select = true;
			if (this.seen == false) {
				todos3[index].select = true;
				this.seen = true;
			} else {
				todos3[index].select = false;
				this.seen = false;
			}
		}
	}
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			activeClass: 'select',
			seen: false,
			todos1: [{
				text: '如何选择理财产品？',
				text1: '新华金典提供多类理财产品，周期从15天—178天不等，可根据自己实际情况选择。',
				select: false
			}, {
				text: '如何购买理财产品？',
				text1: '1．已注册账户：成功登录新华金典账户，点击“理财产品”按钮，选择心仪的理财产品，点击底部的“立即投资”，输入购买金额并点击“立即支付”，即可完成购买成功。<br/>2．未注册账户：请先注册新华金典账号，并进行实名认证；具体参考注册流程。',
				select: false
			}, {
				text: '新华金典的理财收益是多少？',
				text1: '根据项目标的不同、周期不同，产品收益不同，具体可下载新华金典官方APP进行了解和购买。',
				select: false
			}, {
				text: '预估收益如何计算？',
				text1: '预估收益 = 投资总金额×（年化收益率/365）×投资期限（天）',
				select: false
			}, {
				text: '理财产品什么时候起息？',
				text1: '所购买的产品将在T+1个工作日起息。',
				select: false
			}, {
				text: '购买理财产品后，我能提前赎回吗？',
				text1: '为了保护投资人的利益，不提供提前赎回。',
				select: false
			}, {
				text: '购买产品到期后，本金和利息什么时候到新华金典账户？',
				text1: '理财产品到期后，资金T+1个工作日返还到新华金典账户中。',
				select: false
			}, {
				text: '最低投资额？',
				text1: '根据产品不同，起投金额不同，请参看具体产品。',
				select: false
			}, {
				text: '为什么我无法进行投资？',
				text1: '若无法进行投资，可能是以下原因：<br/>1.未通过实名认证。<br/>2.未绑定银行卡。<br/>3.账户余额不足。<br/>4.理财产品当前状态为售罄。<br/>5.账户为冻结状态。<br/>若仍有疑问，可致电我司客服。',
				select: false
			}]
		};
	},
	methods: {
		tab2: function (todos1, index) {
			/*默认切换类的动作*/
			todos1.forEach(function (el) {
				el.select = false;
			});
			//				todos1[index].select = true;
			if (this.seen == false) {
				todos1[index].select = true;
				this.seen = true;
			} else {
				todos1[index].select = false;
				this.seen = false;
			}
		}
	}
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			activeClass: 'select',
			seen: false,
			todos2: [{
				text: '如何进行资金充值？',
				text1: '选择“我的”页面，点击“充值”按钮，输入充值金额点击“确认充值”进入第三方支付充值页面，验证手机号码后，点击确认付款即可充值成功。',
				select: false
			}, {
				text: '最低充值金额是多少？',
				text1: '100元起充。',
				select: false
			}, {
				text: '充值手续费怎么收取？',
				text1: '暂不收取充值手续费。',
				select: false
			}, {
				text: '充值金额到账时间？',
				text1: '即时到账，如遇到网络繁忙、节假日等，可能会延迟。',
				select: false
			}, {
				text: '充值失败，怎么办？',
				text1: '充值失败订单的金额如果银行已扣费成功那将会在1-7个工作日（如遇双休日或法定节假日顺延）返回银行原卡。您可以再次尝试充值，若还未能解决问题，请致电我们客服热线，客服专员会帮助您解决问题。',
				select: false
			}, {
				text: '提现规则？',
				text1: '（1）提现大于1元即可提现，每天只能提现一次，提现额度没有限额；<br/>（2）提现资金到账时间为及时到账，节假日顺延；<br/>（3）充值提现都是0手续费；<br/>（4）同卡进出。',
				select: false
			}, {
				text: '查询可提现金额？',
				text1: '成功登录后，选择“我的”页面查看可用余额。',
				select: false
			}, {
				text: '提现需要多长时间到达银行账户？',
				text1: '工作日17:30前提现，当天到达银行账户；17:30后提现，隔天到达银行账户。（节假日顺延）',
				select: false
			}, {
				text: '为什么银行已扣款，但平台账户余额没有增加？',
				text1: '若银行已扣款，可能由于银行系统原因，资金没有实时同步到第三方支付平台。若长时间还没有到账，可致电我司客服。',
				select: false
			}, {
				text: '如何查看交易记录？',
				text1: '成功登录新华金典账户，选择“ 我的”页面 ，点击“交易记录”即可查看历史交易记录。',
				select: false
			}, {
				text: '如何查看投资记录？',
				text1: '成功登录新华金典账户，选择“ 我的”页面 ，点击“我的投资”即可查看相关投资记录。',
				select: false
			}]
		};
	},
	methods: {
		tab3: function (todos2, index) {
			/*默认切换类的动作*/
			todos2.forEach(function (el) {
				el.select = false;
			});
			//				todos2[index].select = true;
			if (this.seen == false) {
				todos2[index].select = true;
				this.seen = true;
			} else {
				todos2[index].select = false;
				this.seen = false;
			}
		}
	}
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			msg1: '新华金典财富管理股份有限公司隶属于中国集团公司促进会下属公司文澜实业，由北京新华智慧信息技术研究院参股，在杭州铺设的创新型金融公司，致力于为用户提供优质多元的投资理财产品和专业定制化的服务，打造更契合用户需求的财富增值和管理方案，为用户和社会创造更多价值，为社会营造诚信健康的金融环境，合力推动普惠金融发展。',
			msg2: '“新华金典”为公司于2016年成功注册的认证商标，是新华网认可的理财平台。核心运营成员为多年银行从业者，有丰富的互联网创新产品管理经营，曾组建多个运行优良的平台项目，拥有丰渥的产品渠道和资源。在新华网的推动和国企资源的实力培育，核心成员灵活的操作和机动的手段下，公司以创建安全、专业、便捷、高效的多元金融信息服务中心为己任，建立一站式投资理财服务平台。',
			msg3: '中国集团公司促进会成立于1987年国务院发布《关于组建和发展企业集团的几点意见》之际，是经民政部注册登记的全国性社团法人。业务主管部门是国务院国有资产监督管理委员会，业务指导部门是中华人民共和国商务部。从诞生之日起，就肩负着推动、指导组建和发展企业集团的历史使命。23年来，为完成这一历史使命，中国集团公司促进会进行了坚持不懈的努力，做出了应有的贡献。',
			msg4: '中国集团公司促进会现有以中央企业为主的大型集团公司会员近两百多家，涉及军工、石油化工、电力、冶金、煤炭、汽车、重大机电装备、电信、民航、建筑等行业，大多是世界500强和中国百强企业。',
			msg5: '中国集团公司促进会的主要任务是，参与国家宏观经济政策咨询，提供经济政策建议；在政府和企业之间发挥桥梁纽带作用，反映企业诉求和建议；接受委托开展课题研究，提供培训、咨询、研究等智力服务；组织国内外企业交流合作，为大集团大公司自主创新、跨国经营、提升管理发挥服务推进作用。'
		};
	}
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			recordNum: '',
			cjr: '',
			idCardCjr: '',
			realName: '',
			idcard: '',
			coupon: '',
			carDingf: '',
			carDingfAddress: '',
			copies: '',
			st: '',
			et: '',
			lcqx: '',
			annualEarnings: '',
			jkyt: '',
			insert: ''

		};
	},
	created: function () {
		this.onReload(); //定义方法
	},
	methods: {
		onReload() {
			var auth = this.$route.query.auth;
			var source = this.$route.query.source;
			var contractId = this.$route.query.contractId;
			this.$http.post('/Product/wapIndex/showContract', {
				parameters: '{"authorization":"' + auth + '","contractId":"' + contractId + '"}'
			}).then(res => {
				if (res.data.end == 'ok') {
					this.recordNum = res.data.recordNum;
					this.cjr = res.data.cjr;
					this.idCardCjr = res.data.idCardCjr;
					this.realName = res.data.product.realName;
					this.idcard = res.data.product.idcard;
					this.carDingf = res.data.product.carDingf;
					this.carDingfAddress = res.data.product.carDingfAddress;
					this.copies = res.data.copies;
					this.st = res.data.st;
					this.coupon = res.data.coupon;
					this.et = res.data.et;
					this.lcqx = res.data.lcqx;
					this.insert = res.data.insert;
					this.annualEarnings = res.data.product.annualEarnings;
					this.jkyt = res.data.product.jkyt;
				}
			});
		}
	}
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			recordNum: '',
			cjr: '',
			coupon: '',
			idCardCjr: '',
			realName: '',
			idcard: '',
			carDingf: '',
			carDingfAddress: '',
			copies: '',
			st: '',
			et: '',
			lcqx: '',
			annualEarnings: '',
			jkyt: '',
			insert: ''

		};
	},
	created: function () {
		this.onReload(); //定义方法
	},
	methods: {
		onReload() {
			var auth = this.$route.query.auth;
			var source = this.$route.query.source;
			var contractId = this.$route.query.contractId;
			this.$http.post('Product/wapIndex/showContract', {
				parameters: '{"authorization":"' + auth + '","contractId":"' + contractId + '"}'
			}).then(res => {
				if (res.data.end == 'ok') {
					console.log(res.data);
					this.recordNum = res.data.recordNum;
					this.cjr = res.data.cjr;
					this.idCardCjr = res.data.idCardCjr;
					this.realName = res.data.product.realName;
					this.idcard = res.data.product.idcard;
					this.carDingf = res.data.product.carDingf;
					this.carDingfAddress = res.data.product.carDingfAddress;
					this.copies = res.data.copies;
					this.st = res.data.st;
					this.coupon = res.data.coupon;
					this.et = res.data.et;
					this.lcqx = res.data.lcqx;
					this.insert = res.data.insert;
					this.annualEarnings = res.data.product.annualEarnings;
					this.jkyt = res.data.product.jkyt;
				}
			});
		}
	}
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_date_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			list: []
		};
	},
	filters: {
		formatDate(time) {
			var date = new Date(time);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_date_js__["a" /* formatDate */])(date, 'yyyy-MM-dd');
		}
	},
	methods: {
		onInfinite() {
			var currentPage = Math.floor(this.list.length / 20 + 1);
			var auth = this.$route.query.auth;
			var source = this.$route.query.source;
			this.$http.post('/Product/User/findMCoinRecordList', {
				parameters: '{"authorization":"' + auth + '","currentPage":"' + currentPage + '","pageSize":"20"}'
			}).then(res => {
				if (res.data.end == 'ok') {
					if (res.data.list.length) {
						this.list = this.list.concat(res.data.list);
						this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
						if (currentPage == res.data.allPage) {
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
						}
					} else {
						this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
					}
				} else if (res.data.end == 'noData') {
					this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
				}
			});
		}
	},
	components: {
		InfiniteLoading: __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading___default.a
	}
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			invit: '',
			friend: '',
			money: '',
			mask: false,
			dis: false
		};
	},
	created: function () {
		this.invitation(); //定义方法
	},
	mounted: function () {
		//钩子函数，等于vue1.0中的ready
		this.$nextTick(function () {
			__webpack_require__(160);
		});
	},
	methods: {
		invita: function () {
			//				var auth = this.$route.query.auth;
			//				var username = this.$route.query.username;
			var auth = 'b74c8700-1c3e-4ebf-802f-0cfb3691924f';
			var username = '18758263215';
			var _this = this;
			_this.dis = true;
			setTimeout(function () {
				_this.dis = false;
			}, 500);
			_this.$http.post('/Product/User/showMyInvitation', {
				parameters: '{"authorization":"' + auth + '","username":"' + username + '"}'
			}).then(function (res) {
				//						var source = this.$route.query.source;
				var url = res.data.inviteURL;
				var inviteId = res.data.inviteId;
				console.log(res.data);
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

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
				if (res.data.end == 'ok') {

					if (isAndroid) {
						JSInterface.showInviteFriendDialog(inviteId, url);
						return;
					}
					if (isIOS) {
						passValue(inviteId, url);
						loadURL("huoq://btnInvite");
						return;
					}
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		invitation: function () {

			// var auth = this.$route.query.auth;
			// var username = this.$route.query.username;
			var auth = 'b74c8700-1c3e-4ebf-802f-0cfb3691924f';
			var username = '18758263215';
			var _this = this;
			_this.$http.post('/Product/User/showMyInvitation', {
				parameters: '{"authorization":"' + auth + '","username":"' + username + '"}'
			}).then(function (res) {
				alert('good');
				var w = $(".cont1 .ewm").width();
				var wpx = w + "px";
				if (res.data.end == 'ok') {
					alert(_this.friend);
					_this.invit = res.data.inviteId;
					_this.money = res.data.inviteEarn;
					_this.friend = res.data.inviteNum;
					$(".cont1 .ewm").height(wpx);
					$(".ewm").qrcode({
						text: res.data.inviteURL,
						width: w,
						height: w
					});
				} else {
					_this.mask = true;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		nologin: function () {
			var source = this.$route.query.source;
			this.start(source);
		}
	}
});

/***/ }),
/* 50 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 51 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			commonClass: 'nav-item',
			activeClass: 'active',
			items: [{
				text: '账户相关',
				active: true
			}, {
				text: '理财产品',
				active: false
			}, {
				text: '充值/提现',
				active: false
			}, {
				text: '名词解释',
				active: false
			}]
		};
	},
	methods: {
		navClickEvent: function (items, index) {
			/*默认切换类的动作*/
			items.forEach(function (el) {
				el.active = false;
			});
			items[index].active = true;
			/*开放用户自定义的接口*/
			//      this.$emit('navClickEvent',items,index);
			switch (index) {
				case 0:
					this.$router.push({
						path: '/question/account'
					});
					break;
				case 1:
					this.$router.push({
						path: '/question/matters'
					});
					break;
				case 2:
					this.$router.push({
						path: '/question/recharge'
					});
					break;
				case 3:
					this.$router.push({
						path: '/question/explain'
					});
					break;
			}
		}
	}
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_date_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {
			list: [],
			date: '',
			nojilu: false,
			jilu: true,
			show: false
		};
	},
	filters: {
		formatDate(time) {
			var date = new Date(time);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_date_js__["a" /* formatDate */])(date, 'yyyy-MM-dd');
		}
	},
	methods: {
		onInfinite() {
			var currentPage = Math.floor(this.list.length / 20 + 1);
			var auth = this.$route.query.auth;
			var source = this.$route.query.source;
			this.$http.post('/Product/User/loadInviteEarnRecord', {
				parameters: '{"authorization":"' + auth + '","currentPage":"' + currentPage + '","type":"1"}'
			}).then(res => {
				if (res.data.end == 'noData') {
					this.nojilu = true;
					this.jilu = false;
				} else {
					this.nojilu = false;
					this.jilu = true;
					if (res.data.list.length) {
						this.list = this.list.concat(res.data.list);
						this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
						if (currentPage === res.data.allPage) {
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
						}
					} else {
						this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
					}
				}
			});
		}
	},
	components: {
		InfiniteLoading: __WEBPACK_IMPORTED_MODULE_1_vue_infinite_loading___default.a
	}
});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//

/***/ }),
/* 55 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_libs_jquery_1_11_2_min_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_libs_jquery_1_11_2_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_libs_jquery_1_11_2_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data: function () {
    return {
      username1: this.$route.query.username
    };
  },
  mounted: function () {
    //钩子函数，等于vue1.0中的ready
    this.$nextTick(function () {
      __webpack_require__(60);
    });
  },
  methods: {
    iconClose: function () {
      $(".mceng.fixed,.share-login,.icon-close").hide();
    },
    warn_hide: function () {
      $("#warn").fadeOut(1000);
    },
    warn_show_hide: function () {
      $("#warn").show();
      setTimeout(this.warn_hide, 1000);
    },
    down: function () {
      //系统判断
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      var wal = navigator.userAgent;
      var num = wal.toLocaleLowerCase().indexOf("micromessenger", 0);
      var ua = window.navigator.userAgent.toLowerCase();
      this.$http.get('/Product/versionUpdate?type=1&version=0.0').then(function (res) {
        if (isAndroid) {
          if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/QQ/i) == "qq") {
            $("#imgwx").show();
            return false;
          } else {
            window.location.href = res.data.obj.path;
          }
        } else {
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.allyoubank.xinhuagolden";
            return false;
          } else {
            window.location.href = "https://itunes.apple.com/us/app/%E6%96%B0%E5%8D%8E%E9%87%91%E5%85%B8/id1267250937?l=zh&ls=1&mt=8";
          }
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    regist: function () {
      var username = $("#phoneNum").val();
      if (!/^[1][345789][0-9]{9}$/.test(username)) {
        $("#warn").text("手机号码格式错误");
        this.warn_show_hide();
        return;
      }
      $("#username").val(username);
      $("#password").val("");
      $("#smsValidateCode").val("");
      $(".mceng.fixed,.share-login,.icon-close").show();
      $(".invitation-code input").val(this.$route.query.inviteId);
    },
    getValidateCode: function () {
      var i = 120;
      var _this = this;
      var intervalId = "";
      var isGoIn = true;
      if (!isGoIn) return false;
      var username = $("#username").val(); //手机号
      if (!/^[1][345789][0-9]{9}$/.test(username)) {
        $("#warn").text("手机号码格式错误");
        this.warn_show_hide();
        return false;
      }
      isGoIn = false;
      _this.$http.post('/Product/sendSMSMessage', {
        parameters: '{"userName":"' + username + '"}'
      }).then(function (res) {
        if ("exists" == res.data.end) {
          $("#warn").text("手机号码已被注册");
          _this.warn_show_hide();
          isGoIn = true;
        } else if ("ok" == res.data.end) {
          var send = $("#getValidateCode");
          var wait = 120;

          function time(o) {
            if (wait == 0) {
              o.attr("disabled", false);
              o.val("获取验证码");
              wait = 120;
              console.log(wait);
            } else {
              o.attr("disabled", true);
              o.val("重新发送(" + wait + ")");
              wait--;
              setTimeout(function () {
                time(o);
              }, 1000);
            }
          }

          time(send);
          $("#warn").text(res.data.message);
          _this.warn_show_hide();
        } else {
          $("#warn").text(res.data.message);
          _this.warn_show_hide();
        }
        return false;
      }).catch(function (err) {
        console.log(err);
      });
    },
    wapRegisterUser: function () {
      var _this = this;
      var password1 = $("#password").val(); //密码
      var smsValidateCode = $("#smsValidateCode").val();
      $("#inviteId").val($("#invite").val());
      var reg3 = /^[0-9]{6}$/;
      var test = new RegExp(/^\w{6,16}$/);
      if (!reg3.test(smsValidateCode)) {
        $("#warn").text("验证码格式有误");
        this.warn_show_hide();
        return;
      }
      if (!/^\w{6,16}$/.test(password1)) {
        $("#warn").text("密码由6-16个字母、数字或下划线组成");
        this.warn_show_hide();
        return;
      }
      this.$http.post('/Product/phoneRegister', {
        //registPlatform: this.registPlatform,
        inviteId: $('#invite').val(),
        username: $('#username').val(),
        smsValidateCode: smsValidateCode,
        password: password1
      }).then(function (res) {
        if ("ok" == res.data.end) {
          $(".mceng.fixed,.share-login,.icon-close").hide();
          $(".cont1").hide();
          $(".cont3").show();
        } else if ("err" == res.data.end) {
          $("#warn").text(res.data.message);
          _this.warn_show_hide();
        } else {
          $("#warn").text(res.data.message);
          _this.warn_show_hide();
        }
        $(this).attr("disabled", true);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_common_js__ = __webpack_require__(61);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function () {
    return {
      demoEvents: [{
        date: '2016/12/15',
        title: 'eat',
        desc: 'longlonglong description'
      }, {
        date: '2016/11/12',
        title: 'this is a title'
      }],
      active: false,
      showimg: false,
      bol: true,
      day: '',
      totalPoint: '',
      addday: '',
      jin: false,
      mask: false,
      dianji: '点击签到'
    };
  },
  created: function () {
    this.mSignInfomation(); //定义方法
  },
  methods: {
    mSignInfomation: function () {
      var _this = this;
      var auth = _this.$route.query.auth;
      _this.$http.post('/Product/User/mSignInfomation', {
        parameters: '{"authorization":"' + auth + '"}'
      }).then(function (res) {
        if (res.data.end == 'ok') {
          if (res.data.isSign == 'yes') {
            _this.dianji = '已签到';
            _this.jin = true;
          } else {
            _this.jin = false;
          }
          _this.day = res.data.signDays;
          _this.totalPoint = res.data.totalPoint;
        } else {
          _this.mask = true;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    nologin: function () {
      var source = this.$route.query.source;
      this.start(source);
    },
    toInviteFriend: function () {
      this.stop();
    },
    change: function () {
      var _this = this;
      var auth = _this.$route.query.auth;
      if (this.bol) {
        _this.$http.post('/Product/User/saveMSignIn', {
          parameters: '{"authorization":"' + auth + '"}'
        }).then(function (res) {
          if (res.data.end == 'ok') {
            _this.dianji = '已签到';
            _this.active = true;
            _this.showimg = true;
            _this.totalPoint = res.data.totalPoint;
            _this.day = res.data.signDays;
            _this.addday = res.data.point;
          } else {
            _this.start();
          }
        }).catch(function (err) {
          console.log(err);
        });
        this.bol = false;
      } else {
        return false;
      }
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'hello',
	data: function () {
		return {};
	},
	created: function () {
		this.loadQxt(); //定义方法
	},
	mounted: function () {
		//钩子函数，等于vue1.0中的ready
		this.$nextTick(function () {
			__webpack_require__(158);
			__webpack_require__(157);
		});
	},
	methods: {
		loadQxt: function () {
			var profits;
			var dates;
			var source = this.$route.query.source;
			var authorization = this.$route.query.authorization;
			this.$http.post('/Product/statistics/queryUserProfit.action', {
				parameters: '{"authorization":"' + authorization + '"}'
			}).then(function (res) {
				if (res.data.status == "ok") {
					profits = res.data.profit;
					dates = res.data.date;
					$('#qxt').highcharts({
						title: {
							text: '收益曲线图',
							x: 0
						},
						xAxis: {
							categories: dates
						},
						yAxis: {
							title: {
								text: '收益'
							},
							plotLines: [{
								value: 0,
								width: 1,
								color: '#808080'
							}],
							min: 0
						},
						tooltip: {
							valueSuffix: '元'
						},
						legend: {
							layout: 'vertical',
							align: 'right',
							verticalAlign: 'middle',
							borderWidth: 0
						},
						series: [{
							name: '',
							data: profits
						}]
					});
				}
				//					else if(res.data.status=="noLogin"){
				//						alert(res.data.json);
				//					}else {
				//						alert("系统繁忙，请稍后重试");
				//					}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 60 */
/***/ (function(module, exports) {

//系统判断
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

(function () {
	//清除显示
	$(".input").focus(function () {
		$(this).css("color", "#555");
		$(".yzm .downTime").css("color", "#f4583f");
		$(this).siblings(".icon-clear").show();
		$(this).parent().siblings(".relative").find(".icon-clear").hide();
		$(this).parent().parent().siblings(".icon-clear").show();
		$(this).parents().siblings("dl").find(".icon-clear").hide();
	});
	//清除内容
	$(".icon-clear").click(function () {
		$(this).siblings().val("");
		$(this).siblings("dt").find(".val-n").val("");
	});

	$(".input").blur(function () {
		var this_ = $(this);
		if ($(this).val() == "") {
			this_.css("color", "#999");
		}
	});
	//密码透明
	$(".icon-close-eye").click(function () {
		if ($(this).siblings(".input").val() != "") {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").siblings(".input").attr("Type", "password");
			} else {
				$(this).addClass("active").siblings(".input").attr("Type", "text");
			}
		}
	});

	//4秒关闭
	setTimeout(function () {
		$(".mceng_warn").hide();
	}, 4000);

	if (isiOS) {
		//FastClick.attach(document.body);
	}
})();

/**是否为手机格式;11位;
 * @param val
 * @returns
 */
function isPhoneNumber(val) {
	var test = new RegExp(/^[1][345789][0-9]{9}$/);
	return test.test(val);
}

/**
 * 去除左右两边的空格<br>
 * 判断该值为否为"";
 * 
 * @param val
 *            object
 * @returns <b>true：</b>等于"";<br>
 *          <b>false：</b>不等于"";
 */
function isEmpty(val) {
	var obj = val.replace(/ /g, "");
	return obj.length > 0 && obj != "" ? false : true;
}

/**是否为密码格式;6~16位;下划线字母或数字;
 * @param val
 * @returns
 */
function isPassword(val) {
	var test = new RegExp(/^\w{6,16}$/);
	return test.test(val);
}

/**
 * 该值是否为价格的格式; 例如:1、21.12、12.0、0.1222；
 * 
 * @param val
 *            object
 * @returns <b>true：</b>为价格的格式;<br>
 *          <b>false：</b>不是价格的格式;
 */
function isPrice(val) {
	var test = new RegExp(/^[0-9]+(\.[0-9]+)?$/);
	return test.test(val);
}

/**
 * 是否为0到9的纯数字;
 * 
 * @param val
 *            object
 * @returns <b>true：</b>纯数字;<br>
 *          <b>false：</b>不是纯数字;
 */
function isOnlyNumber(val) {
	var test = new RegExp(/^[0-9]+$/);
	return test.test(val);
}

/**检查是否是正确的银行卡
 * 
 */
function checkBankNum(str) {
	if (str == "" || !isOnlyNumber(str) || str.length < 16 || str.length > 19) {
		return false;
	} else {
		return true;
	}
}

/**产生随机数；
 * @param len 随机数长度
 * @returns {String}
 */
function randomString(len) {
	len = len || 32;
	//alert(len);
	//console.log(len);
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	/** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
	var maxPos = $chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}

function addHistoryToLocal(moneyId, title, nickNames, earnings, tzqx) {
	/*var historyList={};
 historyList.title = title;
 historyList.nickNames = nickNames;
 historyList.earnings = earnings;
 historyList.tzqx = tzqx;*/
	var str = "{";
	str += "\"title\":\"" + title + "\",";
	str += "\"nickNames\":\"" + nickNames + "\",";
	str += "\"earnings\":\"" + earnings + "\",";
	str += "\"tzqx\":\"" + tzqx + "\"";
	str += "}";
	//JSON.stringify(historyList);
	//alert(1);
	//alert(str);
	//localStorage.removeItem(moneyId);
	//localStorage.getItem(localStorage.key(i));
	//var storageLength = localStorage.length;
	//for(var i=0;i<storageLength;i++){
	//	localStorage.setItem(localStorage.key(i),localStorage.getItem(localStorage.key(i)));
	//}
	localStorage.setItem(moneyId, str);
}

/**返回格式为 yyyy-MM-dd
 * @param time 时间的time;
 * @returns {String} yyyy-MM-dd
 */
function format(time) {
	var myDate = new Date(time);
	var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	var money = myDate.getMonth() + 1 + 100; //获取当前月份(0-11,0代表1月)
	var date = myDate.getDate() + 100; //获取当前日(1-31)
	money = money.toString().substring(1);
	date = date.toString().substring(1);
	return year + "-" + money + "-" + date;
}

/**返回格式为 yyyy-MM-dd
 * @param time 时间的time;
 * @returns {String} yyyy-MM-dd
 */
function formatMMdd(time) {
	var myDate = new Date(time);
	var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	var money = myDate.getMonth() + 1 + 100; //获取当前月份(0-11,0代表1月)
	var date = myDate.getDate() + 100; //获取当前日(1-31)
	money = money.toString().substring(1);
	date = date.toString().substring(1);
	return money + "-" + date;
}

function fmoney(s) {
	var n = 0;
	n = n >= 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(); //,   
	// r = s.split(".")[1];   
	var t = "";
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
	}
	return t.split("").reverse().join(""); // + "." + r;   
}

/**比较两个时间的相差天数;不包含开始时间, 例如 18号到20号,相差2天;
 * @param sDate1 开始时间;
 * @param sDate2 结束时间;
 */
function DateDiff(sDate1, sDate2) {
	//sDate1和sDate2是2006-12-18格式  
	var aDate, oDate1, oDate2, iDays;
	aDate = sDate1.split("-");
	oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); //转换为12-18-2006格式  
	aDate = sDate2.split("-");
	oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数  
	return iDays;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
		install(Vue, options) {
				Vue.prototype.start = function () {
						var u = navigator.userAgent;
						var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
						var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
						//to login
						//  if(!source || source == ''){
						//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
						//      return;
						//  }
						if (isIOS) {
								loadURL("huoq://btnLogin");
								return;
						}
						if (isAndroid) {
								JSInterface.toLogin();
								return;
						}
						//				  if(isAndroid){
						//		          	JSInterface.showInviteFriendDialog(usersId,URL);
						//		          	return;
						//		        }
						//		      if(isIOS){
						//		          	loadURL("huoq://btnInvite");
						//		            return;
						//		      }
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
				};
		}
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_tap__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_v_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_v_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_event_calendar_dist_style_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_event_calendar_dist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_event_calendar_dist_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_event_calendar__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_event_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_event_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





 //1.1.10之后的版本，css被放在了单独的文件中，方便替换

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vue_event_calendar___default.a, { locale: 'zh' }); //可以设置语言，支持中文和英文
//import Axios from 'axios'
//import VueAxios from 'vue-axios'
//import Qs from 'qs'

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_v_tap___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.start = function (source) {
			//判断操作系统
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			//to login
			//  if(!source || source == ''){
			//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
			//      return;
			//  }
			if (isIOS) {
						loadURL("huoq://btnLogin");
						return;
			}
			if (isAndroid) {
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
};

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.stop = function () {
			//判断操作系统
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

			if (isIOS) {
						loadURL("huoq://toInviteFriend");
						return;
			}
			if (isAndroid) {
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
};
//Vue.prototype.$ajax = axios
//Vue.use(VueAxios, Axios)
/* eslint-disable no-new */
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__webpack_require__(7));
const qs = __webpack_require__(19);
const http = __WEBPACK_IMPORTED_MODULE_7_axios___default.a.create({
			baseURL: __webpack_require__.i({"NODE_ENV":"production"}).API_ROOT,
			timeout: 10000,
			transformRequest: [function (data) {
						// Do whatever you want to transform the data
						return qs.stringify(data);
			}],
			withCredentials: true,
			responseType: 'json',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
/* harmony default export */ __webpack_exports__["default"] = (http);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$http = http;
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
			el: '#app',
			router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
			template: '<App/>',
			components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/anquan0.d29d571.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/anquan1.b2273ac.png";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABZCAYAAADII9YOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNDE4ZTRjMi02ZTBhLTMwNGItOTQ5NC1iNDkzNDU3ZjczZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzY5MEFCNkExRjQ3MTFFNzk0RDJBQThEQUVBMjkxNTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzY5MEFCNjkxRjQ3MTFFNzk0RDJBQThEQUVBMjkxNTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxM2M1YjM3LTEyOTItYTA0My1hZDczLThjMWRiNTgyNDkzZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDE4ZTRjMi02ZTBhLTMwNGItOTQ5NC1iNDkzNDU3ZjczZDEiLz4gPC9y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"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABZCAYAAADII9YOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNDE4ZTRjMi02ZTBhLTMwNGItOTQ5NC1iNDkzNDU3ZjczZDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjAwQjc1MDAxRjQ4MTFFN0EwMTlBOUNGODU2MEE2RkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjAwQjc0RkYxRjQ4MTFFN0EwMTlBOUNGODU2MEE2RkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmEyZjY0MTIwLWY5MzAtZDc0Yi04YjA4LTE5Mjc0N2VlYmQ4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDE4ZTRjMi02ZTBhLTMwNGItOTQ5NC1iNDkzNDU3ZjczZDEiLz4gPC9y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"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4REZFQ0JGMUIxN0VFNTExOEFFRkI2MTkxQjREM0M5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEE1MTlFMzRCRjAxMUU3QkU1QkU5RDY4NUNGRUU0RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEE1MTlFMjRCRjAxMUU3QkU1QkU5RDY4NUNGRUU0RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGRkYzIyNzMtMzdiYi01NzQyLTg4ZWEtMzc0N2VmYmMwZTg5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkVDQkYxQjE3RUU1MTE4QUVGQjYxOTFCNEQzQzkxIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAAXNSR0IArs4c6QAAAqxJREFUOBGVlU9o0mEYx/WnU4zRX5Mi6tClGAViGUkLnTAG1RZBMOhSHTo02CEIQgQ1bRKDDnWpQ3SJ2CFGrbYYEWnI0g6DsYMdgkURRbssljSsqX2exSu/tZ/O3wvPnnfP83w/Ps/L66vVYrHYE4mEx2azXaxUKiPs54iZXlp7e/sWIEmUNzRNewGowzQFgVYqlX7QyTD7WavVug/YBDCfWZhVCaLR6G6n0zkKzF+r1b4SPxuLxfIqv563qYJcLrcYCASetbW1HQF2AOsLBoPT2Wz2o6pp5jV9Mp1Of2fMM8ReYtsZczSVSp3Q1zTa1ztSBXSw5Pf7xxwORwddeRnzdDgc/pDJZIqqxsivAUnR1NTUb6/XO+ZyufYCOwSsLxQKfeZDZo0gEjMESaJQKCxzRs8B7cL8hHqBzQOblvz/qyFIChFV3G73hMfj2QrsKHaSMRcZs2AKJMXFYrGGcLKrq8sFqJNQD7BlYjk9rGlH+kKErwBIKISFATuIvZaArJZBUozwDbBfbLvp7jiwzcTkqpgDiQDhWwDf2PYAO+bz+Xbm8/nxVRdSCltcel1VNPpASwxu+jU6uYs5qtXqLdZl06BkMnkd0U0RAknF4/GrspdV//b/+7fhXyuQYbpYEXLTI7wMK0ClWBfE22Tny3sbyAAAOY8rQO4ogPJ2tTHyg4ODTiD3gFwg/wcbAHLfqLZhR3SygSf4AaJ+bIkzucSZPDKCSMywIyAb6eQh+T7sJ5DzQJ6IoNFaA4pEItuAjDBON6IFHrpzgCcbAVR81WgIdjDOY5KdHOw8nfQTy6riZr4OQrAHyCjFh4F8wcvj/66ZWJ+Tm+0Asp9xxtkLZI5Oes1ABCg/kJuAyLU/COQ9/hTgGUmaWXZ+IBfoIMJYM+Vy+enQ0NAnMwBV+xfPHgCJ+ESikQAAAABJRU5ErkJggg=="

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAABaCAYAAADeiB8qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4REZFQ0JGMUIxN0VFNTExOEFFRkI2MTkxQjREM0M5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMERFM0FFRTRCRjAxMUU3QkU1QkU5RDY4NUNGRUU0RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMERFM0FFRDRCRjAxMUU3QkU1QkU5RDY4NUNGRUU0RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGRkYzIyNzMtMzdiYi01NzQyLTg4ZWEtMzc0N2VmYmMwZTg5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkVDQkYxQjE3RUU1MTE4QUVGQjYxOTFCNEQzQzkxIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/guanyu.7bf09ca.png";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4REZFQ0JGMUIxN0VFNTExOEFFRkI2MTkxQjREM0M5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjQyNzE5NjRCNEExMUU3OTA2Rjk0MUI1RDM0RTE3QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjQyNzE5NTRCNEExMUU3OTA2Rjk0MUI1RDM0RTE3QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2QTMzNkNCNTg3QUU2MTFBMkE4RDhFRUY1MDE2RDk0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkVDQkYxQjE3RUU1MTE4QUVGQjYxOTFCNEQzQzkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nNdYBgAAAsZJREFUeNrUmT9oE1Ecx393pk2iKf4jFAcRIaRLMbYqRxwEow4WxUU3XYtQW8xQHXSsjioUVLo5OIhuogWRFkHUgLVGXFq7iIOUUqu2sU1bqN/f8Ws5Si7J3b0kd1/4DKF97324d/nd7+W03wNxcplmkAbHwQGQBHtATP6+AH6CSfAFjIL3YNnNYpoL0Q5wGZwHuxyOnQNPwUMw7mSg7uB/U+AFGAPdLiQ5O2Usz/FS5lQmGgF3wEfQxbtA3sNznJY578oankQTcl9lQYjUh+e8Kmsk3IoeAe/AQap9eI0PwHAqygNGQJzql93gtZ2sbrPdzy1lpp6JydqJSqIRKR9xalzi4hApJ3rb6z0ZPfeYYt05CiUveb1nb9mJck3rdV1vtu4zJZvbT9GW+H7Soju8Xtk+eeJtlAfr1XRVgppSvRQ2LpqCa8UCaeFtqkoXO52xinZIAXb2sDduUlNbhkJ7203BpbeP8PmYKawoXeI2vr71PU6fOHwVoyf7TMnVH1+p8OQKFd/0q/5iaeJmXtGwNBiOw4IrEyO0nBuoZRVgt56QFNjtTkev5AdN6hB2M3jrM+T/ZHQnrVYDk9KlM/d7kizaGgDRVhZtCYBoi04BCYvOB8BznkWnAyA6rcu52++ZZNF8AETzupyN/J5RFs2BPz6W/MsnVBYtgmc+FuXzU3G9jt73segD65npE3jlQ0l2Gtt8uLvOvbCPJNnlWqnD3WfAnXDWy+wLQ4Z5Il37992r6KC1dG5+1t8QYU9RIJkXF9sfIBbBBTDTwC2fkXPSYjlRzhQ4CwoNkCzI2lOluqdS4YfACTBbR8lZWTNn1+ZRGdm0inu2ivAaR+0kK4lyvonsvRqVrlWZO12pi6umw1+SknUYDCuUHJY5s7IGeRW1lgz+LagTDIFfLuTmZOwhmavqFlNT+EKsjUq/EJsgBS/E/gswAP49m+d765BwAAAAAElFTkSuQmCC"

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/prompt.04b83d1.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/qiandao_xinhua2.65f5a9d.png";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAC0CAMAAABVJy5gAAABL1BMVEUAAAD/7cv/7Mr/8NT/79L/7c7/7c3/7tD/8NX/8NT/7s//7s7/7c3/7Mr/79H/8NX/79L/79T/7Mr/7c3/7Mn//PX+agD/+/JmZmb/+Ov/+e3/+u//9+j/9eP/8NP/8tv/8df/9N+9u7f///+VlJLf3df/vJ3/vaP/9ub/897/8dj/3cz+l2L39O7+mGf/9OH/4NRzc3Ln5d/OzMf+diN/fn3/79GKiYj/8tqqqKXv7eb/9ev/7c3+gT3/7c/+qoL/7eGzsq7/zbWgnpv+dRLX1M/+oXTFw7//xKn+cAr/9/X+jFD/5db+q4f+jVT/8+f+s5D/6sb/1cD/z7z/yZ/+rnH+p2f/8Or/xrD+tZb+nVb+gSb/6N//xJf/18j/79//0Kz+s3r+izf/w5b+mU9yTTAxAAAAFXRSTlMA/gTuPVBZM+S/qg6G4Y/5t2raGyAseLcKAAAXKUlEQVR42uzVO26FQAyFYSCCAl0apCjKg8nQXaahG1FY3v+ycmxmAZF8Cxf+t/Dp2N0/GqZ56Ym5ohQ5rCJmelvncehe0rgSsWrnyG1qz0Tr2NkbHr2S51LK9Rs57QJPVvb+YR87zIUc4Mdx7JHTgAN4YYe6+baruZDv57lFbjvPXdhVfTQe9wXmuYAc4k/pJ3KXwsAd7CVDfbEd+Ik4JZiD/Ob+jBymNMIO9ZSYJhP6TPU2f4a394Rd1SvNJvSFU77EHORfkevALupXTryY0HsZ+t7MvyPHNfVdpt6b0OkeejP/iNzW1O+pkwmd29BhHuTOE/U2dbai69Cb+XvktKauU7eiV0HH0HHbg9x3euExdUGvNnS89E3RY+fOA5Cib3jqVvT20mPo7vtjxwx2JAWBMPwUJv8kkzlUiiMHMMTIzRjj+7/RatlYdBTb2e5Ndsb+DtNNg4j1QYEj0mVTf0u/DC+T/iXSP97SfwAi/UOkfz0v/fMt/SewSP/8/6RHIrp9NUR1qVlNZPZrTDvMH2O/28DmBT/IDZ6gZu6k1xIds9+vYeasjw0093kV6QZAem6AS80YoGJNO2lwwJ7QtreZESBsJp1JTA29ScRNTzpE27vi3HFAYXICOHhMghuqmu6JF5RekxIAJsVoI8BZuTbsOQeC15UOYNhqFEQWI0EH0mvIPNsF35WuUejl9jnmgtIZJdSJdcA4rVe3Gy/LQJ4BAtA/Jd3IEGtoP6TsS8cBlbAMv7GXkI4SfH6l90AjH4V4dZhYt9ARQNxInzvmJL2VwrH0yrs1f0D5a+m2AZyX2+vFdE3ph3u6WhyWHM8KAJ+nf29oodOZEzW2lEKcok75zQxltECgib6b/pyTng2KhaCDvXN+Dek806zB0Gh02iLhgMCJTo1KkP2S47Nfg5a8qyvCBnNWOh2v01saamkC95zc02Nz24Iukd4fn94fZAKPGRPd7aeaeQqeDXMMFVv9M+mCXlaoj8NtdqzvC77KCOL8LT1h9vF6/JHQjM5ZFeh7Xeg+Lv1sTwbxG9JbkxgBmMRJ6YPDbJ3Ypn9M1FNJvdPs3AZzjfRelK74knMhwAUJjfcx1ElW56u4pnZniieD89K1YHW0isrSp8keq5UduwMau54FW+irvp2H3gF0Benr0Qi0wECgBQ3n0TmPnL/FyTZAJ36mb87nmXN8nXTdmSPZM9LVeis5fJVeO6BdrS/NzdxPw4nwK6WfeYFNYVCaTHr0Kd49EOzip4daHxyA1r5Welw8jo+kc14PzDlHa7xDo+OyAegusaf/IdfcdVwHgTD8FJFcI1NOAQgh0yHL8vu/0dH8DBnwZY+1pXeK3TghGPjm7jyEbi8r5XEAPKjwodRR96B+C93DoCLbFbTL4a+8p9DjzIIssdpfViIn6E6X2ReWyesFf5KhiyIrfP9faMPaKmyNM79gqx5zJOmWDLJcQF9QrQv0njou0r2l2weKZ4Y+4Iw7XSxC05IjdN4Yikh/LNPL2G2A/IkHLj5JhgNYqwB6ENP1vL1EblorUz8EzMJTnrL38EvouIUa+i300F5k3oLD4yB7s5FNXHmZj1LeCd2g64wHkoAVt+MTVY7RZoAWjucdpgU1ezMYL3Fc5UZxyNqlVmQcpK1N+CvvDTFd/qOAE0M/Q1dXovSJHVkO07TeQfdOO//HAW+EHmJNtLocfJp7pnImRYYL1dN585dxdEk8qg6gG+jPEzmFvsMqZw9Gl9ATcnSFjj0GlHpOBw/9/+yms6UjrXijpfvC23V7d2pUkOcugfpxDbVF2TNK+KY7qRizNc4qJhZ/5d5/A93WxeAJ/hm6lPFeoYuINvtDA063l1KbYLjrC2N6mFjWPbdTs6EVWVN8mt7nBthrwmaGM0UB/0PJtgLBD9DnHrosytEZug+Z/UDUPt7YXResXhySSpRug7cqLerQy6B/IrJ2Phw+Nd5mZuYzcqUn0IEseSTK3rV80GjurrZ3D105W2hIvoC+SYvF1ku8QTTMkUCVUZ0t1Tp8br6/3hmDlJFuwzydxb4N+j5bCYLYNPCTmxzlxwVq5vjYuh34YYPHlImGJ2730KF6XqBDzZSYDrCjdgDs7hZeJW1mjY1QVkw6Bb5RLK7lRx/oJHXyh6Br6MOm+XSJS9aiH5O9FOq+vraS2IL17MruujlWILqHTsrZIrwqMR1A8qhFKowG34vaiTi/qoZ93RXVGN6gr7zYxMvupbn3ELeXu3cJcF42zbwNkvD8v+aJ7awwADpQlZrDg09QZNtP0DfljBUsR+gI0xMkwlPD0jFVF4NSCRlZSjjdaUYDVqDvWL3FHEfo0CjnX53ISZZl2qYZUGwZkEJ380EYa++7YeK9v4c5udxGuM89dETq0qAjqTueOMJ0AtkNWFkyw04y5Ww0RZs7ddxlDwtV3TFYDm5XWE/yEbr0El8OfZGTI8TNeubUm7oY8ckV6smaoZLL1XGSc0a8LK4vf3/jm5JsZO0WJSTnwTfLAFTQxdICJx4Z2Fc3PfVtfi8RaR3jMabc8f2E8ZhpP+2JUgsQ5bXQ12nyfqrimzWYyYUOejQH0UeOZKIjuPBeQkeC6vV9jFj4kGUJeWENCTqLDHCNf6zMNpng0Dtk5kGDvOaPuzGGXcUu34csGHIu9NNMrJEY/07onxCkkyaBFflw+DyL6QAhVqGyHnsBdA8dLsbI5ya7Gm9ZnGqNWlySx7RFVqyCmSRQuJbW6SIgZVfmEt33s/civo0s4aXQ/7F3xioKA0EYvpyghRaCxXVb7cE1KUwQTbAROax9/5dxdjK7k1VChAk6wnytEQ1fZsd1s3/iNb/D6Q/zVKUz9dkTTZ1P6S57dDNIud+W3Z6pNgzQoZeAGd9UvB60bflgshSagb9zUp7jRNwDpwu/XAWDvg5nespWmvxjy0rX8K6ptK2yvWCrMt9PNvDH6zSUv/2Pa4cPGGf8W/0PvGH0nORblZ10f7olUXwGnEQhDiVwB8uc+Qw4c+bghNIpXcpKXTs/saVnQUPyHDkLFdPK1DlylBiJA7xpV0mMjOTESJn0Yy8b1rSrhJRn2bBHmXQs9WTdtGuDlLNzLHSZ9ILz3sG6aVcGKyfnlPdeiKRfodSj9ajdftFpIVcenUOhX2XSi846jPBJu1lXAjlPymFs75wXQulkHfo6FDtqD9YtEloBVOakHMoc+jk5F0pH6+mBTX/U2s36++mVOSqnRzWhc5AuYblZzFfrmYvasdjN+vtB51TmSbmbrVfzxWb5NQXfN/bOrrVtGArDJk3XrBntymbtorAFCtpa6WIXYgyMsTHBuNhjIZTsti37/79hcZLlNNE5cSL5s+S9auomVfzofFg6kvoXg7mPX4b2I/UWCJivgvncsw8u+j2nVPVO345y7AtjP1JvVMB8aeY58tHb055Tgfpz7AtjP1KvWzTzhZnPkfedqvRmMPp5pN64tpj/HA3eOBVqeD439jyfO1JvTsA8z+DmZn4+dKrV1WU+QLey9eMkexMCO18MwV1eOZWrf7Kkfjy3q36BoQPzk75Tg85O8tnWfI79aOpNCObO83nUkzOncgH1b0cH34ggoAPzOtS/vLtdUj+WztWuF4VRt3eXfac2XeVFVEcH34Q2C6OunBp1ntfDG5q6J6UM169iKT23JHWzHYaGnte3nzt1ajhYhnUjU+eMBe5KCWPc1RVGE5kyJWMuXAMZtqMDWhr6KqAPhk6tOs0dvKmpK8bE+kff064nKQOpIHQNZNsOUMhz7ex8oZjySGRukYRIuBBeGYaeO/dTp2a9BVM/OKhHjMm1sUXbVxPFtmSA3bodoIDl4jTJwGcryYQG6iWSreQHwhw6GPpbp271LUzdlSsTCxWTWqRluhQQsRTdDtof7IQu5GZLOY7d45tdWQp7QzfK3O1N3XTBk2AsXRlRtnVzUobKgLpVO0ATBtCxq9vysU/KfO3vJjaLl8DQ69VpnsCbrm0MFhgzxgLd9mqkTrcDcDECOu2WdOqRYroCC++ep+6nTv3qDfK1jYb+PVTMzwkrT0uoCSmDuG7eDsDq74IeM7YP9YyhCoy9e75KcdBzGtDFyMi/Q+YkGEvQ+JnLnwgviwK2ljRgatAOKtpw9M24lKd9K1TcwruPLpwm1DfasAAsyI+ZT9xFoOCBMQl7xHQ7aOY0IAH4Up5EHP44IEKWCviUB9AHQouNB/pOE+qd3JltWBDyuRZ3Is5/ckE+EsEDA29o1Q5QmGpWicJMV/1xqrAOKuAzvK2OLI03Hrg76TmN6P2LoH5YzrwhJPZx9N5aMi5uBwgY0tCna+be+gsohGaq9+TA0Hu9COnvnWb0Ln9os4eOeHcPvbmiPuhgjzR0iaSYCThu7b9MkPQwMIKeP7C9c5rRG6utp7h+I2Pc6ymDvMewHSCuCpKuENIPJEBNNKveGOaNoHsbbiD1xmlGZwAdqJvfbLCdAP917IKqhe5FvpZpU8MyygUBTX/9UdA3sM4RHcYcoJ85zejDfCS2VOgKH6ySh6Q914+z5/H9/fh59nht0A4I5kXQU6yxwDjcDk4e2mUCs+T95+iD04yGnzXoVrEU6BpD//00ZmuNn36b5hagFKDjdDO8sdEW3Rj/374h9M9DpyGVCx3Cn6IcQJEelsgB+4MldBUJAvoUbSu8N9hwCPrwD3gEM+hOQ+oZQg/56gFZ8lxIepOhg5jTonsyY5pmnw5vB0APPBeg43BjoielW3AzIn+Zdgz68HPJMd1TcCcp+6f16S9D9LeoZZwEKjOASCadnErqoQ/AS+Rb8Y65949lJ3JgYpHmR4tvz4yhmhlAhxlvErqvWSrqtyMwfCIMdCyRK/2RDUwdLiVMe87F9cAIPZhAD5bIaejkiJHauMDxJBS+l+zYI1sJgzN0buVPpkIIDs/LWUHePgbMX29uvsKr8e9D25FM9AE1Tnpxwu8L1Itrnys7NjijD8PaKzItonhiFHT25JqKhi4KoXPtFf4BZsOwo0OGYdsw4UKJLjJhqijJvR7T0MfX1UFXe0JPSOjdmnBBp1btlUmmSYZugR4ZDZ09Vgdd7gldkNC7NbWKFlHYK/KZJj9yCzTbBX1WPnS+J3RWCL1bRRRIuZS9hM9Q+cLdqedd0J9fF/SDy6VaUhi5o97YLJMb74I+flXQDy6MbEsJNKGAgSSfK1Z7Ur9f0d7Uiv39a4HeeAm0ttjBXhwJ4lPI66Ytgp7sCV0VQu/SYgdtWZO9BL76I4HK4iL3/uv7Qn9ubv4sf/q1dO+vJXs3W9bUjgWMhCTbbVWMtyeRE9SYOmDWJtPwXtOhBYynpRs6TKFKsgSxPY9suKHS0DkJvTtLlbVNCcrM3AVZbDxtzeCMR0JXG7NsE3g77r6C7mxKoG8/Yi9JVhBB7UxrhmGpyhe4sHMGFS7wzmw/UslGQ/RKFqiSa82EC3hxIkilBV48/u+8urLRUP9y41xGt1zonH6WU2ZTq1VAD4iZlOlm1w2h5XgxbdiRLcW0zQNrg85cWg8U9Ae3bOh0TIYgnmghHs0JVEc2D8yZ377cJrQd0OlyqQqggxv3CQvOttx4hDuEuBvbhFa2IbAP0ZCK6alJYWQl0MGEM7Sixt/2CDEeHaJObAhc3dbfMSTEVIVpbFECbQ8dxxagPmmitT1EiwG9Dmz9vdjk/7aSTf5h4E2S8zCJ8WIHe+jUBeVhMDN9WBatmu/AJv/5cR5fqjrOI2TAlqibC42XNdlDJ8NRjMCU2AoOpG+I1h/nUfXBPTFMuHgo83jfBYyMwQLGqqBDuyL9VwLLVTxtVxPZ8oN7ajiiK2Nr+YmnTa2CrdQpGrqbwuqnJUsOAQobRFZi9ZHrN4o2H9HVOzM4jM+ybiadcM6lMthurzLodCeVG21VIeHB/IDzIIUvVPZhfGe9UmgPP9Z57KZkmAx8YS3Q3YThmmo7WKFKKzp28+Ow16UDdr0d1GPPbUIAHVGwXzVfplDmXksP2M2Z/6jzKG3OLDfaqwk6besqQvcm0yS9ao7S/sfe+fU2DQMB/FPEj7yc1ENiCvcQIaQpgBCKVgt7E2Ek/cvDvv934OLGu9a4VMMKDUp+WrbW68PVv97ZTtLkHVv/326a/0myJ+ni38NLl1O2L38v4/Yh/Gjcjfim+b3zt6J8KOeifRHkxc1dgvKBpAufb5RQvTn7rh4KeVm5kDRPty7a3/bW06RzcffORbk4H4rbN4uHG8fD3Zts7Nx+W1Qc6sfFhVC/3rk3tfj8SdrSrYt2b50LfJJ0TnR3S93XMpjPN10cE6LdWXf75zjVk6S7RPfOZ+VjxGv31l2qJ0n/8MqfGDUrHy1euz+JilM9UbqcJDMrHy1OjZxOkyidq7tP9KGM3+/Wmy/qBSw36919do7rx3ed6FmPT3Wu74nS3w9x4QHh/nH5V133GO+4scR3hejlggXvU6UPc+GB8KyHlxM/P2JE8aVHn3DXhzTpry5cQCqRR5XAYxYyrvgGi/7ypadeJUv3Q/ro+jTst7HF94+j7wf1kUv/rhI5rZHji+9C9FOU/jMcL4t9pSK0e3tuZPyZDYHE93IsGeWpeMuB+LcpotFPUPoPFYCAqsg9vp8saH6Y8EWG5PgE6jAInvzQKk9YMqqeFdTd87Z7RNHopyf9fhkmum4KlZ92KEMgYLj2GXDhJvEJ0IEINVK3eemaiLYi3VPz4xVvBraFcoTRT076TgXUYJQtEZGAELH0+dJQTwOoAnaZMGB8QpezCLnf+vx3tnNkaiA8tCK2DboPB+oWUUXYTU76OhwNgZSBti/zHqt1eVz+A9bZYKzPSw8znRQgSz+tR3CKirCenPRNUNy3YHIN9lSu1dDmjjIqfZMNxuYP0nsC6R0aag7V4+Zx59lMTnowZJaSJEdya9CSPhHpy2wwlpfLeyDdDUY+Rpt3ELT5ARsb1CcnXQWgQdiGZdzWCCvushXgYdAPyQZDRWgJNJnz0gutfewEp5CKMHnpqmh0GUp3aeUnxQT5laVTP3vfUuO2UPoe8DjTa9BVl+11l+mz9Fj53INREemS6Sx9FOXdEDnpRPZU+gr2ucResHPb/W1c21zeIxOlFsAtdkPpMqbzf0cxkfMFyENUOukGdPEsvUANsMeOGqBZFfNEjllHpFNdxjKdwYa2ALYYw5LNYL/+xoP4tq3AWHKJ/Sy9YeXgafhnXrIxT+GQHlmPS0qVwJgWgqHxKRuMp7PSCTwoiwxTanYu0rEuud1PSMq6Ur/zNDnpv+/mzCvcF1HpTF4oGdWvtRu2q+AaJaweC1sNxlrlpcueJdW3zbthYwc0LDjM825Y46W30ucA1z3gAkwTSme3YHlzAa+OBJu+reW2+YBL9NDldo+VVRQubEsNR7TXPbSKhlUTCM4tdG5tY9g4Y5TDtg1obiI3F1HzodVf7Z2xasMwEIaFiz2YOINnJ6RTkg6NJ+FB8WhooHv7/i/S09myUrqknANn9H9PIPgQgfj03b+GFK7HyKBhiOLzGBn/X3ifP6a37Xc49u32Rb/qQ0sMGKJIZFzqinEpDEb+PX2i0jECnaJ0PHZIUfr4bOhDw8Ogx8+n8VnTuqQDSAeQDiAdQDp4mvQTpK+BUfpJLt2y9AbSV8DdU2UL6YmwoPRuKlEgMqScWKLoDlYeGmLpuOrKCc0ZeWio57oUF8UQFNNMaIpxXWrJjhxQzWIdOReKkd46tCuGO6GhGOmMhJdfbVigmPs2rKwCXU9xWLYOVOOdT2nYykgonY2Nf6CaJvbeSyOhmDc7eO0NzOukIUj5vNmhMBKyyoVVTaTd0wB1sJjdvLDJVZkRkU/bmrz2yw6o5eKVT9uaciNkw9Z54+b5/AqUQnJI+YGdb4yUbEtbulj7G4kHSulIDyn3u/i2mZGT1461k3iglj1Byl2dm0XIirKi695bYg8UYomeLnlVFo9c8x+v8lfzPm65egAAAABJRU5ErkJggg=="

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/seal.0cca0ec.png";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4REZFQ0JGMUIxN0VFNTExOEFFRkI2MTkxQjREM0M5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTJFRjA2QjRCNEExMUU3QTJEQUZENDQ5MTVGQzQ2MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTJFRjA2QTRCNEExMUU3QTJEQUZENDQ5MTVGQzQ2MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2QTMzNkNCNTg3QUU2MTFBMkE4RDhFRUY1MDE2RDk0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkVDQkYxQjE3RUU1MTE4QUVGQjYxOTFCNEQzQzkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QdukTQAABFVJREFUeNrEWVlsjFEUPrN0ZmhrH7WkpFHtA1VLqSUlWtWoLRHiAQ8iQWKJEg+WJ6EvEjwI4kUQD1QkIog9QlDaKOrBaGwlVJVaxiyd6Tjn/qc1rZn2v3f+GSf5Mm3+ufd+/z37GVPzbicoig0xBTETMQaRhRiMSOHnvxAfES7EU8QtxH2EX+UwkwLRcYi1iMWIfpJrvyEqEEcQj2UWmiW+m4u4iKhGrFYgSdKX19Iel3hPw4g6EPsQVYhS0gLELrTHHN5zP58RE9FMtqsyhBWMF9pzE5+RqUp0IuIeYizEX+iMB4h8WaK04CbCCYmT/ojr0ciao6j7QliYSaSk8NmZkWyks+NUqNykqedwsI5c0P5/yNMMAddJFbJO5kAx2huNaLmsTZoH5IOjaAckZU7+51nItwsC9c/Ac2EDhH6/lbXZPYgtkQJ+LocL3d5ty98JjoJVYLInQ+uPRgi8q4GQ96f2An2GgDU9RzwL+dzgPr0egvUXZcgGEBM4q3UgVS5D0pq1AnrM2ij+9t49Dr7bWyOag6O4HGyjiyF56UH4eahW5matzGleuDON4wCsW+yTV3ZJUqgeSXnOL4OWugfiZm0T18vaaylzaye6Tibj0G1a00cLdUcj2UGHbx6Kz6Ts6SoZbF0bUTsXGPrTScY08dniuqPr+y3PNO839xqoEgWIm93MAba3zMrW5vfgqzoH/upjOkPXII4Cv1WIErd8MthC2ZX+yt1yCX1EsfaC3xtUE0GhWabUUpWkbO0uAm+rVbfItXJlHhexpM8F+9Q1wvH8tdd0OV4UySKiaYYl6tWVf+3SnoLO4xSRoasQplPSiGiqESQpuFucGfFSTiqlUB83aoaQ7WCbOSuEfZLqA/W14D5RqLq1n4h+4VowbtJj4SmRRslOKVMpSBN5fUO8vd57bbsoTIgsVVsK0mDmvjsmFXcnlPODn19rkWDoJBWiLiL6RDbk9Cp71MHD9UiwwRWLUp6YuTfSnz6bajXC6OEyN2tJiylc3yKidDXfZdRIHiwKZ4myzTJQC12tX1/JkvxBHSoRpfB0VmZlywtNCbYxpbpu1VFyRNSj9IKSVT5w/+Rrq0cPyRYldChlnuTlZ7oka5+xF+x5i4TXey5tU1H74c490xXEbBnPJ5Jkq0SCmjgqkENezYosg0ZBUlaBeBnFnonkKqKkM1Hq/B7Jjm5IrbacEqHaiGaCbYj3xh5o/VIpS5Kau7y2qNR57LiP50zypVzuBuw8h4HJoZUOwU/PIfjhoQrBNqHh2eZI7bLIdgmcN3UZN3kA4Yk20qEHSxCN/5FkI/dJnu5mT3WI+Qj3fyDp5rPr9E7zyLCKqGpJIMkmPrNS7zQvnCzZSU0CSNIZU6OR7I4oyUsme4DDhdES4L2ndFfF6ZnhezlkUUy7bCDJy7xnGYSNF2MhGh4yaBY0HnEU8VWB3DdeO4H30l1imgz8QSwbIv8g9gIM+EHsjwADAKs7Uy0vInsrAAAAAElFTkSuQmCC"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4REZFQ0JGMUIxN0VFNTExOEFFRkI2MTkxQjREM0M5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQkZCMkE0QjRCNEExMUU3QUVEMkZBMkE0NjNDRUM1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQkZCMkE0QTRCNEExMUU3QUVEMkZBMkE0NjNDRUM1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2QTMzNkNCNTg3QUU2MTFBMkE4RDhFRUY1MDE2RDk0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERkVDQkYxQjE3RUU1MTE4QUVGQjYxOTFCNEQzQzkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UXInzwAABA9JREFUeNrEmVloU1EQhie3aZLaxD2IghShKNQlai2x4oKKllZFEJcHBR+EIraKIiiI+CBuIKhYURF8Uh9cKGipUltUELQFl0Z90LQi6oPUWJfWmKWpceZmEhJJmntO7k0HfhrIved8PWdmzsyJ6ecRJ0iaBVWJWoqahZqKmoiy8/e/UV9QXtQr1EPUU1RYZjKTBOgc1HbUetRYwXd/oG6iLqJeiryoCDzrQjWjnqNqJSDJxvC7NMZdHlM3UBvqFOoZqoZ2AXI3GqOaxzzNc+QEWsp+tQdlBv2NxtzNc5TKglagnqBmg/FGc7Sj3KKg9MIDlBPyZ+NQbZlglQzb3ZSUZvJpdp67NJ2P/B84N2VXstC1M/E5GvgJEe8VmWGczEA5OpgJ9JioT5pGlEDRmgYwT54JJmtxynfR0GEIv26B0OPjEP3zUdRnj6L2pkv4Lk4XmqO7YPIqKN50TgX82+eDyKdOiAb7Yz41elICftD3Af407oK/3zpEYCOocj7VUkCbOU9qXknHjkcqSPhNKwRub077jG3FMbDMWKHC+q9uFF1ZYlqdHExzOAFrNtruoSDVrUco+m6gux0KnFPAUlEv6q81zJYArRM5cZTxbigsnY8+6Idg64Gszw+8bY0F27TFMidYXRzUygWG9uieHnt88OsHTVsZ6boT82lcVXIHQaPJrAon2FFC/6bNEQPt8eYjtxKbm0CXGT2TMm6G+pcyg2AwxW2ZWaTUiluwZbtQbiwsW8Ou8l72f3UpXJkLm1ZI8knLzKqUoJKwqQQ6wagtJ8jiLTcSaWzA0yA71AQCdRjil5jCCJIinZK9ljQ2hDmMKIbB4j4ItkXb1JWkZB9o2ikbRCnVUz/XgrpY0dpr6pFJFnrWqAaeDtZPoD16gFKBUlR9SN1qSkOBlhOyZV466zFz312WyyjWJSfBWrE+ETTkj7lu9X/mpWDy5DKCreoi2BZuVT8H2s6qRYjOkGQehXsjaUjrvHVqceK/Xg/hjiNGZbqHBErV7C+ZyE6GHPzcbBRkH3WoBBpC3RJN5JR+1OP08WUjIYH7p1C8Hj0vtJpYAMdbDAO3O24Xkpu7F6j7qJWakm9JeWxlrXaw1wr1QfD7klvk8ft8T5XSyO3nki/raWWyxbpNZaRTuLMmt9GYFai525euXe5ENfA9U9ZVkajUhaouZvGka5fVEzCP901D5k2+gAhkutKhLzagfMMI6eM+KZDt7qkbRSW5fxgg/Tx3t9bbPArl5ajePEL28pwdWm/zkmErOciMNppjQSbIbKBkXQx7htOF3hbhsSu5igNZUPWU5JQ1D3VPR8h7POYeSLpezAU0OWXQXdBc1CXUdwm4H/xuOY+lucQ06fiD2DRI/4PYO9DhB7F/AgwA+3JBHxpQxkcAAAAASUVORK5CYII="

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warp_xiazai.d33605d.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warp_yaoqing.35ec3dd.png";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warp_yaoqing2.f1d32a4.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wxydy.b051fc5.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/yaoqing.6183849.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/yaoqing2.0e75479.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/yaoqing3.96dc25d.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/yaoqing4.76715cf.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/yaoqing5.0c6abec.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(152),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(70)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(140),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(75)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(145),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(77)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(147),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7e3a22c0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(79)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(149),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(69)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(139),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(68)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(76)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(146),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(71)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(141),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(72)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(142),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-52d79dcb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(73)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(143),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-61a73ea3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(137),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-31dfb974",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(81)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(151),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(80)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(150),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(78)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(148),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(135),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(74)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(144),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', [_c('img', {
    attrs: {
      "src": __webpack_require__(90),
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": __webpack_require__(91),
      "alt": ""
    }
  })])
}]}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "art-list"
  }, _vm._l((_vm.todos3), function(todo3, index) {
    return _c('div', {
      staticClass: "art-box",
      class: [todo3.select ? _vm.activeClass : ''],
      on: {
        "click": function($event) {
          _vm.tab4(_vm.todos3, index)
        }
      }
    }, [_c('div', {
      staticClass: "art-title"
    }, [_vm._v(_vm._s(todo3.text))]), _vm._v(" "), (_vm.seen) ? _c('div', {
      staticClass: "art-answ",
      domProps: {
        "innerHTML": _vm._s(todo3.text1)
      }
    }, [_vm._v(_vm._s(todo3.text1))]) : _vm._e()])
  }))
},staticRenderFns: []}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "height": "200px"
    },
    attrs: {
      "id": "qxt"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    directives: [{
      name: "wechat-title",
      rawName: "v-wechat-title",
      value: (_vm.$route.meta.title),
      expression: "$route.meta.title"
    }]
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg-content"
  }, [(_vm.nojilu) ? _c('div', {
    staticClass: "nojilu"
  }, [_c('img', {
    staticClass: "bgpic",
    attrs: {
      "src": __webpack_require__(94)
    }
  }), _vm._v(" "), _c('p', [_vm._v("还没有奖励？赶紧去\n\t\t\t"), _c('router-link', {
    attrs: {
      "to": {
        path: './invitation',
        query: {
          source: this.$route.query.source,
          auth: this.$route.query.auth,
          username: this.$route.query.username
        }
      }
    }
  }, [_c('span', {
    staticClass: "toyaoq1"
  }, [_vm._v("邀请好友")])]), _vm._v("\n\t\t\t\n\t\t吧")], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        path: './invitation',
        query: {
          source: this.$route.query.source,
          auth: this.$route.query.auth,
          username: this.$route.query.username
        }
      }
    }
  }, [_c('img', {
    staticClass: "toyaoq2",
    attrs: {
      "src": __webpack_require__(96)
    }
  })])], 1) : _vm._e(), _vm._v(" "), (_vm.jilu) ? _c('div', {
    staticClass: "jilu1"
  }, [_vm._m(0), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(i) {
    return _c('li', {
      staticClass: "clearfix"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("formatDate")(i.earnTime)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(i.beInvitePhone.substring(0, 3) + "****" + i.beInvitePhone.substring(8, 11)))]), _vm._v(" "), _c('span', {
      staticClass: "orange you clearfix"
    }, [_vm._v(_vm._s(i.earnMoney / 100) + "  "), (i.status == '0') ? _c('i', {
      staticClass: "gray you"
    }, [_vm._v("待发放")]) : _vm._e(), _vm._v(" "), (i.status == '1') ? _c('i', {
      staticClass: "green you"
    }, [_vm._v("已发放")]) : _vm._e()])])
  })), _vm._v(" "), _c('infinite-loading', {
    ref: "infiniteLoading",
    attrs: {
      "on-infinite": _vm.onInfinite
    }
  }, [_c('span', {
    staticStyle: {
      "float": "none"
    },
    attrs: {
      "slot": "no-more"
    },
    slot: "no-more"
  }, [_vm._v("没有更多数据了")])])], 1) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', [_vm._v("时间")]), _c('span', [_vm._v("已投资好友")]), _c('span', [_vm._v("奖励金额")])])
}]}

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', _vm._l((_vm.list), function(i) {
    return _c('li', {
      staticClass: "integral_detail"
    }, [_c('p', [_vm._v(_vm._s(_vm._f("formatDate")(i.insertTime)))]), _vm._v(" "), _c('div', {
      staticClass: "bottom clearfix"
    }, [_c('span', {
      staticClass: "left"
    }, [_vm._v(_vm._s(i.note))]), _vm._v(" "), (i.coinType == '2') ? _c('span', {
      staticClass: "right"
    }, [_vm._v("+" + _vm._s(i.coin))]) : _c('span', {
      staticClass: "right1"
    }, [_vm._v("-" + _vm._s(i.coin))])])])
  })), _vm._v(" "), _c('infinite-loading', {
    ref: "infiniteLoading",
    attrs: {
      "on-infinite": _vm.onInfinite
    }
  }, [_c('span', {
    attrs: {
      "slot": "no-results"
    },
    slot: "no-results"
  }, [_vm._v("没有数据...")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "float": "none"
    },
    attrs: {
      "slot": "no-more"
    },
    slot: "no-more"
  }, [_vm._v("没有更多数据了")])])], 1)
},staticRenderFns: []}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container1 services"
  }, [_c('p', {
    staticClass: "f30"
  }, [_vm._v("借款协议")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "30px",
      "text-align": "right"
    }
  }, [_vm._v("借款协议编号：" + _vm._s(_vm.recordNum))]), _vm._v(" "), _c('p', [_vm._v("甲方（出借人、质权人）："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.cjr))])])]), _vm._v(" "), _c('p', [_vm._v("证件号："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.idCardCjr))])])]), _vm._v(" "), _c('p', [_vm._v("乙方（借款人、质押人）："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.realName))])])]), _vm._v(" "), _c('p', [_vm._v("营业执照号："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.idcard))])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('p', [_vm._v("乙方因资金需求，通过丙方的服务平台向甲方借款并以仓单或提单提供质押担保，甲方亦同意提供借款，甲乙双方有意成立借贷关系。各方根据平等、自愿、诚实信用的原则，达成本协议，以期共同遵守：")]), _vm._v(" "), _c('p', [_vm._v("一、定义")]), _vm._v(" "), _c('p', [_vm._v("\t    除非缔约方另有约定，本协议下列术语定义如下：")]), _vm._v(" "), _c('p', [_vm._v("\t  1.1 平台：在本协议中如无特别说明，均特指由新华金典财富管理平台（网址为：www.xinhuajindian.com），是专业提供借款项目信息发布与管理、交易管理、交易资金结算（由第三方支付机构提供）等服务的互联网金融和商业信息中介服务平台。 ")]), _vm._v(" "), _c('p', [_vm._v("\t  1.2 甲方：指在新华金典财富管理发布借款需求的乙方提供借款，且具有完全民事行为能力的自然人。甲方具有合格的投资能力、相应的风险识别与承受能力，并自愿承担交易风险。 ")]), _vm._v(" "), _c('p', [_vm._v("   1.3 乙方：指存在资金需求，同业通过丙方平台发布其借款需求，承诺按本协议月底的条款还本付息而从甲方借款资金的自然人。")]), _vm._v(" "), _c('p', [_vm._v("   1.4 第三方支付机构：指具有《支付业务许可证》等合法业务资质的，独立于交易各方的，为平台用户提供交易资金结算等服务的第三方非金融机构，这里特制丙方指定的支付平台，宝付网络科技（上海）有限公司。")]), _vm._v(" "), _c('p', [_vm._v("   1.5 第三方资金托管：第三方支付机构为甲方和乙方提供独立的托管账户及资金交易结算服务，保证其资金独立性，与新华金典财富管理的自有资金相互隔离。")]), _vm._v(" "), _c('p', [_vm._v("   1.6 筹集期：指从乙方借款项目在平台发布之日起至借款资金筹集完毕之日止的时间段。该期限以新华金典财富管理平台具体留存记录为准。")]), _vm._v(" "), _c('p', [_vm._v("   1.7 借款本金：指乙方在新华金典财富管理平台发布的借款项目在筹集期所筹集达到的资金总额。")]), _vm._v(" "), _c('p', [_vm._v("二、借款")]), _vm._v(" "), _c('p', [_vm._v("2.1 借款基本信息，见下表：")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', [_vm._v("借款本金：")]), _c('td', [_vm._v("人民币 " + _vm._s(_vm.copies) + "(包含" + _vm._s(_vm.coupon) + "元理财券)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款期限：")]), _c('td', [_vm._v(_vm._s(_vm.st) + "起至" + _vm._s(_vm.et) + "止，共 " + _vm._s(_vm.lcqx) + "天")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("    起息日：")]), _c('td', [_vm._v(_vm._s(_vm.st))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款利率：")]), _c('td', [_vm._v(_vm._s(_vm.annualEarnings) + " %")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款用途：")]), _c('td', [_vm._v(_vm._s(_vm.jkyt))])])]), _vm._v(" "), _c('p', [_vm._v(" 2.2 甲方通过新华金典财富管理以网络在线点击确认的方式接受本协议后，视为确认投标，即不可撤销地授权第三方支付机构将等额于“借款基本信息”中列明的借款本金金额的资金由以甲方名义开立的账户支付投资资金。第三方支付机构有权冻结甲方账户内相应资金。")]), _vm._v(" "), _c('p', [_vm._v(" 2.3 起息日是指甲方通过第三方支付机构放款成功之日。放款成功日是指借款人所需资金全部筹集完毕后，全部出借人将相应借款通过第三方支付机构支付投资资金的最终时间为准。")]), _vm._v(" "), _c('p', [_vm._v(" 2.4 借款期间是指起息日至借款期限界满之日止（以下简称借款期间终止日）。")]), _vm._v(" "), _c('p', [_vm._v(" 2.5 就本协议项下放款成功日、借款期限终止日及还款日而言，如当月无该日期，则以当月的最后一日为该日。如该日为非工作日的，则顺延至该日后的第一个工作日的15:00点之前。")]), _vm._v(" "), _c('p', [_vm._v("三、担保")]), _vm._v(" "), _c('p', [_vm._v("3.1 乙方作为质押人，同意以其自身所有的仓单、提单向借款提供质押担保，承诺存单、提单无任何权利瑕疵，并同意丙方受甲方委托代为保管上述仓单或提单。")]), _vm._v(" "), _c('P', [_vm._v("3.2为方便管理，甲方同意委托丙方代为保管上述质押仓单、提单，未经甲方书面同意，乙方不得向丙方申请挂失，提取、转让单据项下货物等一系列损害甲方质押权的行为。丙方有权对仓单、提单项下的一切货物进行监管。")]), _vm._v(" "), _c('P', [_vm._v("3.3质权的效力及于质押财产产生的孳息、质押财产的从物、从权利、附属物、添附物，以及因质押财产毁损、灭失或被征用而产生的保险金、赔偿金、补偿金或其他形式的替代物。")]), _vm._v(" "), _c('P', [_vm._v("3.4、丙方有权协助甲方收取质押财产所产生的孳息，在冲抵收取孳息的费用后，抵偿主合同项下的债务。")]), _vm._v(" "), _c('P', [_vm._v("3.5、在质权存续期间，质押财产发生毁损、灭失的，产生一切责任由乙方与保险公司协商承担，与甲方、丙方无关。乙方应及时采取有效措施防止损失扩大，同时立即通知甲方和丙方，并向甲方和丙方提交有关主管机关出具的发生毁损、灭失的原因证明文件。甲方有权就该质押财产的保险金、赔偿金或补偿金优先受偿。质权所担保的债权未届清偿期的，甲方有权要求乙方清偿或提前清偿债务人在主合同项下的债务，或存入甲方指定的账户以担保债务人债务的履行，或请求人民法院对保险金、赔偿金或补偿金等采取保全措施。")]), _vm._v(" "), _c('P', [_vm._v("3.6、仓单、提单的兑现或者提货日期先于或等于本合同项下债务履行期到期的，甲方有权委托丙方兑现或者提货，将兑现的价款或提取的货物用于提前清偿所担保的债务或将其提存或存入甲方指定的特定账户，继续为主合同项下债务的履行提供担保。")]), _vm._v(" "), _c('P', [_vm._v("3.7 乙方未按时归还借款本息的，甲方有权委托丙方处置仓单或者提单项下的货物，并将处置后获得的价款优先偿还甲方对乙方的债权。")]), _vm._v(" "), _c('p', [_vm._v("3.8 甲方将本协议项下债权转让给任意第三人的，乙方同意就上述债务继续对债权受让人提供质押担保，无需另行征得乙方书面同意。乙方的权利义务不变。")]), _vm._v(" "), _c('p', [_vm._v("四、各方的权利义务")]), _vm._v(" "), _c('p', [_vm._v("4.1 甲方的权利义务 ")]), _vm._v(" "), _c('p', [_vm._v("4.1.1 甲方承诺其为订立本协议提供的信息及时、合法、真实、有效，用于出借的资金来源合法。如果本合同之外的第五方对资金归属、合法性问题提出异议，甲方应自行解决。如甲方未能解决，则甲方不得对其出借资金产生的孳息主张权利（包括但不限于利息等）。")]), _vm._v(" "), _c('p', [_vm._v("4.1.2 甲方同意以网络页面点击确认的方式签订本协议，并不得以此为由拒绝履行本协议项下的义务。自点击确认完成时即视为甲方同意不可撤销及完全地授权新华金典财富管理自主生成出借信息完成最终借款项目的撮合，且在未出现法定事由时，甲方不得否认本协议项下债权债务关系或以任何方式撤回、撤销本协议。 ")]), _vm._v(" "), _c('p', [_vm._v("4.1.3 甲方知晓并同意，借款金额自甲方点击确认投资之日起至起息日（不含）的这段期间不产生任何收益（包括但不限于利息等），甲方有权从乙方处获得借款期间内基于借款金额的约定利息收益。 ")]), _vm._v(" "), _c('p', [_vm._v("4.1.4 甲方同意并授权第三方支付机构根据本协议约定从其账户中划转投资以履行出借义务。甲方应确保在划转之时其账户中有足够的资金以完成划款。")]), _vm._v(" "), _c('p', [_vm._v("4.1.5 甲方知晓并同意：甲方独立对新华金典财富管理发布的本协议项下的交易信息进行审慎合理的判断，基于其真实意思表示做出借款决定，并自行承担交易风险。丙方作为信息发布的中介机构，不承担本协议项下甲方的任何资金损失风险。")]), _vm._v(" "), _c('p', [_vm._v("4.1.6 甲方在此确认，甲方在做出借款决定及签订本协议时，对不能完全知晓乙方的真实姓名、身份证号码、和住址的情况应属明知，并自行承担交易风险。")]), _vm._v(" "), _c('p', [_vm._v("4.1.7 甲方特此不可撤销的授权丙方向乙方回收每期应还借款本息、提前还款违约金（如有）、对乙方借款到期提醒及违约催收和提起诉讼。以上委托事宜，甲方同意丙方可进行转委托，无需另行取得甲方书面同意或确认。")]), _vm._v(" "), _c('p', [_vm._v("4.1.8 就甲方在本协议项下对乙方的部分或全部债权，甲方有权根据自己的意愿，在符合平台交易规则和债权转让条件下对外转让。")]), _vm._v(" "), _c('p', [_vm._v("4.1.9 甲方系质押权人，有权委托丙方对乙方提供的仓单或提单进行代为保管并对货物进行监管。")]), _vm._v(" "), _c('p', [_vm._v("4.2 乙方的权利义务")]), _vm._v(" "), _c('p', [_vm._v("4.2.1 乙方承诺为订立本协议而提供的信息及时、合法、真实、有效。乙方隐瞒真实情况或发布虚假信息给甲方、丙方、乙方及其他合同之外的第三方造成损失的，甲方、丙方或其他合同之外的第三方有权向乙方追责,各方应给予必要的协助。")]), _vm._v(" "), _c('p', [_vm._v("4.2.2 乙方应保证借款用途合法合规，且严格按照本协议项下借款用途使用借款。 ")]), _vm._v(" "), _c('p', [_vm._v("4.2.3 乙方同意以签字、签章或电子签章确认等方式签订本协议，并不以此为由拒绝履行本协议项下的义务。在未出现法定事由时，乙方不得否认本协议项下债权债务关系或以任何方式撤回、撤销本协议。")]), _vm._v(" "), _c('p', [_vm._v("4.2.4 乙方应按照本协议的约定按时支付利息及（或）偿还借款本金。")]), _vm._v(" "), _c('p', [_vm._v("4.2.5 乙方的资信状况及还款能力出现重大不利影响时，乙方应以书面、传真、电子邮件等方式及时通知甲丙丁三方。")]), _vm._v(" "), _c('p', [_vm._v("4.2.6 乙方接受丙方提供的居间服务，并同意向丙方支付一定居间服务费。服务费的具体数额及支付方式由乙方与丙方签订的居间服务协议另行约定。")]), _vm._v(" "), _c('p', [_vm._v("4.2.7 乙方作为质押人，同意以其自身所有的存单、提单向借款提供质押担保，承诺存单、提单权利无瑕疵，并同意丙方代甲方保管上述质押物。")]), _vm._v(" "), _c('p', [_vm._v("4.3 丙方的权利义务 ")]), _vm._v(" "), _c('p', [_vm._v("4.3.1 丙方为甲方、乙方提供交易信息发布服务。丙方在新华金典财富管理平台上发布的相关交易信息、个人信息等均由甲方和乙方提供，并由甲方、乙方对各自提供信息的及时性、真实性、准确性和完整性负责。")]), _vm._v(" "), _c('p', [_vm._v("4.3.2 丙方为促成甲方和乙方达成本协议项下的借款提供撮合交易的中介服务。甲方、乙方应根据其审慎、合理的判断决定是否参与交易。丙方对于甲方、乙方借贷关系的订立、履行及风险不做出任何形式的明示或默示的承诺或保证，亦不承担对借款项目未按期偿还或造成任何损失等的垫付或赔偿等责任。")]), _vm._v(" "), _c('p', [_vm._v("4.3.3 丙方有权在发布交易信息时暂不公布乙方部分个人信息，包括但不限于姓名、身份证号、住址等。丙方对前述信息的延时公布不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("4.3.4 丙方有权就为本协议项下借款所提供的居间服务向乙方收取一定服务费，具体数额及方式由丙方与乙方另行约定。")]), _vm._v(" "), _c('p', [_vm._v("4.3.5 对提供虚假个人信息、相关交易信息和违反本协议约定的甲方和乙方，丙方有权将甲方和乙方的虚假、违约情况对外公告，公告的方式包括但不限于在丙方的新华金典财富管理、相关的金融网站、报刊等，同时丙方有权根据国家有关征信规定报送有关征信机构，甲方和乙方对此不得提出任何异议，因此产生的一切后果和损失与丙方无关。")]), _vm._v(" "), _c('p', [_vm._v("4.3.6 丙方有义务代甲方妥善保管乙方提供的质押仓单或提单，并按照甲方的指示行使质权。")]), _vm._v(" "), _c('p', [_vm._v("五、还款及逾期")]), _vm._v(" "), _c('p', [_vm._v("5.1 乙方必须按照本协议的约定，按时、足额偿还甲方借款本金和利息，并根据与丙方签订的协议按时、足额向丙方支付居间服务费。")]), _vm._v(" "), _c('p', [_vm._v("5.2甲方知晓并同意，最终将本协议项下的借款本息或受偿款项划转至甲方的账户的到账时间以第三方支付机构与甲方协议确定为准。")]), _vm._v(" "), _c('p', [_vm._v("5.3 还款日当日24：00前，甲方未依本合同约定足额收到应收款项的，则视为乙方逾期。在逾期情形下，乙方除应按本协议第二条的约定支付利息外，乙方应自借款逾期之日起额外支付相当于本协议第二条约定的所有剩余未偿还的本金和利息总额的每日万分之五的逾期罚息，直至相关逾期款项清偿为止。")]), _vm._v(" "), _c('p', [_vm._v("5.4除上述约定外，乙方还需承担因未按约还款所产生的一切费用，包括但不限于诉讼费、财产保全费、执行费、仲裁费、律师代理费、差旅费、评估费、拍卖费、催收费用等。")]), _vm._v(" "), _c('p', [_vm._v("六、提前还款 ")]), _vm._v(" "), _c('p', [_vm._v("6.1 乙方可以依本协议约定提前还款。乙方可于起息日次日起至还款日止，通过新华金典财富管理的“提前还款”功能向甲方申请提前偿还全部应付款项。乙方不得只提前偿还部分应付款项。")]), _vm._v(" "), _c('p', [_vm._v("6.2 乙方提前还款的，应向甲方支付当期应还本息、剩余本金、提前还款违约金。提前还款违约金的计算方式为：借款期限在6个月以下（包含6个月）的，按照剩余利息的20%计算； ")]), _vm._v(" "), _c('p', [_vm._v("6.3 若乙方存在逾期还款时申请提前还款的，则应先支付结清所有逾期款项后方可提前还款。")]), _vm._v(" "), _c('p', [_vm._v("七、协议的签订、成立及生效 ")]), _vm._v(" "), _c('p', [_vm._v("7.1 本协议为附条件成立生效协议，协议成立生效需同时满足如下条件：")]), _vm._v(" "), _c('p', [_vm._v("7.1.1 本协议经甲方通过新华金典财富管理页面点击确认，并经各方使用电子签章签署；")]), _vm._v(" "), _c('p', [_vm._v("7.1.2 乙方设定的借款总额在筹集期已全部筹集完成；")]), _vm._v(" "), _c('p', [_vm._v("7.1.3 新华金典财富管理根据最终撮合结果生成协议各方信息、第二条与本协议附件信息及协议签订日期信息等要素，且本协议可在新华金典财富管理查询且不可修改；当且仅当满足上述条件时，本借款协议成立。")]), _vm._v(" "), _c('p', [_vm._v("7.1.4  甲方委托第三方支付机构依据丙方的通知，将前述借款金额从甲方的账户划转时，甲方成功提供借款，本协议生效。")]), _vm._v(" "), _c('p', [_vm._v("7.2 本协议成立前，丙方将不会通知第三方支付机构从甲方的账户扣划相应的借款金额；如已划转的，划转的款项将由第三方支付机构按原路退回至甲方的账户。")]), _vm._v(" "), _c('p', [_vm._v("7.3 本协议采用电子文本形式制成，协议各方同意以留存在丙方独立运营的新华金典财富管理的协议为准，各方认可该电子借款协议的法律效力，并承诺受该形式的电子借款协议的约束。生效的电子借款协议一式多份应以不可修改的格式保存在新华金典财富管理。")]), _vm._v(" "), _c('p', [_vm._v("八、其他事项")]), _vm._v(" "), _c('p', [_vm._v("8.1 乙方须确保到期后足额偿还包括本协议借款金额在内的借款总额项下所有协议项下的借款本息及其他应付款项，否则视为还款未完成，由此引起的法律后果及违约责任由乙方承担。")]), _vm._v(" "), _c('p', [_vm._v("8.2 甲方及乙方必须通过本协议约定的方式进行放款及还款,否则由此引起的法律后果及违约责任由甲方或乙方自行承担。")]), _vm._v(" "), _c('p', [_vm._v("8.3 本协议项下借款记录等信息均以新华金典财富管理生成并公布的内容为准。协议各方可以通过新华金典财富管理账户登录新华金典财富管理查询上述信息。")]), _vm._v(" "), _c('p', [_vm._v("8.4 协议各方应对其他方提供的信息及本协议内容保密，未经其他方同意，任何一方不得向协议主体之外的任何人披露，但法律、行政法规另有强制性规定，或监管、审计等有权机关另有强制性要求的除外。")]), _vm._v(" "), _c('p', [_vm._v("8.5 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，则应认为该条款可与本协议相分割，并可被尽可能接近各方意图的、能够保留本协议要求的经济目的的、有效的新条款所取代，而且在此情况下，本协议的其他条款仍然完全有效并具有约束力。")]), _vm._v(" "), _c('p', [_vm._v("8.6 协议各方应按法律法规及相关规定各自承担与本协议相关的税费。")]), _vm._v(" "), _c('p', [_vm._v("九、法律的适用和争议的解决 ")]), _vm._v(" "), _c('p', [_vm._v("9.1 本协议受中华人民共和国法律管辖，本协议的签订、履行、终止、解释均适用中华人民共和国法律。")]), _vm._v(" "), _c('p', [_vm._v("9.2 本协议履行中发生争议，可由各方协商解决，协商不成可向丙方所在地人民法院起诉。")]), _vm._v(" "), _c('p', [_vm._v("（以下无正文）")]), _vm._v(" "), _c('p', [_vm._v("甲方（出借人）：见本协议附件《投资人列表》")]), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('p', [_vm._v("乙方（借款人）：" + _vm._s(_vm.realName) + " ")]), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('p', [_vm._v("丙方（平台服务方）：新华金典财富管理股份有限公司")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('div', {
    staticClass: "cachet"
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("丙方（互联网金融平台）："), _c('ins', [_vm._v("新华金典财富管理股份有限公司")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("网站："), _c('ins', [_vm._v("新华金典（http://www.xinhuajindian.com）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("法人代表："), _c('ins', [_vm._v("顾卫俊")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("公章:  "), _c('img', {
    staticClass: "seat",
    attrs: {
      "src": __webpack_require__(102),
      "alt": ""
    }
  })])
}]}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "art-list"
  }, _vm._l((_vm.todos1), function(todo1, index) {
    return _c('div', {
      staticClass: "art-box",
      class: [todo1.select ? _vm.activeClass : ''],
      on: {
        "click": function($event) {
          _vm.tab2(_vm.todos1, index)
        }
      }
    }, [_c('div', {
      staticClass: "art-title"
    }, [_vm._v(_vm._s(todo1.text))]), _vm._v(" "), (_vm.seen) ? _c('div', {
      staticClass: "art-answ",
      domProps: {
        "innerHTML": _vm._s(todo1.text1)
      }
    }, [_vm._v(_vm._s(todo1.text1))]) : _vm._e()])
  }))
},staticRenderFns: []}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container relative"
  }, [_c('img', {
    staticClass: "prompt-img",
    attrs: {
      "src": __webpack_require__(99),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "prompt-list"
  }, [_c('dl', [_c('dt', [_vm._v("错误码")]), _vm._v(" "), _c('dd', [_vm._v("含义")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0000")]), _vm._v(" "), _c('dd', [_vm._v("交易成功")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0001")]), _vm._v(" "), _c('dd', [_vm._v("交易失败。详情请咨询宝付")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0002")]), _vm._v(" "), _c('dd', [_vm._v("系统未开放或暂时关闭，请稍后再试")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0003")]), _vm._v(" "), _c('dd', [_vm._v("交易通讯超时，请发起查询交易")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0004")]), _vm._v(" "), _c('dd', [_vm._v("交易已受理，请稍后查询交易")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0005")]), _vm._v(" "), _c('dd', [_vm._v("交易状态未明，请查询对账结果")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0006")]), _vm._v(" "), _c('dd', [_vm._v("报文格式错误")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0007")]), _vm._v(" "), _c('dd', [_vm._v("验证签名失败")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0008")]), _vm._v(" "), _c('dd', [_vm._v("报文交易要素缺失")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0009")]), _vm._v(" "), _c('dd', [_vm._v("重复交易")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0010")]), _vm._v(" "), _c('dd', [_vm._v("交易信息不存在")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0011")]), _vm._v(" "), _c('dd', [_vm._v("订单重复提交")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0012")]), _vm._v(" "), _c('dd', [_vm._v("报文参数超出范围")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0014")]), _vm._v(" "), _c('dd', [_vm._v("此商户暂不支持该业务")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0015")]), _vm._v(" "), _c('dd', [_vm._v("此商户暂不支持该银行")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0016")]), _vm._v(" "), _c('dd', [_vm._v("该终端不存在")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0017")]), _vm._v(" "), _c('dd', [_vm._v("该商户不存在")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0018")]), _vm._v(" "), _c('dd', [_vm._v("该商户未开通")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0019")]), _vm._v(" "), _c('dd', [_vm._v("该终端未开通")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0020")]), _vm._v(" "), _c('dd', [_vm._v("错误的商户号，终端号")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0021")]), _vm._v(" "), _c('dd', [_vm._v("错误的交易密文")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0022")]), _vm._v(" "), _c('dd', [_vm._v("信息不匹配")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0024")]), _vm._v(" "), _c('dd', [_vm._v("报文格式错误")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0030")]), _vm._v(" "), _c('dd', [_vm._v("商户状态不正确,请确认是否开通活启用")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0031")]), _vm._v(" "), _c('dd', [_vm._v("商户终端状态不正确,请确认是否开通或启用")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0032")]), _vm._v(" "), _c('dd', [_vm._v("商户未绑定该终端")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0033")]), _vm._v(" "), _c('dd', [_vm._v("商户该终端下未开通此类型交易")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0034")]), _vm._v(" "), _c('dd', [_vm._v("绑定关系不存在")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0050")]), _vm._v(" "), _c('dd', [_vm._v("支付超时")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0060")]), _vm._v(" "), _c('dd', [_vm._v("存在钓鱼风险，交易中止")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0061")]), _vm._v(" "), _c('dd', [_vm._v("请使用HTTPS安全通讯请求")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0062")]), _vm._v(" "), _c('dd', [_vm._v("交易金额不正确")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0201")]), _vm._v(" "), _c('dd', [_vm._v("密文和明文中参数XXX不一致,请确认是否被篡改！")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0202")]), _vm._v(" "), _c('dd', [_vm._v("请确认是否发送短信,当前交易必须通过短信验证！")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0203")]), _vm._v(" "), _c('dd', [_vm._v("当前交易信息与短信交易信息不一致,请核对信息")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0204")]), _vm._v(" "), _c('dd', [_vm._v("绑卡失败")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0300")]), _vm._v(" "), _c('dd', [_vm._v("发送验证码超时，请稍后再试")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0301")]), _vm._v(" "), _c('dd', [_vm._v("系统繁忙，请稍后再试")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0302")]), _vm._v(" "), _c('dd', [_vm._v("该交易有风险,请联系宝付")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0303")]), _vm._v(" "), _c('dd', [_vm._v("交易结果未知，请稍后查询")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0304")]), _vm._v(" "), _c('dd', [_vm._v("交易正在处理，请勿重复支付")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0305")]), _vm._v(" "), _c('dd', [_vm._v("暂不支持该信用卡的支付功能")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("0306")]), _vm._v(" "), _c('dd', [_vm._v("卡类型和biz_type接入类型不一致")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1000")]), _vm._v(" "), _c('dd', [_vm._v("系统异常，请稍后再试")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1001")]), _vm._v(" "), _c('dd', [_vm._v("转换加密串到对象异常")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1002")]), _vm._v(" "), _c('dd', [_vm._v("短信调用异常")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1003")]), _vm._v(" "), _c('dd', [_vm._v("短信验证异常")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1004")]), _vm._v(" "), _c('dd', [_vm._v("数据重复插入")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1005")]), _vm._v(" "), _c('dd', [_vm._v("数据更新异常")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1006")]), _vm._v(" "), _c('dd', [_vm._v("数据查询有误")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1007")]), _vm._v(" "), _c('dd', [_vm._v("Fi支付处理失败")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("1008")]), _vm._v(" "), _c('dd', [_vm._v("Fi查询处理失败")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("BF08702")]), _vm._v(" "), _c('dd', [_vm._v("超出限额")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('dl', [_c('dt', [_vm._v("RM10029")]), _vm._v(" "), _c('dd', [_vm._v("被风控拦截")]), _vm._v(" "), _c('p', {
    staticClass: "clearfix"
  })])])])
}]}

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container services"
  }, [_c('h2', [_vm._v("重要提示：")]), _vm._v(" "), _c('div', [_vm._v("本网站为新华金典财富管理股份有限公司所有〖以下本网站均指网站（网站包括新华金典：http://www.xinhuajindian.com及其手机客户端）〗，并依据本协议的规定为注册会员提供服务，本协议在注册会员和本网站间具有合同上的法律效力。本网站在此特别提醒您认真阅读、充分理解本协议各条款，特别是其中所涉及的免除及限制本网站责任的条款、对注册会员权利限制的条款等。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册本网站或使用本网站于本协议下所提供的一切服务。您一经注册或使用本网站服务即视为对本协议全部条款已充分理解并完全接受。若您不接受以下条款，请停止注册本网站。")]), _vm._v(" "), _c('h2', [_vm._v("第一章 本协议的签署和修订")]), _vm._v(" "), _c('p', [_vm._v("第一条 为了保障会员的权益，您在自愿注册使用本网站服务前，必须仔细阅读并充分理解知悉本服务协议所有条款。一经注册或使用本网站服务即视为对本服务协议的充分理解和接受，并承诺遵守中国的各类法律规定，如有违反而导致任何法律后果的发生，您将以自己的名义独立承担相应的法律责任。")]), _vm._v(" "), _c('p', [_vm._v("第二条 本网站只接受持有中国大陆（不包括香港特区、澳门特区及台湾地区）有效身份证件的18周岁以上且具有完全民事行为能力的自然人或在中国大陆注册或成立并有效存续的法人及其他组织成为网站会员。如您不符合资格，请勿注册，否则本网站有权随时终止您的会员资格。")]), _vm._v(" "), _c('p', [_vm._v("第三条 本协议内容包括本协议的所有条款及本网站已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的一部分，与协议正文具有同等法律效力。本协议是注册会员与本网站共同签订的，适用于会员在本网站的全部活动。")]), _vm._v(" "), _c('p', [_vm._v("第四条 本网站有权根据需要修改本协议或根据本协议制定、修改各类具体规则并在本网站相关系统板块发布，不再另行向会员做个别通知，会员有权选择继续或者停止使用本网站的服务。若您在本协议及具体规则内容变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议和具体规则内容，也将遵循修改后的协议和具体规则使用本网站的服务，同时就您在协议和具体规则修订前通过本网站进行的交易及其效力，视为您已同意并已按照本协议及有关规则进行了相应的授权和追认。若您不同意修改后的协议内容，您应停止使用本网站的服务，本网站也有权不经告知即中止、终止本协议或者限制您进入本网站的全部或者部分板块且不承担任何法律责任，但该中止、终止或限制行为并不能豁免您在本网站已经进行的交易下所应承担的义务。")]), _vm._v(" "), _c('p', [_vm._v("第五条 您确认签署本服务协议后，本服务协议即在您和本网站之间产生法律效力。您只要在“我同意《新华金典服务协议》”前的选择框里打钩并按照本网站规定的注册程序成功注册为会员，您的行为即表示同意并签署了本协议。本协议不涉及您与本网站的其他会员之间因网上交易而产生的法律关系及法律纠纷，但您在此同意将全面接受和履行与本网站其他会员在本网站签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。")]), _vm._v(" "), _c('h2', [_vm._v("第二章 本网站的服务内容")]), _vm._v(" "), _c('p', [_vm._v("第六条 本网站服务内容主要包括根据会员需求发布交易信息、提供交易管理服务、提供客户服务等，具体详情以本网站当时提供的服务内容为准。本网站的部分服务内容需要会员根据本网站的要求完成身份认证及银行卡认证，未进行身份认证及/或银行卡认证的会员将无法使用本网站该部分服务。因未能完成认证而无法享受本网站服务造成的损失，本网站不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("第七条 本网站将为会员提供信息发布服务。本网站代会员发布的各种信息及资料仅为参考，会员应依其独立判断做出决策。会员如据此进行交易的，产生的风险由会员自行承担，会员无权据此向本网站提出任何法律主张。")]), _vm._v(" "), _c('p', [_vm._v("第八条 本网站将为会员提供以下交易管理服务：")]), _vm._v(" "), _c('p', [_vm._v("1．会员在本网站进行注册时将生成会员账户，该账户将与以第三方支付机构或银行的名义开立的监管账户相对应。会员账户将记载会员在本网站的活动，上述会员账户是会员登陆本网站的唯一账户。")]), _vm._v(" "), _c('p', [_vm._v("2．会员保证并承诺通过本网站进行交易的资金来源合法。")]), _vm._v(" "), _c('p', [_vm._v("3．会员确认，会员在本网站按本网站服务流程所确认的交易状态，将成为本网站为会员进行相关交易或操作（包括但不限于支付或收取款项、冻结资金、订立合同等）的不可撤销的指令。会员同意相关指令的执行时间以本网站在本网站系统中进行实际操作的时间为准。会员同意本网站有权依据本协议及/或本网站相关纠纷处理规则等约定对相关事项进行处理。会员未能及时对交易状态进行修改、确认或未能提交相关申请所引起的任何纠纷或损失由会员自行负责，本网站不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("4． 会员了解本网站并不是银行或金融机构，按照中国法律规定，本网站不提供“即时”金额转账服务，会员同意本网站对资金到账延迟不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("5．会员理解并同意，本网站向符合条件的会员提供服务。本网站对在本网站上进行的债权受益权投资、借贷等交易行为不承担任何责任，本网站无法也没有义务保证会员在发出投资或借贷意向后，能够实际获得借贷或投资成功，会员因前述原因导致的损失由会员自行承担，本网站不承担责任。")]), _vm._v(" "), _c('p', [_vm._v("6．会员通过本网站进行各项交易或接受交易款项时，若会员未遵从本服务协议条款或本网站公布的交易规则中的操作指示，本网站不承担任何责任；若由于本网站或第三方系统原因或操作失误导致错误的给会员支付了款项并给本网站造成了损失的，会员应当及时返还。若发生上述状况而款项已先行拨入会员账户下，会员同意本网站有权直接从相关会员账户中扣回款项及禁止会员要求支付此笔款项之权利。此款项若已汇入会员的银行账户，会员同意本网站有向会员事后索回的权利，由此产生的追索费用（包括但不限于差旅费、律师费及诉讼费等）由会员承担。")]), _vm._v(" "), _c('p', [_vm._v("7．本网站基于交易安全等方面的考虑设定涉及交易的相关事项，包括但不限于交易限额、交易次数等，会员了解本网站的前述设定可能会对交易造成一定不便，并对此没有异议。")]), _vm._v(" "), _c('p', [_vm._v("8．如果本网站发现了因系统故障或其他任何原因导致的处理错误，无论有利于本网站还是有利于会员，本网站都有权纠正该错误。如果该错误导致会员实际收到的款项多于应获得的金额，则无论错误的性质和原因为何，本网站保留纠正不当执行的交易的权利，会员应根据本网站向会员发出的有关纠正错误的通知的具体要求返还多收的款项或进行其他操作。会员理解并同意，会员因前述处理错误而多付或少付的款项均不计利息，本网站不承担因前述处理错误而导致的任何损失或责任。")]), _vm._v(" "), _c('p', [_vm._v("第九条 本网站将为会员提供以下客户服务：")]), _vm._v(" "), _c('p', [_vm._v("1．银行卡认证：为使用本网站或本网站委托的第三方机构提供的充值、取现、代扣等服务，会员应按照本网站平台规定的流程提交以会员本人名义登记的有效银行借记卡等信息，经由本网站审核通过后，本网站会将会员的账户与前述银行账户进行绑定。如会员未按照本网站规定提交相关信息或提交的信息错误、虚假、过时或不完整，或者本网站有合理的理由怀疑会员提交的信息为错误、虚假、过时或不完整，本网站有权拒绝为会员提供银行卡认证服务，会员因此未能使用充值、取现、代扣等服务而产生的损失自行承担。")]), _vm._v(" "), _c('p', [_vm._v("2．充值：会员可以使用本网站指定的方式向会员账户充入资金，用于通过本网站平台进行交易。")]), _vm._v(" "), _c('p', [_vm._v("3．代收/代付：本网站按照其平台当时向会员开放的功能提供代收/代付服务，自行或委托第三方机构代为收取其他会员或本网站合作的第三方向会员的账户支付的本息、代偿金、赎回款、债权受益权转让款等各类款项，或者将会员账户里的款项支付给会员指定的其他方。")]), _vm._v(" "), _c('p', [_vm._v("4．取现：会员可以通过本网站平台当时开放的取现功能将会员账户中的资金转入经过认证的银行卡账户中。本网站将于收到会员的前述指示后，尽快通过第三方机构将相应的款项汇入会员经过认证的银行卡账户（根据会员提供的银行不同，会产生汇入时间上的差异）。")]), _vm._v(" "), _c('p', [_vm._v("5．查询：本网站将对会员在本网站平台的所有操作进行记录，不论该操作之目的最终是否实现。会员可以通过会员账户实时查询会员账户名下的交易记录。会员理解并同意会员最终收到款项的服务是由会员经过认证的银行卡对应的银行提供的，需向该银行请求查证。会员理解并同意通过本网站平台查询的任何信息仅作为参考，不作为相关操作或交易的证据或依据；如该等信息与本网站记录存在任何不一致，应以本网站提供的书面记录为准。 会员了解，上述充值、代收/代付及取现服务涉及本网站与银行、第三方支付机构等第三方的合作。会员同意：(a) 受银行、第三方支付机构等第三方仅在工作日进行资金代扣及划转的现状等各种原因所限，本网站不对前述服务的资金到账时间做任何承诺，也不承担与此相关的责任，包括但不限于由此产生的利息或其他损失；(b) 一经会员使用前述服务，即表示会员不可撤销地授权本网站进行相关操作，且该等操作是不可逆转的，会员不能以任何理由拒绝付款或要求取消交易。就前述服务，本网站暂不会向会员收取费用，但会员应按照第三方的规定向第三方支付费用，具体请见第三方网站的相关信息。与第三方之间就费用支付事项产生的争议或纠纷，与本网站无关。")]), _vm._v(" "), _c('p', [_vm._v("6．会员每次使用本网站服务应直接登录本网站平台或使用本网站提供的链接登陆本网站平台（网址：http://www.xinhuajindian.com, 如本网站以公告等形式发布新的网址，请届时登陆新的网址），而不要通过邮件或其他网站提供的链接登录。会员每次拨打本网站客户电话应拨打本网站官方网站提供的客服电话********（如本网站以公告等形式发布新的客服电话，请届时拨打新的客服电话），而不要拨打其他任何电话。")]), _vm._v(" "), _c('p', [_vm._v("7．会员同意，本网站有权在提供本网站服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息（包括但不限于在本网站平台的任何页面上投放广告），并且，会员同意接受本网站通过电子邮件或其他方式向会员发送商品促销或其他相关商业信息。")]), _vm._v(" "), _c('p', [_vm._v("第十条 本网站将为会员提供以下合同管理服务：")]), _vm._v(" "), _c('p', [_vm._v("1．在本网站平台交易需订立的合同采用电子合同方式。会员使用会员账户登录本网站平台后，根据本网站的相关规则，以会员账户ID在本网站平台通过点击确认或类似方式签署的电子合同即视为会员本人真实意愿并以会员本人名义签署的合同，具有法律效力。会员应妥善保管自己的账户密码等账户信息，会员通过前述方式订立的电子合同对合同各方具有法律约束力，会员不得以其账户密码等账户信息被盗用或其他理由否认已订立的合同的效力或不按照该等合同履行相关义务。")]), _vm._v(" "), _c('p', [_vm._v("2．会员根据本协议以及本网站的相关规则签署电子合同后，不得擅自修改该合同。本网站向会员提供电子合同的保管、查看、核对服务。会员通过本网站签订的所有电子合同均统一由本网站保管。如对电子合同真伪或电子合同的内容有任何疑问，会员可通过登陆账户下载合同并对合同进行核对。如对此有任何争议，应以本网站记录的合同为准。")]), _vm._v(" "), _c('p', [_vm._v("3．会员不得私自仿制、伪造在本网站平台上签订的电子合同或印章，不得用伪造的合同进行招摇撞骗或进行其他非法使用，否则由会员自行承担责任。")]), _vm._v(" "), _c('p', [_vm._v("第十一条 除外责任")]), _vm._v(" "), _c('p', [_vm._v("1．在任何情况下，对于会员使用本网站服务过程中涉及由第三方提供相关服务的责任由该第三方承担，本网站不承担该等责任。本网站不承担责任的情形包括但不限于：")]), _vm._v(" "), _c('p', [_vm._v("(1) 因银行、第三方支付机构等第三方未按照会员和/或本网站指令进行操作引起的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(2) 因银行、第三方支付机构等第三方原因导致资金未能及时到账或未能到账引起的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(3) 因银行、第三方支付机构等第三方对交易限额或次数等方面的限制而引起的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(4) 因其他第三方的行为或原因导致的任何损失或责任。")]), _vm._v(" "), _c('p', [_vm._v("2．因会员自身的原因导致的任何损失或责任，由会员自行负责，本网站不承担责任。本网站不承担责任的情形包括但不限于：")]), _vm._v(" "), _c('p', [_vm._v("(1) 会员未按照本协议或本网站平台公布的规则进行操作导致的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(2) 因会员使用的银行卡的原因导致的损失或责任，包括会员使用未经认证的银行卡或使用非会员本人的银行卡或使用信用卡，会员的银行卡被冻结、挂失等导致的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(3) 会员向本网站发送的指令信息不明确导致的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(4) 会员账户内余额不足导致的任何损失或责任；")]), _vm._v(" "), _c('p', [_vm._v("(5) 其他因会员原因导致的任何损失或责任。")]), _vm._v(" "), _c('h2', [_vm._v("第三章 风险提示")]), _vm._v(" "), _c('p', [_vm._v("第十二条 会员了解并认可，任何通过本网站进行的交易并不能避免以下风险的产生，本网站不能也没有义务为如下风险负责：")]), _vm._v(" "), _c('p', [_vm._v("1．政策风险：有关法律、法规及相关政策、规则发生变化，会员有可能遭受损失；")]), _vm._v(" "), _c('p', [_vm._v("2．违约风险：因其他交易方未按时足额履约，会员有可能遭受损失；")]), _vm._v(" "), _c('p', [_vm._v("3．不可抗力因素导致的风险；")]), _vm._v(" "), _c('p', [_vm._v("4．因会员的过错导致的任何损失，该过错包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、会员使用的计算机系统被第三方侵入、会员委托他人代理交易时他人恶意或不当操作而造成的损失；")]), _vm._v(" "), _c('p', [_vm._v("5．因为本网站或者第三方合作网站的设备、系统问题或者因为计算机病毒造成的损失。 以上并未涵盖会员通过本网站进行交易的全部风险。会员在做出交易决策前，应全面了解相关交易，谨慎决策，并自行承担风险。")]), _vm._v(" "), _c('h2', [_vm._v("第四章 守法义务及承诺")]), _vm._v(" "), _c('p', [_vm._v("第十三条 会员承诺绝不为任何非法目的或以任何非法方式使用本网站服务，并承诺遵守中国相关法律、法规及一切使用互联网之国际惯例，遵守所有与本网站服务有关的网络协议、规则和程序。")]), _vm._v(" "), _c('p', [_vm._v("第十四条 会员同意并保证不得利用本网站服务从事侵害他人权益或违法之行为，若有违反应负所有法律责任。上述行为包括但不限于：")]), _vm._v(" "), _c('p', [_vm._v("1．侵害他人隐私权、名誉、商业秘密、著作权、商标权、专利权及其他权益；")]), _vm._v(" "), _c('p', [_vm._v("2．违反依法律或协议所应负之保密义务；")]), _vm._v(" "), _c('p', [_vm._v("3．冒用他人名义使用本网站服务；")]), _vm._v(" "), _c('p', [_vm._v("4．涉嫌洗钱、套现或进行传销活动的；")]), _vm._v(" "), _c('p', [_vm._v("5．做出任何传染电脑病毒或是侵害本网站服务系統、资料等行为；")]), _vm._v(" "), _c('p', [_vm._v("6．侵犯本网站的商业利益；")]), _vm._v(" "), _c('p', [_vm._v("7．其他不适当行为。")]), _vm._v(" "), _c('p', [_vm._v("第十五条 会员承诺，由于会员违反本协议，或由于会员使用本网站服务违反了法律法规或侵犯了第三方的权利从而导致第三方提起相应的赔偿请求的，会员将对本网站及其关联方、合作伙伴、董事以及雇员给予全额补偿并使之不受损害。")]), _vm._v(" "), _c('p', [_vm._v("第十六条 会员承诺，会员通过本网站上传或发布的信息均真实有效，会员向本网站提交的任何资料均准确、真实、有效。如会员因网上交易与其他会员产生纠纷的，其他会员有权通过司法部门要求网站提供相关资料。如因违背上述承诺，造成本网站或本网站其他会员损失的，会员将承担相应责任。")]), _vm._v(" "), _c('p', [_vm._v("第十七条 会员承诺，当本网站有足够的证据可以认定会员有损害其他注册会员利益的行为或违反本协议的行为时，本网站有权在本网站上公布会员的相关行为。")]), _vm._v(" "), _c('h2', [_vm._v("第五章 账户安全及管理")]), _vm._v(" "), _c('p', [_vm._v("第十八条 会员了解并同意，确保会员的账户及密码安全是会员的责任。会员将对利用会员的账户及密码所进行的一切操作及发表的言论负责，并同意以下事项：")]), _vm._v(" "), _c('p', [_vm._v("1．会员不得对他人泄露账户或密码，亦不可使用他人的账户和密码。因黑客、病毒或会员的保管疏忽等原因导致会员的账户遭他人非法使用的，本网站不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("2．本网站通过会员的会员账户及密码来识别会员的指令，会员确认，使用会员的账户和密码登陆后在本网站的一切行为均代表会员本人并且是会员本人真实意思的表达。会员账户操作所产生的电子信息记录均为会员行为的有效凭据，并由会员本人承担由此产生的全部责任。")]), _vm._v(" "), _c('p', [_vm._v("3．冒用他人账户及密码的，本网站及其合法授权主体保留追究实际使用人连带责任的权利。")]), _vm._v(" "), _c('p', [_vm._v("3．冒用他人账户及密码的，本网站及其合法授权主体保留追究实际使用人连带责任的权利。")]), _vm._v(" "), _c('p', [_vm._v("第十九条 会员如发现有第三人冒用或盗用会员的账户及密码或其他任何未经合法授权的情形，应立即以有效方式通知本网站，要求本网站暂停相关服务，否则由此产生的一切责任由会员本人承担。同时，会员理解本网站对会员的请求采取行动需要合理期限，在此之前，本网站对第三人使用该服务所导致的损失不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("第二十条 本网站有权基于单方独立判断，在其认为可能发生危害交易安全等情形时，不经通知而先行暂停或终止向会员提供本协议项下的全部或部分会员服务。前述情形包括但不限于：")]), _vm._v(" "), _c('p', [_vm._v("1．本网站查证会员提供的个人资料不具有真实性、有效性；")]), _vm._v(" "), _c('p', [_vm._v("2．本网站发现异常交易或有违约可能或有违法行为；")]), _vm._v(" "), _c('p', [_vm._v("3．会员有损害其他会员的行为；")]), _vm._v(" "), _c('p', [_vm._v("4．本网站认为会员的账户涉嫌洗钱、套现、被冒用或其他本网站所认为有风险之情形；")]), _vm._v(" "), _c('p', [_vm._v("5．本网站认为会员已经违反本协议中的规定。")]), _vm._v(" "), _c('p', [_vm._v("第二十一条 会员同意，会员账户的暂停或终止不代表会员责任的消灭，会员仍应对使用本网站服务期间的行为承担可能的违约或损害赔偿责任。")]), _vm._v(" "), _c('h2', [_vm._v("第六章 服务的中止和终止")]), _vm._v(" "), _c('p', [_vm._v("第二十二条 除非会员申请终止本协议及注销相应账户且经本网站同意或者本网站终止本协议，否则本协议始终有效。在会员违反了本协议以及相关法律法规之规定或在相关政府部门的要求下，本网站有权终止本协议、关闭会员的账户或者限制会员使用本网站，并通过电子邮件、移动通信设配等方式告知会员。但本网站的该种行为不能免除会员根据本协议或在本网站生成的其他协议项下的还未履行完毕的义务。")]), _vm._v(" "), _c('p', [_vm._v("第二十三条 基于互联网的特殊性，出现下列情况导致网络服务中止和终止的，本网站不承担任何责任：")]), _vm._v(" "), _c('p', [_vm._v("1．本网站系统维护期间；")]), _vm._v(" "), _c('p', [_vm._v("2．电信设备出现故障不能进行数据传输的；")]), _vm._v(" "), _c('p', [_vm._v("3．由于黑客攻击、网络供应商技术调整或设备故障、网站升级等原因而造成的本网站服务中断或延迟；")]), _vm._v(" "), _c('p', [_vm._v("4．不可抗力；")]), _vm._v(" "), _c('p', [_vm._v("5．相关政府机构的要求。")]), _vm._v(" "), _c('p', [_vm._v("第二十四条 会员决定不再使用会员的账户时，应首先清偿所有应付款项（包括但不限于借款本金、利息、罚息、违约金、服务费、管理费等），再将会员账户中的可用款项（如有剩余）全部提现或者向本网站发出其它合法的支付指令，并向本网站申请注销会员的账户，经本网站审核同意后可正式注销会员的账户。")]), _vm._v(" "), _c('h2', [_vm._v("第七章 责任范围及限制")]), _vm._v(" "), _c('p', [_vm._v("第二十五条 本网站的内容可能涉及由第三方所有、控制或者运营的其他网站的内容或链接（以下称“第三方网站”）。本网站不能保证也没有义务保证第三方网站上的信息的真实性和有效性。对于该等内容或链接，会员确认按照第三方网站的协议确定相关权利义务，而不是按照本协议。第三方网站的内容、产品、广告和其他任何信息均由会员自行判断并承担风险，而与本网站无关。")]), _vm._v(" "), _c('p', [_vm._v("第二十六条 会员自本网站及本网站工作人员或经由本网站服务取得的建议或资讯，无论其为书面或口头，均不构成本网站对本网站服务的任何保证。")]), _vm._v(" "), _c('p', [_vm._v("第二十七条 在法律允许的情况下，本网站对于与本协议有关或由本协议引起的任何间接的、惩罚性的、特殊的、派生的损失，不论是如何产生的，也不论是由对本协议的违约（包括违反保证）还是由侵权造成的，均不负有任何责任。")]), _vm._v(" "), _c('p', [_vm._v("第二十八条 除本协议另有规定外，在任何情况下，本网站对本协议所承担的违约赔偿责任总额不超过向会员收取的当次本网站服务费用总额。")]), _vm._v(" "), _c('h2', [_vm._v("第八章 会员信息及隐私权保护")]), _vm._v(" "), _c('p', [_vm._v("第二十九条 本网站对于会员提供的、本网站自行收集的、经认证的个人信息将按照本协议予以保护、使用或者披露。")]), _vm._v(" "), _c('p', [_vm._v("第三十条 本网站有权通过其他合法渠道搜集会员的额外资料，以更好地掌握会员的情况，在提高会员交易安全性的同时，也便于本网站为会员提供更加优质高效的服务。")]), _vm._v(" "), _c('p', [_vm._v("第三十一条 会员同意，本网站可在本网站的某些网页上使用诸如“Cookies”的资料收集装置。\n\t")]), _c('p', [_vm._v("第三十二条 本网站按照会员在本网站上的行为自动追踪会员的相关资料。在不透露会员的隐私资料的前提下，本网站有权对整个会员数据库进行分析。")]), _vm._v(" "), _c('p', [_vm._v("第三十三条 会员同意,本网站可以使用会员的个人资料以改进本网站的推广和促销工作、分析网站的使用率、改善本网站的内容和产品推广形式，并使本网站的网站内容、设计和服务更能符合会员的需求。")]), _vm._v(" "), _c('p', [_vm._v("第三十四条 会员同意本网站利用会员的资料与会员联络并在某些情况下向会员传递针对会员的兴趣而提供的信息，例如：有针对性的广告条、管理方面的通知、产品提供等信息。")]), _vm._v(" "), _c('p', [_vm._v("第三十五条 在会员向本网站提供的资料与事实不符时，本网站有权根据实际的审核结果在不通知会员的情况下对会员所填写的与事实不符的资料进行更改。")]), _vm._v(" "), _c('p', [_vm._v("第三十六条 在本网站提供的交易活动中，会员无权要求本网站提供其他会员的个人资料，除非符合以下条件：")]), _vm._v(" "), _c('p', [_vm._v("1. 与会员有关的其他会员逾期未归还借款本息；")]), _vm._v(" "), _c('p', [_vm._v("2. 会员已向法院起诉其他会员的在本网站活动中的违约行为；")]), _vm._v(" "), _c('p', [_vm._v("3. 本网站所属公司出现被吊销营业执照、解散、清算、宣告破产等情形。")]), _vm._v(" "), _c('p', [_vm._v("第三十七条 如会员通过与本网站签署有关协议等方式获得其他会员的个人资料，不得将该个人资料用于除还本付息或向借款人追偿以外的其他用途，除非该个人资料根据现行法律规定或应相关政府部门要求予以使用。")]), _vm._v(" "), _c('p', [_vm._v("第三十八条 会员不得利用本网站提供的服务或其他电子邮件转发服务发送垃圾邮件或其他可能影响本网站系统运行或违反本网站的会员协议或隐私条款的内容。")]), _vm._v(" "), _c('p', [_vm._v("第三十九条 会员同意本网站可使用会员的资料用以解决与会员有关的纠纷，该资料包括但不限于本网站持有的有关会员的档案中的资料以及本网站通过其他方式自行收集的资料。")]), _vm._v(" "), _c('p', [_vm._v("第四十条 会员因履行本协议提供给本网站的信息，本网站不会出售或免费共享给任何第三方，但以下情况除外：")]), _vm._v(" "), _c('p', [_vm._v("1．为提供独立服务需要，应服务方要求而提供与服务相关的必要信息的；")]), _vm._v(" "), _c('p', [_vm._v("2．具有合法调阅信息权限的政府部门或其他机构（如公安机关、法院等）从合法渠道调阅相关信息的；")]), _vm._v(" "), _c('p', [_vm._v("3．本网站关联实体运营需要的；")]), _vm._v(" "), _c('p', [_vm._v("4．经本网站会员同意的。")]), _vm._v(" "), _c('p', [_vm._v("第四十一条 鉴于技术限制，本网站不能确保会员的个人资料不会通过本隐私条款中未列明的途径泄露出去，对此本网站不承担责任。")]), _vm._v(" "), _c('p', [_vm._v("第四十二条 本网站有义务根据有关法律要求向司法机关和政府部门提供会员的个人资料。在会员未能按照与本网站签订的服务协议或者与本网站其他会员签订的协议等的约定履行自己应尽的义务时，本网站有权根据自己的判断或者与该笔交易有关的其他会员的请求披露会员的个人资料。会员出现逾期还款或违约时，本网站有权将会员拉入网站黑名单并将会员的逾期还款或违约行为在本网站予以公布。")]), _vm._v(" "), _c('h2', [_vm._v("第九章 知识产权的保护")]), _vm._v(" "), _c('p', [_vm._v("第四十三条 本网站上所有内容，包括但不限于著作、图片、档案、资讯、资料、平台架构、平台网页设计等，均由本网站依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。")]), _vm._v(" "), _c('p', [_vm._v("第四十四条 非经本网站书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站程序或内容。")]), _vm._v(" "), _c('p', [_vm._v("第四十五条 会员未经本网站的明确书面同意不得对本网站或其内容进行任何衍生利用；不得为其他商业利益而下载或拷贝本网站内容，不得使用任何数据采集或类似的数据采集和摘录的工具对本网站的信息进行数据采集。")]), _vm._v(" "), _c('p', [_vm._v("第四十六条 未经本网站明确书面同意，会员不得使用本网站或其关联公司的商标、标识或其他专有信息（包括图像、文字、网页设计或形式）。未经本网站明确书面同意，会员不得以任何方式使用本网站或其关联公司的名字和商标进行商业活动。任何未经授权的使用，本网站都保留追究其法律责任的权利。")]), _vm._v(" "), _c('p', [_vm._v("第四十七条 尊重知识产权是会员应尽的义务，如有违反，会员应对本网站承担损害赔偿等法律责任。")]), _vm._v(" "), _c('h2', [_vm._v("第十章 条款的解释、法律适用及争端解决")]), _vm._v(" "), _c('p', [_vm._v("第四十八条 本协议是由会员与本网站共同签订的，会员在本网站的所有活动受本协议的约束。本协议内容包括但不限于协议正文条款及已经发布的或将来可能发布的各类规则，所有条款和规则为协议不可分割的一部分，与协议正文具有同等法律效力。")]), _vm._v(" "), _c('p', [_vm._v("第四十九条 在本网站的某些部分或页面中，或者会员使用本网站相关服务产品的过程中，可能存在除本协议以外的单独的附加服务条款或协议，当这些服务条款或协议与本协议条款及规则存在冲突时，则前述本协议条款和规则以外的服务条款或协议将优先适用。")]), _vm._v(" "), _c('p', [_vm._v("第五十条 本网站对本服务协议拥有最终的解释权。")]), _vm._v(" "), _c('p', [_vm._v("第五十一条 因本协议所引起的会员与本网站的任何纠纷或争议，首先应友好协商解决，协商不成的，会员在此完全同意将纠纷或争议提交新华金典财富管理股份有限公司所在地有管辖权的人民法院诉讼解决。")])])
}]}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wapper"
  }, [_c('ul', {
    staticClass: "tab clearfix",
    attrs: {
      "id": "litab"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      class: [_vm.commonClass, item.active ? _vm.activeClass : ''],
      on: {
        "click": function($event) {
          _vm.navClickEvent(_vm.items, index)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_c('span'), _vm._v(_vm._s(item.text))])])
  })), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container rule-dv"
  }, [_c('h2', [_vm._v("一、理财券使用规则：")]), _vm._v(" "), _c('p', [_vm._v("1、理财券在投资中可作为虚拟金使用，且每次只能使用一张；")]), _vm._v(" "), _c('p', [_vm._v("2、理财券不能直接提现，使用理财券产生的利息可以提现；")]), _vm._v(" "), _c('p', [_vm._v("3、零钱罐不可使用理财券。")]), _c('br'), _vm._v(" "), _c('p', [_vm._v("理财券使用示例：如用户A购买10000元理财产品，使用2000元理财券，则实际支付10000元，产品到期后将获得10000元本金和12000元产生的利息。")]), _vm._v(" "), _c('h2', [_vm._v("二、红包使用规则：")]), _vm._v(" "), _c('p', [_vm._v("1、每次投资只能使用一个红包；")]), _vm._v(" "), _c('p', [_vm._v("2、红包在购买理财产品成功后，方可提现；")]), _vm._v(" "), _c('p', [_vm._v("3、红包可用于30天及以上理财产品（新手产品除外）。")]), _c('br'), _vm._v(" "), _c('p', [_vm._v("红包使用示例：如用户B购买2000元理财产品时，选择使用20元红包，则在购买成功后20元红包立即返还至账户余额，用户可将红包提现或用于投资。")])])
}]}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "art-list"
  }, _vm._l((_vm.todos2), function(todo2, index) {
    return _c('div', {
      staticClass: "art-box",
      class: [todo2.select ? _vm.activeClass : ''],
      on: {
        "click": function($event) {
          _vm.tab3(_vm.todos2, index)
        }
      }
    }, [_c('div', {
      staticClass: "art-title"
    }, [_vm._v(_vm._s(todo2.text))]), _vm._v(" "), (_vm.seen) ? _c('div', {
      staticClass: "art-answ",
      domProps: {
        "innerHTML": _vm._s(todo2.text1)
      }
    }, [_vm._v(_vm._s(todo2.text1))]) : _vm._e()])
  }))
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "div_bjcolor"
  }, [(_vm.mask) ? _c('div', {
    staticClass: "mask",
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('div', {
    staticClass: "mask-content"
  }, [_vm._m(0), _vm._v(" "), _c('span', [_vm._v("您还未登录，请先登录！")]), _vm._v(" "), _c('p', {
    on: {
      "click": function($event) {
        _vm.nologin()
      }
    }
  }, [_vm._v("点击登录")])])]) : _vm._e(), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cont2"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(110)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "peoNum"
  }, [_vm._v(_vm._s(_vm.friend))]), _vm._v(" "), _c('p', {
    staticClass: "money"
  }, [_vm._v(_vm._s(_vm.money))]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        path: './reward_detail',
        query: {
          source: this.$route.query.source,
          auth: this.$route.query.auth,
          username: this.$route.query.username
        }
      }
    }
  }, [_c('span', {
    staticClass: "jilu"
  }, [_vm._v("查看奖励明细>>")])])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('button', {
    directives: [{
      name: "tap",
      rawName: "v-tap",
      value: ({
        methods: _vm.invita
      }),
      expression: "{methods :invita}"
    }],
    staticClass: "yaoq",
    attrs: {
      "disabled": _vm.dis
    }
  }, [_vm._v("邀请好友")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_bg"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(16)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cont1"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(109)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ewm"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content3"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(111)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "con-bottom"
  }, [_c('p', [_vm._v("*邀请人奖励关系的有效期为：被邀请好友注册后30天，30天后奖励关系自动解除。")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("您所赚奖金=好友投资金额x奖励系数")]), _vm._v(" "), _c('li', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("\n\t\t\t\t\t\t奖励条件\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v("\n\t\t\t\t\t\t奖励系数\n\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资新手专享")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v("0.03%")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资月标")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v("0.1%")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资半季标")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v("0.13%")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资双月标")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v("0.15%")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon"
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资季标")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v(" 0.2%")])]), _vm._v(" "), _c('li', {
    staticClass: "clearfix fon",
    staticStyle: {
      "border-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "li-left"
  }, [_vm._v("投资双季标")]), _vm._v(" "), _c('div', {
    staticClass: "li-right"
  }, [_vm._v(" 0.3%")])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_vm._v("例如:您邀请的好友在注册后30天内共投资货押宝双季标10万元，您所获得的奖励是300元  ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content4"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(112)
    }
  }), _vm._v(" "), _c('p', [_vm._v("被邀请好友投资成功后，邀请人奖励会显示在【发现】>【邀请好友】>【查看奖励明细】中，当月奖励将于次月10号一次性发放至邀请人的新华金典账户，届时可直接用于投资或提现。")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content5"
  }, [_c('img', {
    staticStyle: {
      "margin-bottom": "50px"
    },
    attrs: {
      "src": __webpack_require__(113)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "po-1"
  }, [_vm._v("《中华人民共和国个人所得税法》第三条第四款规定“劳务报酬所得，适用比例税率，税率为百分之二十。对劳务报酬所得一次收入畸高的，可以实行加成征收，具体办法有国务院规定。”")]), _vm._v(" "), _c('p', {
    staticClass: "po-2"
  }, [_vm._v("邀请人奖励将会根据平台的运营情况进行相应的调整，届时以公告通知为准。")]), _vm._v(" "), _c('p', {
    staticClass: "po-3"
  }, [_vm._v("本活动最终解释权为新华金典所有。")])])
}]}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    attrs: {
      "src": __webpack_require__(97),
      "alt": ""
    }
  })
},staticRenderFns: []}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xinhua_bj"
  }, [(_vm.mask) ? _c('div', {
    staticClass: "mask",
    on: {
      "touchmove": function($event) {
        $event.preventDefault();
      }
    }
  }, [_c('div', {
    staticClass: "mask-content"
  }, [_vm._m(0), _vm._v(" "), _c('span', [_vm._v("您还未登录，请先登录！")]), _vm._v(" "), _c('p', {
    on: {
      "click": function($event) {
        _vm.nologin()
      }
    }
  }, [_vm._v("点击登录")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "xianhua_box1"
  }, [_c('img', {
    staticClass: "img_qiandao",
    attrs: {
      "src": __webpack_require__(100),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "qiandao_left"
  }, [_vm._v("当前积分"), _c('em', [_vm._v(_vm._s(_vm.totalPoint))])]), _vm._v(" "), _c('button', {
    staticClass: "center_btn",
    attrs: {
      "disabled": _vm.jin
    },
    on: {
      "click": function($event) {
        _vm.change()
      }
    }
  }, [_c('span', {
    staticClass: "qiandao_test"
  }, [_vm._v(_vm._s(_vm.dianji))])]), _vm._v(" "), _c('span', {
    staticClass: "qiandao_right"
  }, [_c('router-link', {
    attrs: {
      "to": {
        path: './integral_detail',
        query: {
          source: this.$route.query.source,
          auth: this.$route.query.auth
        }
      }
    }
  }, [_c('div', {
    staticClass: "ji_btn"
  }, [_vm._v("查看积分明细>>")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "xianhua_box2"
  }, [_c('ul', [_c('li', {
    on: {
      "click": function($event) {
        _vm.toInviteFriend()
      }
    }
  }, [_vm._v("邀请好友可获"), _c('span', {
    staticClass: "color_text"
  }, [_vm._v(" 双倍积分")]), _vm._m(1)])])]), _vm._v(" "), _c('div', {
    staticClass: "xianhua_box3"
  }, [_c('vue-event-calendar', {
    attrs: {
      "events": _vm.demoEvents
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return _vm._l((props.showEvents), function(event, index) {
          return _c('div', {
            staticClass: "event-item"
          }, [_vm._v("\n            " + _vm._s(event) + "\n          ")])
        })
      }
    }])
  })], 1), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_bg"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(16)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "black_right"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(95)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xianhua_box4"
  }, [_c('h2', {
    staticClass: "h2_center"
  }, [_vm._v("奖励规则")]), _vm._v(" "), _c('ul', [_c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(98),
      "alt": ""
    }
  }), _vm._v("每日签到获得"), _c('span', {
    staticClass: "jifen_color"
  }, [_vm._v("+10积分")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(104),
      "alt": ""
    }
  }), _vm._v("每月累计签到7天，额外奖励"), _c('span', {
    staticClass: "jifen_color"
  }, [_vm._v("+30积分+小宝箱")])]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": __webpack_require__(103),
      "alt": ""
    }
  }), _vm._v("每月累计签到28天，额外奖励"), _c('span', {
    staticClass: "jifen_color"
  }, [_vm._v("+200积分+大宝箱")])])])])
}]}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container1 services"
  }, [_c('p', {
    staticClass: "f30"
  }, [_vm._v("借款协议")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-top": "30px",
      "text-align": "right"
    }
  }, [_vm._v("编号：" + _vm._s(_vm.recordNum))]), _vm._v(" "), _c('p', [_vm._v("甲方（出借人）："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.cjr))])])]), _vm._v(" "), _c('p', [_vm._v("身份证号码："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.idCardCjr))])])]), _vm._v(" "), _c('p', [_vm._v(" 地址：")]), _vm._v(" "), _c('p', [_vm._v("乙方（借款人）："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.realName))])])]), _vm._v(" "), _c('p', [_vm._v("身份证号码："), _c('span', [_c('ins', [_vm._v(_vm._s(_vm.idcard))])])]), _vm._v(" "), _c('p', [_vm._v("地址：")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("地址：")]), _vm._v(" "), _c('p', [_vm._v("丁方（车贷审查服务方）："), _c('ins', [_vm._v(_vm._s(_vm.carDingf))])]), _vm._v(" "), _c('p', [_vm._v("地址："), _c('ins', [_vm._v(_vm._s(_vm.carDingfAddress))])]), _vm._v(" "), _c('p', [_vm._v("乙方因资金需求，通过丙方和丁方的服务平台向甲方借款，甲方亦同意提供借款，甲乙双方有意成立借贷关系。各方根据平等、自愿、诚实信用的原则，达成本协议，以期共同遵守：")]), _vm._v(" "), _c('p', [_vm._v("一、定义")]), _vm._v(" "), _c('p', [_vm._v("除非缔约方另有约定，本协议下列术语定义如下：")]), _vm._v(" "), _c('p', [_vm._v("1.1  平台：在本协议中如无特别说明，均特指由新华金典金融平台（网址为：http://www.xinhuajindian.com），是专业提供借款项目信息发布与管理、交易管理、交易资金结算（由第三方支付机构提供）等服务的互联网金融和商业信息中介服务平台。")]), _vm._v(" "), _c('p', [_vm._v("1.2  甲方：指拥有现金，愿意为在新华金典金融平台发布借款需求的乙方提供借款，且具有完全民事行为能力的自然人。甲方具有合格的投资能力、相应的风险识别与承受能力，并自愿承担交易风险。")]), _vm._v(" "), _c('p', [_vm._v("1.3  乙方：指存在资金需求，同意通过丙方平台发布其借款需求，承诺按本协议约定条款还本付息，而从甲方借款资金的自然人。")]), _vm._v(" "), _c('p', [_vm._v("1.4 第三方支付机构：指具有《支付业务许可证》等合法业务资质的，独立于交易各方的，为平台用户提供交易资金结算等服务的第三方非金融机构，这里特制丙方指定的支付平台（宝付网络科技（上海）有限公司）。")]), _vm._v(" "), _c('p', [_vm._v("1.5 第三方资金托管：第三方支付机构为甲方和乙方提供独立的托管账户及资金交易结算服务，保证其资金独立性，与新华金典金融平台的自有资金相互隔离。")]), _vm._v(" "), _c('p', [_vm._v("1.6 筹集期：指从乙方借款项目在平台发布之日起至借款资金筹集完毕之日止的时间段。该期限以新华金典金融平台具体留存记录为准。")]), _vm._v(" "), _c('p', [_vm._v("1.7 借款本金：指乙方在新华金典金融平台发布的借款项目在筹集期所筹集达到的资金总额。")]), _vm._v(" "), _c('p', [_vm._v("二、借款 ")]), _vm._v(" "), _c('p', [_vm._v("2.1 借款基本信息，见下表：")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', [_vm._v("借款本金：")]), _c('td', [_vm._v("人民币" + _vm._s(_vm.copies))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款期限：")]), _c('td', [_vm._v(_vm._s(_vm.st) + "起  至 " + _vm._s(_vm.et) + " 止，共 " + _vm._s(_vm.lcqx) + "日")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("    起息日：")]), _c('td', [_vm._v(_vm._s(_vm.st))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款利率：")]), _c('td', [_vm._v(_vm._s(_vm.annualEarnings) + " %")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("借款用途：")]), _c('td', [_vm._v(_vm._s(_vm.jkyt))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('p', [_vm._v("2.2 甲方通过新华金典金融平台以网络在线点击确认的方式接受本协议后，视为确认投标，即不可撤销地授权第三方支付机构将等额于“借款基本信息”中列明的借款本金金额的资金由以甲方名义开立的账户支付投资资金。第三方支付机构有权冻结甲方账户内相应资金。")]), _vm._v(" "), _c('p', [_vm._v("2.3 起息日是指甲方通过第三方支付机构放款成功之日。放款成功日是指借款人所需资金全部筹集完毕后，全部出借人将相应借款通过第三方支付机构支付投资资金的最终时间为准。")]), _vm._v(" "), _c('p', [_vm._v("2.4 借款期间是指起息日至借款期限界满之日止（以下简称借款期间终止日）。")]), _vm._v(" "), _c('p', [_vm._v("2.5 就本协议项下放款成功日、借款期限终止日及还款日而言，如当月无该日期，则以当月的最后一日为该日。如该日为非工作日的，则顺延至该日后的第一个工作日的15:00点之前。")]), _vm._v(" "), _c('p', [_vm._v("三、各方权利义务")]), _vm._v(" "), _c('p', [_vm._v("3.1 甲方的权利义务")]), _vm._v(" "), _c('p', [_vm._v("3.1.1 甲方承诺其为订立本协议提供的信息及时、合法、真实、有效，用于出借的资金来源合法。如果本合同之外的第五方对资金归属、合法性问题提出异议，甲方应自行解决。如甲方未能解决，则甲方不得对其出借资金产生的孳息主张权利（包括但不限于利息等）。")]), _vm._v(" "), _c('p', [_vm._v("3.1.2 甲方同意以网络页面点击确认的方式签订本协议，并不得以此为由拒绝履行本协议项下的义务。自点击确认完成时即视为甲方同意不可撤销及完全地授权新华金典金融平台自主生成出借信息完成最终借款项目的撮合，且在未出现法定事由时，甲方不得否认本协议项下债权债务关系或以任何方式撤回、撤销本协议。")]), _vm._v(" "), _c('p', [_vm._v("3.1.3 甲方知晓并同意，借款金额自甲方点击确认投资之日起至起息日（不含）的这段期间不产生任何收益（包括但不限于利息等），甲方有权从乙方处获得借款期间内基于借款金额的约定利息收益。")]), _vm._v(" "), _c('p', [_vm._v("3.1.4 甲方同意并授权第三方支付机构根据本协议约定从其账户中划转资金以履行出借义务。甲方应确保在划转之时其账户中有足够的资金以完成划款。")]), _vm._v(" "), _c('p', [_vm._v("3.1.5 甲方知晓并同意：甲方独立对丁方在新华金典金融平台发布的本协议项下的交易信息进行审慎合理的判断，基于其真实意思表示做出借款决定，并自行承担交易风险。丙方作为信息发布的中介机构，不承担本协议项下甲方的任何资金损失风险。")]), _vm._v(" "), _c('p', [_vm._v("3.1.6 甲方在此确认，甲方在做出借款决定及签订本协议时，对不能完全知晓乙方的真实姓名、身份证号码、和住址的情况应属明知，并自行承担交易风险。")]), _vm._v(" "), _c('p', [_vm._v("3.1.7 甲方特此不可撤销的授权丙、丁两方向乙方回收应还借款本息、提前还款违约金（如有）、对乙方借款到期提醒及违约催收和提起诉讼。以上委托事宜，甲方同意丙方可进行转委托，无需另行取得甲方书面同意或确认。")]), _vm._v(" "), _c('p', [_vm._v("3.1.8 就甲方在本协议项下对乙方的部分或全部债权，甲方有权根据自己的意愿，在符合平台交易规则和债权转让条件下对外转让。")]), _vm._v(" "), _c('p', [_vm._v("3.2 乙方的权利义务")]), _vm._v(" "), _c('p', [_vm._v("3.2.1 乙方承诺为订立本协议而提供的信息及时、合法、真实、有效。乙方隐瞒真实情况或发布虚假信息给甲方、丙方、丁方及其他合同之外的第五方造成损失的，甲方、丙方、丁方或其他合同之外的第五方有权向乙方追责，各方应给予必要的协助。")]), _vm._v(" "), _c('p', [_vm._v("3.2.2 乙方应保证借款用途合法合规，且严格按照本协议项下借款用途使用借款。")]), _vm._v(" "), _c('p', [_vm._v("3.2.3 乙方认可本协议的签订生成方式，并不以此为由拒绝履行本协议项下的义务。在未出现法定事由时，乙方不得否认本协议项下债权债务关系或以任何方式撤回、撤销本协议。")]), _vm._v(" "), _c('p', [_vm._v("3.2.4 乙方应按照本协议的约定按时支付利息及偿还借款本金。")]), _vm._v(" "), _c('p', [_vm._v("3.2.5 乙方的资信状况及还款能力出现重大不利影响时，乙方应以书面、传真、电子邮件等方式及时通知甲丙丁三方。")]), _vm._v(" "), _c('p', [_vm._v("3.2.6 乙方接受丙方提供的居间服务，并同意向丙方支付一定居间服务费。服务费的具体数额及支付方式由双方另行约定。")]), _vm._v(" "), _c('p', [_vm._v("3.2.7 乙方接受丁方提供的居间服务，并同意向丁方支付一定居间服务费。服务费的具体数额及支付方式由乙方与丁方签订的居间服务协议另行约定。")]), _vm._v(" "), _c('p', [_vm._v("3.3 丙方的权利义务 ")]), _vm._v(" "), _c('p', [_vm._v("3.3.1 丙方为甲方、乙方、丁方提供交易信息发布服务。丙方在新华金典金融平台上发布的相关交易信息、个人信息等均由甲方和乙方提供，并由甲方、乙方、丁方对各自提供信息的及时性、真实性、准确性和完整性负责。")]), _vm._v(" "), _c('p', [_vm._v("3.3.2 丙方为促成甲方和乙方达成本协议项下的借款提供撮合交易的中介服务。甲方、乙方应根据其审慎、合理的判断决定是否参与交易。丙方对于甲方、乙方借贷关系的订立、履行及风险不做出任何形式的明示或默示的承诺或保证，亦不承担对借款项目未按期偿还或造成任何损失等的垫付或赔偿等责任。")]), _vm._v(" "), _c('p', [_vm._v("3.3.3 丙方有权在发布交易信息时暂不公布乙方部分个人信息，包括但不限于姓名、身份证号、住址等。丙方对前述信息的延时公布不承担任何责任。")]), _vm._v(" "), _c('p', [_vm._v("3.3.4 丙方有权就为本协议项下借款所提供的居间服务向乙方收取一定服务费，具体数额及方式由丙方与乙方另行约定。")]), _vm._v(" "), _c('p', [_vm._v("3.3.5 对提供虚假个人信息、相关交易信息和违反本协议约定的甲方和乙方，丙方有权将甲方和乙方的虚假、违约情况对外公告，公告的方式包括但不限于在丙方的新华金典金融平台、相关的金融网站、报刊等，同时丙方有权根据国家有关征信规定报送有关征信机构，甲方和乙方对此不得提出任何异议，因此产生的一切后果和损失与丙方无关。")]), _vm._v(" "), _c('p', [_vm._v("3.4 丁方的权利义务 ")]), _vm._v(" "), _c('p', [_vm._v("3.4.1 丁方对乙方的该笔借款形成的债权提供回购承诺；若丁方向债权人承担回购责任的，丁方有权向借款人乙方进行包括但不限于诉讼、催讨催收、处置抵押物等方式追偿。")]), _vm._v(" "), _c('p', [_vm._v("3.4.2 丁方认可本协议的签订生成方式，并不以此为由拒绝履行本协议项下的义务。在未出现法定事由时，丁方不得以任何方式撤回、撤销本协议。")]), _vm._v(" "), _c('p', [_vm._v("3.4.3 丁方应向丙方平台提供借款客户真实、有效、合法的联系方式、基本资料、车辆资料、资信证明、债权合同、担保合同等必须材料。")]), _vm._v(" "), _c('p', [_vm._v("3.4.4 丁方对借款客户的基本资料、资质、信用情况等进行审慎审查，并经内部审批通过后推荐给丙方 。")]), _vm._v(" "), _c('p', [_vm._v("3.4.5 丁方有权收取相应居间服务费，具体数额及方式另行约定。")]), _vm._v(" "), _c('p', [_vm._v("四、还款及逾期")]), _vm._v(" "), _c('p', [_vm._v("4.1 乙方必须按照本协议的约定，按时、足额偿还甲方借款本金和利息，并根据与丙方、丁方签订的协议按时、足额向丙方、丁方支付居间服务费。")]), _vm._v(" "), _c('p', [_vm._v("4.2 乙方同意通过丁方监管支付本息及居间服务费。并保证在还款日，还款账户内有足额资金用以偿付全部债务（包括但不限于借款本息、居间服务费）。")]), _vm._v(" "), _c('p', [_vm._v("4.3 甲方知晓并同意，最终将本协议项下的借款本息或受偿款项划转至甲方的账户的到账时间以第三方支付机构与甲方协议确定为准。")]), _vm._v(" "), _c('p', [_vm._v("4.4 还款日当日24：00前，甲方未依本合同约定足额收到应收款项的，则视为乙方逾期。在逾期情形下，乙方除应按本协议第二条的约定支付利息外，乙方应自借款逾期之日起额外支付相当于本协议第二条约定的所有剩余未偿还的本金和利息总额的每日万分之五的逾期罚息，直至相关逾期款项清偿为止。")]), _vm._v(" "), _c('p', [_vm._v("4.5 除上述约定外，乙方还需承担因未按约还款所产生的一切费用，包括但不限于诉讼费、财产保全费、执行费、仲裁费、律师代理费、差旅费、评估费、拍卖费、催收费用等。")]), _vm._v(" "), _c('p', [_vm._v("五、提前还款 ")]), _vm._v(" "), _c('p', [_vm._v("5.1 乙方可以依本协议约定提前还款。乙方可于起息日次日起至还款日止，通过新华金典金融平台的“提前还款”功能向甲方申请提前偿还全部应付款项。乙方不得只提前偿还部分应付款项。")]), _vm._v(" "), _c('p', [_vm._v("5.2 乙方提前还款的，应向甲方支付当期应还本息、剩余本金、提前还款违约金。提前还款违约金的计算方式为：")]), _vm._v(" "), _c('p', [_vm._v("借款期限在6个月以下（包含6个月）的，按照剩余利息的20%计算；")]), _vm._v(" "), _c('p', [_vm._v("借款期限在6个月以上的，按照剩余利息的15%计算。")]), _vm._v(" "), _c('p', [_vm._v("5.3 若乙方存在逾期还款时申请提前还款的，则应先支付结清所有逾期款项后方可提前还款。")]), _vm._v(" "), _c('p', [_vm._v("5.4 乙方提前还款的，乙方与丙方另行协商确定相关费用的数额和支付方式。")]), _vm._v(" "), _c('p', [_vm._v("六、协议的签订、成立及生效 ")]), _vm._v(" "), _c('p', [_vm._v("6.1 本协议为附条件生效协议，协议生效需同时满足如下条件：")]), _vm._v(" "), _c('p', [_vm._v("6.1.1 本协议须经甲方通过新华金典金融平台页面点击确认，以完成出借义务；")]), _vm._v(" "), _c('p', [_vm._v("6.1.2 乙方设定的借款总额在筹集期已全部筹集完成；")]), _vm._v(" "), _c('p', [_vm._v("6.1.3 新华金典金融平台根据最终撮合结果生成协议各方信息、第二条与本协议附件信息及协议签订日期信息等要素，且本协议可在新华金典金融平台查询且不可修改；当且仅当满足上述条件时，本借款协议成立。 ")]), _vm._v(" "), _c('p', [_vm._v("6.1.4 甲方委托第三方支付机构依据丙方的通知，将前述借款金额从甲方的账户划转时，甲方成功提供借款。")]), _vm._v(" "), _c('p', [_vm._v("6.2 本协议成立前，丙方将不会通知第三方支付机构从甲方的账户扣划相应的借款金额；如已划转的，划转的款项将由第三方支付机构按原路退回至甲方的账户。")]), _vm._v(" "), _c('p', [_vm._v("6.3 本协议采用电子文本形式制成，协议各方同意以留存在丙方独立运营的新华金典金融平台的协议为准，各方认可该电子借款协议的法律效力，并承诺受该形式的电子借款协议的约束。生效的电子借款协议一式多份应以不可修改的格式保存在新华金典金融平台。")]), _vm._v(" "), _c('p', [_vm._v("七、其他事项")]), _vm._v(" "), _c('p', [_vm._v("7.1 乙方须确保到期后足额偿还包括本协议借款金额在内的借款总额项下所有协议项下的借款本息及其他应付款项，否则视为还款未完成，由此引起的法律后果及违约责任由乙方承担。")]), _vm._v(" "), _c('p', [_vm._v("7.2 甲方及乙方必须通过本协议约定的方式进行放款及还款,否则由此引起的法律后果及违约责任由甲方或乙方自行承担。")]), _vm._v(" "), _c('p', [_vm._v("7.3 本协议项下借款记录等信息均以新华金典金融平台生成并公布的内容为准。协议各方可以通过新华金典金融平台账户登录新华金典金融平台查询上述信息。")]), _vm._v(" "), _c('p', [_vm._v("7.4 协议各方应对其他方提供的信息及本协议内容保密，未经其他方同意，任何一方不得向协议主体之外的任何人披露，但法律、行政法规另有强制性规定，或监管、审计等有权机关另有强制性要求的除外。 ")]), _vm._v(" "), _c('p', [_vm._v("7.5 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，则应认为该条款可与本协议相分割，并可被尽可能接近各方意图的、能够保留本协议要求的经济目的的、有效的新条款所取代，而且在此情况下，本协议的其他条款仍然完全有效并具有约束力。 ")]), _vm._v(" "), _c('p', [_vm._v("7.6 乙方及丁方向丙方提交的材料作为本合作的附件，与本合同具有同等效力。提交的材料包括但不限于：借款申请书、划款授权委托书、新车垫资借款融资产品合作合同、新车垫资借款融资产品说明书、债权回购承诺函。")]), _vm._v(" "), _c('p', [_vm._v("7.7 协议各方应按法律法规及相关规定各自承担与本协议相关的税费。")]), _vm._v(" "), _c('p', [_vm._v("八、法律的适用和争议的解决")]), _vm._v(" "), _c('p', [_vm._v("8.1 本协议受中华人民共和国法律管辖，本协议的签订、履行、终止、解释均适用中华人民共和国法律。")]), _vm._v(" "), _c('p', [_vm._v("8.2 本协议履行中发生争议，可由各方协商解决，协商不成可向丙方所在地人民法院起诉。")]), _vm._v(" "), _c('p', [_vm._v("（以下无正文）")]), _vm._v(" "), _c('p', [_vm._v("甲方（出借人）：见本协议附件《投资人列表》 ")]), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('p', [_vm._v("乙方（借款人）：" + _vm._s(_vm.realName))]), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('p', [_vm._v("丙方（平台服务方）：")]), _vm._v(" "), _c('p', [_vm._v("日期：" + _vm._s(_vm.insert))]), _vm._v(" "), _c('p', [_vm._v("丁方（车贷审查服务方）：" + _vm._s(_vm.carDingfAddress))]), _vm._v(" "), _c('div', {
    staticClass: "cachet"
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("丙方（互联网金融平台）："), _c('ins', [_vm._v("新华金典财富管理股份有限公司")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("还款来源：")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("还款方式：")])])
}]}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-container"
  }, [_c('div', {
    staticClass: "theme"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(106)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "cont cont1"
  }, [_c('div', {
    staticClass: "bt bt1"
  }, [_c('i', {
    staticClass: "um"
  }, [_vm._v(_vm._s(_vm.username1))]), _vm._v(",邀您来赚钱！")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('a', {
    staticClass: "bt bt3",
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": function($event) {
        _vm.regist()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(92),
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "cont cont3",
    staticStyle: {
      "display": "none"
    }
  }, [_vm._m(1), _vm._v(" "), _c('a', {
    staticClass: "bt bt4",
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": function($event) {
        _vm.down()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(93),
      "alt": ""
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "downapp"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(107)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "app",
    attrs: {
      "src": __webpack_require__(105)
    },
    on: {
      "click": function($event) {
        _vm.down()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mceng fixed"
  }), _vm._v(" "), _c('div', {
    staticClass: "login share-login"
  }, [_c('span', {
    staticClass: "icon icon-close",
    on: {
      "click": function($event) {
        _vm.iconClose()
      }
    }
  }), _vm._v(" "), _c('form', {
    attrs: {
      "id": "registerForm",
      "method": "post"
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "id": "registPlatform",
      "name": "registPlatform",
      "value": "10"
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "id": "inviteId",
      "name": "inviteId"
    }
  }), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('p', {
    staticClass: "yzm relative"
  }, [_c('span', {
    staticClass: "icon icon-yzm"
  }), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "id": "smsValidateCode",
      "name": "smsValidateCode",
      "maxlength": "6",
      "placeholder": "请输入短信验证码"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon icon-clear"
  }), _vm._v(" "), _c('input', {
    staticClass: "input downTime timeLows",
    attrs: {
      "type": "button",
      "id": "getValidateCode",
      "value": "获取验证码"
    },
    on: {
      "click": function($event) {
        _vm.getValidateCode()
      }
    }
  })]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c('button', {
    staticClass: "btn pub-btn",
    attrs: {
      "id": "regist"
    },
    on: {
      "click": function($event) {
        _vm.wapRegisterUser()
      }
    }
  }, [_vm._v("注册并领取奖励")])]), _vm._v(" "), _c('div', {
    staticClass: "warn-prompt",
    attrs: {
      "id": "warn"
    }
  }), _vm._v(" "), _vm._m(5)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bt bt2"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "action": "post",
      "id": "userForm"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "maxLength": "11",
      "id": "phoneNum",
      "name": "",
      "placeholder": "请输入手机号领取"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "quan"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(101)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "phone relative"
  }, [_c('span', {
    staticClass: "icon icon-phone"
  }), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "readOnly": "readOnly",
      "id": "username",
      "name": "username"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "pwd relative"
  }, [_c('span', {
    staticClass: "icon icon-pwd"
  }), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "设置登录密码",
      "id": "password",
      "name": "password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon icon-clear"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "invitation-code relative"
  }, [_c('span', {
    staticClass: "icon icon-code"
  }), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "readOnly": "readOnly",
      "id": "invite"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "imgwx"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(108)
    }
  })])
}]}

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container services"
  }, [_c('p', [_vm._v("新华金典财富管理股份有限公司（以下简称“新华金典”）希望您认真阅读本《用户使用协议》（以下简称“本协议”）；一旦您勾选“我同意《新华金典用户使用协议》”，并在新华金典网站或新华金典客户端软件（以下简称“新华金典”）上注册成功或通过上述方式使用新华金典提供的服务，即表示您同意遵循本协议之所有约定。")]), _vm._v(" "), _c('h2', [_vm._v("第1条")]), _vm._v(" "), _c('p', [_vm._v("您是具备完全民事权利能力和完全民事行为能力的自然人。如需在新华金典购买理财产品，则您必须年满18周岁。")]), _vm._v(" "), _c('h2', [_vm._v("第2条")]), _vm._v(" "), _c('p', [_vm._v("下载和使用新华金典不收取任何费用，由于上网而产生的流量费用由相关运营商收取，为防止他人冒用您的身份注册或使用新华金典，新华金典可能会向您的手机发送一条短信来验证，由此产生的短信费用由新华金典公司支付，新华金典在此过程中不收取任何费用。")]), _vm._v(" "), _c('h2', [_vm._v("第3条")]), _vm._v(" "), _c('p', [_vm._v("您有义务确保您提交的信息准确、完整，若您所提供的信息有任何错误、不实或不完整，新华金典公司有权暂停或终止向您提供新华金典全部或部分服务。由上述原因导致服务无法正常提供，并由此导致的任何直接或间接损失由您自行承担，新华金典公司不承担任何责任。")]), _vm._v(" "), _c('h2', [_vm._v("第4条")]), _vm._v(" "), _c('p', [_vm._v("您的个人资料受到严格保护，不接受新华金典公司及您之外的任何个人或单位的查询请求。但法律法规、司法机关、监管机构、本协议另有规定或要求，或新华金典公司为执行本协议确有必要披露的除外。")]), _vm._v(" "), _c('h2', [_vm._v("第5条")]), _vm._v(" "), _c('p', [_vm._v("新华金典公司合作第三方支付机构将为您提供银行卡认证服务，您同意委托该第三方支付机构为您提供包括但不限于银行卡认证、取现、代扣、代发等服务，新华金典会将您的账户与前述银行账户进行绑定。如您未按照新华金典公司规定提交相关信息或提交的信息错误、虚假、过时或不完整，或者新华金典公司有合理的理由怀疑您提交的信息为错误、虚假、过时或不完整，您因此未能使用银行卡认证、取现、代扣、代发等服务而产生的损失由您自行承担。")]), _vm._v(" "), _c('h2', [_vm._v("第6条")]), _vm._v(" "), _c('p', [_vm._v("新华金典发布的理财产品有投资风险，投资者应当充分认识投资风险，谨慎投资。以下风险提示内容请投资者详细阅读，在充分了解并清楚知晓新华金典所发布产品蕴含风险的基础上，通过自身判断，自主参与交易，并自愿承担相关风险。 信用风险：新华金典所发布的理财产品，产品存续期间若投资的交易对手发生违约、破产等情形，投资者可能损失部分或全部理财收益。 本金及理财收益风险：理财产品的理财收益不确定的风险由投资者自行承担； 政策风险：新华金典所发布的理财产品是针对当前的相关法规和政策设计的。如国家政策、市场、法律及其他因素等 发生变化，可能影响理财产品的受理、投资、偿还等的正常进行； 其它风险：由于自然灾害、战争等不可抗力因素的出现，将严重影响金融市场的正常运行，从而导致理财资产收益降低或损失，甚至影响理财计划的受理、投资、偿还等的正常进行，进而影响资产收益安全。")]), _vm._v(" "), _c('h2', [_vm._v("第7条")]), _vm._v(" "), _c('p', [_vm._v("在任何情况下，新华金典公司及其股东、雇员均不以任何明示或默示的方式对您通过新华金典进行的理财产品投资而产生的任何形式的直接或间接损失承担法律责任，包括但不限于资金损失、利润损失、营业中断损失等；如您参与的投资计划涉及第三方担保或保险，对于担保的效力及实现须由您发起及承担，新华金典公司可提供必要的协助。")]), _vm._v(" "), _c('h2', [_vm._v("第8条")]), _vm._v(" "), _c('p', [_vm._v("您通过新华金典进行的理财产品投资如涉及个人所得税及相关税费，请自行申报及缴纳。")]), _vm._v(" "), _c('h2', [_vm._v("第9条")]), _vm._v(" "), _c('p', [_vm._v("您通过新华金典进行的理财产品投资不提供纸质账单。请通过新华金典网站、客户端软件或新华金典客服人员等方式了解相关信息。")]), _vm._v(" "), _c('h2', [_vm._v("第10条")]), _vm._v(" "), _c('p', [_vm._v("您有义务遵守法律法规、政策、道德、新华金典各项规则以及新华金典公司相关业务规则等，不将新华金典用于任何非法目的，也不以任何非法方式使用新华金典所提供的服务。新华金典公司有权基于单方独立判断，在认为可能发生危害交易安全等情形时，不经通知而先行暂停、中断或终止向您提供本协议项下的全部或部分服务，且无需对您承担任何责任。前述情形包括但不限于：新华金典公司认为您提供的个人资料不具有真实性、有效性或完整性；新华金典公司发现异常交易或有疑义或有违法之虞时；新华金典公司认为您的账户涉嫌洗钱、套现、传销、被冒用或其他新华金典认为有风险之情形。")]), _vm._v(" "), _c('h2', [_vm._v("第11条")]), _vm._v(" "), _c('p', [_vm._v("新华金典公司有权在合理范围内对新华金典及其功能和服务进行维护、改动、升级。")]), _vm._v(" "), _c('h2', [_vm._v("第12条")]), _vm._v(" "), _c('p', [_vm._v("新华金典公司拥有新华金典及其相关信息、内容的全部合法权利，包括但不限于图标、界面设计、有关数据、电子文档等的知识产权等权利受到法律法规的保护。包括您在内的其他任何个人或组织不得进行反向工程、反向汇编、反向编译，不得将图片或软件数据取出使用，也不得进行任何违法违规行为。未经新华金典公司许可，任何个人或组织不得将新华金典用于商业用途。")]), _vm._v(" "), _c('h2', [_vm._v("第13条")]), _vm._v(" "), _c('p', [_vm._v("您在新华金典浏览的理财产品的信息皆为相关金融机构提供，新华金典会在合理情况下保证对信息进行更新。同时，新华金典上展示的可交易的理财产品也均由金融机构提供，且交易流程在金融机构的交易系统中进行，您在交易过程中遇到的问题，除非由新华金典直接造成，否则均由相关金融机构负责解决或承担相应责任，新华金典不承担任何责任。")]), _vm._v(" "), _c('h2', [_vm._v("第14条")]), _vm._v(" "), _c('p', [_vm._v("新华金典公司无法保证用户信息的准确、及时和完整；您应对您提供的信息承担全部责任，包括但不限于信息的合法合规性、真实性、准确性、完整性、及时性、有效性。")]), _vm._v(" "), _c('h2', [_vm._v("第15条")]), _vm._v(" "), _c('p', [_vm._v("您应妥善保管注册的用户名称、密码等信息以及您的其他信息，所有使用该信息发生的行为以及使用您手机上的新华金典的行为均视为您作出，并由您承担全部责任。因您保管、设置、使用不当等造成的损失和责任，由您自行承担，与新华金典公司、新华金典无关。新华金典公司对账号以及密码认证通过后不对任何有关操作的真实性承担责任。")]), _vm._v(" "), _c('h2', [_vm._v("第16条")]), _vm._v(" "), _c('p', [_vm._v("新华金典的会员积分体系中您所获得的积分并不等同于任何真实货币，仅为用户因特定行为而获得的奖励，可换取相关礼品。新华金典公司在有合理依据的情况下，可以对您的积分进行包括但不限于调拨、冻结、清除等动作。")]), _vm._v(" "), _c('h2', [_vm._v("第17条")]), _vm._v(" "), _c('p', [_vm._v("由于电信运营商提供的通信线路等原因造成的以及由不可抗力造成的暂时性不能或者部分不能提供服务的，新华金典公司不承担任何责任。\n\t")]), _c('h2', [_vm._v("第18条")]), _vm._v(" "), _c('p', [_vm._v("“不可抗力”是指不能合理控制、不可预见或即使预见亦无法避免的事件，该事件妨碍、影响或延误新华金典公司根据本协议履行其全部或部分义务。由于不可抗力致使新华金典公司不能或者部分不能履行本协议或延迟履行本协议，则新华金典公司不承担任何责任。")]), _vm._v(" "), _c('h2', [_vm._v("第19条")]), _vm._v(" "), _c('p', [_vm._v("在新华金典交易需订立的合同采用电子合同方式。您使用会员账户登录新华金典网站或客户端软件后，根据新华金典的相关规则，以会员账户ID通过点击确认或类似方式签署的电子合同即视为注册会员本人真实意愿并以注册会员本人名义签署的合同，具有法律效力。注册会员应妥善保管自己的账户密码等账户信息，注册会员通过前述方式订立的电子合同对合同各方具有法律约束力，注册会员不得以其账户密码等账户信息被盗用或其他理由否认已订立的合同的效力或不按照该等合同履行相关义务。注册会员签署电子合同后，不得擅自修改该合同。如注册客户对合同文本有任何争议，应以新华金典记录的合同为准。")]), _vm._v(" "), _c('h2', [_vm._v("第20条")]), _vm._v(" "), _c('p', [_vm._v("本协议签订地为中华人民共和国杭州市。因本协议的签订及履行所引起的您与新华金典公司的任何纠纷或争议，首先应友好协商解决，协商不成的，各方同意提交新华金典公司所在地有管辖权的人民法院诉讼解决。")]), _vm._v(" "), _c('h2', [_vm._v("第21条")]), _vm._v(" "), _c('p', [_vm._v("本协议的著作权归新华金典公司所有，新华金典公司保留一切解释和修改的权利。")])])
}]}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "art-list"
  }, _vm._l((_vm.todos), function(todo, index) {
    return _c('div', {
      staticClass: "art-box",
      class: [todo.select ? _vm.activeClass : ''],
      on: {
        "click": function($event) {
          _vm.tab1(_vm.todos, index)
        }
      }
    }, [_c('div', {
      staticClass: "art-title"
    }, [_vm._v(_vm._s(todo.text))]), _vm._v(" "), (_vm.seen) ? _c('div', {
      staticClass: "art-answ",
      domProps: {
        "innerHTML": _vm._s(todo.text1)
      }
    }, [_vm._v(_vm._s(todo.text1))]) : _vm._e()])
  }))
},staticRenderFns: []}

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports) {

/*
 Highcharts JS v4.1.8 (2015-08-20)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function A(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function F(a,b){return parseInt(a,b||10)}function Aa(a){return typeof a==="string"}function da(a){return a&&
typeof a==="object"}function Fa(a){return Object.prototype.toString.call(a)==="[object Array]"}function qa(a){return typeof a==="number"}function Ba(a){return W.log(a)/W.LN10}function ia(a){return W.pow(10,a)}function ja(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==v&&a!==null}function J(a,b,c){var d,e;if(Aa(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&da(b))for(d in b)a.setAttribute(d,b[d]);return e}function ra(a){return Fa(a)?
a:[a]}function L(a,b){if(xa&&!ca&&b&&b.opacity!==v)b.filter="alpha(opacity="+b.opacity*100+")";r(a.style,b)}function $(a,b,c,d,e){a=C.createElement(a);b&&r(a,b);e&&L(a,{padding:0,border:O,margin:0});c&&L(a,c);d&&d.appendChild(a);return a}function ka(a,b){var c=function(){return v};c.prototype=new a;r(c.prototype,b);return c}function Ga(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Va(a){return(bb&&bb(a)||mb||0)*6E4}function Ha(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==
-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=S.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=B.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Ma(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function nb(a){return W.pow(10,V(W.log(a)/W.LN10))}function ob(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===
1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function pb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Na(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ca(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Oa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),
delete a[c]}function Pa(a){cb||(cb=$(Ia));a&&cb.appendChild(a);cb.innerHTML=""}function la(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;K.console&&console.log(c)}function ea(a,b){return parseFloat(a.toPrecision(b||14))}function Qa(a,b){b.renderer.globalAnimation=p(a,b.animation)}function Cb(){var a=S.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";ya=a.Date||window.Date;mb=b&&a.timezoneOffset;bb=b&&a.getTimezoneOffset;db=function(a,c,d,h,i,j){var k;b?(k=
ya.UTC.apply(0,arguments),k+=Va(k)):k=(new ya(a,c,p(d,1),p(h,0),p(i,0),p(j,0))).getTime();return k};qb=c+"Minutes";rb=c+"Hours";sb=c+"Day";Wa=c+"Date";Xa=c+"Month";Ya=c+"FullYear";Db=d+"Milliseconds";Eb=d+"Seconds";Fb=d+"Minutes";Gb=d+"Hours";tb=d+"Date";ub=d+"Month";vb=d+"FullYear"}function P(){}function Ra(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Hb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=
null;this.points={};this.stack=e;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var v,C=document,K=window,W=Math,w=W.round,V=W.floor,sa=W.ceil,t=W.max,z=W.min,N=W.abs,X=W.cos,aa=W.sin,ma=W.PI,ga=ma*2/360,za=navigator.userAgent,Ib=K.opera,xa=/(msie|trident)/i.test(za)&&!Ib,eb=C.documentMode===8,fb=/AppleWebKit/.test(za),Ja=
/Firefox/.test(za),Jb=/(Mobile|Android|Windows Phone)/.test(za),Da="http://www.w3.org/2000/svg",ca=!!C.createElementNS&&!!C.createElementNS(Da,"svg").createSVGRect,Nb=Ja&&parseInt(za.split("Firefox/")[1],10)<4,fa=!ca&&!xa&&!!C.createElement("canvas").getContext,Za,$a,Kb={},wb=0,cb,S,Ma,xb,E,ta=function(){return v},Y=[],ab=0,Ia="div",O="none",Ob=/^[0-9]+$/,gb=["plotTop","marginRight","marginBottom","plotLeft"],Pb="stroke-width",ya,db,mb,bb,qb,rb,sb,Wa,Xa,Ya,Db,Eb,Fb,Gb,tb,ub,vb,M={},B;B=K.Highcharts=
K.Highcharts?la(16,!0):{};B.seriesTypes=M;var r=B.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},p=B.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==v&&c!==null)return c},Sa=B.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Ma=function(a,b,c){if(!s(b)||isNaN(b))return S.lang.invalidDate||"";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new ya(b-Va(b)),e,f=d[rb](),g=d[sb](),h=d[Wa](),
i=d[Xa](),j=d[Ya](),k=S.lang,m=k.weekdays,d=r({a:m[g].substr(0,3),A:m[g],d:Ga(h),e:h,w:g,b:k.shortMonths[i],B:k.months[i],m:Ga(i+1),y:j.toString().substr(2,2),Y:j,H:Ga(f),k:f,I:Ga(f%12||12),l:f%12||12,M:Ga(d[qb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ga(d.getSeconds()),L:Ga(w(b%1E3),3)},B.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};E={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,
week:6048E5,month:24192E5,year:314496E5};B.numberFormat=function(a,b,c,d){var e=S.lang,a=+a||0,f=b===-1?z((a.toString().split(".")[1]||"").length,20):isNaN(b=N(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(F(a=N(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+N(a-c).toFixed(f).slice(2):"")};xb={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),
c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=
d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){K.HighchartsAdapter=K.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!==
"align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?v:a.now):g.apply(this,arguments)})});Sa(a.cssHooks.opacity,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],
a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,g;if(this[0]){Aa(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==v)c.chart=c.chart||{},c.chart.renderTo=this[0],new B[a](c,b[1]),g=this;c===v&&(g=Y[J(this[0],"data-highcharts-chart")])}return g}},addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=
0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=C.removeEventListener?"removeEventListener":"detachEvent";C[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!xa&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);r(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,
b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===v)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==v&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(K.jQuery);var U=K.HighchartsAdapter,
D=U||{};U&&U.init.call(U,xb);var hb=D.adapterRun,Qb=D.getScript,Ka=D.inArray,o=B.each=D.each,ib=D.grep,Rb=D.offset,Ta=D.map,H=D.addEvent,Z=D.removeEvent,I=D.fireEvent,Sb=D.washMouseEvent,jb=D.animate,kb=D.stop;S={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/4.1.8/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.1.8/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,
defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,
lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===null?"":B.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},
labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},
loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ca,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',
pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Jb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"",href:"http://www.baiyimao.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ba=S.plotOptions,U=ba.line;Cb();var Tb=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
Ub=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,Vb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,na=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Ta(a.stops,function(a){return na(a[1])}):(c=Tb.exec(a))?b=[F(c[1]),F(c[2]),F(c[3]),parseFloat(c[4],10)]:(c=Ub.exec(a))?b=[F(c[1],16),F(c[2],16),F(c[3],16),1]:(c=Vb.exec(a))&&(b=[F(c[1]),F(c[2]),F(c[3]),1])})(a);return{get:function(c){var f;d?(f=A(a),f.stops=[].concat(f.stops),o(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):
f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)o(d,function(b){b.brighten(a)});else if(qa(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=F(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this},raw:a}};P.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),init:function(a,
b){this.element=b==="span"?$(b):C.createElementNS(Da,b);this.renderer=a},animate:function(a,b,c){b=p(b,this.renderer.globalAnimation,!0);kb(this);if(b){b=A(b,{});if(c)b.complete=c;jb(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,m,l,n,q=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];h=d.gradients;j=a.stops;l=c.radialReference;Fa(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});
f==="radialGradient"&&l&&!s(g.gradientUnits)&&(g=A(g,{cx:l[0]-l[2]/2+g.cx*l[2],cy:l[1]-l[2]/2+g.cy*l[2],r:g.r*l[2],gradientUnits:"userSpaceOnUse"}));for(n in g)n!=="id"&&q.push(n,g[n]);for(n in j)q.push(j[n]);q=q.join(",");h[q]?a=h[q].attr("id"):(g.id=a="highcharts-"+wb++,h[q]=i=d.createElement(f).attr(g).add(d.defs),i.stops=[],o(j,function(a){a[1].indexOf("rgba")===0?(e=na(a[1]),k=e.get("rgb"),m=e.get("a")):(k=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":m}).add(i);
i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport||b.style.textShadow!==v&&!xa;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(fb)e.textRendering="geometricPrecision";f?L(b,e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),o(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,f,a=a.split(" ");e=a[a.length-
1];(f=a[a.length-2])&&o(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);J(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(F(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==v&&(d=a,a={},a[d]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,
a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(this[d+"Setter"]||this._defaultSetter).call(this,b,d,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&c();return g},updateShadows:function(a,b){for(var c=this.shadows,
d=c.length;d--;)c[d].setAttribute(a,a==="height"?t(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,c=J(b,"class")||"";c.indexOf(a)===-1&&J(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":O)},
crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||0;d=w(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&F(a.width)||
this.textWidth;b&&(a=r(b,c));this.styles=a;e&&(fa||!ca&&this.renderer.forExport)&&delete a.width;if(xa&&!ca)L(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";J(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;$a&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=ya.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(za.indexOf("Android")===-1||ya.now()-
(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+
","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Aa(c))this.alignTo=d=c||"renderer",ja(f,this),f.push(this),
c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=w(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=w(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a){var b,c=this.renderer,d,e=this.rotation,
f=this.element,g=this.styles,h=e*ga;d=this.textStr;var i,j=f.style,k,m;d!==v&&(m=["",e||0,g&&g.fontSize,f.style.width].join(","),m=d===""||Ob.test(d)?"num:"+d.toString().length+m:d+m);m&&!a&&(b=c.cache[m]);if(!b){if(f.namespaceURI===Da||c.forExport){try{k=this.fakeTS&&function(a){o(f.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},Ja&&j.textShadow?(i=j.textShadow,j.textShadow=""):k&&k(O),b=f.getBBox?r({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},i?j.textShadow=
i:k&&k("")}catch(l){}if(!b||b.width<0)b={width:0,height:0}}else b=this.htmlGetBBox();if(c.isSVG){a=b.width;d=b.height;if(xa&&g&&g.fontSize==="11px"&&d.toPrecision(3)==="16.9")b.height=d=14;if(e)b.width=N(d*aa(h))+N(a*X(h)),b.height=N(d*X(h))+N(a*aa(h))}m&&(c.cache[m]=b)}return b},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},
add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=
b.onmouseover=b.onmousemove=b.point=null;kb(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&o(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ja(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);
j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;J(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:O});if(c)J(f,"height",t(J(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},
_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash",
"4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=F(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=C.createElementNS(Da,"title"),this.element.appendChild(b));b.appendChild(C.createTextNode(String(p(a),
"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;s(a)&&(g.setAttribute(b,a),a=+a,this[b]===
a&&(e=!1),this[b]=a);if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=J(e,"zIndex"),e!==g&&(F(f)>a||!s(a)&&s(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};P.prototype.yGetter=P.prototype.xGetter;P.prototype.translateXSetter=P.prototype.translateYSetter=P.prototype.rotationSetter=P.prototype.verticalAlignSetter=P.prototype.scaleXSetter=P.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=
!0};P.prototype["stroke-widthSetter"]=P.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],P.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ua=function(){this.init.apply(this,arguments)};ua.prototype={Element:P,init:function(a,b,c,d,e){var f=location,
g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&J(g,"xmlns",Da);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ja||fb)&&C.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highcharts 4.1.8"));this.defs=this.createElement("defs").add();
this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;if(Ja&&a.getBoundingClientRect)this.subPixelFix=b=function(){L(a,{left:0,top:0});h=a.getBoundingClientRect();L(a,{left:sa(h.left)-h.left+"px",top:sa(h.top)-h.top+"px"})},b(),H(K,"resize",b)},getStyle:function(a){return this.style=r({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;
this.box=null;this.boxWrapper=this.boxWrapper.destroy();Oa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&Z(K,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=J(b,"x"),k=a.styles,m=a.textWidth,l=k&&k.lineHeight,n=k&&k.textShadow,
q=k&&k.textOverflow==="ellipsis",x=g.length,T=m&&!a.added&&this.box,Q=function(a){return l?F(l):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12,a).h},u=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};x--;)b.removeChild(g[x]);!f&&!n&&!q&&e.indexOf(" ")===-1?b.appendChild(C.createTextNode(u(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,T&&T.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,
'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),o(e,function(e,f){var g,l=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");o(g,function(e){if(e!==""||g.length===1){var n={},x=C.createElementNS(Da,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),J(x,"style",p));i.test(e)&&!d&&(J(x,"onclick",'location.href="'+e.match(i)[1]+'"'),
L(x,{cursor:"pointer"}));e=u(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){x.appendChild(C.createTextNode(e));if(l)n.dx=0;else if(f&&j!==null)n.x=j;J(x,n);b.appendChild(x);!l&&f&&(!ca&&d&&L(x,{display:"block"}),J(x,"dy",Q(x)));if(m){for(var n=e.replace(/([^\^])-/g,"$1- ").split(" "),o=g.length>1||f||n.length>1&&k.whiteSpace!=="nowrap",T,y,s,t=[],v=Q(x),w=1,r=a.rotation,z=e,A=z.length;(o||q)&&(n.length||t.length);)a.rotation=0,T=a.getBBox(!0),s=T.width,!ca&&c.forExport&&(s=c.measureSpanWidth(x.firstChild.data,
a.styles)),T=s>m,y===void 0&&(y=T),q&&y?(A/=2,z===""||!T&&A<0.5?n=[]:(T&&(y=!0),z=e.substring(0,z.length+(T?-1:1)*sa(A)),n=[z+(m>3?"\u2026":"")],x.removeChild(x.firstChild))):!T||n.length===1?(n=t,t=[],n.length&&(w++,x=C.createElementNS(Da,"tspan"),J(x,{dy:v,x:j}),p&&J(x,"style",p),b.appendChild(x)),s>m&&(m=s)):(x.removeChild(x.firstChild),t.unshift(n.pop())),n.length&&x.appendChild(C.createTextNode(n.join(" ").replace(/- /g,"-")));y&&a.attr("title",a.textStr);a.rotation=r}l++}}})}),T&&T.removeChild(b),
n&&a.applyTextShadow&&a.applyTextShadow(n))},getContrast:function(a){a=na(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,m,l,n,q,x,p,a={x1:0,y1:0,x2:0,y2:1},e=A({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=A(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);
q=f.style;delete f.style;g=A(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);x=g.style;delete g.style;h=A(e,{style:{color:"#CCC"}},h);p=h.style;delete h.style;H(j.element,xa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(q)});H(j.element,xa?"mouseout":"mouseleave",function(){k!==3&&(m=[e,f,g][k],l=[n,q,x][k],j.attr(m).css(l))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(x):a===3&&j.attr(h).css(p):j.attr(e).css(n)};return j.on("click",function(a){k!==
3&&d.call(j,a)}).attr(e).css(r({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=w(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=w(a[2])+b%2/2);return a},path:function(a){var b={fill:O};Fa(a)?b.d=a:da(a)&&r(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=da(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",a)};return b.attr(a)},arc:function(a,b,c,d,e,
f){if(da(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=da(a)?a.r:e,g=this.createElement("rect"),a=da(a)?a:a===v?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==v)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){J(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[p(c,
!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:O};arguments.length>1&&r(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(w(b),
w(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),r(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&r(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(w((d-b[0])/2),w((e-b[1])/2)))},j=a.match(i)[1],a=Kb[j]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),$("img",{onload:function(){k(g,Kb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,
b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=X(f),j=aa(f),
k=X(g),g=aa(g),e=e.end-f<ma?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=z(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",
a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+wb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=fa||!ca&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);
if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),l;for(l=0;l<d.length;l++)e=d[l],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;b&&K.getComputedStyle&&(b=b.element||b,a=(c=K.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?F(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:w(a*1.2);
d=w(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*X(b*ga),4));return{x:-a/3*aa(b*ga),y:d}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=q.element.style;p=(t===void 0||yb===void 0||n.styles.textAlign)&&s(q.textStr)&&q.getBBox();n.width=(t||p.width||0)+2*u+y;n.height=(yb||p.height||0)+2*u;B=u+l.fontMetrics(a&&a.fontSize,q).b;if(D){if(!x)a=w(-Q*u)+C,b=(h?-B:0)+C,n.box=x=d?l.symbol(d,a,b,n.width,n.height,G):l.rect(a,b,n.width,n.height,0,G[Pb]),x.isImg||x.attr("fill",
O),x.add(n);x.isImg||x.attr(r({width:w(n.width),height:w(n.height)},G));G=null}}function k(){var a=n.styles,a=a&&a.textAlign,b=y+u*(1-Q),c;c=h?0:B;if(s(t)&&p&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(t-p.width);if(b!==q.x||c!==q.y)q.attr("x",b),c!==v&&q.attr("y",c);q.x=b;q.y=c}function m(a,b){x?x.attr(a,b):G[a]=b}var l=this,n=l.g(i),q=l.text("",0,0,g).attr({zIndex:1}),x,p,Q=0,u=3,y=0,t,yb,zb,z,C=0,G={},B,D;n.onAdd=function(){q.add(n);n.attr({text:a||a===0?a:"",x:b,y:c});x&&s(e)&&n.attr({anchorX:e,
anchorY:f})};n.widthSetter=function(a){t=a};n.heightSetter=function(a){yb=a};n.paddingSetter=function(a){if(s(a)&&a!==u)u=n.padding=a,k()};n.paddingLeftSetter=function(a){s(a)&&a!==y&&(y=a,k())};n.alignSetter=function(a){Q={left:0,center:0.5,right:1}[a]};n.textSetter=function(a){a!==v&&q.textSetter(a);j();k()};n["stroke-widthSetter"]=function(a,b){a&&(D=!0);C=a%2/2;m(b,a)};n.strokeSetter=n.fillSetter=n.rSetter=function(a,b){b==="fill"&&a&&(D=!0);m(b,a)};n.anchorXSetter=function(a,b){e=a;m(b,w(a)-
C-zb)};n.anchorYSetter=function(a,b){f=a;m(b,a-z)};n.xSetter=function(a){n.x=a;Q&&(a-=Q*((t||p.width)+u));zb=w(a);n.attr("translateX",zb)};n.ySetter=function(a){z=n.y=w(a);n.attr("translateY",z)};var F=n.css;return r(n,{css:function(a){if(a){var b={},a=A(a);o(n.textProps,function(c){a[c]!==v&&(b[c]=a[c],delete a[c])});q.css(b)}return F.call(n,a)},getBBox:function(){return{width:p.width+2*u,height:p.height+2*u,x:p.x-u,y:p.y-u}},shadow:function(a){x&&x.shadow(a);return n},destroy:function(){Z(n.element,
"mouseenter");Z(n.element,"mouseleave");q&&(q=q.destroy());x&&(x=x.destroy());P.prototype.destroy.call(n);n=l=j=k=m=null}})}};Za=ua;r(P.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=r(this.styles,a);L(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";
return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;L(b,{marginLeft:c,marginTop:d});i&&o(i,function(a){L(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&o(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var k=this.rotation,
m,l=F(this.textWidth),n=[k,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(n!==this.cTT){m=a.fontMetrics(b.style.fontSize).b;s(k)&&this.setSpanRotation(k,h,m);i=p(this.elemWidth,b.offsetWidth);if(i>l&&/[ \-]/.test(b.textContent||b.innerText))L(b,{width:l+"px",display:"block",whiteSpace:j&&j.whiteSpace||"normal"}),i=l;this.getSpanCorrection(i,m,h,k,g)}L(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(fb)m=b.offsetHeight;this.cTT=n}}else this.alignOnAdd=!0},setSpanRotation:function(a,
b,c){var d={},e=xa?"-ms-transform":fb?"-webkit-transform":Ja?"MozTransform":Ib?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ja?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";L(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});r(ua.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};d.xSetter=d.ySetter=
d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:w(b),y:w(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;o(j.reverse(),function(a){var d,e=J(a.element,"class");e&&(e={className:e});b=a.div=a.div||$(Ia,e,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;r(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0}});Sa(a,"visibilitySetter",function(a,b,c,e){a.call(this,b,c,e);d[c]=b})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});if(!ca&&!fa){D={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===
Ia;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=$(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:P.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=X(a*ga),c=aa(a*ga);L(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):O})},getSpanCorrection:function(a,b,c,d,e){var f=d?X(d*ga):1,g=d?aa(d*ga):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=
h*c*(g<0?-1:1)),L(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(qa(a[b]))c[b]=w(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,ja(c,b),c.push(b),b.destroyClip=function(){ja(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:eb?"inherit":"rect(auto)"});
return b.css(a)},css:P.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Pa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return P.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=K.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=F(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,
m,l,n,q;k&&typeof k.value!=="string"&&(k="x");l=k;if(a){n=p(a.width,3);q=(a.opacity||0.15)/n;for(e=1;e<=3;e++){m=n*2+1-2*e;c&&(l=this.cutOffPath(k.value,m+0.5));j=['<shape isShadow="true" strokeweight="',m,'" filled="false" path="',l,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=$(g.prepVML(j),null,{left:F(i.left)+p(a.offsetX,1),top:F(i.top)+p(a.offsetY,1)});if(c)h.cutOff=m+1;j=['<stroke color="',a.color||"black",'" opacity="',q*e,'"/>'];$(g.prepVML(j),null,null,h);b?b.element.appendChild(h):
f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:ta,setAttr:function(a,b){eb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||$(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?
this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!==O,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:ta,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-w(aa(a*ga)+1)+"px";c.top=w(X(a*ga))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;qa(a)&&(a+="px");
this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&o(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,eb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};B.VMLElement=D=ka(P,
D);D.prototype.ySetter=D.prototype.widthSetter=D.prototype.heightSetter=D.prototype.xSetter;var La={Element:D,isIE8:za.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ia).css(r(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!C.namespaces.hcv){C.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{C.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){C.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=da(a);return r(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+w(a?e:d)+"px,"+
w(a?f:b)+"px,"+w(a?b:f)+"px,"+w(a?d:e)+"px)"};!a&&eb&&c==="DIV"&&r(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){o(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=O;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,m,l=a.linearGradient||a.radialGradient,n,q,x,p,Q,u="",a=a.stops,y,t=[],s=function(){h=['<fill colors="'+t.join(",")+'" opacity="',x,'" o:opacity2="',q,'" type="',i,'" ',u,
'focus="100%" method="any" />'];$(e.prepVML(h),null,null,b)};n=a[0];y=a[a.length-1];n[0]>0&&a.unshift([0,n[1]]);y[0]<1&&a.push([1,y[1]]);o(a,function(a,b){g.test(a[1])?(f=na(a[1]),k=f.get("rgb"),m=f.get("a")):(k=a[1],m=1);t.push(a[0]*100+"% "+k);b?(x=m,p=k):(q=m,Q=k)});if(c==="fill")if(i==="gradient")c=l.x1||l[0]||0,a=l.y1||l[1]||0,n=l.x2||l[2]||0,l=l.y2||l[3]||0,u='angle="'+(90-W.atan((l-a)/(n-c))*180/ma)+'"',s();else{var j=l.r,v=j*2,w=j*2,r=l.cx,z=l.cy,A=b.radialReference,C,j=function(){A&&(C=d.getBBox(),
r+=(A[0]-C.x)/C.width-0.5,z+=(A[1]-C.y)/C.height-0.5,v*=A[2]/C.width,w*=A[2]/C.height);u='src="'+S.global.VMLRadialGradientURL+'" size="'+v+","+w+'" origin="0.5,0.5" position="'+r+","+z+'" color2="'+Q+'" ';s()};d.added?j():d.onAdd=j;j=p}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=na(a),h=["<",c,' opacity="',f.get("a"),'"/>'],$(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,
a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ua.prototype.html,path:function(a){var b={coordsize:"10 10"};Fa(a)?b.d=a:da(a)&&r(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(da(a))c=a.r,
b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ia).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ua.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;L(a,{flip:"x",
left:F(d.width)-(e?F(e.top):1),top:F(d.height)-(e?F(e.left):1),rotation:-90});o(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=X(f),i=aa(f),j=X(g),k=aa(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",
a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ua.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};B.VMLRenderer=D=function(){this.init.apply(this,arguments)};D.prototype=A(ua.prototype,La);Za=D}ua.prototype.measureSpanWidth=function(a,b){var c=C.createElement("span"),d;d=C.createTextNode(a);c.appendChild(d);L(c,b);this.box.appendChild(c);d=c.offsetWidth;Pa(c);return d};var Lb;if(fa)B.CanVGRenderer=D=function(){Da="http://www.w3.org/1999/xhtml"},D.prototype.symbols=
{},Lb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Qb(d,a);b.push(c)}}}(),Za=D;Ra.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===h[h.length-1],e=d?p(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,
chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?ea(ia(e)):e});s(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=s(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(A(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=p(b.labelLeft,z(b.pos,e[3])),e=p(b.labelRight,t(b.pos+
b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],j=g.getBBox().width,k=b.slotWidth,m=1,l,n={};if(h)h<0&&c-i*j<f?l=w(c/X(h*ga)-f):h>0&&c+i*j>e&&(l=w((d-c)/X(h*ga)));else if(d=c+(1-i)*j,c-i*j<f?k=a.x+k*(1-i)-f:d>e&&(k=e-a.x+k*i,m=-1),k=z(b.slotWidth,k),k<b.slotWidth&&b.labelAlign==="center"&&(a.x+=m*(b.slotWidth-k-i*(b.slotWidth-z(j,k)))),j>k||b.autoRotation&&g.styles.width)l=k;if(l){n.width=l;if(!b.options.labels.style.textOverflow)n.textOverflow="ellipsis";g.css(n)}},
getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,m=i.staggerLines,l=i.tickRotCorr||{x:0,y:0},c=p(e.y,l.y+(i.side===2?8:-(c.getBBox().height/2))),a=a+e.x+l.x-
(f&&d?f*j*(k?-1:1):0),b=b+c-(f&&!d?f*j*(k?1:-1):0);m&&(b+=g/(h||1)%m*(i.labelOffset/m));return{x:a,y:w(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,m=this.gridLine,l=h?h+"Grid":"grid",n=h?h+"Tick":"tick",q=e[l+"LineWidth"],x=e[l+"LineColor"],o=e[l+"LineDashStyle"],Q=e[n+"Length"],l=p(e[n+"Width"],!h&&d.isXAxis?1:0),u=e[n+
"Color"],y=e[n+"Position"],n=this.mark,t=k.step,s=!0,w=d.tickmarkOffset,r=this.getPosition(g,j,w,b),z=r.x,r=r.y,C=g&&z===d.pos+d.len||!g&&r===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(q){j=d.getPlotLinePath(j+w,q*C,b,!0);if(m===v){m={stroke:x,"stroke-width":q};if(o)m.dashstyle=o;if(!h)m.zIndex=1;if(b)m.opacity=0;this.gridLine=m=q?f.path(j).attr(m).add(d.gridGroup):null}if(!b&&m&&j)m[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(l&&Q)y==="inside"&&(Q=-Q),d.opposite&&(Q=-Q),h=this.getMarkPath(z,r,
Q,l*C,g,f),n?n.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:u,"stroke-width":l,opacity:c}).add(d.axisGroup);if(i&&!isNaN(z))i.xy=r=this.getLabelPosition(z,r,i,g,k,w,a,t),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,1)?s=!1:g&&!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(r),t&&a%t&&(s=!1),s&&!isNaN(r.y)?(r.opacity=c,i[this.isNew?"attr":"animate"](r),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Oa(this,this.axis)}};
B.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};B.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=s(i)&&s(h),k=d.value,m=d.dashStyle,l=a.svgElem,n=[],q,x=d.color,p=d.zIndex,o=d.events,u={},y=b.chart.renderer;b.isLog&&(i=Ba(i),h=Ba(h),k=Ba(k));if(g){if(n=b.getPlotLinePath(k,g),u={stroke:x,"stroke-width":g},m)u.dashstyle=m}else if(j){n=b.getPlotBandPath(i,h,d);if(x)u.fill=x;if(d.borderWidth)u.stroke=
d.borderColor,u["stroke-width"]=d.borderWidth}else return;if(s(p))u.zIndex=p;if(l)if(n)l.animate({d:n},null,l.onGetPath);else{if(l.hide(),l.onGetPath=function(){l.show()},f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=l=y.path(n).attr(u).add(),o))for(q in d=function(b){l.on(b,function(c){o[b].apply(a,[c])})},o)d(q);if(e&&s(e.text)&&n&&n.length&&b.width>0&&b.height>0){e=A({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e);if(!f){u={align:e.textAlign||
e.align,rotation:e.rotation};if(s(p))u.zIndex=p;a.label=f=y.text(e.text,0,0,e.useHTML).attr(u).css(e.style).add()}b=[n[1],n[4],j?n[6]:n[1]];j=[n[2],n[5],j?n[7]:n[2]];n=Na(b);c=Na(j);f.align(e,!1,{x:n,y:c,width:Ca(b)-n,height:Ca(j)-c});f.show()}else f&&f.hide();return a},destroy:function(){ja(this.axis.plotLinesAndBands,this);delete this.axis;Oa(this)}};var ha=B.Axis=function(){this.init.apply(this,arguments)};ha.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",
minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0,y:15},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,
tickPosition:"outside",title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return B.numberFormat(this.total,-1)},style:A(ba.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,
y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;
this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks=
{};this.stacksTouched=0;this.min=this.max=null;this.crosshair=p(d.crosshair,ra(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Ka(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===v)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)H(this,f,d[f]);if(this.isLog)this.val2lin=Ba,this.lin2val=ia},setOptions:function(a){this.options=
A(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],A(S[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=S.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ha(h,this);else if(c)g=b;else if(d)g=Ma(d,b);else if(f&&a>=1E3)for(;f--&&g===v;)c=Math.pow(1E3,
f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=B.numberFormat(b/c,-1)+e[f]);g===v&&(g=N(b)>=1E4?B.numberFormat(b,-1):B.numberFormat(b,-1,v,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();o(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=
z(p(a.dataMin,d[0]),Na(d)),a.dataMax=t(p(a.dataMax,d[0]),Ca(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(s(c)&&s(e))a.dataMin=z(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,e),e);if(s(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,j=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,k=g.minPixelPadding,e=(g.doPostTranslate||g.isLog&&e)&&g.lin2val;if(!j)j=g.transA;if(c)h*=
-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*j+i+h*k+(qa(f)?j*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,m=c&&f.oldChartWidth||
f.chartWidth,l;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=z(t(b,a),c):l=!0;return a},e=p(e,this.translate(a,null,null,c)),a=c=w(e+i);i=j=w(k-e-i);isNaN(e)?l=!0:this.horiz?(i=h,j=k-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=m-this.right,i=j=n(i,h,h+this.height));return l&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ea(V(b/a)*a),f=ea(sa(c/a)*a),g=[];if(b===c&&qa(b))return[b];for(b=e;b<=f;){g.push(b);b=ea(b+a);if(b===d)break;d=b}return g},
getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,
a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===v&&!this.isLog)s(a.min)||s(a.max)?this.minRange=null:(o(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===v||h<f)f=h}),this.minRange=z(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=(k-c+b)/2;d=[b-d,p(a.min,b-d)];if(e)d[2]=this.dataMin;
b=Ca(d);c=[b+k,p(a.max,b+k)];if(e)c[2]=this.dataMax;c=Na(c);c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Ca(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):o(b.series,function(a){var h=i?1:k?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,q=a.closestPointRange;h>c&&(h=0);d=t(d,h);b.single||(f=t(f,Aa(j)?0:h/2),g=t(g,
j==="on"?0:h));!a.noSharedTooltip&&s(q)&&(e=s(e)?z(e,q):q)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=z(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=d.maxPadding,j=d.minPadding,
k=d.tickInterval,m=d.tickPixelInterval,l=b.categories;!f&&!l&&!h&&this.getTickAmount();h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&la(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));if(e)!a&&z(b.min,p(b.dataMin,b.min))<=0&&la(10,1),b.min=ea(Ba(b.min),15),b.max=ea(Ba(b.max),15);if(b.range&&s(b.max))b.userMin=b.min=t(b.min,b.minFromRange()),b.userMax=b.max,
b.range=null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!l&&!b.axisPointRange&&!b.usePercentage&&!h&&s(b.min)&&s(b.max)&&(c=b.max-b.min)){if(!s(d.min)&&!s(b.userMin)&&j&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*j;if(!s(d.max)&&!s(b.userMax)&&i&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*i}if(qa(d.floor))b.min=t(b.min,d.floor);if(qa(d.ceiling))b.max=z(b.max,d.ceiling);b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!k&&m===b.linkedParent.options.tickPixelInterval?
k=b.linkedParent.tickInterval:p(k,this.tickAmount?(b.max-b.min)/t(this.tickAmount-1,1):void 0,l?1:(b.max-b.min)*m/t(b.len,m));g&&!a&&o(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=t(b.pointRange,b.tickInterval);a=p(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!k&&
b.tickInterval<a)b.tickInterval=a;if(!f&&!e&&!k)b.tickInterval=ob(b.tickInterval,null,nb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:
0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),
this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&s(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;b?this.min=d:this.min-f>d&&a.shift();c?this.max=e:this.max+f<e&&a.pop();a.length===0&&s(d)&&a.push((e+d)/2)},getTickAmount:function(){var a={},b,c=this.options,d=c.tickAmount,
e=c.tickPixelInterval;!s(c.tickInterval)&&this.len<e&&!this.isRadial&&!this.isLog&&c.startOnTick&&c.endOnTick&&(d=2);!d&&this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&(o(this.chart[this.coll],function(c){var d=c.options,e=c.horiz,d=[e?d.left:d.top,e?d.width:d.height,d.pane].join(",");a[d]?c.series.length&&(b=!0):a[d]=1}),b&&(d=sa(this.len/e)+1));if(d<4)this.finalTickAmt=d,d=5;this.tickAmount=d},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,
d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(ea(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(s(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=v}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;o(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=
!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=p(c,!0);o(f.series,function(a){delete a.kdTree});
e=r(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=z(c,p(e.min,c)),e=t(d,p(e.max,d));this.allowZoomOutside||(s(c)&&a<=f&&(a=f),s(d)&&b>=e&&(b=e));this.displayBtn=a!==v||b!==v;this.setExtremes(a,b,!1,v,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,
a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseFloat(f)/100*a.plotHeight);c.test(g)&&(g=parseFloat(g)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?ea(ia(this.min)):this.min,max:a?ea(ia(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},
getThreshold:function(a){var b=this.isLog,c=b?ia(this.min):this.min,b=b?ia(this.max):this.max;a===null?a=b<0?b:c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},unsquish:function(){var a=this.ticks,b=this.options.labels,c=this.horiz,d=this.tickInterval,e=d,f=this.len/(((this.categories?1:0)+this.max-this.min)/d),g,h=b.rotation,i=this.chart.renderer.fontMetrics(b.style.fontSize,
a[0]&&a[0].label),j,k=Number.MAX_VALUE,m,l=function(a){a/=f||1;a=a>1?sa(a):1;return a*d};c?(m=s(h)?[h]:f<p(b.autoRotationLimit,80)&&!b.staggerLines&&!b.step&&b.autoRotation)&&o(m,function(a){var b;if(a===h||a&&a>=-90&&a<=90)j=l(N(i.h/aa(ga*a))),b=j+N(a/360),b<k&&(k=b,g=a,e=j)}):b.step||(e=l(i.h));this.autoRotation=m;this.labelRotation=g;return e},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=a.margin,h=this.categories?
c.length:c.length-1,i=this.slotWidth=f&&!e.step&&!e.rotation&&(this.staggerLines||1)*a.plotWidth/h||!f&&(g[3]&&g[3]-a.spacing[3]||a.chartWidth*0.33),j=t(1,w(i-2*(e.padding||5))),k={},g=b.fontMetrics(e.style.fontSize,d[0]&&d[0].label),h=e.style.textOverflow,m,l=0;if(!Aa(e.rotation))k.rotation=e.rotation||0;if(this.autoRotation)o(c,function(a){if((a=d[a])&&a.labelLength>l)l=a.labelLength}),l>j&&l>g.h?k.rotation=this.labelRotation:this.labelRotation=0;else if(i&&(m={width:j+"px"},!h)){m.textOverflow=
"clip";for(i=c.length;!f&&i--;)if(j=c[i],j=d[j].label)if(j.styles.textOverflow==="ellipsis"&&j.css({textOverflow:"clip"}),j.getBBox().height>this.len/c.length-(g.h-g.f))j.specCss={textOverflow:"ellipsis"}}if(k.rotation&&(m={width:(l>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!h))m.textOverflow="ellipsis";this.labelAlign=k.align=e.align||this.autoLabelAlign(this.labelRotation);o(c,function(a){var b=(a=d[a])&&a.label;if(b)m&&b.css(A(m,b.specCss)),delete b.specCss,b.attr(k),a.rotation=
k.rotation});this.tickRotCorr=b.rotCorr(g.b,this.labelRotation||0,this.side===2)},hasData:function(){return this.hasVisibleSeries||s(this.min)&&s(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,m=0,l,n=0,q=d.title,x=d.labels,T=0,Q=b.axisOffset,b=b.clipOffset,u=[-1,1,1,-1][h],y;j=a.hasData();a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&x.staggerLines;if(!a.axisGroup)a.gridGroup=
c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:x.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){if(o(e,function(b){f[b]?f[b].addLabel():f[b]=new Ra(a,b)}),a.renderUnsquish(),o(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign)T=t(f[b].getLabelSize(),T)}),a.staggerLines)T*=a.staggerLines,a.labelOffset=T}else for(y in f)f[y].destroy(),
delete f[y];if(q&&q.text&&q.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(q.text,0,0,q.useHTML).attr({zIndex:7,rotation:q.rotation||0,align:q.textAlign||{low:"left",middle:"center",high:"right"}[q.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(q.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)m=a.axisTitle.getBBox()[g?"height":"width"],l=q.offset,n=s(l)?0:p(q.margin,g?5:10);a.axisTitle[k?"show":"hide"]()}a.offset=u*p(d.offset,Q[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};
c=h===2?a.tickRotCorr.y:0;g=T+n+(T&&u*(g?p(x.y,a.tickRotCorr.y+8):x.x)-c);a.axisTitleMargin=p(l,g);Q[h]=t(Q[h],a.axisTitleMargin+m+u*a.offset,g);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=t(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=
this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,j=e.y||0,k=F(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?k:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+j-(g?this.height:0)+h:d+j}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.ticks,j=a.minorTicks,k=
a.alternateBands,m=d.stackLabels,l=d.alternateGridColor,n=a.tickmarkOffset,q=d.lineWidth,x,p=b.hasRendered&&s(a.oldMin)&&!isNaN(a.oldMin),Q=a.showAxis,u=c.globalAnimation,y,t;a.labelEdge.length=0;a.overlap=!1;o([i,j,k],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||f){a.minorTickInterval&&!a.categories&&o(a.getMinorTickPositions(),function(b){j[b]||(j[b]=new Ra(a,b,"minor"));p&&j[b].isNew&&j[b].render(null,!0);j[b].render(null,!1,1)});if(g.length&&(o(g,function(b,c){if(!f||b>=a.min&&
b<=a.max)i[b]||(i[b]=new Ra(a,b)),p&&i[b].isNew&&i[b].render(c,!0,0.1),i[b].render(c)}),n&&(a.min===0||a.single)))i[-1]||(i[-1]=new Ra(a,-1,null,!0)),i[-1].render(-1);l&&o(g,function(b,c){if(c%2===0&&b<a.max)k[b]||(k[b]=new B.PlotLineOrBand(a)),y=b+n,t=g[c+1]!==v?g[c+1]+n:a.max,k[b].options={from:e?ia(y):y,to:e?ia(t):t,color:l},k[b].render(),k[b].isActive=!0});if(!a._addedPlotLB)o((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}o([i,j,k],function(a){var c,
d,e=[],f=u?u.duration||500:0,g=function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])};for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);a===k||!b.hasRendered||!f?g():f&&setTimeout(g,f)});if(q)x=a.getLinePath(q),a.axisLine?a.axisLine.animate({d:x}):a.axisLine=c.path(x).attr({stroke:d.lineColor,"stroke-width":q,zIndex:7}).add(a.axisGroup),a.axisLine[Q?"show":"hide"]();if(h&&Q)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=
!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.render();o(this.plotLinesAndBands,function(a){a.render()});o(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||Z(b);for(d in c)Oa(c[d]),c[d]=null;o([b.ticks,b.minorTicks,b.alternateBands],function(a){Oa(a)});for(a=e.length;a--;)e[a].destroy();o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});
this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e=d.animation;if(!this.crosshair||(s(b)||!p(this.crosshair.snap,!0))===!1||b&&b.series&&b.series[this.coll]!==this)this.hideCrosshair();else if(p(d.snap,!0)?s(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();
else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e);else{e=this.categories&&!this.isRadial;e={"stroke-width":d.width||(e?this.transA:1),stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};r(ha.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,
null,null,!0);d&&c&&d.toString()!==c.toString()?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new B.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,
e=b.length;e--;)b[e].id===a&&b[e].destroy();o([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&ja(b,b[e])})}});ha.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=S.global.useUTC,h,i=new ya(b-Va(b)),j=a.unitRange,k=a.count;if(s(b)){i[Db](j>=E.second?0:k*V(i.getMilliseconds()/k));if(j>=E.second)i[Eb](j>=E.minute?0:k*V(i.getSeconds()/k));if(j>=E.minute)i[Fb](j>=E.hour?0:k*V(i[qb]()/k));if(j>=E.hour)i[Gb](j>=E.day?0:k*V(i[rb]()/k));
if(j>=E.day)i[tb](j>=E.month?1:k*V(i[Wa]()/k));j>=E.month&&(i[ub](j>=E.year?0:k*V(i[Xa]()/k)),h=i[Ya]());j>=E.year&&(h-=h%k,i[vb](h));if(j===E.week)i[tb](i[Wa]()-i[sb]()+p(d,1));b=1;if(mb||bb)i=i.getTime(),i=new ya(i+Va(i));h=i[Ya]();for(var d=i.getTime(),m=i[Xa](),l=i[Wa](),n=(E.day+(g?Va(i):i.getTimezoneOffset()*6E4))%E.day;d<c;)e.push(d),j===E.year?d=db(h+b*k,0):j===E.month?d=db(h,m+b*k):!g&&(j===E.day||j===E.week)?d=db(h,m,l+b*k*(j===E.day?1:7)):d+=j*k,b++;e.push(d);o(ib(e,function(a){return j<=
E.hour&&a%E.day===n}),function(a){f[a]="day"})}e.info=r(a,{higherRanks:f,totalRange:j*k});return e};ha.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=E[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=E[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+E[c[g+1][0]])/2)break;e===E.year&&
a<5*e&&(f=[1,2,5]);c=ob(a/e,f,d[0]==="year"?t(nb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ha.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=w(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),h,i,j,k,m,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!m;f++){i=e.length;for(h=0;h<i&&!m;h++)j=Ba(ia(f)*e[h]),j>b&&(!d||k<=c)&&k!==v&&g.push(k),k>c&&(m=!0),k=j}else if(b=ia(b),
c=ia(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=ob(a,null,nb(a)),g=Ta(this.getLinearTickPositions(a,b,c),Ba),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g};var Mb=B.Tooltip=function(){this.init.apply(this,arguments)};Mb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=F(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,
y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});fa||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&
(N(a-f.x)>1||N(b-f.y)>1),h=e.followPointer||e.len>1;r(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?v:g?(2*f.anchorX+c)/3:c,anchorY:h?v:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);if(!this.isHidden)this.hideTimer=setTimeout(function(){b.label.fadeOut();b.isHidden=!0},p(a,this.options.hideDelay,500))},getAnchor:function(a,b){var c,d=this.chart,
e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=ra(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===v&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(o(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ta(c,w)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,
f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],j=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],k=p(c.ttBelow,d.inverted&&!c.negative||!d.inverted&&c.negative),m=function(a,b,c,d,h,i){var j=c<d-e,l=d+e+c<b,m=d-e-c;d+=e;if(k&&l)f[a]=d;else if(!k&&j)f[a]=m;else if(j)f[a]=z(i-c,m-g<0?m:m-g);else if(l)f[a]=t(h,d+g+c>b?d:d+g);else return!1},l=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},n=function(a){var b=
i;i=j;j=b;h=a},q=function(){m.apply(0,i)!==!1?l.apply(0,j)===!1&&!h&&(n(!0),q()):h?f.x=f.y=0:(n(!0),q())};(d.inverted||this.len>1)&&n();q();return f},defaultFormatter:function(a){var b=this.points||ra(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,m,l=this.shared;
clearTimeout(this.hideTimer);this.followPointer=ra(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&o(i,function(a){a.setState()}),o(a,function(a){a.setState("hover");k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,this.len=k.length,a=a[0]):i=a.getLabelConfig();j=j.call(i,this);i=a.series;this.distance=p(i.tooltipOptions.distance,16);j===!1?this.hide():(this.isHidden&&(kb(d),d.attr("opacity",
1).show()),d.attr({text:j}),m=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:m}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);I(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,borderColor:m})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(w(c.x),w(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,
b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=Ma("%m-%d %H:%M:%S.%L",a.x);for(f in E){if(e===E.week&&+Ma("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}else if(E[f]>e){f=i;break}else if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,
e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&qa(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ha(c,{point:a,series:d})},bodyFormatter:function(a){return Ta(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var oa;$a=C.documentElement.ontouchstart!==v;var Ua=B.Pointer=function(a,b){this.init(a,b)};Ua.prototype={init:function(a,
b){var c=b.chart,d=c.events,e=fa?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(B.Tooltip&&b.tooltip.enabled)a.tooltip=new Mb(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Sb(a);if(!a.target)a.target=a.srcElement;
d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Rb(this.chart.container);d.pageX===v?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return r(a,{chartX:w(c),chartY:w(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};o(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:
!1,f=b.hoverPoint,g=b.hoverSeries,h,i=b.chartWidth,j,k,m=[],l,n;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];!e&&g&&g.directTouch&&f?l=f:(o(c,function(b){j=b.noSharedTooltip&&e;k=!e&&b.directTouch;b.visible&&!j&&!k&&p(b.options.enableMouseTracking,!0)&&(n=b.searchPoint(a,!j&&b.kdDimensions===1))&&m.push(n)}),o(m,function(a){if(a&&typeof a.dist==="number"&&a.dist<i)i=a.dist,l=a}));if(l&&(l!==this.prevKDPoint||d&&d.isHidden)){if(e&&!l.series.noSharedTooltip){for(h=
m.length;h--;)(m[h].clientX!==l.clientX||m[h].series.noSharedTooltip)&&m.splice(h,1);m.length&&d&&d.refresh(m,a);o(m,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||l))})}else if(d&&d.refresh(l,a),!g||!g.directTouch)l.onMouseOver(a);this.prevKDPoint=l}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(Y[oa])Y[oa].pointer.onDocumentMouseMove(a)},
H(C,"mousemove",this._onDocumentMouseMove);o(b.axes,function(b){b.drawCrosshair(a,p(l,f))})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;(a=a&&g&&h)&&ra(h)[0].plotX===v&&(a=!1);if(a)g.refresh(h),e&&(e.setState(e.state,!0),o(c.axes,function(a){p(a.options.crosshair&&a.options.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()}));else{if(e)e.onMouseOut();f&&o(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);
if(this._onDocumentMouseMove)Z(C,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;o(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;o(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=
this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,m,l=this.selectionMarker,n=this.mouseDownX,q=this.mouseDownY,x=c.panKey&&a[c.panKey+"Key"];if(!l||!l.touch)if(d<h?d=h:d>h+j&&(d=h+j),e<i?e=i:e>i+k&&(e=i+k),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(q-e,2)),this.hasDragged>
10){m=b.isInsidePlot(n-h,q-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&m&&!x&&!l)this.selectionMarker=l=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();l&&f&&(d-=n,l.attr({width:N(d),x:(d>0?0:d)+n}));l&&g&&(d=e-q,l.attr({height:N(d),y:(d>0?0:d)+q}));m&&!l&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={xAxis:[],yAxis:[],originalEvent:a.originalEvent||
a},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||d)o(c.axes,function(c){if(c.zoomEnabled&&s(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,q=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+j)-n);e[c.coll].push({axis:c,min:z(q,f),max:t(q,f)});k=!0}}),k&&I(c,"selection",e,function(a){c.zoom(r(a,d?{animation:!1}:null))});this.selectionMarker=
this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)L(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){Y[oa]&&Y[oa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&
!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=Y[oa];if(a)a.pointer.reset(),a.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;oa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=J(a,"class"))if(c.indexOf(b)!==
-1)return!0;else if(c.indexOf("highcharts-container")!==-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.originalEvent=a;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",
r(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(r(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};H(b,"mouseleave",a.onContainerMouseLeave);ab===1&&H(C,"mouseup",a.onDocumentMouseUp);if($a)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=
function(b){a.onContainerTouchMove(b)},ab===1&&H(C,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;Z(this.chart.container,"mouseleave",this.onContainerMouseLeave);ab||(Z(C,"mouseup",this.onDocumentMouseUp),Z(C,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};r(B.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,
a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",m="chart"+k,l=a?"width":"height",n=i["plot"+(a?"Left":"Top")],q,x,p=h||1,o=i.inverted,u=i.bounds[a?"h":"v"],t=b.length===1,s=b[0][m],r=c[0][m],w=!t&&b[1][m],v=!t&&c[1][m],z,c=function(){!t&&N(s-w)>20&&(p=h||N(r-v)/N(s-w));x=(n-r)/p+s;q=i["plot"+(a?"Width":"Height")]/p};c();b=x;b<u.min?(b=u.min,z=!0):b+q>u.max&&(b=u.max-q,z=!0);z?(r-=0.8*(r-g[j][0]),t||(v-=0.8*(v-g[j][1])),c()):g[j]=[r,v];o||(f[j]=
x-n,f[l]=q);f=o?1/p:p;e[l]=q;e[j]=b;d[o?a?"scaleY":"scaleX":"scale"+k]=p;d["translate"+k]=f*n+(r-f*s)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),m={};if(f>1)b.initiated=!0;h&&b.initiated&&!k&&a.preventDefault();Ta(e,function(a){return b.normalize(a)});if(a.type==="touchstart")o(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),
g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&d[1].chartY],o(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=z(e,f),e=t(e,f);b.min=z(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=r({destroy:ta,touch:!0},c.plotBox);b.pinchTranslate(d,e,j,i,m,g);b.hasPinched=h;b.scaleGroups(j,m);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));
else if(b.res)b.res=!1,this.reset(!1,0)}},touch:function(a,b){var c=this.chart;oa=c.index;a.touches.length===1?(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu?(b&&this.runPointActions(a),this.pinch(a)):b&&this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(a){Y[oa]&&Y[oa].pointer.drop(a)}});if(K.PointerEvent||K.MSPointerEvent){var va=
{},Ab=!!K.PointerEvent,Wb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in va)va.hasOwnProperty(a)&&b.push({pageX:va[a].pageX,pageY:va[a].pageY,target:va[a].target});return b},Bb=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&Y[oa])d(a),d=Y[oa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:ta,touches:Wb()})};r(Ua.prototype,{onContainerPointerDown:function(a){Bb(a,"onContainerTouchStart","touchstart",function(a){va[a.pointerId]=
{pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Bb(a,"onContainerTouchMove","touchmove",function(a){va[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!va[a.pointerId].target)va[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Bb(a,"onDocumentTouchEnd","touchend",function(a){delete va[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Ab?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Ab?
"pointermove":"MSPointerMove",this.onContainerPointerMove);a(C,Ab?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});Sa(Ua.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&L(b.container,{"-ms-touch-action":O,"touch-action":O})});Sa(Ua.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(H)});Sa(Ua.prototype,"destroy",function(a){this.batchMSEvents(Z);a.call(this)})}var lb=B.Legend=function(a,b){this.init(a,b)};lb.prototype=
{init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=A(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=p(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),H(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,
c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==v&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;
o(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Pa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,o(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,L(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":O}))})},
renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?Ha(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=
this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,m=!d.rtl,l=d.width,n=d.itemMarginBottom||0,q=this.itemMarginTop,x=this.initialItemX,o=a.legendItem,s=a.series&&a.series.drawLegendSymbol?a.series:a,u=s.options,u=this.createCheckboxForItem&&u&&u.showCheckbox,y=d.useHTML;if(!o){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=o=c.text("",
m?f+g:-g,this.baseline||0,y).css(A(a.visible?h:i)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,o),this.baseline=this.fontMetrics.f+3+q,o.attr("y",this.baseline);s.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,o,y,h,i);this.colorizeItem(a,a.visible);u&&this.createCheckboxForItem(a)}this.setText(a);c=o.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(u?20:0);this.itemHeight=g=w(a.legendItemHeight||
c.height);if(e&&this.itemX-x+f>(l||b.chartWidth-2*j-x-d.x))this.itemX=x,this.itemY+=q+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=q+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=q+g+n,this.lastLineHeight=g);this.offsetWidth=l||t((e?this.itemX-x-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];o(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,
!s(c.linkedTo)?v:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&o([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!s(a[g])&&(c[gb[g]]=t(c[gb[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+p(d.margin,12)+b[g]))})},render:function(){var a=this,b=
a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,m=j.borderWidth,l=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();pb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=
f=!!e.length;a.lastLineHeight=0;o(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(m||l){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,m||0).attr({stroke:j.borderColor,"stroke-width":m||0,fill:l||O}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;o(e,function(b){a.positionItem(b)});f&&d.align(r({width:g,
height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),m=j.arrowSize||12,l=this.nav,n=this.pages,q=this.padding,x,s=this.allItems,r=function(a){i.attr({height:a});if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+q+"px,9999px,"+(q+a)+"px,0)"};e.layout==="horizontal"&&
(f/=2);g&&(f=z(f,g));n.length=0;if(a>f){this.clipHeight=h=t(f-20-this.titleHeight-q,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;o(s,function(a,b){var c=a._legendItemPos[1],d=w(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(x||c)!==n[e-1])n.push(x||c),e++;b===s.length-1&&c+d-n[e-1]>h&&n.push(c);c!==x&&(x=c)});if(!i)i=b.clipRect=d.clipRect(0,q,9999,0),b.contentGroup.clip(i);r(h);if(!l)this.nav=l=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,m,
m).on("click",function(){b.scroll(-1,k)}).add(l),this.pager=d.text("",15,10).css(j.style).add(l),this.down=d.symbol("triangle-down",0,0,m,m).on("click",function(){b.scroll(1,k)}).add(l);b.scroll(0);a=f}else if(l)r(c.chartHeight),l.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==
v&&Qa(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};La=B.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||
a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-w(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=
d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(za)||Ja)&&Sa(lb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});D=B.Chart=function(){this.init.apply(this,arguments)};D.prototype={callbacks:[],init:function(a,b){var c,d=a.series;a.series=null;c=A(S,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;
this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=Y.length;Y.push(f);ab++;d.reflow!==!1&&H(f,"load",function(){f.initReflow()});if(e)for(g in e)H(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=fa?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=M[a.type||b.type||b.defaultSeriesType])||la(17,!0);b=new b;b.init(this,
a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,m=k,l=this.renderer,n=l.isHidden(),q=[];Qa(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();m--;)if(a=c[m],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(m=k;m--;)if(a=c[m],a.options.stacking)a.isDirty=!0;
o(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,o(b,function(a){a.setScale()});this.getMargins();i&&(o(b,function(a){a.isDirty&&(j=!0)}),o(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,q.push(function(){I(a,"afterSetExtremes",r(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();
o(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);l.draw();I(this,"redraw");n&&this.cloneRenderTo(!0);o(q,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ra(b.xAxis||
{}),b=b.yAxis=ra(b.yAxis||{});o(c,function(a,b){a.index=b;a.isX=!0});o(b,function(a,b){a.index=b});c=c.concat(b);o(c,function(b){new ha(a,b)})},getSelectedPoints:function(){var a=[];o(this.series,function(b){a=a.concat(ib(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return ib(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=A(e.title,a);g=e.subtitle=A(e.subtitle,b),e=g;o([["title",a,f],["subtitle",
b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(r({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&
!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(r({y:b+(f.margin-13)+g.fontMetrics(f.style.fontSize,d).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=sa(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=hb(c,
"width");if(!s(a))this.containerHeight=hb(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Pa(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),L(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&
b.style.setProperty("display","block","important"),C.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+wb++;if(Aa(a))this.renderTo=a=C.getElementById(a);a||la(13,!0);c=F(J(a,"data-highcharts-chart"));!isNaN(c)&&Y[c]&&Y[c].hasRendered&&Y[c].destroy();J(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;
this.container=a=$(Ia,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},r({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=b.forExport?new ua(a,c,d,b.style,!0):new Za(a,c,d,b.style);fa&&this.renderer.create(this,a,c,d);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,
c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!s(c[0]))this.plotTop=t(this.plotTop,d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&o(a.axes,function(a){a.getOffset()});o(gb,function(d,e){s(c[e])||(a[d]+=b[e])});a.setChartSize()},
reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||hb(d,"width"),f=c.height||hb(d,"height"),c=a?a.target:K,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===K||c===C)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};H(K,"resize",b);H(a,"destroy",function(){Z(K,
"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g,h=d.renderer,i=h.globalAnimation;d.isResizing+=1;g=function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})};Qa(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(s(a))d.chartWidth=e=t(0,w(a)),d.hasUserSize=!!e;if(s(b))d.chartHeight=f=t(0,w(b));(i?jb:L)(d.container,{width:e+"px",height:f+"px"},i);d.setChartSize(!0);h.setSize(e,f,c);d.maxTicks=null;o(d.axes,function(a){a.isDirty=!0;a.setScale()});o(d.series,function(a){a.isDirty=
!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");i===!1?g():setTimeout(g,i&&i.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,m;this.plotLeft=i=w(this.plotLeft);this.plotTop=j=w(this.plotTop);this.plotWidth=k=t(0,w(d-i-this.marginRight));this.plotHeight=m=t(0,w(e-j-this.marginBottom));this.plotSizeX=b?m:
k;this.plotSizeY=b?k:m;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:m};d=2*V(this.plotBorderWidth/2);b=sa(t(d,h[3])/2);c=sa(t(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-t(d,h[1])/2-b),height:t(0,V(this.plotSizeY-t(d,h[2])/2-c))};a||o(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;o(gb,function(b,c){a[b]=p(a.margin[c],
a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,m=a.plotBackgroundImage,l=a.plotBorderWidth||0,n,q=this.plotLeft,p=this.plotTop,o=this.plotWidth,t=this.plotHeight,u=this.plotBox,s=this.clipRect,r=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-
n,height:d-n}));else{e={fill:j||O};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(u):this.plotBackground=b.rect(q,p,o,t,0).attr({fill:k}).add().shadow(a.plotShadow);if(m)h?h.animate(u):this.plotBGImage=b.image(m,q,p,o,t).add();s?s.animate({width:r.width,height:r.height}):this.clipRect=b.clipRect(r);if(l)g?g.animate(g.crisp({x:q,y:p,width:o,height:t,strokeWidth:-l})):
this.plotBorder=b.rect(q,p,o,t,0,-l).attr({stroke:a.plotBorderColor,"stroke-width":l,fill:O,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;o(["inverted","angular","polar"],function(g){c=M[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=M[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;o(b,function(a){a.linkedSeries.length=0});o(b,function(b){var d=
b.options.linkedTo;if(Aa(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d,b.visible=p(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){o(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&o(b.items,function(c){var d=r(b.style,c.style),e=F(d.left)+a.plotLeft,f=F(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},
render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new lb(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=13;o(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.1;if(f||g)this.maxTicks=null,o(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&o(a,function(a){a.render()});
if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");Y[a.index]=
v;ab--;a.renderTo.removeAttribute("data-highcharts-chart");Z(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",Z(d),f&&Pa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ca&&K==K.top&&
C.readyState!=="complete"||fa&&!K.canvg?(fa?Lb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):C.attachEvent("onreadystatechange",function(){C.detachEvent("onreadystatechange",a.firstRender);C.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();I(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();o(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,
"beforeRender");if(B.Pointer)a.pointer=new Ua(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);o(a.callbacks,function(b){a.index!==v&&b.apply(a,[a])});I(a,"load");a.cloneRenderTo(!0)}},splashArray:function(a,b){var c=b[a],c=da(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};var Xb=B.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[p(e[0],
"50%"),p(e[1],"50%"),a.size||"100%",a.innerSize||0],f=z(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);return e}},Ea=function(){};Ea.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;
return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ea.prototype.optionsToObject.call(this,a);r(this,a);this.options=this.options?r(this.options,a):a;if(d)this.y=this[d];if(this.x===v&&c)this.x=b===v?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(typeof a==="number"||a===null)b[e[0]]=a;else if(Fa(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=
a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;)b[e[h++]]=a[g++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ja(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)Z(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=
"graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";o(b.pointArrayMap||["y"],function(b){b="{point."+
b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ha(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)}};var R=B.Series=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ea,sorted:!0,requireSorting:!0,
pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();r(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(fa)b.animation=!1;e=b.events;for(d in e)H(c,d,e[d]);if(e&&e.click||
b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();o(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;pb(f,g);this.yAxis&&pb(this.yAxis.series,g);o(f,function(a,b){a.index=b;a.name=a.name||""})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;o(a.axisTypes||[],function(e){o(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==v&&
b[e]===d.id||b[e]===v&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&la(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;o(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=p(b,a.pointStart,0);this.pointInterval=c=
p(this.pointInterval,a.pointInterval,1);if(d==="month"||d==="year")a=new ya(b),a=d==="month"?+a[ub](a[Xa]()+c):+a[vb](a[Ya]()+c),c=a-b;this.xIncrement=b+c;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else o(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,
b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=A(e,c.series,a);this.tooltipOptions=A(S.tooltip,S.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&
s(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||ba[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);
if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:La.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,m=e.xAxis,l=m&&!!m.categories,n=i.turboThreshold,q=this.xData,x=this.yData,t=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)o(a,function(a,b){f[b].update&&f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.pointRange=l?1:i.pointRange;e.colorCounter=0;o(this.parallelArrays,
function(a){e[a+"Data"].length=0});if(n&&h>n){for(c=0;k===null&&c<h;)k=a[c],c++;if(qa(k)){l=p(i.pointStart,0);i=p(i.pointInterval,1);for(c=0;c<h;c++)q[c]=l,x[c]=a[c],l+=i;e.xIncrement=l}else if(Fa(k))if(t)for(c=0;c<h;c++)i=a[c],q[c]=i[0],x[c]=i.slice(1,t+1);else for(c=0;c<h;c++)i=a[c],q[c]=i[0],x[c]=i[1];else la(12)}else for(c=0;c<h;c++)if(a[c]!==v&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),l&&s(i.name)))m.names[i.x]=i.name;Aa(x[0])&&la(14,!0);e.data=
[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(m)m.minRange=m.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.isCartesian,m,l;if(k&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),m=a.min,l=a.max;if(k&&this.sorted&&(!i||d>i||this.forceCrop))if(b[d-1]<m||b[0]>l)b=[],c=[];else if(b[0]<
m||b[d-1]>l)e=this.cropData(this.xData,this.yData,m,l),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length-1;i>=0;i--)d=b[i]-b[i-1],d>0&&(g===v||d<g)?g=d:d<0&&this.requireSorting&&la(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;if(j.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(;i<e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,
g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,m=[],l;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(l=0;l<g;l++)i=h+l,j?m[l]=(new f).init(this,[d[l]].concat(ra(e[l]))):(b[i]?k=b[i]:a[i]!==v&&(b[i]=k=(new f).init(this,a[i],d[l])),m[l]=k),m[l].index=i;if(b&&(g!==(c=b.length)||j))for(l=0;l<c;l++)if(l===h&&!j&&(l+=g),b[l])b[l].destroyElements(),
b[l].plotX=v;this.data=b;this.points=m},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,m,a=a||this.stackedYData||this.processedYData;d=a.length;for(m=0;m<d;m++)if(j=c[m],k=a[m],i=k!==null&&k!==v&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[m+1]||j)>=g&&(c[m-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=Na(e);this.dataMax=
Ca(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||qa(i),k=a.threshold,m=a.startFromThreshold?k:0,l,n,q,o=Number.MAX_VALUE,a=0;a<g;a++){var r=f[a],w=r.x,u=r.y;n=r.low;var y=b&&e.stacks[(this.negStacks&&u<(m?0:k)?"-":"")+this.stackKey];if(e.isLog&&u!==null&&u<=0)r.y=u=null,la(10);r.plotX=l=z(t(-1E5,c.translate(w,
0,0,0,1,i,this.type==="flags")),1E5);if(b&&this.visible&&y&&y[w])y=y[w],u=y.points[this.index+","+a],n=u[0],u=u[1],n===m&&(n=p(k,e.min)),e.isLog&&n<=0&&(n=null),r.total=r.stackTotal=y.total,r.percentage=y.total&&r.y/y.total*100,r.stackY=u,y.setOffset(this.pointXOffset||0,this.barW||0);r.yBottom=s(n)?e.translate(n,0,1,0,1):null;h&&(u=this.modifyValue(u,r));r.plotY=n=typeof u==="number"&&u!==Infinity?z(t(-1E5,e.translate(u,0,1,0,1)),1E5):v;r.isInside=n!==v&&n>=0&&n<=e.len&&l>=0&&l<=c.len;r.clientX=
j?c.translate(w,0,0,0,1):l;r.negative=r.y<(k||0);r.category=d&&d[r.x]!==v?d[r.x]:r.x;a&&(o=z(o,N(l-q)));q=l}this.closestPointRangePx=o;this.getSegments()},setClip:function(a){var b=this.chart,c=b.renderer,d=b.inverted,e=this.clipBox,f=e||b.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height].join(","),h=b[g],i=b[g+"m"];if(!h){if(a)f.width=0,b[g+"m"]=i=c.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight);b[g]=h=c.clipRect(f)}a&&(h.count+=1);if(this.options.clip!==
!1)this.group.clip(a||e?h:b.clipRect),this.markerGroup.clip(i),this.sharedClipKey=g;a||(h.count-=1,h.count<=0&&g&&b[g]&&(e||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!da(c))c=ba[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();I(this,"afterAnimate")},
drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,m=this.options.marker,l=this.pointAttr[""],n,q,o,t=this.markerGroup,s=p(m.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*m.radius);if(m.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,k=g.graphic,n=g.marker||{},q=!!g.marker,a=s&&n.enabled===v||n.enabled,o=g.isInside,a&&e!==v&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||l,h=a.r,i=p(n.symbol,this.symbol),j=i.indexOf("url")===
0,k)k[o?"show":"hide"](!0).animate(r({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(o&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,q?n:m).attr(a).add(t)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ba[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor;
f={stroke:g,fill:g};var i=a.points||[],j,k,m=[],l=a.pointAttrToOptions;j=a.hasPointSpecificOptions;var n=c.lineColor,q=c.fillColor;k=b.turboThreshold;var p=a.zones,t=a.zoneAxis||"y",w;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||na(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||na(e.negativeColor||h).brighten(e.brightness).get());m[""]=a.convertAttribs(c,f);o(["hover","select"],function(b){m[b]=
a.convertAttribs(d[b],m[""])});a.pointAttr=m;g=i.length;if(!k||g<k||j)for(;g--;){k=i[g];if((c=k.options&&k.options.marker||k.options)&&c.enabled===!1)c.radius=0;if(p.length){j=0;for(f=p[j];k[t]>=f.value;)f=p[++j];if(f.color)k.color=k.fillColor=f.color}j=b.colorByPoint||k.color;if(k.options)for(w in l)s(c[l[w]])&&(j=!0);if(j){c=c||{};j=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=f.color||!k.options.color&&e[k.negative&&h?"negativeColor":"color"]||na(k.color).brighten(f.brightness||
e.brightness).get();f={color:k.color};if(!q)f.fillColor=k.color;if(!n)f.lineColor=k.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;j[""]=a.convertAttribs(r(f,c),m[""]);j.hover=a.convertAttribs(d.hover,m.hover,j[""]);j.select=a.convertAttribs(d.select,m.select,j[""])}else j=m;k.pointAttr=j}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(za),d,e=a.data||[],f,g,h;I(a,"destroy");Z(a);o(a.axisTypes||[],function(b){if(h=a[b])ja(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&
a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof P&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;ja(b.series,a);for(g in a)delete a[g]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;o(a,function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?
c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];o(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=this.getGraphPath(),g=this.fillGraph&&this.color||O;o(this.zones,
function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});o(c,function(c,i){var j=c[0],k=a[j];if(k)k.animate({d:f});else if((d||g)&&f.length)k={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?k.dashstyle=c[2]:e&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=t(b.chartWidth,
b.chartHeight),m=this[(this.zoneAxis||"y")+"Axis"],l,n=m.reversed,q=b.inverted,x=m.horiz,r,s,u,y=!1;if(d.length&&(i||j)&&m.min!==v)i&&i.hide(),j&&j.hide(),l=m.getExtremes(),o(d,function(d,o){e=n?x?b.plotWidth:0:x?0:m.toPixels(l.min);e=z(t(p(f,e),0),k);f=z(t(w(m.toPixels(p(d.value,l.max),!0)),0),k);y&&(e=f=m.toPixels(l.max));r=Math.abs(e-f);s=z(e,f);u=t(e,f);if(m.isXAxis){if(h={x:q?u:s,y:0,width:r,height:k},!x)h.x=b.plotHeight-h.x}else if(h={x:0,y:q?u:s,width:k,height:r},x)h.y=b.plotWidth-h.y;b.inverted&&
c.isVML&&(h=m.isXAxis?{x:0,y:n?s:u,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[o]?g[o].animate(h):(g[o]=c.clipRect(h),i&&a["zoneGraph"+o].clip(g[o]),j&&a["zoneArea"+o].clip(g[o]));y=d.value>l.max}),this.clips=g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};o(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)H(c,"resize",a),H(b,"destroy",function(){Z(c,
"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&
p(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());o(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();
d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.isDirty,d=this.group,e=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:p(e&&e.left,a.plotLeft),translateY:p(f&&f.top,a.plotTop)}));this.translate();this.render();b&&I(this,"updatedData");
(c||b)&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(b,d,g){var h,i;if(i=b&&b.length)return h=c.kdAxisArray[d%g],b.sort(function(a,b){return a[h]-b[h]}),i=Math.floor(i/2),{point:b[i],left:a(b.slice(0,i),d+1,g),right:a(b.slice(i+1),d+1,g)}}function b(){var b=
ib(c.points||[],function(a){return a.y!==null});c.kdTree=a(b,d,d)}var c=this,d=c.kdDimensions;delete c.kdTree;c.options.kdSync?b():setTimeout(b)},searchKDTree:function(a,b){function c(a,b,j,k){var m=b.point,l=d.kdAxisArray[j%k],n,q,p=m;q=s(a[e])&&s(m[e])?Math.pow(a[e]-m[e],2):null;n=s(a[f])&&s(m[f])?Math.pow(a[f]-m[f],2):null;n=(q||0)+(n||0);m.dist=s(n)?Math.sqrt(n):Number.MAX_VALUE;m.distX=s(q)?Math.sqrt(q):Number.MAX_VALUE;l=a[l]-m[l];n=l<0?"left":"right";q=l<0?"right":"left";b[n]&&(n=c(a,b[n],
j+1,k),p=n[g]<p[g]?n:m);b[q]&&Math.sqrt(l*l)<p[g]&&(a=c(a,b[q],j+1,k),p=a[g]<p[g]?a:p);return p}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Hb.prototype={destroy:function(){Oa(this,this.axis)},render:function(a){var b=this.options,c=b.format,c=c?Ha(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,
null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=N(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===
!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};D.prototype.getStacks=function(){var a=this;o(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});o(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+p(b.options.stack,"")})};ha.prototype.buildStacks=function(){var a=this.series,b=p(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();
if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};ha.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};ha.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),
delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};ha.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};R.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,
j="-"+i,k=this.negStacks,m=this.yAxis,l=m.stacks,n=m.oldStacks,q,o,r,s,u,y;m.stacksTouched+=1;for(s=0;s<d;s++){u=a[s];y=b[s];r=this.index+","+s;o=(q=k&&y<(g?0:f))?j:i;l[o]||(l[o]={});if(!l[o][u])n[o]&&n[o][u]?(l[o][u]=n[o][u],l[o][u].total=null):l[o][u]=new Hb(m,m.options.stackLabels,q,u,h);o=l[o][u];o.points[r]=[p(o.cum,g)];o.touched=m.stacksTouched;e==="percent"?(q=q?i:j,k&&l[q]&&l[q][u]?(q=l[q][u],o.total=q.total=t(q.total,o.total)+N(y)||0):o.total=ea(o.total+(N(y)||0))):o.total=ea(o.total+(y||
0));o.cum=p(o.cum,g)+(y||0);o.points[r].push(o.cum);c[s]=o.cum}if(e==="percent")m.usePercentage=!0;this.stackedYData=c;m.oldStacks={}}};R.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;o([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=ea(g[0]*h),g[1]=ea(g[1]*h),a.stackedYData[f]=g[1]})};r(D.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),
I(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new ha(this,A(a,{index:this[e].length,isX:b}));f[e]=ra(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&L(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=$(Ia,{className:"highcharts-loading"},
r(e.style,{zIndex:10,display:O}),b.container),b.loadingSpan=$("span",null,e.labelStyle,d),H(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)L(d,{opacity:0,display:""}),jb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&jb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){L(b,{display:O})}});this.loadingShown=!1}});r(Ea.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);
if(f.y===null&&h)f.graphic=h.destroy();if(da(a)&&!Fa(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(m&&f.name)m[f.x]=f.name;k.data[i]=f.options;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;if(k.legendType==="point")j.isDirtyLegend=!0;b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,
m=g.xAxis&&g.xAxis.names,b=p(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(Ka(this,this.series.data),a,b)}});r(R.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,j=e.chart,k=e.xAxis&&e.xAxis.names,m=h&&h.shift||0,l=["graph","area"],h=f.data,n,q=e.xData;Qa(d,j);if(c){for(d=e.zones.length;d--;)l.push("zoneGraph"+d,"zoneArea"+d);o(l,function(a){if(e[a])e[a].shift=m+1})}if(i)i.isArea=!0;b=p(b,!0);i={series:e};
e.pointClass.prototype.applyOptions.apply(i,[a]);l=i.x;d=q.length;if(e.requireSorting&&l<q[d-1])for(n=!0;d&&q[d-1]>l;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(k&&i.name)k[l]=i.name;h.splice(d,0,a);n&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),j.redraw())},removePoint:function(a,b,
c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){e.length===g.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Qa(c,h);b=p(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart,a=p(a,!0);if(!c.isRemoving)c.isRemoving=!0,I(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=
!1},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=M[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;o(h,function(a){h[a]=c[a];delete c[a]});a=A(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=v;r(this,M[a.type||f].prototype);o(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});r(ha.prototype,{update:function(a,
b){var c=this.chart,a=c.options[this.coll][this.options.index]=A(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=v;this.init(c,r(a,{events:v}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ja(b.axes,this);ja(b[c],this);b.options[c].splice(this.options.index,1);o(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},
b)},setCategories:function(a,b){this.update({categories:a},b)}});var wa=ka(R);M.line=wa;ba.area=A(U,{threshold:0});var pa=ka(R,{type:"area",getSegments:function(){var a=this,b=[],c=[],d=[],e=this.xAxis,f=this.yAxis,g=f.stacks[this.stackKey],h={},i,j,k=this.points,m=this.options.connectNulls,l,n;if(this.options.stacking&&!this.cropped){for(l=0;l<k.length;l++)h[k[l].x]=k[l];for(n in g)g[n].total!==null&&d.push(+n);d.sort(function(a,b){return a-b});o(d,function(b){var d=0,k;if(!m||h[b]&&h[b].y!==null)if(h[b])c.push(h[b]);
else{for(l=a.index;l<=f.series.length;l++)if(k=g[b].points[l+","+b]){d=k[1];break}i=e.translate(b);j=f.toPixels(d,!0);c.push({y:null,plotX:i,clientX:i,plotY:j,yBottom:j,onMouseOver:ta})}});c.length&&b.push(c)}else R.prototype.getSegments.call(this),b=this.segments;this.segments=b},getSegmentPath:function(a){var b=R.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=
a.length-1;d>=0;d--)g=p(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];o(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});
o(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):a[f]=a.chart.renderer.path(b).attr({fill:p(d[2],na(d[1]).setOpacity(p(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:La.drawRectangle});M.area=pa;ba.spline=A(U);wa=ka(R,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,m;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;m=(k-i)*(j-d)/(j-h)+e-k;i+=m;k+=m;i>a&&i>e?
(i=t(a,e),k=2*e-i):i<a&&i<e&&(i=z(a,e),k=2*e-i);k>g&&k>e?(k=t(g,e),i=2*e-k):k<g&&k<e&&(k=z(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});M.spline=wa;ba.areaspline=A(ba.area);pa=pa.prototype;wa=ka(wa,{type:"areaspline",closedStacks:!0,getSegmentPath:pa.getSegmentPath,closeSegment:pa.closeSegment,drawGraph:pa.drawGraph,drawLegendSymbol:La.drawRectangle});M.areaspline=wa;ba.column=
A(U,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});wa=ka(R,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===!1?i=1:o(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===v&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=
h});var j=z(N(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),k=j*b.groupPadding,m=(j-2*k)/i,b=z(b.maxPointWidth||c.len,p(b.pointWidth,m*(1-2*b.pointPadding)));return a.columnMetrics={width:b,offset:(m-b)/2+(k+((e?i-(a.columnIndex||0):a.columnIndex)||0)*m-j/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),
g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=t(i,1+2*d),k=a.pointXOffset=h.offset,m=-(d%2?0.5:0),l=d%2?0.5:1;b.inverted&&(f-=0.5,b.renderer.isVML&&(l+=1));c.pointPadding&&(j=sa(j));R.prototype.translate.apply(a);o(a.points,function(c){var d=p(c.yBottom,f),h=999+N(d),h=z(t(-h,c.plotY),e.len+h),o=c.plotX+k,r=j,s=z(h,d),y,v;y=t(h,d)-s;N(y)<g&&g&&(y=g,v=!e.reversed&&!c.negative||e.reversed&&c.negative,s=w(N(s-f)>g?d-g:f-(v?g:0)));c.barX=o;c.pointWidth=i;r=w(o+r)+m;o=w(o)+m;r-=o;d=
N(s)<0.5;y=z(w(s+y)+l,9E4);s=w(s)+l;y-=s;d&&(s-=1,y+=1);c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-o-r/2,y]:[o+r/2,h+e.pos-b.plotTop,y];c.shapeType="rect";c.shapeArgs={x:o,y:s,width:r,height:y}})},getSymbol:ta,drawLegendSymbol:La.drawRectangle,drawGraph:ta,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;o(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==v&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=s(a.borderWidth)?{"stroke-width":a.borderWidth}:
{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],j?(kb(j),j.attr(i)[b.pointCount<e?"animate":"attr"](A(f))):h.graphic=d[h.shapeType](f).attr(i).attr(g).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ca)a?(e.scaleY=0.001,a=z(b.pos+b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=
b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&o(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});M.column=wa;ba.bar=A(ba.column);pa=ka(wa,{type:"bar",inverted:!0});M.bar=pa;ba.scatter=A(U,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
pa=ka(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&R.prototype.drawGraph.call(this)}});M.scatter=pa;ba.pie=A(U,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,
size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});U={type:"pie",isCartesian:!1,pointClass:ka(Ea,{init:function(){Ea.prototype.init.apply(this,arguments);var a=this,b;r(a,{visible:a.visible!==!1,name:p(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};H(a,"select",b);H(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=p(b,f);if(a!==c.visible){c.visible=
c.options.visible=a=a===v?!c.visible:a;d.options.data[Ka(c,d.data)]=c.options;o(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;Qa(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[Ka(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};
this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=
this,c=b.points,d=b.startAngleRad;if(!a)o(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){R.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();p(b,!0)&&this.chart.redraw(c)},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=
b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){R.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=ma/180*(i-90),i=(this.endAngleRad=ma/180*(p(c.endAngle,i+360)-90))-j,k=this.points,m=c.dataLabels.distance,c=c.ignoreHiddenPoint,l,n=k.length,o;if(!a)this.center=a=this.getCenter();this.getX=
function(b,c){h=W.asin(z((b-a[1])/(a[2]/2+m),1));return a[0]+(c?-1:1)*X(h)*(a[2]/2+m)};for(l=0;l<n;l++){o=k[l];f=j+b*i;if(!c||o.visible)b+=o.percentage/100;g=j+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:w(f*1E3)/1E3,end:w(g*1E3)/1E3};h=(g+f)/2;h>1.5*ma?h-=2*ma:h<-ma/2&&(h+=2*ma);o.slicedTranslation={translateX:w(X(h)*d),translateY:w(aa(h)*d)};f=X(h)*a[2]/2;g=aa(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];o.half=h<-ma/2||h>ma/2?1:0;o.angle=h;e=z(e,m/2);o.labelPos=
[a[0]+f+X(h)*m,a[1]+g+aa(h)*m,a[0]+f+X(h)*e,a[1]+g+aa(h)*e,a[0]+f,a[1]+g,m<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);o(a.points,function(i){if(i.y!==null){d=i.graphic;g=i.shapeArgs;f=i.shadowGroup;if(e&&!f)f=i.shadowGroup=b.g("shadow").add(a.shadowGroup);c=i.sliced?i.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.animate(r(g,c));
else{h={"stroke-linejoin":"round"};if(!i.visible)h.visibility="hidden";i.graphic=d=b[i.shapeType](g).setRadialReference(a.center).attr(i.pointAttr[i.selected?"select":""]).attr(h).attr(c).add(a.group).shadow(e,f)}}})},searchPoint:ta,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:La.drawRectangle,getCenter:Xb.getCenter,getSymbol:ta};U=ka(R,U);M.pie=U;R.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,
e=a.points,f,g,h=a.hasRendered||0,i,j,k=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(j.attr({opacity:+h}),h||H(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,o(e,function(e){var h,n=e.dataLabel,o,t,w=e.connector,z=!0,u,y={};f=e.dlOptions||e.options&&e.options.dataLabels;h=p(f&&f.enabled,
g.enabled);if(n&&!h)e.dataLabel=n.destroy();else if(h){d=A(g,f);u=d.style;h=d.rotation;o=e.getLabelConfig();i=d.format?Ha(d.format,o):d.formatter.call(o,d);u.color=p(d.color,u.color,a.color,"black");if(n)if(s(i))n.attr({text:i}),z=!1;else{if(e.dataLabel=n=n.destroy(),w)e.connector=w.destroy()}else if(s(i)){n={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(u.color==="contrast")y.color=d.inside||d.distance<0||b.stacking?
k.getContrast(e.color||a.color):"#000000";if(c)y.cursor=c;for(t in n)n[t]===v&&delete n[t];n=e.dataLabel=k[h?"text":"label"](i,0,-999,d.shape,null,null,d.useHTML).attr(n).css(r(u,y)).add(j).shadow(d.shadow)}n&&a.alignDataLabel(e,n,d,null,z)}})};R.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-999),i=p(a.plotY,-999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,m=this.visible&&(a.series.forceDL||f.isInsidePlot(h,w(i),g)||d&&f.isInsidePlot(h,g?d.x+
1:d.y+d.height-1,g));if(m)d=r({x:g?f.plotWidth-i:h,y:w(g?f.plotHeight-h:i),width:0,height:0},d),r(c,{width:j.width,height:j.height}),c.rotation?(a=f.renderer.rotCorr(k,c.rotation),b[e?"attr":"animate"]({x:d.x+c.x+d.width/2+a.x,y:d.y+c.y+d.height/2}).attr({align:c.align})):(b.align(c,null,d),g=b.alignAttr,p(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(m=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)),c.shape&&b.attr({anchorX:a.plotX,anchorY:a.plotY}));
if(!m)b.attr({y:-999}),b.placed=!1};R.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k,m=a.box?0:a.padding||0;j=c.x+m;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-m;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+m;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-m;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(M.pie)M.pie.prototype.drawDataLabels=
function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,m=p(e.softConnector,!0),l=e.distance,n=a.center,q=n[2]/2,r=n[1],s=l>0,v,u,y,C=[[],[]],A,B,D,F,G,E=[0,0,0,0],L=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){R.prototype.drawDataLabels.apply(a);o(b,function(a){a.dataLabel&&a.visible&&C[a.half].push(a)});for(F=2;F--;){var I=[],M=[],H=C[F],K=H.length,J;if(K){a.sortByAngle(H,
F-0.5);for(G=b=0;!b&&H[G];)b=H[G]&&H[G].dataLabel&&(H[G].dataLabel.getBBox().height||21),G++;if(l>0){u=z(r+q+l,d.plotHeight);for(G=t(0,r-q-l);G<=u;G+=b)I.push(G);u=I.length;if(K>u){c=[].concat(H);c.sort(L);for(G=K;G--;)c[G].rank=G;for(G=K;G--;)H[G].rank>=u&&H.splice(G,1);K=H.length}for(G=0;G<K;G++){c=H[G];y=c.labelPos;c=9999;var P,O;for(O=0;O<u;O++)P=N(I[O]-y[1]),P<c&&(c=P,J=O);if(J<G&&I[G]!==null)J=G;else for(u<K-G+J&&I[G]!==null&&(J=u-K+G);I[J]===null;)J++;M.push({i:J,y:I[J]});I[J]=null}M.sort(L)}for(G=
0;G<K;G++){c=H[G];y=c.labelPos;v=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=y[1];if(l>0){if(u=M.pop(),J=u.i,B=u.y,c>B&&I[J+1]!==null||c<B&&I[J-1]!==null)B=z(t(0,c),d.plotHeight)}else B=c;A=e.justify?n[0]+(F?-1:1)*(q+l):a.getX(B===r-q-l||B===r+q+l?c:B,F);v._attr={visibility:D,align:y[6]};v._pos={x:A+e.x+({left:f,right:-f}[y[6]]||0),y:B+e.y-10};v.connX=A;v.connY=B;if(this.options.size===null)u=v.width,A-u<f?E[3]=t(w(u-A+f),E[3]):A+u>h-f&&(E[1]=t(w(A+u-h+f),E[1])),B-b/2<0?E[0]=t(w(-B+b/2),E[0]):
B+b/2>i&&(E[2]=t(w(B+b/2-i),E[2]))}}}if(Ca(E)===0||this.verifyDataLabelOverflow(E))this.placeDataLabels(),s&&g&&o(this.points,function(b){j=b.connector;y=b.labelPos;if((v=b.dataLabel)&&v._pos&&b.visible)D=v._attr.visibility,A=v.connX,B=v.connY,k=m?["M",A+(y[6]==="left"?5:-5),B,"C",A,B,2*y[2]-y[4],2*y[3]-y[5],y[2],y[3],"L",y[4],y[5]]:["M",A+(y[6]==="left"?5:-5),B,"L",y[2],y[3],"L",y[4],y[5]],j?(j.animate({d:k}),j.attr("visibility",D)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||
b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},M.pie.prototype.placeDataLabels=function(){o(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-999})})},M.pie.prototype.alignDataLabel=ta,M.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=t(b[2]-t(a[1],a[3]),e):(f=t(b[2]-a[1]-a[3],
e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=t(z(f,b[2]-t(a[0],a[2])),e):(f=t(z(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),this.translate(b),o(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(M.column)M.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=p(a.below,
a.plotY>p(this.translatedThreshold,g.yAxis.len)),j=p(c.inside,!!this.options.stacking);if(h&&(d=A(h),f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width}),!j))f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=p(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,f||j?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=a.pick,e=HighchartsAdapter.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=
[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,j,k,m,l,n;for(e=0;e<b;e++)if(d=a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||
0)-(a.labelrank||0)});for(e=0;e<b;e++){j=a[e];for(d=e+1;d<b;++d)if(k=a[d],j&&k&&j.placed&&k.placed&&j.newOpacity!==0&&k.newOpacity!==0&&(m=j.alignAttr,l=k.alignAttr,n=2*(j.box?0:j.padding),m=!(l.x>m.x+(j.width-n)||l.x+(k.width-n)<m.x||l.y>m.y+(j.height-n)||l.y+(k.height-n)<m.y)))(j.labelrank<k.labelrank?j:k).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,
b);a.isOld=!0}})}})(B);U=B.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==v&&d!==b.hoverPoint)d.onMouseOver(a)};o(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)o(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),
$a))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,m=k&&{cursor:k},k=a.singlePoints,l,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(ca?1.0E-4:0.002)+")";if(e&&!c)for(l=e+1;l--;)d[l]==="M"&&d.splice(l+1,0,d[l+1]-i,d[l+2],"L"),(l&&d[l]==="M"||l===e)&&d.splice(l,0,"L",d[l-2]+i,d[l-
1]);for(l=0;l<k.length;l++)e=k[l],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:O,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),o([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(m);if($a)a.on("touchstart",n)}))}};if(M.column)wa.prototype.drawTracker=U.drawTrackerPoint;
if(M.pie)M.pie.prototype.drawTracker=U.drawTrackerPoint;if(M.scatter)pa.prototype.drawTracker=U.drawTrackerPoint;r(lb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=
$("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);H(a.checkbox,"click",function(b){I(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});S.legend.itemStyle.cursor="pointer";r(D.prototype,{showResetZoom:function(){var a=this,b=S.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,
function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?o(this.axes,function(a){b=a.zoom()}):o(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();
else if(!d&&da(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&o(d,function(a){a.setState()});o(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),m=h.toValue(i-d,!0)+j,j=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j,i=i>d;if(h.series.length&&(i||m>z(k.dataMin,k.min))&&
(!i||j<t(k.dataMax,k.max)))h.setExtremes(m,j,!1,!1,{trigger:"pan"}),e=!0;c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);L(c.container,{cursor:"move"})}});r(Ea.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ka(c,d.data)]=c.options;c.setState(a&&"select");b||o(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[Ka(a,
d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||Ka(this,b)===-1)this.setState(),a.hoverPoint=
null},importEvents:function(){if(!this.hasImportedEvents){var a=A(this.series.options.point,this.options).events,b;this.events=a;for(b in a)H(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ba[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,m=this.marker||{},l=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&
a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&m.states&&m.states[a]&&m.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(A(o,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,m=m.symbol||e.symbol,k&&k.currentSymbol!==m&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(m)e.stateMarkerGraphic=k=l.renderer.symbol(m,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),k.currentSymbol=m;if(k)k[a&&l.isInsidePlot(c,
d,l.inverted)?"show":"hide"](),k.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=l.renderer.path().add(l.seriesGroup);n.attr(r({fill:na(this.color||e.color).setOpacity(c.opacity).get()},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:
this.plotY)-a,a*2,a*2)}});r(R.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,
c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===v?!h:a)?"show":"hide";o(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});
if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&o(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});o(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===v?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},
drawTracker:U.drawTrackerGraph});r(B,{Color:na,Point:Ea,Tick:Ra,Renderer:Za,SVGElement:P,SVGRenderer:ua,arrayMin:Na,arrayMax:Ca,charts:Y,dateFormat:Ma,error:la,format:Ha,pathAnim:xb,getOptions:function(){return S},hasBidiBug:Nb,isTouchDevice:Jb,setOptions:function(a){S=A(!0,S,a);Cb();return S},addEvent:H,removeEvent:Z,createElement:$,discardElement:Pa,css:L,each:o,map:Ta,merge:A,splat:ra,extendClass:ka,pInt:F,svg:ca,canvas:fa,vml:!ca&&!fa,product:"Highcharts",version:"4.1.8"})})();


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * ichartjs Library v1.2 http://www.ichartjs.com/
 * 
 * @author wanghe
 * @Copyright 2013 wanghetommy@gmail.com Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
;(function(c){var a=navigator.userAgent.toLowerCase(),b=Object.prototype.toString,d=/opera/.test(a),e=/\bchrome\b/.test(a),f=/webkit/.test(a),g=!e&&/safari/.test(a),j=!d&&/msie/.test(a),k=!!document.createElement("canvas").getContext,l=!f&&/gecko/.test(a),p=/ipod|ipad|iphone|android/gi.test(a),m=function(a,b,d,i){return d*a/i+b},r={easeIn:function(a,b,d,i){return d*(a/=i)*a*a+b},easeOut:function(a,b,d,i){return d*((a=a/i-1)*a*a+1)+b},easeInOut:function(a,b,d,i){return 1>(a/=i/2)?d/2*a*a*a+b:d/2*((a-=2)*a*a+2)+b}},o=function(a){var c=!1,v=!1,i=[],u=function(){if(document.addEventListener)return function(){document.removeEventListener("DOMContentLoaded",u,!1);w()};if(document.attachEvent)return function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",u),w())}}(),y=function(){if(!c){try{document.documentElement.doScroll("left")}catch(a){setTimeout(y,1);return}w()}},w=function(){if(!c){c=!0;for(var a=0;a<i.length;a++)i[a].call(document);i=[]}},x=function(){if(!v){v=!0;if("complete"===document.readyState)return setTimeout(w,1);if(document.addEventListener)document.addEventListener("DOMContentLoaded",u,!1),a.addEventListener("load",w,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",u);a.attachEvent("onload",w);var i=!1;try{i=null==a.frameElement}catch(b){}document.documentElement.doScroll&&i&&y()}}},S=function(a){x();c?a.call(document,s):i.push(function(){return a.call(this)})},s=function(a){if(!a||a.nodeType)return a;if("string"===typeof a)return-1!=a.indexOf("#")&&(a=a.substring(1)),document.getElementById(a);"function"===typeof a&&S(a)};s.apply=function(a,i){if(a&&i&&"object"==typeof i)for(var b in i)"undefined"!=typeof i[b]&&(a[b]=i[b]);if(!i&&a){var d={};for(b in a)d[b]=a[b];return d}return a};s.apply(s,{version:"1.0",email:"taylor@ichartjs.com",isEmpty:function(a,i){return null===a||void 0===a||s.isArray(a)&&!a.length||(!i?""===a:!1)},isArray:function(a){return"[object Array]"===b.apply(a)},isDate:function(a){return"[object Date]"===b.apply(a)},isObject:function(a){return!!a&&"[object Object]"===b.apply(a)},isFunction:function(a){return"[object Function]"===b.apply(a)},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isString:function(a){return"string"===typeof a},isBoolean:function(a){return"boolean"===typeof a},isFalse:function(a){return"boolean"===typeof a&&!a},isElement:function(a){return a?!!a.tagName:!1},isDefined:function(a){return"undefined"!==typeof a}});s.applyIf=function(a,i){if(a&&s.isObject(i))for(var b in i)s.isDefined(i[b])&&!s.isDefined(a[b])&&(a[b]=i[b]);return!i&&a?s.apply(a):a};s.merge=function(a,i,b){if(a&&s.isObject(i)){for(var d in i)s.isDefined(i[d])&&(s.isObject(i[d])?s.isObject(a[d])?s.merge(a[d],i[d]):a[d]=s.clone(i[d],!0):a[d]=i[d]);if(s.isObject(b))return s.merge(a,b)}return a};s.clone=function(a,i,b){var d={};if(s.isArray(a)&&s.isObject(i))for(var c=0;c<a.length;c++)d[a[c]]=b&&s.isObject(i[a[c]])?s.clone(i[a[c]],b):i[a[c]];else if(s.isObject(a))for(c in a)d[c]=i&&s.isObject(a[c])&&!a[c].ICHARTJS_OBJECT?s.clone(a[c],i):a[c];return d};s.override=function(a,i){if(a&&i){var b=a.prototype;s.apply(b,i);s.isIE&&i.hasOwnProperty("toString")&&(b.toString=i.toString)}};s.extend=function(){var a=function(a){for(var i in a)this[i]=a[i]},i=Object.prototype.constructor;return function(b,d){var c=function(){b.apply(this,arguments)},u=function(){},e=b.prototype;u.prototype=e;u=c.prototype=new u;u.constructor=c;c.superclass=e;e.constructor==i&&(e.constructor=b);c.override=function(a){s.override(c,a)};u.superclass=u.supr=function(){return e};u.override=a;s.override(c,d);c.extend=function(a){return s.extend(c,a)};c.plugin_={};c.plugin=function(a,i){s.isString(a)&&s.isFunction(i)&&(c.plugin_[a]=i)};return c}}();var E=Math.sin,I=Math.cos,n=Math.atan,T=Math.sqrt,J=Math.abs,z=Math.PI,B=2*z,K=Math.ceil,C=Math.round,F=Math.floor,L=Math.max,M=Math.min,A=parseFloat,D={},G={},N=function(a,i){if(0==a)return a;var b=J(a),d=0.1;if(1<b){for(;1<b;)b/=10,d*=10;return F(a/d+i)*d}for(d=1;1>b;)b*=10,d*=10;return C(a*d+i)/d},O={white:"rgb(255,255,255)",green:"rgb(0,128,0)",gray:"rgb(80,80,80)",red:"rgb(255,0,0)",blue:"rgb(0,0,255)",yellow:"rgb(255,255,0)",black:"rgb(0,0,0)"},P=function(a){var i=/rgb\((\w*),(\w*),(\w*)\)/.exec(a);if(i)return[i[1],i[2],i[3]];if(i=/rgba\((\w*),(\w*),(\w*),(.*)\)/.exec(a))return[i[1],i[2],i[3],i[4]];throw Error("invalid colors value '"+a+"'");},H=function(a){if(!a)return a;a=a.replace(/\s/g,"").toLowerCase();if(/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.exec(a)||/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0(\.[0-9])?|1(\.0)?)\)$/.exec(a))return a;if(/^#(([a-fA-F0-9]{6,7})|([a-fA-F0-9]{3}))$/.exec(a))return a=a.replace(/#/g,"").replace(/^(\w)(\w)(\w)$/,"$1$1$2$2$3$3"),(7==a.length?"rgba(":"rgb(")+parseInt(a.substring(0,2),16)+","+parseInt(a.substring(2,4),16)+","+parseInt(a.substring(4,6),16)+(7==a.length?",0."+a.substring(6,7)+")":")");if(O[a])return O[a];throw Error("invalid colors value '"+a+"'");},Q=function(a,i){i=i||0.14;return 0.5<a?i-(1-a)/10:0.1<a?i-0.16+a/5:a>i?i:a/2},R=function(a,i,b,d){if(!i)return i;var i=P(H(i)),c;c=i;var u=void 0,e=void 0;s.isArray(c)&&(u=c[1],e=c[2],c=c[0]);c/=255;var u=u/255,e=e/255,y=L(L(c,u),e),f=M(M(c,u),e),f=y-f;if(0==f)c=[0,0,y];else{var w;c==y?w=(u-e)/f:u==y?w=(e-c)/f+2:e==y&&(w=(c-u)/f+4);w*=60;0>w&&(w+=360);c=[w,f/y,y]}c[1]-=0!=d?d||0.05:d;a?(c[2]-=Q(c[2],b),c[1]=s.upTo(c[1],1),c[2]=s.lowTo(c[2],0)):(c[2]+=Q(1-c[2],b),c[1]=s.lowTo(c[1],0),c[2]=s.upTo(c[2],1));d=i[3];a=i=void 0;s.isArray(c)&&(a=d,d=c[1],i=c[2],c=c[0]);var g,j,k,b=F(c/60)%6,e=c/60-b;c=i*(1-d);u=i*(1-d*e);d=i*(1-d*(1-e));switch(b){case 0:g=i;j=d;k=c;break;case 1:g=u;j=i;k=c;break;case 2:g=c;j=i;k=d;break;case 3:g=c;j=u;k=i;break;case 4:g=d;j=c;k=i;break;case 5:g=i,j=c,k=u}return"rgb"+(a?"a":"")+"("+C(255*g)+","+C(255*j)+","+C(255*k)+(a?","+a+")":")")};s.apply(s,{getFont:function(a,i,b,c){return a+" "+i+(c||"px")+" "+b},getDoc:function(){return a.contentWindow?a.contentWindow.document:a.contentDocument?a.contentDocument:a.document},DefineAbstract:function(a,i){if(!i[a])throw Error("Cannot instantiate the type '"+i.type+"'.you must implements it with method '"+a+"'.");},getAA:function(a){return"linear"==a?m:"easeInOut"==a||"easeIn"==a||"easeOut"==a?r[a]:m},noConflict:function(){return o},plugin:function(a,i,b){s.isFunction(a)&&a.plugin(i,b)},parsePadding:function(a,i){a=a||0;if(s.isNumber(a))return[a,a,a,a];if(s.isArray(a))return a;i=i||0;a=a.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g,/\s/).replace(/\s/g,",").split(",");1==a.length?a[0]=a[1]=a[2]=a[3]=A(a[0])||i:2==a.length?(a[0]=a[2]=A(a[0])||i,a[1]=a[3]=A(a[1])||i):3==a.length?(a[0]=A(a[0])||i,a[1]=a[3]=A(a[1])||i,a[2]=A(a[2])||i):(a[0]=A(a[0])||i,a[1]=A(a[1])||i,a[2]=A(a[2])||i,a[3]=A(a[3])||i);return a},distanceP2P:function(a,i,b,c){return T((b-a)*(b-a)+(c-i)*(c-i))},atan2Radian:function(a,i,b,c){if(a==b)return c>i?z/2:3*z/2;if(i==c)return b>a?0:z;var d=s.quadrant(a,i,b,c),a=n(J((i-c)/(a-b)));return d?(3==d?B:z)+(2==d?a:-a):a},angle2Radian:function(a){return a*z/180},radian2Angle:function(a){return 180*a/z},quadrant:function(a,i,b,c){return a<b?i<c?0:3:i<c?1:2},toPI2:function(a){for(;0>a;)a+=B;return a},visible:function(a,i,b){if(a>=i)return[];var c=s.quadrantd(a),d=s.quadrantd(i);if((2==c||3==c)&&(2==d||3==d)&&i-a<z)return[];a=s.toPI2(a);i=s.toPI2(i);i<=a&&(i+=B);if(a>z)a=B;else{if(i>B)return[{s:a,e:z,f:b},{s:B,e:i,f:b}];i>z&&(i=z)}return{s:a,e:i,f:b}},quadrantd:function(a){if(0==a)return 0;if(0==a%B)return 3;for(;0>a;)a+=B;return K(2*(a%B)/z)-1},upTo:function(a,i){return i>a?a:i},lowTo:function(a,i){return i<a?a:i},between:function(a,i,b){return a>i?s.between(i,a,b):b>i?i:b<a?a:b},inRange:function(a,i,b){return i>b&&a<b},angleInRange:function(a,i,b){b-=a;b=0>b?b+B:b;b%=B;return i-a>b},angleZInRange:function(a,i,b){return i<a?b>a||b<i:i>b&&a<b},inRangeClosed:function(a,i,b){return i>=b&&a<=b},inEllipse:function(a,i,b,c){return 1>=a*a/b/b+i*i/c/c},p2Point:function(a,i,b,c){return{x:a+I(b)*c,y:i+E(b)*c}},toRgb:H,toRgba:function(a,i){var b=P(H(a));return"rgba("+b[0]+","+b[1]+","+b[2]+","+i+")"},vectorP2P:function(a,i,b){b||(i=s.angle2Radian(i),a=s.angle2Radian(a));i=E(i);return{x:i*E(a),y:i*I(a)}},uid:function(a){return(a||"ichartjs")+"_"+K(1E4*Math.random())+(new Date).getTime().toString().substring(4)},register:function(a){if(s.isString(a))G[a.toLowerCase()]=a;else{var i=a.get("id");if(!i||""==i){for(i=s.uid(a.type);D[i];)i=s.uid(a.type);a.push("id",i)}if(D[i])throw Error("exist reduplicate id :"+i);a.id=i;D[i]=a}},create:function(a){if(!a.type||!G[a.type])throw Error("TypeNotFoundException["+a.type+"]");return new s[G[a.type]](a)},get:function(a){return D[a]},isPercent:function(a){return s.isString(a)&&a.match(/(.*)%/)},parsePercent:function(a,i){s.isString(a)&&(a=a.match(/(.*)%/))&&(a=i?F(A(a[1])*i/100):a[1]/100);return!a||0>=a||a>i?i:a},parseFloat:function(a,i){if(!s.isNumber(a)&&(a=A(a),!s.isNumber(a)))throw Error("["+i+"]="+a+"is not a valid number.");return a},ceil:function(a){return N(a,1)},floor:function(a){return N(a,-1)},_2D:"2d",_3D:"3d",light:function(a,i,b){return R(!1,a,i,b)},dark:function(a,i,b){return R(!0,a,i,b)},fixPixel:function(a){return s.isNumber(a)?a:A(a.replace("px",""))||0},toPixel:function(a){return s.isNumber(a)?a+"px":s.fixPixel(a)+"px"},emptyFn:function(){return!0},supportCanvas:k,isOpera:d,isWebKit:f,isChrome:e,isSafari:g,isIE:j,isGecko:l,isMobile:p,touch:"ontouchend"in document,FRAME:p?30:60});s.Assert={isTrue:function(a,i){if(!0!==a)throw Error(i);}};s.requestAnimFrame=function(){var i=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(i){a.setTimeout(i,1E3/60)};return function(a){i(a)}}();s.Event={addEvent:function(a,i,b,c){a.addEventListener?a.addEventListener(i,b,c):a.attachEvent?a.attachEvent("on"+i,b):a["on"+i]=b},fix:function(i){"undefined"==typeof i&&(i=a.event);var b={target:i.target,pageX:i.pageX,pageY:i.pageY,offsetX:i.offsetX,offsetY:i.offsetY,stopPropagation:!1,event:i};if("undefined"==typeof i.offsetX){i.target||(b.target=i.srcElement||document);i.targetTouches&&(b.pageX=i.targetTouches[0].pageX,b.pageY=i.targetTouches[0].pageY);if(null==b.pageX&&null!=i.clientX){var c=document.documentElement,d=document.body;b.pageX=i.clientX+(c&&c.scrollLeft||d&&d.scrollLeft||0)-(c&&c.clientLeft||d&&d.clientLeft||0);b.pageY=i.clientY+(c&&c.scrollTop||d&&d.scrollTop||0)-(c&&c.clientTop||d&&d.clientTop||0)}for(var d=c=0,u=i.target;u!=document.body&&u;)c+=u.offsetLeft-(u.scrollLeft||0),d+=u.offsetTop,u=u.offsetParent;b.offsetX=b.pageX-c;b.offsetY=b.pageY-d}b.x=b.offsetX;b.y=b.offsetY;i.stopPropagation||(i.stopPropagation=function(){a.event.cancelBubble=true});return b}};return s}(c);Array.prototype.each=function(a,b){for(var c=this.length,i,d=0;d<c&&!(i=b?a.call(b,this[d],d):a(this[d],d),"boolean"===typeof i&&!i);d++);return this};Array.prototype.eachAll=function(a,b){this.each(function(c,i){return o.isArray(c)?c.eachAll(a,b):b?a.call(b,c,i):a(c,i)},b)};Array.prototype.sor=function(a){for(var b=this.length-1,c,i=0;i<b;i++)for(var d=b;d>i;d--)if(a?!a(this[d],this[d-1]):this[d]<this[d-1])c=this[d],this[d]=this[d-1],this[d-1]=c};c.iChart=o;c.$||(c.$=c.iChart)})(window);(function(c){c.Element=function(a){var b=this._();b.type="element";b.ICHARTJS_OBJECT=!0;c.DefineAbstract("configure",b);c.DefineAbstract("afterConfiguration",b);b.options={};b.set({border:{enable:!1,color:"#BCBCBC",style:"solid",width:1,radius:0},shadow:!1,shadow_color:"#666666",shadow_blur:4,shadow_offsetx:0,shadow_offsety:0});b.W="width";b.H="height";b.O="top";b.B="bottom";b.L="left";b.R="right";b.C="center";b.X="originx";b.Y="originy";b.variable={};b.events={mouseup:[],touchstart:[],touchmove:[],touchend:[],mousedown:[],dblclick:[]};b.registerEvent("initialize");b.initialization=!1;b.configure.apply(b,Array.prototype.slice.call(arguments,1));b.default_=c.clone(b.options,!0);b.set(a);b.afterConfiguration(b)};c.Element.prototype={_:function(){return this},afterConfiguration:function(a){if(c.isObject(a.get("listeners")))for(var b in a.get("listeners"))a.on(b,a.get("listeners")[b]);a.initialize();a.fireEvent(a,"initialize",[a])},registerEvent:function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},fireString:function(a,b,d,e){a=this.fireEvent(a,b,d);return c.isString(a)?a:!0!==a&&c.isDefined(a)?a.toString():e},fireEvent:function(a,b,c){var e=this.events[b].length;if(1==e)return this.events[b][0].apply(a,c);for(var f=!0,g=0;g<e;g++)this.events[b][g].apply(a,c)||(f=!1);return f},on:function(a,b){c.isString(a)&&c.isArray(this.events[a])?this.events[a].push(b):c.isArray(a)&&a.each(function(a){this.on(a,b)},this);return this},getPlugin:function(a){return this.constructor.plugin_[a]},set:function(a){c.isObject(a)&&c.merge(this.options,a)},pushIf:function(a,b){return!c.isDefined(this.get(a))||null==this.get(a)?this.push(a,b):this.get(a)},push:function(a,b){for(var c=a.split("."),e=c.length-1,f=this.options,g=0;g<e;g++)f[c[g]]||(f[c[g]]={}),f=f[c[g]];return f[c[e]]=b},get:function(a){for(var a=a.split("."),b=this.options[a[0]],c=1;c<a.length;c++){if(!b)return null;b=b[a[c]]}return b}};c.Painter=c.extend(c.Element,{configure:function(){this.type="painter";this.dimension=c._2D;c.DefineAbstract("commonDraw",this);c.DefineAbstract("initialize",this);this.set({strokeStyle:"gray",padding:10,color:"black",offsetx:0,offsety:0,background_color:"#FEFEFE",color_factor:0.15,style:"",border:{enable:!0},gradient:!1,gradient_mode:"LinearGradientUpDown",z_index:0,listeners:null,originx:null,originy:null});this.variable.event={mouseover:!1};this.variable.animation={};this.registerEvent("click","mousemove","mouseover","mouseout","beforedraw","draw")},is3D:function(){return this.dimension==c._3D},applyGradient:function(a,b,c,e){var f=this._();f.get("gradient")&&f.get("f_color")&&(f.push("f_color",f.T.gradient(a||f.x||0,b||f.y||0,c||f.get(f.W),e||f.get(f.H),[f.get("dark_color"),f.get("light_color")],f.get("gradient_mode"))),f.push("light_color",f.T.gradient(a||f.x||0,b||f.y||0,c||f.get(f.W),e||f.get(f.H),[f.get("background_color"),f.get("light_color")],f.get("gradient_mode"))),f.push("f_color_",f.get("f_color")))},draw:function(a,b){if(b)this.root.draw(a);else{if(!this.fireEvent(this,"beforedraw",[this,a]))return this;this.commonDraw(this,a);this.fireEvent(this,"draw",[this,a])}},inject:function(a){a&&(this.root=a,this.target=this.T=a.T)},doConfig:function(){var a=this._(),b=c.parsePadding(a.get("padding")),d=a.get("border.enable"),d=d?c.parsePadding(a.get("border.width")):[0,0,0,0],e=c.toRgb(a.get("background_color")),f=a.get("color_factor"),g=a.get("gradient")?0:null;a.set({border_top:d[0],border_right:d[1],border_bottom:d[2],border_left:d[3],hborder:d[1]+d[3],vborder:d[0]+d[2],padding_top:b[0]+d[0],padding_right:b[1]+d[1],padding_bottom:b[2]+d[2],padding_left:b[3]+d[3],hpadding:b[1]+b[3]+d[1]+d[3],vpadding:b[0]+b[2]+d[0]+d[2]});!0===a.get("shadow")&&a.push("shadow",{color:a.get("shadow_color"),blur:a.get("shadow_blur"),offsetx:a.get("shadow_offsetx"),offsety:a.get("shadow_offsety")});a.push("f_color",e);a.push("f_color_",e);a.push("light_color",c.light(e,f,g));a.push("dark_color",c.dark(e,0.8*f,g));a.push("light_color2",c.light(e,2*f,g));a.is3D()&&!a.get("xAngle_")&&(b=c.vectorP2P(a.get("xAngle"),a.get("yAngle")),a.push("xAngle_",b.x),a.push("yAngle_",b.y))}});c.Html=c.extend(c.Element,{configure:function(a){this.type="html";this.T=a;c.DefineAbstract("beforeshow",this);this.set({animation:!0,default_action:!0,width:0,height:0,style:"",index:999,offset_top:0,offset_left:0});this.transitions=""},initialize:function(){var a=this._();a.wrap=a.get("wrap");a.dom=document.createElement("div");a.get("shadow")&&a.css("boxShadow",a.get("shadow_offsetx")+"px "+a.get("shadow_offsety")+"px "+a.get("shadow_blur")+"px "+a.get("shadow_color"));a.get("border.enable")&&(a.css("border",a.get("border.width")+"px "+a.get("border.style")+" "+a.get("border.color")),a.css("borderRadius",a.get("border.radius")+"px"));a.css("position","absolute");a.css("zIndex",a.get("index"));a.applyStyle();a.wrap.appendChild(a.dom);a.style=a.dom.style;a.get("default_action")&&a.doAction(a)},width:function(){return this.dom.offsetWidth},height:function(){return this.dom.offsetHeight},onTransitionEnd:function(a,b){var d="transitionend";c.isWebKit?d="webkitTransitionEnd":c.isOpera&&(d="oTransitionEnd");c.Event.addEvent(this.dom,d,a,b)},destroy:function(){this.wrap.removeChild(this.dom);this.dom=null},transition:function(a){this.transitions=""==this.transitions?a:this.transitions+","+a;c.isWebKit?this.css("WebkitTransition",this.transitions):c.isGecko?this.css("MozTransition",this.transitions):c.isOpera?this.css("OTransition",this.transitions):this.css("transition",this.transitions)},beforeshow:function(a,b,c){c.follow(a,b,c)},show:function(a,b){this.beforeshow(a,b,this);this.css("visibility","visible");this.get("animation")&&this.css("opacity",1)},hidden:function(){this.css("visibility","hidden")},getDom:function(){return this.dom},css:function(a,b){if(c.isString(a))if(c.isDefined(b))this.dom.style[a]=b;else return this.dom.style[a]},applyStyle:function(){for(var a=this.get("style").split(";"),b,c=0;c<a.length;c++)b=a[c].split(":"),1<b.length&&this.css(b[0],b[1])}});c.Component=c.extend(c.Painter,{configure:function(a){c.Component.superclass.configure.apply(this,arguments);this.type="component";this.set({fontsize:12,font:"Verdana",fontweight:"normal",fontunit:"px",tip:{enable:!1,border:{width:2}}});this.ICHARTJS_CHART=this.proxy=this.atomic=!1;this.inject(a)},initialize:function(){c.DefineAbstract("isEventValid",this);c.DefineAbstract("doDraw",this);this.doConfig();this.initialization=!0},getDimension:function(){return{x:this.x,y:this.y,width:this.get("width"),height:this.get("height")}},destroy:function(){this.tip&&this.tip.destroy()},doConfig:function(){c.Component.superclass.doConfig.call(this);var a=this._(),b=a.get(a.W),d=a.get("maxwidth"),e=a.get(a.X);if(b&&d&&(b=a.push(a.W,c.parsePercent(b,d)),b>d&&(b=a.push("width",d)),d>b)){var f=a.get("align")||a.C;f==a.C?e+=(d-b)/2:f==a.R&&(e+=d-b)}a.x=a.push(a.X,e+a.get("offsetx"));a.y=a.push(a.Y,a.get(a.Y)+a.get("offsety"));a.push("fontStyle",c.getFont(a.get("fontweight"),a.get("fontsize"),a.get("font"),a.get("fontunit")));a.data=a.get("data");a.get("tip.enable")&&(a.pushIf("tip.border.color",a.get("f_color")),c.isFunction(a.get("tip.invokeOffset"))||a.push("tip.invokeOffset",a.tipInvoke()))},isMouseOver:function(a){return this.isEventValid(a,this)},redraw:function(a){this.root.draw(a,this.root.Combination)},last:c.emptyFn,commonDraw:function(a){a.proxy||a.doDraw.call(a,a)}});c.Tip=c.extend(c.Html,{configure:function(){c.Tip.superclass.configure.apply(this,arguments);this.type="tip";this.set({name:"",index:0,value:"",text:"",showType:"follow",invokeOffset:null,fade_duration:300,move_duration:100,timing_function:"ease-out",invokeOffsetDynamic:!1,style:"textAlign:left;padding:4px 5px;cursor:pointer;backgroundColor:rgba(239,239,239,.85);fontSize:12px;color:black;",border:{enable:!0,radius:5},delay:200});this.registerEvent("parseText")},position:function(a,b,c){c.style.top=(0>a?0:a)+"px";c.style.left=(0>b?0:b)+"px"},follow:function(a,b,d){d.get("invokeOffsetDynamic")?b.hit&&((c.isString(b.text)||c.isNumber(b.text))&&d.text(b.name,b.value,b.text,b.i,d),a=d.get("invokeOffset")(d.width(),d.height(),b),d.position(a.top,a.left,d)):"follow"!=d.get("showType")&&c.isFunction(d.get("invokeOffset"))?(a=d.get("invokeOffset")(d.width(),d.height(),b),d.position(a.top,a.left,d)):d.position(a.y-1.1*d.height()-2,a.x+2,d)},text:function(a,b,c,e,f){f.dom.innerHTML=f.fireString(f,"parseText",[f,a,b,c,e],c)},hidden:function(){this.get("animation")?this.css("opacity",0):this.css("visibility","hidden")},doAction:function(a){a.T.on("mouseover",function(b,c,e){a.show(c,e)}).on("mouseout",function(b,c){a.hidden(c)});if("follow"==a.get("showType"))a.T.on("mousemove",function(b,c,e){a.T.variable.event.mouseover&&setTimeout(function(){a.T.variable.event.mouseover&&a.follow(c,e,a)},a.get("delay"))})},initialize:function(){c.Tip.superclass.initialize.call(this);var a=this._();a.text(a.get("name"),a.get("value"),a.get("text"),a.get("index"),a);a.hidden();if(a.get("animation")){var b=a.get("move_duration")/1E3+"s "+a.get("timing_function")+" 0s";a.transition("opacity "+a.get("fade_duration")/1E3+"s "+a.get("timing_function")+" 0s");a.transition("top "+b);a.transition("left "+b);a.onTransitionEnd(function(){0==a.css("opacity")&&a.css("visibility","hidden")},!1)}}});c.CrossHair=c.extend(c.Html,{configure:function(){c.CrossHair.superclass.configure.apply(this,arguments);this.type="crosshair";this.set({top:0,left:0,hcross:!0,vcross:!0,invokeOffset:null,line_width:1,line_color:"#1A1A1A",delay:200})},follow:function(a,b,c){c.get("invokeOffset")?(a=c.get("invokeOffset")(a,b))&&a.hit?(c.o_valid=!0,c.position(a.top-c.top,a.left-c.left,c)):(!a||!c.o_valid)&&c.position(c.owidth,c.oheight,c):c.position(a.y-c.top-1,a.x-c.left-1,c)},position:function(a,b,c){c.horizontal.style.top=a-c.size+"px";c.vertical.style.left=b-c.size+"px"},doCreate:function(a,b,d){var e=document.createElement("div");e.style.width=c.toPixel(b);e.style.height=c.toPixel(d);e.style.backgroundColor=a.get("line_color");e.style.position="absolute";a.dom.appendChild(e);return e},doAction:function(a){a.T.on("mouseover",function(b,c,e){a.show(c,e)}).on("mouseout",function(b,c,e){a.hidden(c,e)}).on("mousemove",function(b,c,e){a.follow(c,e,a)})},initialize:function(){c.CrossHair.superclass.initialize.call(this);var a=this._(),b=c.toPixel(a.get("line_width"));a.size=a.get("line_width")/2;a.top=c.fixPixel(a.get(a.O));a.left=c.fixPixel(a.get(a.L));a.owidth=-a.T.root.width;a.oheight=-a.T.root.height;a.o_valid=!1;a.css("width","0px");a.css("height","0px");a.css("top",a.top+"px");a.css("left",a.left+"px");a.css("visibility","hidden");a.horizontal=a.doCreate(a,a.get("hcross")?c.toPixel(a.get(a.W)):"0px",b);a.vertical=a.doCreate(a,b,a.get("vcross")?c.toPixel(a.get(a.H)):"0px")}});c.Legend=c.extend(c.Component,{configure:function(){c.Legend.superclass.configure.apply(this,arguments);this.type="legend";this.set({data:void 0,width:"auto",column:1,row:"max",maxwidth:0,line_height:16,sign:"square",sign_size:10,sign_space:5,legend_space:5,z_index:1009,text_with_sign_color:!1,align:"right",valign:"middle"});this.atomic=!0;this.registerEvent("parse")},isEventValid:function(a,b){var c={valid:!1};a.x>this.x&&a.x<b.x+b.width&&a.y>b.y&&a.y<b.y+b.height&&b.data.each(function(e,f){if(a.x>e.x&&a.x<e.x+e.width_+b.get("signwidth")&&a.y>e.y&&a.y<e.y+b.get("line_height"))return c={valid:!0,index:f,target:e},!1},b);return c},drawCell:function(a,b,c,e,f,g){var j=g.get("sign_size"),k=g.getPlugin("sign");if(!k||!k.call(g,g.T,f,{x:a+j/2,y:b},j,e))-1!=f.indexOf("bar")&&g.T.box(a,b-j/12,j,j/6,0,e),"round"==f?g.T.round(a+j/2,b,j/2,e):"round-bar"==f?g.T.round(a+j/2,b,j/4,e):"square-bar"==f?g.T.box(a+j/4,b-j/4,j/2,j/2,0,e):"square"==f&&g.T.box(a,b-j/2,j,j,0,e);g.T.fillText(c,a+g.get("signwidth"),b,0,g.get("text_with_sign_color")?e:g.get("color"),"lr",g.get("line_height"))},doDraw:function(a){a.T.box(a.x,a.y,a.width,a.height,a.get("border"),a.get("f_color"),!1,a.get("shadow"));a.T.textStyle(a.L,"middle",c.getFont(a.get("fontweight"),a.get("fontsize"),a.get("font")));a.data.each(function(b){a.drawCell(b.x,b.y,b.text,b.color,b.sign,a)})},doLayout:function(a,b){var d=a.get("sign_size"),e=0,f=0,g=0,j=a.get("column"),k=a.get("row"),l=a.data.length;a.T.textFont(a.get("fontStyle"));a.get("line_height")<d&&a.push("line_height",d+d/5);a.push("signwidth",d+a.get("sign_space"));a.data.each(function(b){b.width_=a.T.measureText(b.text)},a);for(var p=0;p<j;p++){for(var g=0,m=p;m<l;m+=j)g=Math.max(g,a.data[m].width_);a.columnwidth[p]=g;e+=g}for(p=0;p<k;p++){g=0;for(m=p*j;m<l;m++)g=Math.max(g,a.data[m].text.split("\n").length);a.columnheight[p]=g;f+=g}e=a.push(a.W,e+a.get("hpadding")+a.get("signwidth")*j+(j-1)*a.get("legend_space"));if(e>a.get("maxwidth")&&(d=Math.floor(a.get("fontsize")*(a.get("maxwidth")/e)),!(10>d&&1==j))){9<d?a.push("fontStyle",c.getFont(a.get("fontweight"),a.push("fontsize",d),a.get("font"))):1<j&&a.push("row",Math.ceil(l/a.push("column",j-1)));a.doLayout(a,b);return}var r;a.width=e;a.height=f=a.push(a.H,f*a.get("line_height")+a.get("vpadding"));a.y=a.get("valign")==a.O?b.get("t_originy"):a.get("valign")==a.B?b.get("b_originy")-f:b.get("centery")-f/2;a.x=a.get("align")==a.L?b.get("l_originx"):a.get("align")==a.C?b.get("centerx")-e/2:b.get("r_originx")-e;a.x=a.push(a.X,(0>a.x?b.get("l_originx"):a.x)+a.get("offsetx"));a.y=a.push(a.Y,(0>a.y?b.get("t_originy"):a.y)+a.get("offsety"));g=a.y+a.get("padding_top");d=a.get("legend_space")+a.get("signwidth");for(p=0;p<k;p++){f=a.x+a.get("padding_left");r=a.columnheight[p]/2*a.get("line_height");g+=r;for(m=0;m<j&&p*j+m<l;m++)e=a.data[p*j+m],e.y=g,e.x=f,f+=a.columnwidth[m]+d;g+=r}},doConfig:function(){c.Legend.superclass.doConfig.call(this);var a=this._(),b=a.root,d=c.isNumber(a.get("column")),e=c.isNumber(a.get("row")),f=a.data.length;a.get("align")==a.C&&"middle"==a.get("valign")&&a.push("valign",a.O);b.get("align")==a.L&&"middle"==a.get("valign")&&a.push("align",a.R);a.data.each(function(b,d){c.merge(b,a.fireEvent(a,"parse",[a,b.name,d]));b.text=b.text||b.name||"";b.sign=b.sign||a.get("sign")},a);!d&&!e&&(d=a.push("column",1));d&&!e&&(e=a.push("row",Math.ceil(f/a.get("column"))));!d&&e&&(d=a.push("column",Math.ceil(f/a.get("row"))));d=a.get("column");e=a.get("row");f>e*d&&(e+=Math.ceil((f-e*d)/d),e=a.push("row",e));a.columnwidth=[];a.columnheight=[];a.doLayout(a,b)}});c.Label=c.extend(c.Component,{configure:function(){c.Label.superclass.configure.apply(this,arguments);this.type="label";this.set({text:"",line_height:12,line_thickness:1,sign:"square",sign_size:12,padding:"2 5",offsety:2,sign_space:5,background_color:"#efefef",text_with_sign_color:!1});this.atomic=!0;this.registerEvent()},isEventValid:function(a,b){return{valid:c.inRange(b.labelx,b.labelx+b.get(b.W),a.x)&&c.inRange(b.labely,b.labely+b.get(b.H),a.y)}},text:function(a){a&&this.push("text",a);this.push(this.W,this.T.measureText(this.get("text"))+this.get("hpadding")+this.get("sign_size")+this.get("sign_space"))},localizer:function(a){var b=a.get("quadrantd"),c=a.get("line_points"),e=a.get("smooth"),b=1<=b&&2>=b,f=a.get("labelx"),g=a.get("labely");a.labelx=f+(b?-a.get(a.W)-e:e);a.labely=g-a.get(a.H)/2;c[2]={x:f,y:g};c[3]={x:c[2].x+(b?-e:e),y:c[2].y}},doLayout:function(a,b,c,e){e.push("labelx",e.get("labelx")+a/c);e.push("labely",e.get("labely")+b/c);e.get("line_points").each(function(c,d){c.x+=a;c.y+=b;return 1==d},e);e.localizer(e)},doDraw:function(a){var b=a.get("line_points"),c=a.get("sign_size"),e=a.labelx+a.get("padding_left"),f=a.labely+a.get("padding_top");a.T.label(b,a.get("line_thickness"),a.get("border.color"));a.T.box(a.labelx,a.labely,a.get(a.W),a.get(a.H),a.get("border"),a.get("f_color"),!1,a.get("shadow"));a.T.textStyle(a.L,a.O,a.get("fontStyle"));b=a.get("color");a.get("text_with_sign_color")&&(b=a.get("scolor"));"square"==a.get("sign")?a.T.box(e,f,c,c,0,a.get("scolor")):a.get("sign")&&a.T.round(e+c/2,f+c/2,c/2,a.get("scolor"));a.T.fillText(a.get("text"),e+c+a.get("sign_space"),f,a.get("textwidth"),b)},doConfig:function(){c.Label.superclass.doConfig.call(this);var a=this._();a.T.textFont(a.get("fontStyle"));a.get("fontsize")>a.get("line_height")&&a.push("line_height",a.get("fontsize"));a.get("sign")||(a.push("sign_size",0),a.push("sign_space",0));a.push(a.H,a.get("line_height")+a.get("vpadding"));a.text();a.localizer(a)}});c.Text=c.extend(c.Component,{configure:function(){c.Text.superclass.configure.apply(this,arguments);this.type="text";this.set({text:"",textAlign:"center",align:"center",background_color:0,textBaseline:"top",border:{enable:!1},width:0,height:0,padding:0,writingmode:"lr",line_height:16,rotate:0});this.registerEvent()},doDraw:function(a){a.get("box_feature")&&a.T.box(a.x,a.y,a.get(a.W),a.get(a.H),a.get("border"),a.get("f_color"));a.T.text(a.get("text"),a.get("textx"),a.get("texty"),a.get(a.W)-a.get("hpadding"),a.get("color"),a.get("textAlign"),a.get("textBaseline"),a.get("fontStyle"),a.get("writingmode"),a.get("line_height"),a.get("shadow"),a.get("rotate"))},isEventValid:function(){return{valid:!1}},doLayout:function(a,b,c,e){e.x=e.push(e.X,e.x+a);e.y=e.push(e.Y,e.y+b);e.push("textx",e.get("textx")+a);e.push("texty",e.get("texty")+b)},doConfig:function(){c.Text.superclass.doConfig.call(this);var a=this._(),b=a.x,d=a.y+a.get("padding_top"),e=a.get(a.W),f=a.get(a.H),g=a.get("textAlign"),b=b+(g==a.C?e/2:g==a.R?e-a.get("padding_right"):a.get("padding_left"));f&&(d+=f/2,a.push("textBaseline","middle"));a.push("textx",b);a.push("texty",d);a.push("box_feature",e&&f);a.applyGradient()}});(function(a){function b(i){"string"===typeof i&&(i=a(i));if(!i||!i.tagName||"canvas"!=i.tagName.toLowerCase())throw Error("there not a canvas element");this.canvas=i;this.c=this.canvas.getContext("2d")}var c=Math.PI,e=c/90,f=e/2,g=Math.ceil,j=Math.floor,k=2*c,l=Math.max,p=Math.min,m=Math.sin,r=Math.cos,o=function(a,b){return 1==a?j(b)+0.5:Math.round(b)},t=function(a,b,c,d){var e=b.x,f=b.y,g=a[c-1],j=a[c+1],k,n;if(c<a.length-1){var a=g.y,c=j.y,o;k=(d*e+g.x)/(d+1);n=(d*f+a)/(d+1);j=(d*e+j.x)/(d+1);d=(d*f+c)/(d+1);o=(d-n)*(j-e)/(j-k)+f-d;n+=o;d+=o;n>a&&n>f?(n=l(a,f),d=2*f-n):n<a&&n<f&&(n=p(a,f),d=2*f-n);d>c&&d>f?(d=l(c,f),n=2*f-d):d<c&&d<f&&(d=p(c,f),n=2*f-d);b.rcx=j;b.rcy=d}return[g.rcx||g.x,g.rcy||g.y,k||e,n||f,e,f]},q=function(i){return a.isNumber(i)?i:a.parseFloat(i,i)},v=function(i,b){var c,d=0,e,f=0,g=!1,j=b.get("labels");b.data=i;if("simple"==b.dataType)b.total=0,i.each(function(i){i.background_color=i.color;d=i.value||0;if(a.isArray(d)){var j=0;f=d.length>f?d.length:f;for(var k=0;k<d.length;k++)d[k]=q(d[k]),j+=d[k],g||(c=e=d[k],g=!0),c=l(d[k],c),e=p(d[k],e);i.total=j}else d=q(d),i.value=d,b.total+=d,g||(c=e=d,g=!0),c=l(d,c),e=p(d,e)},b),a.isArray(j)&&(f=j.length>f?j.length:f),b.push("maxItemSize",f);else if("stacked"==b.dataType||"complex"==b.dataType){var k=j.length,n,o,m,r="stacked"==b.dataType;if(0==k)for(var k=i[0].value.length,t=0;t<k;t++)j.push("");b.columns=[];for(t=0;t<k;t++)n=[],o=0,i.each(function(b,u){if(d=b.value[t])b.value[t]=d=q(d,d),o+=d,r?m=i[u].color:(m=b.color,g||(c=e=d,g=!0),c=l(d,c),e=p(d,e)),n.push(a.applyIf({name:b.name,value:b.value[t],background_color:m,color:m},a.isArray(b.extra)?b.extra[t]||{}:b))}),r&&(g||(c=e=d,g=!0),c=l(o,c),e=p(o,e)),b.columns.push({total:o,name:j[t],item:n})}b.push("minValue",e);b.push("maxValue",c);b.doConfig();b.initialization=!0};b.prototype={getContext:function(){return this.c},css:function(i,b){if(a.isDefined(b))this.canvas.style[i]=b;else return this.canvas.style[i]},ellipse:function(a,b,c,d,f,g,j,k,l,n,o,p,q,t){q=!!q;this.save().gCo(t).strokeStyle(k,l,n).shadowOn(o).fillStyle(j).moveTo(a,b).beginPath();for(q&&this.moveTo(a,b);f<=g;)this.lineTo(a+c*r(f),b+d*m(f)),f+=e;return this.lineTo(a+c*r(g),b+d*m(g)).closePath().stroke(k).fill(j).restore()},arc:function(a,b,c,d,e,f,g,k,l,n,o,q,p,t){k&&(c-=j(l/2));if(0>=c)return this;this.save().gCo(t).strokeStyle(k,l,n).fillStyle(g).beginPath();d?(this.moveTo(a+r(e)*(c-d),b+m(e)*(c-d)).lineTo(a+r(e)*c,b+m(e)*c),this.c.arc(a,b,c,e,f,q),this.lineTo(a+r(f)*(c-d),b+m(f)*(c-d)),this.c.arc(a,b,c-d,f,e,!q)):(this.c.arc(a,b,c,e,f,q),p&&this.lineTo(a,b));this.closePath();k?this.shadowOn(o).stroke(k).shadowOff().fill(g):this.shadowOn(o).fill(g);return this.restore()},sector:function(a,b,c,d,e,f,g,j,k,n,l,o,m,q){l&&this.arc(a,b,c,d,e,f,g,j,k,n,l,o,!m,!q);return this.arc(a,b,c,d,e,f,g,j,k,n,!1,o,!m)},sector3D:function(){var i=function(i,b,c,d,u,f,g,j,y){var g=function(a,e){this.lineTo(i+c*r(a),b+(e||0)+d*m(a))},k=u;for(this.fillStyle(a.dark(y)).moveTo(i+c*r(u),b+d*m(u)).beginPath();k<=f;)g.call(this,k),k+=e;g.call(this,f);this.lineTo(i+c*r(f),b+j+d*m(f));for(k=f;k>=u;)g.call(this,k,j),k-=e;g.call(this,u,j);this.lineTo(i+c*r(u),b+d*m(u)).closePath().fill(!0)},b=function(a,i,b,c,d,e,u,f){b=a+b*r(u);c=i+e+c*m(u);this.moveTo(a,i).beginPath().fillStyle(f).lineTo(a,i+e).lineTo(b,c).lineTo(b,c-e).lineTo(a,i).closePath().fill(!0)},c=function(i,c,d,e,f,g,k,j,y){var w=a.quadrantd(f),l=a.quadrantd(g),y=a.dark(y);(1==w||2==w)&&b.call(this,i,c,d,e,k,j,f,y);(0==l||3==l)&&b.call(this,i,c,d,e,k,j,g,y)},d=function(a,b,d,e,u,f,g,k,j,w,l,o,m){this.ellipse(a,b+g,d,e,u,f,k,j,w,l,o,m,!0);c.call(this,a,b,d,e,u,f,m,g,k);this.ellipse(a,b,d,e,u,f,k,j,w,l,!1,m,!0);i.call(this,a,b,d,e,u,f,m,g,k);return this};d.layerPaint=c;d.sPaint=i;d.layerDraw=b;return d}(),textStyle:function(a,b,c){return this.textAlign(a).textBaseline(b).textFont(c)},strokeStyle:function(a,b,c,d){if(a&&(b&&(this.c.lineWidth=b),c&&(this.c.strokeStyle=c),d))this.c.lineJoin=d;return this},globalAlpha:function(a){a&&(this.c.globalAlpha=a);return this},fillStyle:function(a){a&&(this.c.fillStyle=a);return this},arc2:function(a,b,c,d,e,f){c&&this.c.arc(a,b,c,d,e,f);return this},textAlign:function(a){a&&(this.c.textAlign=a);return this},textBaseline:function(a){a&&(this.c.textBaseline=a);return this},textFont:function(a){a&&(this.c.font=a);return this},shadowOn:function(a){a&&(this.c.shadowColor=a.color,this.c.shadowBlur=a.blur,this.c.shadowOffsetX=a.offsetx,this.c.shadowOffsetY=a.offsety);return this},shadowOff:function(){this.c.shadowColor="white";this.c.shadowBlur=this.c.shadowOffsetX=this.c.shadowOffsetY=0;return this},gradient:function(a,b,c,d,e,f,g){var f=f.toLowerCase(),k=a,j=b,n=!f.indexOf("linear"),f=f.substring(14);if(n){switch(f){case "updown":j+=d;break;case "downup":b+=d;break;case "leftright":k+=c;break;case "rightleft":a+=c;break;default:return e[0]}return this.avgLinearGradient(a,b,k,j,e)}a+=c/2;b+=d/2;return this.avgRadialGradient(a,b,g||0,a,b,c>d?d:c,"outin"==f?e.reverse():e)},avgLinearGradient:function(a,b,c,d,e){a=this.createLinearGradient(a,b,c,d);for(b=0;b<e.length;b++)a.addColorStop(b/(e.length-1),e[b]);return a},createLinearGradient:function(a,b,c,d){return this.c.createLinearGradient(a,b,c,d)},avgRadialGradient:function(a,b,c,d,e,f,g){a=this.createRadialGradient(a,b,c,d,e,f);for(b=0;b<g.length;b++)a.addColorStop(b/(g.length-1),g[b]);return a},createRadialGradient:function(a,b,c,d,e,f){return this.c.createRadialGradient(a,b,c,d,e,f)},text:function(a,b,c,d,e,f,g,k,j,n,l,o){return this.save().textStyle(f,g,k).fillText(a,b,c,d,e,j,n,l,o).restore()},fillText:function(a,b,c,d,e,g,k,j,l){a=a.toString();if(!a||!a.length)return this;d=d||!1;g=g||"lr";k=k||16;b=o(0,b);c=o(0,c);a=a.split("tb"==g?"":"\n");1<a.length&&("middle"==this.c.textBaseline?c-=(a.length-1)*k/2:"bottom"==this.c.textBaseline&&(c-=(a.length-1)*k));this.save().fillStyle(e).translate(b,c).rotate(f*l).shadowOn(j);a.each(function(a,i){try{d&&0<d?this.c.fillText(a,0,i*k,d):this.c.fillText(a,0,i*k)}catch(e){console.log(e.message+"["+a+","+b+","+c+"]")}},this);return this.restore()},measureText:function(a){var a=a.split("\n"),b=0;a.each(function(a){b=l(this.measureText(a).width,b)},this.c);return b},moveTo:function(a,b){this.c.moveTo(a||0,b||0);return this},lineTo:function(a,b){this.c.lineTo(a||0,b||0);return this},save:function(){this.c.save();return this},restore:function(){this.c.restore();return this},beginPath:function(){this.c.beginPath();return this},closePath:function(){this.c.closePath();return this},stroke:function(a){a&&this.c.stroke();return this},fill:function(a){a&&this.c.fill();return this},cube:function(b,c,d,e,f,g,k,j,l,n,m,q){b=o(n,b);c=o(n,c);k=k&&0<k?k:f;e=c-k*e;d=o(n,b+k*d);e=o(n,e);q&&(this.polygon(j,l,n,m,q,!1,[{x:b,y:c},{x:d,y:e},{x:d+f,y:e},{x:b+f,y:c}]),this.polygon(j,l,n,m,q,!1,[{x:b,y:c},{x:b,y:c+g},{x:b+f,y:c+g},{x:b+f,y:c}]),this.polygon(j,l,n,m,q,!1,[{x:b+f,y:c},{x:d+f,y:e},{x:d+f,y:e+g},{x:b+f,y:c+g}]));this.polygon(a.dark(j),l,n,m,!1,!1,[{x:b,y:c},{x:d,y:e},{x:d+f,y:e},{x:b+f,y:c}]);this.polygon(j,l,n,m,!1,!1,[{x:b,y:c},{x:b,y:c+g},{x:b+f,y:c+g},{x:b+f,y:c}]);this.polygon(a.dark(j),l,n,m,!1,!1,[{x:b+f,y:c},{x:d+f,y:e},{x:d+f,y:e+g},{x:b+f,y:c+g}]);return this},cube3D:function(b,c,d,e,f,g,k,j,l,n,m,q){b=o(n,b);c=o(n,c);j=!j||0==j?g:j;f?(e=a.vectorP2P(d,e),d=b+j*e.x,e=c-j*e.y):(d=b+j*d,e=c-j*e);for(;6>q.length;)q.push(!1);d=o(n,d);e=o(n,e);j=[];0>e?a.isObject(q[4])&&j.push(a.applyIf({points:[{x:b,y:c-k},{x:d,y:e-k},{x:d+g,y:e-k},{x:b+g,y:c-k}]},q[4])):a.isObject(q[0])&&j.push(a.applyIf({points:[{x:b,y:c},{x:d,y:e},{x:d+g,y:e},{x:b+g,y:c}]},q[0]));a.isObject(q[1])&&j.push(a.applyIf({points:[{x:d,y:e},{x:d,y:e-k},{x:d+g,y:e-k},{x:d+g,y:e}]},q[1]));a.isObject(q[2])&&j.push(a.applyIf({points:[{x:b,y:c},{x:b,y:c-k},{x:d,y:e-k},{x:d,y:e}]},q[2]));a.isObject(q[3])&&j.push(a.applyIf({points:[{x:b+g,y:c},{x:b+g,y:c-k},{x:d+g,y:e-k},{x:d+g,y:e}]},q[3]));0>e?a.isObject(q[0])&&j.push(a.applyIf({points:[{x:b,y:c},{x:d,y:e},{x:d+g,y:e},{x:b+g,y:c}]},q[0])):a.isObject(q[4])&&j.push(a.applyIf({points:[{x:b,y:c-k},{x:d,y:e-k},{x:d+g,y:e-k},{x:b+g,y:c-k}]},q[4]));a.isObject(q[5])&&j.push(a.applyIf({points:[{x:b,y:c},{x:b,y:c-k},{x:b+g,y:c-k},{x:b+g,y:c}]},q[5]));j.each(function(a){this.polygon(a.color,l,n,m,a.shadow,a.alpha,a.points)},this);return this},polygon:function(a,b,c,d,e,f,g,k,j,l){this.save().strokeStyle(b,c,d).beginPath().fillStyle(a).globalAlpha(f).shadowOn(e).moveTo(g[0].x,g[0].y);if(k){this.moveTo(o(c,l[0].x),o(c,l[0].y)).lineTo(o(c,g[0].x),o(c,g[0].y));for(d=1;d<g.length;d++)this.bezierCurveTo(t(g,g[d],d,j));this.lineTo(o(c,l[1].x),o(c,l[1].y))}else for(d=1;d<g.length;d++)this.lineTo(o(c,g[d].x),o(c,g[d].y));return this.closePath().stroke(b).fill(a).restore()},lines:function(a,b,c,d){if(!b)return this;this.save().gCo(d).beginPath().strokeStyle(!0,b,c).moveTo(o(b,a[0]),o(b,a[1]));for(c=2;c<a.length-1;c+=2)this.lineTo(o(b,a[c]),o(b,a[c+1]));return this.stroke(!0).restore()},bezierCurveTo:function(a){this.c.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);return this},label:function(a,b,c){return this.save().beginPath().strokeStyle(!0,b,c).moveTo(o(b,a[0].x),o(b,a[0].y)).bezierCurveTo([a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y]).stroke(!0).restore()},lineArray:function(a,b,c,d,e){if(!b)return this;this.save().beginPath().strokeStyle(!0,b,c).moveTo(o(b,a[0].x),o(b,a[0].y));for(c=1;c<a.length;c++)d?this.bezierCurveTo(t(a,a[c],c,e||1.5)):this.lineTo(o(b,a[c].x),o(b,a[c].y));return this.stroke(!0).restore()},dotted:function(b,c,d,e,f,g,k,l,m){if(!f)return this;var b=o(f,b),c=o(f,c),d=o(f,d),e=o(f,e),n=a.distanceP2P(b,c,d,e),q;if(0>=k||n<=k||b!=d&&c!=e)return this.line(b,c,d,e,f,g,m);if(b>d||c>e)q=b,b=d,d=q,q=c,c=e,e=q;this.save().gCo(m).strokeStyle(!0,f,g).beginPath().moveTo(b,c);f=k*(l||1);g=j(n/(k+f));n=n-g*(k+f)>k;l=c==e;g=n?g+1:g;for(m=1;m<=g;m++)this.lineTo(l?b+k*m+f*(m-1):b,l?c:c+k*m+f*(m-1)).moveTo(l?b+(k+f)*m:b,l?c:c+(k+f)*m);n||this.lineTo(d,e);return this.stroke(!0).restore()},line:function(a,b,c,d,e,f,g){if(!e)return this;this.save().gCo(g);return this.beginPath().strokeStyle(!0,e,f).moveTo(o(e,a),o(e,b)).lineTo(o(e,c),o(e,d)).stroke(!0).restore()},round:function(a,b,c,d,e,f){return this.arc(a,b,c,0,0,k,d,!!f,e,f)},round0:function(a,b,c,d,e){return this.arc(a.x,a.y,b,0,0,k,c,!!e,d,e)},fillRect:function(a,b,c,d){this.c.fillRect(a,b,c,d);return this},translate:function(a,b){this.c.translate(a,b);return this},rotate:function(a){this.c.rotate(a);return this},clearRect:function(a,b,c,d){c=c||this.canvas.width;d=d||this.canvas.height;this.c.clearRect(a||0,b||0,c,d);return this},gCo:function(a){return a?this.gCO(a):this},gCO:function(a){this.c.globalCompositeOperation=a?"destination-over":"source-over";return this},box:function(b,e,f,l,m,q,s,p,t){m=m||{enable:0};if(m.enable){var n=m.width,r=m.color,v=m.radius,z=a.isNumber(n),n=a.parsePadding(n);n[0]==n[1]&&n[1]==n[2]&&n[2]==n[3]&&(z=!0);p=p?1:-1;f+=p*(n[1]+n[3])/2;l+=p*(n[0]+n[2])/2;b-=p*(n[3]/2);e-=p*(n[0]/2);n=z?n[0]:n;v=!z||!v||0==v||"0"==v?0:a.parsePadding(v)}this.save().gCo(t).fillStyle(q).strokeStyle(z,n,r);v?this.beginPath().moveTo(o(n,b+v[0]),o(n,e)).lineTo(o(n,b+f-v[1]),o(n,e)).arc2(o(n,b+f-v[1]),o(n,e+v[1]),v[1],3*c/2,k).lineTo(o(n,b+f),o(n,e+l-v[2])).arc2(o(n,b+f-v[2]),o(n,e+l-v[2]),v[2],0,c/2).lineTo(o(n,b+v[3]),o(n,e+l)).arc2(o(n,b+v[3]),o(n,e+l-v[3]),v[3],c/2,c).lineTo(o(n,b),o(n,e+v[0])).arc2(o(n,b+v[0]),o(n,e+v[0]),v[0],c,3*c/2).closePath().shadowOn(s).stroke(n).shadowOff().fill(q):!m.enable||z?(n&&m.enable&&(this.shadowOn(s).c.strokeRect(b,e,f,l),this.shadowOff()),q&&this.fillRect(b,e,f,l)):(n&&(r=a.isArray(r)?r:[r,r,r,r],this.shadowOn(s).line(b+f,e+n[0]/2,b+f,e+l-n[0]/2,n[1],r[1],0).line(b,e+n[0]/2,b,e+l-n[0]/2,n[3],r[3],0).line(j(b-n[3]/2),e,b+f+n[1]/2,e,n[0],r[0],0).line(j(b-n[3]/2),e+l,b+f+n[1]/2,e+l,n[2],r[2],0).shadowOff()),q&&this.beginPath().moveTo(j(b+n[3]/2),j(e+n[0]/2)).lineTo(g(b+f-n[1]/2),e+n[0]/2).lineTo(g(b+f-n[1]/2),g(e+l-n[2]/2)).lineTo(j(b+n[3]/2),g(e+l-n[2]/2)).lineTo(j(b+n[3]/2),j(e+n[0]/2)).closePath().fill(q));return this.restore()},toDataURL:function(a){return this.canvas.toDataURL(a||"image/png")},addEvent:function(b,c,d){a.Event.addEvent(this.canvas,b,c,d)}};a.taylor={light:function(a,b){b.highlight=!1;a.on("mouseover",function(){b.highlight=!0;a.redraw("mouseover")}).on("mouseout",function(){b.highlight=!1;a.redraw("mouseout")}).on("beforedraw",function(){a.push("f_color",b.highlight?a.get("light_color"):a.get("f_color_"));return!0})}};a.Chart=a.extend(a.Painter,{configure:function(){a.Chart.superclass.configure.apply(this,arguments);this.type="chart";this.dataType="simple";this.set({id:"",render:"",data:[],width:void 0,height:void 0,lineJoin:"round",align:"center",default_mouseover_css:!0,turn_off_touchmove:!1,showpercent:!1,decimalsnum:1,title:{text:"",fontweight:"bold",fontsize:20,height:30},subtitle:{text:"",fontweight:"bold",fontsize:16,height:20},footnote:{text:"",color:"#5d7f97",textAlign:"right",height:20},animation:!1,doAnimation:null,animation_timing_function:"easeInOut",animation_duration:1E3,z_index:999,legend:{enable:!1},tip:{enable:!1}});this.registerEvent("beforeAnimation","afterAnimation","resize","animating");this.T=null;this.show=this.Animationed=this.Combination=this.Rendered=!1;this.data=[];this.plugins=[];this.components=[];this.oneways=[];this.total=0;this.ICHARTJS_CHART=!0},toDataURL:function(a){return this.T.toDataURL(a)},segmentRect:function(){this.Combination||this.T.clearRect()},resetCanvas:function(){this.Combination||this.T.box(this.get("l_originx"),this.get("t_originy"),this.get("client_width"),this.get("client_height"),0,this.get("f_color"),0,0,!0)},animation:function(b){b.segmentRect();b.coo&&!b.ILLUSIVE_COO&&b.coo.draw();b.doAnimation(b.variable.animation.time,b.duration,b);b.plugins.each(function(a){a.A_draw&&(a.variable.animation.animating=!0,a.variable.animation.time=b.variable.animation.time,a.draw(),a.variable.animation.animating=!1)});b.Combination||(b.oneways.each(function(a){a.draw()}),b.variable.animation.time<b.duration?(b.variable.animation.time++,a.requestAnimFrame(function(){b.animation(b)})):a.requestAnimFrame(function(){b.Animationed=!0;b.plugins.each(function(a){a.Animationed=!0});b.processAnimation=!1;b.draw();b.plugins.each(function(a){a.processAnimation=!1});b.fireEvent(b,"afterAnimation",[b])}))},runAnimation:function(a){a.fireEvent(a,"beforeAnimation",[a]);a.A_draw||(a.variable.animation={type:0,time:0,queue:[]});a.processAnimation=!0;a.animation(a)},doSort:function(){var b=function(b,c){return(a.isArray(b)?b.zIndex||0:b.get("z_index"))>(a.isArray(c)?c.zIndex||0:c.get("z_index"))};this.components.sor(b);this.oneways.sor(b)},commonDraw:function(b,c){b.show=!1;b.redraw||(a.Assert.isTrue(b.Rendered,b.type+" has not rendered"),a.Assert.isTrue(b.data&&0<b.data.length,b.type+"'s data is empty"),a.Assert.isTrue(b.initialization,b.type+" Failed to initialize"),b.doSort());b.redraw=!0;!b.Animationed&&b.get("animation")?b.runAnimation(b):(b.segmentRect(),b.components.eachAll(function(a){a.draw(c)}),b.components.eachAll(function(a){a.last&&a.last(a)}),b.oneways.each(function(a){a.draw()}),b.show=!0)},plugin:function(a){var b=this._();a.inject(b);a.ICHARTJS_CHART&&(a.Combination=!0,a.setUp());b.get("animation")||a.push("animation",!1);a.duration=b.duration;b.register(a);b.plugins.push(a)},destroy:function(a){a.components.eachAll(function(a){a.destroy()});a.oneways.each(function(a){a.destroy()})},getTitle:function(){return this.title},getSubTitle:function(){return this.subtitle},getFootNote:function(){return this.footnote},getDrawingArea:function(){return{x:this.get("l_originx"),x:this.get("t_originy"),width:this.get("client_width"),height:this.get("client_height")}},create:function(c,d){if(c.get("fit")){var e=window.innerWidth,f=window.innerHeight,g=a.getDoc().body.style;g.padding="0px";g.margin="0px";g.overflow="hidden";c.push(c.W,e);c.push(c.H,f)}c.canvasid=a.uid(c.type);c.shellid="shell-"+c.canvasid;e=[];e.push("<div id='");e.push(c.shellid);e.push("' style='padding:0px;margin:0px;overflow:hidden;position:relative;'>");e.push("<canvas id= '");e.push(c.canvasid);e.push("' style='-webkit-text-size-adjust: none;'>");e.push("<p>Your browser does not support the canvas element</p></canvas>");e.push("</div>");d.innerHTML=e.join("");c.shell=a(c.shellid);c.T=c.target=new b(c.canvasid);c.size(c);c.Rendered=!0},setUp:function(){var a=this._();a.redraw=!1;a.T.clearRect();a.initialization=!1;a.initialize()},load:function(a){var b=this._();b.push("data",a||[]);b.setUp();(b.Combination?b.root:b).draw()},resize:function(b,c){var b=a.parseFloat(b),c=a.parseFloat(c),d=this._();d.Combination||(d.width=d.push(d.W,b),d.height=d.push(d.H,c),d.size(d));d.set(d.fireEvent(d,"resize",[b,c]));d.setUp();d.plugins.eachAll(function(a){a.Combination&&a.resize(b,c)});d.Combination||d.draw()},size:function(a){a.T.canvas.width=a.width=a.pushIf(a.W,400);a.T.canvas.height=a.height=a.pushIf(a.H,300);a.shell.style.width=a.width+"px";a.shell.style.height=a.height+"px"},initialize:function(){var b=this._(),c=b.get("data"),d=b.get("render");b.push(b.X,null);b.push(b.Y,null);b.Combination?(a.apply(b.options,a.clone([b.W,b.H,"padding","border","client_height","client_width","minDistance","maxDistance","centerx","centery","l_originx","r_originx","t_originy","b_originy"],b.root.options,!0)),b.width=b.get(b.W),b.height=b.get(b.H),b.shell=b.root.shell,b.Rendered=!0):b.Rendered||d&&b.create(b,a(d));b.Rendered&&!b.initialization&&(c&&0<c.length?v.call(b,c,b):a.isString(b.get("url"))&&b.ajax.call(b,b.get("url"),function(a){b.push("data",a);b.initialize();b.draw()}))},eventOff:function(){this.stopEvent=!0},eventOn:function(){this.stopEvent=!1},oneWay:function(b){b.T.strokeStyle(!0,0,b.get("strokeStyle"),b.get("lineJoin"));b.processAnimation=b.get("animation");a.isFunction(b.get("doAnimation"))&&(b.doAnimation=b.get("doAnimation"));b.animationArithmetic=a.getAA(b.get("animation_timing_function"));var c=b.variable.event,d=b.Combination,e=!b.get("turn_off_touchmove")&&!d,f=!a.touch&&b.get("default_mouseover_css")&&!d,k,j=a.touch?["touchstart","touchmove"]:["click","mousemove"];b.stopEvent=!1;b.A_draw=d&&b.processAnimation;a.register(b);d||j.each(function(c){b.T.addEvent(c,function(d){b.processAnimation||b.stopEvent||d.targetTouches&&d.targetTouches.length!=1||b.fireEvent(b,c,[b,a.Event.fix(d)])},false)});b.on(j[0],function(a,b){a.components.eachAll(function(a){if(a.ICHARTJS_CHART){if(a.fireEvent(a,j[0],[a,b])){c.click=true;return false}}else{var d=a.isMouseOver(b);if(d.valid){c.click=true;a.fireEvent(a,"click",[a,b,d]);return!b.stopPropagation}}});if(c.click){e&&b.event.preventDefault();c.click=false;return true}});if(!a.touch||e)if(b.on(j[1],function(a,b){k=false;a.components.eachAll(function(a){if(a.ICHARTJS_CHART){if(a.fireEvent(a,j[1],[a,b])){k=true;return false}}else{var c=a.variable.event,d=a.isMouseOver(b);if(d.valid){k=k||a.atomic;if(!c.mouseover){c.mouseover=true;a.fireEvent(a,"mouseover",[a,b,d])}a.fireEvent(a,"mousemove",[a,b,d]);if(d.stop)return false}else if(c.mouseover){c.mouseover=false;a.fireEvent(a,"mouseout",[a,b,d])}return!b.stopPropagation}});if(c.mouseover){b.event.preventDefault();if(!k){c.mouseover=false;a.fireEvent(a,"mouseout",[a,b])}return c.mouseover}if(k){c.mouseover=k;a.fireEvent(a,"mouseover",[a,b])}}),f)b.on("mouseover",function(){b.T.css("cursor","pointer")}).on("mouseout",function(){b.T.css("cursor","default")});a.applyIf(b.get("sub_option"),a.clone(["shadow","tip"],b.options,!0));b.Combination||(b.bg=new a.Custom({z_index:-1,drawFn:function(){b.T.box(0,0,b.width,b.height,b.get("border"),b.get("f_color"),0,0,true)}}),b.duration=g(b.get("animation_duration")*a.FRAME/1E3));b.oneWay=a.emptyFn},originXY:function(a,b,c){var d=a.get("align");d==a.L?a.pushIf(a.X,b[0]):d==a.R?a.pushIf(a.X,b[1]):a.pushIf(a.X,b[2]);a.x=a.push(a.X,a.get(a.X)+a.get("offsetx"));a.y=a.push(a.Y,c[0]+a.get("offsety"));return{x:a.x,y:a.y}},getPercent:function(a,b){return this.get("showpercent")?(100*(a/(b||this.total||1))).toFixed(this.get("decimalsnum"))+"%":a},doActing:function(b,c,d,e,f){var g=!!b.get("communal_acting"),k=b.getPercent(c.value,c.total);b.push(g?"sub_option":"communal_acting",a.clone(b.get(g?"communal_acting":"sub_option"),!0));a.merge(b.get("sub_option"),c);a.merge(b.get("sub_option"),d);b.push("sub_option.value",k);b.push("sub_option.value_",c.value);b.get("sub_option.tip.enable")&&(b.push("sub_option.tip.text",f||c.name+" "+k),b.push("sub_option.tip.name",c.name),b.push("sub_option.tip.index",e),b.push("sub_option.tip.value",c.value),b.push("sub_option.tip.total",c.total||b.total))},register:function(b){b.id=a.uid(b.type);this.components.push(b);return b},remove:function(a,b){b&&a.components.each(function(c,d){if(b.id==c.id)return a.components.splice(d,1),!1})},doConfig:function(){a.Chart.superclass.doConfig.call(this);var b=this._();b.destroy(b);b.oneways.length=0;b.oneWay(b);b.push("communal_acting",0);if(!b.Combination){b.oneways.push(b.bg);b.push("r_originx",b.width-b.get("padding_right"));b.push("b_originy",b.height-b.get("padding_bottom"));b.applyGradient();a.isString(b.get("title"))&&b.push("title",a.applyIf({text:b.get("title")},b.default_.title));a.isString(b.get("subtitle"))&&b.push("subtitle",a.applyIf({text:b.get("subtitle")},b.default_.subtitle));a.isString(b.get("footnote"))&&b.push("footnote",a.applyIf({text:b.get("footnote")},b.default_.footnote));var c=0,d=b.push("l_originx",b.get("padding_left")),e=b.push("t_originy",b.get("padding_top")),f=b.push("client_width",b.width-b.get("hpadding"));if(""!=b.get("title.text")){var g=""!=b.get("subtitle.text"),c=g?b.get("title.height")+b.get("subtitle.height"):b.get("title.height"),e=b.push("t_originy",e+c);b.push("title.originx",d);b.push("title.originy",b.get("padding_top"));b.push("title.maxwidth",f);b.pushIf("title.width",f);b.title=new a.Text(b.get("title"),b);b.oneways.push(b.title);g&&(b.push("subtitle.originx",d),b.push("subtitle.originy",b.get("padding_top")+b.get("title.height")),b.pushIf("subtitle.width",f),b.push("subtitle.maxwidth",f),b.subtitle=new a.Text(b.get("subtitle"),b),b.oneways.push(b.subtitle))}""!=b.get("footnote.text")&&(g=b.get("footnote.height"),c+=g,b.push("b_originy",b.get("b_originy")-g),b.push("footnote.originx",d),b.push("footnote.originy",b.get("b_originy")),b.push("footnote.maxwidth",f),b.pushIf("footnote.width",f),b.footnote=new a.Text(b.get("footnote"),b),b.oneways.push(b.footnote));c=b.push("client_height",b.get(b.H)-b.get("vpadding")-b.pushIf("other_height",c));b.push("minDistance",p(f,c));b.push("maxDistance",l(f,c));b.push("centerx",d+f/2);b.push("centery",e+c/2)}b.get("legend.enable")&&(b.legend=new a.Legend(a.apply({maxwidth:b.get("client_width"),data:b.data},b.get("legend")),b),b.oneways.push(b.legend));b.push("sub_option.tip.wrap",b.push("tip.wrap",b.shell))}})})(c);c.Custom=c.extend(c.Component,{configure:function(){c.Custom.superclass.configure.apply(this,arguments);this.type="custom";this.set({drawFn:c.emptyFn,configFn:c.emptyFn,eventValid:void 0,animating_draw:!0})},doDraw:function(a){a.get("drawFn").call(a,a)},isEventValid:function(a,b){return c.isFunction(this.get("eventValid"))?this.get("eventValid").call(this,a,b):{valid:!1}},doConfig:function(){c.Custom.superclass.doConfig.call(this);var a=this._();a.A_draw=a.get("animating_draw");a.variable.animation={animating:!1,time:0};a.duration=0;a.get("configFn").call(a,a)}});c.Scale=c.extend(c.Component,{configure:function(){c.Scale.superclass.configure.apply(this,arguments);this.type="scale";this.set({position:"left",which:"h",basic_value:0,scale2grid:!0,distance:void 0,start_scale:0,end_scale:void 0,min_scale:void 0,max_scale:void 0,scale_space:void 0,scale_share:5,scale_enable:!0,scale_size:1,scale_width:4,scale_color:"#333333",scaleAlign:"center",labels:[],label:{},text_space:6,textAlign:"left",decimalsnum:0,join_style:"none",join_size:2});this.registerEvent("parseText")},isEventValid:function(){return{valid:!1}},getScale:function(a){a=[a.get("basic_value"),a.get("start_scale"),a.get("end_scale"),a.get("end_scale")-a.get("start_scale"),0];a[4]=c.inRange(a[1],a[2]+1,a[0])||c.inRange(a[2]-1,a[1],a[0]);return{range:a[4],basic:a[4]?(a[0]-a[1])/a[3]:0,start:a[4]?a[0]:a[1],end:a[2],distance:a[3]}},doDraw:function(a){a.get("scale_enable")&&a.items.each(function(b){a.T.line(b.x0,b.y0,b.x1,b.y1,a.get("scale_size"),a.get("scale_color"),!1)});a.labels.each(function(a){a.draw()})},doLayout:function(a,b,c){c.get("scale_enable")&&c.items.each(function(c){c.x0+=a;c.y0+=b;c.x1+=a;c.y1+=b});c.labels.each(function(c){c.doLayout(a,b,0,c)})},doConfig:function(){c.Scale.superclass.doConfig.call(this);var a=this._(),b=Math.abs,d=a.get("labels").length,e=a.get("min_scale"),f=a.get("max_scale"),g=a.get("scale_space"),j=a.get("end_scale"),k=a.get("start_scale");a.items=[];a.labels=[];a.number=0;if(0<d)a.number=d-1;else{k>e&&(k=a.push("start_scale",c.floor(e)));if(!c.isNumber(j)||j<f)j=c.ceil(f),j=a.push("end_scale",!j&&!k?1:j);g&&b(g)<b(j-k)&&a.push("scale_share",(j-k)/g);a.number=a.push("scale_share",b(a.get("scale_share")));if(!g||g>j-k){g=(j-k+"").indexOf(".")+1;for(b=1;0<g;)g--,b*=10;g=a.push("scale",(j-k)*b/a.get("scale_share")/b)}parseInt(g)!=g&&0==a.get("decimalsnum")&&a.push("decimalsnum",(g+"").substring((g+"").indexOf(".")+1).length)}a.push("distanceOne",a.get("valid_distance")/a.number);var l,p,m,r=f=e=b=j=0,o=0;l=a.get("scale_width");p=l/2;m=a.get("scaleAlign");var t=a.get("position"),q=a.get("text_space"),v="",i=a.get("coo").get("axis.width");a.push("which",a.get("which").toLowerCase());a.isH="h"==a.get("which");a.isH?(m==a.O?f=-l:m==a.C?(f=-p,b=p):b=l,t==a.O?(o=-q-i[0],v=a.B):(o=q+i[2],v=a.O),t=a.C):(m==a.L?e=-l:m==a.C?(e=-p,j=p):j=l,v="middle",t==a.R)?(t=a.L,r=q+i[1]):(t=a.R,r=-q-i[3]);for(q=0;q<=a.number;q++)l=d?a.get("labels")[q]:(g*q+k).toFixed(a.get("decimalsnum")),p=a.isH?a.get("valid_x")+q*a.get("distanceOne"):a.x,m=a.isH?a.y:a.get("valid_y")+a.get("valid_distance")-q*a.get("distanceOne"),a.items.push({x:p,y:m,x0:p+e,y0:m+f,x1:p+j,y1:m+b}),a.get("label")&&a.labels.push(new c.Text(c.applyIf(c.apply(a.get("label"),c.merge({text:l,x:p,y:m,originx:p+r,originy:m+o},a.fireEvent(a,"parseText",[l,p+r,m+o,q,a.number==q]))),{textAlign:t,textBaseline:v}),a))}});c.Coordinate={coordinate_:function(a){var b=this._(),d=b.get("coordinate");if(d.ICHARTJS_OBJECT)return b.x=b.push(b.X,d.x),b.y=b.push(b.Y,d.y),b.ILLUSIVE_COO=!0,d;var d=c.parsePercent,e=b.get("coordinate.scale"),f=b.get("scaleAlign"),g=b.push("coordinate._width",d(b.get("coordinate.width")||"85%",Math.floor(b.get("client_width"))));h=b.push("coordinate._height",d(b.get("coordinate.height")||"85%",Math.floor(b.get("client_height")))-(b.is3D()?(b.get("coordinate.pedestal_height")||22)+(b.get("coordinate.board_deep")||20):0));b.push("coordinate.valid_height_value",d(b.get("coordinate.valid_height"),h));b.push("coordinate.valid_width_value",d(b.get("coordinate.valid_width"),g));b.originXY(b,[b.get("l_originx"),b.get("r_originx")-g,b.get("centerx")-g/2],[b.get("centery")-h/2]);b.push("coordinate.originx",b.x);b.push("coordinate.originy",b.y);a&&a();c.isObject(e)&&(e=[e]);if(c.isArray(e)){var j="stacked"!=b.dataType;e.each(function(a){b.get("percent")&&a.position==f&&(a=c.apply(a,{start_scale:0,end_scale:100,scale_space:10,listeners:{parseText:function(a){return{text:a+"%"}}}}));if(!a.start_scale||j&&a.start_scale>b.get("minValue"))a.min_scale=b.get("minValue");if(!a.end_scale||j&&a.end_scale<b.get("maxValue"))a.max_scale=b.get("maxValue")})}else b.push("coordinate.scale",{position:f,scaleAlign:f,max_scale:b.get("maxValue"),min_scale:b.get("minValue")});b.is3D()&&(b.push("coordinate.xAngle_",b.get("xAngle_")),b.push("coordinate.yAngle_",b.get("yAngle_")),b.push("coordinate.zHeight",b.get("zHeight")*b.get("bottom_scale")));b.remove(b,b.coo);return b.register(new (c[b.is3D()?"Coordinate3D":"Coordinate2D"])(b.get("coordinate"),b))}};c.Coordinate2D=c.extend(c.Component,{configure:function(){c.Coordinate2D.superclass.configure.apply(this,arguments);this.type="coordinate2d";this.set({sign_size:12,sign_space:5,scale:[],width:"85%",height:"85%",valid_width:"100%",valid_height:"100%",grid_line_width:1,grid_color:"#dbe1e1",gridHStyle:{},gridVStyle:{},gridlinesVisible:!0,scale2grid:!0,grids:void 0,ignoreOverlap:!0,ignoreEdge:!1,xlabel:"",ylabel:"",background_color:0,striped:!0,striped_direction:"v",striped_factor:0.01,crosshair:{enable:!1},z_index:-1,axis:{enable:!0,color:"#666666",width:1}});this.scale=[];this.gridlines=[]},getScale:function(a,b){for(var c=this._(),e=0;e<c.scale.length;e++)if(c.scale[e].get("position")==a)return c.scale[e].getScale(c.scale[e]);if(!b)return a=a==c.L?c.R:a==c.R?c.L:a==c.O?c.B:c.O,c.getScale(a,!0);throw Error("there no valid scale");},isEventValid:function(a,b){return{valid:a.x>b.x&&a.x<b.x+b.width&&a.y<b.y+b.height&&a.y>b.y}},doDraw:function(a){a.T.box(a.x,a.y,a.width,a.height,0,a.get("f_color"));if(a.get("striped")){var b,d,e=!1;a.get("axis.width");var f=c.dark(a.get("background_color"),a.get("striped_factor"),0)}var g="v"==a.get("striped_direction");a.gridlines.each(function(c){a.get("striped")&&(e&&(g?a.T.box(c.x1,c.y1+c.width,c.x2-c.x1,d-c.y1-c.width,0,f):a.T.box(b+c.width,c.y2,c.x1-b,c.y1-c.y2,0,f)),b=c.x1,d=c.y1,e=!e)}).each(function(b){b.overlap||(b.solid?a.T.line(b.x1,b.y1,b.x2,b.y2,b.width,b.color):a.T.dotted(b.x1,b.y1,b.x2,b.y2,b.width,b.color,b.size,b.fator))});a.T.box(a.x,a.y,a.width,a.height,a.get("axis"),!1,a.get("shadow"),!0);a.scale.each(function(a){a.draw()})},destroy:function(){this.crosshair&&this.crosshair.destroy()},doCrosshair:function(a){a.get("crosshair.enable")&&!a.crosshair&&(a.push("crosshair.wrap",a.root.shell),a.push("crosshair.height",a.height),a.push("crosshair.width",a.width),a.push("crosshair.top",a.y),a.push("crosshair.left",a.x),a.crosshair=new c.CrossHair(a.get("crosshair"),a))},doConfig:function(){c.Coordinate2D.superclass.doConfig.call(this);var a=this._();a.atomic=!1;a.width=a.get("_width");a.height=a.get("_height");a.valid_width=a.get("valid_width_value");a.valid_height=a.get("valid_height_value");a.get("gradient")&&c.isString(a.get("f_color"))&&a.push("f_color",a.T.avgLinearGradient(a.x,a.y,a.x,a.y+a.height,[a.get("dark_color"),a.get("light_color")]));if(a.get("axis.enable")){var b=a.get("axis.width");c.isArray(b)||a.push("axis.width",[b,b,b,b])}else a.push("axis.width",[0,0,0,0]);a.doCrosshair(a);var d,e=(b=!(!a.get("gridlinesVisible")||!a.get("grids")))&&!!a.get("grids.horizontal"),f=b&&!!a.get("grids.vertical"),g=a.height,j=a.width,k=a.valid_width,l=a.valid_height,b=a.get("gridlinesVisible")&&a.get("scale2grid")&&!(e&&f),p=a.push("x_start",a.x+(j-k)/2),m=a.push("y_start",a.y+(g-l)/2),r=a.get("axis.width");a.push("x_end",a.x+(j+k)/2);a.push("y_end",a.y+(g+l)/2);c.isArray(a.get("scale"))||(c.isObject(a.get("scale"))?a.push("scale",[a.get("scale")]):a.push("scale",[]));a.get("scale").each(function(b){d=(d=b.position)||a.L;d=d.toLowerCase();b[a.X]=a.x;b.coo=a;b[a.Y]=a.y;b.valid_x=p;b.valid_y=m;b.position=d;d==a.O?(b.which="h",b.distance=j,b.valid_distance=k):d==a.R?(b.which="v",b.distance=g,b.valid_distance=l,b[a.X]+=j,b.valid_x+=k):d==a.B?(b.which="h",b.distance=j,b.valid_distance=k,b[a.Y]+=g,b.valid_y+=l):(b.which="v",b.distance=g,b.valid_distance=l);a.scale.push(new c.Scale(b,a.root))},a);var o=a.push("ignoreOverlap",a.get("ignoreOverlap")&&a.get("axis.enable")||a.get("ignoreEdge"));if(o)var t=a.get("ignoreEdge")?function(b,c,d){return"v"==b?d==a.y||d==a.y+g:c==a.x||c==a.x+b}:function(b,c,d){return"v"==b?d==a.y&&0<r[0]||d==a.y+g&&0<r[2]:c==a.x&&0<r[3]||c==a.x+j&&0<r[1]};var q={solid:!0,size:10,fator:1,width:a.get("grid_line_width"),color:a.get("grid_color")},v=c.applyIf(a.get("gridHStyle"),q),i=c.applyIf(a.get("gridVStyle"),q);if(b){var u,y,w;a.scale.each(function(b){w=b.get("position");if(!c.isFalse(b.get("scale2grid"))&&!(e&&"v"==b.get("which")||f&&"h"==b.get("which")))u=y=0,w==a.O?y=g:w==a.R?u=-j:w==a.B?y=-g:u=j,b.items.each(function(d){o&&a.gridlines.push(c.applyIf({overlap:t.call(a,b.get("which"),d.x,d.y),x1:d.x,y1:d.y,x2:d.x+u,y2:d.y+y},b.isH?i:v))})})}if(f){var x=a.get("grids.vertical");c.Assert.isTrue(0<x.value,"vertical value");b=j/x.value;q=x.value;"given_value"==x.way&&(q=b,b=x.value,b=b>j?j:b);for(x=0;x<=q;x++)o&&a.gridlines.push(c.applyIf({overlap:t.call(a,"h",a.x+x*b,a.y),x1:a.x+x*b,y1:a.y,x2:a.x+x*b,y2:a.y+g,H:!1,width:i.width,color:i.color},i))}if(e){x=a.get("grids.horizontal");c.Assert.isTrue(0<x.value,"horizontal value");b=g/x.value;q=x.value;"given_value"==x.way&&(q=b,b=x.value,b=b>g?g:b);for(x=0;x<=q;x++)o&&a.gridlines.push(c.applyIf({overlap:t.call(a,"v",a.x,a.y+x*b),x1:a.x,y1:a.y+x*b,x2:a.x+j,y2:a.y+x*b,H:!0,width:v.width,color:v.color},v))}}});c.Coordinate3D=c.extend(c.Coordinate2D,{configure:function(){c.Coordinate3D.superclass.configure.apply(this,arguments);this.type="coordinate3d";this.dimension=c._3D;this.set({xAngle:60,yAngle:20,xAngle_:void 0,yAngle_:void 0,zHeight:0,pedestal_height:22,board_deep:20,left_board:!0,gradient:!0,color_factor:0.18,ignoreEdge:!0,striped:!1,grid_color:"#a4ad96",background_color:"#d6dbd2",shadow_offsetx:4,shadow_offsety:2,wall_style:[],axis:{enable:!1}})},doDraw:function(a){var b=a.width,c=a.height,e=a.get("xAngle_"),f=a.get("yAngle_"),g=a.get("zHeight"),j=a.get("z_offx"),k=a.get("z_offy");a.get("pedestal_height")&&a.T.cube3D(a.x,a.y+c+a.get("pedestal_height"),e,f,!1,b,a.get("pedestal_height"),3*g/2,a.get("axis.enable"),a.get("axis.width"),a.get("axis.color"),a.get("bottom_style"));a.get("board_deep")&&a.T.cube3D(a.x+j,a.y+c-k,e,f,!1,b,c,a.get("board_deep"),a.get("axis.enable"),a.get("axis.width"),a.get("axis.color"),a.get("board_style"));a.T.cube3D(a.x,a.y+c,e,f,!1,b,c,g,a.get("axis.enable"),a.get("axis.width"),a.get("axis.color"),a.get("wall_style"));a.gridlines.each(function(b){b.solid?(a.get("left_board")&&a.T.line(b.x1,b.y1,b.x1+j,b.y1-k,b.width,b.color),a.T.line(b.x1+j,b.y1-k,b.x2+j,b.y2-k,b.width,b.color)):(a.get("left_board")&&a.T.dotted(b.x1,b.y1,b.x1+j,b.y1-k,b.width,b.color,b.size,b.fator),a.T.dotted(b.x1+j,b.y1-k,b.x2+j,b.y2-k,b.width,b.color,b.size,b.fator))});a.scale.each(function(a){a.draw()})},doConfig:function(){c.Coordinate3D.superclass.doConfig.call(this);for(var a=this._(),b=a.get("wall_style"),d=a.get("background_color")||"#d6dbd2",e=a.height,f=a.width,g=a.get("color_factor"),j=a.push("z_offx",a.get("xAngle_")*a.get("zHeight")),k=a.push("z_offy",a.get("yAngle_")*a.get("zHeight"));6>b.length;)b.push({color:d});a.get("left_board")||(b[2]=!1,a.scale.each(function(a){a.doLayout(j,-k,a)}));a.push("bottom_style",[{color:a.get("shadow_color"),shadow:a.get("shadow")},!1,!1,{color:b[3].color},!1,{color:b[3].color}]);a.push("board_style",[!1,!1,!1,{color:b[4].color},{color:b[5].color},!1]);a.get("gradient")&&(c.isString(b[0].color)&&(b[0].color=a.T.avgLinearGradient(a.x,a.y+e,a.x+f,a.y+e,[c.dark(b[0].color,g/2+0.06),c.dark(b[0].color,g/2+0.06)])),c.isString(b[1].color)&&(b[1].color=a.T.avgLinearGradient(a.x+j,a.y-k,a.x+j,a.y+e-k,[c.dark(b[1].color,g),c.light(b[1].color,g)])),c.isString(b[2].color)&&(b[2].color=a.T.avgLinearGradient(a.x,a.y,a.x,a.y+e,[c.light(b[2].color,g/3),c.dark(b[2].color,g)])),a.get("bottom_style")[5].color=a.T.avgLinearGradient(a.x,a.y+e,a.x,a.y+e+a.get("pedestal_height"),[c.light(b[3].color,g/2+0.06),c.dark(b[3].color,g/2,0)]));a.push("wall_style",[b[0],b[1],b[2]])}});c.Rectangle=c.extend(c.Component,{configure:function(){c.Rectangle.superclass.configure.apply(this,arguments);this.type="rectangle";this.set({width:0,height:0,value_space:4,value:"",label:{},name:"",tipAlign:"top",valueAlign:"top",shadow_blur:3,shadow_offsety:-1});this.atomic=!0;this.registerEvent("parseText");this.label=null},last:function(a){a.label&&a.label.draw()},doDraw:function(a){a.drawRectangle()},doConfig:function(){c.Rectangle.superclass.doConfig.call(this);var a=this._(),b=a.variable.event,d=a.get("valueAlign");c.taylor.light(a,b);a.width=a.get(a.W);a.height=a.get(a.H);var b=a.push("centerx",a.x+a.width/2),e=a.push("centery",a.y+a.height/2),f=a.C,g="middle",j=a.get("value_space");d==a.L?(f=a.R,b=a.x-j):d==a.R?(f=a.L,b=a.x+a.width+j):d==a.B?(e=a.y+a.height+j,g=a.O):d==a.O&&(e=a.y-j,g=a.B);a.get("label")&&(a.push("label.originx",b),a.push("label.originy",e),a.push("label.text",a.push("value",a.fireString(a,"parseText",[a,a.get("value")],a.get("value")))),c.applyIf(a.get("label"),{textAlign:f,textBaseline:g,color:a.get("color")}),a.label=new c.Text(a.get("label"),a));a.get("tip.enable")&&("follow"!=a.get("tip.showType")&&a.push("tip.invokeOffsetDynamic",!1),a.tip=new c.Tip(a.get("tip"),a))}});c.Rectangle2D=c.extend(c.Rectangle,{configure:function(){c.Rectangle2D.superclass.configure.apply(this,arguments);this.type="rectangle2d";this.set({shadow_offsety:-2})},drawRectangle:function(){var a=this._();a.T.box(a.get(a.X),a.get(a.Y),a.get(a.W),a.get(a.H),a.get("border"),a.get("f_color"),a.get("shadow"))},isEventValid:function(a,b){return{valid:a.x>b.x&&a.x<b.x+b.width&&a.y<b.y+b.height&&a.y>b.y}},tipInvoke:function(){var a=this._();return function(b,c){return{left:a.tipX(b,c),top:a.tipY(b,c)}}},doConfig:function(){c.Rectangle2D.superclass.doConfig.call(this);var a=this._(),b=a.get("tipAlign");b==a.L||b==a.R?a.tipY=function(b,c){return a.get("centery")-c/2}:a.tipX=function(b){return a.get("centerx")-b/2};b==a.L?a.tipX=function(b){return a.x-a.get("value_space")-b}:b==a.R?a.tipX=function(){return a.x+a.width+a.get("value_space")}:a.tipY=b==a.B?function(){return a.y+a.height+3}:function(b,c){return a.y-c-3};a.applyGradient()}});c.Rectangle3D=c.extend(c.Rectangle,{configure:function(){c.Rectangle3D.superclass.configure.apply(this,arguments);this.type="rectangle3d";this.dimension=c._3D;this.set({zHeight:void 0,xAngle:60,yAngle:20,xAngle_:void 0,yAngle_:void 0,shadow_offsetx:2})},drawRectangle:function(){var a=this._();a.T.cube(a.get(a.X),a.get(a.Y),a.get("xAngle_"),a.get("yAngle_"),a.get(a.W),a.get(a.H),a.get("zHeight"),a.get("f_color"),a.get("border.enable"),a.get("border.width"),a.get("light_color"),a.get("shadow"))},isEventValid:function(a,b){return{valid:a.x>b.x&&a.x<b.x+b.get(b.W)&&a.y<b.y+b.get(b.H)&&a.y>b.y}},tipInvoke:function(){var a=this._();return function(b,c){return{left:a.topCenterX-b/2,top:a.topCenterY-c}}},doConfig:function(){c.Rectangle3D.superclass.doConfig.call(this);var a=this._();a.pushIf("zHeight",a.get(a.W));a.topCenterX=a.x+(a.get(a.W)+a.get(a.W)*a.get("xAngle_"))/2;a.topCenterY=a.y-a.get(a.W)*a.get("yAngle_")/2-a.get("value_space");a.get("valueAlign")==a.O&&a.label&&(a.label.push("textx",a.topCenterX),a.label.push("texty",a.topCenterY))}});c.Sector=c.extend(c.Component,{configure:function(){c.Sector.superclass.configure.apply(this,arguments);this.type="sector";this.set({value:"",name:"",ignored:!1,counterclockwise:!1,startAngle:0,middleAngle:0,endAngle:0,totalAngle:0,bound_event:"click",expand:!1,donutwidth:0,mutex:!1,increment:void 0,label_length:void 0,gradient_mode:"RadialGradientOutIn",mini_label_threshold_angle:15,mini_label:!1,label:{},rounded:!1});this.atomic=!0;this.registerEvent("changed","parseText");this.tip=this.label=null},bound:function(){this.expanded||this.toggle()},rebound:function(){this.expanded&&this.toggle()},toggle:function(){this.fireEvent(this,this.get("bound_event"),[this])},getDimension:function(){var a=this._();return{x:a.x,x:a.y,startAngle:a.get("startAngle"),middleAngle:a.get("middleAngle"),endAngle:a.get("endAngle")}},doDraw:function(a){a.get("ignored")||(a.label&&!a.get("mini_label")&&a.label.draw(),a.drawSector(),a.label&&a.get("mini_label")&&a.label.draw())},doText:function(a,b,d){a.push("label.originx",b);a.push("label.originy",d);a.push("label.textBaseline","middle");a.label=new c.Text(a.get("label"),a)},doLabel:function(a,b,d,e,f,g,j,k){a.push("label.originx",b);a.push("label.originy",d);a.push("label.quadrantd",e);a.push("label.line_points",f);a.push("label.labelx",g);a.push("label.labely",j);a.push("label.smooth",k);a.push("label.angle",a.get("middleAngle")%(2*Math.PI));a.label=new c.Label(a.get("label"),a)},isLabel:function(){return this.get("label")&&!this.get("mini_label")},doConfig:function(){c.Sector.superclass.doConfig.call(this);var a=this._(),b=a.variable.event,d=a.get("label"),e=a.get("bound_event"),f;a.get("rounded")?(a.push("startAngle",0),a.push("endAngle",2*Math.PI)):(c.taylor.light(a,b),a.push("totalAngle",a.get("endAngle")-a.get("startAngle")),d&&(a.get("mini_label")&&(a.get("mini_label_threshold_angle")*Math.PI/180>a.get("totalAngle")?a.push("mini_label",!1):c.apply(a.get("label"),a.get("mini_label"))),a.push("label.text",a.fireString(a,"parseText",[a,a.get("label.text")],a.get("label.text"))),a.pushIf("label.border.color",a.get("border.color")),a.push("label.scolor",a.get("background_color"))),a.variable.event.status=a.expanded=a.get("expand"),a.get("tip.enable")&&("follow"!=a.get("tip.showType")&&a.push("tip.invokeOffsetDynamic",!1),a.tip=new c.Tip(a.get("tip"),a)),b.poped=!1,a.on(e,function(){b.poped=true;a.expanded=!a.expanded;a.redraw(e);b.poped=false}),a.on("beforedraw",function(c,j){if(j==e){f=false;a.x=a.get(a.X);a.y=a.get(a.Y);if(a.expanded)if(a.get("mutex")&&!b.poped){a.expanded=false;f=true}else{a.x=a.x+a.get("inc_x");a.y=a.y-a.get("inc_y")}if(b.status!=a.expanded){a.fireEvent(a,"changed",[a,a.expanded]);f=true;b.status=a.expanded}d&&f&&a.label.doLayout(a.get("inc_x")*(a.expanded?1:-1),-a.get("inc_y")*(a.expanded?1:-1),2,a.label)}return true}))}});c.Sector2D=c.extend(c.Sector,{configure:function(){c.Sector2D.superclass.configure.apply(this,arguments);this.type="sector2d";this.set({radius:0})},drawSector:function(){this.T.sector(this.x,this.y,this.r,this.get("donutwidth"),this.get("startAngle"),this.get("endAngle"),this.get("f_color"),this.get("border.enable"),this.get("border.width"),this.get("border.color"),this.get("shadow"),this.get("counterclockwise"))},isEventValid:function(a,b){if(!b.get("ignored")){if(b.isLabel()&&b.label.isEventValid(a,b.label).valid)return{valid:!0};var d=c.distanceP2P(b.x,b.y,a.x,a.y),e=b.get("donutwidth");if(b.r<d||e&&b.r-e>d)return{valid:!1};if(c.angleInRange(b.get("startAngle"),b.get("endAngle"),c.atan2Radian(b.x,b.y,a.x,a.y)))return{valid:!0}}return{valid:!1}},tipInvoke:function(){var a=this,b=a.get("middleAngle"),d=c.quadrantd(b);return function(e,f){var g=c.p2Point(a.x,a.y,b,0.8*a.r);return{left:1<=d&&2>=d?g.x-e:g.x,top:2<=d?g.y-f:g.y}}},doConfig:function(){c.Sector2D.superclass.doConfig.call(this);var a=this._();a.r=a.get("radius");a.get("donutwidth")>a.r&&a.push("donutwidth",0);a.applyGradient(a.x-a.r,a.y-a.r,1.8*a.r,1.8*a.r);var b=a.get("middleAngle"),d=a.pushIf("increment",c.lowTo(5,a.r/10));a.push("inc_x",d*Math.cos(2*Math.PI-b));a.push("inc_y",d*Math.sin(2*Math.PI-b));d*=2;if(a.get("label"))if(a.get("mini_label"))P2=c.p2Point(a.x,a.y,b,a.get("donutwidth")?a.r-a.get("donutwidth")/2:5*a.r/8),a.doText(a,P2.x,P2.y);else{var e=c.quadrantd(b),f=c.p2Point(a.x,a.y,b,a.r+d),g=c.p2Point(a.x,a.y,b,a.r+0.6*d);P2=c.p2Point(a.x,a.y,b,a.r);a.doLabel(a,P2.x,P2.y,e,[{x:P2.x,y:P2.y},{x:g.x,y:g.y},{x:f.x,y:f.y}],f.x,f.y,0.4*d)}}});c.Sector3D=c.extend(c.Sector,{configure:function(){c.Sector3D.superclass.configure.apply(this,arguments);this.type="sector3d";this.dimension=c._3D;this.set({semi_major_axis:0,semi_minor_axis:0,cylinder_height:0});this.proxy=!0},isEventValid:function(a,b){if(!b.get("ignored")){if(b.isLabel()&&b.label.isEventValid(a,b.label).valid)return{valid:!0};if(!c.inEllipse(a.x-b.x,a.y-b.y,b.a,b.b))return{valid:!1};if(c.angleZInRange(b.sA,b.eA,c.atan2Radian(b.x,b.y,a.x,a.y)))return{valid:!0}}return{valid:!1}},p2p:function(a,b,c,e){return{x:a+this.a*Math.cos(c)*e,y:b+this.b*Math.sin(c)*e}},tipInvoke:function(){var a=this,b=a.get("middleAngle"),d=c.quadrantd(b);return function(c,f){var g=a.p2p(a.x,a.y,b,0.6);return{left:2<=d&&3>=d?g.x-c:g.x,top:3<=d?g.y-f:g.y}}},doConfig:function(){c.Sector3D.superclass.doConfig.call(this);var a=this._(),b=a.get("counterclockwise"),d=a.get("middleAngle");a.a=a.get("semi_major_axis");a.b=a.get("semi_minor_axis");a.h=a.get("cylinder_height");c.Assert.isTrue(0<=a.a*a.b,"major&minor");var e=2*Math.PI,f=function(d){for(;0>d;)d+=e;return Math.abs(c.atan2Radian(0,0,a.a*Math.cos(d),b?-a.b*Math.sin(d):a.b*Math.sin(d)))},g=a.pushIf("increment",c.lowTo(5,a.a/10));a.sA=f.call(a,a.get("startAngle"));a.eA=f.call(a,a.get("endAngle"));a.mA=f.call(a,d);a.push("inc_x",g*Math.cos(e-a.mA));a.push("inc_y",g*Math.sin(e-a.mA));g*=2;if(a.get("label"))if(a.get("mini_label"))g=a.p2p(a.x,a.y,d,0.5),a.doText(a,g.x,g.y);else{var f=c.quadrantd(d),j=a.p2p(a.x,a.y,d,g/a.a+1),k=a.p2p(a.x,a.y,d,0.6*g/a.a+1),d=a.p2p(a.x,a.y,d,1);a.doLabel(a,d.x,d.y,f,[{x:d.x,y:d.y},{x:k.x,y:k.y},{x:j.x,y:j.y}],j.x,j.y,0.4*g)}}});c.Pie=c.extend(c.Chart,{configure:function(){c.Pie.superclass.configure.call(this);this.type="pie";this.set({radius:"100%",offset_angle:0,separate_angle:0,bound_event:"click",counterclockwise:!1,intellectLayout:!0,layout_distance:4,pop_animate:!1,mutex:!1,increment:void 0,sub_option:{label:{}}});this.registerEvent("bound","rebound");this.sectors=[];this.components.push(this.sectors);this.ILLUSIVE_COO=!0},toggle:function(a){this.sectors[a||0].toggle()},bound:function(a){this.sectors[a||0].bound()},rebound:function(a){this.sectors[a||0].rebound()},getSectors:function(){return this.sectors},doAnimation:function(a,b,c){var e=0,f=c.oA;c.sectors.each(function(g){e=c.animationArithmetic(a,0,g.get("totalAngle"),b);g.push("startAngle",f);g.push("endAngle",f+=e);c.is3D()||g.drawSector()});c.is3D()&&c.proxy.drawSector()},parse:function(a){a.data.each(function(b,c){a.doParse(a,b,c)},a);a.localizer(a)},doParse:function(a,b,c){var e=b.name+" "+a.getPercent(b.value);a.doActing(a,b,null,c,e);a.push("sub_option.id",c);a.get("sub_option.label")&&a.push("sub_option.label.text",e);a.push("sub_option.listeners.changed",function(b,c){a.fireEvent(a,c?"bound":"rebound",[a,b.get("name")])});a.sectors.push(a.doSector(a,b))},doSector:function(a){return new c[a.sub](a.get("sub_option"),a)},dolayout:function(a,b,d,e,f,g){if(a.is3D()?c.inEllipse(a.get(a.X)-b,a.topY-d,a.a,a.b):c.distanceP2P(a.get(a.X),a.topY,b,d)<a.r)d=a.topY-d,e.push("labelx",a.get(a.X)+(2*Math.sqrt(a.r*a.r-d*d)+f)*(0==g||3==g?1:-1)),e.localizer(e)},localizer:function(a){if(a.get("intellectLayout")){var b=[],c=[],e=a.get("layout_distance"),f,g,j;a.sectors.each(function(a){a.isLabel()&&b.push(a.label)});b.sor(function(a,b){return 0<Math.abs(Math.sin(a.get("angle")))-Math.abs(Math.sin(b.get("angle")))});b.each(function(b){c.each(function(c){g=c.labelx;j=c.labely;if(b.labely<=j&&j-b.labely-1<b.get(a.H)||b.labely>j&&b.labely-j-1<c.get(a.H))if(b.labelx<=g&&g-b.labelx<b.get(a.W)||b.labelx>g&&b.labelx-g<c.get(a.W))f=b.get("quadrantd"),b.push("labely",b.get("labely")+j-b.labely+(b.get(a.H)+e)*(1<f?-1:1)),b.localizer(b),a.dolayout(a,b.get("labelx"),b.get("labely")+b.get(a.H)/2*(2>f?-1:1),b,e,f)},a);c.push(b)})}},doConfig:function(){c.Pie.superclass.doConfig.call(this);var a=this._(),b,d=a.get("radius"),e=a.get("sub_option.label")?0.35:0.44,f=2*Math.PI;a.sub=a.is3D()?"Sector3D":"Sector2D";a.sectors.zIndex=a.get("z_index");a.sectors.length=0;a.oA=c.angle2Radian(a.get("offset_angle"))%f;a.is3D()&&(e+=0.06);var g=a.data.length,j=c.angle2Radian(c.between(0,90,a.get("separate_angle"))),k=f-j,j=j/g,l=a.oA+j,p=l;0==a.total&&(b=1/g);a.data.each(function(c,d){l+=(b||c.value/a.total)*k;d==g-1&&(l=f+a.oA);c.startAngle=p;c.endAngle=l;c.totalAngle=l-p;c.middleAngle=(p+l)/2;p=l+j},a);a.r=d=c.parsePercent(d,Math.floor(a.get("minDistance")*e));a.topY=a.originXY(a,[d+a.get("l_originx"),a.get("r_originx")-d,a.get("centerx")],[a.get("centery")]).y;c.apply(a.get("sub_option"),c.clone([a.X,a.Y,"bound_event","mutex","increment"],a.options))}});c.Pie2D=c.extend(c.Pie,{configure:function(){c.Pie2D.superclass.configure.call(this);this.type="pie2d"},doConfig:function(){c.Pie2D.superclass.doConfig.call(this);var a=this._();a.push("sub_option.radius",a.r);a.parse(a)}});c.register("Pie2D");c.Pie3D=c.extend(c.Pie,{configure:function(){c.Pie3D.superclass.configure.apply(this,arguments);this.type="pie3d";this.dimension=c._3D;this.set({zRotate:45,yHeight:30});this.positive=!0},doSector:function(a,b){a.push("sub_option.cylinder_height",b.cylinder_height?b.cylinder_height*a.get("zRotate_"):a.get("cylinder_height"));return new c[a.sub](a.get("sub_option"),a)},one:function(a){var b,d,e=[],f=a.get("counterclockwise"),g=function(a,b){return 1+Math.sin(b?a+Math.PI:a)},j;lay=function(a,d,e,f){j=c.quadrantd(d);(a&&(0==j||3==j)||!a&&(2==j||1==j))&&b.push({g:d,z:d==e,x:f.x,y:f.y,a:f.a,b:f.b,color:c.dark(f.get("background_color")),h:f.h,F:f})};a.proxy=new c.Custom({z_index:a.get("z_index")+1,drawFn:function(){this.drawSector();e=[];a.sectors.each(function(a){a.get("label")&&(a.expanded?e.push(a.label):a.label.draw())});e.each(function(a){a.draw()})}});a.proxy.drawSector=function(){a.sectors.each(function(b){a.T.ellipse(b.x,b.y+b.h,b.a,b.b,b.get("startAngle"),b.get("endAngle"),0,b.get("border.enable"),b.get("border.width"),b.get("border.color"),b.get("shadow"),f,!0)},a);b=[];d=[];a.sectors.each(function(a){lay(f,a.get("startAngle"),a.get("endAngle"),a);lay(!f,a.get("endAngle"),a.get("startAngle"),a);d=d.concat(c.visible(a.get("startAngle"),a.get("endAngle"),a))},a);b.sor(function(a,b){var c=g(a.g)-g(b.g);return 0==c?a.z:0<c});b.each(function(b){a.T.sector3D.layerDraw.call(a.T,b.x,b.y,b.a+0.5,b.b+0.5,f,b.h,b.g,b.color)},a);a.processAnimation||d.sor(function(a,b){return 0>g((a.s+a.e)/2,1)-g((b.s+b.e)/2,1)});d.each(function(b){a.T.sector3D.sPaint.call(a.T,b.f.x,b.f.y,b.f.a,b.f.b,b.s,b.e,f,b.f.h,b.f.get("f_color"))},a);a.sectors.each(function(b){a.T.ellipse(b.x,b.y,b.a,b.b,b.get("startAngle"),b.get("endAngle"),b.get("f_color"),b.get("border.enable"),b.get("border.width"),b.get("border.color"),!1,!1,!0)},a)};a.one=c.emptyFn},doConfig:function(){c.Pie3D.superclass.doConfig.call(this);var a=this._(),b=c.angle2Radian(a.get("zRotate"));a.push("cylinder_height",a.get("yHeight")*a.push("zRotate_",Math.abs(Math.cos(b))));a.a=a.push("sub_option.semi_major_axis",a.r);a.b=a.push("sub_option.semi_minor_axis",a.r*Math.abs(Math.sin(b)));a.topY=a.push("sub_option.originy",a.get(a.Y)-a.get("yHeight")/2);a.parse(a);a.one(a);a.components.push(a.proxy)}});c.register("Pie3D");c.Donut2D=c.extend(c.Pie,{configure:function(){c.Donut2D.superclass.configure.call(this);this.type="donut2d";this.set({donutwidth:0.3,center:{text:"",line_height:24,fontweight:"bold",fontsize:24}})},doConfig:function(){c.Donut2D.superclass.doConfig.call(this);var a=this._(),b=a.r;a.push("sub_option.radius",b);0<a.get("donutwidth")&&(1>a.get("donutwidth")?a.push("donutwidth",Math.floor(b*a.get("donutwidth"))):a.get("donutwidth")>=b&&a.push("donutwidth",0),a.push("sub_option.donutwidth",a.get("donutwidth")));c.isString(a.get("center"))&&a.push("center",c.applyIf({text:a.get("center")},a.default_.center));""!=a.get("center.text")&&(a.push("center.originx",a.get(a.X)),a.push("center.originy",a.get(a.Y)),a.push("center.textBaseline","middle"),a.center=new c.Text(a.get("center"),a),a.components.push(a.center));a.parse(a)}});c.register("Donut2D");c.Column=c.extend(c.Chart,{configure:function(){c.Column.superclass.configure.call(this);this.type="column";this.set({coordinate:{},column_width:void 0,column_space:void 0,text_space:6,scaleAlign:"left",sub_option:{},label:{}});this.registerEvent();this.rectangles=[];this.labels=[];this.components.push(this.labels);this.components.push(this.rectangles)},doAnimation:function(a,b,c){var e;c.labels.each(function(a){a.draw()});c.rectangles.each(function(f){e=Math.ceil(c.animationArithmetic(a,0,f.height,b));f.push(c.Y,f.y+(f.height-e));f.push(c.H,e);f.drawRectangle()})},getCoordinate:function(){return this.coo},doLabel:function(a,b,d,e,f){a.labels.push(new c.Text(c.apply(a.get("label"),{id:b,text:d,originx:e,originy:f}),a))},doParse:function(a,b,c,e){a.doActing(a,b,e,c)},engine:function(a){var b=a.get("column_width"),c=a.get("column_space"),e=a.coo.getScale(a.get("scaleAlign")),f=a.coo.valid_height,g=b/2,j=b*(a.get("group_fator")||0),k="complex"!=a.dataType?b+c:a.data.length*b+c+(a.is3D()?(a.data.length-1)*j:0),l=a.coo.get("y_end"),p=l-e.basic*f-(a.is3D()?a.get("zHeight")*(a.get("bottom_scale")-1)/2*a.get("yAngle_"):0),m=c+a.coo.get("x_start"),l=l+a.get("text_space")+a.coo.get("axis.width")[2];a.doEngine(a,b,c,e,f,g,j,k,m,p,l)},doConfig:function(){c.Column.superclass.doConfig.call(this);var a=this._();a.sub=a.is3D()?"Rectangle3D":"Rectangle2D";a.rectangles.length=0;a.labels.length=0;a.rectangles.zIndex=a.get("z_index");a.labels.zIndex=a.get("z_index")+1;a.coo=c.Coordinate.coordinate_.call(a,function(){var b=a.data.length,c=a.get("coordinate.valid_width_value"),e,f,g;"complex"==a.dataType?(g=a.get("labels").length,b=g*b+(a.is3D()?(b-1)*g*a.get("group_fator"):0),e=Math.floor(c/(g+1+b)),f=a.pushIf("column_width",e),g+=1):("stacked"==a.dataType&&(b=a.get("labels").length),e=Math.floor(2*c/(3*b+1)),f=a.pushIf("column_width",e),g=b+1);f*b>c&&(f=a.push("column_width",e));a.push("column_space",(c-f*b)/g);a.is3D()&&(a.push("zHeight",a.get("column_width")*a.get("zScale")),a.push("sub_option.zHeight",a.get("zHeight")),a.push("sub_option.xAngle_",a.get("xAngle_")),a.push("sub_option.yAngle_",a.get("yAngle_")))});a.push("sub_option.width",a.get("column_width"))}});c.Column2D=c.extend(c.Column,{configure:function(){c.Column2D.superclass.configure.call(this);this.type="column2d"},doEngine:function(a,b,d,e,f,g,j,k,l,p,m){var r;a.data.each(function(b,d){r=(b.value-e.start)*f/e.distance;a.doParse(a,b,d,{id:d,originx:l+d*k,originy:p-(0<r?r:0),height:Math.abs(r)});a.rectangles.push(new c[a.sub](a.get("sub_option"),a));a.doLabel(a,d,b.name,l+k*d+g,m)},a)},doConfig:function(){c.Column2D.superclass.doConfig.call(this);this.engine(this)}});c.register("Column2D");c.Column3D=c.extend(c.Column2D,{configure:function(){c.Column3D.superclass.configure.call(this);this.type="column3d";this.dimension=c._3D;this.set({coordinate:{},xAngle:60,yAngle:20,zScale:1,bottom_scale:1.4})},doConfig:function(){c.Column3D.superclass.doConfig.call(this)}});c.register("Column3D");c.ColumnMulti2D=c.extend(c.Column,{configure:function(){c.ColumnMulti2D.superclass.configure.call(this);this.type="columnmulti2d";this.dataType="complex";this.set({labels:[]})},doEngine:function(a,b,d,e,f,g,j,k,l,p,m){var r;a.columns.each(function(g,t){g.item.each(function(d,g){r=(d.value-e.start)*f/e.distance;a.doParse(a,d,g,{id:t+"_"+g,originx:l+g*(b+j)+t*k,originy:p-(0<r?r:0),height:Math.abs(r)});a.rectangles.push(new c[a.sub](a.get("sub_option"),a))},a);a.doLabel(a,t,g.name,l-0.5*d+(t+0.5)*k,m)},a)},doConfig:function(){c.ColumnMulti2D.superclass.doConfig.call(this);this.engine(this)}});c.register("ColumnMulti2D");c.ColumnMulti3D=c.extend(c.ColumnMulti2D,{configure:function(){c.ColumnMulti3D.superclass.configure.call(this);this.type="columnmulti3d";this.dataType="complex";this.dimension=c._3D;this.set({xAngle:60,yAngle:20,zScale:1,group_fator:0.3,bottom_scale:1.4})},doConfig:function(){c.ColumnMulti3D.superclass.doConfig.call(this)}});c.register("ColumnMulti3D");c.ColumnStacked2D=c.extend(c.Column,{configure:function(){c.ColumnStacked2D.superclass.configure.call(this);this.type="columnstacked2d";this.dataType="stacked";this.set({percent:!1,labels:[],sub_option:{label:{color:"#ffffff"},valueAlign:"middle"}})},doEngine:function(a,b,d,e,f,g,j,k,l,p,m){var r,o,t,q=a.get("percent");a.columns.each(function(b,g){r=0;t=q?100/b.total:1;b.item.each(function(d,j){o=(d.value*t-e.start)*f/e.distance;d.total=b.total;a.doParse(a,d,j,{id:g+"_"+j,originx:l+g*k,originy:p-(0<o?o:0)-r,height:Math.abs(o)});r+=o;a.rectangles.push(new c[a.sub](a.get("sub_option"),a))},a);a.doLabel(a,g,b.name,l-0.5*d+(g+0.5)*k,m)},a)},doConfig:function(){c.ColumnStacked2D.superclass.doConfig.call(this);this.engine(this)}});c.register("ColumnStacked2D");c.ColumnStacked3D=c.extend(c.ColumnStacked2D,{configure:function(){c.ColumnStacked3D.superclass.configure.call(this);this.type="columnstacked3d";this.dataType="stacked";this.dimension=c._3D;this.set({percent:!1,sub_option:{label:{color:"#ffffff"},valueAlign:"middle"},coordinate:{},xAngle:60,yAngle:20,zScale:1,bottom_scale:1.4})},doConfig:function(){c.ColumnStacked3D.superclass.doConfig.call(this)}});c.register("ColumnStacked3D");c.Bar=c.extend(c.Chart,{configure:function(){c.Bar.superclass.configure.call(this);this.type="bar";this.set({coordinate:{striped_direction:"h"},bar_height:void 0,bar_space:void 0,text_space:6,scaleAlign:"bottom",sub_option:{},label:{}})},getCoordinate:function(){return this.coo},doLabel:function(a,b,d,e,f){a.labels.push(new c.Text(c.apply(a.get("label"),{id:b,text:d,textAlign:"right",textBaseline:"middle",originx:e,originy:f}),a))},doParse:function(a,b,c,e){a.doActing(a,b,e,c)},engine:function(a){var b=a.get("bar_height"),c=a.get("bar_space"),e=a.coo.getScale(a.get("scaleAlign")),f=a.coo.valid_width,g=b/2,j="complex"!=a.dataType?b+c:a.data.length*b+c,k=a.coo.get("x_start")+e.basic*f,l=a.coo.get(a.X)-a.get("text_space")-a.coo.get("axis.width")[3],p=a.coo.get("y_start")+c;a.doEngine(a,b,c,e,f,g,j,k,l,p)},doAnimation:function(a,b,c){c.labels.each(function(a){a.draw()});c.rectangles.each(function(e){e.push(c.W,Math.ceil(c.animationArithmetic(a,0,e.width,b)));e.drawRectangle()})},doConfig:function(){c.Bar.superclass.doConfig.call(this);var a=this._();a.rectangles=[];a.labels=[];a.rectangles.zIndex=a.get("z_index");a.labels.zIndex=a.get("z_index")+1;a.components.push(a.labels);a.components.push(a.rectangles);a.coo=c.Coordinate.coordinate_.call(a,function(){var b=a.data.length,c=a.get("coordinate.valid_height_value"),e,f,g;"complex"==a.dataType?(g=a.get("labels").length,b=g*b+(a.is3D()?(b-1)*g*a.get("group_fator"):0),e=Math.floor(c/(g+1+b)),f=a.pushIf("bar_height",e),g+=1):("stacked"==a.dataType&&(b=a.get("labels").length),e=Math.floor(2*c/(3*b+1)),f=a.pushIf("bar_height",e),g=b+1);f*b>c&&(f=a.push("bar_height",e));a.push("bar_space",(c-f*b)/g)});a.push("sub_option.height",a.get("bar_height"));a.push("sub_option.valueAlign",a.R);a.push("sub_option.tipAlign",a.R)}});c.Bar2D=c.extend(c.Bar,{configure:function(){c.Bar2D.superclass.configure.call(this);this.type="bar2d"},doEngine:function(a,b,d,e,f,g,j,k,l,p){var m;a.data.each(function(b,d){m=(b.value-e.start)*f/e.distance;a.doParse(a,b,d,{id:d,originy:p+d*j,width:Math.abs(m),originx:k+(0<m?0:-Math.abs(m))});a.rectangles.push(new c.Rectangle2D(a.get("sub_option"),a));a.doLabel(a,d,b.name,l,p+d*j+g)},a)},doConfig:function(){c.Bar2D.superclass.doConfig.call(this);this.engine(this)}});c.register("Bar2D");c.BarMulti2D=c.extend(c.Bar,{configure:function(){c.BarMulti2D.superclass.configure.call(this);this.type="barmulti2d";this.dataType="complex";this.set({labels:[]})},doEngine:function(a,b,d,e,f,g,j,k,l,p){var m;a.columns.each(function(g,o){g.item.each(function(d,g){m=(d.value-e.start)*f/e.distance;a.doParse(a,d,g,{id:o+"_"+g,originy:p+g*b+o*j,width:Math.abs(m),originx:k+(0<m?0:-Math.abs(m))});a.rectangles.push(new c.Rectangle2D(a.get("sub_option"),a))},a);a.doLabel(a,o,g.name,l,p-0.5*d+(o+0.5)*j)},a)},doConfig:function(){c.BarMulti2D.superclass.doConfig.call(this);this.engine(this)}});c.register("BarMulti2D");c.BarStacked2D=c.extend(c.Bar,{configure:function(){c.BarStacked2D.superclass.configure.call(this);this.type="barstacked2d";this.dataType="stacked";this.set({percent:!1,labels:[],sub_option:{label:{color:"#ffffff"},valueAlign:"middle"}})},doEngine:function(a,b,d,e,f,g,j,k,l,p){var m,r,o,t=a.get("percent");a.columns.each(function(b,g){m=0;o=t?100/b.total:1;b.item.each(function(d,l){r=(d.value*o-e.start)*f/e.distance;d.total=b.total;a.doParse(a,d,l,{id:g+"_"+l,originy:p+g*j,originx:k+(0<r?0:-Math.abs(r))+m,width:Math.abs(r)});m+=r;a.rectangles.push(new c.Rectangle2D(a.get("sub_option"),a))},a);a.doLabel(a,g,b.name,l,p-0.5*d+(g+0.5)*j)},a)},doConfig:function(){c.BarStacked2D.superclass.doConfig.call(this);this.push("sub_option.valueAlign",this.C);this.engine(this)}});c.register("BarStacked2D");c.LineSegment=c.extend(c.Component,{configure:function(){c.LineSegment.superclass.configure.apply(this,arguments);this.type="linesegment";this.set({brushsize:1,intersection:!0,label:{},sign:"round",area_color:null,hollow:!0,hollow_inside:!0,hollow_color:"#FEFEFE",smooth:!1,smoothing:1.5,point_size:6,points:[],keep_with_coordinate:!1,shadow_blur:1,shadow_offsety:1,point_space:0,coordinate:null,event_range_x:0,limit_y:!1,tip_offset:2,event_range_y:0});this.registerEvent("parseText");this.tip=null},drawSegment:function(){var a=this._();a.polygons.each(function(b){a.T.polygon.apply(a.T,b)});a.T.shadowOn(a.get("shadow"));a.lines.each(function(b){a.T.lineArray.apply(a.T,b)});a.intersections.each(function(b){a.sign_plugin?a.sign_plugin_fn.apply(a,b):a.T.round0.apply(a.T,b)});a.get("shadow")&&a.T.shadowOff()},doDraw:function(a){a.drawSegment();a.get("label")&&a.labels.each(function(a){a.draw()})},isEventValid:function(){},tipInvoke:function(){var a=this.x,b=this.get("tip_offset"),c=this.get("point_size")+b,e=this;return function(f,g,j){var k=j.left,j=j.top,k=3>e.tipPosition&&0<k-f-a-b||2<e.tipPosition&&0>k-f-a-b?k-(f+b):k+b,j=0==e.tipPosition%2?j+c:j-g-c;return{left:k,top:j}}},PP:function(a,b,c,e,f,g){a.get("area")&&a.polygons.push([a.get("area_color")||a.get("light_color2"),0,a.get("brushsize"),0,0,a.get("area_opacity"),a.get("smooth")?b:[{x:c,y:e}].concat(b.concat([{x:f,y:g}])),a.get("smooth"),a.get("smoothing")||1.5,[{x:c,y:e},{x:f,y:g}]])},parse:function(a){a.polygons=[];a.lines=[];a.intersections=[];a.labels=[];var b=a.get("points"),d=a.get("intersection"),e=!!a.get("label"),f=[],g=!1,j=a.get("smooth"),k=a.get("smoothing")||1.5,l=a.get("f_color"),p=a.get("brushsize"),m=a.get("point_size");if(d){var r=a.getPlugin("sign"),o=l,t=a.get("hollow_color");a.sign_plugin=c.isFunction(r);a.sign_plugin_fn=r;a.get("hollow_inside")&&(o=t,t=l)}b.each(function(b){b.x_=b.x;b.y_=b.y;!b.ignored&&e&&(a.push("label.originx",b.x),a.push("label.originy",b.y-m/2-1),a.push("label.text",a.fireString(a,"parseText",[a,b.value],b.value)),c.applyIf(a.get("label"),{textBaseline:"bottom",color:a.get("f_color")}),a.labels.push(new c.Text(a.get("label"),a)));b.ignored&&g?(a.lines.push([f,p,l,j,k]),a.PP(a,f,f[0].x,a.y,f[f.length-1].x,a.y),f=[],g=!1):b.ignored||(f.push(b),g=!0);d&&!b.ignored&&a.intersections.push(a.sign_plugin?[a.T,a.get("sign"),b,m,b.color||o,b.hollow_color||t]:a.get("hollow")?[b,m/2-p+1,b.color||o,p+1,b.hollow_color||t]:[b,m/2,b.color||o])});f.length&&(a.lines.push([f,p,l,j,k]),a.PP(a,f,f[0].x,a.y,f[f.length-1].x,a.y))},doConfig:function(){c.LineSegment.superclass.doConfig.call(this);c.Assert.isTrue(0<this.get("point_space"),"point_space");var a=this._(),b=3*a.get("point_size")/2,d=a.get("point_space"),e=a.get("event_range_y"),f=a.get("event_range_x"),g=a.get("tipInvokeHeap"),j=a.get("points"),k=a.get("name");a.parse(a);if(0>=f||f>d/2)f=a.push("event_range_x",d/2);0==e&&(e=a.push("event_range_y",b/2));a.get("tip.enable")&&(a.on("mouseover",function(){g.push(a);a.tipPosition=g.length}).on("mouseout",function(){g.pop()}),a.push("tip.invokeOffsetDynamic",!0),a.tip=new c.Tip(a.get("tip"),a));var l=a.get("coordinate"),p=a.get("limit_y"),m=a.get("keep_with_coordinate"),r=function(a,b,c){return!a.ignored&&Math.abs(b-a.x)<f&&(!p||p&&Math.abs(c-a.y)<e)?true:false},o=function(a){return{valid:true,name:k,value:j[a].value,text:j[a].text,top:j[a].y,left:j[a].x,i:a,hit:true}};a.isEventValid=function(b){if(l&&!l.isEventValid(b,l).valid)return{valid:false};var e=Math.floor((b.x-a.x)/d);if(e<0||e>=j.length-1){e=c.between(0,j.length-1,e);return r(j[e],b.x,b.y)?o(e):{valid:m}}for(var f=e;f<=e+1;f++)if(r(j[f],b.x,b.y))return o(f);return{valid:m}}}});c.Line=c.extend(c.Chart,{configure:function(){c.Line.superclass.configure.call(this);this.type="line";this.set({brushsize:1,coordinate:{axis:{width:[0,0,2,2]}},crosshair:{enable:!1},tipMocker:null,tipMockerOffset:null,scaleAlign:"left",labelAlign:"bottom",labels:[],label_space:6,proportional_spacing:!0,sub_option:{},legend:{sign:"bar"},label:{}});this.registerEvent("parsePoint");this.lines=[];this.components.push(this.lines)},getCoordinate:function(){return this.coo},doConfig:function(){c.Line.superclass.doConfig.call(this);var a=this._(),b=1==a.data.length;a.lines.length=0;a.lines.zIndex=a.get("z_index");var d=a.pushIf("sub_option.keep_with_coordinate",b);a.get("crosshair.enable")&&(a.pushIf("crosshair.hcross",b),a.push("crosshair.invokeOffset",function(b){b=a.lines[0].isEventValid(b);return b.valid?b:d}));a.Combination||(a.push("coordinate.crosshair",a.get("crosshair")),a.pushIf("coordinate.scale",[{position:a.get("scaleAlign"),max_scale:a.get("maxValue")},{position:a.get("labelAlign"),start_scale:1,scale:1,end_scale:a.get("maxItemSize"),labels:a.get("labels"),label:a.get("label")}]));a.coo=c.Coordinate.coordinate_.call(a);a.Combination&&(a.coo.push("crosshair",a.get("crosshair")),a.coo.doCrosshair(a.coo));var e=b=a.coo.valid_width,f=a.get("maxItemSize")-1,g=b/f,j=a.get("point_space");a.get("proportional_spacing")&&(j&&j<g?e=f*j:a.push("point_space",g));a.push("sub_option.width",e);a.push("sub_option.height",a.coo.valid_height);a.push("sub_option.originx",a.coo.get("x_start")+(b-e)/2);a.push("sub_option.originy",a.coo.get("y_end"));if(a.get("tip.enable")&&!a.mocker&&c.isFunction(a.get("tipMocker"))){a.push("sub_option.tip.enable",!1);a.push("tip.invokeOffsetDynamic",!0);var k,l=a.coo.get(a.X),p=a.coo.get(a.Y),m=a.coo.height,r=a.get("tipMockerOffset"),o,t,q,r=c.isNumber(r)?0>r?0:1<r?1:r:null;a.push("tip.invokeOffset",function(a,b,c){if(r!=null)c.top=p+(m-b)*r;else{c.top=c.maxTop-(c.maxTop-c.minTop)/3-b;if(b>m||p>c.top)c.top=p}return{left:c.left-a-l>5?c.left-a-5:c.left+5,top:c.top}});var v=a.get("tip.listeners.parseText");v&&delete a.get("tip.listeners").parseText;a.mocker=new c.Custom({eventValid:function(b){t=a.lines[0].isEventValid(b);t.hit=o!=t.i;if(t.valid){o=t.i;k=[];a.lines.each(function(a,c){q=a.isEventValid(b);if(c==0)t.minTop=t.maxTop=q.top;else{t.minTop=Math.min(t.minTop,q.top);t.maxTop=Math.max(t.maxTop,q.top)}k.push(v?v(null,q.name,q.value,q.text,q.i):q.name+" "+q.value)});t.text=a.get("tipMocker").call(a,k,t.i)||"tipMocker not return"}return t.valid?t:false}});new c.Tip(a.get("tip"),a.mocker);a.register(a.mocker)}a.pushIf("sub_option.area_opacity",a.get("area_opacity"))}});c.LineBasic2D=c.extend(c.Line,{configure:function(){c.LineBasic2D.superclass.configure.call(this);this.type="basicline2d";this.tipInvokeHeap=[]},doAnimation:function(a,b,c){c.lines.each(function(e){e.get("points").each(function(f){f.y=e.y-Math.ceil(c.animationArithmetic(a,0,e.y-f.y_,b))});e.drawSegment()})},doConfig:function(){c.LineBasic2D.superclass.doConfig.call(this);var a=this._(),b,d=a.coo.valid_height,e=a.get("point_space"),f,g,j,k=a.get("sub_option.originx"),l,p;a.push("sub_option.tip.showType","follow");a.push("sub_option.coordinate",a.coo);a.push("sub_option.tipInvokeHeap",a.tipInvokeHeap);a.push("sub_option.point_space",e);a.data.each(function(m){b=a.coo.getScale(m.scaleAlign||a.get("scaleAlign"));l=a.get("sub_option.originy")-b.basic*d;f=[];m.value.each(function(r,o){g=e*o;j=(r-b.start)*d/b.distance;p={x:k+g,y:l-j,value:r,text:m.name+" "+r};c.merge(p,a.fireEvent(a,"parsePoint",[m,r,g,j,o,b]));f.push(p)},a);c.merge(a.get("sub_option"),m);a.push("sub_option.points",f);a.push("sub_option.brushsize",m.linewidth||m.line_width);a.lines.push(new c.LineSegment(a.get("sub_option"),a))},this)}});c.register("LineBasic2D");c.Area2D=c.extend(c.LineBasic2D,{configure:function(){c.Area2D.superclass.configure.call(this);this.type="area2d";this.set({area_opacity:0.3})},doConfig:function(){this.push("sub_option.area",!0);c.Area2D.superclass.doConfig.call(this)}});c.register("Area2D")})(iChart);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"=="function"&&__webpack_require__(155)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});


/***/ }),
/* 160 */
/***/ (function(module, exports) {

(function(r){r.fn.qrcode=function(h){var s;function u(a){this.mode=s;this.data=a}function o(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function q(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var d=0;d<a.length&&0==a[d];)d++;this.num=Array(a.length-d+c);for(var b=0;b<a.length-d;b++)this.num[b]=a[b+d]}function p(a,c){this.totalCount=a;this.dataCount=c}function t(){this.buffer=[];this.length=0}u.prototype={getLength:function(){return this.data.length},
write:function(a){for(var c=0;c<this.data.length;c++)a.put(this.data.charCodeAt(c),8)}};o.prototype={addData:function(a){this.dataList.push(new u(a));this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var a=1,a=1;40>a;a++){for(var c=p.getRSBlocks(a,this.errorCorrectLevel),d=new t,b=0,e=0;e<c.length;e++)b+=c[e].dataCount;
for(e=0;e<this.dataList.length;e++)c=this.dataList[e],d.put(c.mode,4),d.put(c.getLength(),j.getLengthInBits(c.mode,a)),c.write(d);if(d.getLengthInBits()<=8*b)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++)this.modules[d][b]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var d=-1;7>=d;d++)if(!(-1>=a+d||this.moduleCount<=a+d))for(var b=-1;7>=b;b++)-1>=c+b||this.moduleCount<=c+b||(this.modules[a+d][c+b]=
0<=d&&6>=d&&(0==b||6==b)||0<=b&&6>=b&&(0==d||6==d)||2<=d&&4>=d&&2<=b&&4>=b?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,d=0;8>d;d++){this.makeImpl(!0,d);var b=j.getLostPoint(this);if(0==d||a>b)a=b,c=d}return c},createMovieClip:function(a,c,d){a=a.createEmptyMovieClip(c,d);this.make();for(c=0;c<this.modules.length;c++)for(var d=1*c,b=0;b<this.modules[c].length;b++){var e=1*b;this.modules[c][b]&&(a.beginFill(0,100),a.moveTo(e,d),a.lineTo(e+1,d),a.lineTo(e+1,d+1),a.lineTo(e,d+1),a.endFill())}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=j.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var d=0;d<a.length;d++){var b=a[c],e=a[d];if(null==this.modules[b][e])for(var f=-2;2>=f;f++)for(var i=-2;2>=i;i++)this.modules[b+f][e+i]=-2==f||2==f||-2==i||2==i||0==f&&0==i?!0:!1}},setupTypeNumber:function(a){for(var c=
j.getBCHTypeNumber(this.typeNumber),d=0;18>d;d++){var b=!a&&1==(c>>d&1);this.modules[Math.floor(d/3)][d%3+this.moduleCount-8-3]=b}for(d=0;18>d;d++)b=!a&&1==(c>>d&1),this.modules[d%3+this.moduleCount-8-3][Math.floor(d/3)]=b},setupTypeInfo:function(a,c){for(var d=j.getBCHTypeInfo(this.errorCorrectLevel<<3|c),b=0;15>b;b++){var e=!a&&1==(d>>b&1);6>b?this.modules[b][8]=e:8>b?this.modules[b+1][8]=e:this.modules[this.moduleCount-15+b][8]=e}for(b=0;15>b;b++)e=!a&&1==(d>>b&1),8>b?this.modules[8][this.moduleCount-
b-1]=e:9>b?this.modules[8][15-b-1+1]=e:this.modules[8][15-b-1]=e;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var d=-1,b=this.moduleCount-1,e=7,f=0,i=this.moduleCount-1;0<i;i-=2)for(6==i&&i--;;){for(var g=0;2>g;g++)if(null==this.modules[b][i-g]){var n=!1;f<a.length&&(n=1==(a[f]>>>e&1));j.getMask(c,b,i-g)&&(n=!n);this.modules[b][i-g]=n;e--; -1==e&&(f++,e=7)}b+=d;if(0>b||this.moduleCount<=b){b-=d;d=-d;break}}}};o.PAD0=236;o.PAD1=17;o.createData=function(a,c,d){for(var c=p.getRSBlocks(a,
c),b=new t,e=0;e<d.length;e++){var f=d[e];b.put(f.mode,4);b.put(f.getLength(),j.getLengthInBits(f.mode,a));f.write(b)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;if(b.getLengthInBits()>8*a)throw Error("code length overflow. ("+b.getLengthInBits()+">"+8*a+")");for(b.getLengthInBits()+4<=8*a&&b.put(0,4);0!=b.getLengthInBits()%8;)b.putBit(!1);for(;!(b.getLengthInBits()>=8*a);){b.put(o.PAD0,8);if(b.getLengthInBits()>=8*a)break;b.put(o.PAD1,8)}return o.createBytes(b,c)};o.createBytes=function(a,c){for(var d=
0,b=0,e=0,f=Array(c.length),i=Array(c.length),g=0;g<c.length;g++){var n=c[g].dataCount,h=c[g].totalCount-n,b=Math.max(b,n),e=Math.max(e,h);f[g]=Array(n);for(var k=0;k<f[g].length;k++)f[g][k]=255&a.buffer[k+d];d+=n;k=j.getErrorCorrectPolynomial(h);n=(new q(f[g],k.getLength()-1)).mod(k);i[g]=Array(k.getLength()-1);for(k=0;k<i[g].length;k++)h=k+n.getLength()-i[g].length,i[g][k]=0<=h?n.get(h):0}for(k=g=0;k<c.length;k++)g+=c[k].totalCount;d=Array(g);for(k=n=0;k<b;k++)for(g=0;g<c.length;g++)k<f[g].length&&
(d[n++]=f[g][k]);for(k=0;k<e;k++)for(g=0;g<c.length;g++)k<i[g].length&&(d[n++]=i[g][k]);return d};s=4;for(var j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,
78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=j.getBCHDigit(c)-j.getBCHDigit(j.G15);)c^=j.G15<<j.getBCHDigit(c)-j.getBCHDigit(j.G15);return(a<<10|c)^j.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=j.getBCHDigit(c)-
j.getBCHDigit(j.G18);)c^=j.G18<<j.getBCHDigit(c)-j.getBCHDigit(j.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return j.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case 0:return 0==(c+d)%2;case 1:return 0==c%2;case 2:return 0==d%3;case 3:return 0==(c+d)%3;case 4:return 0==(Math.floor(c/2)+Math.floor(d/3))%2;case 5:return 0==c*d%2+c*d%3;case 6:return 0==(c*d%2+c*d%3)%2;case 7:return 0==(c*d%3+(c+d)%2)%2;default:throw Error("bad maskPattern:"+
a);}},getErrorCorrectPolynomial:function(a){for(var c=new q([1],0),d=0;d<a;d++)c=c.multiply(new q([1,l.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case 1:return 10;case 2:return 9;case s:return 8;case 8:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+
a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,b=0;b<c;b++)for(var e=0;e<c;e++){for(var f=0,i=a.isDark(b,e),g=-1;1>=g;g++)if(!(0>b+g||c<=b+g))for(var h=-1;1>=h;h++)0>e+h||c<=e+h||0==g&&0==h||i==a.isDark(b+g,e+h)&&f++;5<f&&(d+=3+f-5)}for(b=0;b<c-1;b++)for(e=0;e<c-1;e++)if(f=0,a.isDark(b,e)&&f++,a.isDark(b+1,e)&&f++,a.isDark(b,e+1)&&f++,a.isDark(b+1,e+1)&&f++,0==f||4==f)d+=3;for(b=0;b<c;b++)for(e=0;e<c-6;e++)a.isDark(b,e)&&!a.isDark(b,e+1)&&a.isDark(b,e+
2)&&a.isDark(b,e+3)&&a.isDark(b,e+4)&&!a.isDark(b,e+5)&&a.isDark(b,e+6)&&(d+=40);for(e=0;e<c;e++)for(b=0;b<c-6;b++)a.isDark(b,e)&&!a.isDark(b+1,e)&&a.isDark(b+2,e)&&a.isDark(b+3,e)&&a.isDark(b+4,e)&&!a.isDark(b+5,e)&&a.isDark(b+6,e)&&(d+=40);for(e=f=0;e<c;e++)for(b=0;b<c;b++)a.isDark(b,e)&&f++;a=Math.abs(100*f/c/c-50)/5;return d+10*a}},l={glog:function(a){if(1>a)throw Error("glog("+a+")");return l.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return l.EXP_TABLE[a]},EXP_TABLE:Array(256),
LOG_TABLE:Array(256)},m=0;8>m;m++)l.EXP_TABLE[m]=1<<m;for(m=8;256>m;m++)l.EXP_TABLE[m]=l.EXP_TABLE[m-4]^l.EXP_TABLE[m-5]^l.EXP_TABLE[m-6]^l.EXP_TABLE[m-8];for(m=0;255>m;m++)l.LOG_TABLE[l.EXP_TABLE[m]]=m;q.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),d=0;d<this.getLength();d++)for(var b=0;b<a.getLength();b++)c[d+b]^=l.gexp(l.glog(this.get(d))+l.glog(a.get(b)));return new q(c,0)},mod:function(a){if(0>
this.getLength()-a.getLength())return this;for(var c=l.glog(this.get(0))-l.glog(a.get(0)),d=Array(this.getLength()),b=0;b<this.getLength();b++)d[b]=this.get(b);for(b=0;b<a.getLength();b++)d[b]^=l.gexp(l.glog(a.get(b))+c);return(new q(d,0)).mod(a)}};p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],
[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,
116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,
43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,
3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,
55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,
45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(a,c){var d=p.getRsBlockTable(a,c);if(void 0==d)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+c);for(var b=d.length/3,e=[],f=0;f<b;f++)for(var h=d[3*f+0],g=d[3*f+1],j=d[3*f+2],l=0;l<h;l++)e.push(new p(g,j));return e};p.getRsBlockTable=function(a,c){switch(c){case 1:return p.RS_BLOCK_TABLE[4*(a-1)+0];case 0:return p.RS_BLOCK_TABLE[4*(a-1)+1];case 3:return p.RS_BLOCK_TABLE[4*
(a-1)+2];case 2:return p.RS_BLOCK_TABLE[4*(a-1)+3]}};t.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,c){for(var d=0;d<c;d++)this.putBit(1==(a>>>c-d-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=Math.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};"string"===typeof h&&(h={text:h});h=r.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,
correctLevel:2,background:"#ffffff",foreground:"#000000"},h);return this.each(function(){var a;if("canvas"==h.render){a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();var c=document.createElement("canvas");c.width=h.width;c.height=h.height;for(var d=c.getContext("2d"),b=h.width/a.getModuleCount(),e=h.height/a.getModuleCount(),f=0;f<a.getModuleCount();f++)for(var i=0;i<a.getModuleCount();i++){d.fillStyle=a.isDark(f,i)?h.foreground:h.background;var g=Math.ceil((i+1)*b)-Math.floor(i*b),
j=Math.ceil((f+1)*b)-Math.floor(f*b);d.fillRect(Math.round(i*b),Math.round(f*e),g,j)}}else{a=new o(h.typeNumber,h.correctLevel);a.addData(h.text);a.make();c=r("<table></table>").css("width",h.width+"px").css("height",h.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",h.background);d=h.width/a.getModuleCount();b=h.height/a.getModuleCount();for(e=0;e<a.getModuleCount();e++){f=r("<tr></tr>").css("height",b+"px").appendTo(c);for(i=0;i<a.getModuleCount();i++)r("<td></td>").css("width",
d+"px").css("background-color",a.isDark(e,i)?h.foreground:h.background).appendTo(f)}}a=c;jQuery(a).appendTo(this)})}})(jQuery);


/***/ })
],[62]);
//# sourceMappingURL=app.d986ad747214f7d6506c.js.map