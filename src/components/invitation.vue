<template>
	<div class="div_bjcolor">
		<div class="mask" v-if="mask" @touchmove.prevent>
			<div class="mask-content">
				<div class="login_bg"><img src="../assets/img/login_bg.png"/></div>
				<span>您还未登录，请先登录！</span>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>
		<!--<div class="cont1">
			<img src="../assets/img/1.png"/>
			<div class="ewm">

			</div>
		</div>
		<div class="cont2">
			<img src="../assets/img/2.png"/>
			<p class="inviteNum">好友扫描二维码即可分享邀请码: <span>{{ invit }}</span></p>
			<p class="peoNum">{{ friend }}</p>
			<p class="money">{{ money }}</p>

			<router-link :to="{ path:'./reward_detail',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }}">
			    <span class="jilu">查看奖励明细>></span>
			</router-link>
		</div>
		<div class="content3">
			<img src="../assets/img/3.png"/>
			<div class="con-bottom">
				<p>*邀请人奖励关系的有效期为：被邀请好友注册后30天，30天后奖励关系自动解除。</p>
				<ul>
					<li>您所赚奖金=好友投资金额x奖励系数</li>
					<li class="clearfix">
						<div class="li-left">
							奖励条件
						</div>
						<div class="li-right">
							奖励系数
						</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资新手专享</div>
						<div class="li-right">0.03%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资月标</div>
						<div class="li-right">0.1%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资半季标</div>
						<div class="li-right">0.13%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资双月标</div>
						<div class="li-right">0.15%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资季标</div>
						<div class="li-right"> 0.2%</div>
					</li>
					<li class="clearfix fon" style="border-bottom: 0;">
						<div class="li-left">投资双季标</div>
						<div class="li-right"> 0.3%</div>
					</li>
				</ul>
				<p style="margin-top: 10px;">例如:您邀请的好友在注册后30天内共投资货押宝双季标10万元，您所获得的奖励是300元  </p>
			</div>
		</div>
		<div class="content4">
			<img src="../assets/img/4.png"/>
			<p>被邀请好友投资成功后，邀请人奖励会显示在【发现】>【邀请好友】>【查看奖励明细】中，当月奖励将于次月10号一次性发放至邀请人的新华金典账户，届时可直接用于投资或提现。</p>
		</div>
		<div class="content5">
			<img style="margin-bottom: 50px;" src="../assets/img/5.png"/>
			<p class="po-1">《中华人民共和国个人所得税法》第三条第四款规定“劳务报酬所得，适用比例税率，税率为百分之二十。对劳务报酬所得一次收入畸高的，可以实行加成征收，具体办法有国务院规定。”</p>
			<p class="po-2">邀请人奖励将会根据平台的运营情况进行相应的调整，届时以公告通知为准。</p>
			<p class="po-3">本活动最终解释权为新华金典财富管理所有。</p>
		</div>-->

		<!--/*********2017.8.4邀请好友*******/-->
		<div class="cont1">
			<img src="../assets/img/1/1.png"/>
			<div class="ewm">

			</div>
		</div>
			<div class="cont2" style="margin-top: -1px">
			<!--<img src="../assets/img/yaoqing2.png"/>-->
			<!--&lt;!&ndash;<p class="inviteNum">好友扫描二维码即可分享邀请码: <span>{{ invit }}</span></p>&ndash;&gt;-->
			<div style="float: left;margin-left: 10px;margin-top: 60px;">
				<img src="../assets/img/1/2.png" style="width: 170px;"/>
			</div>
			<div style="float: left;margin-left: 10px;margin-top: 60px;">
				<img src="../assets/img/1/3.png" style="width: 170px;"/>
			</div>
			<p class="peoNum" style="left: 10%;top: 42%">{{ friend }}</p>
			<p class="money" style="left: 58%;top: 42%">{{ money }}</p>

			<router-link :to="{ path:'./reward_detail',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }}">
			    <span class="jilu"><img src="../assets/img/1/0.png"/></span>
			</router-link>
		</div>
		<div class="content3" style="margin-top: -1px">
			<img src="../assets/img/1/4.png"/>
			<!--<div class="con-bottom">-->
				<!--<p>*邀请人奖励关系的有效期为：被邀请好友注册后30天，30天后奖励关系自动解除。</p>-->
				<!--<ul>-->
					<!--<li>您所赚奖金=好友投资金额x奖励系数</li>-->
					<!--<li class="clearfix">-->
						<!--<div class="li-left">-->
							<!--奖励条件-->
						<!--</div>-->
						<!--<div class="li-right">-->
							<!--奖励系数-->
						<!--</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon">-->
						<!--<div class="li-left">投资新手专享</div>-->
						<!--<div class="li-right">0.03%</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon">-->
						<!--<div class="li-left">投资月标</div>-->
						<!--<div class="li-right">0.1%</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon">-->
						<!--<div class="li-left">投资半季标</div>-->
						<!--<div class="li-right">0.13%</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon">-->
						<!--<div class="li-left">投资双月标</div>-->
						<!--<div class="li-right">0.15%</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon">-->
						<!--<div class="li-left">投资季标</div>-->
						<!--<div class="li-right"> 0.2%</div>-->
					<!--</li>-->
					<!--<li class="clearfix fon" style="border-bottom: 0;">-->
						<!--<div class="li-left">投资双季标</div>-->
						<!--<div class="li-right"> 0.3%</div>-->
					<!--</li>-->
				<!--</ul>-->
				<!--<p style="margin-top: 10px;">例如:您邀请的好友在注册后30天内共投资货押宝双季标10万元，您所获得的奖励是300元  </p>-->
			<!--</div>-->
		</div>
		<div class="content4" style="margin-top: -1px">
			<img src="../assets/img/1/5.png"/>
			<!--<p>被邀请好友投资成功后，邀请人奖励会显示在【发现】>【邀请好友】>【查看奖励明细】中，当月奖励将于次月10号一次性发放至邀请人的新华金典账户，届时可直接用于投资或提现。</p>-->
		</div>
		<!--<div class="content5" style="height:390px;">-->
			<!--<img style="margin-bottom: 50px;" src="../assets/img/yaoqing5.png"/>-->
			<!--<p class="po-1">《中华人民共和国个人所得税法》第三条第四款规定“劳务报酬所得，适用比例税率，税率为百分之二十。对劳务报酬所得一次收入畸高的，可以实行加成征收，具体办法有国务院规定。”</p>-->
			<!--<p class="po-2">邀请人奖励将会根据平台的运营情况进行相应的调整，届时以公告通知为准。</p>-->
			<!--<p class="po-3">本活动最终解释权为新华金典所有。</p>-->
		<!--</div>-->

		</div>
