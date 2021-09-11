<template>
 <div>
   <el-input v-model="searchInfo.mobile" placeholder="手机号"></el-input>
    <el-input v-model="searchInfo.username" placeholder="会员名称"></el-input>
    <el-input v-model="searchInfo.cardId" placeholder="会员卡号"></el-input>


  <el-button type="primary" icon="el-icon-search" @click="look">查询</el-button>
   <el-button @click="reset">重置</el-button>
   <el-button type="primary" @click="insert">新增</el-button>
   <el-dialog title="添加会员" :visible.sync="flag" width="500px">
      <el-form
        :rules="rules"
        ref="pojoForm"
        :model="pojo"
        label-width="100px"
        label-positon="right"
        width="400px"
      >
        <el-form-item label="会员名称:" prop="username">
          <el-input v-model="pojo.username"></el-input>
        </el-form-item>
        <el-form-item label="会员手机号:" prop="mobile">
          <el-input v-model="pojo.mobile"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="pojo.email"></el-input>
        </el-form-item>
        <el-form-item label="昵称:" prop="nickname">
          <el-input v-model="pojo.nickname"></el-input>
        </el-form-item>
        <el-form-item label="余额:" prop="money">
          <el-input v-model="pojo.money"></el-input>
        </el-form-item>
        <el-form-item label="积分:" prop="integral">
          <el-input v-model="pojo.integral"></el-input>
        </el-form-item>
        <el-form-item label="会员卡号:" prop="cardID">
          <el-input v-model="pojo.cardId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="flag = false">取消</el-button>
          <el-button
            type="primary"
            @click="pojo._id ? updateData('pojoForm') : addData('pojoForm')"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
 <el-table
    :data="list"
    border
    style="width: 100%"
    >
    <el-table-column
      type="index"
      label="序号"
      width="100">
    </el-table-column>
    
    <el-table-column
      prop="username"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="外国名">
    </el-table-column>
   
    <el-table-column
      prop="mobile"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="money"
      label="余额">
    </el-table-column>
    <el-table-column
      prop="integral"
      label="积分">
    </el-table-column>
    <el-table-column
      prop="cardId"
      label="会员卡号">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template v-slot="scope">
        <el-button  type="text" size="small" @click="editVip(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="delVip(scope.row._id)">删除</el-button>
      </template>
       </el-table-column>
  </el-table>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
 </div>
</template>

<script>
import {vipList,add,editVip,delVip} from '@/api/list'
const payTypeOptions = [
  {
    type: 1,
    username: "现金",
  },
  {
    type: 2,
    username: "微信",
  },
  {
    type: 3,
    username: "支付宝",
  },
  {
    type: 4,
    username: "银行卡",
  },
];
export default {
 data () {
 return {
   list:[],
   total:0,
   pageSize:10,
   currentChange:1,
    searchInfo:{
      mobile:'',
      username:'',
      cardId:'',
      email:'',
      nickname:'',
      money:'',
      integral:'',
      cardId:''
    },
    flag:false,
    rules:{
      username:[
        {
          required:true,
          message:'名字是必须的'
        }
      ]
    },pojo:{
      id:null,
      mobile:'',
      username:'',
      cardId:'',
      email:'',
      nickname:'',
      money:'',
      integral:'',
      cardId:''
    }
 }
 },
filters:{
  filter(type){
const obj = payTypeOptions.find((obj) => obj.type == type);
      return obj ? obj.username : null;

  }
},
 components: {},
created(){
  this.vList()
},
 methods: {
   vList(){
     vipList(this.pageSize,this.currentChange,this.searchInfo).then(res=>{
       console.log(res);
       this.list=res.data
       this.total=res.total
       this.listx=this.list
     })
   },handleSizeChange(val){
     this.pageSize=val
     this.vList()
   },handleCurrentChange(val){
     this.currentChange=val
     this.vList()

   },look(){
      console.log(this.searchInfo);
      this.vList()
   },reset(){
     this.searchInfo={}
   },insert(){
     this.flag=true
   },addData(data){
      this.$refs[data].validate((valid) => {
        if(valid){
          add(this.pojo).then(res=>{
            console.log(res);
            if(res.flag){
              this.vList()
              this.flag=false
            }
              this.$message(res.message)

          })
        }

      })

   },editVip(info){
      this.pojo = info
      this.flag=true;
   },delVip(id){
     delVip(id).then(res=>{
      //  console.log(res);
       this.$message(res.message)
       this.vList()
     })
   },updateData(data){
    //  console.log(data);
      this.$refs[data].validate((valid) => {
        if(valid){
          editVip(this.pojo).then(res=>{
            if(res.flag){
              this.$message={
                message:res.message,
                type:'success'
              }
            }
            this.flag = false
             this.pojo={
                id:null,
                username:'',
                mobile:'',
                birthday:''
              }
          })
        }
      })

   }
 }
}
</script>

<style lang='scss' scoped >
.el-input{
  width: 200px !important;
}
</style>