<template>
 <div>
   <el-container>
     <el-header height="60px">
       <app-header></app-header>
       <!-- Header content -->
     </el-header>
     <el-container >
       <el-aside width="200px">
         <app-nav-bar></app-nav-bar>
         <!-- Aside content -->
       </el-aside>
       <el-container >
         <el-main height="">
           <breadcrumb></breadcrumb>
        <router-view></router-view>
           <!-- Main content -->
         </el-main>
       </el-container>
     </el-container>
   </el-container>
   
 </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppNavBar from '@/components/AppNavBar'
import Breadcrumb from '@/components/Breadcrumb'
export default {
 data () {
 return {
 }
 },

 components: {
   AppHeader,
   AppNavBar,
   Breadcrumb
 },

 methods: {
   main(){
     getList().then(res=>{
     }).catch(error=>{
       console.log(error);
     })
   }
 },created(){
  //  this.main()
 }

}
</script>

<style lang='scss' scoped >
.el-header{
  background-color:lightslategray;
  line-height: 60px;
}
.el-aside{
  background-color:#545c64;
  height: calc(100vh - 60px);
}
</style>