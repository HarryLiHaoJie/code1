<template>
	<div class="art-list">
		<div class="art-box" v-for="(todo1, index) in todos1" :class="[todo1.select ? activeClass : '']" v-on:click="tab2(todos1,index)">
			<div class="art-title">{{todo1.text}}</div>
			<div v-if="seen" v-html="todo1.text1" class="art-answ">{{todo1.text1}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				activeClass: 'select',
				seen: false,
				todos1: [{
						text: '如何选择理财产品？',
						text1: '新华金典提供多类理财产品，周期从15天—178天不等，可根据自己实际情况选择。',
						select: false
					},
					{
						text: '如何购买理财产品？',
						text1: '1．已注册账户：成功登录新华金典账户，点击“理财产品”按钮，选择心仪的理财产品，点击底部的“立即投资”，输入购买金额并点击“立即支付”，即可完成购买成功。<br/>2．未注册账户：请先注册新华金典账号，并进行实名认证；具体参考注册流程。',
						select: false
					},
					{
						text: '新华金典的理财收益是多少？',
						text1: '根据项目标的不同、周期不同，产品收益不同，具体可下载新华金典官方APP进行了解和购买。',
						select: false
					},
					{
						text: '预估收益如何计算？',
						text1: '预估收益 = 投资总金额×（年化收益率/365）×投资期限（天）',
						select: false
					},
					{
						text: '理财产品什么时候起息？',
						text1: '所购买的产品将在T+1个工作日起息。',
						select: false
					},
					{
						text: '购买理财产品后，我能提前赎回吗？',
						text1: '为了保护投资人的利益，不提供提前赎回。',
						select: false
					},
					{
						text: '购买产品到期后，本金和利息什么时候到新华金典账户？',
						text1: '理财产品到期后，资金T+1个工作日返还到新华金典账户中。',
						select: false
					},
					{
						text: '最低投资额？',
						text1: '根据产品不同，起投金额不同，请参看具体产品。',
						select: false
					},
					{
						text: '为什么我无法进行投资？',
						text1: '若无法进行投资，可能是以下原因：<br/>1.未通过实名认证。<br/>2.未绑定银行卡。<br/>3.账户余额不足。<br/>4.理财产品当前状态为售罄。<br/>5.账户为冻结状态。<br/>若仍有疑问，可致电我司客服。',
						select: false
					}
				]
			}
		},
		methods: {
			tab2: function(todos1, index) {
				/*默认切换类的动作*/
				todos1.forEach(function(el) {
					el.select = false;
				});
//				todos1[index].select = true;
				if (this.seen == false) {
					todos1[index].select = true;
					this.seen = true;
				} else{
					todos1[index].select = false;
					this.seen = false;
				}
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>