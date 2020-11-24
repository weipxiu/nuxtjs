<template>
  <div class="container">
    <div>
      <h2>动态路由</h2>
      <ul>
        <li v-for="(item,index) in datalist" :key="index"><nuxt-link :to="'/detail/'+item.id">{{item.name}}</nuxt-link></li>
        <!-- 动态路由：新建detail目录，里面新建_id.vue模板，这个.vue文件名和上面:to传的参数名id一致即可 -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      datalist:[{
        id:1,
        name:'html'
      },
      {
        id:2,
        name:'css'
      },
      {
        id:3,
        name:'javascript'
      },
      {
        id:4,
        name:'nuxtjs'
      }]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
