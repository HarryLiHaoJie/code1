import Vue from 'vue'
import Router from 'vue-router'
import router from '../router'
import VueWechatTitle from 'vue-wechat-title'
import question from '@/components/question'
import account from '@/common/account'
import matters from '@/common/matters'
import recharge from '@/common/recharge'
import explain from '@/common/explain'
import about from '@/components/about'
import safety from '@/components/safety'
import sign from '@/components/sign'
import integral_detail from '@/components/integral_detail'
import invitation from '@/components/invitation'
import reward_detail from '@/components/reward_detail'
import prompt from '@/components/prompt'
import protocol_service from '@/components/protocol_service'
import service from '@/components/service'
import usagerules from '@/components/usagerules'
import syqxt from '@/components/syqxt'
import goods_agreement from '@/components/goods_agreement'
import car_agreement from '@/components/car_agreement'
import share from '@/components/share'

import config from '../api/config'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/question',
      name: 'question',
      component: question,
      redirect: 'account',
      children: [
      	{
      		path:'/question/account',
      		meta: {
		    		title: '常见问题'
		    	},
      		component:account
      	},
      	{
      		path:'/question/matters',
      		component:matters
      	},
      	{
      		path:'/question/recharge',
      		component:recharge
      	},
      	{
      		path:'/question/explain',
      		component:explain
      	}
      ]
    },{
    	path:'/about',
    	name: 'about',
    	meta: {
    		title: '关于新华金典'
    	},
      component: about,
    },{
    	path:'/safety',
    	name: 'safety',
    	meta: {
    		title: '安全保障'
    	},
      component: safety,
    },{
    	path:'/sign',
    	name: 'sign',
    	meta: {
    		title: '每日签到'
    	},
      component: sign,
    },{
    	path:'/integral_detail',
    	name: 'integral_detail',
    	meta: {
    		title: '积分明细'
    	},
      component: integral_detail,
    },{
    	path:'/invitation',
    	name: 'invitation',
    	meta: {
    		title: '邀请好友 '
    	},
      component: invitation,
    },{
    	path:'/reward_detail',
    	name: 'reward_detail',
    	meta: {
    		title: '奖励列表'
    	},
      component: reward_detail,
    },{
    	path:'/prompt',
    	name: 'prompt',
    	meta: {
    		title: '充值错误代码含义'
    	},
      component: prompt,
    },{
    	path:'/protocol_service',
    	name: 'protocol_service',
    	meta: {
    		title: '服务协议'
    	},
      component: protocol_service,
    },{
    	path:'/service',
    	name: 'service',
    	meta: {
    		title: '注册协议'
    	},
      component: service,
    },{
    	path:'/usagerules',
    	name: 'usagerules',
    	meta: {
    		title: '使用规则'
    	},
      component: usagerules,
    },{
    	path:'/syqxt',
    	name: 'syqxt',
    	meta: {
    		title: '收益曲线'
    	},
      component: syqxt,
    },{
    	path:'/goods_agreement',
    	name: 'goods_agreement',
    	meta: {
    		title: '电子合同'
    	},
      component: goods_agreement,
    },{
    	path:'/car_agreement',
    	name: 'car_agreement',
    	meta: {
    		title: '电子合同'
    	},
      component: car_agreement,
    },{
    	path:'/share',
    	name: 'share',
    	meta: {
    		title: '注册'
    	},
      component: share,
    }

  ]
})
