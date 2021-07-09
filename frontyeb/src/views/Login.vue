<template>
    <div>
        <vue-particles
            color="#409EFF"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="6"
            linesColor="#409EFF"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push">
        </vue-particles>
        <el-form :rules="rules"
                 v-loading="loading"
                 element-loading-text="正在登录..."
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.8)"
                 ref="loginForm"
                 :model="loginForm"
                 class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" auto-complete="false" v-model="loginForm.username"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码"
                          style="width: 250px;margin-right: 5px"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
            <div class="copy">&copy;OriginalCoder</div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            captchaUrl: '/captcha?time=' + new Date(),
            loginForm: {
                username: 'admin',
                password: '123',
                code: ''
            },
            loading: false,
            checked: true,
            rules: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
            }
        }
    },
    methods: {
        updateCaptcha() {
            this.captchaUrl = '/captcha?time=' + new Date();
        },
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.postRequest('/login', this.loginForm).then(resp => {
                        this.loading = false;
                        if (resp) {
                            //存储用户token
                            const tokenStr = resp.obj.tokenHead + resp.obj.token;
                            window.sessionStorage.setItem('tokenStr', tokenStr);
                            //页面跳转
                            let path = this.$route.query.redirect;
                            this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
                        }
                    })
                } else {
                    this.$message.error('请输入所有字段！');
                    return false;
                }
            });
        }
    }
}
</script>

<style>
/*不显示滑动条*/
/*body::-webkit-scrollbar {display: none;}*/

/*粒子*/
#particles-js {
    width: 100%;
    height: calc(90% - 100px);
    position: absolute;
}

.loginContainer {
    position: relative;
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}

.el-form-item__content {
    display: flex;
    align-items: center;
}
.copy{
    color: #ccc;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
}
</style>