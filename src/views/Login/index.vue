<template>
 <div class="login">
   <el-card class="box-card" shadow="always" >
  <div slot="header" class="clearfix">
    <span>登录</span>
  </div>
  <div class="text item">
    
   <el-form class="form" label-width="80px" :model="loginF" :rules="loginRules" ref="loginForm">
      <el-form-item prop="mobile">
            <el-input prefix-icon="el-icon-phone" placeholder="请输入手机号" v-model="loginF.mobile"></el-input>

      </el-form-item>
      <el-form-item prop="code">
          <el-col :span="16">
            <el-input placeholder="请输入验证码" v-model="loginF.code"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button  @click="code" :disabled="flag" >{{msg}}</el-button>
          </el-col>
      </el-form-item>
      <el-form-item prop="chk">
        <el-checkbox v-model="loginF.chk" ref="chk">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="suc">登录</el-button>
      </el-form-item>
   </el-form>
  </div>
</el-card>
 </div>
</template>

<script>
import {login,loginInfo} from '@/api/login'
export default {
 data () {
   const validator = function (rule, value, callback) {
      if (!value) {
        callback(new Error("你必须无条件同意这些条款"))
      } else {
        // 需要调用callback() 无参数
        callback()
      }
    }
 return {
   num:10,
   flag:false,
   msg:'发送验证码',
   loginF:{
     mobile:'16666666666',
     code:'1223',
     chk:true
   },
   loginRules:{
     mobile:[
       {
         require:true,
         message:'手机号不能为空'
       },{
         pattern: /^1[3456789]\d{9}$/,
         message:'手机号格式不对'
       }
     ],
     code:[
       {
         require:true,
         message:'验证码不能为空'
       },{
         pattern:/^\d{4}$/,
         message:'验证码必须是四位数'
       }
     ],chk:[
       {
         validator
       }
     ]
   }
 }
 },
 components: {},

 methods: {
   code(){
       this.flag=true

     let timer=setInterval(() => {
       this.flag=true
        this.msg=this.num +'s后再次发送验证码'
        if(this.num<=0){
          this.flag=false
          this.num=10
          this.msg='发送验证码'
          clearInterval(timer)
          return
        }
        this.num--
     }, 1000);
   },suc(){
   this.$refs['loginForm'].validate(valid=>{
     if(valid){
      //  login(this.loginF.mobile,this.loginF.code).then(respone=>{
      //    if(respone.flag){

      //      loginInfo(respone.data.token).then(result=>{
      //        if(result.flag){
      //        localStorage.setItem("info",JSON.stringify(result.data))
      //        localStorage.setItem('token',respone.data.token)
      //        this.$router.push('/main')
      //        this.$message({
      //          message:'登录成功',
      //          type:'success'
      //        })
      //        }
      //      })
      //    }
      //  })
      this.$store.dispatch('Login',this.loginF).then(res=>{
        if(res.flag){
          this.$store.dispatch('GetUserInfo').then(res=>{
            if(res.flag){
          this.$router.push('/main')
            }
            this.$message({
               message:'登录成功',
               type:'success'
             })
          })
        }
        
      }).catch(err=>{
        console.log(err);
      })
     }
   })
  
 }
 },
}
</script>

<style scoped lang="scss">
.login{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/images/login_bg.jpg) no-repeat;
}
.text{
  margin-right: 58px;
}
</style>