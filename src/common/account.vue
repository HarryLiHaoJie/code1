<template>
	<div class="art-list">
		<div class="art-box" v-for="(todo, index) in todos" :class="[todo.select ? activeClass : '']" v-on:click="tab1(todos,index)">
			<div class="art-title">{{todo.text}}</div>
			<div v-if="seen" v-html="todo.text1" class="art-answ">{{todo.text1}}</div>
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
				todos: [{
						text: '如何注册？',
						text1: '点击“我的”页面后，点击“注册送红包”，并填写手机号码，获取验证码，设置登录密码，即可完成注册。',
						select: false
					},
					{
						text: '注册账户时，设置登录密码有什么要求？',
						text1: '密码必须包含数字和英文字母（区分大小写）或符号，至少6位字符，不超过16位字符。',
						select: false
					},
					{
						text: '忘记用户名、密码、怎么办？',
						text1: '用户名即为您的手机号。忘记登录密码，可以登录页面，点击“忘记密码”，按系统提示操作即可。忘记交易密码，可以登录后，在“我的”页面，点击左上角图标，点击修改交易密码，点击下方忘记密码，验证手机后即可修改交易密码。',
						select: false
					},
					{
						text: '交易密码有什么用？',
						text1: '交易密码是为保证用户资金安全而设立密码体系，所有涉及到资金类操作（如充值、提现、购买理财产品），系统都需校验交易密码。所以说交易密码非常重要，切勿将交易密码告知他人并妥善保管。',
						select: false
					},
					{
						text: '为什么要进行实名认证？',
						text1: '为了提高账户安全等级，保障资金的安全性和合同的有效性，客户需在首次充值前完成实名登记,新华金典承诺会对所有用户资料严格保密。',
						select: false
					},
					{
						text: '实名登记时，如果身份证号里含有x，怎么填写？',
						text1: '直接填写X。',
						select: false
					},
					{
						text: '银行卡绑定后是否可更改？',
						text1: '在绑定银行卡后，若要修改请联系客服人员，再重新绑定。但需注意：即将绑定银行卡的开户名需与原实名认证姓名必须一致，否则会导致提现失败。',
						select: false
					},
					{
						text: '注册时手机收不到验证码怎么办？',
						text1: '（1）确认短信是否被手机软件拦截或过滤；   <br/>（2）确认手机是否能正常接收短信（信号问题、欠费、停机等）；<br/> （3）短信收发过程中可能会有延时，请耐心等候。<br/>若排除以上问题仍没有收到，可点击“再次发送”按钮，若仍未解决，请联系我司客服。',
						select: false
					},
					{
						text: '为什么要绑定银行卡？',
						text1: '绑定银行卡是第三方资金托管安全方式中重要的一环，也是实名认证的一种方式，资金流动在绑定银行卡内，对投资者提供了资金安全保障，同时对投资也较为方便。',
						select: false
					},
					{
						text: '支持哪些银行进行实名认证？（仅支持储蓄卡，暂不支持信用卡）？',
						text1: '目前仅支持：工行、农行、建行、中行、交行、兴业、中信、光大、平安、邮政、上海、浦发、民生',
						select: false
					},
					
					{
						text: '为什么会登录失败？',
						text1: '请您核对以下几点，这些可能是导致您登录失败的原因：<br/>（1）请您确认输入的手机号是否正确；<br/>（2）请您确认输入的密码是否正确。如果忘记密码，您可以点击【忘记密码】重新设置；<br/>（3）网络问题也会造成登录失败，如果提示网页有错误，建议您稍后尝试。',
						select: false
					},
					{
						text: '手势密码有什么用？',
						text1: '手势密码为保护用户资金及账户信息安全。建议启用该功能。',
						select: false
					},
					{
						text: '忘记手势密码，怎么办？',
						text1: '如果已进入APP界面，可在手势密码页面，点击忘记手势密码，选择重新登录。待重新登录后，重置手势密码。',
						select: false
					},
					{
						text: '怎么关闭手势密码？',
						text1: '选择“我的”页面，点击左上角图标，在手势密码锁定栏中点击右边开关，开关显示灰色即为关闭。',
						select: false
					},
					{
						text: '绑定账户的银行卡丢失，怎么办？',
						text1: '为了您的资金安全请及时拨打我们客服热线进行解绑操作。',
						select: false
					}
				]
			}
		},
		methods: {
			tab1: function(todos, index) {
				/*默认切换类的动作*/
				todos.forEach(function(el) {
					el.select = false;
				});
//				todos[index].select = true;
				if (this.seen == false) {
					todos[index].select = true;
					this.seen = true;
				} else{
					todos[index].select = false;
					this.seen = false;
				}
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>