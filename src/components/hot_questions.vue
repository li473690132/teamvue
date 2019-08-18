<template>
  <div class="hello">
  	
  	<search></search>
  	
    <!-- Start of Page Container -->
    <div class="page-container">
            <div class="container">
                    <div class="row">

                            <!-- start of page content -->
                            <div class="span8 page-content">

                                    <article class=" page type-page hentry clearfix">
                                            <h1 class="post-title"><a href="#">热帖</a></h1>
                                    </article>

                                    <div class="faqs clearfix">

                                            <article class="faq-item active">
                                                    <span class="faq-icon"></span>
                                                    <h3 class="faq-question">
                                                            <a href="#">不刷新页面如何进行实时更新数据？</a>
                                                            
                                                    </h3>
                                                    <div class="faq-answer">
                                                            <p>我现在有个页面A ，里面有个 label ，调取数据库某个表数据  ， 客户在页面B添加数据之后   页面A的label自动变成客户最新添加的数据，之前用了定时刷新  每隔多少秒刷新一次页面 但是用户体验太差了，怎么才能在不刷新页面的情况下  让label值第一时间改变？请大神帮帮我这个新手吧</p>
                                                            <ul class="articles">
                                                                 <li class="article-entry standard">
                                                                        <h4><a href="#">评论</a></h4>
                                                                        
                                                                </li>
                                                            </ul>
                                                    </div>
                                            </article>

                                            <article class="faq-item">
                                                    <span class="faq-icon"></span>
                                                    <h3 class="faq-question">
                                                            <a href="#">使用tomcat服务器，时不时出现500错误，怎么解决，求助</a>
                                                    </h3>
                                                    <div class="faq-answer">
                                                            <p>新人，第一次使用云服务建网站，运行很正常，不过时不时出现500错误。然后刷新后又正常了，百度了下好像是服务器不稳定所至。完全不知道怎么办，求助。</p>
                                                    </div>
                                            </article>
                                            <article class="faq-item">
                                                    <span class="faq-icon"></span>
                                                    <h3 class="faq-question">
                                                            <a href="#">使用tomcat服务器，时不时出现500错误，怎么解决，求助</a>
                                                    </h3>
                                                    <div class="faq-answer">
                                                            <p>新人，第一次使用云服务建网站，运行很正常，不过时不时出现500错误。然后刷新后又正常了，百度了下好像是服务器不稳定所至。完全不知道怎么办，求助。</p>
                                                    </div>
                                            </article>

                                            <article class="faq-item">
                                                    <span class="faq-icon"></span>
                                                    <h3 class="faq-question">
                                                            <a href="#">使用tomcat服务器，时不时出现500错误，怎么解决，求助</a>
                                                    </h3>
                                                    <div class="faq-answer">
                                                            <p>新人，第一次使用云服务建网站，运行很正常，不过时不时出现500错误。然后刷新后又正常了，百度了下好像是服务器不稳定所至。完全不知道怎么办，求助。</p>
                                                    </div>
                                            </article>

                                            <article class="faq-item">
                                                    <span class="faq-icon"></span>
                                                    <h3 class="faq-question">
                                                            <a href="#">使用tomcat服务器，时不时出现500错误，怎么解决，求助</a>
                                                    </h3>
                                                    <div class="faq-answer">
                                                            <p>新人，第一次使用云服务建网站，运行很正常，不过时不时出现500错误。然后刷新后又正常了，百度了下好像是服务器不稳定所至。完全不知道怎么办，求助。</p>
                                                    </div>
                                            </article>
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
	  name: 'hot_questions',
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
