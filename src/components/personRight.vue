<template>

	<!-- start of sidebar -->
    <aside class="span4 page-sidebar">

            <section class="widget">
                    <div class="support-widget">
                            <h3 class="title">个人中心</h3>
                            <img src=""  />
                            <p class="intro"> </p>
                    	
                    </div>
            </section>

            <section class="widget">
                    <h3 class="title">文章类别</h3>
                    <ul class="articles">
                            <li class="article-entry video">
                                    <h4><router-link to="/myList">技术(6)</router-link></h4>
                            </li>
                            <li class="article-entry video">
                                    <h4><a href="single.html">技术(6)</a></h4>
                            </li>
                            <li class="article-entry video">
                                    <h4><a href="single.html">技术(6)</a></h4>
                            </li>
                    </ul>
            </section>
            
            <section class="widget">
                    <h3 class="title">文章日期</h3>
                    <ul class="articles">
                            <li class="article-entry video">
                                    <h4><a href="single.html">2019年8月(6)</a></h4>
                            </li>
                            <li class="article-entry video">
                                    <h4><a href="single.html">2019年8月(6)</a></h4>
                            </li>
                            <li class="article-entry video">
                                    <h4><a href="single.html">2019年8月(6)</a></h4>
                            </li>
                    </ul>
            </section>


    </aside>                                        
    <!-- end of sidebar -->	
 
</template>

<script>
export default {
  name: 'personRight',
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
