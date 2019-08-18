<template>

				<!-- start of sidebar -->
        <aside class="span4 page-sidebar">

                <section class="widget">
                        <div class="support-widget">
                                <h3 class="title">个人中心</h3>
                                <ul class="articles">
                                 <li class="article-entry standard">
                                        <h4><a href="single.html">写文章</a></h4>
                                        
                                </li>
                                <li class="article-entry standard">
                                        <h4><a href="single.html">提问题</a></h4>
                                        
                                </li>
                                
                                </ul>
                        </div>
                </section>


                <section class="widget">
                				<router-link to="/tolist"><h3 class="title">热门文章</h3></router-link>
                        <ul class="articles">
                                <li class="article-entry standard">
                                        <h4><a href="single.html">华为鸿蒙系统爆出惊天骗局</a></h4>
                                        <span class="article-meta">25 Feb, 2013 in <a href="#" title="View all posts in Server &amp; Database">Server &amp; Database</a></span>
                                        <span class="like-count">66</span>
                                </li>
                                <li class="article-entry standard">
                                        <h4><a href="single.html">程序员！别再埋头学python了</a></h4>
                                        <span class="article-meta">24 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                        <span class="like-count">15</span>
                                </li>
                                <li class="article-entry video">
                                        <h4><a href="single.html">阿里程序员面试华为被拒，因学历太低</a></h4>
                                        <span class="article-meta">23 Feb, 2013 in <a href="#" title="View all posts in Website Dev">Website Dev</a></span>
                                        <span class="like-count">8</span>
                                </li>
                                <li class="article-entry image">
                                        <h4><a href="single.html">为什么程序员996多猝死</a></h4>
                                        <span class="article-meta">22 Feb, 2013 in <a href="#" title="View all posts in Advanced Techniques">Advanced Techniques</a></span>
                                        <span class="like-count">6</span>
                                </li>
                        </ul>
                </section>



                <section class="widget"><h3 class="title">分类</h3>
                        <ul>	
                        		<dl class="toggle clearfix">
                            				<dt>
                                    	<li>
                                    		<router-link to="/tolist">Java</router-link>
                                    	</li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                	<router-link to="/tolist">Java基础</router-link>
                                                	<router-link to="/tolist">Java基础</router-link>
                                                	<router-link to="/tolist">Java基础</router-link>
                                                	<router-link to="/tolist">Java基础</router-link>
                                                	<router-link to="/tolist">Java基础</router-link>
                                                </div>
                                        </section>
                                    </dd>
                                    <dt>
                                    	<li><a href="#" title="Lorem ipsum dolor sit amet,">Java</a> </li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                </div>
                                        </section>
                                    </dd>
                                    <dt>
                                    	<li><a href="#" title="Lorem ipsum dolor sit amet,">Java</a> </li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                </div>
                                        </section>
                                    </dd>
                                    <dt>
                                    	<li><a href="#" title="Lorem ipsum dolor sit amet,">Java</a> </li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                </div>
                                        </section>
                                    </dd>
                                    <dt>
                                    	<li><a href="#" title="Lorem ipsum dolor sit amet,">Java</a> </li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                </div>
                                        </section>
                                    </dd>
                                    <dt>
                                    	<li><a href="#" title="Lorem ipsum dolor sit amet,">Java</a> </li>
                                    </dt>
                                    <dd>
                                    	<section class="widget">
                                                <div class="tagcloud">
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                        <a href="#" class="btn btn-mini">java基础</a>
                                                </div>
                                        </section>
                                    </dd>
                               </dl>
                        </ul>
                </section>

        </aside>
        <!-- end of sidebar -->
                               
  </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
