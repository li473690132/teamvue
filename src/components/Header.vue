<template>
	<div>

		<!--头开始-->
    	<div class="header-wrapper">
			<header>
				<div class="container">
		
					<div class="logo-container">
						<!-- Website Logo -->
						<a href="index-2.html" title="Knowledge Base Theme">
							<img src="static/images/logo.png" alt="Knowledge Base Theme">
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
									<router-link to="/write_article">写文章</router-link>
								</li>
								<li>
									<router-link to="/tolist">文章列表</router-link>
								</li>
								<li>
									<router-link to="/person">个人中心</router-link>
								</li>
								<li>
									<router-link to="/login">登录/注册</router-link>
								</li>
							</ul>
						</div>
		
					</nav>
					<!-- End of Main Navigation -->
		
				</div>
			</header>
		</div>
		<!--头结束-->

	</div>
</template>

<script>
	export default {
		name: 'Header'

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>