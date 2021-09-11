<template>
 <div class="header">
   <div class="logo">
     <a href="/main">
      <img src="@/assets/images/logo.png" alt="">
     </a>
   </div>
   <div class="user">
     <el-dropdown :hide-on-click="false" @command="handleDown">
      <span class="el-dropdown-link" style="color:#fff">
        {{$store.state.user.user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="ins">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
      
   </div>
   <el-dialog title="修改密码" :visible.sync="flag" width="500px">
        <el-form :rules="rules" :model="pwd" ref= 'pwdForm' label-width="100px" label-position="right" width="400px">
          <el-form-item label="原始密码" prop="oldPassword">
            <el-input v-model="pwd.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="pwd.newPassword"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="comfirmPassword">
            <el-input v-model="pwd.comfirmPassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitPwd">提交</el-button>
            <el-button @click="refs['pwdForm']=resetFields">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
 </div>
</template>

<script>
import {logout,oldPwd,updatePwd} from '@/api/login'
export default {
 data () {
   const validateOldPassword=(rule,value,callback)=>{
    oldPwd(this.user.id,value).then(res=>{
      if(res.flag){
        callback()
      }
      callback(res.error)
    })
  }
  const validateNewPassword=(rule,value,callback)=>{
    if(this.pwd.newPassword==this.pwd.comfirmPassword){
      callback()
    }else{
      callback('两次密码不一样')
    }
    
  }
 return {
   flag:false,
   user:localStorage.getItem('info'),
   pwd:{
     oldPassword:'',
     newPassword:'',
     comfirmPassword:''
   },rules:{
     oldPassword:[
       {
         required:true,
         message:'原始密码不能为空',
         trigger:'blur'
       },
       {
         validator: validateOldPassword
       }
     ],
     newPassword:[
       {
         required:true,
         message:'新密码不能为空',
         trigger:'blur'
       },
       {
         validator: validateNewPassword
       }
     ],
     comfirmPassword:[
       {
         required:true,
         message:'确认密码密码不能为空',
         trigger:'blur'
       },
       {
         validator: validateNewPassword
       }
     ]
   }
 }
 },
 components: {},
 methods: {
   
   handleDown(command){
     if(command==='ins'){
       this.flag=true
     }else if(command==='logout'){
      //  const token = localStorage.token
      //  logout(token).then(res=>{
      //    localStorage.removeItem('info')
      //    localStorage.removeItem('token')
      //     this.$message(res.message)
      //     this.$router.push('/login')
        
      //  })
      this.$store.dispatch('Logout').then(res=>{
        if(res.flag){
          this.$message(res.message)
          this.$router.push('/login')
        }
      })
     }
   },submitPwd(){
     updatePwd(this.userId,this.pwd.comfirmPassword).then(res=>{
       console.log(res);

     })
   }
 }
}
</script>

<style lang='scss' scoped >
.header{
  height: 60px;
  display: flex;
  justify-content:space-between;
  .logo{
    width: 60px;
    
    img{
      width: 100%;
    }
  }
  .user{
    color: #fff;
  }
}
</style>