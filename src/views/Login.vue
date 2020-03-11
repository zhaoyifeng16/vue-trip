<template>
  <div class="login">
    <Back></Back>
    <div class="bg">
    </div>
    <div class="welcome">
      <h1>欢迎回来</h1>
      <h2>请在下面表格中输入您的凭据</h2>
    </div>
    <div class="login-input-bg">
      <div class="inputs">
        <div class="email item">
          <label for="email">电子邮箱或用户名</label>
          <input type="text" name="" id="email" placeholder="输入邮箱地址" v-model="email">
        </div>
        <div class="pwd item">
          <label for="pwd">密码</label>
          <div class="pwd-input">
            <input type="password" name="" id="pwd" placeholder="输入密码" v-model="pwd">
            <p>忘记？</p>
          </div>
        </div>
      </div>
      <div class="btn btn-login" @click="login">登录</div>
    </div>
    <div class="to-reg">
      没有账户吗？<span>立即注册</span>
    </div>
  </div>
</template>

<script>
  import Back from "../components/Back";
  import api from "../api"
  import {mapMutations} from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        email: "",
        pwd: ""
      }
    },
    methods: {
      ...mapMutations(["setToken"]),
      login() {
        if (this.email == "" || this.pwd == "") {
          console.log("输入密码");
          this.$toast("请输入用户名和密码")
          return
        }
        let userInfo = {
          email: this.email,
          pwd: this.pwd
        }
        api.login(userInfo).then(data => {
          let {code, token} = data.data;
          if (code) {
            this.$toast("用户名或密码错误")
          } else {
            this.setToken(token)
            this.$router.push("/my");
          }
        })
      }
    },

    components: {
      Back
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixins.scss";

  .login {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fafafa;
    z-index: 1;
  }

  .bg {
    background-image: url("../assets/login-bg.png");
    position: fixed;
    width: 100%;
    padding-top: 8.4rem;
    z-index: -1;
    background-size: cover;
  }

  .welcome {
    padding-top: .34rem;
    text-align: center;

    h1 {
      line-height: .5rem;
      font-size: .60rem;
      color: #203152;
    }

    h2 {
      margin-top: .24rem;
      line-height: .24rem;
      font-size: .28rem;
      color: #7c8698;
    }
  }

  .login-input-bg {
    @include sidePadding;
    margin-top: 3.3rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: .16rem;
    padding-bottom: 1.36rem;
    position: relative;

    .inputs {
      @include sidePadding;

      .item {
        display: flex;
        flex-direction: column;
        padding-top: .29rem;
        padding-bottom: .54rem;
        border-bottom: 2px solid #e1e1e1;
        font-weight: 900;

        label {
          line-height: .62rem;
          color: #203152;
        }

        input {
          border: none;
          background-color: transparent;
        }

        .pwd-input {
          display: flex;

          input {
            flex: 1;
          }

          p {
            color: #5680fa;
            font-size: .22rem;
          }
        }
      }
    }

    .btn {
      background-color: #5680fa;
      border-radius: .6rem;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 10px 10px #5680fa;

      &.btn-login {
        width: 5.90rem;
        line-height: 1.1rem;
        position: absolute;
        bottom: -0.55rem;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 47px 90px 6px rgba(86, 128, 250, 0.5);
      }
    }
  }

  .to-reg {
    margin-top: 1.3rem;
    text-align: center;
    line-height: .3rem;
    font-size: .22rem;

    span {
      color: #5680fa;
    }
  }

</style>