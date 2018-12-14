<template>
    <div class="login-vue" :class="bgUrl">
        <div class="container">
            <p class="title">WELCOME</p>
            <div class="input-c">
                <Input prefix="ios-contact" placeholder="用户名" @on-blur="verifyAccount"/>
                <p class="error">{{accountError}}</p>
            </div>
            <div class="input-c">
                <Input type="password" prefix="md-lock" placeholder="密码" @on-blur="verifyPwd"/>
                <p class="error">{{pwdError}}</p>
            </div>
            <Button class="submit" type="primary" @click="submit">登陆</Button>
            <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            account: '',
            pwd: '',
            accountError: '',
            pwdError: ''
        }
    },
    computed: {
        bgUrl() {
            // 周一至周日 显示不同的背景
            return 'bg-url' + new Date().getDay()
        }
    },
    methods: {
        verifyAccount(e) {
            this.account = e.target.value 
            if (this.account !== 'admin') {
                this.accountError = '账号为admin'
            } else {
                this.accountError = ''
            }
        },
        verifyPwd(e) {
            this.pwd = e.target.value
            if (this.pwd !== 'admin') {
                this.pwdError = '密码为admin'
            } else {
                this.pwdError = ''
            }
        },
        register() {
            console.log('注册账号')
        },
        forgetPwd() {
            console.log('忘记密码')
        },
        submit() {
            if (this.account !== '' && this.pwd !== '' 
                && this.accountError === ''
                && this.pwdError === ''
                ) {
                this.$router.replace('index')
            } else {
                if (this.account !== 'admin') {
                    this.accountError = '账号为admin'
                } else {
                    this.accountError = ''
                }

                if (this.pwd !== 'admin') {
                    this.pwdError = '密码为admin'
                } else {
                    this.pwdError = ''
                }
            }
        }
    }
}
</script>

<style>
.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.bg-url0 {
    background-image: url(../../assets/bg00.jpg)
}
.bg-url1 {
    background-image: url(../../assets/bg01.jpg)
}
.bg-url2 {
    background-image: url(../../assets/bg02.jpg)
}
.bg-url3 {
    background-image: url(../../assets/bg03.jpg)
}
.bg-url4 {
    background-image: url(../../assets/bg04.jpg)
}
.bg-url5 {
    background-image: url(../../assets/bg05.jpg)
}
.bg-url6 {
    background-image: url(../../assets/bg06.jpg)
}
.login-vue .container {
    background: rgba(255, 255, 255, .5);
    width: 300px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-vue .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
}
.login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 200px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
    width: 200px;
}
.login-vue .account {
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
</style>


