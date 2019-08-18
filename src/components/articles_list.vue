<template>
  <div class="hello">
  	
  	<search></search>
  	
    <!-- Start of Page Container -->
                <div class="page-container">
                        <div class="container">
                                <div class="row">

                                        <!-- start of page content -->
                                        <div class="span8 main-listing">

                                                <article class="format-standard type-post hentry clearfix">

                                                        <header class="clearfix">

                                                                <h3 class="post-title">
                                                                		<router-link to="/content">将WordPress与您的网站集成</router-link>
                                                                </h3>

                                                                <div class="post-meta clearfix">
                                                                        <span class="date">2013年2月25日</span>
                                                                        <span class="category"><a href="#" title="View all posts in Server &amp; Database">服务器和数据库</a></span>
                                                                        <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 评论</a></span>
                                                                        <span class="like-count">66</span>
                                                                </div><!-- end of post meta -->

                                                        </header>

                                                        <p>
                                                        	我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事情，从不停顿，永无止境。
                                                        	然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个。。。
                                                        	<a class="readmore-link" href="http://knowledgebase.inspirythemes.com/integrating-wordpress-with-your-website/">阅读更多</a>
                                                        </p>

                                                </article>

                                                <article class="format-standard type-post hentry clearfix">

                                                        <header class="clearfix">

                                                                <h3 class="post-title">
                                                                        <a href="single.html">将WordPress与您的网站集成</a>
                                                                </h3>

                                                                <div class="post-meta clearfix">
                                                                        <span class="date">2013年2月25日</span>
                                                                        <span class="category"><a href="#" title="View all posts in Server &amp; Database">服务器和数据库</a></span>
                                                                        <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 评论</a></span>
                                                                        <span class="like-count">66</span>
                                                                </div><!-- end of post meta -->

                                                        </header>

                                                        <p>
                                                        	我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事情，从不停顿，永无止境。
                                                        	然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个。。。
                                                        	<a class="readmore-link" href="http://knowledgebase.inspirythemes.com/integrating-wordpress-with-your-website/">阅读更多</a>
                                                        </p>

                                                </article>

                                                <article class="format-standard type-post hentry clearfix">

                                                        <header class="clearfix">

                                                                <h3 class="post-title">
                                                                        <a href="single.html">将WordPress与您的网站集成</a>
                                                                </h3>

                                                                <div class="post-meta clearfix">
                                                                        <span class="date">2013年2月25日</span>
                                                                        <span class="category"><a href="#" title="View all posts in Server &amp; Database">服务器和数据库</a></span>
                                                                        <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 评论</a></span>
                                                                        <span class="like-count">66</span>
                                                                </div><!-- end of post meta -->

                                                        </header>

                                                        <p>
                                                        	我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事情，从不停顿，永无止境。
                                                        	然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个。。。
                                                        	<a class="readmore-link" href="http://knowledgebase.inspirythemes.com/integrating-wordpress-with-your-website/">阅读更多</a>
                                                        </p>

                                                </article>

                                                
                                                <article class="format-standard type-post hentry clearfix">

                                                        <header class="clearfix">

                                                                <h3 class="post-title">
                                                                        <a href="single.html">将WordPress与您的网站集成</a>
                                                                </h3>

                                                                <div class="post-meta clearfix">
                                                                        <span class="date">2013年2月25日</span>
                                                                        <span class="category"><a href="#" title="View all posts in Server &amp; Database">服务器和数据库</a></span>
                                                                        <span class="comments"><a href="#" title="Comment on Integrating WordPress with Your Website">3 评论</a></span>
                                                                        <span class="like-count">66</span>
                                                                </div><!-- end of post meta -->

                                                        </header>

                                                        <p>
                                                        	我们中的许多人工作在无休止的任务，浏览器任务，社交媒体，电子邮件，会议，从一件事情到另一件事情，从不停顿，永无止境。
                                                        	然后这一天结束了，我们筋疲力尽，而且我们往往很少有人表现出来。然后我们开始下一个。。。
                                                        	<a class="readmore-link" href="http://knowledgebase.inspirythemes.com/integrating-wordpress-with-your-website/">阅读更多</a>
                                                        </p>

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
	import search from '@/components/search'
	
	export default {
	  name: 'articles_list',
	  data () {
	    return {
	      msg: 'Welcome'
	    }
	  },
	  components:{
	    right,
	    search
	 	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
