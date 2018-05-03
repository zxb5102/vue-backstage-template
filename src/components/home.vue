<template>
  <div class="row">
    <div class="col-sm-12">
      hello home
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    created(){
      axios({
        url:'/getMsg'
      }).then(res=>{
        var data = res.data;
        console.log(data);
      })
    }
  }
</script>

<style scoped>

</style>