<template>
  <div class="xinhua_bj">
    <div class="mask" v-if="mask" @touchmove.prevent>
      <div class="mask-content">
        <div class="login_bg"><img src="../assets/img/login_bg.png"/></div>
        <span>您还未登录，请先登录！</span>
        <p v-on:click="nologin()">点击登录</p>
      </div>
    </div>
    <div class="xianhua_box1">
      <img class="img_qiandao" src="../assets/img/qiandao_xinhua2.png" alt=""/>
      <span class="qiandao_left">当前积分<em>{{totalPoint}}</em></span>
      <button class="center_btn" v-bind:disabled="jin" @click="change()"><span class="qiandao_test">{{dianji}}</span>
      </button>
      <span class="qiandao_right">
					<router-link
            :to="{ path:'./integral_detail',query:{ source:this.$route.query.source,auth:this.$route.query.auth }}">
			    <div class="ji_btn">查看积分明细>></div>
			</router-link>
				</span>
    </div>
    <div class="xianhua_box2">
        <ul>
          <li v-on:click="toInviteFriend()">邀请好友可获<span class="color_text" > 双倍积分</span><span class="black_right"><img
            src="../assets/img/black_yao.png"></span>
          </li>
        </ul>
      </router-link>
    </div>
    <div class="xianhua_box3">
      <vue-event-calendar :events="demoEvents">
        <template scope="props">
          <div v-for="(event, index) in props.showEvents" class="event-item">
            <!-- 这里拿到的是传入的单个event所有数据 -->
            {{event}}
          </div>
        </template>
      </vue-event-calendar>
    </div>
    <div class="xianhua_box4">
      <h2 class="h2_center">奖励规则</h2>
      <ul>
        <li><img src="../assets/img/one.png" alt=""/>每日签到获得<span class="jifen_color">+10积分</span></li>
        <li><img src="../assets/img/two.png" alt=""/>每月累计签到7天，额外奖励<span class="jifen_color">+30积分+小宝箱</span></li>
        <li><img src="../assets/img/three.png" alt=""/>每月累计签到28天，额外奖励<span class="jifen_color">+200积分+大宝箱</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import common from "../assets/js/common.js"
  export default {
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
      }
    },
    created: function () {
      this.mSignInfomation();//定义方法
    },
    methods: {
      mSignInfomation: function () {
        var _this = this;
        var auth = _this.$route.query.auth;
        _this.$http.post('/Product/User/mSignInfomation', {
          parameters: '{"authorization":"' + auth + '"}'
        })
          .then(function (res) {
            if (res.data.end == 'ok') {
              if (res.data.isSign == 'yes') {
                _this.dianji = '已签到';
                _this.jin = true;
              } else {
                _this.jin = false;
              }
              _this.day = res.data.signDays;
              _this.totalPoint = res.data.totalPoint
            } else {
              _this.mask = true;
            }
          })
          .catch(function (err) {
            console.log(err)
          })

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
          })
            .then(function (res) {
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
            })
            .catch(function (err) {
              console.log(err)
            });
          this.bol = false
        } else {
          return false
        }
      }
    }
  }
</script>

<style>
  @import '../assets/css/help_center.css';
</style>
