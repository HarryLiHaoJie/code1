<template>
  <div class="share-container">
    <div class="theme">
      <img src="../assets/img/warp_yaoqing.png"/>
      <div class="cont cont1">
        <div class="bt bt1"><i class="um">{{ username1 }}</i>,邀您来赚钱！</div>
        <div class="bt bt2">
          <form action="post" class="form" id="userForm">
            <input type="text" maxLength="11" id="phoneNum" name="" placeholder="请输入手机号领取"/>
          </form>
        </div>
        <a href="javascript:void(0);" v-on:click="regist()" class="bt bt3">
          <img src="../assets/img/b3.png" alt="">
        </a>
      </div>
      <!--注册成功时显示-->
      <div class="mceng1 fixed1"></div>
      <div class="cont cont3" style="display:none">
        <div class="quan">
          欢迎加入新华金典，您的9999元理财劵已入账，快去查看吧！
        </div>
        <!-- <a href="javascript:void(0);" v-on:click="down()" class="bt bt4"><img src="../assets/img/b4.png" alt=""></a> -->
      </div>
<!--       <div class="mceng1 fixed"></div>
 -->
    <div class="login1 share-login1">
      <p id="sweetAlert">
        欢迎加入新华金典，您的9999元理财劵已入账，快去查看吧！
      </p>
      <button v-on:click="iconClose1()" id="confirm">确定</button>
    </div>
    </div>
    <!-- <button v-on:click="show()">clickMe</button> -->
    <div class="downapp">
      <img src="../assets/img/warp_yaoqing2.png"/>
      <img class="app" v-on:click="down()" src="../assets/img/warp_xiazai.png"/>
    </div>
    <!--注册提示框-->
    <div class="mceng fixed"></div>

    <div class="login share-login">
      <span class="icon icon-close" v-on:click="iconClose()"></span>
      <form id="registerForm" method="post">
        <input type="hidden" id="registPlatform" name="registPlatform" value="10">
        <input type="hidden" id="inviteId" name="inviteId">
        <p class="phone relative">
          <span class="icon icon-phone"></span>
          <input type="text" readOnly="readOnly" id="username" name="username" class="input"/>
          <!-- <span class="icon icon-clear"></span> -->
        </p>
        <p class="yzm relative">
          <span class="icon icon-yzm"></span>
          <input type="text" id="smsValidateCode" name="smsValidateCode" maxlength="6"
                 class="input" placeholder="请输入短信验证码"/>
          <span class="icon icon-clear"></span>
          <input type="button" id="getValidateCode" class="input downTime timeLows" v-on:click="getValidateCode()"
                 value="获取验证码"/>
        </p>
        <p class="pwd relative">
          <span class="icon icon-pwd"></span>
          <input type="password" class="input" placeholder="设置登录密码" id="password" name="password"/>
          <span class="icon icon-clear"></span>
          <!-- <span class="icon icon-close-eye"></span> -->
        </p>
        <p class="invitation-code relative">
          <span class="icon icon-code"></span>
          <input type="text" readOnly="readOnly" class="input" id="invite"/>
          <!-- <span class="icon icon-clear"></span> -->
        </p>
      </form>
      <button class="btn pub-btn" id="regist" v-on:click="wapRegisterUser()">注册并领取奖励</button>
    </div>
    <!--提示-->
    <div class="warn-prompt" id="warn">

    </div>
    <div id="imgwx">
      <img src="../assets/img/wxydy.png"/>
    </div>
  </div>
</template>

<script>
  import jquery from "../../static/libs/jquery-1.11.2.min.js"
  export default {
    name: 'hello',
    data: function () {
      return {
        username1: this.$route.query.username
      }
    },
    mounted: function () {    //钩子函数，等于vue1.0中的ready
      this.$nextTick(function () {
        require('../assets/js/com.js');
      })
    },
    methods: {
      iconClose: function () {
        $(".mceng.fixed,.share-login,.icon-close").hide();
      },
      iconClose1: function () {
        $(".mceng.fixed,.share-login1").hide();
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
        this.$http.get('/Product/versionUpdate?type=1&version=0.0')
          .then(function (res) {
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
              }
              else {
                window.location.href = "https://itunes.apple.com/us/app/%E6%96%B0%E5%8D%8E%E9%87%91%E5%85%B8/id1267250937?l=zh&ls=1&mt=8";
              }
            }
          })
          .catch(function (err) {
            console.log(err)
          });
      },
      regist: function () {
        var username = $("#phoneNum").val();
        if (!(/^[1][345789][0-9]{9}$/.test(username))) {
          $("#warn").text("手机号码格式错误");
          this.warn_show_hide();
          return;
        }
        $("#username").val(username);
        $("#password").val("");
        $("#smsValidateCode").val("");
        $(".mceng.fixed,.share-login,.icon-close").show();
        $(".invitation-code input").val(this.$route.query.inviteId)
      },
      getValidateCode: function () {
        var i = 120;
        var _this = this;
        var intervalId = "";
        var isGoIn = true;
        if (!isGoIn)
          return false;
        var username = $("#username").val(); //手机号
        if (!(/^[1][345789][0-9]{9}$/.test(username))) {
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
                console.log(wait)
              } else {
                o.attr("disabled", true);
                o.val("重新发送(" + wait + ")");
                wait--;
                setTimeout(function () {
                    time(o);
                  },
                  1000)
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
          console.log(err)
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
        if (!(/^\w{6,16}$/.test(password1))) {
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
            $(".mceng.fixed,.share-login1,.icon-close").show();
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
          console.log(err)
        });
      },
      show:function(){
       

      }
    }
  }
</script>

<style>
  @import '../assets/css/help_center.css';
  @import '../assets/css/login.css';
</style>
