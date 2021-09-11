<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import {getList} from '@/api/test'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    
  },
  data(){
    return{
      items:{}
    }
  },
  methods:{
    list(){
      getList().then(res=>{
        console.log(res);
        this.items = res.data
      }).catch(error=>{
        console.log(error);
      })
    }
  },
  created(){
    this.list()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