</template>

<script>

	export default {
		name: 'hello',
		data: function() {
			return {
				invit: '',
				friend: '',
				money: '',
				mask: false,
				dis: false
			}
		},
		created: function() {
			this.invitation(); //定义方法
		},
		mounted: function () {    //钩子函数，等于vue1.0中的ready
            this.$nextTick(function () {
                require ('../../static/libs/jquery.qrcode.min.js');
            })
       	},
		methods: {
			invita: function () {
				var auth = this.$route.query.auth;
				var username = this.$route.query.username;
//				 var auth = 'b74c8700-1c3e-4ebf-802f-0cfb3691924f';
//				 var username = '18758263215';
				var _this = this;
				_this.dis = true;
				setTimeout(function () {
					_this.dis = false;
				},500);
				_this.$http.post('/Product/User/showMyInvitation', {
						parameters: '{"authorization":"'+ auth +'","username":"'+ username +'"}'
				})
				.then(function(res) {
//						var source = this.$route.query.source;
						var url = res.data.inviteURL;
						var inviteId = res.data.inviteId;
						console.log(res.data)
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
						if ( res.data.end == 'ok' ) {

							if(isAndroid){
					          	JSInterface.showInviteFriendDialog(inviteId,url);
					          	return;
					        }
					      	if(isIOS){
								passValue(inviteId,url);
					          	loadURL("huoq://btnInvite");
					            return;
					      	}
						}
					})
					.catch(function(err) {
						console.log(err)
				})


			},
			invitation: function() {

				 var auth = this.$route.query.auth;
				 var username = this.$route.query.username;
//				var auth = 'b74c8700-1c3e-4ebf-802f-0cfb3691924f';
//				var username = '18758263215';
				var _this = this;
				_this.$http.post('/Product/User/showMyInvitation', {
						parameters: '{"authorization":"'+ auth +'","username":"'+ username +'"}'
					})
					.then(function(res) {
						alert('good')
						var w=$(".cont1 .ewm").width();
	        			var wpx=w+"px";
						if(res.data.end == 'ok'){
							alert(_this.friend)
							_this.invit = res.data.inviteId;
							_this.money = res.data.inviteEarn;
							_this.friend = res.data.inviteNum;
							$(".cont1 .ewm").height(wpx);
			                $(".ewm").qrcode({
			                    text: res.data.inviteURL,
			                    width:w,
			                    height:w
			                });
						}else{
							_this.mask = true;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			},
			nologin: function () {
				var source = this.$route.query.source;
				this.start(source);
			},
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>
