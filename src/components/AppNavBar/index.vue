<template>
 <div class="nav-bar">
   <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      >
     <el-menu-item index="/main">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-submenu index="/vipManage">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>会员管理</span>
        </template><el-menu-item index="/vipList">会员列表</el-menu-item>
      </el-submenu>
       <el-submenu index="/Manger">
        <template slot="title">
          <i class="el-icon-truck"></i>
          <span>供应商管理</span>
        </template><el-menu-item index="/supplierList">供应商列表</el-menu-item>
      </el-submenu>
       <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-shopping-cart-full"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="/goodsList">商品列表</el-menu-item>
      </el-submenu>
       <el-submenu index="/people">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>员工管理</span>
        </template>
         <el-menu-item index="/employeesList">员工列表</el-menu-item>
      </el-submenu>
    </el-menu>
 </div>
</template>

<script>
export default {
 data () {
 return {
 }
 },

 components: {},

 methods: {}
}
</script>

<style lang='scss' scoped >
</style>