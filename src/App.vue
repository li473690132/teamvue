<template>
	
  <div id="app">
  	
  	<Header v-show="path=='/'"></Header>
  	<Header v-show="path=='/category_articles'"></Header>
  	<Header v-show="path=='/write_article'"></Header>
  	<Header v-show="path=='/tolist'"></Header>
  	<Header v-show="path=='/content'"></Header>
  	<Header v-show="path=='/hot_questions'"></Header>
  	
  	<search v-show="path=='/tolist'"></search>
  	
  	
		<router-view/>
		
	<Footer v-show="path=='/'"></Footer>
  	<Footer v-show="path=='/category_articles'"></Footer>
  	<Footer v-show="path=='/write_article'"></Footer>
  	<Footer v-show="path=='/tolist'"></Footer>
  	<Footer v-show="path=='/content'"></Footer>
  	<Footer v-show="path=='/person'"></Footer>
  	<Footer v-show="path=='/myList'"></Footer>
  	<Footer v-show="path=='/myArticles'"></Footer>
	<Footer v-show="path=='/hot_questions'"></Footer>
		
  </div>
  
</template>

<script>
	import Footer from '@/components/Footer'
	import Header from '@/components/Header'
	import search from '@/components/search'
	
	export default {
	  name: 'App',
	  data(){
            return{
                path:''
            }
    },
		
		components:{
		  	Header,
		  	Footer,
		  	search
		},
		// 判断路由
		/*created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
		  mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom
		     节点进行一些需要的操作。*/
    mounted() {
      this.path = this.$route.path;
      /*console.log(this.$route.path)*/
    },
    //监测Vue实例上的数据变动
    watch:{
        $route(to,from){
           this.path = to.path
        }
    }
	}
</script>

<style>

</style>
