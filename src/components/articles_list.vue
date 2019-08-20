<template>
  <div class="hello">
<!-- Start of Page Container -->
    <div class="page-container">
            <div class="container">
                    <div class="row" >

 
 		<section class="widget" >

            <div class="tagcloud"  >
                  <button class="btn btn-mini" @click="query(label.id)" 
                  	v-for="label in labels" style="margin-left: 25px;width:105px;height: 35px;font-size: 20px;">{{label.name}}</button>
        
      
            </div>
    </section>

    <!-- start of page content -->
    <div class="span8 main-listing">
            <article class="format-standard type-post hentry clearfix" v-for="blog in blogs">
        <header class="clearfix">
                <h3 class="post-title">
                	<span @click="title(blog.id)">{{blog.title}}</span>
                </h3>

                <div class="post-meta clearfix">
                        <span class="date" >{{blog.ddate}}</span>
                        	<span class="category" @click="lable(blog.lid)">{{blog.name}}</span>
                        <span class="comments"><a href="#" >评论</a></span>
                        <span class="like-count">66</span>
                </div><!-- end of post meta -->

        </header>

        <p>{{blog.content}}
        	<a class="readmore-link" href="#">阅读更多</a>
        </p>
-
</article>


        <div id="pagination">
                <a href="#" class="btn active">1</a>
                <a href="#" class="btn">2</a>
                <a href="#" class="btn">3</a>
                <a href="#" class="btn">Next »</a>
                <a href="#" class="btn">Last »</a>
        </div>

            </div>
            <!-- end of page content -->
													
		<right></right>
													
                    </div>
            </div>
    </div>
    <!-- End of Page Container -->
  </div>
</template>

<script>
import right from '@/components/right'

export default {
  name: 'articles_list',
  data () {
    return {

    blogs:[],
    labels:[],
    //pages:[]
    }
  },
  components:{
    right
 	},
 	created(){
  	this.loadBlog();
  	this.label();
  	this.querypage();
  },
  //查博客
  methods:{
  	loadBlog:function(){
  			var titles = this.$route.query.titles; //获得title
  			var cids = this.$route.query.cid;
  	this.$http.get("http://localhost:8081/selectAllBlog",{
 			 params:{
  				title:titles,
  				cid:cids
  				}
  		}).then(
  			function(result){
  				this.blogs = result.body;	
  			},
  			function(error){
  				alert("博客加载数据失败"+error);
  			}
  		)
  	},
  	title:function(id){
  		alert(id);
  	},
  	//查询标签
  	label:function(){
  			var cids = this.$route.query.cid; //获得cid
  		
  	this.$http.get("http://localhost:8081/selectAllLabel",{
  		 params:{
  				cid:cids
  				}
  	}).then(
  			function(result){
  				this.labels = result.body;
  			},
  			function(error){
  				alert("标签加载数据失败"+error);
  			}
  		)
  	},
  	
  	//分类
  	query:function(id){
  		  this.$http.get("http://localhost:8081/selectAllBlog",{
  		  params:{
  				lid:id
  				}
  			}).then(
  			function(result){
  				this.blogs = result.body;
  			},
  			function(error){
  				alert("分类加载数据失败"+error);
  			}
  		)
  	}
  	
  	//分页
  	/*querypage:function(){
  			var titles = this.$route.query.titles; //获得title
  			var cids = this.$route.query.cid;
  	this.$http.get("http://localhost:8081/selectAllPage",{
 			 params:{
  				title:titles,
  				cid:cids
  				}
  		}).then(
  			function(result){
  				this.pages = result.body;	
  			},
  			function(error){
  				alert("分页加载数据失败"+error);
  			}
  		)
  	}*/
  	}
  	
  	}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
