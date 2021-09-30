<template>
    <div class="login_main">
        <div class="login_box">
            <!-- 登录框图标 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt=" ">
            </div>
            <!-- 登录表单 -->
            <el-form ref="loginForm" :model="loginForm" label-width="20px" class="from_input">
                <!-- 用户名 -->
                <el-form-item prop="admain" :rules="[{required:true,message:'请输入用户名',trigger:'blur'}]">
                    <el-input v-model="loginForm.admain" placeholder="用户名">
                        <template #prefix>
                            <i class="el-input__icon el-icon-message"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password" :rules="[{required:true,message:'请输入密码',trigger:'blur'}]">
                    <el-input v-model="loginForm.password" placeholder="密码" show-password>
                        <template #prefix>
                            <i class="el-input__icon el-icon-bell"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    <el-button type="info" @click="getdataForm('loginForm')">获取数据</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { ElMessage } from 'element-plus'
    export default {
        data() {
            return{
                loginForm: {
                    admain: 'ripshun',
                    password: '',
                },
            }
        },
        methods: {
            getdataForm(formName) {
                const url = "/placement"    
                this.$refs[formName].validate(async valid => {
                    if (valid) {
                        await this.$http.get(url)
                        .then(function(res){
                            console.log(res.data)
                            ElMessage({
                                message:'Getdata Success!',
                                type:'success',
                            })
                        })
                        .catch(function (err){
                            console.log('failed',err)
                        })
                    } 
                    else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            submitForm(formName) {
                const from = this.loginForm
                if (from.admain == 'ripshun' && from.password == '123'){
                    window.sessionStorage.setItem("token",from.password)
                    this.$router.push('/home')
                }
                else{
                    ElMessage({
                        message:'password error!',
                        type:'error',
                    })
                }
            },
        },
    }
</script>

<style lang="less" scoped>
.login_main{
    background-color: #2b4b6b;
    height: 100%;
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .avatar_box{
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }

        .from_input{
            position: absolute;
            bottom: 80px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            .btns{
                position: absolute;
                right: 0px;
                padding: 0px 20px;
            }
        }

    }
}
</style>
