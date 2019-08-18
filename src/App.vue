<template>
  <div id="app">
  	
  	<!--头开始-->
    <div class="header-wrapper">
			<header>
				<div class="container">
		
					<div class="logo-container">
						<!-- Website Logo -->
						<a href="index-2.html" title="Knowledge Base Theme">
							<img src="../static/images/logo.png" alt="Knowledge Base Theme">
						</a>
		
					</div>
		
					<!-- Start of Main Navigation -->
					<nav class="main-nav">
						<div class="menu-top-menu-container">
							<ul id="menu-top-menu" class="clearfix">
								<li class="current-menu-item">
									<router-link to="/">首页</router-link>
								</li>
								<li>
									<router-link to="/category_articles">发现</router-link>
								</li>
								<li>
									<a href="articles-list.html">写文章</a>
								</li>
								<li>
									<a href="home.html">我的</a>
									<ul class="sub-menu">
										<li>
											<a href="blue-skin.html">我的主页</a>
										</li>
										<li>
											<a href="green-skin.html">设置</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#" data-toggle="modal" data-target="#exampleModalCenter">
										Sign In
									</a>
								</li>
							</ul>
						</div>
		
					</nav>
					<!-- End of Main Navigation -->
		
				</div>
			</header>
		</div>
		<!--头结束-->
		
		<!--搜索开始-->
		<div class="search-area-wrapper">
		    <div class="search-area container">
		    				<router-link to="/hot_questions"><h3 class="search-header">Have a Question?</h3></router-link>
		            <p class="search-tag-line">If you have any question you can ask below or enter what you are looking for!</p>
		
		            <form id="search-form" class="search-form clearfix" method="get" action="#" autocomplete="off">
		                    <input class="search-term required" type="text" id="s" name="s" placeholder="Type your search terms here" title="* Please enter a search term!" />
		                    <input class="search-btn" type="submit" value="Search" />
		                    <div id="search-error-container"></div>
		            </form>
		    </div>
		</div>
		<!--搜索结束-->
		
		<router-view/>
		
		<!--脚开始-->
	  <footer id="footer-wrapper">
			<div id="footer" class="container">
				<div class="row">
		
					<div class="span3">
						<section class="widget">
							<h3 class="title">How it works</h3>
							<div class="textwidget">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
								<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
							</div>
						</section>
					</div>
		
					<div class="span3">
						<section class="widget">
							<h3 class="title">Categories</h3>
							<ul>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet,">Advanced Techniques</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet,">Designing in WordPress</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet,">Server &amp; Database</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet, ">Theme Development</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet,">Website Dev</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet,">WordPress for Beginners</a>
								</li>
								<li>
									<a href="#" title="Lorem ipsum dolor sit amet, ">WordPress Plugins</a>
								</li>
							</ul>
						</section>
					</div>
		
					<div class="span3">
						<section class="widget">
							<h3 class="title">Latest Tweets</h3>
							<div id="twitter_update_list">
								<ul>
									<li>No Tweets loaded !</li>
								</ul>
							</div>
						</section>
					</div>
		
					<div class="span3">
						<section class="widget">
							<h3 class="title">Flickr Photos</h3>
							<div class="flickr-photos" id="basicuse">
							</div>
						</section>
					</div>
		
				</div>
			</div>
			<!-- end of #footer -->
		
			<!-- Footer Bottom -->
			<div id="footer-bottom-wrapper">
				<div id="footer-bottom" class="container">
					<div class="row">
						<div class="span6">
							<p class="copyright">
								Copyright © 2013. All Rights Reserved by KnowledgeBase.Collect from
								<a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
							</p>
						</div>
						<div class="span6">
							<!-- Social Navigation -->
							<ul class="social-nav clearfix">
								<li class="linkedin">
									<a target="_blank" href="#"></a>
								</li>
								<li class="stumble">
									<a target="_blank" href="#"></a>
								</li>
								<li class="google">
									<a target="_blank" href="#"></a>
								</li>
								<li class="deviantart">
									<a target="_blank" href="#"></a>
								</li>
								<li class="flickr">
									<a target="_blank" href="#"></a>
								</li>
								<li class="skype">
									<a target="_blank" href="skype:#?call"></a>
								</li>
								<li class="rss">
									<a target="_blank" href="#"></a>
								</li>
								<li class="twitter">
									<a target="_blank" href="#"></a>
								</li>
								<li class="facebook">
									<a target="_blank" href="#"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- End of Footer Bottom -->
		
		</footer>
  	<!--脚结束-->
		
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
